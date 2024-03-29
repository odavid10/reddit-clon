import PropTypes from "prop-types";

// project imports
import { Post } from "../components";

export const RedditView = ({ data = [] }) => {
  return (
    <>
      {data.map((subreddit) => (
        <Post key={subreddit.id} subreddit={subreddit} />
      ))}
    </>
  );
};

RedditView.propTypes = {
  data: PropTypes.array.isRequired,
};
