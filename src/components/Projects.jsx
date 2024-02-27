import Project1 from "../assets/projects/Capstone/cover.png";
import Project2 from "../assets/projects/Pure/cover.png";
import Project3 from "../assets/projects/JiuBar/cover.png";
import Project4 from "../assets/projects/Downmap/cover.png";
import Project5 from "../assets/projects/Sparkle/cover.png";
import Project6 from "../assets/projects/Nail/cover.png";

const projectsData = [
  {
    image: Project1,
    name: "Zine Design",
    description: "Encoding & Decoding Model",
    link: "https://www.behance.net/gallery/172571471/Stuart-Halls-Encoding-and-Decoding-Model",
  },
  {
    image: Project2,
    name: "Logo Design",
    description: "Pure Modern Asian",
    link: "https://www.instagram.com/p/C07U3eiSqTC/?img_index=1",
  },
  {
    image: Project3,
    name: "Logo Design",
    description: "Jiu Bar",
    link: "https://www.instagram.com/p/C0D06n9O91F/?img_index=1",
  },
  {
    image: Project4,
    name: "Web Development",
    description: "Downmap",
    link: "https://dev.saitnewmedia.ca/~dluc/downmap-v2/",
  },
  {
    image: Project5,
    name: "Web Development",
    description: "Sparkle",
    link: "https://dev.saitnewmedia.ca/~dluc/final/",
  },
  {
    image: Project6,
    name: "Web Development",
    description: "Nail Academy",
    link: "https://dev.saitnewmedia.ca/~dluc/nailacademy/",
  },
];

export default function Projects() {
  return (
    <section className="w-auto py-[8%] px-[8%] lg:px-[10%] md:px-[10%] xl:px-[15%]">
      <h2 className="text-center">My recent projects</h2>
      <div className="md:grid md:grid-cols-2 lg:gap-[32px] 2xl:grid-cols-3">
        {projectsData.map((project, index) => (
          <div key={index}>
            <div className="relative">
              <div
                className="projects-img mx-auto bg-cover w-[300px] h-[200px] lg:w-[400px] lg:h-[266.6px] 2xl:w-[350px] 2xl:h-[233px] relative"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="projects-img overlay mx-auto">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-name 2xl:text-[24px] 2xl:leading-[43.2px]">
                  {project.description}
                </p>
                <a className="btn" target="_blank" href={project.link}>
                  Visit the project &gt;
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
