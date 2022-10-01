import React from "react";
import "./styling/main.css";

//Components
import FeaturedPhoto from "./mainpage/FeaturedPhoto";
import FeaturedPosts from "./mainpage/FeaturedPosts";
import Banner from "./mainpage/Banner";
import Grid from "@mui/material/Grid";
import Parallax from "./mainpage/Parallax";
import Footer from "./mainpage/Footer";

//Image
import photoOne from "../images/review_1.jpg";
import photoTwo from "../images/review_two.jpg";
import application from "../images/application.jpg";
import map from "../images/map.jpg";
import gift from "../images/gift.jpg";

// React Query
import { usePrefetchProducts } from "../reactquery/useProducts";

const Mainpage = () => {
  usePrefetchProducts();
  const featuredPostInfo = [
    {
      title: "Puffy White Winter Jacket!",
      award: "Best looking for Winter Season!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repudiandae exercitationem numquam laudantium eum nihil optio, sunt at illo quaerat dolor blanditiis excepturi officiis fugit quibusdam adipisci nisi! Reprehenderit, quaerat.",
      image: photoOne,
      imageLabel: "test",
    },
    {
      title: "Cozy Sheep Boots",
      award: "Best Wearing all Season!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid exercitationem eum ipsam, sapiente expedita dolor voluptate alias, impedit incidunt neque qui reiciendis? Saepe amet quae itaque cumque accusamus. Nemo, fugiat?",
      image: photoTwo,
      imageLabel: "test",
    },
  ];

  const featuredCard = [
    {
      title: "Hiring Application Listed here",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem facilis quasi repellendus hic. Expedita nisi ullam alias! Vero officia rem modi porro eveniet dolore, voluptatibus exercitationem. Fuga, repudiandae provident.",
      image: application,
    },
    {
      title: "Stores near You!",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem facilis quasi repellendus hic. Expedita nisi ullam alias! Vero officia rem modi porro eveniet dolore, voluptatibus exercitationem. Fuga, repudiandae provident.",
      image: map,
    },
    {
      title: "The Perfect Gift for Any Occasion",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga exercitationem facilis quasi repellendus hic. Expedita nisi ullam alias! Vero officia rem modi porro eveniet dolore, voluptatibus exercitationem. Fuga, repudiandae provident.",
      image: gift,
    },
  ];
  return (
    <>
      <FeaturedPhoto />
      <Grid container spacing={7}>
        {featuredPostInfo.map((post) => (
          <FeaturedPosts
            key={post.title}
            title={post.title}
            description={post.description}
            award={post.award}
            image={post.image}
            imageDescription={post.imageLabel}
          />
        ))}
      </Grid>
      <Parallax />
      <Grid container>
        {featuredCard.map((props) => (
          <Banner
            key={props.title}
            title={props.title}
            description={props.description}
            image={props.image}
          />
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default Mainpage;
