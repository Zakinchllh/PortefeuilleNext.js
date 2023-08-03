import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Node.js" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Git" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          À propos de moi
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Faisons connaissance !
            </h1>
            <p>
              Salut, je m'appelle Ghanem Zakaria et je suis un{" "}
              <span className="font-bold">développeur logiciel</span> {" "}
              <span className="font-bold">hautement ambitieux</span>, {" "}
              <span className="font-bold">motivé par moi-même</span> et {" "}
              <span className="font-bold">déterminé</span>.
            </p>
            <br />
            <br />
            <br />
            <p>
              Je crois qu'on ne devrait jamais cesser de grandir. En tant que développeur web, je suis passionné par la création de solutions web innovantes et conviviales. Je me spécialise dans le développement frontend et backend, en utilisant des technologies modernes pour créer des sites web fluides et visuellement attrayants. Avec une expertise en HTML, CSS, JavaScript et des frameworks tels que React et Node.js, je suis compétent dans le développement d'applications web réactives et interactives. Je m'efforce de fournir un code de haute qualité, garantissant des performances et une sécurité optimales. Collaborons ensemble pour donner vie à vos idées web !
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Mes Compétences</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
