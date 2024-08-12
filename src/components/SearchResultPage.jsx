import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const SearchResultPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("search_query"));

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return <div>SearchResultPage</div>;
};

export default SearchResultPage;
