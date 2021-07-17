import Link from "next/link";
import cc from "classcat";
import { useRouter } from "next/router";

export const Nav = () => {
  const router = useRouter();

  return (
    <div>
      <nav className="bg-white flex items-center justify-around font-serif py-2">
        <Link href="/search">
          <img
            className="w-1/7 h-1/2 ml-5"
            src="/search.jpeg"
            alt="ルーペのアイコン"
          />
        </Link>
        <Link href="/food">
          <a
            className={cc([
              "flex items-center rounded-full border-4 border-yellow-200 h-10 w-10",
              router.pathname === "/food"
                ? "bg-yellow-300"
                : "border-yellow-200",
            ])}
          >
            食材
          </a>
        </Link>
        <Link href="/youtuber">
          <a
            className={cc([
              "flex items-center justify-center rounded-full border-4  h-10 w-10 mx-1",
              router.pathname === "/youtuber"
                ? "bg-blue-300"
                : "border-blue-300",
            ])}
          >
            y
            <span className="flex items-center justify-center rounded-full border-4 border-blue-200 h-10 w-10 mx-1">
              outube
            </span>
            r
          </a>
        </Link>
        <Link href="/favorite">
          <a
            className={cc([
              "flex items-center rounded-full border-red-200 border-4 h-10 w-10",
              router.pathname === "/favorite" ? "bg-red-300" : "border-red-200",
            ])}
          >
            保存
          </a>
        </Link>
      </nav>
      <p className="border-b-2 border-gray-400 border-dashed mb-2"></p>
    </div>
  );
};
