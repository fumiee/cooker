import { Headline } from "components/Headline";
import { Nav } from "components/Nav";
import { Video } from "components/Video";
import { useRef } from "react";
const { useState, useCallback, useMemo } = require("react");

const search = () => {
  const req = "search";
  const [keyWord, setKeyWord] = useState("");
  const [isShow, setIsShow] = useState(false);

  const textRef = useRef(null);
  const params = useMemo(() => {
    return { q: keyWord };
  }, [keyWord]);

  const handleChange = useCallback(() => {
    const text = textRef.current.value;
    setKeyWord(text + " レシピ");
    setIsShow(true);
  }, [keyWord]);

  return (
    <div className="min-h-screen font-serif text-gray-600">
      <Headline />
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <h1 className="flex justify-center items-center text-xl my-4">
        キーワード検索
      </h1>
      <div className="justify-center flex mb-6">
        <input
          className="border w-4/6"
          type="text"
          ref={textRef}
          // onChange={InputWordChange}
        />
        <input
          className="border bg-gray-200"
          type="submit"
          value="検索"
          onClick={handleChange}
        />
      </div>
      {isShow ? <Video params={params} req={req} /> : null}
    </div>
  );
};
export default search;
