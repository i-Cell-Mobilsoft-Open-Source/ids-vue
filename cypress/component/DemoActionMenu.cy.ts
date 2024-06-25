import '../support/commands';
import ActionMenu from '../../src/demo/DemoActionMenu.vue';
import actionMenuTestData from '../data/actionMenuTestData';

describe('Action Menu Test', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1000, 720)
    });

    it('Tests the Action Menu component', () => {
      cy.mount(ActionMenu)
      cy.contains('h2', 'Action Menu')
        .should('have.css', 'color', 'rgb(33, 53, 71)');
    });

    //Button properties
    it('Check the color of the Button', () => {
      cy.mount(ActionMenu);
      cy.contains('menu')
        .should('have.css', 'color', actionMenuTestData.white);
    });

    it('Check the backgrounColor of the Button', () => {
      cy.mount(ActionMenu);
      cy.get('div > button')
        .should('have.css', 'backgroundColor', actionMenuTestData.enabledBgColors);
    });

    it('Check radius of the button', () => {
      cy.mount(ActionMenu)
      cy.get('div > button')
        .should('have.css', 'borderRadius', actionMenuTestData.buttonRadius)
    });

    it('Check padding of the button', () => {
      cy.mount(ActionMenu)
      cy.get('div > button')
        .should('have.css', 'paddingBottom', actionMenuTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingLeft', actionMenuTestData.buttonLeftRightPadding)
        .should('have.css', 'paddingTop', actionMenuTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingRight', actionMenuTestData.buttonLeftRightPadding)
    });

    it('Check gap of the button', () => {
      cy.mount(ActionMenu)
      cy.get('div > button')
        .should('have.css', 'columnGap', actionMenuTestData.ButtonGap)
        .should('have.css', 'rowGap', actionMenuTestData.ButtonGap)
    });

    it('Check the button properities', () => {
      cy.mount(ActionMenu)
      cy.get('div > button')
        .should('have.css', 'minWidth', actionMenuTestData.minWidth)
        .should('have.css', 'fontWeight', actionMenuTestData.fontWeight)
        .should('have.css', 'display', actionMenuTestData.displayButton)
        .should('have.css', 'justify-content', actionMenuTestData.justifyContent)
        .should('have.css', 'align-items', actionMenuTestData.alignButtonItems)
        .should('have.css', 'height', actionMenuTestData.height)
        .should('have.css', 'font-size', actionMenuTestData.fontSize)
        .should('have.css', 'line-height', actionMenuTestData.lineHeight)
    });

    it('Check that the Menu button is clickable', () => {
      cy.mount(ActionMenu)
      cy.contains('menu').click()
    });

    //Action Panel properties
    it('Check the panel properties after clicked the button', () => {
      cy.mount(ActionMenu)
      cy.contains('menu').click()
      cy.get('.elevated')
        .should('have.css', 'gap', actionMenuTestData.gap)
        .should('have.css', 'display', actionMenuTestData.display)
        .should('have.css', 'flex-direction', actionMenuTestData.flexDirection)
        .should('have.css', 'align-items', actionMenuTestData.alignItems);
    });

    it('Check the backgrounColor of the Panel', () => {
      cy.mount(ActionMenu);
      cy.contains('menu').click()
      cy.get('.elevated')
        .should('have.css', 'backgroundColor', actionMenuTestData.white);
    });

    it('Check radius of the Panel', () => {
      cy.mount(ActionMenu)
      cy.contains('menu').click()
      cy.get('.elevated')
        .should('have.css', 'borderBottomLeftRadius', actionMenuTestData.radius)
        .should('have.css', 'borderBottomRightRadius', actionMenuTestData.radius)
        .should('have.css', 'borderTopLeftRadius', actionMenuTestData.radius)
        .should('have.css', 'borderTopRightRadius', actionMenuTestData.radius)
    });

    it('Check padding of the Panel', () => {
      cy.mount(ActionMenu)
      cy.contains('menu').click()
      cy.get('.elevated')
        .should('have.css', 'paddingBottom', actionMenuTestData.padding)
        .should('have.css', 'paddingLeft', actionMenuTestData.padding)
        .should('have.css', 'paddingTop', actionMenuTestData.padding)
        .should('have.css', 'paddingRight', actionMenuTestData.padding)
    });

    it('Check gap of the Panel', () => {
      cy.mount(ActionMenu)
      cy.contains('menu').click()
      cy.get('.elevated')
        .should('have.css', 'columnGap', actionMenuTestData.gap)
        .should('have.css', 'rowGap', actionMenuTestData.gap)
    });

    it('Check box-shadow of the Panel', () => {
      cy.mount(ActionMenu)
      cy.contains('menu').click()
      cy.get('.elevated')
        .should('have.css', 'boxShadow', actionMenuTestData.boxShadow)
    });
  });
});