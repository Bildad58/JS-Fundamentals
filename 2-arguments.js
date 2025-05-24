const py = "Python is cool";
const c ="C is fun";
const h = "Html is good"

const args = process.argv.slice(2); // Skip the first two default values

if (args.length === 0) {
    console.log("No argument");
}else if(args.length ===1)
    {console.log("Argument found")}
else{
    console.log("Arguments found")
}