import common = require('mocha/lib/interfaces/common');
import actionItemButtonTestData from '../data/actionItemButtonTestData';
import 'cypress-real-events/support';

beforeEach(() => {
  cy.visit('/components/action-item-button');
})

describe('ids Action Item Button Demo test', () => {
    const allCombinations = [] as any[];
  
    actionItemButtonTestData.allModes.forEach((mode) => {
        actionItemButtonTestData.allSizes.forEach((size) => {
            actionItemButtonTestData.allVariants.forEach((variant) => {
                allCombinations.push({ mode, size, variant });
            });
        });
    });

    xit('Checks the content height of ActionItem Button', () => {
        allCombinations.forEach((item) => {
            actionItemButtonTestData.allHeight.forEach((height) => {
                const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
                cy.get(actionItemButtonSelector).should('be.visible')
                    .should(($el) => {
                    expect($el).to.have.css('height', height[item.size]);
                    });
            });
        });
    });

    xit('Checks common css rules of ActionItem Button', () => {
        allCombinations.forEach((item) => {
            actionItemButtonTestData.common.forEach((common) => {
            const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionItemButtonSelector)
              .should('be.visible')
              .should('have.css', 'display', common['display'])
              .should('have.css', 'flexShrink', common['flexShrink'])
              .should('have.css', 'fontWeight', common['fontWeight'])
              .should('have.css', 'align-items', common['alignItems'])
              .should('have.css', 'justify-content', common['justifyContent']);
          });
        });
      });
//kész - sztem javítani kell a figmanak megfelelőre, Figma =/= böngésző 
      xit('Checks the font-size of ActionItem Button', () => {
        allCombinations.forEach((item) => {
          actionItemButtonTestData.allFontSize.forEach((font) => {
            const avatarSelector = `#${item.mode}-${item.size}-button`;
            cy.get(avatarSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.fontSize).to.equal(font[item.size]);
            });
          });
        });
      });
