import { useState } from "react";

// material-ui
import { CircularProgress, TextField } from "@mui/material";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { parseData } from "../../helpers";
import { RedditView } from "../views";
import { useGetRisingsQuery } from "../../store/apis/redditsApi";

export const RisingPage = () => {
  const [searchValue, setSearchValue] = useState();
  const { data, isLoading } = useGetRisingsQuery();
  const reddits = parseData(data?.data.children || []);

  return (
    <RedditLayout>
      {isLoading ? (
        <CircularProgress color="inherit" />
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
