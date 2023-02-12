import Link from "next/link";
import Image from "next/image";
export default function Giggles() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div>
            <img
              src="https://cdn.discordapp.com/attachments/739252351793234040/1074161499125338172/sun.png"
              className="rounded-full max-w-[400px]"
              alt="giggles play logo"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6 self-center">
              <h1 className="mb-2 font-summerVibesSolid font-normal text-4xl tracking-tight text-center sm:text-5xl sm:leading-none">
                about <span className="text-[#f7ae47]">giggles</span>
              </h1>
              <p className="text-base text-md text-center max-w-sm sm:text-lg">
                At Giggles Play, we believe that play and learning go
                hand-in-hand. Our mission is to provide a dynamic and welcoming
                environment where families can form meaningful connections
                through play.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-15">
        <div className="grid gap-20 row-gap-8">
          <div className="flex flex-col justify-center sm:flex-row place-items-center space-x-10">
            <div className="max-w-xl mb-6">
              <h1 className="mb-2 font-summerVibesSolid font-normal text-4xl text-center sm:text-5xl sm:leading-none">
                our <span className="text-[#99bdbb]">playful</span> space
              </h1>
              <p className="text-base text-md  text-center sm:text-lg max-w-sm">
                We offer a clean and inviting facility with thoughtfully
                designed play areas, activities, and classes that foster
                independence, creativity, and confidence in children.
              </p>
            </div>
            <div className="flex flex-row">
              <img
                src="https://cdn.discordapp.com/attachments/739252351793234040/1074157667251138620/loft-website.png"
                className="rounded-full max-w-[420px]"
                alt="natural pod playloft"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="font-summerVibesSolid font-normal text-3xl mb-2">
          our playful space
        </h2>
        <p className="font-quicksand mb-4">
          We offer a clean and inviting facility with thoughtfully designed play
          areas, activities, and classes that foster independence, creativity,
          and confidence in children.
        </p>

        <h2 className="font-summerVibesSolid font-normal text-3xl mb-2">
          building relationships + memories
        </h2>
        <p className="font-quicksand mb-4">
          Our goal is to be a hub where families can build authentic
          relationships and create lifelong memories. Join us in our mission and
          let's play and learn together!
        </p>

        <h2 className="font-summerVibesSolid font-normal text-3xl mb-2">
          contact us
        </h2>
        <p className="font-quicksand mb-4">
          Include details about how families can get in touch with you, such as
          your address, phone number, email, and any social media handles.
        </p>
      </div>
    </div>
  );
}
