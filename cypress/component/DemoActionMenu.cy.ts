/// <reference types="cypress"/>
import '../support/commands';
import ActionMenu from '../../src/demo/DemoActionMenu.vue';
import actionMenuTestData from '../data/actionMenuTestData';

describe('Action Menu Test', () => {
  xit('Tests the Action Menu component', () => {
    cy.mount(ActionMenu);
    cy.contains('h2', 'Action Menu');  });
  });

  xit('Check the Action Menu color', () => {
    cy.mount(ActionMenu);
    cy.get('h2').should('have.css', 'color', 'rgb(33, 53, 71)');
  });
//Button tulajdonságok
  xit('Check the color of the Button', () => {
    cy.mount(ActionMenu);
    cy.contains('menu').should('have.css', 'color', actionMenuTestData.white);
  });

  xit('Check the backgrounColor of the Button', () => {
    cy.mount(ActionMenu);
    cy.get('div > button').should('have.css', 'backgroundColor', actionMenuTestData.enabledBgColors);
  });
  
  xit('Check radius of the button', () => {
    cy.mount(ActionMenu)
    cy.get('div > button').should('have.css', 'borderRadius', actionMenuTestData.buttonRadius)
  });

  xit('Check padding of the button', () => {
    cy.mount(ActionMenu)
    cy.get('div > button')
    .should('have.css', 'paddingBottom', actionMenuTestData.buttonTopBottomPadding)
    .should('have.css', 'paddingLeft', actionMenuTestData.buttonLeftRightPadding)
    .should('have.css', 'paddingTop', actionMenuTestData.buttonTopBottomPadding)
    .should('have.css', 'paddingRight', actionMenuTestData.buttonLeftRightPadding)
  });

  xit('Check gap of the button', () => {
    cy.mount(ActionMenu)
    cy.get('div > button').should('have.css', 'columnGap', actionMenuTestData.ButtonGap)
    cy.get('div > button').should('have.css', 'rowGap', actionMenuTestData.ButtonGap)
  });

  xit('Check the button properities', () => {
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

  xit('Check that the Menu button is clickable', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(10)
  });

//Action Panel tulajdonságok
  xit('Check the panel properties after clicked the button', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    .should('have.css', 'width', actionMenuTestData.width)
    .should('have.css', 'gap', actionMenuTestData.gap)
    .should('have.css', 'display', actionMenuTestData.display)
    .should('have.css', 'flex-direction', actionMenuTestData.flexDirection)
    .should('have.css', 'align-items', actionMenuTestData.alignItems);
  });

  xit('Check the backgrounColor of the Panel', () => {
    cy.mount(ActionMenu);
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    .should('have.css', 'backgroundColor', actionMenuTestData.white);
  });

  xit('Check radius of the Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    .should('have.css', 'borderBottomLeftRadius', actionMenuTestData.radius)
    .should('have.css', 'borderBottomRightRadius', actionMenuTestData.radius)
    .should('have.css', 'borderTopLeftRadius', actionMenuTestData.radius)
    .should('have.css', 'borderTopRightRadius', actionMenuTestData.radius)
  });

  xit('Check padding of the Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    .should('have.css', 'paddingBottom', actionMenuTestData.padding)
    .should('have.css', 'paddingLeft', actionMenuTestData.padding)
    .should('have.css', 'paddingTop', actionMenuTestData.padding)
    .should('have.css', 'paddingRight', actionMenuTestData.padding)
  });

  xit('Check gap of the Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click();
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    .should('have.css', 'columnGap', actionMenuTestData.gap)
    .should('have.css', 'rowGap', actionMenuTestData.gap)
  });

  xit('Check box-shadow of the Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click();
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    .should('have.css', 'boxShadow', actionMenuTestData.boxShadow)
  });

  xit('Check the popup Panel contains item buttons', () => {
    cy.mount(ActionMenu)
    cy.get('button').click();
    cy.get('div').find('[id="headlessui-popover-panel-3"]').children('div > button')
    .should('exist');
  });

