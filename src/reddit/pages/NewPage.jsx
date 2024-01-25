import { useState } from "react";

// material-ui
import { CircularProgress, TextField } from "@mui/material";

// third-party
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

// project imports
import RedditLayout from "../layout/RedditLayout";
import { RedditView } from "../views";
import { parseData } from "../../helpers";
import { useGetNewsQuery } from "../../store/apis/redditsApi";

export const NewPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [searchValue, setSearchValue] = useState(q);
  const { data, isLoading } = useGetNewsQuery(searchValue);
  const reddits = parseData(data?.data.children || []);

  const onInputChange = ({ target }) => {
    setSearchValue(target.value);
    navigate(`?q=${target.value}`);
  };

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
            onChange={onInputChange}
            sx={{ marginBottom: 5 }}
          />
          <RedditView data={reddits} />
        </>
      )}
    </RedditLayout>
  );
};
