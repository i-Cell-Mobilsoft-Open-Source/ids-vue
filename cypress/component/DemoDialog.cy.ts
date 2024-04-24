/// <reference types="cypress"/>
import '../support/commands';
import DialogMenu from '../../src/demo/DemoDialog.vue';
import dialogTestData from '../data/dialogTestData';

describe('Dialog Component Test', () => {
  context('720p resolution', () => {
    beforeEach(() => {
      cy.viewport(1280, 720);
    });

    it('Unnecessary tests the Action Menu subtitle component', () => {
      cy.mount(DialogMenu);
      cy.contains('Action Menu')
      .should('have.css', 'color', 'rgb(33, 53, 71)')
    });

    //Button tulajdonságok
    it('Check the color of the Button', () => {
      cy.mount(DialogMenu);
      cy.contains('Show dialog')
        .should('have.css', 'color', dialogTestData.white)
        .should('have.css', 'backgroundColor', dialogTestData.enabledBgColors)
    });

    it('Check radius of the Button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog')
        .should('have.css', 'borderRadius', dialogTestData.buttonRadius)
    });

    it('Check padding of the Button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog')
        .should('have.css', 'paddingBottom', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingLeft', dialogTestData.buttonLeftRightPadding)
        .should('have.css', 'paddingTop', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingRight', dialogTestData.buttonLeftRightPadding)
    });

    it('Check gap of the Button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog')
        .should('have.css', 'columnGap', dialogTestData.ButtonGap)
        .should('have.css', 'rowGap', dialogTestData.ButtonGap)
    });

    it('Check the Button properities', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog')
        .should('have.css', 'minWidth', dialogTestData.minWidth)
        .should('have.css', 'fontWeight', dialogTestData.fontWeight)
        .should('have.css', 'display', dialogTestData.display)
        .should('have.css', 'justify-content', dialogTestData.justifyContent)
        .should('have.css', 'align-items', dialogTestData.alignButtonItems)
        .should('have.css', 'height', dialogTestData.height)
        .should('have.css', 'font-size', dialogTestData.fontSize)
        .should('have.css', 'line-height', dialogTestData.lineHeight)
    });

    it('Check that the Button is clickable', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
    });

    //Dialog panel tulajdonságok
    //Még nem a felesztés része, ezért nem szükséges tesztelni a full width-et
    it('Check the panel properties after clicked the Button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
        // .should('have.css', 'width', dialogTestData.width) // max-width? a 800 px nem jó
        .should('have.css', 'gap', dialogTestData.gap)
        .should('have.css', 'display', dialogTestData.display)
        .should('have.css', 'flex-direction', dialogTestData.flexDirection)
        .should('have.css', 'align-items', dialogTestData.alignItems);
    });

    it('Check the backgrounColor of the Panel', () => {
      cy.mount(DialogMenu);
      cy.contains('Show dialog').click()
      cy.get('dialog')
        .should('have.css', 'backgroundColor', dialogTestData.white);
    });

    it('Check radius of the Panel', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog')
        .should('have.css', 'borderBottomLeftRadius', dialogTestData.radius)
        .should('have.css', 'borderBottomRightRadius', dialogTestData.radius)
        .should('have.css', 'borderTopLeftRadius', dialogTestData.radius)
        .should('have.css', 'borderTopRightRadius', dialogTestData.radius)
    });
//javítás alatt - hiba: left/right 0px IDS-412
    it('Check padding of the Panel', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
        .should('have.css', 'paddingBottom', dialogTestData.bottonTopPadding)
        .should('have.css', 'paddingLeft', dialogTestData.leftRightPadding)
        .should('have.css', 'paddingTop', dialogTestData.bottonTopPadding)
        .should('have.css', 'paddingRight', dialogTestData.leftRightPadding)
    });

    it('Check gap of the Panel', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
        .should('have.css', 'columnGap', dialogTestData.gap)
        .should('have.css', 'rowGap', dialogTestData.gap)
    });
