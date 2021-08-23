export const callApi = async (params, req) => {
  const newParams = {
    ...params,
    maxResults: "1",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };

  const query = new URLSearchParams(newParams);
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/${req}?${query}`
  );
  const searchData = await res.json();

  const videoIds = searchData?.items.map((item) => item.id.videoId);
  const newParams2 = {
    id: videoIds.join(","),
    part: "snippet,id",
    maxResults: "1",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };
  const req2 = "videos";
  const query2 = new URLSearchParams(newParams2);
  const res2 = await fetch(
    `https://www.googleapis.com/youtube/v3/${req2}?${query2}`
  );
  const videoData = await res2.json();

  return videoData;
};
