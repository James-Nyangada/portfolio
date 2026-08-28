import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Washlab Consult Limited",
    desc: "Digital platform tailored for the water, sanitation, and hygiene (WASH) sector.",
    imgPath: "/images/project washlab.png",
    bg: "bg-[#F3F4F6]",
    imageClass: "object-contain p-2 md:p-5 drop-shadow-xl",
    span: "col-span-1 md:col-span-2 xl:col-span-2 row-span-1 xl:row-span-2",
  },
  {
    title: "Maka Grace Travel and Tours",
    desc: "A full-stack travel agency website using Next.js 14.",
    imgPath: "/images/project makagrace.png",
    bg: "bg-[#E8F5E9]",
    imageClass: "object-contain p-2 md:p-5 drop-shadow-xl",
    span: "col-span-1 md:col-span-1 xl:col-span-1 row-span-1 xl:row-span-2",
  },
  {
    title: "Holygoats",
    desc: "Complete website rebuild and form integration.",
    imgPath: "/images/holygoats.png",
    bg: "bg-[#FFEFDB]",
    imageClass: "object-contain p-2 md:p-4 drop-shadow-lg",
    span: "col-span-1 md:col-span-1 xl:col-span-1 row-span-1",
  },
  {
    title: "Weezdom Utilities",
    desc: "Smart gear e-commerce platform.",
    imgPath: "/images/weezdom.png",
    bg: "bg-[#E6F0FF]",
    imageClass: "object-contain p-2 md:p-4 drop-shadow-lg",
    span: "col-span-1 md:col-span-1 xl:col-span-1 row-span-1",
  },
  {
    title: "Borderless Afro Legal Hub",
    desc: "Custom Blog & Admin Portal.",
    imgPath: "/images/borderlessafrolegalhub.png",
    bg: "bg-[#FCE4EC]",
    imageClass: "object-contain p-2 md:p-4 drop-shadow-lg",
    span: "col-span-1 md:col-span-2 xl:col-span-2 row-span-1",
  },
  {
    title: "Richworld Safaris",
    desc: "Bespoke booking engine for a premier travel company.",
    imgPath: "/images/project_dashboard.png",
    bg: "bg-[#FFF3E0]",
    imageClass: "object-cover",
    span: "col-span-1 md:col-span-1 xl:col-span-1 row-span-1",
  }
];

const AppShowcase = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    gsap.utils.toArray(".bento-box").forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.1 * index,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase py-20 px-5 md:px-10 xl:px-20">
      <div className="w-full max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h1>
          <p className="text-white-50 md:text-xl max-w-2xl mx-auto">A selection of my recent projects, built with modern technologies and clean design principles.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px] xl:auto-rows-[350px]">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bento-box group relative rounded-3xl overflow-hidden bg-black-200 border border-white/10 flex flex-col justify-between p-6 md:p-8 hover:border-white/30 transition-colors duration-500 ${project.span}`}
            >
              {/* Background Glow/Color */}
              <div className={`absolute inset-0 opacity-10 transition-opacity duration-500 group-hover:opacity-20 ${project.bg}`}></div>
              
              <div className="relative z-10 flex-1 w-full h-full min-h-[150px] mb-6 rounded-xl overflow-hidden flex items-center justify-center bg-black-300/50">
                <img 
                  src={project.imgPath} 
                  alt={project.title} 
                  className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 ${project.imageClass}`} 
                />
              </div>

              <div className="text-content relative z-10 mt-auto">
                <h2 className="text-xl md:text-2xl font-bold text-white">{project.title}</h2>
                <p className="text-white-50 text-sm md:text-base mt-2 line-clamp-2">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
