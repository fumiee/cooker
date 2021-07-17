import { Headline } from "components/Headline";
import { Nav } from "components/Nav";
import { useState, useEffect } from "react";

const ITEMS = [
  {
    src: "https://www.youtube.com/embed/vEBWzLoP_Zg",
    title: "親子丼の作らないと後悔する最高の作り方　料理",
    details: `正直これ以上最高のレシピを知らないです。
      動画では４人前で作っていますが
      全ての材料を半分にして２人前でも作って頂けます。`,
    more: `材料　４人前の分量です。 鳥もも２５０〜３００g　２枚
    玉ねぎ　大きめ１個２６０g 　 水　２００ml
    醤油　６０g（大さじ３と３分の１）
    みりん　６０g（大さじ３と３分の１）　　 砂糖　１８g
    鶏ガラスープの素　８g（ユウキの無添加鶏がらスープの素）
    卵　６個
    三つ葉　動画では量がなかったので、動画の倍量くらい入れるとより美味しいです
    まず鳥ももは皮目をしっかり焼いてください。
    この時フライパンの大きさは鳥ももがちょうど入るくらいの大きさがいいです。
    フライパンに隙間があると隙間の温度が上がりすぎて火入れが上手く出来ないです。
    火加減は強火で、最初に少量の油を引くことで皮目から脂が出やすくなります。
    強火で火を入れるので、油が結構ハネます。
    なのでペーパーなどである程度油を※動画内で醤油とみりんが６０ml（大さじ４）となっていますが
    ６０g（大さじ３と３分の１）の誤りです。
    また砂糖はきび糖を使っているので１８g（大さじ２）になります。
    調味料は最初に測って頂くと思いますが
    可能であればグラム表記で測って頂く方がいいと思います。
    大さじは調味料によって誤差が出ます。
    申し訳ございませんが概要欄にて訂正させて頂きます。取っておくと油ハネがましになります。
    ユウキの無添加鶏がらスープの素がおすすめです。
    卵は２回に分けて入れると火入れが変わって味わいが美味しくなります。
    また三つ葉、山椒の粉、ゆずの皮などアクセントになるものを最後に入れると
    より美味しく仕上がります。`,
  },
  {
    src: "https://www.youtube.com/embed/uZ6FBiiNJl4",
    title: "ラザニアの作り方はこれが正解（永久保存版）　グラタンレシピ　洋食",
    details: "bbb",
    more: "bbbbbb",
  },
  {
    src: "https://www.youtube.com/embed/Pgjs5unOMmY",
    title:
      "バターチキンカレー】最高に美味しいバターチキンカレーレシピ　おうちで美味しくできる方法",
    details: "ccc",
    more: "cccccc",
  },
];

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const videos = localStorage.getItem("favVideos");
    if (videos) {
      const parseVideos = JSON.parse(videos);
      const targetItems = ITEMS.filter((item) =>
        parseVideos.some((video) => video === item.src)
      );
      setItems(targetItems);
    }
  }, []);

  return (
    <div className="min-h-screen font-serif text-gray-600 ">
      <Headline />
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <main className="mt-5">
        <div className="space-y-2">
          <h1 className="flex justify-center items-center text-xl h-10">
            保存動画
          </h1>
        </div>
        <div className="space-y-3 mt-2">
          {items.map((item) => {
            return (
              <div
                key={item.details}
                className="border-8 border-gray-400 rounded-xl"
              >
                <div className=" bg-gray-400 text-white border-b-8 border-gray-400">
                  {item.title}
                </div>
                <div key={item.src} className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={item.src}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <details className="text-sm pt-2 bg-gray-400 text-white">
                  <summary className="list-none bg-gray-400">
                    {item.details}
                    <div className="flex justify-between">
                      <div className="text-gray-300 text-sm flex items-end">
                        ▼もっと見る
                      </div>
                      <button
                        className="justify-end p-1 rounded-lg text-sm
                      border-red-200 border-2"
                      >
                        保存
                      </button>
                    </div>
                  </summary>
                  <div>
                    <p>{item.more}</p>
                  </div>
                </details>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
export default Home;
