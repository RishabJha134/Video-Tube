// Access environment variables using import.meta.env
export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API = import.meta.env.VITE_YOUTUBE_VIDEOS_API + GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = import.meta.env.VITE_YOUTUBE_SEARCH_API;

// Other constants
export const LIVE_CHAT_COUNT = 25;

// Example of a full search API endpoint with the API key
// export const YOUTUBE_SEARCH_RESULT_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=" + GOOGLE_API_KEY;
