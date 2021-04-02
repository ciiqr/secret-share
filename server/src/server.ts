import MyClass from './myclass';
import * as http from 'http';

http.createServer(function (req, res) {
    const model = new MyClass();
    res.write(`Hello ${model.title}!`);
    res.end();
}).listen(8100);
