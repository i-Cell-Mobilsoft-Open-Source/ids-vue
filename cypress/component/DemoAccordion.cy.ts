/// <reference types="cypress"/>
import '../support/commands';
import AccordionMenu from '../../src/demo/DemoAccordion.vue';
import accordionTestData from '../data/accordionTestData';

describe('Accordion Component Test', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1000, 660)
    });

    it('Unnecessary tests the "Accordion" subtitle component', () => {
      cy.mount(AccordionMenu)
      cy.contains('h2', 'Accordion')
    });

    it('Check the "Accordion" subtitle that it exists', () => {
      cy.mount(AccordionMenu)
      cy.contains('Accordion item')
        .should('exist')
    });

    it('Check the "Accordion" subtitle color', () => {
      cy.mount(AccordionMenu)
      cy.get('h2')
        .should('have.css', 'color', accordionTestData.titleColor)
    });

    it('Check the color of "Accordion Item"', () => {
      cy.mount(AccordionMenu)
      cy.contains('Accordion item')
        .should('have.css', 'color', accordionTestData.titleColor)
    });

    it('Check the "Accordion-content" does not yet exist', () => {
      cy.mount(AccordionMenu).then(() => {
        cy.get(':nth-child(2) > .justify-between')
          .should('not.contain', '.text-left w-full enter');
      });
    });

    it('Check the "Accordion Item" common things', () => {
      cy.mount(AccordionMenu)
      cy.get(':nth-child(2) > .justify-between')
        .should('have.css', 'borderTop', accordionTestData.dividingLine)
        .should('have.css', 'display', accordionTestData.display)
        .should('have.css', 'fontWeight', accordionTestData.fontWeight)
        .should('have.css', 'font-size', accordionTestData.fontSize)
        .should('have.css', 'line-height', accordionTestData.lineHeight)
    });

    it('Check radius of "Accordion Item"', () => {
      cy.mount(AccordionMenu)
      cy.contains('Accordion item')
        .should('have.css', 'borderRadius', accordionTestData.accordionRadius)
    });

    it('Check padding of "Accordion Item"', () => {
      cy.mount(AccordionMenu)
      cy.get('details').find('.justify-between').eq(0)
        .should('have.css', 'paddingBottom', accordionTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingLeft', accordionTestData.buttonLeftRightPadding)
        .should('have.css', 'paddingTop', accordionTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingRight', accordionTestData.buttonLeftRightPadding)
    });

    it('Check gap of "Accordion Item"', () => {
      cy.mount(AccordionMenu)
      cy.get(':nth-child(2) > .justify-between')
        .should('have.css', 'columnGap', accordionTestData.accordionGap)
        .should('have.css', 'rowGap', accordionTestData.accordionGap)
    });

    it('Check that the "Accordion Item 1" is clickable', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(0).click()
      cy.get('.text-left').eq(0)
        .should('exist')
    });

    it('Check that the "Accordion Item 2" is clickable', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(1).click()
      cy.get('.text-left').eq(1)
        .should('exist')
    });

    it('Check that the "Accordion Item 3" is clickable', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(2).click()
      cy.get('.text-left').eq(2)
        .should('exist')
    });

    //Text tulajdonságok
    it('Check the text properties after clicked the Button', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(0).click()
      cy.get('.text-left').eq(0)
        .should('have.css', 'letterSpacing', accordionTestData.letterSpacing)
        .should('have.css', 'fontWeight', accordionTestData.fontWeight)
        .should('have.css', 'fontSize', accordionTestData.fontSize)
        .should('have.css', 'lineHeight', accordionTestData.lineHeight)
    });

    it('Check the color of the text', () => {
      cy.mount(AccordionMenu);
      cy.get('.justify-between').eq(0).click()
      cy.get('.text-left').eq(0)
        .should('have.css', 'color', accordionTestData.basicColor)
    });

    it('Check radius of the Panel', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(0).click()
      cy.get('.text-left').eq(0)
        .should('have.css', 'borderBottomLeftRadius', accordionTestData.radius)
        .should('have.css', 'borderBottomRightRadius', accordionTestData.radius)
        .should('have.css', 'borderTopLeftRadius', accordionTestData.radius)
        .should('have.css', 'borderTopRightRadius', accordionTestData.radius)
    });

    it('Check padding of the Panel', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(0).click()
      cy.get('.text-left').eq(0)
        .should('have.css', 'paddingBottom', accordionTestData.padding)
        .should('have.css', 'paddingLeft', accordionTestData.padding)
        .should('have.css', 'paddingTop', accordionTestData.padding)
        .should('have.css', 'paddingRight', accordionTestData.padding)
    });

    it('Check the text disappeared after the 2nd clicking', () => {
      cy.mount(AccordionMenu)
      cy.get('.justify-between').eq(0).dblclick()
      cy.get('.text-left').eq(0)
        .should('not.be.visible')
    });

  });
});


