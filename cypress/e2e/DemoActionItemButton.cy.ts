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

  it('Checks the height of ActionItem Button', () => {
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

  it('Checks the content height of the leading icon of the ActionItem Button', () => {
    allCombinations.forEach((item) => {
      actionItemButtonTestData.iconHeightWidth.forEach((height) => {
        actionItemButtonTestData.iconHeightWidth.forEach((width) => {
          const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
          cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
            const style = window.getComputedStyle($el[0]);
            expect(style.height).to.equal(height[item.size]);
            expect(style.height).to.equal(width[item.size]);
          });
        });
      });
    });
  });

  it('Checks the content height of the trailing icon of the ActionItem Button', () => {
    allCombinations.forEach((item) => {
      actionItemButtonTestData.iconHeightWidth.forEach((height) => {
        actionItemButtonTestData.iconHeightWidth.forEach((width) => {
          const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
          cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
            const style = window.getComputedStyle($el[1]);
            expect(style.height).to.equal(height[item.size]);
            expect(style.height).to.equal(width[item.size]);
          });
        });
      });
    });
  });

  it('Checks common css rules of ActionItem Button', () => {
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

  it('Checks common css rules of the leading icon of ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
      cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.display).to.equal(actionItemButtonTestData.iconDisplay);
        expect(styles.alignItems).to.equal(actionItemButtonTestData.iconAlignItems);
        expect(styles.justifyContent).to.equal(actionItemButtonTestData.iconJustifyContent);
      });
    });
  });

  it('Checks the font-size of ActionItem Button', () => {
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
  
  it('Checks the line-height of ActionItem Button', () => {
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

  it('Checks the color of ActionItem Button', () => {
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

  it('Checks the color of the leading icon of the ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionSelector = `#${item.mode}-${item.size}-button`;
      if (item.mode === 'text') {
        cy.get(actionSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.enabled1TextColors);
        });
      } else {
        cy.get(actionSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.enabled1FilledColors);
        });
      }
    });
  });

  it('Checks the color of the trailing icon of the ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionSelector = `#${item.mode}-${item.size}-button`;
      if (item.mode === 'text') {
        cy.get(actionSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.enabled1TextColors);
        });
      } else {
        cy.get(actionSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.enabled1FilledColors);
        });
      }
    });
  });

  it('Checks color and background color of ActionItem Button with HOVERED state', () => {
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

  it('Checks color and background color of the leading icon of the ActionItem Button with HOVERED state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.mode}-${item.size}-button`);
      if (item.mode === 'text') {
        button.realHover({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      } else {
        button.realHover({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      }
    });
  });

  it('Checks color and background color of the trailing icon of the ActionItem Button with HOVERED state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.mode}-${item.size}-button`);
      if (item.mode === 'text') {
        button.realHover({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      } else {
        button.realHover({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      }
    });
  });
  it('Checks focused state of ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
      cy.get(actionItemButtonSelector).click().should('have.focus').should('be.visible')
        .should('have.css', 'outline').and('eq', actionItemButtonTestData.black);
    });
  });

  it('Checks color of ActionItem Button with FOCUSED state', () => {
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

  it('Checks color of the leading icon of the ActionItem Button with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.mode}-${item.size}-button`);
      if (item.mode === 'text') {
        button.realClick({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      } else {
        button.realClick({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      }
    });
  });

  it('Checks color of the trailing icon of the ActionItem Button with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.mode}-${item.size}-button`);
      if (item.mode === 'text') {
        button.realClick({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      } else {
        button.realClick({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.hoveredColors);
        });
      }
    });
  });

  it('Checks color of ActionItem Button with ACTIVE (pressed) state', () => {
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

  it('Checks color of the leading icon of the ActionItem Button with ACTIVE (pressed) state', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
      cy.get(actionItemButtonSelector).then(button => {
        cy.wrap(button).realMouseDown({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          if (item.mode === 'text') {
            expect(styles.color).to.equal(actionItemButtonTestData.pressedColors);
          } else {
            expect(styles.color).to.equal(actionItemButtonTestData.pressedColors);
          }
        }).realMouseUp({ pointer: "mouse" });
      });
    });
  });

  it('Checks color of the trailing icon of the ActionItem Button with ACTIVE (pressed) state', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
      cy.get(actionItemButtonSelector).then(button => {
        cy.wrap(button).realMouseDown({ pointer: "mouse" }).find('svg').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          if (item.mode === 'text') {
            expect(styles.color).to.equal(actionItemButtonTestData.pressedColors);
          } else {
            expect(styles.color).to.equal(actionItemButtonTestData.pressedColors);
          }
        }).realMouseUp({ pointer: "mouse" });
      });
    });
  });

  it('Checks color of DISABLED state of ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = cy.get(`#${item.mode}-${item.size}-button-disabled`);
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

  it('Checks color of DISABLED state of the leading icon of the ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button-disabled`;
      if (item.mode === 'text') {
        cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
        });
      } else {
        cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
        });
      }
    });
  });

  it('Checks color of DISABLED state of the trailing icon of the ActionItem Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button-disabled`;
      if (item.mode === 'text') {
        cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
        });
      } else {
        cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(actionItemButtonTestData.disabledColors);
        });
      }
    });
  });

  it('Checks radius of ActionItem Button', () => {
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

  it('Checks all padding of ActionItem Button', () => {
    allCombinations.forEach((item) => {
      actionItemButtonTestData.allPadding.forEach((padding) => {
        const tagSelector = `#${item.mode}-${item.size}-button`;
        cy.get(tagSelector).should('be.visible').then(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.paddingTop).to.equal(padding[item.size]);
          expect(styles.paddingLeft).to.equal(padding[item.size]);
          expect(styles.paddingBottom).to.equal(padding[item.size]);
          expect(styles.paddingRight).to.equal(padding[item.size]);
        });
      });
    });
  });

  it('Checks all GAP of Action Item Button', () => {
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

  it('Checks all GAP of the leading icon of Action Item Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
      cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.columnGap).to.equal(actionItemButtonTestData.iconGap);
        expect(styles.rowGap).to.equal(actionItemButtonTestData.iconGap);
      });
    });
  });

  it('Checks all GAP of the trailing icon of Action Item Button', () => {
    allCombinations.forEach((item) => {
      const actionItemButtonSelector = `#${item.mode}-${item.size}-button`;
      cy.get(actionItemButtonSelector).find('svg').should('be.visible').should(($el) => {
        const styles = window.getComputedStyle($el[1]);
        expect(styles.columnGap).to.equal(actionItemButtonTestData.iconGap);
        expect(styles.rowGap).to.equal(actionItemButtonTestData.iconGap);
      });
    });
  });

});
