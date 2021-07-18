import { useState } from "react";

export const Button = () => {
  const [isFav, setIsFav] = useState(true);
  return (
    <button
      onClick={() => {
        setIsFav((isFav) => {
          return isFav ? false : true;
        });
        // const videos = localStorage.getItem("favVideos");
        // if (!videos) {
        //   localStorage.setItem("favVideos", JSON.stringify([item.src]));
        // } else {
        //   const parseVideos = JSON.parse(videos);
        //   localStorage.setItem(
        //     "favVideos",
        //     JSON.stringify([...parseVideos, item.src])
        //   );
        // }
      }}
      className="justify-end p-1 rounded-lg text-sm border-red-200 border-2"
    >
      {isFav ? "保存" : "保存済"}
    </button>
  );
};
