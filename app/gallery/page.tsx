import { Suspense } from "react";
import Loading from "../loading";
import InstagramCard from "../components/instagramCard";

interface Image {
  id: string;
  caption: string;
  media_url: string;
  timestamp: string;
  media_type: string;
  permalink: string;
}

interface ResponseData {
  data: Image[];
}

async function getImages(): Promise<ResponseData> {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }
  return data.json();
}

export default async function Gallery2() {
  const data = await getImages();

  return (
    <Suspense fallback={<Loading />}>
      <div className="px-4 py-20">
        <h1 className="text-center font-summerVibesSolid font-normal text-2xl min-[375px]:text-3xl sm:text-4xl lg:text-5xl">
          giggles on the gram
        </h1>
        <p className="sm:text-lg text-center max-w-2xl mx-auto mt-2">
          Check out our latest Instagram posts! Share your moments at Giggles
          with #gigglesplay or tag @giggles.play for a chance to be seen here!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 max-w-7xl mt-10 px-6 gap-5 sm:gap-4 mx-auto mb-5 ">
          {data.data.map((image: Image, index) => (
            <InstagramCard
              id={index}
              username={image.id}
              profileImageUrl={image.media_url}
              postImageUrl={image.permalink}
              caption={image.caption}
            />
          ))}
        </div>
      </div>
    </Suspense>
  );
}
