import MyClass from './myclass';
import * as http from 'http';

http.createServer(function (req, res) {
    const model = new MyClass();
    res.write(`Hello ${model.title}!`);
    res.end();
}).listen(80);

// TODO: generate actual url with a base36 encoded id for the url: statically 6 digits for now, go up to 10 if it ends up mattering: 60466176-2176782335 are 6 digits in base 36 # first 6 digit base36 number: 36^5...(36^6-1)
