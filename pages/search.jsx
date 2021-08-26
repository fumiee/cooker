import { Headline } from "components/Headline";
import { Nav } from "components/Nav";
import { Video } from "components/Video";
import { useCallback, useReducer } from "react";
import { callApi } from "utils/CallApi";

const initialState = {
  keyword: "",
  data: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "input":
      return {
        ...state,
        keyword: action.keyword,
      };
    case "get":
      return {
        ...state,
        data: action.data,
      };
    default:
      throw new Error("no such action type!");
  }
};

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = useCallback((e) => {
    dispatch({ type: "input", keyword: e.target.value });
  }, []);

  const handleClick = useCallback(async () => {
    const api = await callApi({ q: `${state.keyword} レシピ` }, "search");
    dispatch({ type: "get", data: api.items });
  }, [state.keyword]);
  console.log("foo");

  return (
    <div className="min-h-screen max-w-3xl  m-auto font-serif text-gray-600">
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
          value={state.keyword}
          onChange={handleChange}
        />
        <button
          className="border bg-gray-200"
          type="button"
          onClick={handleClick}
        >
          検索
        </button>
      </div>
      {state.data.length > 0 ? <Video items={state.data} /> : null}
    </div>
  );
};
export default Search;
