import common = require('mocha/lib/interfaces/common');
import actionPanelTestData from '../data/actionPanelTestData';
import 'cypress-real-events/support';

beforeEach(() => {
    cy.visit('/components/action-panel');
})

describe('ids Action Item Button Demo test', () => {
    const allCombinations = [] as any[];

    actionPanelTestData.allModes.forEach((mode) => {
        actionPanelTestData.allSizes.forEach((size) => {
            actionPanelTestData.allVariants.forEach((variant) => {
                allCombinations.push({ mode, size, variant });

            });
        });
    });

    it('Checks common css rules of Action Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.display).to.equal(actionPanelTestData.display);
                expect(styles.maxWidth).to.equal(actionPanelTestData.maxWidth);
                expect(styles.flexDirection).to.equal(actionPanelTestData.flexDirection);
                expect(styles.alignItems).to.equal(actionPanelTestData.alignItems);
            });

        });
    });

    it('Checks the color of Action Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(actionPanelTestData.white);
                expect(styles.color).to.equal(actionPanelTestData.enabledColors);
            });
        });
    });

    it('Checks outline border color of Action Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            if (item.mode === 'elevated') {
                cy.get(actionSelector).click().should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.borderTopColor).to.equal(actionPanelTestData.elevatedBorderColor);
                });
            } else if (item.mode === 'outlined') {
                cy.get(actionSelector).click().should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.borderTopColor).to.equal(actionPanelTestData.outlinedBorderColor);
                });
            } else {
                cy.get(actionSelector).click().should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.borderTopColor).to.equal(actionPanelTestData.filledBorderColor);
                });
            }
        });
    });

    it('Checks radius of Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionSelector).should('be.visible').then(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.borderTopLeftRadius).to.equal(actionPanelTestData.radius);
                expect(styles.borderTopRightRadius).to.equal(actionPanelTestData.radius);
                expect(styles.borderBottomLeftRadius).to.equal(actionPanelTestData.radius);
                expect(styles.borderBottomRightRadius).to.equal(actionPanelTestData.radius);
            });
        });
    });

    it('Checks all padding of Action Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionSelector).should('be.visible').then(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.paddingTop).to.equal(actionPanelTestData.padding);
                expect(styles.paddingLeft).to.equal(actionPanelTestData.padding);
                expect(styles.paddingBottom).to.equal(actionPanelTestData.padding);
                expect(styles.paddingRight).to.equal(actionPanelTestData.padding);
            });
        });
    });

    it('Checks all GAP of Action Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.columnGap).to.equal(actionPanelTestData.gap);
                expect(styles.rowGap).to.equal(actionPanelTestData.gap);
            });
        });
    });

    it('Checks box-shadow of Action Panel', () => {
        allCombinations.forEach((item) => {
            const actionSelector = `#${item.mode}-${item.size}-button`;
            if (item.mode === 'filled') {
                cy.get(actionSelector).click().should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.boxShadow).to.equal('none');
                });
            }
            else if (item.mode === 'elevated') {
                cy.get(actionSelector).click().should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.boxShadow).to.equal(actionPanelTestData.elevatedBoxShadow);
                });
            } else {
                cy.get(actionSelector).click().should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.boxShadow).to.equal(actionPanelTestData.outlinedBoxShadow);
                });
            }
        });
    });

    it('Checks the width of Action Panel', () => {
        allCombinations.forEach((item) => {
            actionPanelTestData.allWidth.forEach((width) => {
            const actionPanelSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionPanelSelector).should('be.visible').should(($el) => {
                expect($el).to.have.css('max-width', width[item.size]);
                });
            });
        });
    });
});