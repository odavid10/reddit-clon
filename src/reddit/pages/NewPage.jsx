import { useState } from "react";

// material-ui
import { CircularProgress, TextField } from "@mui/material";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { RedditView } from "../views";
import { parseData } from "../../helpers";
import { useGetNewsQuery } from "../../store/apis/redditsApi";

export const NewPage = () => {
  const [searchValue, setSearchValue] = useState();
  const { data, isLoading } = useGetNewsQuery();
  const reddits = parseData(data?.data.children || []);

  return (
    <RedditLayout>
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          <TextField
            fullWidth
            id="search"
            label="search"
            value={searchValue}
            onChange={({ target }) => setSearchValue(target.value)}
            sx={{ marginBottom: 5 }}
          />
          <RedditView data={reddits} />
        </>
      )}
    </RedditLayout>
  );
};
