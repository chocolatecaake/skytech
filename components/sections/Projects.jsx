import Title from "../common/Title";
import Button from "../common/Button";
import ProjectCard from "../cards/ProjectCard";

const Projects = () => {
  return (
    <section>
      <Title pretitle="our projects" header="See our work" align="center" />

      <div className="flex flex-col gap-10">
        <div className="flex justify-end">
          <Button text="See All Projects" variant="primary" />
        </div>
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 items-start">
          <ProjectCard
            Progress="Completed"
            Img="/assets/construction.webp"
            title="Akoya by Damac"
            loc="DXB"
            Client="ABC Properties"
            Value="AED 45 Million"
            ProjType="GRP Pipeline Installation"
          />

          <ProjectCard
            Progress="Completed"
            Img="/assets/construction.webp"
            title="Akoya by Damac"
            loc="DXB"
            Client="ABC Properties"
            Value="AED 45 Million"
            ProjType="GRP Pipeline Installation GRP"
          />

          <ProjectCard
            Progress="Completed"
            Img="/assets/construction.webp"
            title="Akoya by Damac"
            loc="DXB"
            Client="ABC Properties"
            Value="AED 45 Million"
            ProjType="GRP Pipeline Installation"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
