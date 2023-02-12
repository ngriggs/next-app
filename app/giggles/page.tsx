export default function Giggles() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col sm:flex-row">
        <div className="image flex max-h-[500px] max-w-[500px]">
          <img
            src="https://media.discordapp.net/attachments/1070533913220501534/1074059036242223124/BlessedJess_reggio_emilia_indoor_playspace_white_wood_japandi_t_21ea4c78-f1dc-43f7-89de-82a6b755cec8.png"
            className="rounded-lg"
            alt="indoor playspace, reggio emilia, white, wood, japandi"
          />
        </div>
        <div className="flex flex-col max-w-[30rem] justify-center sm:ml-10 mt-4 sm:mt-0">
          <h1 className="font-summerVibesSolid font-normal text-5xl mb-4 text-center">
            about <span className="text-[#f7ae47]">giggles</span>
          </h1>
          <p className="font-quicksand mb-4 text-center">
            At Giggles, we believe that play and learning go hand-in-hand. Our
            mission is to provide a welcoming and nurturing environment where
            families can form meaningful connections through play. Our clean and
            inviting facility offers thoughtfully designed play areas,
            activities, and classes that foster independence, creativity, and
            confidence in children. Our goal is to become a hub where families
            can build authentic relationships and create lifelong memories.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <h2 className="font-summerVibesSolid font-normal text-3xl mb-2">
          facilities + programs
        </h2>
        <p className="font-quicksand mb-4">
          In this section, you can include details about your play areas,
          activities, and classes. You can also highlight what makes Giggles
          Play unique and different from other playspaces.
        </p>

        <h2 className="font-summerVibesSolid font-normal text-3xl mb-2">
          why choose giggles
        </h2>
        <p className="font-quicksand mb-4">
          In this section, you can highlight the benefits of choosing Giggles
          Play as the destination for families seeking an environment that
          promotes play and learning. You can include testimonials from
          satisfied customers and touch upon the safety measures you have in
          place to provide peace of mind for parents and caregivers.
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
