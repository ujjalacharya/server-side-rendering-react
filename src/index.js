import "babel-polyfill";
import express from "express";
import renderer from "./helpers/renderer";

import createStore from "./helpers/createStore";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";

import proxy from 'express-http-proxy';

const app = express();
const PORT = 3001;

app.use(express.static("public"));

app.use("/api", proxy("https://www.basobaas.com/api", {
// app.use("/api", proxy("https://jsonplaceholder.typicode.com", {
    proxyReqOptDecorator(opts){
        opts.headers['x-forwarded-host'] = "localhost:3001";
        return opts;
    }
})
)

app.get("*", (req, res) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
