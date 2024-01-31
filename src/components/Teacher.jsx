import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Teacher = () => {
  const data = [
    {
      name: "Mahmudul Hasan",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/421114982_10226980391228344_1198607492950995882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=eqcFVAB58KQAX-Wi-7K&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBTx9nUbJ8L0Fivj051M5jdqSHzzFRiOnBd8O4YPINCsA&oe=65BF0FE1",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Partha Chakraborty",
      img: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/306977974_10159467056317144_2058368636754483596_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=20KnbWRf_78AX_qUpUN&_nc_ht=scontent.fdac138-1.fna&oh=00_AfCVF9pgdH2DRzofJPl10rTmJ4g1uODtj9xLNxfQMnJNfg&oe=65C01DB8",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Mahmudul Hasan",
      img: "https://scontent.fdac138-2.fna.fbcdn.net/v/t39.30808-6/421114982_10226980391228344_1198607492950995882_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=eqcFVAB58KQAX-Wi-7K&_nc_ht=scontent.fdac138-2.fna&oh=00_AfBTx9nUbJ8L0Fivj051M5jdqSHzzFRiOnBd8O4YPINCsA&oe=65BF0FE1",
      reviw:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    },
    {
      name: "Mahmuda Khatun",
      img: "",
      reviw: "Very Nice tour ",
    },
    {
        img:"https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/349468134_1959889544346239_397828864172163529_n.jpg?stp=dst-jpg_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=ojMHtRUlplIAX9nRx79&_nc_ht=scontent.fdac138-1.fna&oh=00_AfAsDzUoMLJSPDxYTcr70Ty9LpKW8RKrx_0fhpS4kb6t2g&oe=65C02B12"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
      <div className="flex justify-center"></div>
      <div>
        <h2 className="text-3xl font-bold mt-5 "> Honarable Teacher who are join with us  </h2>
        <Slider {...settings}>
          {data.map((person, index) => (
            <div key={index}>
              <div className="card bg-base-100 shadow-xl m-1 h-50">
                <figure>
                  <img className="w-40 h-40 rounded-full" src={person.img} alt="${person.name}" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex justify-center">
                    {" "}
                    {person.name}{" "}
                  </h2>
                  <p>{person.reviw}</p>
                </div>
              </div>
            </div>
          ))}
        
        </Slider>
      </div>
    </>
  );
};
export default Teacher;
