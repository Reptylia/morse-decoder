const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    let poppy = Object.keys(MORSE_TABLE);
    let start = expr.split("");
    let finish = [];
    start.push(expr);
    let morse_symbols = [];
    let result = [];
    // add 10 length arrays
    for(let i = 0;i < expr.length / 10;i++) {
        let cost = start.splice(0, 10).join("");
        finish.push(cost);
    }
    // switch in morse symbol
    for(let i = 0;i < finish.length;i++) {
        let pop = "";
        if(finish[i][0] == '*') {
            morse_symbols.push(" ");
        } else {
            
     for(let j = 0;j < finish[i].length;j = j + 2) {
         
        if(finish[i][j] == "1" && finish[i][j + 1] == "0") {
           pop = pop + '.';
        } else if(finish[i][j] == "1" && finish[i][j + 1] == "1") {
           pop = pop + '-';
        }
        
        
     }
    }
    if(pop != "") {
    morse_symbols.push(pop);
    }
 }
for(let i = 0;i < morse_symbols.length;i++) {
    if(morse_symbols[i] == ' ') {
        result.push(' ');
    } else {
    result.push(MORSE_TABLE[morse_symbols[i]]);
    }
}

    return result.join('');
}




// function decoded(expr) {
//     let decoded = [];
//     let poppy = Object.keys(MORSE_TABLE);
//     let result = [];
//     let lolly = "";
//     for(let i = 0;i < expr.length;i++) {
//         if(expr[i] == ' ') {
//             result.push(" ");
//         } else {
//         for(let j = 0;j < poppy.length;j++) {
//             let pop = poppy[j];
//             if(expr[i] == MORSE_TABLE[pop]) {
//                 lolly = pop;
//                 result.push(lolly);
//         } 
//       }
//     }
//   }
//     for(let i = 0;i < result.length;i++) {
//         let lol = [];
//         let count = 0;
//             if(result[i] == ' ') {
//                 decoded.push("**********");
//             } else {
//                 for(let j = 0;j < result[i].length;j++) {
//                     if(result[i][j] == '.') {
//                         lol.push('10')
//                         count = count + 2;
//                     } else if (result[i][j] == "-") {
//                         lol.push("11");
//                         count = count + 2;
//                     }
//                 }
//                 for(let i = 0;i < 10 - count;i++) {
//                     lol.unshift(0);
//                 }
//             }
//             if(result[i] != ' ') {
//             decoded.push(lol.join(''));
//             }
//     }

// return decoded.join('');
// }
module.exports = {
    decode
}

// function decode(expr) {
//     let decoded = [];
//     let poppy = Object.keys(MORSE_TABLE);
//     let result = [];
//     let lolly = "";
//     for(let i = 0;i < expr.length;i++) {
//         if(expr[i] == ' ') {
//             result.push(" ");
//         } else {
//         for(let j = 0;j < poppy.length;j++) {
//             let pop = poppy[j];
//             if(expr[i] == MORSE_TABLE[pop]) {
//                 lolly = pop;
//                 result.push(lolly);
//         } 
//       }
//     }
//   }
//     for(let i = 0;i < result.length;i++) {
//         let lol = [];
//         let count = 0;
//             if(result[i] == ' ') {
//                 decoded.push("**********");
//             } else {
//                 for(let j = 0;j < result[i].length;j++) {
//                     if(result[i][j] == '.') {
//                         lol.push('10')
//                         count = count + 2;
//                     } else if (result[i][j] == "-") {
//                         lol.push("11");
//                         count = count + 2;
//                     }
//                 }
//                 for(let i = 0;i < 10 - count;i++) {
//                     lol.unshift(0);
//                 }
//             }
//             if(result[i] != ' ') {
//             decoded.push(lol.join(''));
//             }
//     }

// return decoded.join('');
// }