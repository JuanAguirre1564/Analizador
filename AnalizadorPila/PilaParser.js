// Generated from Pila.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import PilaListener from './PilaListener.js';
const serializedATN = [4,1,17,75,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,5,1,27,8,
1,10,1,12,1,30,9,1,1,2,1,2,1,2,1,2,3,2,36,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,
4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,
8,1,8,1,8,1,8,5,8,66,8,8,10,8,12,8,69,9,8,3,8,71,8,8,1,8,1,8,1,8,0,0,9,0,
2,4,6,8,10,12,14,16,0,1,1,0,15,16,71,0,18,1,0,0,0,2,28,1,0,0,0,4,35,1,0,
0,0,6,37,1,0,0,0,8,43,1,0,0,0,10,49,1,0,0,0,12,54,1,0,0,0,14,59,1,0,0,0,
16,61,1,0,0,0,18,19,5,1,0,0,19,20,5,14,0,0,20,21,5,8,0,0,21,22,3,2,1,0,22,
23,5,9,0,0,23,24,5,0,0,1,24,1,1,0,0,0,25,27,3,4,2,0,26,25,1,0,0,0,27,30,
1,0,0,0,28,26,1,0,0,0,28,29,1,0,0,0,29,3,1,0,0,0,30,28,1,0,0,0,31,36,3,6,
3,0,32,36,3,8,4,0,33,36,3,10,5,0,34,36,3,12,6,0,35,31,1,0,0,0,35,32,1,0,
0,0,35,33,1,0,0,0,35,34,1,0,0,0,36,5,1,0,0,0,37,38,5,2,0,0,38,39,5,6,0,0,
39,40,3,16,8,0,40,41,5,7,0,0,41,42,5,13,0,0,42,7,1,0,0,0,43,44,5,3,0,0,44,
45,5,6,0,0,45,46,3,14,7,0,46,47,5,7,0,0,47,48,5,13,0,0,48,9,1,0,0,0,49,50,
5,4,0,0,50,51,5,6,0,0,51,52,5,7,0,0,52,53,5,13,0,0,53,11,1,0,0,0,54,55,5,
5,0,0,55,56,5,6,0,0,56,57,5,7,0,0,57,58,5,13,0,0,58,13,1,0,0,0,59,60,7,0,
0,0,60,15,1,0,0,0,61,70,5,10,0,0,62,67,3,14,7,0,63,64,5,12,0,0,64,66,3,14,
7,0,65,63,1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,71,1,0,0,
0,69,67,1,0,0,0,70,62,1,0,0,0,70,71,1,0,0,0,71,72,1,0,0,0,72,73,5,11,0,0,
73,17,1,0,0,0,4,28,35,67,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class PilaParser extends antlr4.Parser {

    static grammarFileName = "Pila.g4";
    static literalNames = [ null, "'pila'", "'crear'", "'empujar'", "'sacar'", 
                            "'mirar'", "'('", "')'", "'{'", "'}'", "'['", 
                            "']'", "','", "'!'" ];
    static symbolicNames = [ null, "PILA", "CREAR", "EMPUJAR", "SACAR", 
                             "MIRAR", "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                             "LBRACK", "RBRACK", "COMMA", "BANG", "ID", 
                             "NUMBER", "STRING", "WS" ];
    static ruleNames = [ "programa", "comandos", "operacion", "crear", "push", 
                         "pop", "peek", "valor", "lista" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = PilaParser.ruleNames;
        this.literalNames = PilaParser.literalNames;
        this.symbolicNames = PilaParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, PilaParser.RULE_programa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(PilaParser.PILA);
	        this.state = 19;
	        this.match(PilaParser.ID);
	        this.state = 20;
	        this.match(PilaParser.LBRACE);
	        this.state = 21;
	        this.comandos();
	        this.state = 22;
	        this.match(PilaParser.RBRACE);
	        this.state = 23;
	        this.match(PilaParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comandos() {
	    let localctx = new ComandosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, PilaParser.RULE_comandos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 60) !== 0)) {
	            this.state = 25;
	            this.operacion();
	            this.state = 30;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion() {
	    let localctx = new OperacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, PilaParser.RULE_operacion);
	    try {
	        this.state = 35;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 31;
	            this.crear();
	            break;
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 32;
	            this.push();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 33;
	            this.pop();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 34;
	            this.peek();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	crear() {
	    let localctx = new CrearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, PilaParser.RULE_crear);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(PilaParser.CREAR);
	        this.state = 38;
	        this.match(PilaParser.LPAREN);
	        this.state = 39;
	        this.lista();
	        this.state = 40;
	        this.match(PilaParser.RPAREN);
	        this.state = 41;
	        this.match(PilaParser.BANG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	push() {
	    let localctx = new PushContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, PilaParser.RULE_push);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        this.match(PilaParser.EMPUJAR);
	        this.state = 44;
	        this.match(PilaParser.LPAREN);
	        this.state = 45;
	        this.valor();
	        this.state = 46;
	        this.match(PilaParser.RPAREN);
	        this.state = 47;
	        this.match(PilaParser.BANG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pop() {
	    let localctx = new PopContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, PilaParser.RULE_pop);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.match(PilaParser.SACAR);
	        this.state = 50;
	        this.match(PilaParser.LPAREN);
	        this.state = 51;
	        this.match(PilaParser.RPAREN);
	        this.state = 52;
	        this.match(PilaParser.BANG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	peek() {
	    let localctx = new PeekContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, PilaParser.RULE_peek);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.match(PilaParser.MIRAR);
	        this.state = 55;
	        this.match(PilaParser.LPAREN);
	        this.state = 56;
	        this.match(PilaParser.RPAREN);
	        this.state = 57;
	        this.match(PilaParser.BANG);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, PilaParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        _la = this._input.LA(1);
	        if(!(_la===15 || _la===16)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	lista() {
	    let localctx = new ListaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, PilaParser.RULE_lista);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.match(PilaParser.LBRACK);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15 || _la===16) {
	            this.state = 62;
	            this.valor();
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===12) {
	                this.state = 63;
	                this.match(PilaParser.COMMA);
	                this.state = 64;
	                this.valor();
	                this.state = 69;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 72;
	        this.match(PilaParser.RBRACK);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

PilaParser.EOF = antlr4.Token.EOF;
PilaParser.PILA = 1;
PilaParser.CREAR = 2;
PilaParser.EMPUJAR = 3;
PilaParser.SACAR = 4;
PilaParser.MIRAR = 5;
PilaParser.LPAREN = 6;
PilaParser.RPAREN = 7;
PilaParser.LBRACE = 8;
PilaParser.RBRACE = 9;
PilaParser.LBRACK = 10;
PilaParser.RBRACK = 11;
PilaParser.COMMA = 12;
PilaParser.BANG = 13;
PilaParser.ID = 14;
PilaParser.NUMBER = 15;
PilaParser.STRING = 16;
PilaParser.WS = 17;

PilaParser.RULE_programa = 0;
PilaParser.RULE_comandos = 1;
PilaParser.RULE_operacion = 2;
PilaParser.RULE_crear = 3;
PilaParser.RULE_push = 4;
PilaParser.RULE_pop = 5;
PilaParser.RULE_peek = 6;
PilaParser.RULE_valor = 7;
PilaParser.RULE_lista = 8;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_programa;
    }

	PILA() {
	    return this.getToken(PilaParser.PILA, 0);
	};

	ID() {
	    return this.getToken(PilaParser.ID, 0);
	};

	LBRACE() {
	    return this.getToken(PilaParser.LBRACE, 0);
	};

	comandos() {
	    return this.getTypedRuleContext(ComandosContext,0);
	};

	RBRACE() {
	    return this.getToken(PilaParser.RBRACE, 0);
	};

	EOF() {
	    return this.getToken(PilaParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class ComandosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_comandos;
    }

	operacion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(OperacionContext);
	    } else {
	        return this.getTypedRuleContext(OperacionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterComandos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitComandos(this);
		}
	}


}



class OperacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_operacion;
    }

	crear() {
	    return this.getTypedRuleContext(CrearContext,0);
	};

	push() {
	    return this.getTypedRuleContext(PushContext,0);
	};

	pop() {
	    return this.getTypedRuleContext(PopContext,0);
	};

	peek() {
	    return this.getTypedRuleContext(PeekContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterOperacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitOperacion(this);
		}
	}


}



class CrearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_crear;
    }

	CREAR() {
	    return this.getToken(PilaParser.CREAR, 0);
	};

	LPAREN() {
	    return this.getToken(PilaParser.LPAREN, 0);
	};

	lista() {
	    return this.getTypedRuleContext(ListaContext,0);
	};

	RPAREN() {
	    return this.getToken(PilaParser.RPAREN, 0);
	};

	BANG() {
	    return this.getToken(PilaParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterCrear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitCrear(this);
		}
	}


}



class PushContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_push;
    }

	EMPUJAR() {
	    return this.getToken(PilaParser.EMPUJAR, 0);
	};

	LPAREN() {
	    return this.getToken(PilaParser.LPAREN, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	RPAREN() {
	    return this.getToken(PilaParser.RPAREN, 0);
	};

	BANG() {
	    return this.getToken(PilaParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPush(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPush(this);
		}
	}


}



class PopContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_pop;
    }

	SACAR() {
	    return this.getToken(PilaParser.SACAR, 0);
	};

	LPAREN() {
	    return this.getToken(PilaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PilaParser.RPAREN, 0);
	};

	BANG() {
	    return this.getToken(PilaParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPop(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPop(this);
		}
	}


}



class PeekContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_peek;
    }

	MIRAR() {
	    return this.getToken(PilaParser.MIRAR, 0);
	};

	LPAREN() {
	    return this.getToken(PilaParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(PilaParser.RPAREN, 0);
	};

	BANG() {
	    return this.getToken(PilaParser.BANG, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterPeek(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitPeek(this);
		}
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_valor;
    }

	NUMBER() {
	    return this.getToken(PilaParser.NUMBER, 0);
	};

	STRING() {
	    return this.getToken(PilaParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitValor(this);
		}
	}


}



class ListaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = PilaParser.RULE_lista;
    }

	LBRACK() {
	    return this.getToken(PilaParser.LBRACK, 0);
	};

	RBRACK() {
	    return this.getToken(PilaParser.RBRACK, 0);
	};

	valor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ValorContext);
	    } else {
	        return this.getTypedRuleContext(ValorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(PilaParser.COMMA);
	    } else {
	        return this.getToken(PilaParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.enterLista(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof PilaListener ) {
	        listener.exitLista(this);
		}
	}


}




PilaParser.ProgramaContext = ProgramaContext; 
PilaParser.ComandosContext = ComandosContext; 
PilaParser.OperacionContext = OperacionContext; 
PilaParser.CrearContext = CrearContext; 
PilaParser.PushContext = PushContext; 
PilaParser.PopContext = PopContext; 
PilaParser.PeekContext = PeekContext; 
PilaParser.ValorContext = ValorContext; 
PilaParser.ListaContext = ListaContext; 
