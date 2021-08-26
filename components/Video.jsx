import { Button } from "components/Button";
const BASE_URL = `https://www.youtube.com/embed/`;

export const Video = (props) => {
  return (
    <div className="space-y-4">
      {props.items?.map((item) => {
        return (
          <div key={item.etag} className="border-8 border-gray-400 rounded-xl">
            <div className=" bg-gray-400 text-white border-b-4 border-gray-400">
              {item.snippet.title}
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`${BASE_URL}${item.id}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <details className="text-sm pt-2 bg-gray-400 text-white">
              <summary className="list-none bg-gray-400">
                <div className="flex justify-between">
                  <div className="text-gray-300 text-sm flex items-end">
                    ▼概要欄を表示
                  </div>
                  <Button />
                </div>
              </summary>
              <div className="break-all">{item.snippet.description}</div>
            </details>
          </div>
        );
      })}
      {/* <button className="text-gray-400 " onClick={loadMore}>
        もっと見る
      </button> */}
    </div>
  );
};
