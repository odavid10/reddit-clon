// material-ui
import { CircularProgress } from "@mui/material";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { RedditView } from "../views";
import { parseData } from "../../helpers";
import { useGetHotsQuery } from "../../store/apis/redditsApi";

export const HotPage = () => {
  const { data, isLoading } = useGetHotsQuery();
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
