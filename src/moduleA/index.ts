import { a, getName, getAge, getInfo } from "./funcA";

class Study {
  name: string;
  age: number;
  constructor(options: IOptions) {
    this.name = options.name;
    this.age = options.age;
  }
  getName: () => string = getName;
  getAge: () => number = getAge;
  getInfo: () => string = getInfo;
}

interface IOptions {
  name: string;
  age: number;
}

export { a, Study, IOptions };
