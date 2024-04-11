const dialogTestData = {

  //Colors
    enabledBgColors: "rgb(0, 60, 255)",
    white: "rgb(255, 255, 255)",
    panelWhite: 'rgba(255, 255, 255, 0)',
    black: 'rgb(0, 0, 0)',

    //dialog size
    width: '800px', //nem 600px?
    gap: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'normal', //nem flex-start?

  //Label, Cancel, Save buttons sizes
    minWidth: '40px',
    height: '40px',
    ButtonGap: '8px',
    displayButton: 'inline-flex', //nem flex? vs a Cancel + Save miért csak flex?
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '20px',
    justifyContent: 'center',
    alignButtonItems: 'center',
    
    buttonRadius: '1000px',
    buttonTopBottomPadding: '10px',
    buttonLeftRightPadding: '20px',
    buttonGap: '8px',
  
    radius: '24px',
    padding: '24px',
    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',

    xWeightHeight: '24px',
    xColor: 'rgb(71, 85, 105)'
  }
  
  export default dialogTestData;