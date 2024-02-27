import Logo from "../assets/logo-sm.svg";
import LINKEDIN from "../assets/linkedin.svg";
import IG from "../assets/IG.svg";
import GIT from "../assets/GIT.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandblue xl:px-24 flex flex-col gap-[12px] py-[8%] lg:flex-row lg:px-[3%] md:py-[4%] lg:py-[2%] justify-between items-center">
      <a
        href="https://nguydluc.github.io/portfolio-official/"
        className="cursor-pointer"
      >
        <img src={Logo} alt="Logo" className="h-12 w-auto" />
      </a>
      <small>&copy; {currentYear} Dylan Luc. All rights reserved.</small>
      <div className="flex flex-row gap-[16px]">
        <a href="https://www.linkedin.com/in/dylan-luc/" target="_blank">
          <img src={LINKEDIN} alt="LinkedIn Logo" className="h-8 w-8" />
        </a>
        <a href="https://www.instagram.com/dylanluc_/" target="_blank">
          <img src={IG} alt="Instagram Logo" className="h-8 w-8" />
        </a>
        <a href="https://github.com/nguydluc" target="_blank">
          <img src={GIT} alt="Github Logo" className="h-8 w-8" />
        </a>
      </div>
    </footer>
  );
}
