// prettier-ignore
export namespace SearxngResponse {
    export type TopLevel = {
        query:                string;
        number_of_results:    number;
        results:              Result[];
        answers:              any[]; // TODO
        corrections:          any[]; // TODO
        infoboxes:            any[]; // TODO
        suggestions:          string[];
        unresponsive_engines: Array<string[]>;
    }
    
    export type Result = {
        url:            string;
        title:          string;
        content?:       string;
        engine:         Engine;
        parsed_url:     string[];
        template:       Template;
        engines:        Engine[];
        positions:      number[];
        publishedDate?: Date | null;
        thumbnail?:     null | string;
        is_onion?:      boolean;
        score:          number;
        category:       Category;
        length?:        null | string;
        duration?:      null | string;
        iframe_src?:    string;
        source?:        string;
        metadata?:      string;
        resolution?:    null | string;
        img_src?:       string;
        thumbnail_src?: string;
        img_format?:    ImgFormat;
    }
    
    export type Category = "general" | "videos" | "images";
    
    export type Engine = "bing" | "brave" | "google" | "yahoo" | "brave.videos" | "duckduckgo videos" | "duckduckgo" | "mojeek" | "seznam" | "qwant" | "startpage" | "brave.images" | "bing images" | "google images" | "goo";
    
    export type ImgFormat = "jpeg" | "Culture Snaxx" | "png";
    
    export type Template = "default.html" | "videos.html" | "images.html";
    
}
