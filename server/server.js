import express from "express";
import fetch from "node-fetch";
import NodeCache from "node-cache";
import cors from "cors";
import bodyParser from "body-parser";

const appCache = new NodeCache({ stdTTL: 1000 }); //stay in cache 1 minute
const app = express();
const router = express.Router();
const port = 5000; //backend routing port

app.use(bodyParser.json({ limit: "50mb" }));

app.use(
  cors({
    origin: "*",
  })
);

app.get("/category", (req, res) => {
  const query = req.query.term;
  if (appCache.has(query)) {
    return res.send(appCache.get(query));
  } else {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((res) => res.json())
      .then((json) => {
        appCache.set(query, json);
        res.send(json);
      });
  }
});

app.get("/item", (req, res) => {
  const query = req.query.id;
  if (appCache.has(query)) {
    return res.send(appCache.get(query));
  } else {
    fetch(`https://api.mercadolibre.com/items/${query}`)
      .then((res) => res.json())
      .then((json) => {
        appCache.set(query, json);
        res.send(json);
      });
  }
});

app.listen(port, () => {
  console.log("server start", port);
});
