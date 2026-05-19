grammar Pila;

programa
    : PILA ID LBRACE comandos RBRACE EOF
    ;

comandos
    : operacion*
    ;

operacion
    : crear
    | push
    | pop
    | peek
    ;

crear
    : CREAR LPAREN lista RPAREN BANG
    ;

push
    : EMPUJAR LPAREN valor RPAREN BANG
    ;

pop
    : SACAR LPAREN RPAREN BANG
    ;

peek
    : MIRAR LPAREN RPAREN BANG
    ;

valor
    : NUMBER
    | STRING
    ;

lista
    : LBRACK (valor (COMMA valor)*)? RBRACK
    ;

PILA       : 'pila';
CREAR      : 'crear';
EMPUJAR    : 'empujar';
SACAR      : 'sacar';
MIRAR      : 'mirar';

LPAREN     : '(';
RPAREN     : ')';
LBRACE     : '{';
RBRACE     : '}';
LBRACK     : '[';
RBRACK     : ']';
COMMA      : ',';
BANG       : '!';

ID         : [a-zA-Z_][a-zA-Z0-9_]*;

NUMBER     : [0-9]+;

STRING     : '"' (~["\r\n])* '"';

WS         : [ \t\r\n]+ -> skip;