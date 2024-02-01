import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Controller, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Teacher = () => {
  const data = [
    {
      name: "Mahmudul Hasan",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/421114982_10226980391228344_1198607492950995882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=eqcFVAB58KQAX-Wi-7K&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBTx9nUbJ8L0Fivj051M5jdqSHzzFRiOnBd8O4YPINCsA&oe=65BF0FE1",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      position: "Teahcer",
    },
    {
      name: "Partha Chakraborty",
      img: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/306977974_10159467056317144_2058368636754483596_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=20KnbWRf_78AX_qUpUN&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCVF9pgdH2DRzofJPl10rTmJ4g1uODtj9xLNxfQMnJNfg&oe=65C01DB8",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      position: "Teahcer",
    },
    {
      name: "Mahmudul Hasan",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/421114982_10226980391228344_1198607492950995882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=eqcFVAB58KQAX-Wi-7K&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBTx9nUbJ8L0Fivj051M5jdqSHzzFRiOnBd8O4YPINCsA&oe=65BF0FE1",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      position: "Teahcer",
    },
    {
      name: "Mahmuda Khatun",
      img: "",
      reviw: "Very Nice tour ",
      position: "Teahcer",
    },
    {
      img: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/349468134_1959889544346239_397828864172163529_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ojMHtRUlplIAX9nRx79&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAsDzUoMLJSPDxYTcr70Ty9LpKW8RKrx_0fhpS4kb6t2g&oe=65C02B12",
    },
  ];

  return (
    <>
      <div className="py-12 pb-20 bg-gray-800">
        <h2 className="text-4xl text-white font-bold mt-5 mb-6 px-3 font-primary">
          {" "}
          Honourable Teacher who are joining with us{" "}
        </h2>
        <div className="w-full h--full">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Controller]}
            className="grid grid-cols-3"
          >
            {data.map((val, ind) => (
              <SwiperSlide
                className="rounded group max-w-sm sm:max-w-md md:max-w-lg"
                key={ind}
              >
                <div className="bg-[whitesmoke] rounded rounded-ee-none pb-8 pt-10 px-6 relative">
                  <p className="font-secondary text-gray-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    enim odit sequi facere quasi autem sapiente minus architecto
                    eaque, distinctio, cumque rerum alias, dolorem fugit
                    inventore sit vitae nam ullam.
                  </p>
                  <div className="flex flex-col items-center gap-4 mt-6">
                    <img
                      src={val.img}
                      alt=""
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h2 className="font-secondary font-semibold text-gray-900">
                        {val.name}
                      </h2>
                      <p className="font-primary text-xs font-medium text-gray-700">
                        Techer
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};
export default Teacher;
