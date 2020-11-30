export const mergeModAndClasses = (baseClass, modifier, classes) => {
  modifier = (!modifier || modifier === '') ? '' : `--${modifier}`
  classes = (!classes || classes === '') ? '' : ` ${classes}`
  return (`${baseClass}${modifier}${classes}`)
};
