
import buttonTestData from '../data/buttonTestData';
import 'cypress-real-events/support';

describe('ids Button Demo test', () => {
  const allCombinations = [] as any[];

  buttonTestData.allModes.forEach((mode) => {
    buttonTestData.allSizes.forEach((size) => {
      buttonTestData.allVariants.forEach((variant) => {
        allCombinations.push({ mode, size, variant });
        console.log('ready')
      });
    });
  });

  xit('Checks the content of button', () => {
    cy.visit('/');
    allCombinations.forEach((item) => {
      buttonTestData.allWidth.forEach((width) => {
        const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-button`;
        cy.get(buttonSelector).should('be.visible').contains(`${item.mode} ${item.variant} ${item.size} button`);
        cy.get(buttonSelector).should('be.visible').should('have.css', 'height').and('eq', width[item.size]);
      });
    });
  });

  xit('Checks the color of button', () => {
    cy.visit('/')
    allCombinations.forEach((item) => {
      buttonTestData.enabledBgColors.forEach((bgColor) => {
        buttonTestData.enabledColors.forEach((color) => {
          const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-button`;
          if (item.mode === 'outlined' || item.mode === 'text') {
            cy.get(buttonSelector).should('be.visible').should('have.css', 'background-color').and('eq', buttonTestData.white)
            cy.get(buttonSelector).should('be.visible').should('have.css', 'color').and('eq', color[item.variant]);
          } else {
            cy.get(buttonSelector).should('be.visible').should('have.css', 'background-color').and('eq', bgColor[item.variant]);
          }
        });
      });
    });
  });

  xit('Checks all padding top and bottom values of button', () => {
    cy.visit('/');
    allCombinations.forEach((item) => {
      buttonTestData.topBottomPadding.forEach((padding) => {
        const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-button`;
        cy.get(buttonSelector).should('be.visible').should('have.css', 'padding-top').and('eq', padding[item.size]);
        cy.get(buttonSelector).should('be.visible').should('have.css', 'padding-bottom').and('eq', padding[item.size]);
      });
    });
  });

  xit('Checks all padding left and right values of button', () => {
    cy.visit('/');
    allCombinations.forEach((item) => {
      buttonTestData.leftRightPadding.forEach((padding) => {
        const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-button`;
        cy.get(buttonSelector).should('be.visible').should('have.css', 'padding-left').and('eq', padding[item.size]);
        cy.get(buttonSelector).should('be.visible').should('have.css', 'padding-right').and('eq', padding[item.size]);
      });
    });
  });

  xit('Checks focused state of button', () => {
    cy.visit('/');
    allCombinations.forEach((item) => {
      const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-button`;
      cy.get(buttonSelector).click().should('have.focus').should('be.visible')
        .should('have.css', 'outline').and('eq', 'rgb(0, 0, 0) solid 3px');
    })
  })

  it('Checks color and background color of button with hovered state', () => {
    cy.visit('/');
    allCombinations.forEach((item) => {
      buttonTestData.hoveredBgColors.forEach((bgColor) => {
        //itt lehetne a activeTextcolor-t bejárni, majd a 90.sorban assetrálni/tesztet írni
        buttonTestData.hoveredOutlineTextColors.forEach((outlineColor) => {
          buttonTestData.hoveredColors.forEach((color) => {
        const button = cy.get(`#${item.mode}-${item.variant}-${item.size}-button`);

        if (item.mode === 'outlined') {
          button.realHover({ pointer: "mouse" }).wait(100).should('have.css', {'background-color': buttonTestData.hoverdOutlineBg, 'color': outlineColor[item.variant]});
        } else if (item.mode === 'text'){
          button.realHover({ pointer: "mouse" }).wait(100).should('have.css', {'background-color': buttonTestData.hoveredTextBgColors, 'color': outlineColor[item.variant] });
        }        
        else {
          button.realHover({ pointer: "mouse" }).wait(100).should('have.css', {'background-color': bgColor[item.variant],'color': color[item.variant]
          });
        }
        //itt mehetne a tesztelés text color-ra
        });
        });
      });
    });
  });

  xit('Checks color of button with active state', () => {
    cy.visit('/');
    allCombinations.forEach((item) => {
      buttonTestData.activeBgColors.forEach((bgColor) => {

        //buttonTestData.activeTextColors.forEach((color) => {
        const button = cy.get(`#${item.mode}-${item.variant}-${item.size}-button`);
        if (item.mode === 'outlined' || item.mode === 'text') {
          //button.realMouseDown({ pointer: "mouse" }).wait(500).should('have.css', 'background-color').and('eq', buttonTestData.aliceBlue);
        } else {
          button.realMouseDown({ pointer: "mouse" }).wait(500).should('have.css', 'background-color').and('eq', bgColor[item.variant])
        }
        //button.should('have.css', 'color').and('eq', color[item.variant]);
      })

      //});
    });
  });

  // it('Checks color of button with hovered state', () => {
  //   cy.visit('/');

  //   allCombinations.forEach((item) => {
  //     buttonTestData.hoveredBgColors.forEach((bgColor) => {
  //       const buttonSelector = `#${item.mode}-${item.variant}-${item.size}-button`;

  //       cy.get(buttonSelector)
  //         .realHover({ pointer: 'mouse' })
  //         .wait(100)
  //         .should('have.css', 'background-color')
  //         .and('eq', (item.mode === 'outlined' || item.mode === 'text') ? item.aliceBlue : bgColor[item.variant]);
  //     });
  //   });
  // });

});
