import * as express from "express";

const app: express.Application = express();

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get(
    "/",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("테스트");
    }
);
app.get(
    "/test",
    (req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.send("test");
    }
);
app.listen(5000, ()=>{
    console.log("dssdfsdfdsfafaf")
});

export default app;
