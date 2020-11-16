import express from "express";
import cors from 'cors';
const app: express.Application = express();


// CORS 설정


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get(
    "/",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("테스트용");
    }
);
app.get(
    "/a",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("hello typescript ddddexpress!");
    }
);
app.listen(5000, ()=>{
    console.log("dssfafaf")
});

export default app;
