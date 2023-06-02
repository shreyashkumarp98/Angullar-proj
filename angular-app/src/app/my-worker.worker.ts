/// <reference lib="webworker" />

import { factorialCalc } from "src/learning/webworkerdemo/factorial.function";

addEventListener('message', ({ data }) => {
  const info = `worker response to ${data}`;
  console.log('recieved data is '+ info)
  const response = factorialCalc(data) //1000
  
  postMessage(response);
});
