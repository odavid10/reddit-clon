import { Route, Routes } from "react-router-dom";

import { RedditPage } from "../reddit/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RedditPage />} />
    </Routes>
  );
};
