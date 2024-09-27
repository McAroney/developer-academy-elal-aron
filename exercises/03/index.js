
// Get the command-line arguments
const args = process.argv.slice(2);  // Slice to remove the first two default arguments

// Check if arguments were passed
if (args.length === 0) {
    console.log("No arguments provided.");
} else {
    console.log("Arguments provided:", args);
}

// Access specific arguments by their index
const firstArg = args[0];
const secondArg = args[1];

console.log("First argument:", firstArg);
console.log("Second argument:", secondArg);