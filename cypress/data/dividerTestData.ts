const dividerTestData = {

  allSizes: [
    "compact",
    "comfortable",
    "spacious",
  ],
  allVariants: [
    "primary",
    "secondary",
    "brand",
    "error",
    "success",
    "warning",
    "light",
    "dark",
    "surface"
  ],

  //bgColors
  enabledBgColors: [{
    primary: "rgb(0, 60, 255)",
    secondary: "rgb(100, 116, 139)",
    brand: "rgb(0, 60, 255)",
    error: "rgb(220, 38, 38)",
    success: "rgb(34, 197, 94)",
    warning: "rgb(249, 115, 22)",
    light: "rgb(255, 255, 255)",
    dark: "rgb(2, 6, 23)",
    surface: "rgb(203, 213, 225)",
  }],

  //sizes
  allHeight: [{
    compact: "1px",
    comfortable: "2px",
    spacious: "4px",
  }],
  allWidth: [{
    compact: "1px",
    comfortable: "2px",
    spacious: "4px",
  }],

  common: [{
    flexShrink: '0',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  }],
  verticalWidth: '250px',
  verticalHeight: '200px',
  flexdirection: 'column',
  allRadius: '0px',
  allPadding: '0px'
}

export default dividerTestData;