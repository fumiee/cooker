import { Caption } from "components/Caption";
import { Headline } from "components/Headline";
import { Nav } from "components/Nav";
import { Video } from "components/Video";
import { useState } from "react";
import { useEffect } from "react";
import { callApi } from "utils/CallApi";

const FoodCaptions = [
  "鶏もも肉",
  "豚肉",
  "大根",
  "キャベツ",
  "きのこ",
  "玉ねぎ",
];
const YoutuberCaptions = [
  "クキパパ",
  "リュウジ",
  "食堂あさごはん",
  "コウケンテツ",
];

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(async () => {
    const api = await callApi(params, req);
    setData(api);
  }, []);

  const params = {
    part: "snippet",
    q: "夏　レシピ 簡単",
  };
  const req = "search";

  return (
    <div>
      <div className="min-h-screen max-w-3xl  m-auto font-serif text-gray-600">
        <Headline />
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <div className="space-y-1 h-[75px]">
          <Caption captions={FoodCaptions} type="food" />
          <Caption captions={YoutuberCaptions} type="youtuber1" />
        </div>
        <p className="border-t-2 border-gray-400 border-dashed"></p>

        <main>
          <h1 className="flex justify-center items-center text-xl h-16">
            おすすめ動画
          </h1>
        </main>
        <Video videoData={data} />
      </div>
    </div>
  );
};

export default Home;
