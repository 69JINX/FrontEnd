'use client'
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const divRef = useRef(null);
  const divRef1 = useRef(null);
  const imgRef = useRef([]);
  const imgRef1 = useRef([]);
  const [activeContainer, setactiveContainer] = useState(true);
  const [imgArr, setimgArr] = useState(['/dronemech-reduced.webp', '/hovermech-reduced.webp', '/mech1flip-sized.webp', '/tankmech-reduced2.webp']);
  const [imgArrCopy, setimgArrCopy] = useState(['/tankmech-reduced2.webp', '/mech1flip-sized.webp', '/hovermech-reduced.webp', '/dronemech-reduced.webp']);
  let count = 0;
  let count1 = 0;


  const scrollRight = () => {
    console.log('div Width ===>', divRef.current.clientWidth);
    if (activeContainer && count !== 3) {
      count++;
      imgRef.current[count]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
      return;
    }
    if (!activeContainer && count1 !== 3) {
      count++;
      imgRef1.current[count]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
      return;
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          console.log('first in view')
          if (activeContainer) {
            setactiveContainer(false);
          }
          if (!activeContainer) {
            setactiveContainer(true);
          }
        }, 500);
      }
    });
    if (activeContainer) {
      if (imgRef.current[3]) {
        observer.observe(imgRef.current[3]);
      }
    }
    if (!activeContainer) {
      if (imgRef1.current[3]) {
        observer.observe(imgRef1.current[3]);
      }
    }


    const observer1 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          console.log('second in view')
          setactiveContainer(true);
        }, 500);
      }
    });

    if (imgRef1.current[3]) {
      observer.observe(imgRef1.current[3]);
    }

    return () => {
      observer.disconnect();
      observer1.disconnect();
    };
  }, [])

  const scrollLeft = () => {
    if (count !== 0) {
      count--;
      imgRef.current[count]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
      return;
    }
    count = 3;
    imgRef.current[count]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
  }

  useEffect(() => {
    imgRef.current[0]?.scrollIntoView({ behavior: 'smooth', inline: "center" });
  }, [])


  return (
    <>
      <div ref={divRef} className={`${activeContainer ? 'block' : 'hidden'} border w-[100vw] duration-1000 overflow-hidden`}>
        <div className="flex w-[500vw] sm:w-[400vw]">
          {imgArr.map((item, i) => ( // array of refs of images
            <img key={i} ref={(element) => imgRef.current[i] = element} className={`${i == 0 || i == 3 ? 'h-[40vh] mt-20' : 'h-[60vh] mt-6'} sm:mt-6 sm:h-[80vh] m-auto`} src={item} />
          ))}
        </div>
      </div>
      <div ref={divRef1} className={`${!activeContainer ? 'block' : 'hidden'} bg-red-500 border w-[100vw] duration-1000 overflow-hidden`}>
        <div className="flex w-[500vw] sm:w-[400vw]">
          {imgArrCopy.map((item, i) => ( // array of refs of images
            <img key={i} ref={(element) => imgRef1.current[i] = element} className={`${i == 0 || i == 3 ? 'h-[40vh] mt-20' : 'h-[60vh] mt-6'} sm:mt-6 sm:h-[80vh] m-auto`} src={item} />
          ))}
        </div>
      </div>
      <div className="m-auto flex text-4xl sm:text-6xl w-[40vw] my-6 justify-between">
        <div onClick={scrollLeft} className="rounded bg-pink-500 px-4 cursor-pointer">&lt;</div>
        <div onClick={scrollRight} className="rounded bg-pink-500 px-4 cursor-pointer">&gt;</div>
      </div>
    </>
  );
}


