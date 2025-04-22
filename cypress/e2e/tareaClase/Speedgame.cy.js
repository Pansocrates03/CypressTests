
describe('Speedgame', () => {
    beforeEach(() => {
        cy.visit('https://thelab.boozang.com')
    })

    it('Enter the speed game', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Speed Game').click()
        cy.contains('Start').click()
        cy.contains('End').click()
    })

    it('Wait Game', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Speed Game').click()
        cy.contains('Start').click()
        cy.wait(5) // Wait for 5 seconds
        cy.contains('End').click()
    })
    
    it('Yellow or Blue', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Yellow').click()
        cy.contains('Generate').click()
        cy.get('.color').then(($color) => {
            const color = $color.text().trim()
            if (color === 'Yellow') {
                cy.log('The color is Yellow')
                cy.get('.form-btn yellow').click()
            } else if (color === 'Blue') {
                cy.get('.form-btn blue').click()
            } else {
                cy.log('The color is neither Yellow nor Blue')
            }
        })
    })

    it('Sorted List', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Sorted list').click()
        cy.get('.add').click()
        cy.wait(1000)
        cy.get('input').type('Apple')
        cy.get('.add').click()
        cy.wait(1000)
        cy.get('input').type('Apple')
        cy.get('.add').click()
        cy.wait(1000)
    })

    it('Form Fill', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Form Fill').click()
        cy.fixture('form.json').then((data) => {
            cy.get('input[name="firstname"]').type(data.firstname)
            cy.get('input[name="lastname"]').type(data.lastname)
            cy.get('input[name="email"]').type(data.email)
            cy.get('input[name="password"]').type(data.password)
        })
        cy.get(".add").click()
    })



    it('Cat Shelter', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Cat Shelter').click()
        cy.contains("Add Cat").click()
        cy.wait(1000)
        cy.fixture("cats.json").then((cats) => {
            // Agregamos al primer gato
            cy.get('input[name="name"]').type(cats[0].name)
            cy.get('textarea[name="description"]').type(cats[0].description)
            cy.get('input[value="outside"]').click()
            cy.contains('Add Cat').click()
            // Agregamos al segundo
            cy.contains('Add Cat').click()
            cy.get('input[name="name"]').type(cats[1].name)
            cy.get('textarea[name="description"]').type(cats[2].description)
            cy.get('input[value="outside"]').click()
            cy.contains('Add Cat').click()
        })
        
    })

    it('Concatenate Strings', () => {
        cy.get('.veggie_burger').click()
        cy.contains('Concat strings').click()

        cy.contains('Generate strings').click()
        cy.get('.string1').invoke('text').then((s1) => {
            cy.get('.string2').invoke('text').then((s2) => {
                cy.get('input[name="strings"]').type(s1 + s2)
            })
        })
        cy.contains('Submit string').click()
    })
})

