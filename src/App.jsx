import React from "react";
import Header from "./header/Header";
import SectionOne from "./bodyContent/SectionOne";

import coffee1 from "./assets/hero1.webp";
import coffee2 from "./assets/coffee-mid.webp";
import coffee3 from "./assets/alowishus-coffee (1).webp";
import SectionThree from "./bodyContent/SectionThree";
import SectionTwo from "./bodyContent/SectionTwo";

import card1 from "./assets/card1.webp";
import card2 from "./assets/card2.webp";
import card3 from "./assets/card3.webp";
import SectionFour from "./bodyContent/SectionFour";

const App = () => {
  return (
    <div>
      <Header
        CofeeMenu={[
          { id: 1, name: "Coffee" },
          { id: 2, name: "Tea" },
          { id: 3, name: "Pastries" },
        ]}
      />
      <SectionOne
        slides={[
          {
            id: 1,
            title: "Brewing Stories, One Sip",
            desc: "Start your day with a cup that energizes your soul and inspires your journey.",
            img: coffee1,
            primary: "Download App",
            secondary: "Shop Iqra's Coffee",
          },
          {
            id: 2,
            title: "Brewing Stories, One Sip",
            desc: "Start your day with a cup that energizes your soul and inspires your journey.",
            img: coffee2,
            primary: "Download App",
            secondary: "Shop Iqra's Coffee",
          },
          {
            id: 3,
            title: "Brewing Stories, One Sip",
            desc: "Start your day with a cup that energizes your soul and inspires your journey.",
            img: coffee3,
            primary: "Download App",
            secondary: "Shop Iqra's Coffee",
          },
        ]}
      />
      <SectionTwo
        features={[
          {
            id: 1,
            title: "Our Catering",
            desc: "Small-batch roasted beans, brewed to order for richest flavour.",
            img: card1,
          },
          {
            id: 2,
            title: "The Food",
            desc: "Comfortable seating and free Wi-Fi — perfect for work or hangouts.",
            img: card2,
          },
          {
            id: 3,
            title: "The Getato",
            desc: "Surprise someone with a voucher — redeemable in-store or online.",
            img: card3,
          },
        ]}
      />
      <SectionThree />
      <SectionFour
        features={[
          {
            id: 1,
            title: "Our Catering",
            desc: "Small-batch roasted beans, brewed to order for richest flavour.",
            img: card1,
          },
          {
            id: 2,
            title: "The Food",
            desc: "Comfortable seating and free Wi-Fi — perfect for work or hangouts.",
            img: card2,
          },
          {
            id: 3,
            title: "The Getato",
            desc: "Surprise someone with a voucher — redeemable in-store or online.",
            img: card3,
          },
        ]}
      />
    </div>
  );
};

export default App;
