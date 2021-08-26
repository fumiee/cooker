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
    more: "材料４人前の分量です。",
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

const Fav = () => {
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
    <div className="min-h-screen max-w-3xl  m-auto font-serif text-gray-600 ">
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
                    frameBorder="0"
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
export default Fav;
