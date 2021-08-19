export const callApi = async (params, req) => {
  const newParams = {
    ...params,
    part: "snippet",
    type: "video",
    maxResults: "1",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };
  const query = new URLSearchParams(newParams);
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/${req}?${query}`
  );
  const json = await res.json();
  return json;
};
