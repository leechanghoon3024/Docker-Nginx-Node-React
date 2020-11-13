"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.get("/", (req, res, next) => {
    res.send("테스트");
});
app.get("/test", (req, res, next) => {
    res.send("test");
});
app.listen(5000, () => {
    console.log("dssdfsdfdsfafaf");
});
exports.default = app;
//# sourceMappingURL=app.js.map