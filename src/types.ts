import { engines } from "./engines";

export enum Category {
  GENERAL = "general",
  TRANSLATE = "translate",
  WEB = "web",
  WIKIMEDIA = "wikimedia",
  IMAGES = "images",
  VIDEOS = "videos",
  NEWS = "news",
  MAP = "map",
  MUSIC = "music",
  LYRICS = "lyrics",
  RADIO = "radio",
  IT = "it",
  PACKAGES = "packages",
  QANDA = "q&a",
  REPOS = "repos",
  SOFTWARE_WIKIS = "software_wikis",
  SCIENCE = "science",
  SCIENTIFIC_PUBLICATIONS = "scientific_publications",
  FILES = "files",
  APPS = "apps",
  SOCIAL_MEDIA = "social_media",
}
export type ClientOptions = {
  baseUrl: string;
  fetch?: typeof fetch;
};
export enum AutocompleteBackend {
  Google = "google",
  DBpedia = "dbpedia",
  DuckDuckGo = "duckduckgo",
  Mwmbl = "mwmbl",
  Startpage = "startpage",
  Wikipedia = "wikipedia",
  Stract = "stract",
  Swisscows = "swisscows",
  Qwant = "qwant",
}
export enum TimeRange {
  Day = "day",
  Month = "month",
  Year = "year",
}

export enum Format {
  JSON = "json",
  CSV = "csv",
  RSS = "rss",
}

export enum SafeSearch {
  None = 0,
  Moderate = 1,
  Strict = 2,
}
export enum Plugin {
  HashPlugin = "Hash_plugin",
  SelfInformation = "Self_Information",
  TrackerURLRemover = "Tracker_URL_remover",
  AhmiaBlacklist = "Ahmia_blacklist",
  HostnamesPlugin = "Hostnames_plugin",
  OpenAccessDOIRewrite = "Open_Access_DOI_rewrite",
  VimLikeHotkeys = "Vim-like_hotkeys",
  TorCheckPlugin = "Tor_check_plugin",
}
export type EngineType = (typeof engines)[number];
export type SearchParams = {
  /**
   * The search query. This string is passed to external search services.
   * For example, site:github.com SearXNG is a valid query for Google.
   * Note: Syntax may vary based on the search service used.
   * @type {string}
   */
  q: string;

  /**
   * Comma separated list specifying the active search categories.
   * See Configured Engines for available categories.
   * @type {Category[]}
   * @optional
   */
  categories?: Category[];

  /**
   * Comma separated list specifying the active search engines.
   * See Configured Engines for available engines.
   * @type {EngineType[]}
   * @optional
   */
  engines?: EngineType[];

  /**
   * Code of the language for the search query.
   * Defaults to the language setting of the search.
   * @type {string}
   * @optional
   */
  language?: string;

  /**
   * Search page number. Defaults to 1.
   * @type {number}
   * @optional
   */
  pageno?: number;

  /**
   * Time range for search results. Options are day, month, year.
   * Applies to engines which support time range filtering.
   * @type {TimeRange}
   * @optional
   */
  time_range?: TimeRange;

  /**
   * Output format of results. Options are json, csv, rss.
   * Format needs to be activated in search preferences.
   * @type {Format}
   * @optional
   */
  format?: Format;

  /**
   * Open search results in a new tab.
   * Defaults to 0 (false).
   * Options: 0 (false), 1 (true).
   * @type {0 | 1}
   * @optional
   */
  results_on_new_tab?: 0 | 1;

  /**
   * Proxy image results through SearXNG.
   * Defaults to the server setting.
   * Options: true, false.
   * @type {boolean}
   * @optional
   */
  image_proxy?: boolean;

  /**
   * Service which completes words as you type.
   * Defaults to the search setting.
   * Options: google, dbpedia, duckduckgo, mwmbl, startpage, wikipedia, stract, swisscows, qwant.
   * @type {AutocompleteBackend}
   * @optional
   */
  autocomplete?: AutocompleteBackend;

  /**
   * Filter search results of engines which support safe search.
   * Defaults to the search setting.
   * Options: 0 (off), 1 (moderate), 2 (strict).
   * @type {SafeSearch}
   * @optional
   */
  safesearch?: SafeSearch;

  /**
   * Theme of the instance. Defaults to 'simple'.
   * Note: Available themes depend on the instance configuration.
   * @type {string}
   * @optional
   */
  theme?: string;

  /**
   * List of enabled plugins.
   * Defaults: Hash_plugin, Self_Information, Tracker_URL_remover, Ahmia_blacklist.
   * Other options: Hostnames_plugin, Open_Access_DOI_rewrite, Vim-like_hotkeys, Tor_check_plugin.
   * @type {Plugin[]}
   * @optional
   */
  enabled_plugins?: Plugin[];

  /**
   * List of disabled plugins.
   * Defaults: Hostnames_plugin, Open_Access_DOI_rewrite, Vim-like_hotkeys, Tor_check_plugin.
   * Note: See enabled_plugins for all possible values.
   * @type {Plugin[]}
   * @optional
   */
  disabled_plugins?: Plugin[];

  /**
   * List of enabled engines.
   * Defaults to all engines.
   * @type {EngineType[]}
   * @optional
   */
  enabled_engines?: EngineType[];

  /**
   * List of disabled engines.
   * Defaults to all engines.
   * @type {EngineType[]}
   * @optional
   */
  disabled_engines?: EngineType[];
};
