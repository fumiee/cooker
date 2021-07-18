import Link from "next/link";
import cc from "classcat";

export const Caption = (props) => {
  return (
    <div className="flex flex-wrap gap-y-2 gap-x-2">
      {props.captions.map((cap) => {
        return (
          <Link key={cap} href={`/${cap}/template`}>
            <a
              className={cc([
                "border-2 rounded-lg p-1  text-sm border-gray-300 opacity-80",
                {
                  ["bg-yellow-100"]: props.type === "food",
                  ["bg-blue-100"]: props.type === "youtuber1",
                  ["bg-indigo-200"]: props.type === "youtuber2",
                  ["bg-purple-100"]: props.type === "youtuber3",
                  ["bg-yellow-50"]: props.type === "meet",
                  ["bg-red-50"]: props.type === "vesi",
                },
              ])}
            >
              {cap}
            </a>
          </Link>
        );
      })}
    </div>
  );
};
