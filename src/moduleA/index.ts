import { a, getName } from "./funcA";

class Study {
  name: string;
  age: number;
  constructor(options: IOptions) {
    this.name = options.name;
    this.age = options.age;
  };
  getName: () => string = getName;
}

interface IOptions {
  name: string;
  age: number;
}

export { a, Study };
