
import express from 'express';
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

  let testHtml = `<H1>
  hello test: ${req.name}, for Docker!!
  </H1>`

  res.send(testHtml)
})

app.listen(port, () => {

  console.log(`server start at http://localhost:${port}`)
})

