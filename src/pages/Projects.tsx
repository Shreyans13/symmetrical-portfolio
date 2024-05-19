import React from "react";
import { PROJECTS_DATA, PROJECTS_DATA_TYPE } from "../config/data.ts";
import Card from "../components/Card/Card.tsx";

const Projects = () => (
    <>
      {
        PROJECTS_DATA.map((element: PROJECTS_DATA_TYPE, index: number) => (
          <div className="mb-8 grid grid-cols-1 items-center justify-center md:grid-cols-2">
            <React.Fragment key={index}>
              <Card
                title={element.card.title}
                subTitle={element.card.subTitle}
                image={element.card.image}
                description={element.card.description}
              />
              <img className={element.imageType === "VERTICAL" ? "mx-auto w-2/4" : "w-100 mx-auto"} src={element.image} alt="" />
            </React.Fragment>
          </div>
        ))
      }
    </>
  );

export default Projects;
