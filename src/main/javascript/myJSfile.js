let question = false;
let toBe = false;

function myPoem(){
    if(toBe||!toBe){
        question = true;
        writePoem();
    }
}

function writePoem(){
    console.log("To be or not to be that is the question");
}