"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var faker_1 = __importDefault(require("faker"));
var add = function (x) {
    return x.a + x.b;
};
var app = express_1.default();
var port = 8080;
app.get('/', function (req, res) {
    req.name = faker_1.default.name.findName();
    res.send("hello, " + req.name + ", for docker !!");
});
app.listen(port, function () {
    console.log("server start at http://localhost:" + port);
});
