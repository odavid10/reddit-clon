export const parseData = (data) => {
  const outputArray = [];

  for (const subreddit of data) {
    const { data } = subreddit;
    console.log("subreddit", data);
    outputArray.push({
      id: data.id,
      author: data.author,
      date: data.created,
      name: data.name,
      permalink: data.permalink,
      preview: data.preview,
      score: data.score,
      subreddit_name_prefixed: data.subreddit_name_prefixed,
      thumbnail: data.thumbnail,
      thumbnail_height: data.thumbnail_height,
      thumbnail_width: data.thumbnail_width,
      title: data.title,
      url: data.url,
    });
  }

  return outputArray;
};
