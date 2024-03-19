
import common = require('mocha/lib/interfaces/common');
import avatarTestData from '../data/avatarTestData';
import 'cypress-real-events/support';

beforeEach(() => {
  cy.visit('/components/avatar');
})

describe('ids Avatar Demo test', () => {
  const allCombinations = [] as any[];

  avatarTestData.allSizes.forEach((size) => {
    avatarTestData.allVariants.forEach((variant) => {
      allCombinations.push({ size, variant });
    });
  });

  it('Checks the width and height of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allHeight.forEach((height) => {
        avatarTestData.allWidth.forEach((width) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
          cy.get(avatarSelector).should('be.visible')
            .should(($el) => {
              expect($el).to.have.css('height', height[item.size]);
              expect($el).to.have.css('width', width[item.size]);
            });
        });
      });
    });
  });

  it('Checks the width and height of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allHeight.forEach((height) => {
        avatarTestData.allWidth.forEach((width) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
          cy.get(avatarSelector).should('be.visible')
            .should(($el) => {
              expect($el).to.have.css('height', height[item.size]);
              expect($el).to.have.css('width', width[item.size]);
            });
        });
      });
    });
  });

  it('Checks the width and height of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allHeight.forEach((height) => {
        avatarTestData.allWidth.forEach((width) => {
          const avatarSelector = `#${item.size}-avatar-with-image`;
          cy.get(avatarSelector).should('be.visible')
            .should(($el) => {
              expect($el).to.have.css('height', height[item.size]);
              expect($el).to.have.css('width', width[item.size]);
            });
        });
      });
    });
  });
//wip - javítás alatt
  it('Checks the width and height of avatar-label-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.labelHeight.forEach((height) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector).find('div > span').should('be.visible').should(($el) => {
          const style = window.getComputedStyle($el[0]);
          expect(style.height).to.equal(height[item.size]);
          });
        });
      });
    });

  it('Checks common css rules of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram`;
        cy.get(avatarSelector)
          .should('be.visible')
          .should('have.css', 'display', common['display'])
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'align-items', common['alignItems'])
          .should('have.css', 'flex-direction', common['flexDirection'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });

  it('Checks common css rules of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-user`;
        cy.get(avatarSelector)
          .should('be.visible')
          .should('have.css', 'display', common['display'])
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'align-items', common['alignItems'])
          .should('have.css', 'flex-direction', common['flexDirection'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });

  it('Checks common css rules of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.size}-avatar-with-image`;
        cy.get(avatarSelector)
          .should('be.visible')
          .should('have.css', 'display', common['display'])
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'align-items', common['alignItems'])
          .should('have.css', 'flex-direction', common['flexDirection'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });
