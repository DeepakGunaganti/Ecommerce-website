import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="10"
          img="https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
          productName="SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
          price="109.00"
          color="Blank and White"
          badge={true}
          des="Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)"
        />
        <Product
          _id="11"
          img="https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
          productName="Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5"
          price="109.00"
          color="Gray"
          badge={true}
          des="3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system 
          performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability."
        />
        <Product
          _id="12"
          img="https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
          productName="WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive"
          price="114.00"
          color="Mixed"
          badge={true}
          des="LExpand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty"
        />
        <Product
          _id="13"
          img="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
          productName="Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin"
          price="599"
          color="Black"
          badge={true}
          des="21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz"
        />
      </div>
    </div>
  );
};

export default SpecialOffers;
