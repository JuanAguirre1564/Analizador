import fs from 'fs';
import antlr4 from 'antlr4';

import PilaLexer from './PilaLexer.js';
import PilaParser from './PilaParser.js';

/*
 * LEER INPUT
 */

const input = fs.readFileSync(
    'input.txt',
    'utf8'
);

/*
 * CREAR INPUT STREAM
 */

const chars =
    new antlr4.InputStream(input);

/*
 * LEXER
 */

const lexer =
    new PilaLexer(chars);

/*
 * TOKENS
 */

const tokenStream =
    new antlr4.CommonTokenStream(
        lexer
    );

/*
 * PARSER
 */

const parser =
    new PilaParser(tokenStream);

/*
 * MOSTRAR TOKENS
 */

tokenStream.fill();

console.log(
    "\n===== TOKENS =====\n"
);

tokenStream.tokens.forEach(token => {

    if(token.type !== -1){

        console.log(
            token.text,
            "->",
            parser.symbolicNames[token.type]
        );

    }

});

/*
 * ARBOL
 */

const tree =
    parser.programa();

console.log(
    "\n===== ARBOL =====\n"
);

console.log(
    tree.toStringTree(
        parser.ruleNames
    )
);

/*
 * INTERPRETACION SIMPLE
 */

console.log(
    "\n===== INTERPRETACION =====\n"
);

let pila = [];

const texto = input;

/*
 * CREAR
 */

const crearRegex =
    /crear\s*\(\s*\[(.*?)\]\s*\)!/;

const crearMatch =
    texto.match(crearRegex);

if(crearMatch){

    const elementos =
        crearMatch[1]
        .split(',')
        .map(x => x.trim());

    pila = elementos.map(e => {

        if(e.startsWith('"')){

            return e.replace(/"/g,'');

        }

        return Number(e);

    });

    console.log(
        "Pila creada:",
        pila
    );

}

/*
 * PUSH
 */

const pushRegex =
    /empujar\s*\((.*?)\)!/g;

let pushMatch;

while(
    (pushMatch = pushRegex.exec(texto))
    !== null
){

    let valor =
        pushMatch[1].trim();

    if(valor.startsWith('"')){

        valor =
            valor.replace(/"/g,'');

    } else {

        valor =
            Number(valor);

    }

    pila.push(valor);

    console.log(
        "Push ->",
        valor
    );

}

/*
 * PEEK
 */

if(texto.includes('mirar()!')){

    console.log(
        "Peek ->",
        pila[pila.length - 1]
    );

}

/*
 * POP
 */

if(texto.includes('sacar()!')){

    const eliminado =
        pila.pop();

    console.log(
        "Pop ->",
        eliminado
    );

}

console.log(
    "Pila final:",
    pila
);