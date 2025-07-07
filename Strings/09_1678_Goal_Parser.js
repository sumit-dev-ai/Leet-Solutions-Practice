/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let output="";
    for(let i=0;i<command.length;i++){
        if(command[i]==='G'){
            output+='G';
        }
        else if(command[i]==='(' && command[i+1]===')'){
            output+='o';
            i++;   //to skip next character
        }
        else if (command[i] === "(" && command[i + 1] === "a"){
            output+='al';
            i+=3;
        }


    }
    return output;
};

console.log(interpret("G()(al)"));          // "Goal"
console.log(interpret("G()()()()(al)"));    // "Gooooal"
console.log(interpret("(al)G(al)()()G"));   // "alGalooG"
