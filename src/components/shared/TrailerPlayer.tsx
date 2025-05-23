import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import { Trailer, TrailerProps } from "../../lib/types";
import { VITE_APP_API_KEY } from "../../lib/data";
import { BiVideoRecording } from "react-icons/bi";

const TrailerPlayer: React.FC<TrailerProps> = ({ id, type }) => {
    const [trailerKey, setTrailerKey] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                setLoading(true);
                if (id) {

                    const res = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/videos`, {
                        params: {
                            api_key: VITE_APP_API_KEY,
                            language: "en-US",
                        },
                    });

                    const trailers: Trailer[] = res.data.results;
                    // Find a YouTube Trailer
                    const officialTrailer = trailers.find(
                        (vid) =>
                            vid.site === "YouTube" &&
                            vid.type === "Trailer" &&
                            (vid.official || vid.name.toLowerCase().includes("trailer"))
                    );

                    if (officialTrailer?.key) {
                        setTrailerKey(officialTrailer.key);
                    } else {
                        setTrailerKey(null);
                    }
                } else {
                    setTrailerKey(null);
                }
            } catch (error) {
                console.error("Error fetching trailer:", error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchTrailer();
    }, [id, type]);

    return (
        <div className="xl:max-w-[109rem] xl:mx-auto md:mx-20 mx-5 md:space-y-10 space-y-8">
            <div className="flex items-stretch gap-2">
                <span className="lg:w-1.5 w-1 rounded-full bg-blue-600"></span>
                <h1 className="capitalize lg:text-2xl md:text-xl text-lg"><strong>trailer</strong></h1>
            </div>
            {trailerKey ?
                loading ? (
                    <div className="flex flex-col items-center justify-center h-full">
                        <BiVideoRecording className="size-25 text-blue-500" />
                        <p className="text-center text-blue-300 text-xl">Loading...</p>
                    </div>
                ) :
                    (
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${trailerKey}`}
                            width="100%"
                            height="100%"
                            controls
                            style={{ borderRadius: "1rem", border: "2px solid darkblue", overflow: "hidden", maxWidth: "80rem", marginInline: "auto", aspectRatio: "16/9" }}
                        />
                    ) : (
                    <div className="flex flex-col items-center justify-center h-full">
                        <BiVideoRecording className="size-25 text-blue-500" />
                        <p className="text-center text-blue-300 text-xl">No trailer available.</p>
                    </div>
                )}
        </div>
    );
};

export default TrailerPlayer;
