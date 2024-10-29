import React, { useContext, useState } from 'react'
import LanguageContext from '../context/LanguageContext';
import HoverImage from './HoverImage';

export default function Hero() {
  
    const {language} = useContext(LanguageContext);
    const [hoveredImage, setHoveredImage] = useState(null); // Track the hovered image ID

    const handleMouseEnter = (imageId) => {
      setHoveredImage(imageId); // Set the hovered image ID
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null); // Reset on mouse leave
    };

    return (

  <div className="relative flex w-full h-full">

  <div className='w-[45%] h-full flex flex-col items-end pr-8'>
    <div className={`w-[80%] mt-[27%] ${hoveredImage === 1 ? 'z-10' : 'z-0'}`} onMouseEnter={ () => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
      <HoverImage src={hoveredImage === 1 || hoveredImage === null ? 'https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/bigger-science_thumbnail-2.png' : '/image.png'} name='BIGGER SCIENCE' subName = 'Immersive Experience/WebGL/Gaming' alt='Left 1'/>
    </div>
    <div className={`w-[80%] mt-[25%] ml-auto ${hoveredImage === 2 ? 'z-10' : 'z-0'}`} onMouseEnter={()=> handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
      <HoverImage src={hoveredImage === 2 || hoveredImage === null ? 'https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/Capture%20da%C3%8CeI%C3%8Ccran%202024-01-04%20aI%C3%8C%2016.41.06-2.png': '/image.png'} alt='Left 2' name='UNGANISHA' subName = 'Experiential Website/WebGL/3D'/>
    </div>
  </div>

  
  <div
    className={`absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl whitespace-wrap
      max-2xl:text-8xl
      max-2xl:top-[35%]
      max-lg:text-8xl
      max-lg:top-[20%]
      max-md:text-6xl
      max-md:top-[20%]
      max-sm:text-4xl
      max-sm:top-[15%]
      max-[1020px]:top-[30%]
      max-[1020px]:text-7xl
      pt-[5%]
      ${hoveredImage !== null ? 'text-black z-0' : 'text-white z-10'}
    `}
    style={{
      userSelect: 'none',
      overflow: 'visible',
      width: 'fit-content',
      transform: 'translate(-40%, -50%)',
    }}
  >
    {language === 'EN' ? 'IMAGINING UNIQUE CONCEPTS AND DIGITAL EXPERIENCES' : 'IMAGINER DES CONCEPTS ET DES EXPERIENCES DIGITALES UNIQUES'}
  </div>

  <div className='w-[45%] h-full flex flex-col items-start pl-8'>
    <div className={`w-[80%] mt-[10%] ${hoveredImage === 3 ? 'z-10' : 'z-0'}`} onMouseEnter={()=>handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
      <HoverImage src={hoveredImage === 3 || hoveredImage === null ? 'https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/map-interactive.png': '/image.png'} alt='Right 1' name='MUCEM' subName = 'Experientail Website'/>
    </div>
    <div className={`w-[80%] mt-[30%] ml-auto ${hoveredImage === 4 ? 'z-10' : 'z-0'}`} onMouseEnter={()=>handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
      <HoverImage src={hoveredImage === 4 || hoveredImage === null ? 'https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/Capture-dâeÌcran-2023-04-03-aÌ-10.59.43_2-2.jpg' : '/image.png'} alt='Right 2' name='OLIVE TREE' subName = 'Interactive Installation/Real Time'/>
    </div>
  </div>
</div>
  )
}
