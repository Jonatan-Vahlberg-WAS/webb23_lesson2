const { writeFile } = require("fs");

function readLineRep() {
    
    // Readline
    const readLine = require("readline");
    const readLine_promise = require("readline/promises");
    
    // create rl interface
    const rl = readLine.createInterface(process.stdin, process.stdout);
    
    // Does not wait for answer
    rl.question("What is your name? ", (name) => {
        console.log(`Hi ${name}`);
        rl.close();
        
        const rlp = readLine_promise.createInterface(process.stdin, process.stdout);
        
        // then/catch/finally
        rlp
        .question("How old are you? ")
        .then((ageInput) => {
            const age = true //parseInt(ageInput);
            
            if (!isNaN(age) && typeof age === "number") {
                return console.log(`You are ${age} years old`);
            }
            throw new Error("Non number entered");
        })
        .catch((err) => {
            console.log("Error: ", err.message);
        })
        .finally(() => {
            rlp.close()  
        })
    });
}
// readLineRep()
    
// Args

function argsRep() {
    const { argv } = process

    const args = argv.slice(2)
    console.log(args)
    const isTesting = !!args.find(arg => arg === "--testing")
    console.log("Program started in test mode", isTesting)

    const filePathArgIndex = args.findIndex(arg => arg === "--filePath")
    const filePath = args[filePathArgIndex + 1];
    console.log(filePath)

}

//!! = bang => compare if value is truthy ie not a false value
//? ! = not => "" 0 undefined null false

// argsRep()


// FS module (CRUD)

async function fileSystemRep() {
    const { argv } = process;
    const args = argv.slice(2);
    const filePathArgIndex = args.findIndex((arg) => arg === "--filePath");
    const filePath = args[filePathArgIndex + 1];

    const fs = require("fs/promises")
    
    //Write / Create
    try {
        await fs.writeFile(filePath, "hello world", "utf-8")
        console.log("Wrote data to ", filePath)
    }
    catch (err) {
        console.log("Error: In writing file to ", filePath);
    }

    //Read & Update
    try {
        const data = await fs.readFile(filePath, "utf-8");
        console.log("File Content: ", data.toString())
        await fs.writeFile(filePath, data.toString().replace("world", "world!"))
        console.log("Updated data in ", filePath);

    } catch (err) {
      console.log("Error: In reading file ", filePath, err);
    }
    
    try {
        await fs.unlink(filePath)
        console.log("Removed file at ", filePath)
    }
    catch (err) {
        console.log("Error: could not remove file at ", filePath, err)
    }
}

fileSystemRep()


