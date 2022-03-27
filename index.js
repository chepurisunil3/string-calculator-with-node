const yargs = require("yargs");
const { sumOfGivenNumbers } = require("./controllers/add");

yargs.usage("\nUsage: $0 [cmd] <args>").alias("h", "help");

yargs.command(
  "add",
  "Sum of given numbers", 
  {
    numbers:{
      type:"string",
      demandOption:true,
      describe:"Input multiple numbers to return sum of them. Multiple number can be given by ',' or '\\n\' delimited or custom delimiter with pattern '//[delimiter]\\n\[numbers…]'"
    }
  },
  (argv) => {
    try {
      const value = sumOfGivenNumbers(argv.numbers)
      console.log(value);
    } catch (error) {
      console.log(error.message)
    }
    
  }
).example("node $0 add --numbers='1;2;3'");

yargs.parse()

if(yargs.argv._.length == 0)
{
  console.log("No operation selected! Please type node index --help to check the valid operations.");
}