
describe('ids Button Demo', () => {
  const allModes = ["filled", "outlined", "text"];
  const allSizes = [
    "compact",
    "comfortable",
    "spacious",
  ];
  const allVariants = [
    "primary",
    "secondary",
    "brand",
    "error",
    "success",
    "warning",
    "light",
    "dark",
  ];

  const allBgColors = [{
    primary: "rgb(0, 60, 255)",
    secondary: "rgb(100, 116, 139)",
    brand: "rgb(0, 60, 255)",
    error: "rgb(239, 68, 68)",
    success: "rgb(34, 197, 94)",
    warning: "rgb(249, 115, 22)",
    light: "rgb(255, 255, 255)",
    dark: "rgb(15, 23, 42)",
  }]

  const allTextColors = [{
    primary: "rgb(0, 60, 255)",
    secondary: "rgb(100, 116, 139)",
    brand: "rgb(0, 60, 255)",
    error: "rgb(239, 68, 68)",
    success: "rgb(34, 197, 94)",
    warning: "rgb(249, 115, 22)",
    light: "rgb(255, 255, 255)",
    dark: "rgb(2, 6, 23)",
  }];

  const allWidth = [{
    compact: "24px",
    comfortable: "40px",
    spacious: "56px",
  }]

  const white = 'rgba(255, 255, 255, 0)';

  it('Checks the content of button', () => {
    cy.visit('/demo');

    allModes.forEach((mode) => {
      allSizes.forEach((size) => {
        allVariants.forEach((variant) => {
          allWidth.forEach((width) => {
            const buttonSelector = `#${mode}-${variant}-${size}-button`;
            cy.get(buttonSelector).should('be.visible').contains(`${mode} ${variant} ${size} button`);
            cy.get(buttonSelector).should('be.visible').should('have.css', 'height').and('eq', width[size]);
          });
        });
      });
    });
  });

  it('Checks the color of button', () => {
    cy.visit('/demo')
    allModes.forEach((mode) => {
      allSizes.forEach((size) => {
        allVariants.forEach((variant) => {
          allBgColors.forEach((bgColors) => {
            allTextColors.forEach((color) => {
              const buttonSelector = `#${mode}-${variant}-${size}-button`;
              if (mode === 'outlined' || mode === 'text') {
                cy.get(buttonSelector).trigger('mouseover').should('be.visible')
                  .should('have.css', 'background-color').and('eq', white)
                cy.get(buttonSelector).trigger('mouseover').should('be.visible')
                  .should('have.css', 'color').and('eq', color[variant]);
              } else {
                cy.get(buttonSelector).trigger('mouseover').should('be.visible')
                  .should('have.css', 'background-color').and('eq', bgColors[variant]);
              }
            });
          });
        });
      });
    });

  })

});
