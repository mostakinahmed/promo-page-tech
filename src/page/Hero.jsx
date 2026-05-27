import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function HeroSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      className="relative bg-[#090909] text-white md:pt-32 pt-12 pb-48 md:pb-64 px-6 min-h-[95vh] flex items-center overflow-hidden"
      style={{
        // Creates the exact slanted cut at the bottom (high on left, low on right)
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 75%)'
      }}
    >
     {/* Topographic Pattern Background (Fixed JPG) */}
<div 
  className="absolute inset-0 pointer-events-none opacity-40" 
  style={{
    backgroundImage: `url('https://images.wallpaperscraft.com/image/single/fabric_texture_dark_1182273_1920x1080.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    mixBlendMode: 'screen' // This helps dark textures blend into dark backgrounds
  }}
></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 md:gap-12 gap-4 items-center relative z-10 w-full">
        {/* Left Text Content */}
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp}
          className="mt-10 md:mt-0"
        >
          {/* Pill Badge */}
          <div className="inline-block border border-gray-600 rounded-full md:px-5 px-3 py-1.5 md:py-2 text-xs md:text-sm text-gray-300 md:mb-8 mb-5">
            DJI Air 3 is an advanced all-around drone
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-7xl font-bold leading-[1.1] md:mb-6 mb-4">
            <span className="relative inline-block pb-2">
              Ultra 8 Smart
              {/* Neon Green Underline */}
              <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#ccff00]"></span>
            </span>
            <br />
            Watch
          </h1>
          
          {/* Description */}
          <p className="text-gray-400 text-sm md:text-base mb-10 max-w-sm leading-relaxed">
            a wide-angle and a 3x medium telephoto. Enjoy optimized flights with a 46-minute max
          </p>
          
          {/* Call to Actions */}
          <div className="flex flex-wrap items-center md:gap-8 gap-5">
            <button className="bg-[#ccff00] text-black md:px-8 px-4 md:py-3.5 py-2.5 rounded-full font-bold text-sm hover:bg-[#b3e600] transition-colors shadow-[0_0_15px_rgba(204,255,0,0.3)]">
              Try 14 Days For Free
            </button>
            
            {/* Google Reviews */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight">Google</span>
                <span className="text-[10px] text-gray-400 leading-tight">Reviews</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1">
                <div className="flex text-white gap-0.5">
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                  <Star size={12} fill="currentColor" />
                </div>
                <span className="text-xs text-gray-300 font-medium">(5.0)</span>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50, y: 30 }} 
          animate={{ opacity: 1, x: 0, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end md:absolute md:right-0 md:top-[-10%]"
        >
          {/* Insert the transparent PNG of your watch here */}
          <img 
            src="https://winsfolio.net/html/promix/demos/assets/img/hero2-img.png" 
            alt="Ultra 8 Smart Watch" 
            className="w-full max-w-[250px] md:max-w-[550px] h-auto object-contain drop-shadow-2xl z-20"
          />
          
          {/* Optional: Glow effect behind the watch */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] rounded-full -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
}