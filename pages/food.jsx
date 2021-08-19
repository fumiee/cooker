import { Caption } from "components/Caption";
import { Headline } from "components/Headline";
import { Nav } from "components/Nav";

const MeetCaptions = [
  "鶏もも肉",
  "鶏むね肉",
  "豚肉",
  "牛肉",
  "魚",
  "たまご",
  "ウインナー",
  "ベーコン",
  "ツナ缶",
];
const vesiCaptions = [
  "キャベツ",
  "レタス",
  "にんじん",
  "じゃがいも",
  "玉ねぎ",
  "なす",
  "小松菜",
  "ほうれん草",
  "チンゲン菜",
  "豆苗",
  "もやし",
  "きのこ",
  "かぼちゃ",
  "レンコン",
  "春野菜",
  "夏野菜",
  "秋野菜",
  "冬野菜",
];
const Food = () => {
  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <Nav />
      <div className="space-y-2">
        <p>お肉・魚</p>
        <Caption captions={MeetCaptions} type="meet" />
        <p>野菜</p>
        <Caption captions={vesiCaptions} type="vesi" />
      </div>

      <p className="mb-3"></p>
    </div>
  );
};
export default Food;
