# Video Tube

![Video Tube Icon](https://lh3.googleusercontent.com/rormhrw_yZt2v1OKZBaiFCSt8b8QU02kEKiuilfgnpGkOMQd87xm7b7SyIlGoHsL18M)

## Video Tube is a YouTube clone application that replicates the core functionalities and user interface of YouTube, with an emphasis on dark mode. This project utilizes YouTube APIs to deliver an experience similar to that of the original platform. It is built using modern web technologies including React.js, Redux, Tailwind CSS, and JavaScript.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [API Integration](#api-integration)
- [Redux Toolkit Integration](#redux-toolkit-integration)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dark Mode UI**: Inspired by YouTube's dark mode for a visually pleasing experience.
- **Responsive Design**: Optimized for different screen sizes.
- **Infinite Scroll**: Continuously load videos as the user scrolls.
- **Live Chat**: Live chat implementation with API polling, mimicking YouTube's live chat.
- **Search with Debouncing**: Efficient search queries with debouncing and caching.
- **Nested Comments**: Recursively render nested comments similar to YouTube.
- **Video Playback**: Seamless video streaming using YouTube APIs.
- **Redux Toolkit**: State management across the app using Redux Toolkit.
- **Optimized Performance**: Caching and memoization techniques to improve performance.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, CSS, JavaScript
- **State Management**: Redux Toolkit
- **APIs**: YouTube Data API
- **Deployment**: Vite (for build optimization)

## Installation

To run this project locally, follow these steps:

Clone the repository:
```bash
git clone https://github.com/your-username/video-tube.git
cd video-tube
```

Install dependencies:
```bash
npm install
```

Create a .env file in the root directory and add your API keys:
```bash
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
```

Start the development server:
```bash
npm start
```

## Usage

- **Home Page**: Browse through the latest videos.
- **Search**: Search for videos with debouncing and caching.
- **Video Page**: Watch videos, view comments, and participate in live chats.
- **Infinite Scrolling**: Load more content as you scroll down the page.

Folder Structure
```plaintext
video-tube/
├── node_modules/
├── public/
│ └── vite.svg
├── src/
│ ├── components/
│ │ ├── Body.jsx
│ │ ├── Button.jsx
│ │ ├── ButtonList.jsx
│ │ ├── ChatMessage.jsx
│ │ ├── Comment.jsx
│ │ ├── CommentsContainer.jsx
│ │ ├── CommentsList.jsx
│ │ ├── Head.jsx
│ │ ├── LiveChat.jsx
│ │ ├── MainContainer.jsx
│ │ ├── SearchResultPage.jsx
│ │ ├── SideBar.jsx
│ │ ├── VideoCard.jsx
│ │ ├── VideoContainer.jsx
│ │ └── WatchPage.jsx
│ ├── utils/
│ │ ├── appSlice.jsx
│ │ ├── chatSlice.jsx
│ │ ├── constants.jsx
│ │ ├── helper.jsx
│ │ ├── searchSlice.jsx
│ │ └── store.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## API Integration

- **YouTube Data API**: Fetch video data, comments, and live chat.
- **Search API**: Integrated with debouncing to optimize API calls.

## Redux Toolkit Integration

- **State Management**: Video state is managed using Redux slices.
- **Caching**: Leveraged Redux Toolkit's caching mechanisms to avoid redundant API calls.

## Environment Variables

To secure API keys and other sensitive information, this project utilizes environment variables. The `.env` file should contain:


```bash
REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
