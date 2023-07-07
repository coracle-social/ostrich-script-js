import { testFunction } from "lib";
import "./main.scss";

testFunction("Fabio");

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Vite Library Template!</h1>
`
