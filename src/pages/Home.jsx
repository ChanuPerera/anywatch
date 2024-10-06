import React, { useEffect, useState, useRef } from "react";
import BG from "../Assets/images/bg2.jpg";
import WATCH from "../Assets/images/watchOPT.png";
import { useDispatch , useSelector } from "react-redux";
import { setColor } from "../Service/provider/colorSilce";
import dayjs from 'dayjs';


function Home() {
  const [faceSize, setFaceSize] = useState({ width: 0, height: 0 });
  const watchContainerRef = useRef(null);
  const [time, setTime] = useState(dayjs());

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
    // Update the time every second
    const interval = setInterval(() => {
      setTime(dayjs()); // Update with current time using dayjs
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

   // Format the time using Day.js (e.g., HH:mm:ss)
   const formattedTime = time.format('HH:mm:ss'); 

  useEffect(() => {
    // Update face size on component mount and window resize
    updateFaceSize();
    window.addEventListener("resize", updateFaceSize);

    return () => {
      window.removeEventListener("resize", updateFaceSize);
    };
  }, []);

  const colorCodes = ["#40E0D0", "#ffbd33", "#c850e4"];
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.color.selectedColor);


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
                <div
                  className="watch-face absolute bg-slate-900 bg-opacity-40 rounded-full max-w-[424px] max-h-[424px] flex justify-center items-center"
                  style={{
                    width: `${faceSize.width}px`,
                    height: `${faceSize.height}px`,
                  }}
                >
                  <span className="text-white font-bold font-link md:text-[7rem] sm:text-[8rem] text-[6rem]" style={{ color: selectedColor }}>
      {formattedTime}
    </span>
                </div>
                <div className="fixed bottom-[56px] left-0 right-0 py-5 px-5 flex flex-row space-x-2 justify-around max-w-[620px] mx-auto">
                  {colorCodes.map((colorItem, index) => (
                    <div
                      key={index}
                      className="color-selector w-[56px] h-[56px] rounded-full cursor-pointer"
                      style={{
                        backgroundColor: colorItem,
                      }}
                      onClick={() => dispatch(setColor(colorItem))}
                    />
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
