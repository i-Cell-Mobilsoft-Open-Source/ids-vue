const actionItemButtonTestData = {
    allModes: ["text", "filled"],
    allSizes: [
      "compact",
      "comfortable",
      "spacious",
    ],
    allVariants: [
      "surface"
    ],
//bgColors
enabledTextBgColors: [{
    surface: "rgba(255, 255, 255, 0)",
  }],
enabledFilledBgColors: [{
    surface: "rgb(241, 245, 249)",
  }],
//textColors
enabledTextColors: [{
    surface: "rgb(71, 85, 105)",
  }],
enabledFilledColors: [{
    surface: "rgb(51, 65, 85)",
  }],
//sizes
allHeight: [{
    compact: "24px",
    comfortable: "44px",
    spacious: "56px",
  }],
iconHeightWidth: [{
    compact: "20px",
    comfortable: "24px",
    spacious: "32px",
  }],
allFontSize: [{
    compact: "12px",
    comfortable: "16px",
    spacious: "16px",
  }],
  allLineHeight: [{
    compact: "16px",
    comfortable: "24px",
    spacious: "20px",
  }],
  TopLeftRadius: [{
    compact: "4px",
    comfortable: "8px",
    spacious: "16px",
  }],
  Radius: [{
    compact: "4px",
    comfortable: "8px",
    spacious: "16px",
  }],
  columnGap: [{
    compact: "2px",
    comfortable: "8px",
    spacious: "16px"
  }],
  rowGap: [{
    compact: "2px",
    comfortable: "8px",
    spacious: "16px"
  }],
  allPadding: [{
    compact: "2px",
    comfortable: "8px",
    spacious: "16px"
  }],
common: [{
    display: 'flex',
    flexShrink: '0',
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center',
  }],
    iconDisplay: 'flex',
    iconAlignItems: 'center',
    iconJustifyContent: 'center',
 
    enabled1TextColors: "rgb(71, 85, 105)",
    enabled1FilledColors: "rgb(51, 65, 85)",

    hoveredTextBgColors: "rgb(241, 245, 249)", //focus bg is text+filled
    hoveredColors: "rgb(0, 60, 255)", //focus fg is text+filled
    hoveredFilledBgColors: "rgb(226, 232, 240)",

    black: 'rgb(0, 0, 0) solid 3px',
    white: 'rgba(255, 255, 255, 0)',

    pressedTextBgColors: "rgb(226, 232, 240)",
    pressedColors: "rgb(0, 60, 255)",
    pressedFilledBgColors: "rgb(203, 213, 225)",

    disabledTextBgColors: "rgb(255, 255, 255)",
    disabledColors: "rgb(148, 163, 184)",
    disabledFilledBgColors: "rgb(226, 232, 240)",

    iconGap: '10px',


}

export default actionItemButtonTestData;