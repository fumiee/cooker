import { Nav } from "components/Nav";
import { useRouter } from "next/router";
import { Video } from "components/Video";

export const getStaticProps = async ({ params }) => {
  const newParams = {
    q: params.captionId + " レシピ",
    type: "video",
    maxResults: "1",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };
  const query = new URLSearchParams(newParams);
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?${query}`
  );
  const searchData = await res.json();
  const videoIds = searchData?.items.map((item) => item.id.videoId);
  const Ids = videoIds.join(",");
  const newParams2 = {
    id: Ids,
    part: "snippet,id",
    maxResults: "1",
    key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
  };
  const query2 = new URLSearchParams(newParams2);
  const res2 = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?${query2}`
  );
  const videoData = await res2.json();
  return {
    props: { videoData },
    revalidate: 3600,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const Template = (props) => {
  const router = useRouter();
  return (
    <div className="font-serif">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <h1 className="flex justify-center items-center text-xl h-10">
        {router.query.captionId}
      </h1>
      <Video videoData={props.videoData} />
    </div>
  );
};

export default Template;
