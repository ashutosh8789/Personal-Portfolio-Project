import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Ashutosh's Portfolio</title>
      </Head>
      

      {/* Header */}
      <Header id='header' className="snap-center"/>
      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero/>
      </section>

      {/* About */}

      <section id='about' className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* skills */}
      <section id='skills' className="snap-start">
        <Skills/>
      </section>

      {/* Projects */}
      <section id='projects' className="snap-start">
        <Projects/>
      </section>

      {/* Contact Me */}

      <section id='contact' className="snap-start">
        <ContactMe/>
      </section>




    </div>
  );
}
