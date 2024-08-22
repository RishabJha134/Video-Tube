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
    <div className="p-4 bg-black min-h-screen text-white">
      {loading && (
        <p className="text-center text-lg font-semibold text-gray-400">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-center text-lg font-semibold text-red-500 bg-[#2a2a2a] p-3 rounded-lg shadow-lg">
          Error: {error}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4">
        {results.length > 0 ? (
          results.map((item) => (
            <div
              key={item.id.videoId}
              className="bg-[#282828] border border-gray-700 p-3 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={"/watch?v=" + item.id.videoId} className="block">
                <img
                  src={item.snippet.thumbnails.medium.url}
                  alt={item.snippet.title}
                  className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold text-white line-clamp-2">
                  {item.snippet.title}
                </h3>
                <p className="text-base text-gray-400 mt-1 line-clamp-3">
                  {item.snippet.description}
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-lg font-semibold text-gray-400">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchResultPage;
