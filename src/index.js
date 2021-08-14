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
const add0 = {
    9: "0",
    8: "00",
    7: "000",
    6: "0000",
    5: "00000",
    4: "000000",
    3: "0000000",
    2: "00000000",
    1: "000000000",
}
// function decode (expr)


function decode(expr) {
    //разбиваем по 10 знаков и заносим в массив отдельными элементами

    let arr = expr.split(/(.{10})/).filter(O=>O);



/*     for (let i = 0; i < expr.length - 1; i = i + 10) {
        arr.push(expr.substring(i, 10));
     } */

    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "**********") {
            str += " ";
            continue;
        }
        strTemp = arr[i];
        //let strTemp = arr[i].slice(arr[i].indexOf("1"));
        let temp = "";
        for (let j = 0; j <= 8; ) {
            if (strTemp.slice(j, j+2) == "00") temp += "";
            if (strTemp.slice(j, j+2) == "10") temp += ".";
            if (strTemp.slice(j, j+2) == "11") temp += "-"; 
            j +=2;
        }
        str = str + MORSE_TABLE[temp]; 

    }


    return str;

    


/*         for (let j = 0; j < 10; ) {
            if (strTemp.substring(j, 2) == "00") {
                temp += "";
            }
            if (strTemp.substring(j, 2) == "10") {
                temp += "dot "
            } 
            if (strTemp.substring(j, 2) == "11") {
                temp += "tire"
            } 
            j +=2;       
        } */
        //str = str + `index: ${i+1}  ` + arr[i] +"\\"+ temp + "  ";

 //       str += MORSE_TABLE[temp];
        

/*     let str = ""


    for (let j = 0; j < arr.length - 1 ; j++) {
        if (arr[j] == "**********") str += " ";
        let morseChar = arr[j].slice(arr[j].indexOf("1"));
        str = str + MORSE_TABLE[morseChar];
    }

    return str; */

    //обрезаем с начала все нули
/*     arr.forEach ( (element) => {
        if (element == "**********") str = str + " ";
        for (let i = 0; i <= 8; i = i+2) {
            let morseCod = element.slice(element.indexOf("1"));
            str = MORSE_TABLE[morseCod];
        }    
    });

    return str; */


/*     let arr1 = arr.forEach(element => {
        let strTemp = "";
        for (let i = 0; i <= element.length - 2; i = i + 2) {
            if (element.substr[i, 2] == "10") strTemp = strTemp + "."
            if (element.substr[i, 2] == "11") strTemp = strTemp + "-";
        }
        element = strTemp;
    })
    return arr1; */





/*     let arr = expr.split("**********");
    let arr1 = arr.forEach(element => {
        if (element.length < 10) element = add0[element.length] + element;
        let strTemp = "";
        for (let i = 0; i <= 8; i = i + 2) {
            element.substr[i, 2] == "10" ? (strTemp = strTemp + ".") : (strTemp = strTemp + "-");
        }
        element = strTemp;
    })
    return arr1; */

}

module.exports = {
    decode
}

/* Каждая буква алфавита закодирована точками ( .) и тире ( -). 10обозначает точку ( .), 11обозначает тире ( -).
Длина каждой закодированной буквы 10 .
Если длина закодированной буквы меньше 10 , она left padded с 0.
Spaceв строке есть **********.
Вывод: строка (декодированная) Пример: me -> m === -- === 0000001111, e === . === 0000000010->00000011110000000010
*/
