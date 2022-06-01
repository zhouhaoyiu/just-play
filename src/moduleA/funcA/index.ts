let a = new Promise<string>((resolve, reject) => {
  resolve("hello world");
});

const getName = function (this: import("..").Study): string {
  return this.name;
};

const getAge = function (this: import("..").Study): number {
  return this.age;
};

const getInfo = function (this: import("..").Study): string {
  return `${this.name} is ${this.age} years old`;
};

export { a, getName, getAge, getInfo };
