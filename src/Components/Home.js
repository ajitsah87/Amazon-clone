import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
 
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Badtamees-Dil_V1._CB603161690_.jpg"
          alt="404"
        />
        <div className="home_row">
          <Product
            id="858083"
            title={"You Can"}
            price={14.99}
            image={
              "https://m.media-amazon.com/images/I/4180omRGrSL._SX460_BO1,204,203,200_.jpg"
            }
            rating={4}
          />
          <Product
            id="536901"
            title={"Wakefit Mattress | 7 Years Warranty | Dual Comfort with Hard & Soft Foam, Mattress Double Bed, Foam Mattress, 6-Inch Bed Mattress, King Size Mattress (72x72x6_7 Pressure Zone Foam)"}
            price={146.49}
            image={
              "https://m.media-amazon.com/images/I/71xuQ79c6eL._SX466_.jpg"
            }
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="815004"
            title={"Babique Plush Soft Toy Cute Kids Animal Home Decor Boys/Girls/Baby (28 Cm, Monkey)"}
            price={4.59}
            image={
              "https://m.media-amazon.com/images/I/31VtU8AVV1L.jpg"
          
            }
            rating={3}
          />
          <Product
            id="637773"
            title={"NORTH ZONE Lightweight school bags Backpacks for Boys Girls Stylish men and women Casual Travel Laptop Bag College office"}
            price={9.99}
            image={
              "https://m.media-amazon.com/images/I/91hfMRxgXVL._UX679_.jpg"
            }
            rating={4}
          />
          <Product
            id="760950"
            title={"ASIAN mens Wonder-11 Sneaker"}
            price={14.99}
            image={
              "https://m.media-amazon.com/images/I/617OyFdfJVL._UY675_.jpg"
            }
            rating={2}
          />
        </div>
        <div className="home_row">
          <Product
            id="644872"
            title={"Acer Predator CG48 48 Inch 4K OLED 3840 x 2160 Gaming Monitor | AMD FreeSync Premium | 138Hz Refresh Rate | Up to 0.01ms | USB 3.2 Type-C Gen 2, DP x 1.4, 1 x HDMI 2.1, 3 x HDMI 2.0, USB Hub 3.2 x 4"}
            price={1464.89 }
            image={
              "https://m.media-amazon.com/images/I/81VcoIOx+eL._SX679_.jpg"
            }
            rating={5}
            
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
