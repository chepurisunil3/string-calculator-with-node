module.exports.sumOfGivenNumbers = (numbers) => {
  if(numbers == "")
  {
    return 0; // return 0 for empty values
  }
  if(!isNaN(numbers))
  {
    return numbers; // return given value for single number
  }
  let delimiter = ";" // default delimiter
  let isCustomDelimiter = false;
  // check for custom delimiter
  if(numbers.indexOf("//") == 0)
  {
    if(numbers.indexOf("\n") > 2)
    {
      // matched for custom delimiter
      delimiter = numbers.substring(2,numbers.indexOf("\n"));
      isCustomDelimiter = true;
    }
    else {
      throw new Error("Values given with Invalid delimiter pattern. Please check the description for correct pattern")
    }
  }
  const reg = new RegExp(`${delimiter}|\n`) // check for actual delimiter or \n
  const values = isCustomDelimiter ? numbers.substring(numbers.indexOf("\n")+1).split(reg) :numbers.split(reg)
  if(values.length > 0)
  {
      const nanValues = values.filter((eachValue) => { return isNaN(eachValue)});
      if(nanValues.length > 0)
      {
        throw new Error("Invalid inputs given - "+nanValues.join(","))
      }
      const negativeValues = values.filter((eachValue) => {return Number(eachValue) < 0});
      if(negativeValues.length > 0)
      {
        throw new Error("negatives not allowed - "+negativeValues.join(","))
      }
      const sum = values.reduce((sumOfValue,eachValue) => sumOfValue + Number(eachValue),0);
      return sum;
  }
  else {
    return 0;
  }
}