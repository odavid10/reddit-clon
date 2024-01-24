// material-ui
import { CircularProgress } from "@mui/material";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { RedditView } from "../views";
import { parseData } from "../../helpers";
import { useGetNewsQuery } from "../../store/apis/redditsApi";

export const NewPage = () => {
  const { data, isLoading } = useGetNewsQuery();
  const reddits = parseData(data?.data.children || []);

  return (
    <RedditLayout>
      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <RedditView data={reddits} />
      )}
    </RedditLayout>
  );
};
