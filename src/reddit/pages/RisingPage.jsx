// material-ui
import { CircularProgress } from "@mui/material";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { parseData } from "../../helpers";
import { RedditView } from "../views";
import { useGetRisingsQuery } from "../../store/apis/redditsApi";

export const RisingPage = () => {
  const { data, isLoading } = useGetRisingsQuery();
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
