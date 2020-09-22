import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1233213"
          title="Cracking the Coding Interview: 189 Programming Questions and Solutions 6th Edition
          by Gayle Laakmann McDowell"
          price={26.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/410hiaPGyCL._SX348_BO1,204,203,200_.jpg"
        />
        <Product
          id="2335213"
          title="
          Introduction to Algorithms, 3rd Edition (The MIT Press) 3rd Edition
          by Thomas H. Cormen"
          price={68.47}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/41T0iBxY8FL._SX440_BO1,204,203,200_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="43234"
          title="Raspberry SC15184 Pi 4 Model B 2019 Quad Core 64 Bit WiFi Bluetooth (2GB)"
          price={39.61}
          rating={5}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.KNC0p5kpmQNDsdg144jD1wHaFj%26pid%3DApi&f=1"
        />
        <Product
          id="53253532"
          title="ARDUINO UNO R3"
          price={22.79}
          rating={3}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.UZ2PaEpkDTUUwJEPHFjs9AAAAA%26pid%3DApi&f=1"
        />
        <Product
          id="324324"
          title="CanaKit Raspberry Pi 4 4GB Starter Kit - 4GB RAM"
          price={99.99}
          rating={5}
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zoxBsypor2oFyIlVPjkbkgAAAA%26pid%3DApi&f=1"
        />
      </div>

      <div className="home__row">
        <Product
          id="324242343"
          title="Dell UltraSharp 34 Curved USB-C Monitor - U3419W"
          price={769.99}
          rating={4}
          image="https://i.dell.com/is/image/DellContent//content/dam/global-site-design/product_images/peripherals/output_devices/dell/monitors/u_series/u3419w/global_spi/monitor-u3419w-campaign-hero-504x350-ng.png?fmt=jpg"
        />
      </div>
    </div>
  );
}

export default Home;
