import { Nav } from "components/Nav";
import { useRouter } from "next/router";
import { Video } from "components/Video";

export const Template = () => {
  const router = useRouter();
  const req = "search";
  const params = { q: router.query.captionId + " レシピ" };
  return (
    <div className="font-serif">
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <h1 className="flex justify-center items-center text-xl h-10">
        {router.query.captionId}
      </h1>
      <Video params={params} req={req} />
    </div>
  );
};

export default Template;
