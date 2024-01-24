import { Route, Routes } from "react-router-dom";

import { HotPage, NewPage, RedditPage, RisingPage } from "../reddit/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RedditPage />} />
      <Route path="/hot" element={<HotPage />} />
      <Route path="/new" element={<NewPage />} />
      <Route path="/rising" element={<RisingPage />} />
    </Routes>
  );
};
