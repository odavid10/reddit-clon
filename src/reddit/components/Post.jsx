import PropTypes from "prop-types";

// material-ui
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";

export const Post = ({ subreddit }) => {
  return (
    <Card sx={{ maxWidth: 500, marginBottom: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        title={
          <Typography variant="h6" color="initial">
            <a
              href={`https://www.reddit.com${subreddit.permalink}`}
              target="_blank"
              rel="noreferrer"
              style={{
                cursor: "pointer",
                color: "#000",
                textDecorationLine: "none",
              }}
            >
              {subreddit.title}
            </a>
          </Typography>
        }
        subheader={
          <Typography>
            {subreddit.subreddit_name_prefixed}{" "}
            <a
              href={`https://www.reddit.com/user/${subreddit.author}`}
              target="_blank"
              rel="noreferrer"
              style={{ cursor: "pointer", color: "#000" }}
            >
              {subreddit.author}
            </a>
          </Typography>
        }
      />
      <CardMedia
        component="img"
        image={
          subreddit.thumbnail !== "self"
            ? subreddit.thumbnail
            : "https://placehold.co/500x260"
        }
        alt={subreddit.title}
      />
      <CardContent>{subreddit?.text}</CardContent>
    </Card>
  );
};

Post.propTypes = {
  subreddit: PropTypes.object.isRequired,
};
