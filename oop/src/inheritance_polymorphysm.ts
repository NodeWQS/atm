class Human {
  constructor(
    public name: string,
    public lastname: string,
    protected passport: string
  ) {}

  getInfo(): string {
    return `${this.name} ${this.lastname} ${this.passport}`;
  }
}

class Programmer extends Human {
  constructor(
    name: string,
    lastname: string,
    passport: string,
    public readonly profession: string
  ) {
    super(name, lastname, passport);
  }

  getInfo(): string {
    return `{this.name} ${this.lastname} ${this.passport} ${this.profession}`;
  }
}


const prog1 = new Programmer('Mesrop', 'Araqelyan', '1222111', 'programmer');
console.log(prog1.getInfo());
