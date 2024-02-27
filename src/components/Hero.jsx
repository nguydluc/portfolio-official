import Profile from "../assets/hero-img.png";
export default function Hero() {
  return (
    /*Space 2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128*/
    <section className="w-auto pt-[8%] 2xl:pt-[4%] bg-brandoffwhite">
      <h1 className="mb-[24px]">Full-stack Designer</h1>
      <p className="text-center mb-[64px] px-[32px] md:px-[96px] lg:px-[192px] 2xl:px-[256px]">
        Through strategic thinking & research driven approaches, I help clients
        create high-functioning web & graphic designs.
      </p>
      <img
        className="w-4/5 2xl:w-[55%]  mx-auto mb-[32px]"
        src={Profile}
        alt="Dylan's profile picture with the welcome text"
      ></img>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#001039"
          fillOpacity="1"
          d="M0,32L60,64C120,96,240,160,360,165.3C480,171,600,117,720,106.7C840,96,960,128,1080,128C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
}
