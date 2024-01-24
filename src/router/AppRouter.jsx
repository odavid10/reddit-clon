import { Route, Routes } from "react-router-dom";

import { HotPage, NewPage, RedditPage, RisingPage } from "../reddit/pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RedditPage />} />
      <Route path="/hot" element={<NewPage />} />
      <Route path="/new" element={<HotPage />} />
      <Route path="/rising" element={<RisingPage />} />
    </Routes>
  );
};
