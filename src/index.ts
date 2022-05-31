import { a } from "./moduleA";

(async (): Promise<void> => {
  console.log(await a);
  document.write("<div id='main'><div class='info'>" + (await a) + "</div></div>");
})();

import "./css/index.scss";
