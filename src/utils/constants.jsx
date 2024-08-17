// Access environment variables using import.meta.env
export const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const YOUTUBE_VIDEOS_API = import.meta.env.VITE_YOUTUBE_VIDEOS_API + GOOGLE_API_KEY;
export const YOUTUBE_SEARCH_API = import.meta.env.VITE_YOUTUBE_SEARCH_API;

// Other constants
export const LIVE_CHAT_COUNT = 25;


