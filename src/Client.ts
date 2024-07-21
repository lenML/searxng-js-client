import { SearxngResponse } from "./response.types";
import { ClientOptions, SearchParams } from "./types";

export class SearchFailError extends Error {
  constructor(message: string, public response: Response) {
    super(message);
    this.name = "SearchFailError";
  }
}

/**
 * @class SearchClient
 * @description Client to interact with the search API
 */
export class SearxngClient {
  /**
   * @constructor
   * @param {ClientOptions} options - Options for configuring the client
   */
  constructor(private options: ClientOptions) {
    options.fetch = options.fetch ?? globalThis.fetch;
    if (!options.fetch) {
      throw new Error("globalThis.Fetch is not defined");
    }
  }

  /**
   * @method search
   * @description Method to perform a search query
   * @param {SearchParams} params - Parameters for the search query
   * @returns {Promise<any>} - The search results
   */
  async search(params: SearchParams): Promise<SearxngResponse.TopLevel> {
    const { baseUrl, fetch = globalThis.fetch } = this.options;
    const url = new URL("/search", baseUrl);
    Object.entries(params).forEach(([key, val]) => {
      if (Array.isArray(val)) {
        url.searchParams.append(key, val.join(","));
      } else if (val !== undefined) {
        url.searchParams.append(key, val.toString());
      }
    });

    const response = await fetch(url.toString(), {
      method: "GET",
    });

    if (!response.ok) {
      throw new SearchFailError(
        `Search failed: ${response.statusText}`,
        response
      );
    }

    return response.json();
  }

  /**
   * Returns an async iterable iterator that iterates over the search results.
   *
   * @param {SearchParams} params - The search parameters.
   * @param {Object} [options] - The options for iterating over the search results.
   * @param {number} [options.maxResults] - The maximum number of results to iterate over.
   * @param {number} [options.maxPages] - The maximum number of pages to iterate over.
   * @returns {AsyncIterableIterator<SearxngResponse.Result>} - An async iterable iterator that yields the search results.
   */
  async *iterateSearch(
    params: SearchParams,
    options?: {
      maxResults?: number;
      maxPages?: number;
    }
  ): AsyncIterableIterator<SearxngResponse.Result> {
    let pageno = 1;
    let count = 0;
    while (true) {
      const { results } = await this.search({ ...params, pageno });
      if (results.length === 0) {
        break;
      }
      for (const result of results) {
        yield result;
        if (options?.maxResults && count >= options.maxResults) {
          break;
        }
        count++;
      }
      if (options?.maxPages && pageno >= options.maxPages) {
        break;
      }
      pageno++;
    }
  }
}
