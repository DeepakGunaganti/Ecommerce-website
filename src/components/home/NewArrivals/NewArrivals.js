import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="5"
            img="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
            productName="John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
            price="695.00"
            color="Gold and silver"
            badge={true}
            des="From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. 
            Wear facing inward to be bestowed with love and abundance, or outward for protection."
          />
        </div>
        <div className="px-2">
          <Product
            _id="6"
            img="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg"
            productName="Solid Gold Petite Micropave"
            price="168.00"
            color="Gold"
            badge={true}
            des="Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. 
            Satisfaction Guaranteed. Return or exchange any order within 30 days."
          />
        </div>
        <div className="px-2">
          <Product
            _id="7"
            img="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg"
            productName="White Gold Plated Princess"
            price="9.99"
            color="Mixed"
            badge={true}
            des="Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, 
            Anniversary, Valentine's Day..."
          />
        </div>
        <div className="px-2">
          <Product
            _id="8"
            img="https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg"
            productName="Pierced Owl Rose Gold Plated Stainless Steel Double"
            price="10.99"
            color="Mixed"
            badge={false}
            des="Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel"
          />
        </div>
        <div className="px-2">
          <Product
            _id="9"
            img="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
            productName="WD 2TB Elements Portable External Hard Drive - USB 3.0"
            price="64.00"
            color="Mixed"
            badge={false}
            des="USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems;
             Compatibility may vary depending on user’s hardware configuration and operating system"
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;
