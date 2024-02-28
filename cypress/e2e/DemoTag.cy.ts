import tagTestData from '../data/tagTestData';
import 'cypress-real-events/support';

beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="hamburger-menu"]').click();
    cy.get('[data-cy="tags-component"]').click();
  })

  describe('ids Tags Demo test', () => {
    const allCombinations = [] as any[];
  
    tagTestData.allModes.forEach((mode) => {
        tagTestData.allSizes.forEach((size) => {
            tagTestData.allVariants.forEach((variant) => {
          allCombinations.push({ mode, size, variant });
        });
      });
    });
    //WIP - omfortable height 32 vs 26?
    it('Checks the width and height of tags', () => {
        allCombinations.forEach((item) => {
          tagTestData.allHeight.forEach((height) => {
            //tagTestData.allWidth.forEach((width) => {
              const avatarSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
              cy.get(avatarSelector).should('be.visible')
                .should(($el) => {
                expect($el).to.have.css('height', height[item.size]);
                //expect($el).to.have.css('width', width[item.size]);
                });
            //});
          });
        });
      });
      //wip - display inline-flex vs flex
      xit('Checks common css rules of tags', () => {
        allCombinations.forEach((item) => {
          tagTestData.common.forEach((common) => {
            const avatarSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
            cy.get(avatarSelector)
              .should('be.visible')
              .should('have.css', 'display', common['display'])
              .should('have.css', 'flex-shrink', common['flexShrink'])
              .should('have.css', 'font-weight', common['fontWeight'])
              .should('have.css', 'align-items', common['alignItems'])
            //   .should('have.css', 'flex-direction', common['flexDirection'])
              .should('have.css', 'justify-content', common['justifyContent']);
          });
        });
      });
      //kész
      xit('Checks the font-size of tags', () => {
        allCombinations.forEach((item) => {
            tagTestData.allFontSize.forEach((font) => {
            const avatarSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
            cy.get(avatarSelector).should('be.visible').should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.fontSize).to.equal(font[item.size]);
              expect(styles.fontWeight).to.equal(tagTestData.allFontWeight);
            });
          });
        });
      });
      //kész
      xit('Checks the line-height of tags', () => {
        allCombinations.forEach((item) => {
          tagTestData.allLineHeight.forEach((lineHeigt) => {
            const avatarSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
            cy.get(avatarSelector).should('be.visible').should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
            });
          });
        });
      });
      xit('Checks the color of tags', () => {
        allCombinations.forEach((item) => {
          tagTestData.enabledBgColors.forEach((bgColor) => {
            tagTestData.enabledColors.forEach((color) => {
                tagTestData.hoveredColors.forEach((enabledColor) => {
                const avatarSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
                if (item.mode === 'filled') {
                    cy.get(avatarSelector).should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                    expect(styles.color).to.equal(color[item.variant]);
                    });
                } else { //outlined
                    cy.get(avatarSelector).should('be.visible').should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                    expect(styles.color).to.equal(enabledColor[item.variant]);
                    });
                  }
                });
              });
            });
          });
        });
});