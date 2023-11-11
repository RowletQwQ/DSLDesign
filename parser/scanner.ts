export enum TokenType {
  EOF,
  Keyword,
  Identifier,
  Number,
  String,
  Char,
  Operator,
  Delimiter,
}
export class Token {
  type: TokenType;
  value: string;
  constructor(type: TokenType, value: string) {
    this.type = type;
    this.value = value;
  }
}

export class Scanner {
  private input: string;
  private currentPos: number;
  private currentToken: Token | null;
  private currentLine: number;
  private currentColumn: number;

  constructor(input: string) {
    this.input = input;
    this.currentPos = 0;
    this.currentToken = null;
  }

  private isKeyword(value: string): boolean {
    const keywords = ["topic", "say", "goto", "constance"];
    return keywords.includes(value);
  }

  private isDigit(char: string): boolean {
    return /\d/.test(char);
  }

  private isLetter(char: string): boolean {
    return /[a-zA-Z]/.test(char);
  }

  private isOperator(char: string): boolean {
    const operators = ["+", "-", "*", "/", "="];
    return operators.includes(char);
  }

  private isDelimiter(char: string): boolean {
    const delimiters = ["(", ")", "{", "}", ",", ";"];
    return delimiters.includes(char);
  }

  private getNextChar(): string {
    if (this.currentPos >= this.input.length) {
      throw new Error("End of input reached");
    }
    const char = this.input[this.currentPos];
    this.currentPos++;
    return char;
  }

  private peekNextChar(): string | null {
    if (this.currentPos >= this.input.length) {
      return null;
    }
    return this.input[this.currentPos];
  }

  private skipWhitespace(): void {
    let char = this.peekNextChar();
    while (char !== null && /\s/.test(char)) {
      this.getNextChar();
      char = this.peekNextChar();
    }
  }

  private scanIdentifier(): Token {
    let value = "";
    let char = this.peekNextChar();
    while (char !== null && (this.isLetter(char) || this.isDigit(char))) {
      value += char;
      this.getNextChar();
      char = this.peekNextChar();
    }
    const type = this.isKeyword(value)
      ? TokenType.Keyword
      : TokenType.Identifier;
    return new Token(type, value);
  }

  private scanNumber(): Token {
    let value = "";
    let char = this.peekNextChar();
    while (char !== null && this.isDigit(char)) {
      value += char;
      this.getNextChar();
      char = this.peekNextChar();
    }
    return new Token(TokenType.Number, value);
  }

  private scanString(): Token {
    let value = "";
    let char = this.getNextChar();
    while (char !== null && char !== '"') {
      value += char;
      char = this.getNextChar();
    }
    return new Token(TokenType.String, value);
  }

  private scanChar(): Token {
    const value = this.getNextChar();
    this.getNextChar(); // consume closing single quote
    return new Token(TokenType.Char, value);
  }

  private scanOperator(): Token {
    let value = "";
    let char = this.peekNextChar();
    while (char !== null && this.isOperator(value + char)) {
      value += char;
      this.getNextChar();
      char = this.peekNextChar();
    }
    return new Token(TokenType.Operator, value);
  }

  private scanDelimiter(): Token {
    const value = this.getNextChar();
    return new Token(TokenType.Delimiter, value);
  }

  private scanNextToken(): Token | null {
    this.skipWhitespace();
    const char = this.peekNextChar();
    if (char === null) {
      return null;
    }
    if (this.isLetter(char)) {
      return this.scanIdentifier();
    }
    if (this.isDigit(char)) {
      return this.scanNumber();
    }
    if (char === '"') {
      return this.scanString();
    }
    if (char === "'") {
      return this.scanChar();
    }
    if (this.isOperator(char)) {
      return this.scanOperator();
    }
    if (this.isDelimiter(char)) {
      return this.scanDelimiter();
    }
    throw new Error(`Invalid character: ${char}`);
  }

  public getNextToken(): Token | null {
    const token = this.currentToken;
    this.currentToken = this.scanNextToken();
    return token;
  }
  public traceback(): void {
    this.currentPos--;
    log.info(`traceback to ${this.currentPos}`);
  }
}