// kész - Figma =/= böngésző (comfortable a legnagyobb!)
      xit('Checks the line-height of ActionItem Button', () => {
        allCombinations.forEach((item) => {
            actionItemButtonTestData.allLineHeight.forEach((lineHeigt) => {
            const buttonSelector = `#${item.mode}-${item.size}-button`;
            cy.get(buttonSelector).should('be.visible')
            .should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
                });
          });
        });
      });

    xit('Checks the color of ActionItem Button', () => {
        allCombinations.forEach((item) => {
            actionItemButtonTestData.enabledTextBgColors.forEach((textBgColor) => {
                actionItemButtonTestData.enabledTextColors.forEach((textColor) => {
                    actionItemButtonTestData.enabledFilledBgColors.forEach((filledBgColor) => {
                        actionItemButtonTestData.enabledFilledColors.forEach((filledColor) => {
                        const actionSelector = `#${item.mode}-${item.size}-button`;
                        if (item.mode === 'text') {
                            cy.get(actionSelector).should('be.visible').should(($el) => {
                                const styles = window.getComputedStyle($el[0]);
                                expect(styles.backgroundColor).to.equal(textBgColor[item.variant]);
                                expect(styles.color).to.equal(textColor[item.variant]);
                            });
                        } else {
                            cy.get(actionSelector).should('be.visible').should(($el) => {
                                const styles = window.getComputedStyle($el[0]);
                                expect(styles.backgroundColor).to.equal(filledBgColor[item.variant]);
                                expect(styles.color).to.equal(filledColor[item.variant]);
                            });
                        }
                        });
                    });
                });
            });
        });
    });

    xit('Checks color and background color of ActionItem Button with hovered state', () => {
        allCombinations.forEach((item) => {
            const button = cy.get(`#${item.mode}-${item.size}-button`);
            if (item.mode === 'text') {
                button.realHover({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(actionItemButtonTestData.hoveredTextBgColors);
                    expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
                });
            } else {
                button.realHover({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(actionItemButtonTestData.hoveredFilledBgColors);
                    expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
                });
            }
        });
    });

    xit('Checks focused state of ActionItem Button', () => {
        allCombinations.forEach((item) => {
          const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionItemButtonSelector).click().should('have.focus').should('be.visible')
              .should('have.css', 'outline').and('eq', actionItemButtonTestData.black);
        });
    });

    xit('Checks color of ActionItem Button with FOCUSED state', () => {
        allCombinations.forEach((item) => {
            const button = cy.get(`#${item.mode}-${item.size}-button`);
            if (item.mode === 'text') {
                button.realClick({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(actionItemButtonTestData.hoveredTextBgColors);
                    expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
                });
            } else {
                button.realClick({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(actionItemButtonTestData.hoveredTextBgColors);
                    expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
                });
            }
        });
    });

    xit('Checks color of ActionItem Button with ACTIVE (pressed) state', () => {
        allCombinations.forEach((item) => {
            const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
            cy.get(actionItemButtonSelector).then(button => {
                cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
                  const styles = window.getComputedStyle($el[0]);
            if (item.mode === 'text') {
                    expect(styles.backgroundColor).to.equal(actionItemButtonTestData.pressedTextBgColors);
                    expect(styles.color).to.equal(actionItemButtonTestData.pressedColors);
            } else {
                    expect(styles.backgroundColor).to.equal(actionItemButtonTestData.pressedFilledBgColors);
                    expect(styles.color).to.equal(actionItemButtonTestData.pressedColors);
                    }
                }).realMouseUp({ pointer: "mouse" });            
            });
        });
    });

    //wip  csak a 167.sorig vizsgálja
    // xit('Checks color of disabled state of ActionItem Button', () => {
    //     allCombinations.forEach((item) => {
    //         const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
    //         cy.get(actionItemButtonSelector).should('be.visible').then(($el) => {
    //             const isDisabled = $el.attr(':is-disabled') === 'true';
    //             if (item.mode === 'text') {
    //                 if (isDisabled) {
    //                     const styles = window.getComputedStyle($el[0]);
    //                     expect(styles.backgroundColor).to.equal(actionItemButtonTestData.white);
    //                     expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
    //                 }
    //             } else {
    //                 if (isDisabled) {
    //                     const styles = window.getComputedStyle($el[0]);
    //                     expect(styles.backgroundColor).to.equal(actionItemButtonTestData.disabledFilledBgColors);
    //                     expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
    //                 }
    //             }
    //         });
    //     });
    // });
    it('Checks color of disabled state of ActionItem Button', () => {
        allCombinations.forEach((item) => {
        //   if (item.variant === 'error' || item.variant === 'success' || item.variant === 'warning') {
        //     return;
        //   }
          const actionItemButtonSelector = cy.get(`#${item.mode}-${item.size}-disabled-button`);
          if (item.mode === 'text') {
            actionItemButtonSelector.should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(actionItemButtonTestData.white);
              expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
            });
          } else {
            actionItemButtonSelector.should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(actionItemButtonTestData.disabledFilledBgColors);
              expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
            });
          }
        });
      });

    xit('Checks radius of ActionItem Button', () => {
        allCombinations.forEach((item) => {
            actionItemButtonTestData.Radius.forEach((allRadius) => {
            const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
                cy.get(actionItemButtonSelector).should('be.visible').then(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                        expect(styles.borderTopLeftRadius).to.equal(allRadius[item.size]);
                        expect(styles.borderTopRightRadius).to.equal(allRadius[item.size]);
                        expect(styles.borderBottomLeftRadius).to.equal(allRadius[item.size]);
                        expect(styles.borderBottomRightRadius).to.equal(allRadius[item.size]);
                 });
            });
        });
    });

// nézzünk erre vissza

    
    //   it('Checks all padding of tags', () => {
    //     allCombinations.forEach((item) => {
    //       tagTestData.topBottomPadding.forEach((topPadding) => {
    //         tagTestData.leftRightPadding.forEach((sidePadding) => {
    //           const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
    //           cy.get(tagSelector).should('be.visible').then(($el) => {
    //             const styles = window.getComputedStyle($el[0]);
    //             expect(styles.paddingTop).to.equal(topPadding[item.size]);
    //             expect(styles.paddingLeft).to.equal(sidePadding[item.size]);
    //             expect(styles.paddingBottom).to.equal(topPadding[item.size]);
    //             expect(styles.paddingRight).to.equal(sidePadding[item.size]);
    //           });
    //         });
    //       });
    //     });
    //   });
    
      xit('Checks all GAP of Action Item utton', () => {
        allCombinations.forEach((item) => {
          actionItemButtonTestData.columnGap.forEach((gapColumn) => {
            actionItemButtonTestData.rowGap.forEach((gapRow) => {
              const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
              cy.get(actionItemButtonSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.columnGap).to.equal(gapColumn[item.size]);
                expect(styles.rowGap).to.equal(gapRow[item.size]);
              });
            });
          });
        });
      });

});
