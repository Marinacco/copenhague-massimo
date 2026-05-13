/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React from 'react';

// ==========================================
// CONFIGURACIÓN DE IMÁGENES
// Cambia las URL o rutas de las imágenes aquí 
// para modificarlas directamente desde el código.
// Puedes usar URLs externas (https://...) o subir 
// los archivos a la carpeta `public` y usar 
// la ruta (ej. "/mi-imagen.jpg").
// ==========================================
const IMAGES = {
  house: "/micasa.jpg",
  texture: "/texture.jpg",
  sand: "/sand.jpg", 
  slate: "/slate.jpg",
  ferns: "/ferns.jpg",
  wood: "/wood.jpg",
  model: "/modelo.png.png",
  piece1: "/piece1.png",
  piece2: "/piece2.png",
  piece3: "/piece3.png",
  piece4: "/piece4.png",
  piece5: "/piece5.png",
  calm: "/calm.png",
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cph-olive selection:text-cph-sand">
      {/* Container limits width on ultra-large screens to maintain editorial proportions */}
      <div className="max-w-[1600px] mx-auto p-4 sm:p-8 md:p-12 lg:p-16">
        
        {/* Header Section */}
        <header className="mb-12 md:mb-20 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "-0.1em" }}
            animate={{ opacity: 1, letterSpacing: "-0.04em" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-display font-medium tracking-tighter leading-none mb-4 lowercase text-cph-text overflow-hidden"
            style={{ marginLeft: "-0.04em" }}
          >
            Copenhague
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 border-b border-cph-text/10 pb-8"
          >
            <p className="text-sm md:text-base tracking-[0.2em] font-medium text-cph-slate uppercase">
              Arquitecta <span className="mx-2 font-light">|</span> Minimalista <span className="mx-2 font-light">|</span> Fashionista <span className="mx-2 font-light">|</span> Intencional
            </p>
          </motion.div>
        </header>

        {/* Main Content Layout */}
        <main className="flex flex-col gap-24 lg:gap-32">
          
          {/* Section 1: Video Placeholder */}
          <section className="w-full">
            <FadeIn>
              <div className="w-full aspect-video bg-black overflow-hidden relative flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* 
                    CANVA LIMITATION: Canva prevents iframes from autoplaying purely without the play button UI.
                    For true background autoplay, we use a native HTML5 video tag.
                  */}
                  <video 
                    src="/video.mp4" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                  />
                  

                </div>
              </div>
            </FadeIn>
          </section>

          {/* Section 2: Mountain Dwelling */}
          <section className="flex flex-col gap-12 lg:gap-16 items-center">
            <FadeIn>
              <h2 className="text-sm tracking-[0.15em] font-medium uppercase text-center text-cph-espresso">Mountain Dwelling: la vida en la naturaleza nórdica </h2>
            </FadeIn>
            
            <div className="flex flex-col w-full max-w-[1400px] shadow-sm border border-black/5 items-stretch">
              {/* Top Row: House + Large Texture side by side */}
              <div className="w-full flex flex-col xl:flex-row">
                <FadeIn className="w-full xl:w-1/2 flex justify-center items-center bg-white/40 border-b xl:border-b-0 xl:border-r border-black/5 py-8 md:py-12 lg:py-16 p-4">
                  <div className="w-full max-w-[736px] aspect-square overflow-hidden relative group shadow-md" style={{ width: '100%', maxWidth: '736px' }}>
                    <img 
                      src={IMAGES.house} 
                      alt="Modern minimalist architecture integrated with nature"
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 block"
                    />
                  </div>
                </FadeIn>
                <FadeIn delay={0.2} className="w-full xl:w-1/2 flex justify-center items-center bg-white/40 border-b border-black/5 py-8 md:py-12 lg:py-16 p-4">
                  <div className="w-full max-w-[736px] aspect-square overflow-hidden relative group shadow-md" style={{ width: '100%', maxWidth: '736px' }}>
                    <img src={IMAGES.texture} alt="Interior texture" className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-1000"/>
                  </div>
                </FadeIn>
              </div>

              {/* Subtitle Row */}
              <div className="w-full bg-white/40 border-b border-black/5 py-6 flex justify-center">
                <FadeIn delay={0.25}>
                   <h3 className="text-xs md:text-sm tracking-[0.2em] font-medium uppercase text-cph-espresso text-center">Texturas</h3>
                </FadeIn>
              </div>

              {/* Bottom Row: 4 horizontal textures */}
              <div className="w-full flex flex-col md:flex-row">
                <FadeIn delay={0.3} className="flex flex-col md:flex-row w-full flex-1 min-h-[150px] md:min-h-[250px]">
                  <div className="bg-[#D1C9B9] w-full md:w-1/4 h-32 md:h-auto flex items-center justify-center relative group overflow-hidden">
                    {IMAGES.sand && <img src={IMAGES.sand} className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-1000" />}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <span className="text-white text-sm md:text-base tracking-[0.2em] font-medium uppercase drop-shadow-md">Arena</span>
                    </div>
                  </div> {/* Sand */}
                  <div className="bg-[#616664] w-full md:w-1/4 h-32 md:h-auto flex items-center justify-center text-xs tracking-widest relative group overflow-hidden">
                    <img src={IMAGES.slate} className="w-full h-full object-cover mix-blend-multiply opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <span className="text-white text-sm md:text-base tracking-[0.2em] font-medium uppercase drop-shadow-md">Piedra</span>
                    </div>
                  </div> {/* Slate Concrete */}
                  <div className="bg-[#4A4F39] w-full md:w-1/4 h-32 md:h-auto flex items-center justify-center relative group overflow-hidden">
                    <img src={IMAGES.ferns} className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <span className="text-white text-sm md:text-base tracking-[0.2em] font-medium uppercase drop-shadow-md">Naturaleza</span>
                    </div>
                  </div> {/* Ferns/Nature */}
                  <div className="bg-[#362C24] w-full md:w-1/4 h-32 md:h-auto flex items-center justify-center relative group overflow-hidden">
                    <img src={IMAGES.wood} className="w-full h-full object-cover mix-blend-multiply opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                      <span className="text-white text-sm md:text-base tracking-[0.2em] font-medium uppercase drop-shadow-md">Madera</span>
                    </div>
                  </div> {/* Wood */}
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Section 3: Fashion, Lifestyle & Colors */}
          <section className="flex flex-col gap-24 pt-16 border-t border-cph-text/10">
            
            {/* Top: 5 Pieces & Fashion Model */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              
              {/* 5 Piezas Clave */}
              <FadeIn delay={0.3} className="w-full order-2 lg:order-1">
                <h3 className="text-3xl md:text-4xl lg:text-5xl tracking-[0.15em] font-light uppercase mb-12 text-center lg:text-left text-black">
                  5 Piezas Clave
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
                  {[
                    { name: "Gabardina", img: IMAGES.piece1 },
                    { name: "The Knit", img: IMAGES.piece2 },
                    { name: "Trousers", img: IMAGES.piece3 },
                    { name: "The Bag", img: IMAGES.piece4 },
                    { name: "The Shoes", img: IMAGES.piece5 }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ y: -6 }}
                      className="w-full flex flex-col group cursor-pointer"
                    >
                      <div className="w-full aspect-[4/5] relative overflow-hidden mb-4 bg-transparent">
                        <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"/>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] sm:text-[10px] tracking-[0.2em] font-semibold text-cph-slate text-black/50 uppercase mb-1">
                          No. 0{i + 1}
                        </span>
                        <span className="text-xs sm:text-sm tracking-[0.15em] font-medium text-black uppercase">
                          {item.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>

              {/* Model */}
              <FadeIn delay={0.4} className="w-full flex justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-md aspect-[3/4] lg:max-w-none lg:w-full lg:h-[80vh] overflow-hidden group mix-blend-multiply">
                  <img 
                    src={IMAGES.model} 
                    alt="Modelo con chaqueta de cuero oliva y pantalones grises"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-1000"
                  />
                </div>
              </FadeIn>
            </div>

            {/* Paleta de Colores */}
            <FadeIn delay={0.5} className="w-full flex flex-col items-center pt-16 pb-8 border-t border-black/5 mt-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.2em] font-light uppercase mb-12 lg:mb-16 text-center text-black">Paleta de Colores</h3>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12 w-full px-4">
                <ColorBox color="bg-[#D5CCBE]" name="Sand" hex="#D5CCBE" />
                <ColorBox color="bg-[#5F6462]" name="Slate" hex="#5F6462" />
                <ColorBox color="bg-[#4C513E]" name="Olive" hex="#4C513E" />
                <ColorBox color="bg-[#382C24]" name="Espresso" hex="#382C24" />
              </div>
            </FadeIn>

            {/* Bottom: Un dia en Copenhague & Bicycle Image */}
            <div className="w-full max-w-5xl mx-auto pt-8 border-t border-cph-text/10 pb-20">
              <FadeIn delay={0.4} className="w-full bg-[#D5CCBE]/20 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                
                {/* Schedule */}
                <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                  <h3 className="text-2xl tracking-[0.2em] font-light uppercase mb-12 text-cph-espresso text-center md:text-left">Un dia en Copenhague</h3>
                  <div className="flex flex-col gap-6 text-sm lg:text-base font-medium tracking-[0.1em] uppercase text-cph-slate w-full max-w-sm">
                    <ScheduleRow time="08:00" event="AT THE STUDIO" />
                    <ScheduleRow time="12:00" event="LUNCH IN THE CITY" />
                    <ScheduleRow time="14:00" event="MEETINGS" />
                    <ScheduleRow time="16:30" event="RIDE HOME" />
                    <ScheduleRow time="17:00" event="SAUNA & UNWIND" />
                  </div>
                </div>

                {/* Bicycle Image */}
                <div className="w-full md:w-1/2 max-w-[400px] xl:max-w-none xl:w-[400px] aspect-[4/5] overflow-hidden shadow-lg relative group">
                  <img src={IMAGES.calm} alt="Bicycle by a green door" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-1000" />
                </div>
                
              </FadeIn>
            </div>

          </section>
        </main>
      </div>
    </div>
  );
}

function ScheduleRow({ time, event }: { time: string, event: string }) {
  return (
    <div className="flex items-center gap-8 md:gap-12 group cursor-default">
      <span className="w-16 md:w-20 text-cph-slate font-medium text-left">{time}</span>
      <span className="text-cph-text group-hover:text-cph-espresso transition-colors duration-300 font-medium tracking-widest">{event}</span>
    </div>
  );
}

function ColorBox({ color, name, hex }: { color: string, name: string, hex: string }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="flex flex-col group cursor-pointer w-[120px] sm:w-[140px] md:w-[180px]"
    >
      <div className={`w-full aspect-square ${color} shadow-md border border-black/5 mb-4 transition-all duration-500 group-hover:shadow-2xl rounded-sm`} />
      <div className="flex flex-col items-center gap-1 border-t border-black/5 pt-3">
        <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-black">{name}</span>
        <span className="text-[10px] sm:text-xs text-black/40 font-mono tracking-widest">{hex}</span>
      </div>
    </motion.div>
  );
}