//wip
  it('Checks common css rules of avatar-label-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.common.forEach((common) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector).find('div > span')
          .should('be.visible')
          .should('have.css', 'font-style', common['fontStyle'])
          .should('have.css', 'text-align', common['textAlign'])
          .should('have.css', 'justify-content', common['justifyContent']);
      });
    });
  });

  it('Checks the font-size of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allFontSize.forEach((font) => {
        avatarTestData.allFontWeight.forEach((weight) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
          cy.get(avatarSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.fontSize).to.equal(font[item.size]);
            expect(styles.fontWeight).to.equal(weight[item.size]);
          });
        });
      });
    });
  });

  it('Checks the font-size of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allLabelFontSize.forEach((font) => {
        avatarTestData.allLabelFontWeight.forEach((weight) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
          cy.get(avatarSelector)
          .find('div > span')
          .should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.fontSize).to.equal(font[item.size]);
            expect(styles.fontWeight).to.equal(weight[item.size]);
          });
        });
      });
    });
  });
 
  it('Checks the font-size of avatar-SUB-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allLabelFontSize.forEach((font) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
          cy.get(avatarSelector)
          .find('div > span')
          .should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[1]);
            expect(styles.fontSize).to.equal(font[item.size]);
            expect(styles.fontWeight).to.equal(avatarTestData.allSubTextFontWeight);
          });
      });
    });
  });
  
  it('Checks the line-height of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allLineHeight.forEach((lineHeigt) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
        cy.get(avatarSelector).should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
        });
      });
    });
  });

  it('Checks the line-height of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allLabelLineHeight.forEach((lineHeigt) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector)
        .find('div > span')
        .should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
        });
      });
    });
  });
  
  it('Checks the letter-spacing of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.labelLetterSpacing.forEach((letterSpacing) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector)
        .find('div > span')
        .should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.letterSpacing).to.equal(letterSpacing[item.size]);
        });
      });
    });
  });

  it('Checks the line-height of avatar-SUB-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.allLabelLineHeight.forEach((lineHeigt) => {
        const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector)
        .find('div > span')
        .should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
        });
      });
    });
  });
  
  it('Checks the letter-spacing of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.labelLetterSpacing.forEach((letterSpacing) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector)
        .find('div > span')
        .should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.letterSpacing).to.equal(letterSpacing[item.size]);
        });
      });
    });
  });

  it('Checks the letter-spacing of avatar-SUB-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.labelLetterSpacing.forEach((letterSpacing) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
        cy.get(avatarSelector)
        .find('div > span')
        .should('be.visible').should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.letterSpacing).to.equal(letterSpacing[item.size]);
        });
      });
    });
  });

  it('Checks the color of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.enabledBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
          cy.get(avatarSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
            expect(styles.color).to.equal(color[item.variant]);
          });
        });
      });
    });
  });

  it('Checks the color of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
          cy.get(avatarSelector)
          .find('div > span')
          .should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.color).to.equal(avatarTestData.labelFGcolor);
          });
    });
  });

  it('Checks the color of avatar-SUB-text', () => {
    allCombinations.forEach((item) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
          cy.get(avatarSelector)
          .find('div > span')
          .should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[1]);
            expect(styles.color).to.equal(avatarTestData.subFGcolor);
          });
    });
  });

  it('Checks the color of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.enabledBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-user button`;
          cy.get(avatarSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
            expect(styles.color).to.equal(color[item.variant]);
          });
        });
      });
    });
  });

  it('Checks the image of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
      cy.get(avatarSelector)
        .find('div > img')
        .should('be.visible')
        .then(imgElement => {
          cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
        });
    });
  });

  it('Checks focused state of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
      if (item.variant === 'light') {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.white2);
      } else {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.black);
      }
    });
  });

  it('Checks focused state of avatar-user', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-user button`;
      if (item.variant === 'light') {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.white2);
      } else {
        cy.get(avatarSelector).click().should('have.focus').should('be.visible')
          .should('have.css', 'outline').and('eq', avatarTestData.black);
      }
    });
  });

  it('Checks focused state of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image button`;
      cy.get(avatarSelector).click().should('have.focus').should('be.visible')
        .should('have.css', 'outline').and('eq', avatarTestData.black);
      cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
        cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
      });
    });
  });

  it('Checks color of avatar-monogram with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.focusedBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-monogram button`);
          button.realClick({ pointer: "mouse" }).should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
            expect(styles.color).to.equal(color[item.variant]);
          });
        })
      });
    });
  });

  it('Checks color of avatar-LABEL-text with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.variant}-${item.size}-avatar-label-text`);
      button.realClick({ pointer: "mouse" }).find('div > span').should(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.color).to.equal(avatarTestData.labelFGcolor);
      });
    });
  });

  it('Checks color of avatar-SUB-text with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.variant}-${item.size}-avatar-label-text`);
      button.realClick({ pointer: "mouse" }).find('div > span').should(($el) => {
        const styles = window.getComputedStyle($el[1]);
        expect(styles.color).to.equal(avatarTestData.subFGcolor);
      });
    });
  });

  it('Checks color of avatar-user with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.focusedBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-user button`);
          button.realClick({ pointer: "mouse" }).should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
            expect(styles.color).to.equal(color[item.variant]);
          });
        })
      });
    });
  });

  it('Checks image of avatar-with-image with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = cy.get(`#${item.size}-avatar-with-image`);
      avatarSelector.realClick({ pointer: "mouse" }).find('div > img').should('be.visible').then(imgElement => {
        cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
      });
    });
  });

  it('Checks color of avatar-with-image with FOCUSED state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image button`;
      cy.get(avatarSelector).realClick({ pointer: "mouse" }).should('have.focus').should('be.visible')
        .should('have.css', 'outline').and('eq', avatarTestData.black);
      cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
        cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
      });

    });
  });

  it('Checks color and background color of avatar-monogram with hovered state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.hoveredBgColors.forEach((bgColor) => {
        avatarTestData.hoveredColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-monogram button`);
          button.realHover({ pointer: "mouse" }).should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
            expect(styles.color).to.equal(color[item.variant]);
          });
        });
      });
    });
  });

  it('Checks color and background color of avatar-LABEL-text with hovered state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.variant}-${item.size}-avatar-label-text`);
      button.realHover({ pointer: "mouse" }).find('div > span').should(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.color).to.equal(avatarTestData.labelFGcolor);
      });
    });
  });

  it('Checks color and background color of avatar-SUB-text with hovered state', () => {
    allCombinations.forEach((item) => {
      const button = cy.get(`#${item.variant}-${item.size}-avatar-label-text`);
      button.realHover({ pointer: "mouse" }).find('div > span').should('be.visible').should(($el) => {
        const styles = window.getComputedStyle($el[1]);
        expect(styles.color).to.equal(avatarTestData.subFGcolor);
      });
    });
  });

  it('Checks color and background color of avatar-user with hovered state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.hoveredBgColors.forEach((bgColor) => {
        avatarTestData.hoveredColors.forEach((color) => {
          const button = cy.get(`#${item.variant}-${item.size}-avatar-user button`);
          button.realHover({ pointer: "mouse" }).should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
            expect(styles.color).to.equal(color[item.variant]);
          });
        });
      });
    });
  });

  it('Checks color and background color of avatar-with-image with hovered state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
      cy.get(avatarSelector).then(button => {
        cy.wrap(button).realHover({ pointer: "mouse" }).should('be.visible')
        cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
          cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
        });
      });
    });
  });

  it('Checks color of avatar-monogram with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.activeBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
          cy.get(avatarSelector).then(button => {
            cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
              expect(styles.color).to.equal(color[item.variant]);
            });
          }).realMouseUp({ pointer: "mouse" });
        });
      });
    });
  });

  it('Checks color of avatar-LABEL-text with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
      cy.get(avatarSelector).find('div > span').then(button => {
        cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.color).to.equal(avatarTestData.labelFGcolor);
        });
      }).realMouseUp({ pointer: "mouse" });
    });
  });

  it('Checks color of avatar-SUB-text with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
      cy.get(avatarSelector).find('div > span').then(button => {
        cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
          const styles = window.getComputedStyle($el[1]);
          expect(styles.color).to.equal(avatarTestData.subFGcolor);
        });
      }).realMouseUp({ pointer: "mouse" });
    });
  });

  it('Checks color of avatar-user with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      avatarTestData.activeBgColors.forEach((bgColor) => {
        avatarTestData.enabledColors.forEach((color) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-user button`;
          cy.get(avatarSelector).then(button => {
            cy.wrap(button).realMouseDown({ pointer: "mouse" }).should(($el) => {
              const styles = window.getComputedStyle($el[0]);
              expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
              expect(styles.color).to.equal(color[item.variant]);
            });
          }).realMouseUp({ pointer: "mouse" });
        });
      });
    });
  });

  it('Checks image of avatar-with-image with active (pressed) state', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image`;
      cy.get(avatarSelector).then(button => {
        cy.wrap(button).realMouseDown({ pointer: "mouse" })
        cy.get(avatarSelector).find('div > img').should('be.visible').then(imgElement => {
          cy.wrap(imgElement).should('have.attr', 'src', avatarTestData.image)
        });
      }).realMouseUp({ pointer: "mouse" });
    });
  });

  it('Checks left and right border radius of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.allRadius);
      });
    });
  });
