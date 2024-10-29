// "use client";;
// import { useEffect, useState } from "react";

// import { cn } from "../../lib/utils";

// export default function TypingAnimation({
//   text,
//   duration = 200,
//   className
// }) {
//   const [displayedText, setDisplayedText] = useState("");
//   const [i, setI] = useState(0);

//   useEffect(() => {
//     const typingEffect = setInterval(() => {
//       if (i < text.length) {
//         setDisplayedText(text.substring(0, i + 1));
//         setI(i + 1);
//       } else {
//         clearInterval(typingEffect);
//       }
//     }, duration);

//     return () => {
//       clearInterval(typingEffect);
//     };
//   }, [duration, i]);

//   return (
//     (<h1
//       className={cn(
//         "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
//         className
//       )}>
//       {displayedText ? displayedText : text}
//     </h1>)
//   );
// }

import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function TypingAnimation({ text, duration, className }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
        setIsTypingDone(true);
      }
    }, duration);

    return () => {
      clearInterval(typingEffect);
    };
  }, [text, duration]);

  return (
    <div className="flex items-center justify-center h-screen ">
      <h1 className={`${cn("text-6xl relative")} ${className}`}>
        <span 
          className="absolute inset-0"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px white"
          }}
        >
          {displayedText}
        </span>
        <span 
          className="relative"
          style={{
            color: isTypingDone ? "white" : "transparent",
            transition: "color 1s ease-in-out"
          }}
        >
          {displayedText}
        </span>
      </h1>
    </div>
  );
}

