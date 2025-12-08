// src/components/Designs.tsx
import React from "react";

const designs = [
  {
    title: "Offline Store Poster",
    subtitle: "Branding",
    image: "/RatnaShree Poster.png",
    tags: ["Canva", "Instagram", "Branding"],
    gradient: "gradient-primary",        // same as NutriGuide style
  },
  {
    title: "Website Logo",
    subtitle: "Logo Design",
    image: "/KrishiLink Logo.png",
    tags: ["logo", "UI"],
    gradient: "gradient-secondary",      // same as PassOP style
  },
  {
    title: "Moodboard",
    subtitle: "style",
    image: "/Moodboard.png",
    tags: ["Banner", "Branding"],
    gradient: "gradient-accent",         // same as Portfolio Agent style
  },
  {
    title: "Website Poster",
    subtitle: "Poster",
    image: "/NutriGuide Poster .png",
    tags: ["Presentation", "Minimal"],
    gradient: "gradient-primary",
  },
  {
    title: "Wedding Logo",
    subtitle: "Logo",
    image: "/VS Logo.png",
    tags: ["Wedding", "Minimal"],
    gradient: "gradient-secondary",
  },
  {
    title: "Tuition Banner",
    subtitle: "Banner",
    image: "/Tuition Centre Banner.png",
    tags: ["Banner", "Marketing"],
    gradient: "gradient-accent",
  },
];

const Designs = () => {
  return (
    <section id="designs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
            Featured Designs
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            A glimpse of my creative work in Canva — social posts, posters,
            banners and presentation designs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {designs.map((design, index) => (
            <a
              key={index}
              href={design.image}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-white border border-primary/20 shadow-md overflow-hidden block transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* 🔥 TOP GRADIENT STRIP – EXACT SAME LOGIC AS PROJECTS */}
              <div className={`h-3 ${design.gradient}`}></div>

              {/* Big image */}
              <div className="h-40 md:h-48 bg-white flex items-center justify-center overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{design.title}</h3>
                <p className="text-xs text-muted-foreground mb-3">
                  {design.subtitle}
                </p>

                <div className="flex flex-wrap gap-2">
                  {design.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-[11px] bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designs;
