let a = new Promise<string>((resolve, reject) => {
  resolve("hello world");
});

const getName = function(this: import("..").Study): string {
  return this.name;
};
export { a, getName };
