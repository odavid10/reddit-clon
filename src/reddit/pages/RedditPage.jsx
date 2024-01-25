// material-ui
import { CircularProgress } from "@mui/material";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { RedditView } from "../views";
import { useGetBestsQuery } from "../../store/apis/redditsApi";
import { parseData } from "../../helpers";

export const RedditPage = () => {
  const { data, isLoading } = useGetBestsQuery();
  const reddits = parseData(data?.data.children || []);

  return (
    <RedditLayout>
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <RedditView data={reddits} />
      )}
    </RedditLayout>
  );
};

RedditPage.propTypes = {};