// javítás alatt - hiba: boxShadow none IDS-412
    it('Check box-shadow of the Panel', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
        .should('have.css', 'boxShadow', dialogTestData.boxShadow)
    });

    it('Check the popup Panel contains item buttons', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Label').should('exist')
      cy.contains('Cancel').should('exist')
      cy.contains('Save').should('exist')
    });

    //sub-button tulajdonságok
    it('Check the LABEL button properties after clicked the button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Label')
        .should('have.css', 'min-width', dialogTestData.minWidth)
        .should('have.css', 'height', dialogTestData.height)
        .should('have.css', 'gap', dialogTestData.ButtonGap)
        .should('have.css', 'display', dialogTestData.displayButton)
        .should('have.css', 'fontWeight', dialogTestData.fontWeight)
        .should('have.css', 'fontSize', dialogTestData.fontSize)
        .should('have.css', 'lineHeight', dialogTestData.lineHeight)
        .should('have.css', 'justify-content', dialogTestData.justifyContent)
        .should('have.css', 'align-items', dialogTestData.alignButtonItems);
    });

    it('Check the CANCEL button properties after clicked the button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Cancel')
        .should('have.css', 'min-width', dialogTestData.minWidth)
        .should('have.css', 'height', dialogTestData.height)
        .should('have.css', 'gap', dialogTestData.ButtonGap)
        .should('have.css', 'display', dialogTestData.display)
        .should('have.css', 'fontWeight', dialogTestData.fontWeight)
        .should('have.css', 'fontSize', dialogTestData.fontSize)
        .should('have.css', 'lineHeight', dialogTestData.lineHeight)
        .should('have.css', 'justify-content', dialogTestData.justifyContent)
        .should('have.css', 'align-items', dialogTestData.alignButtonItems);
    });

    it('Check the SAVE button properties after clicked the button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Save')
        .should('have.css', 'min-width', dialogTestData.minWidth)
        .should('have.css', 'height', dialogTestData.height)
        .should('have.css', 'gap', dialogTestData.ButtonGap)
        .should('have.css', 'display', dialogTestData.display)
        .should('have.css', 'fontWeight', dialogTestData.fontWeight)
        .should('have.css', 'fontSize', dialogTestData.fontSize)
        .should('have.css', 'lineHeight', dialogTestData.lineHeight)
        .should('have.css', 'justify-content', dialogTestData.justifyContent)
        .should('have.css', 'align-items', dialogTestData.alignButtonItems);
    });

    it('Check the colors of the sub-button Label', () => {
      cy.mount(DialogMenu);
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Label')
        .should('have.css', 'backgroundColor', dialogTestData.panelWhite)
        .should('have.css', 'color', dialogTestData.enabledBgColors)
    });

    it('Check the colors of the sub-button Cancel', () => {
      cy.mount(DialogMenu);
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Cancel')
        .should('have.css', 'backgroundColor', dialogTestData.panelWhite)
        .should('have.css', 'color', dialogTestData.enabledBgColors)
    });

    it('Check the colors of the sub-button Save', () => {
      cy.mount(DialogMenu);
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Save')
        .should('have.css', 'backgroundColor', dialogTestData.enabledBgColors)
        .should('have.css', 'color', dialogTestData.white)
    });

    it('Check radius of the sub-button LABEL', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click();
      cy.get('dialog > section')
      cy.contains('Label')
        .should('have.css', 'borderBottomLeftRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderBottomRightRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderTopLeftRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderTopRightRadius', dialogTestData.buttonRadius)
    });

    it('Check radius of the sub-button CANCEL', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click();
      cy.get('dialog > section')
      cy.contains('Cancel')
        .should('have.css', 'borderBottomLeftRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderBottomRightRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderTopLeftRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderTopRightRadius', dialogTestData.buttonRadius)
    });

    it('Check radius of the sub-button SAVE', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click();
      cy.get('dialog > section')
      cy.contains('Save')
        .should('have.css', 'borderBottomLeftRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderBottomRightRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderTopLeftRadius', dialogTestData.buttonRadius)
        .should('have.css', 'borderTopRightRadius', dialogTestData.buttonRadius)
    });

    it('Check padding of the sub-Panel LABEL', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Label')
        .should('have.css', 'paddingBottom', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingLeft', dialogTestData.buttonLeftRightPadding)
        .should('have.css', 'paddingTop', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingRight', dialogTestData.buttonLeftRightPadding)
    });

    it('Check padding of the sub-Panel CANCEL', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Cancel')
        .should('have.css', 'paddingBottom', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingLeft', dialogTestData.buttonLeftRightPadding)
        .should('have.css', 'paddingTop', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingRight', dialogTestData.buttonLeftRightPadding)
    });

    it('Check padding of the sub-Panel SAVE', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('dialog > section')
      cy.contains('Save')
        .should('have.css', 'paddingBottom', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingLeft', dialogTestData.buttonLeftRightPadding)
        .should('have.css', 'paddingTop', dialogTestData.buttonTopBottomPadding)
        .should('have.css', 'paddingRight', dialogTestData.buttonLeftRightPadding)
    });

    it('Check gap of the sub-Panel LABEL', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click();
      cy.get('dialog > section')
      cy.contains('Label')
        .should('have.css', 'columnGap', dialogTestData.buttonGap)
        .should('have.css', 'rowGap', dialogTestData.buttonGap)
    });

    it('Check gap of the sub-Panel CANCEL', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click();
      cy.get('dialog > section')
      cy.contains('Cancel')
        .should('have.css', 'columnGap', dialogTestData.buttonGap)
        .should('have.css', 'rowGap', dialogTestData.buttonGap)
    });

    it('Check gap of the sub-Panel SAVE', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click();
      cy.get('dialog > section')
      cy.contains('Save')
        .should('have.css', 'columnGap', dialogTestData.buttonGap)
        .should('have.css', 'rowGap', dialogTestData.buttonGap)
    });

    it('Check the dialog contains Title', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.contains('Title')
        .should('exist')
    });

    it('Check the dialog contains subTitle', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.contains('subTitle')
        .should('exist')
    });

    it('Check the dialog contains text', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('.text-left')
        .should('exist')
    });

    it('Check the dialog contains an X button', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('header.flex > .comfortable')
        .should('have.css', 'width', dialogTestData.xWeightHeight)
        .should('have.css', 'height', dialogTestData.xWeightHeight)
        .should('have.css', 'color', dialogTestData.xColor)
    });

    it('Check the X button is working', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.get('.icon-size')
        .should('exist')
      cy.get('.icon-size').click()
        .should('not.exist')
    });

    it('Check the LABEL button is working', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.contains('Label').click()
      cy.contains('Label')
        .should('have.css', 'outlineColor', dialogTestData.enabledBgColors)
    });

    it('Check the CANCEL button is working', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.contains('Cancel').should('exist')
      cy.get('dialog > section').should('exist')
      cy.contains('Cancel').click()
      cy.get('dialog > section').should('not.exist')
    });

    it('Check the SAVE button is working', () => {
      cy.mount(DialogMenu)
      cy.contains('Show dialog').click()
      cy.contains('Save').should('exist')
      cy.get('dialog > section').should('exist')
      cy.contains('Save').click()
      cy.get('dialog > section').should('not.exist')
    });
  });
});
