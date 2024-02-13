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
      img: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/342222119_1290520761816059_2599049086818356445_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=29wa9rb4_ZwAX8RK8Nt&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAyIOW6fodeb7rR97oC-WvqgTJKf4CWFg0ie_nJuMFIjw&oe=65C7E299",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      position: "Chariman of the Department",
    },
    {
      name: "Partha Chakraborty",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/334933044_487201583460854_8206933341706051896_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=OYe5ScHiUZEAX_T1K49&_nc_ht=scontent.fdac138-2.fna&oh=00_AfAbP0lxzqjhQG2X-DXEI23Wj9mr0qBn4iFFATDfc2o6jg&oe=65C78666",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      position: "Teahcer",
    },
    {
      name: "Khairun Nahar Eva",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.18169-9/28576182_1411162542327477_7800284494566082900_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=be3454&_nc_ohc=65oSQFohgvsAX_vQFqD&_nc_ht=scontent.fdac138-2.fna&oh=00_AfDiW0JEOzYPJFNQ-37ue0pAtXK8qH50LRueNBusUDNYHQ&oe=65E9D9B9",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      position: "Teahcer",
    },
    {
      name: "Mahmuda Khatun Nishu",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/333435757_1424908858252101_7854292384622241617_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a73e89&_nc_ohc=Ol0HWwuFfiIAX8QpiPu&_nc_ht=scontent.fdac138-2.fna&oh=00_AfCWZelXg6Sb1TZVjebR_fPLRRi2enFsYuAWxEZOMkD-Cw&oe=65C68602",
      reviw: "Very Nice tour ",
      position: "Teahcer",
    },
    {
      name: "Meskat Jahan",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t1.18169-9/19399517_1514970055240441_7868936488147343343_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=2be8e3&_nc_ohc=3PH84XCdHg0AX8oAXMq&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBU24uPRhGKivs1G0tYpwaBhqo6TlKRSopx7NgKXHQc8Q&oe=65E9FCA9",
      reviw: "Very Nice tour ",
      position: "Teahcer",
    },
    {
      name: "Md Faisal ",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/327441667_1742775629454139_4953215332306320170_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=AqMY4UFgbfoAX9mNHyv&_nc_ht=scontent.fdac138-2.fna&oh=00_AfDhZQ6Az8z-droMgliWLQuIpZhdiOd-S22sxhATMgC1Lw&oe=65C6CB09",
      reviw: "Very Nice tour ",
      position: "Teahcer",
    },
    
  ];

  return (
    <>
   <div className="py-12 pb-20 bg-gray-800">
  <h2 className="text-4xl text-white font-bold mt-5 mb-6 px-3 font-primary">
    Honourable Teacher who are joining with us
  </h2>
  <div className="w-full h-full">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((val, ind) => (
        <div
          className="p-5 mx-auto rounded group max-w-lg sm:max-w-md md:max-w-lg "
          key={ind}
        >
          <div className="bg-[whitesmoke] rounded rounded-ee-none pb-8 pt-10 px-6 relative">
            {/* <p className="font-secondary text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim
              odit sequi facere quasi autem sapiente minus architecto eaque,
              distinctio, cumque rerum alias, dolorem fugit inventore sit vitae
              nam ullam.
            </p> */}
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
                  {val.position}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Swiper component for small screens */}
    <Swiper
      slidesPerView={2}
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Controller]}
      className="hidden"  // This class hides Swiper on screens larger than sm (small)
    >
      {data.map((val, ind) => (
        <SwiperSlide key={ind}>
          {/* Your Swiper slide content */}
          <div
          className="p-5 mx-auto rounded group max-w-sm sm:max-w-md md:max-w-lg "
          key={ind} 
        >
          <div className="bg-[whitesmoke] rounded rounded-ee-none pb-8 pt-10 px-6 relative">
            <p className="font-secondary text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At enim
              odit sequi facere quasi autem sapiente minus architecto eaque,
              distinctio, cumque rerum alias, dolorem fugit inventore sit vitae
              nam ullam.
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
                  {val.position}
                </p>
              </div>
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
