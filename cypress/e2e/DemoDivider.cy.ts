import dividerTestData from '../data/dividerTestData';
import 'cypress-real-events/support';

beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="hamburger-menu"]').click();
    cy.get('[data-cy="divider-component"]').click();
  })

describe('ids Divider Demo test', () => {
  const allCombinations = [] as any[];

  //dividerTestData.allModes.forEach((mode) => {
    dividerTestData.allSizes.forEach((size) => {
        dividerTestData.allVariants.forEach((variant) => {
            allCombinations.push({ size, variant });
      //});
    });
  });
  //WIP még nm jó
  xit('Checks the content, width and height of icon button', () => {
    allCombinations.forEach((item) => {
        //dividerTestData.allHeight.forEach((height) => {
            //dividerTestData.verticalWidth.forEach((width) => {
        const buttonSelector = `#${item.variant}-${item.size}-horizontal-divider`;
        cy.get(buttonSelector).should('be.visible').contains(`${item.variant} ${item.size}-horizontal-divider`)
          .should('have.css') .and('eq', dividerTestData.verticalWidth);
        //});
     //});
    });
  });



});