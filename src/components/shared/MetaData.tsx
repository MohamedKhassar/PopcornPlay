import { useEffect } from "react";

const MetaData = ({ title = "PopcornPlay - Play, Stream & Discover Your Favorite Movies", image="https://popcornplay-lyart.vercel.app/imgs/logo.svg", description = "Discover and stream popular movies and series. View trailers, cast, and related content with Play – your modern movie discovery app." }: { title?: string, image?: string, description?: string }) => {
    useEffect(() => {

        document.title = title;
        document.querySelector("meta[property='og:title']")?.setAttribute("content", title);
        document.querySelector("meta[property='og:description']")?.setAttribute("content", description);
        document.querySelector("meta[property='og:image']")?.setAttribute("content", image);
    }, [title, image, description]);
    return null;
}

export default MetaData