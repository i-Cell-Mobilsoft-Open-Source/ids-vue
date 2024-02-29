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
            const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
            cy.get(tagSelector).should('be.visible')
            .should(($el) => {
            expect($el).to.have.css('height', height[item.size]);
            });
          });
        });
      });
    //kész - display inline-flex vs flex
    it('Checks common css rules of tags', () => {
        allCombinations.forEach((item) => {
            tagTestData.common.forEach((common) => {
            const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
            cy.get(tagSelector)
                .should('be.visible')
                .should('have.css', 'display', common['display'])
                .should('have.css', 'flex-shrink', common['flexShrink'])
                .should('have.css', 'font-weight', common['fontWeight'])
                .should('have.css', 'align-items', common['alignItems'])
                .should('have.css', 'justify-content', common['justifyContent']);
            });
        });
    });
    //kész
    it('Checks the font-size of tags', () => {
    allCombinations.forEach((item) => {
        tagTestData.allFontSize.forEach((font) => {
        const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
        cy.get(tagSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.fontSize).to.equal(font[item.size]);
            expect(styles.fontWeight).to.equal(tagTestData.allFontWeight);
        });
        });
    });
    });
    //kész
    it('Checks the line-height of tags', () => {
    allCombinations.forEach((item) => {
        tagTestData.allLineHeight.forEach((lineHeigt) => {
        const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
        cy.get(tagSelector).should('be.visible').should(($el) => {
            const styles = window.getComputedStyle($el[0]);
            expect(styles.lineHeight).to.equal(lineHeigt[item.size]);
        });
        });
    });
    });
    //kész
    it('Checks the color of tags', () => {
    allCombinations.forEach((item) => {
        tagTestData.enabledBgColors.forEach((bgColor) => {
        tagTestData.enabledColors.forEach((color) => {
            tagTestData.enabledOutlineColor.forEach((outlineColor) => {
            const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
            if (item.mode === 'filled') {
                cy.get(tagSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                expect(styles.color).to.equal(color[item.variant]);
                });
            } else { //outlined
                cy.get(tagSelector).should('be.visible').should(($el) => {
                const styles = window.getComputedStyle($el[0]);
                expect(styles.backgroundColor).to.equal(tagTestData.white);
                expect(styles.color).to.equal(outlineColor[item.variant]);
                });
                }
            });
            });
        });
        });
    });
    //kész
    it('Checks color and background color of tags with HOVERED state', () => {
        allCombinations.forEach((item) => {
            tagTestData.hoveredBgColors.forEach((bgColor) => {
            tagTestData.hoveredColors.forEach((color) => {
                tagTestData.enabledOutlineColor.forEach((outlineColor) => {
                const tagSelector = cy.get(`#${item.mode}-${item.variant}-${item.size}-Tag`);
                if (item.mode === 'filled') {
                tagSelector.realHover({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                    expect(styles.color).to.equal(color[item.variant]);
                });
            } else { //outline
                tagSelector.realHover({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    expect(styles.backgroundColor).to.equal(tagTestData.hoverdOutlineBg);
                    expect(styles.color).to.equal(outlineColor[item.variant]);
                    });
                    }
                });
            });
            });
        });
    });
    //kész, de hibás: outline-color rgb(71, 85, 105) => legyen fehér
    it('Checks focused state of tags', () => {
        allCombinations.forEach((item) => {
        const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
        if (item.variant === 'light') {
            cy.get(tagSelector).click().should('have.focus').should('be.visible')
            .should('have.css', 'outline').and('eq', tagTestData.white2);
        } else {
            cy.get(tagSelector).click().should('have.focus').should('be.visible')
            .should('have.css', 'outline').and('eq', tagTestData.black);
        }
        });
    });
    //kész, de hibás: Figma szerint a activeOutlineTextColors fg színek a jók, de itt a enabledOutlineColor-ra fut le
    it('Checks color of icon tag with FOCUSED state', () => {
        allCombinations.forEach((item) => {
        tagTestData.focusedFilledBgColors.forEach((bgColor) => {
            tagTestData.hoveredColors.forEach((color) => {
            tagTestData.activeOutlineTextColors.forEach((outlineColor) => {
                    const tag = cy.get(`#${item.mode}-${item.variant}-${item.size}-Tag`);
                    if (item.mode === 'outlined') {
                    tag.realClick({ pointer: "mouse" }).should(($el) => {
                        const styles = window.getComputedStyle($el[0]);
                        expect(styles.backgroundColor).to.equal(tagTestData.hoverdFocusedOutlineBg);
                        expect(styles.color).to.equal(outlineColor[item.variant]);
                    });
                    } else { //filled
                    tag.realClick({ pointer: "mouse" }).should(($el) => {
                        const styles = window.getComputedStyle($el[0]);
                        expect(styles.backgroundColor).to.equal(bgColor[item.variant]);
                        expect(styles.color).to.equal(color[item.variant]);
                    });
                    }
            });
            });
        });
        });
    });
    //kész, de hibás, Figma szerint a activeOutlineTextColors a helyes, ehelyett a enabledOutlineColor-re fut le
    it('Checks color of tag with active (PRESSED) state', () => {
        allCombinations.forEach((item) => {
          tagTestData.activeBgColors.forEach((bgColor) => {
            tagTestData.enabledColors.forEach((color) => {
              tagTestData.activeOutlineTextColors.forEach((outlineColor) => {
                const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
                cy.get(tagSelector).then(tag => {
                cy.wrap(tag).realMouseDown({ pointer: "mouse" }).should(($el) => {
                    const styles = window.getComputedStyle($el[0]);
                    if (item.mode === 'outlined') {
                    expect(styles.backgroundColor).to.equal(tagTestData.disabledBgColors);
                    expect(styles.color).to.equal(outlineColor[item.variant]);
                    } else { //filled
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
  // kész, de nincs disabled-tag (csak a Figmaban)
  it('Checks color of disabled state tags', () => {
    allCombinations.forEach((item) => {
      if (item.variant === 'error' || item.variant === 'success' || item.variant === 'warning') {
        return;
      }
      const tag = cy.get(`#${item.mode}-${item.variant}-${item.size}-disabled-Tag`);
      if (item.mode === 'outlined') {
        tag.should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.backgroundColor).to.equal(tagTestData.white);
          expect(styles.color).to.equal(tagTestData.disabledTextColors);
        });
      } else {
        tag.should(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.backgroundColor).to.equal(tagTestData.disabledBgColors);
          expect(styles.color).to.equal(tagTestData.disabledBgColors);
        });
      }
    });
  });
  //kész
  it('Checks left and right border radius of icon button', () => {
    allCombinations.forEach((item) => {
        tagTestData.radiusTop.forEach((topRadius) => {
           tagTestData.radiusBottom.forEach((bottomRadius) => {
        const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
        cy.get(tagSelector).should('be.visible').then(($el) => {
          const styles = window.getComputedStyle($el[0]);
          expect(styles.borderTopLeftRadius).to.equal(topRadius[item.size]);
          expect(styles.borderTopRightRadius).to.equal(topRadius[item.size]);
          expect(styles.borderBottomLeftRadius).to.equal(bottomRadius[item.size]);
          expect(styles.borderBottomRightRadius).to.equal(bottomRadius[item.size]);
        });
           });
      });
    });
  });
  //kész, Figma szerint beállítva, de a comfortable padding 0px-el fut le
  it('Checks all padding of tags', () => {
    allCombinations.forEach((item) => {
      tagTestData.paddingTop.forEach((topPadding) => {
        tagTestData.paddingRight.forEach((rightPadding) => {
          tagTestData.paddingLeft.forEach((leftPadding) => {
            tagTestData.paddingBottom.forEach((bottomPadding) => {
              const tagSelector = `#${item.mode}-${item.variant}-${item.size}-Tag`;
              cy.get(tagSelector).should('be.visible').then(($el) => {
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

});