// sub-panel tulajdonságok
  xit('Check the sub-Panel properties after clicked the button', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]')
    .should('have.css', 'width', actionMenuTestData.width)
    .should('have.css', 'gap', actionMenuTestData.gap)
    .should('have.css', 'display', actionMenuTestData.display)
    .should('have.css', 'flex-direction', actionMenuTestData.flexDirection)
    .should('have.css', 'align-items', actionMenuTestData.alignItems);
  });

  xit('Check the backgrounColor of the sub-Panel', () => {
    cy.mount(ActionMenu);
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]')
    .should('have.css', 'backgroundColor', actionMenuTestData.white);
  });

  xit('Check radius of the sub-Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]')
    .should('have.css', 'borderBottomLeftRadius', actionMenuTestData.radius)
    .should('have.css', 'borderBottomRightRadius', actionMenuTestData.radius)
    .should('have.css', 'borderTopLeftRadius', actionMenuTestData.radius)
    .should('have.css', 'borderTopRightRadius', actionMenuTestData.radius)
  });

  xit('Check padding of the sub-Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click().wait(100);
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]')
    .should('have.css', 'paddingBottom', actionMenuTestData.padding)
    .should('have.css', 'paddingLeft', actionMenuTestData.padding)
    .should('have.css', 'paddingTop', actionMenuTestData.padding)
    .should('have.css', 'paddingRight', actionMenuTestData.padding)
  });

  xit('Check gap of the sub-Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click();
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]')
    .should('have.css', 'columnGap', actionMenuTestData.gap)
    .should('have.css', 'rowGap', actionMenuTestData.gap)
  });

  xit('Check box-shadow of the sub-Panel', () => {
    cy.mount(ActionMenu)
    cy.get('button').click();
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]')
    .should('have.css', 'boxShadow', actionMenuTestData.boxShadow)
  });

  xit('Check the popup sub-Panel contains item buttons', () => {
    cy.mount(ActionMenu)
    cy.get('button').click();
    cy.get('div').find('[id="headlessui-popover-panel-3"]')
    cy.get('button').contains('menu').click().wait(100)
    cy.get('div').find('[id="headlessui-popover-panel-8"]').children('div > button')
    .should('exist');
  });


//teszt1

describe('Check gap of the Panel', () => {
  beforeEach(() => {
      cy.mount(ActionMenu)
      cy.get('button').click();
  });

  xit('Check gap of the Panel', () => {
      cy.get('div').find('[id="headlessui-popover-panel-3"]')
          .should('have.css', 'columnGap', actionMenuTestData.gap)
          .should('have.css', 'rowGap', actionMenuTestData.gap);
  });
});

describe('Check the popup Panel contains item buttons', () => {
  beforeEach(() => {
      cy.mount(ActionMenu)
      cy.get('button').click();
  });

  xit('Check the popup Panel contains item buttons', () => {
      cy.get('div').find('[id="headlessui-popover-panel-13"]').children('div > button')
          .should('exist');
  });
});

//teszt2

xit('Check gap of the sub-Panel', () => {
  cy.mount(ActionMenu)
  cy.get('button').click();
  cy.get('div').find('[id="headlessui-popover-panel-3"]')
  cy.get('button').contains('menu').click().wait(100)
  cy.get('div').find('[id="headlessui-popover-panel-8"]')
  .should('have.css', 'columnGap', actionMenuTestData.gap)
  .should('have.css', 'rowGap', actionMenuTestData.gap)
});

xit('Check the popup sub-Panel contains item buttons', () => {
  cy.mount(ActionMenu)
  cy.get('button').click();
  cy.get('div').find('[id="headlessui-popover-panel-13"]')
  cy.get('button').contains('menu').click().wait(100)
  cy.get('div').find('[id="headlessui-popover-panel-18"]').children('div > button')
  .should('exist');
});
