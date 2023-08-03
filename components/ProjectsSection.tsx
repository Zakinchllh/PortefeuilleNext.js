import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Système de gestion de bibliothèque",
    description:
      "Le système de gestion de bibliothèque est une application web développée pour gérer les opérations de la bibliothèque, y compris l'authentification, l'autorisation et les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer). Ce projet vise à fournir un moyen fluide et efficace de gérer les ressources de la bibliothèque et d'améliorer l'expérience utilisateur.",
    image: "/Library.png",
    github: "https://github.com/Zakinchllh/Library"
  },
  {
    name: "Crud-Operation-Node.js",
    description: "Ce code représente un ensemble de fonctions de contrôleur qui gèrent les opérations CRUD (Créer, Lire, Mettre à jour, Supprimer) pour la gestion des réservations d'hébergement. Ces fonctions sont construites à l'aide du framework Express.js et utilisent le package express-validator pour la validation des entrées.",
    image: "/website2.png",
    github: "https://github.com/Zakinchllh/Crud-Operation-Node.js",
  }
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projets
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={500}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>

                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {/* Add additional links here if necessary */}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection;
