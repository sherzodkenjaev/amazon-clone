import React from "react";
import "../styles/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="homeImage"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/AK2/main-banner-desktop-v2.jpg"
      />

      <div className="homeRow">
        <Product
          id="122324"
          title="Hosote Ergonomic Gaming Chair for Adults, High Back Racing Computer Gaming Chair, E-Sports Gamer Chair, Big and Tall Video Gaming Chair, PU Leather Desk Chair Task Chair Office Chair(Red,Black)"
          price={249}
          rating={5}
          image="https://gamingforlive.com/wp-content/uploads/2021/01/La-mejor-silla-gamer-GTRacing-calidad-precio-300x300.png"
        />
        <Product
          id="2342343"
          title="SAMSUNG 50-Inch Class Crystal UHD AU8000 Series - 4K UHD HDR Smart TV with Alexa Built-in"
          price={300}
          rating={5}
          image="https://images.samsung.com/is/image/samsung/p6pim/levant/ua43au7000uxtw/gallery/levant-uhd-au7000-ua43au7000uxtw-409719074?$720_576_PNG$"
        />
      </div>
      <div className="homeRow homeRow1">
        <Product
          id="3453454"
          title="Full Motion TV Wall Mount Bracket Dual Articulating Arms Swivels Tilts Rotation for Most 37-70 Inch LED, LCD, OLED Flat Curved TVs, Holds up to 132lbs, Max VESA 600x400mm by Pipishell"
          price={39.99}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/0085/6408/0736/products/m7l_wallmount-Black_1000x.png?v=1551362877"
        />
        <Product
          id="1254545"
          title="Oculus Rift S PC-Powered VR Gaming Headset"
          price={380}
          rating={5}
          image="https://www.dimprice.de/image/cache/png/oculus-rift-s/oculus-rift-s-01-1000x1000.png"
        />
        <Product
          id="453434"
          title="CyberpowerPC Gamer Xtreme VR Gaming PC, Intel i5-10400F 2.9GHz, GeForce GTX 1660 Super 6GB, 8GB DDR4, 500GB NVMe SSD, Wi-Fi Ready & Windows 10 Home (GXiVR8060A10)"
          price={1014.99}
          rating={5}
          image="https://i2.wp.com/cyberpowerpc.com/images/cs/PCO11/blk_220.png"
        />
      </div>
      <div className="homeRow">
        <Product
          id="676576"
          title="Lenovo G34w-10 34-Inch WQHD Curved Gaming Monitor, 21:9 Ultra-Wide, 3 Side NearEdgeless, 3440 x 1440, AMD FreeSync, 144Hz, HDMI, DP, Adjustable Stand, VESA, 66A1GCCBUS, Black"
          price={429.98}
          rating={5}
          image="https://scale.coolshop-cdn.com/product-media.coolshop-cdn.com/AE347K/7edc3a7e93b5489abf06f7ba084fbad8.png/f/hkc-nb34c-34-inch-curved-100hz-gaming-full-hd-led-monitor.png"
        />
      </div>
    </div>
  );
}

export default Home;
