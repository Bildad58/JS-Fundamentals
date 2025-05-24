const py = "Python is cool";
const c ="C is fun";
const h = "Html is good"

const args = process.argv.slice(2);

if (args[0] === undefined) {
    console.log("No argument");
}else {
    console.log(args[0]);
}