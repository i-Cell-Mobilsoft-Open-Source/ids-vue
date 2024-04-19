
import iconButtonTestData from '../data/iconButtonTestData';
import 'cypress-real-events/support';

beforeEach(() => {
  cy.visit('/components/icon-button');
});

describe('ids IconButton Demo test', () => {
  const allCombinations = [] as any[];

  iconButtonTestData.allModes.forEach((mode) => {
    iconButtonTestData.allSizes.forEach((size) => {
      iconButtonTestData.allVariants.forEach((variant) => {
        allCombinations.push({ mode, size, variant });
      });
    });
  });

  it('Checks the width and height of icon button', () => {
    allCombinations.forEach((item) => {
      iconButtonTestData.allHeight.forEach((height) => {
        iconButtonTestData.allWidth.forEach((width) => {
          const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
          cy.get(buttonSelector).should('be.visible')
          .should(($el) => {
            expect($el).to.have.css('height', height[item.size]);
            expect($el).to.have.css('width', width[item.size]);
          });
        });
      });
    });
  });
 
  it('Checks common css rules of icon button', () => {
    allCombinations.forEach((item) => {
      iconButtonTestData.common.forEach((common) => {
        const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
        cy.get(buttonSelector).should('be.visible')
        .should('have.css', 'flex-shrink', common['flexShrink'])
        .should('have.css', 'align-items', common['alignItems'])
        .should('have.css', 'display', common['display'])
        .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });

  it('Checks the color of icon button', () => {
    allCombinations.forEach((item) => {
      iconButtonTestData.enabledBgColors.forEach((bgColor) => {
        iconButtonTestData.enabledColors.forEach((color) => {
          iconButtonTestData.hoveredColors.forEach((enabledColor) => {
            const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
            if (item.mode === 'outlined' || item.mode === 'standard') {
              cy.get(buttonSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(iconButtonTestData.white);
                expect(styles.color).to.equal(color[item.variant]);
              });
            } else {
              cy.get(buttonSelector).should('be.visible').should(($el) => {
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
 
  it('Checks focused state of icon button', () => {
    allCombinations.forEach((item) => {
      const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
      if (item.variant === 'light') {
        cy.get(buttonSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', iconButtonTestData.white2);
      } else {
        cy.get(buttonSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', iconButtonTestData.black);
      }
    });
  });

  it('Checks color of icon button with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      iconButtonTestData.focusedFilledBgColors.forEach((bgColor) => {
        iconButtonTestData.focusedFilledColors.forEach((color) => {
          iconButtonTestData.focusedOutlineTextColors.forEach((outlineColor) => {
            iconButtonTestData.focusedTextColors.forEach((standardColor) => {
              const button = cy.get(`#${item.mode}-${item.variant}-${item.size}-icon-button`);
              if (item.mode === 'outlined') {
                button.realClick({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
                  expect(styles.backgroundColor).to.equal(iconButtonTestData.white);
                  expect(styles.color).to.equal(outlineColor[item.variant]);
                });
              } else if (item.mode === 'standard') {
                button.realClick({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
                  expect(styles.backgroundColor).to.equal(iconButtonTestData.white);
                  expect(styles.color).to.equal(standardColor[item.variant]);
                });
              } else {
                button.realClick({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
                  expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                  expect(styles.color).to.equal(color[item.variant]);
                });
              }
            })
          });
        });
      });
    });
  });

  it('Checks color and background color of button with hovered state', () => {
    allCombinations.forEach((item) => {
      iconButtonTestData.hoveredBgColors.forEach((bgColor) => {
        iconButtonTestData.hoveredOutlineColors.forEach((outlineColor) => {
          iconButtonTestData.hoveredColors.forEach((color) => {
            iconButtonTestData.hoveredStandardColors.forEach((standardColor) => {
              const button = cy.get(`#${item.mode}-${item.variant}-${item.size}-icon-button`);
              if (item.mode === 'outlined') {
                button.realHover({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
                  expect(styles.backgroundColor).to.equal(iconButtonTestData.hoveredStandardBgColors);
                  expect(styles.color).to.equal(outlineColor[item.variant]);
                });
              } else if (item.mode === 'standard') {
                button.realHover({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
                  expect(styles.backgroundColor).to.equal(iconButtonTestData.hoveredStandardBgColors);
                  expect(styles.color).to.equal(standardColor[item.variant]);
                });
              } else { //filled
                button.realHover({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
                  expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                  expect(styles.color).to.equal(color[item.variant]);
                });
              }
            })
          });
        });
      });
    });
  });

  it('Checks color of icon button with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      iconButtonTestData.activeBgColors.forEach((bgColor) => {
        iconButtonTestData.activeFilledColors.forEach((color) => {
          iconButtonTestData.activeOutlineColors.forEach((outlineColor) => {
              iconButtonTestData.activeStandardColors.forEach((standardColor) => {
                const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
                cy.get(buttonSelector).then(button => {
                  cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    if (item.mode === 'outlined') {
                      expect(styles.backgroundColor).to.equal(iconButtonTestData.pressedStandardBgColors); // és itt?
                      expect(styles.color).to.equal(outlineColor[item.variant]);
                    } else if (item.mode === 'standard') {
                      console.log('asdf-> ', item.variant, styles.color);
                      expect(styles.backgroundColor).to.equal(iconButtonTestData.pressedStandardBgColors);
                      expect(styles.color).to.equal(standardColor[item.variant]);
                    }
                    else {
                      expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                      expect(styles.color).to.equal(color[item.variant]);
                    }
                  }).realMouseUp({ pointer: "mouse" });
                });
              });
          });
        });
      });
    });
  });

  it('Checks color of disabled state icon button', () => {
    allCombinations.forEach((item) => {
      if (item.variant === 'error' || item.variant === 'success' || item.variant === 'warning') {
        return;
      }
      const button = cy.get(`#${item.mode}-${item.variant}-${item.size}-disabled-icon-button`);
      if (item.mode === 'outlined' || item.mode === 'standard') {
        button.should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.backgroundColor).to.equal(iconButtonTestData.white);
          expect(styles.color).to.equal(iconButtonTestData.disabledTextColors);
        });
      } else {
        button.should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.backgroundColor).to.equal(iconButtonTestData.disabledOutlineBgColors);
          expect(styles.color).to.equal(iconButtonTestData.disabledTextColors);
        });
      }
    });
  });

  it('Checks left and right border radius of icon button', () => {
    allCombinations.forEach((item) => {
      const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
      cy.get(buttonSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(iconButtonTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(iconButtonTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(iconButtonTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(iconButtonTestData.allRadius);
      });
    });
  });
 
  it('Checks all padding of icon button', () => {
    allCombinations.forEach((item) => {
      const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-icon-button`;
      cy.get(buttonSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.paddingTop).to.equal(iconButtonTestData.allPadding);
        expect(styles.paddingBottom).to.equal(iconButtonTestData.allPadding);
        expect(styles.paddingLeft).to.equal(iconButtonTestData.allPadding);
        expect(styles.paddingRight).to.equal(iconButtonTestData.allPadding);
      });
    });
  });
});