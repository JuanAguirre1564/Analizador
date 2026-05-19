# Analizador
El código sirve para construir un analizador e intérprete de un lenguaje de programación pequeño, usando ANTLR4 y JavaScript.
El programa toma el input.txt y lo procesa.
pila miPila {

crear([1,2,"hola"])!

empujar(50)!

mirar()!

sacar()!

}

Hay un analisis léxico: que divide un texto en tokens, por ejemplo:

empujar    EMPUJAR
(          LPAREN
50         NUMBER
)          RPAREN
!          BANG

El analisis sintactico verifica que el texto esté escrito bien. Es decir, se valida la estructura.

El arbol
            push
       /   /   \   \    \
empujar   (    50   )    !
