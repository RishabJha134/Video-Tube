import { Provider } from "react-redux";
import React, { Children } from "react";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchResultPage from "./components/SearchResultPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage></WatchPage>,
        },
        {
          path:"result",
          element:<SearchResultPage></SearchResultPage>,
        }
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <div>
          <BrowserRouter>
          <Head></Head>
          </BrowserRouter>
          
          <RouterProvider router={appRouter}></RouterProvider>
        </div>
      </Provider>
    </>
  );
};

export default App;
