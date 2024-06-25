
import common = require('mocha/lib/interfaces/common');
import actionMenuTestData from '../data/actionMenuTestData';
import 'cypress-real-events/support';

beforeEach(() => {
  cy.visit('/components/action-menu');
})


describe('ids Action Menu Demo test', () => {
    const allCombinations = [] as any[];
  
    actionMenuTestData.allSizes.forEach((size) => {
      actionMenuTestData.allVariants.forEach((mode) => {
        allCombinations.push({size, mode});
      });
    });






});