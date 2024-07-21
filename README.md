# searxng-js-client
searxng client for javascript

# install
```
pnpm add @lenml/searxng-js-client
```

# usage
```ts
import {
  SearxngClient,
  Category,
  Format,
  SafeSearch,
  SearchParams,
} from "@lenml/searxng-js-client";

const client = new SearxngClient({ baseUrl: "http://your_instance_address/" });

const searchParams: SearchParams = {
  q: "what is llm?",
  categories: [Category.GENERAL, Category.WEB],
  format: Format.JSON,
  safesearch: SafeSearch.None,
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

const { results } = await client.search(searchParams);
// results: { ... }[]
```
