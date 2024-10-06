import React, { useEffect, useState, useRef } from "react";
import BG from "../Assets/images/bg2.jpg";
import WATCH from "../Assets/images/watch.png";

function Home() {
  const [faceSize, setFaceSize] = useState({ width: 0, height: 0 });
  const watchContainerRef = useRef(null);

  // Function to calculate watch-face size
  const updateFaceSize = () => {
    if (watchContainerRef.current) {
      // Get the width of the WATCH background container
      const watchWidth = watchContainerRef.current.offsetWidth;
      // Calculate the width and height for watch-face (20px less than the watch width)
      const newSize = watchWidth - 56;
      setFaceSize({
        width: newSize,
        height: newSize,
      });
    }
  };

  useEffect(() => {
    // Update face size on component mount and window resize
    updateFaceSize();
    window.addEventListener("resize", updateFaceSize);

    return () => {
      window.removeEventListener("resize", updateFaceSize);
    };
  }, []);


  const colorCodes = [
    "#40E0D0",
    "#ffbd33",
    "#c850e4"
  ]

  return (
    <div
      className="bg-[#03030a] "
    //   style={{
    //     backgroundImage: `url(${BG})`,
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //   }}
    >
      <div className="w-full h-full backdrop-blur-sm bg-[#03030a] bg-opacity-50">
        <div className="container mx-auto flex justify-center items-center p-5 sm:p-0">
          <div className="w-screen h-screen mx-auto flex justify-center items-center">
            <div className="w-full h-full">
              <div
                className="max-w-[620px] min-w-[320px] h-full mx-auto flex justify-center items-center relative overflow-hidden"
                style={{
                  backgroundImage: `url(${WATCH})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
                ref={watchContainerRef}
              >
                {/* Dynamically set the size of watch-face */}
                <div
                  className="watch-face absolute bg-slate-900 bg-opacity-40 rounded-full max-w-[540px] max-h-[540px] flex justify-center items-center"
                  style={{
                    width: `${faceSize.width}px`, // Set width dynamically
                    height: `${faceSize.height}px`, // Set height dynamically
                  }}
                >
                        <h2 className="text-white font-bold text-[64px]">08:42</h2>

                </div>
                <div className="fixed bottom-[56px] left-0 right-0 py-5 px-5 flex flex-row space-x-2 justify-around max-w-[620px] mx-auto">
                    {colorCodes.map((colorItem , index) => (
   <div key={index} className={`color-selector w-[56px] h-[56px] rounded-full 
    bg-[${colorItem}] cursor-pointer `}/>

                    ))}
               
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
