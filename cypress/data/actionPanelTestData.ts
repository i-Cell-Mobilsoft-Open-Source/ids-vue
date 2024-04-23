const actionPanelTestData = {
  allModes: ["filled", "outlined", "elevated"],
  allSizes: ["compact"],
  allVariants: ["light"],

  //common
  display: 'flex',
  width: '356px',
  flexDirection: 'column',
  alignItems: 'flex-start',
  //colors
  enabledColors: 'rgb(33, 53, 71)',
  white: 'rgb(255, 255, 255)',
  filledBorderColor: 'rgb(229, 231, 235)',
  outlinedBorderColor: 'rgb(203, 213, 225)',
  elevatedBorderColor: 'rgb(229, 231, 235)',
  //sizes
  allWidth: [{
    compact: "356px",
  }],
  radius: '16px',
  padding: '8px',
  gap: '8px',

  outlinedBoxShadow:  'rgba(0, 0, 0, 0.1) 0px 1px 2px 0px',
  elevatedBoxShadow: 'rgba(0, 0, 0, 0.25) 0px 25px 50px -12px',
}

export default actionPanelTestData;