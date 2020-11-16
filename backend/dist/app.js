"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
// CORS 설정
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.get("/", (req, res, next) => {
    res.send("heddfgfdgdsfdfsdsfsdfsdsfsdt express!");
});
app.get("/a", (req, res, next) => {
    res.send("hello typescript ddddexpress!");
});
app.listen(5000, () => {
    console.log("dssfafaf");
});
exports.default = app;
//# sourceMappingURL=app.js.map