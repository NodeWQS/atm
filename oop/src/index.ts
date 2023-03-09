interface Iuser {
  username: string;
  name: string;
  lastname: string;
  age: number;
}

interface IuserMethods {
  getInfo(): string;
}

class Customer implements Iuser, IuserMethods {
  constructor(
    public username: string,
    private readonly password: string,
    public name: string,
    public lastname: string,
    public age: number
  ) {}

  getInfo(): string {
    return `${this.name} ${this.lastname} ${this.age} ${this.username}`;
  }
}

const cs1 = new Customer('mes112', 'mospos321', 'Mesrop', 'Araqelyan', 42);
