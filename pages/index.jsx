import { Caption } from "components/Caption";
import { Headline } from "components/Headline";
import { Nav } from "components/Nav";
import { Video } from "components/Video";

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
  const params = {
    part: "snippet",
    q: "夏　レシピ 簡単", //検索クエリ
  };
  const req = "search"; //HTTPリクエストの最後

  return (
    <div>
      <div className="min-h-screen font-serif text-gray-600">
        <Headline />
        <div className="sticky top-0 z-50">
          <Nav />
        </div>
        <div className="space-y-1">
          <Caption captions={FoodCaptions} type="food" />
          <Caption captions={YoutuberCaptions} type="youtuber1" />
        </div>

        <main className="mt-5">
          <div className="space-y-2">
            <p className="border-t-2 border-gray-400 border-dashed"></p>
            <h1 className="flex justify-center items-center text-xl h-10">
              おすすめ動画
            </h1>
          </div>
          <div className="space-y-3 mt-2"></div>
        </main>
        <Video params={params} req={req} />
      </div>
    </div>
  );
};

export default Home;
