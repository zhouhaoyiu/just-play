import { a, Study } from "./moduleA";

(async (): Promise<void> => {
  console.log(await a);
  document.write(
    "<div id='main'><div class='info'>" + (await a) + "</div></div>"
  );
})();

const study = new Study({
  name: "test",
  age: 22,
});

console.log(study.getName());

import "./css/index.scss";
