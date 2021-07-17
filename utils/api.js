export const callApi = async (params, req) => {
  const newParams = {
    ...params,
    // part: "snippet,id",
    maxResults: "3", // 結果の数
    // order: "viewCount", //再生回数の多い順
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };

  const query = new URLSearchParams(newParams);
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/${req}?${query}`
  );
  const json = await res.json();
  return json;
};
