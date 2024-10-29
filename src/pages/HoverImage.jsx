// import React, { useState } from 'react'

// export default function HoverImage({src,alt}) {
//     const [offset, setOffset] = useState({ x: 0, y: 0 });

//     const handleMouseMove = (e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         const x = e.clientX - rect.left; // Mouse X relative to the image
//         const y = e.clientY - rect.top;  // Mouse Y relative to the image
//         // const xOffset = ((x / rect.width) - 0.5) * 20; // Adjust 20 for intensity
//         // const yOffset = ((y / rect.height) - 0.5) * 20; // Adjust 20 for intensity
//         setOffset({ x, y});
//       };
    
//       const handleMouseLeave = () => {
//         setOffset({ x: 0, y: 0 }); // Reset offset on mouse leave
//       };
    

//   return (
//     <div 
//       className="w-32 h-32 bg-gray-300 transition-transform duration-100 cursor-pointer"
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       style={{
//         transform: `translate(${(offset.x - 100) * 0.1}px, ${(offset.y - 100) * 0.1}px)`,
//       }}
//     >
//       <img src={src} alt={alt} className="w-full h-full object-cover" />
//     </div>
//   )
// }

import React, { useState } from 'react';
import { motion } from "framer-motion"

export default function HoverImage({ src, alt ,name="This is my name",subName}) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // Set hovered state
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Reset hovered state
    setOffset({ x: 0, y: 0 }); // Reset offset on mouse leave
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X relative to the image
    const y = e.clientY - rect.top;  // Mouse Y relative to the image
    const xOffset = ((x / rect.width) - 0.5) * 200; // Adjust 20 for intensity
    const yOffset = ((y / rect.height) - 0.5) * 200; // Adjust 20 for intensity
    setOffset({ x: xOffset, y: yOffset });
  };


  return (
    <div
      className="w-full h-full bg-gray-300 transition-transform duration-100 cursor-pointer"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover animate-in"/>
      {isHovered && (
       <div className="absolute bottom-0 right-0 bg-black bg-opacity-70 text-white text-xs p-2 flex flex-col items-end">
       <div>{name}</div>
       <div className="text-lg">{subName}</div>
     </div>
     
      )}
    </div>
  );
}
