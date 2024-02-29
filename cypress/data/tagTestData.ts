const tagTestData = {
    allModes: ["filled", "outlined"],
    allSizes: ["compact","comfortable"],
    allVariants: [
      "primary",
      "secondary",
      "brand",
      "error",
      "success",
      "warning",
      "light",
      "dark"
    ],
  
    // //bgColors
    enabledBgColors: [{
      primary: "rgb(0, 60, 255)",
      secondary: "rgb(100, 116, 139)",
      brand: "rgb(0, 60, 255)",
      error: "rgb(239, 68, 68)",
      success: "rgb(34, 197, 94)",
      warning: "rgb(249, 115, 22)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(2, 6, 23)",
      //surface: "rgb(241, 245, 249)",
    }],
  
    hoveredBgColors: [{
      primary: "rgb(0, 47, 189)",
      secondary: "rgb(51, 65, 85)",
      brand: "rgb(0, 47, 189)",
      error: "rgb(185, 28, 28)",
      success: "rgb(21, 128, 61)",
      warning: "rgb(194, 65, 12)",
      light: "rgb(241, 245, 249)",
      dark: "rgb(30, 41, 59)",
    //   surface: "rgb(226, 232, 240)",
    }],
  
    // focusedFilledBgColors: [{
    //   primary: "rgb(0, 60, 255)",
    //   secondary: "rgb(100, 116, 139)",
    //   brand: "rgb(0, 60, 255)",
    //   error: "rgb(239, 68, 68)",
    //   success: "rgb(34, 197, 94)",
    //   warning: "rgb(249, 115, 22)",
    //   light: "rgb(255, 255, 255)",
    //   dark: "rgb(2, 6, 23)",
    //   surface: "rgb(241, 245, 249)",
    // }],
  
    // activeBgColors: [{
    //   primary: "rgb(0, 36, 143)",
    //   secondary: "rgb(30, 41, 59)",
    //   brand: "rgb(0, 36, 143)",
    //   error: "rgb(153, 27, 27)",
    //   success: "rgb(22, 101, 52)",
    //   warning: "rgb(154, 52, 18)",
    //   light: "rgb(226, 232, 240)",
    //   dark: "rgb(51, 65, 85)",
    //   surface: "rgb(203, 213, 225)",
    // }],
  
    // //textColors
    enabledColors: [{
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(255, 255, 255)",
      brand: "rgb(255, 255, 255)",
      error: "rgb(255, 255, 255)",
      success: "rgb(255, 255, 255)",
      warning: "rgb(255, 255, 255)",
      light: "rgb(71, 85, 105)",
      dark: "rgb(248, 250, 252)",
    //   surface: "rgb(248, 250, 252)",
    }],
    enabledOutlineColor: [{
      primary: "rgb(0, 60, 255)",
      secondary: "rgb(100, 116, 139)",
      brand: "rgb(0, 60, 255)",
      error: "rgb(239, 68, 68)",
      success: "rgb(34, 197, 94)",
      warning: "rgb(249, 115, 22)",
      light: "rgb(255, 255, 255)",
      dark: "rgb(2, 6, 23)",
    //   surface: "rgb(241, 245, 249)",
    }],
    hoveredColors: [{
      primary: "rgb(255, 255, 255)",
      secondary: "rgb(255, 255, 255)",
      brand: "rgb(255, 255, 255)",
      error: "rgb(255, 255, 255)",
      success: "rgb(255, 255, 255)",
      warning: "rgb(255, 255, 255)",
      light: "rgb(71, 85, 105)",
      dark: "rgb(248, 250, 252)",
    //   surface: "rgb(100, 116, 139)",
    }],
    // hoveredOutlineTextColors: [{
    //   primary: "rgb(0, 59, 235)",
    //   secondary: "rgb(71, 85, 105)",
    //   brand: "rgb(0, 59, 235)",
    //   error: "rgb(220, 38, 38)",
    //   success: "rgb(22, 163, 74)",
    //   warning: "rgb(234, 88, 12)",
    //   light: "rgb(255, 255, 255)",
    //   dark: "rgb(2, 6, 23)",
    //   surface: "rgb(71, 85, 105)",
    // }],
    // focusedOutlineTextColors: [{
    //   primary: "rgb(0, 59, 235)",
    //   secondary: "rgb(71, 85, 105)",
    //   brand: "rgb(0, 59, 235)",
    //   error: "rgb(220, 38, 38)",
    //   success: "rgb(22, 163, 74)",
    //   warning: "rgb(234, 88, 12)",
    //   light: "rgb(255, 255, 255)",
    //   dark: "rgb(2, 6, 23)",
    //   surface: "rgb(100, 116, 139)",
    // }],
    // focusedColors: [{
    //   primary: "rgb(255, 255, 255)",
    //   secondary: "rgb(255, 255, 255)",
    //   brand: "rgb(255, 255, 255)",
    //   error: "rgb(255, 255, 255)",
    //   success: "rgb(255, 255, 255)",
    //   warning: "rgb(255, 255, 255)",
    //   light: "rgb(71, 85, 105)",
    //   dark: "rgb(255, 255, 255)",   // új dark a fillednél: "rgb(248, 250, 252)",
    //   surface: "rgb(100, 116, 139)",
    // }],
    // //pressed
    // activeColors: [{
    //   primary: "rgb(255, 255, 255)",
    //   secondary: "rgb(255, 255, 255)",
    //   brand: "rgb(255, 255, 255)",
    //   error: "rgb(255, 255, 255)",
    //   success: "rgb(255, 255, 255)",
    //   warning: "rgb(255, 255, 255)",
    //   light: "rgb(71, 85, 105)",
    //   dark: "rgb(255, 255, 255)",   // új dark a fillednél: "rgb(248, 250, 252)",
    //   surface: "rgb(100, 116, 139)",
    // }],
  
    // activeOutlineTextColors: [{
    //   primary: "rgb(0, 47, 189)",
    //   secondary: "rgb(51, 65, 85)", //ld. icon button
    //   brand: "rgb(0, 47, 189)",
    //   error: "rgb(185, 28, 28)",
    //   success: "rgb(21, 128, 61)",
    //   warning: "rgb(194, 65, 12)",
    //   light: "rgb(255, 255, 255)",
    //   dark: "rgb(2, 6, 23)",
    //   surface: "rgb(51, 65, 85)",
    // }],
  
    // //sizes
    allHeight: [{
      compact: "24px",
      comfortable: "32px",
      //spacious: "56px",
    }],
    allWidth: [{
      compact: "24px",
      comfortable: "40px",
      //spacious: "56px",
    }],
    // topBottomPadding: [{
    //   compact: "6px",
    //   comfortable: "10px",
    //   spacious: "16px",
    // }],
    // leftRightPadding: [{
    //   compact: "8px",
    //   comfortable: "20px",
    //   spacious: "24px",
    // }],
    allFontSize: [{
      compact: "12px",
      comfortable: "14px",
    }],
    allLineHeight: [{
      compact: "16px",
      comfortable: "20px",
    }],

    common: [{
        display: 'flex',
        flexShrink: '0',
        fontWeight: '500',
        alignItems: 'center',
        justifyContent: 'center'
      }],
    white: 'rgba(255, 255, 255, 0)',
    // white2: 'rgb(255, 255, 255) solid 3px',
    // black: 'rgb(0, 0, 0) solid 3px',
    hoverdOutlineBg: 'rgb(248, 250, 252)',
    // disabledBgColors: "rgb(226, 232, 240)",
    // hoveredTextBgColors: "rgb(241, 245, 249)",
    // disabledTextColors: "rgb(148, 163, 184)",
    // allRadius: '1000px'
    allFontWeight: '500'
  }
  
  export default tagTestData;
  
  