import React from "react";

function Eduction() {
  return (
    <>
      <section id="education" className="">
        <h1 className="text-[#f4f4f4] w-full text-center text-[28px]  pt-3 leading-13 md:text-[40px] lg:text-[50px]  font-extrabold md:leading- ">
          {" "}
          Education
        </h1>
        <div className=" md:flex-row flex flex-col items-center  justify-center md:gap-7 mx-4 gap-4 lg:gap-10 mt-5 lg:mt-8">
          <div className="bg-[#1a1a1a] rounded-2xl max-w-[350px] transform transition duration-300 hover:scale-110 hover:shadow-2xl">
            <h1 className="mx-3 text-[#d41010] font-black mb-1">2023-2026</h1>
            <div className=" bg-[#fcbb38] mx-3 rounded-md mb-1">
              {" "}
              <h1
                className=" text-border p-1  border-red-500
                        font-bold"
              >
                Bachelor of Computer Applications (BCA)
              </h1>{" "}
            </div>
            <h1 className="mx-3 text-white text-[12px]">
              IFTM UNIVERSITY [ Moradabad ]
            </h1>
            <p className="mx-3 text-gray-800 bg-white p-1 mb-2 mt-1 rounded text-[13px] font-[500] md:text-[15px]">
              I am pursuing a Bachelor of Computer Applications (BCA) with a
              focus on web development, MERN stack, C++, Git/GitHub, operating
              systems, and DSA, aiming to build a career in full-stack
              development and software engineering.
            </p>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl w-full  lg:min-w-[350px]  max-w-[350px] transform transition duration-300 hover:scale-110 hover:shadow-2xl">
            <h1 className="mx-3 text-[#d41010] font-black mb-1">2023-2024</h1>
            <div className=" bg-[#fcbb38] mx-3  rounded-md mb-1 ">
              {" "}
              <h1
                className=" text-border p-1  border-red-500
                        font-bold"
              >
                Certification
              </h1>{" "}
            </div>

            <div className="mx-3 text-gray-800 mb-5 bg-white p-2  mt-5 rounded text-[10px] md:text-[15px]">
              <div className="bg-[#07621b] rounded ">
                <h1 className="text-white font-black mx-1">
                  Tailwind Css Bootcamp
                </h1>
                <p className="text-[#030202] pb-1 font-semibold mx-1 text-[12px]">
                  lets upgrade
                </p>
              </div>

              <div className="bg-[#07621b] rounded mt-2 ">
                <h1 className="text-white font-black mx-1">
                  Javascript Bootcamp
                </h1>
                <p className="text-[#030202] pb-1 font-semibold mx-1 text-[12px]">
                  lets upgrade
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#1a1a1a] rounded-2xl max-w-[350px]  transform transition duration-300 hover:scale-110 hover:shadow-2xl">
            <h1 className="mx-3 text-[#d41010] font-black mb-1">2022-2023</h1>
            <div className=" bg-amber-500 mx-3 rounded-md mb-1">
              {" "}
              <h1
                className=" text-border p-1  border-red-500
                        font-bold"
              >
                Intermediate (12th)
              </h1>{" "}
            </div>

            <h1 className="mx-3 text-white text-[12px]">Uttar Pradesh</h1>

            <p className="mx-3 text-gray-800 bg-white p-1 mb-2 mt-1 rounded text-[13px] font-[500] md:text-[15px]">
              I have completed my 12th grade from the Uttar Pradesh Board,
              specializing in Mathematics, Physics, Chemistry, Hindi, and
              English. This education has provided me with a strong foundation
              in analytical thinking, problem-solving, and scientific concepts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Eduction;
