"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/zakaria.png"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
        <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Salut, je suis Ghanem Zakaria !</h1>
        
        <p className="text-lg mt-4 mb-6 md:text-2xl">
            Je suis un{" "}
            <span className="font-semibold text-teal-600">
              Ingénieur en Développement Web{" "}
            </span>
            En tant que développeur web, je suis passionné par la création de solutions web innovantes et conviviales. Je me spécialise dans le développement frontend et backend, en utilisant des technologies modernes pour créer des sites web fluides et visuellement attrayants. Avec une expertise en HTML, CSS, JavaScript et des frameworks tels que React et Node.js, je suis compétent dans le développement d'applications web réactives et interactives. Je m'efforce de fournir un code de haute qualité, garantissant des performances et une sécurité optimales. Collaborons ensemble pour donner vie à vos idées web !
          </p>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            Mon expertise inclut les technologies de développement web telles que HTML, CSS et JavaScript. J'ai également de l'expérience dans le développement avec des frameworks populaires comme React, Vue.js et Angular, ce qui me permet de créer des interfaces utilisateur réactives et conviviales.
          </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection;
