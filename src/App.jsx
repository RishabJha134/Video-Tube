import { Provider } from "react-redux";
import React from "react";
import Body from "./components/Body";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, // Head will be included in Body
    children: [
      {
        path: "/",
        element: (
          <>
            <MainContainer />
          </>
        ),
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "search/:query",
        element: <SearchResultPage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
};

export default App;
