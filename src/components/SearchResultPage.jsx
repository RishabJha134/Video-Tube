import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";

const SearchResultPage = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { query } = useParams();

  const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${GOOGLE_API_KEY}`;

  const fetchSearchResults = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(YOUTUBE_SEARCH_API);
      const data = await response.json();
      setResults(data.items);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className="p-4">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.id.videoId}
              className="bg-black border border-white p-4 rounded-lg shadow-lg"
            >
              <Link
                to={"/watch?v=" + item.id.videoId}
                className="flex flex-col"
              >
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                  className="w-full h-40 object-cover rounded mb-4 hover:scale-95"
                />
                <h3 className="text-lg font-semibold text-white">
                  {item.snippet.title}
                </h3>
                <p className="text-gray-400 mt-2">{item.snippet.description}</p>
              </Link>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
