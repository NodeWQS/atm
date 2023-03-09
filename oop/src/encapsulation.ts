class User {
    constructor(
        private readonly name: string,
        private readonly lastname: string,
        public age: number
    ) {}

    public getInfo() {
        return `${this.name} ${this.lastname} ${this.age}`
    }
}

const mesrop1122 = new User("Mesrop", "Araqelyan", 18);
console.log(mesrop1122);