// ez a 2 sztem  nem is kell, mivel nincs is radiusa
  it('Checks left and right border radius of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
      cy.get(avatarSelector).find('div > span').should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.labelRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.labelRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.labelRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.labelRadius);
      });
    });
  });

  it('Checks left and right border radius of avatar-SUB-text', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
      cy.get(avatarSelector).find('div > span').should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[1]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.labelRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.labelRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.labelRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.labelRadius);
      });
    });
  });

  it('Checks left and right border radius of avatar-user', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.variant}-${item.size}-avatar-user button`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.allRadius);
      });
    });
  });

  it('Checks left and right border radius of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      const avatarSelector = `#${item.size}-avatar-with-image button`;
      cy.get(avatarSelector).should('be.visible').then(($el) => {
        const styles = window.getComputedStyle($el[0]);
        expect(styles.borderTopLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderTopRightRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomLeftRadius).to.equal(avatarTestData.allRadius);
        expect(styles.borderBottomRightRadius).to.equal(avatarTestData.allRadius);
      });
    });
  });

  it('Checks all padding of avatar-monogram', () => {
    allCombinations.forEach((item) => {
      avatarTestData.paddingTop.forEach((topPadding) => {
        avatarTestData.paddingRight.forEach((rightPadding) => {
          avatarTestData.paddingLeft.forEach((leftPadding) => {
            avatarTestData.paddingBottom.forEach((bottomPadding) => {
              const avatarSelector = `#${item.variant}-${item.size}-avatar-monogram button`;
              cy.get(avatarSelector).should('be.visible').then(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.paddingTop).to.equal(topPadding[item.size]);
                expect(styles.paddingRight).to.equal(rightPadding[item.size]);
                expect(styles.paddingLeft).to.equal(leftPadding[item.size]);
                expect(styles.paddingBottom).to.equal(bottomPadding[item.size]);
              });
            });
          });
        });
      });
    });
  });

  it('Checks all padding of avatar-user', () => {
    allCombinations.forEach((item) => {
      avatarTestData.paddingTop.forEach((topPadding) => {
        avatarTestData.paddingRight.forEach((rightPadding) => {
          avatarTestData.paddingLeft.forEach((leftPadding) => {
            avatarTestData.paddingBottom.forEach((bottomPadding) => {
              const avatarSelector = `#${item.variant}-${item.size}-avatar-user button`;
              cy.get(avatarSelector).should('be.visible').then(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.paddingTop).to.equal(topPadding[item.size]);
                expect(styles.paddingRight).to.equal(rightPadding[item.size]);
                expect(styles.paddingLeft).to.equal(leftPadding[item.size]);
                expect(styles.paddingBottom).to.equal(bottomPadding[item.size]);
              });
            });
          });
        });
      });
    });
  });

  it('Checks all padding of avatar-with-image', () => {
    allCombinations.forEach((item) => {
      avatarTestData.paddingTop.forEach((topPadding) => {
        avatarTestData.paddingRight.forEach((rightPadding) => {
          avatarTestData.paddingLeft.forEach((leftPadding) => {
            avatarTestData.paddingBottom.forEach((bottomPadding) => {
              const avatarSelector = `#${item.size}-avatar-with-image button`;
              cy.get(avatarSelector).should('be.visible').then(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.paddingTop).to.equal(topPadding[item.size]);
                expect(styles.paddingRight).to.equal(rightPadding[item.size]);
                expect(styles.paddingLeft).to.equal(leftPadding[item.size]);
                expect(styles.paddingBottom).to.equal(bottomPadding[item.size]);
              });
            });
          });
        });
      });
    });
  });

  it('Checks all GAP of avatar-LABEL-text', () => {
    allCombinations.forEach((item) => {
      avatarTestData.columnGap.forEach((gapColumn) => {
        avatarTestData.rowGap.forEach((gapRow) => {
          const avatarSelector = `#${item.variant}-${item.size}-avatar-label-text`;
          cy.get(avatarSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.columnGap).to.equal(gapColumn[item.size]);
            expect(styles.rowGap).to.equal(gapRow[item.size]);
          });
        });
      });
    });
  });

});