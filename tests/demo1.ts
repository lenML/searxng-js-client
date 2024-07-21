import "dotenv/config";
import { SearxngClient } from "../src/Client";
import * as types from "../src/main";

import fs from "fs";

const {
  SEARXNG_PROTOCOL: protocol = "http",
  SEARXNG_HOST: host = "127.0.0.1",
  SEARXNG_PORT: port = "8888",
} = process.env;
const options: types.ClientOptions = {
  baseUrl: `${protocol}://${host}:${port}/`,
};

const client = new SearxngClient(options);

const searchParams: types.SearchParams = {
  q: "llm",
  categories: [types.Category.GENERAL, types.Category.WEB],
  format: types.Format.JSON,
  safesearch: types.SafeSearch.None,
  language: "auto",
  disabled_engines: ["dailymotion"],
  engines: [
    "bing",
    "google",
    "duckduckgo",
    "reddit",
    // "twitter",
    "bilibili",
    "youtube_noapi",
    "yahoo",
  ],
};

client
  .search(searchParams)
  .then((results) => {
    results.results = results.results.filter((result) => result.score >= 1);

    fs.writeFileSync("results.json", JSON.stringify(results, null, 2));
  })
  .catch((error) => console.error(error));
