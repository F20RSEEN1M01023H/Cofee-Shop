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
import cup1 from "./assets/mid1.webp";
import cup2 from "./assets/mid2.webp";
import cup3 from "./assets/mid3.webp";
import SectionFive from "./bodyContent/SectionFive";
import SectionSix from "./bodyContent/SectionSix";

import avatar1 from "./assets/avatar1.avif";
import avatar2 from "./assets/avatar2.avif";
import avatar3 from "./assets/avatar3.avif";
import avatar4 from "./assets/avatar4.avif";
import avatar5 from "./assets/avatar5.avif";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  return (
    <div className="overflow-hidden">
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
            secondary: "Shop Hammad's Cofee",
          },
          {
            id: 2,
            title: "Brewing Stories, One Sip",
            desc: "Start your day with a cup that energizes your soul and inspires your journey.",
            img: coffee2,
            primary: "Download App",
            secondary: "Shop Hammad's Cofee",
          },
          {
            id: 3,
            title: "Brewing Stories, One Sip",
            desc: "Start your day with a cup that energizes your soul and inspires your journey.",
            img: coffee3,
            primary: "Download App",
            secondary: "Shop Hammad's Cofee",
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
            title: "Double Expresso",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos unde dignissimos tempore beatae laborum nihil odio explicabo, temporibus, a ipsam!",
            img: cup1,
            selling: "#Selling1",
          },
          {
            id: 2,
            title: "Double Expresso",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos unde dignissimos tempore beatae laborum nihil odio explicabo, temporibus, a ipsam!",
            img: cup2,
            selling: "#Selling2",
          },
          {
            id: 3,
            title: "Double Expresso",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eos unde dignissimos tempore beatae laborum nihil odio explicabo, temporibus, a ipsam!",
            img: cup3,
            selling: "#Selling3",
          },
        ]}
        S
      />
      <SectionFive />
      <SectionSix
        testimonials={[
          {
            id: 1,
            img: avatar1,
            name: "Aisha Khan",
            stars: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
          },
          {
            id: 2,
            img: avatar2,
            name: "Faizan Ali",
            stars: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
          },
          {
            id: 3,
            img: avatar3,
            name: "Sara Ahmed",
            stars: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
          },
          {
            id: 4,
            img: avatar4,
            name: "Bilal Khan",
            stars: 5,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
          },
          {
            id: 5,
            img: avatar5,
            name: "Hira Noor",
            stars: 4,
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
          },
        ]}
        smallImgs={[avatar1, avatar2, avatar3, avatar4, avatar5]}
      />
      <Footer
        colLinks={{
          company: {
            title: "Alowishus",
            links: ["Home", "About", "Pricing", "Features"],
          },
          products: {
            title: "Products",
            links: [
              "Figma UI System",
              "Icons Assets",
              "Responsive Blocks",
              "Components Library",
            ],
          },
          resources: {
            title: "Resources",
            links: ["FAQs", "Quick Start", "Documentation", "User Guide"],
          },
          blogs: {
            title: "Blogs",
            links: ["News", "Tips & Tricks", "New Updates", "Events"],
          },
        }}
      />
    </div>
  );
};

AOS.init({
  duration: 700,
  easing: "ease-out",
  once: false,
  offset: 120,
});
export default App;
