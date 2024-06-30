import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import {
  imageUrl,
  baseUrl,
  API_KEY,
  Bearer_token,
} from "../../Constants/Constants";
import axios from "axios";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log("Movies fetched:", response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.error("Error fetching movies:", err);
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    console.log(`Fetching videos for movie ID: ${id}`);
    axios
      .get(`${baseUrl}/movie/${id}/videos?language=en-US`, {
        headers: {
          Authorization: `Bearer ${Bearer_token}`,
          accept: "application/json",
        },
      })
      .then((response) => {
        console.log("Video response:", response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key); // Access the video key
        } else {
          console.log("No videos found for this movie");
          setUrlId(""); // Clear the URL ID to hide the YouTube player if no videos are found
        }
      })
      .catch((err) => {
        console.error("Error fetching movie videos:", err);
      });
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId} />}
    </div>
  );
}

export default RowPost;
