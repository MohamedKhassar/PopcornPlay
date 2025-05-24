import { useEffect } from "react";

const MetaData = ({ title = "PopcornPlay - Play, Stream & Discover Your Favorite Movies", image = "https://popcornplay-lyart.vercel.app/imgs/logo.png", description = "Discover and stream popular movies and series. View trailers, cast, and related content with Play – your modern movie discovery app.", url = "https://popcornplay-lyart.vercel.app/" }: { title?: string, image?: string, description?: string, url?: string }) => {
    useEffect(() => {

        document.title = title;
        document.querySelector("meta[property='og:title']")?.setAttribute("content", title);
        document.querySelector("meta[property='og:description']")?.setAttribute("content", description);
        document.querySelector("meta[property='og:image']")?.setAttribute("content", image);
        document.querySelector("meta[property='og:url']")?.setAttribute("content", url);
        document.querySelector("meta[property='twitter:title']")?.setAttribute("content", title);
        document.querySelector("meta[property='twitter:description']")?.setAttribute("content", description);
        document.querySelector("meta[property='twitter:image']")?.setAttribute("content", image);
        document.querySelector("meta[property='twitter:url']")?.setAttribute("content", url);
    }, [title, image, description, url]);
    return null;
}

export default MetaData