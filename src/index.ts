
import express from 'express';
// import path from 'path';
import faker from 'faker';

type addFn = (x: number, y: number) => void;

interface Iadd {
  a: number,
  b?: number
}

const add = (x: Iadd) => {
  return x.a + x.b!;
}

const app = express();
const port = 8080;

app.get('/', (req: any, res) => {

  req.name = faker.name.findName();

  res.send(`hello, ${req.name}`)
})

app.listen(port, () => {

  console.log(`server start at http://localhost:${port}`)
})

