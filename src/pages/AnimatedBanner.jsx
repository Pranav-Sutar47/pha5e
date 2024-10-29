import React, { useEffect, useState } from 'react';

export default function AnimatedBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => setIsVisible(true), 100); // slight delay for smooth initial load
    return () => clearTimeout(timer); // Clean up on unmount
  }, []);

  return (
    <div
      className={`fixed left-0 w-full bg-white transition-all duration-700 ease-out ${
        isVisible ? 'bottom-full' : 'bottom-0'
      }`}
      style={{ height: '20vh' }}
    >
      {/* Add any content inside the banner here */}
    </div>
  );
}
