import { Headline } from "components/Headline";
import { Nav } from "components/Nav";
import { Video } from "components/Video";
const { useState, useCallback, useMemo } = require("react");

const search = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [addText, setAddText] = useState("");
  const params = useMemo(() => {
    return { q: { text } };
  }, [count]);
  const req = "search";
  const add = useCallback(() => {
    setText(addText);
    setCount(count + 1);
    console.log(count, addText);
  }, []);

  return (
    <div className="min-h-screen font-serif text-gray-600">
      <Headline />
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <h1 className="flex justify-center items-center text-xl h-10">
        キーワード検索
      </h1>
      <div className="justify-center flex my-5">
        <input
          className="border w-4/6"
          type="text"
          onChange={(e) => {
            setAddText(e.target.value);
            console.log(addText);
          }}
        />
        <button className="border bg-gray-200" onClick={add}>
          検索
        </button>
      </div>
      <Video params={params} req={req} />;
    </div>
  );
};
export default search;
