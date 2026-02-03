import Button from "../components/Button";
import { portfolioData } from "@/lib/data";

const Hero = () => {
  const { hero } = portfolioData;

  // Handle click on about me button
  const handleAboutMeClick = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to handle download cv
  const handleDownloadCV = () => {
    window.open(hero.cvLink, "_blank");
  };

  return (
    <section className="min-h-fit max-w-368 flex justify-between items-center mx-auto py-40 pb-20 md:pb-40 px-4 md:px-6 lg:px-8">
      <div className="md:w-[70%] w-full flex flex-col" data-aos="fade-up">
        <div className="md:text-lg text-md tracking-wide text-text-muted">
          {hero.intro}
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold text-text-main/90 tracking-tighter">
          {hero.name}
        </h2>
        <div className="md:text-lg text-md text-justify max-w-3xl text-text-muted/90 leading-loose tracking-wide">
          <div className="md:text-lg text-md pt-5">
            {hero.descriptionP1}
          </div>
          <div className="md:text-lg text-md pt-5">
            {hero.descriptionP2}
          </div>
        </div>
        <div className="flex gap-6 pt-5">
          <Button onClick={handleDownloadCV}>
            Download CV
          </Button>

          <Button variant="outline" onClick={handleAboutMeClick}>
            About Me
          </Button>
        </div>
      </div>
      <div
        className="w-[30%] justify-end hidden lg:flex"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <img
          src={hero.profileImage}
          alt={hero.name}
          className="w-full max-w-2xl h-auto object-cover rounded-2xl shadow-2xl shadow-navy/50 border border-white/20"
        />
      </div>
    </section>
  );
};

export default Hero;