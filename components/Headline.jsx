import Link from "next/link";
import Head from "next/head";

export const Headline = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>料理系youtuberまとめ</title>
      </Head>
      <Link href="/cooker">
        <header className="flex items-center justify-center h-14 text-2xl font-serif tracking-wider">
          料理系 YouTuber
          <img
            className="ml-2 mr-1"
            src="/youtube.jpeg"
            alt="youtubeのアイコン"
          />
          まとめ
        </header>
      </Link>
      <p className="border-t-2 border-gray-400 border-dashed"></p>
    </div>
  );
};
