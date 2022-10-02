import React from "react";

//Components
import Footer from "./mainpage/Footer";
import StaffCard from "./basic_components/StaffCard";

//Material Ui
import { Grid, Typography } from "@mui/material";

//Photos
import divya from "../images/staff_Images/divya.jpg";
import mateo from "../images/staff_Images/mateo.jpg";
import micheal from "../images/staff_Images/michael.jpg";
import sandra from "../images/staff_Images/sandra.jpg";
import calvin from "../images/staff_Images/calvin.jpg";
import pancho from "../images/staff_Images/pancho.jpg";

const Staff = () => {
  const staff = [
    {
      name: "Divya",
      position: "CEO",
      image: divya,
      description:
        "ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt, vel consequatur delectus vitae modi asperiores ullam und2e.",
    },
    {
      name: "Mateo",
      position: "Vice President",
      image: mateo,
      description:
        "ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid assumenda",
    },
    {
      name: "Micheal",
      position: "Manager",
      image: micheal,
      description:
        "ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid assumenda",
    },
    {
      name: "Sandra",
      position: "Program Manager",
      image: sandra,
      description:
        "ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid assumenda",
    },
    {
      name: "Calvin",
      position: "Software Engineer",
      image: calvin,
      description:
        "ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid assumenda",
    },
    {
      name: "Pancho",
      position: "Mascot",
      image: pancho,
      description:
        "ipsum dolor sit amet consectetur adipisicing elit. Iste itaque aliquid assumenda",
    },
  ];

  return (
    <>
      <Typography variant="h3" className="title" sx={{ width: "auto" }}>
        Our Staff
      </Typography>
      <div className="underline" />
      <Grid container>
        {staff.map((item) => {
          return (
            <Grid item md={4}>
              <StaffCard
                key={item.name}
                name={item.name}
                position={item.position}
                image={item.image}
                description={item.description}
              />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </>
  );
};

export default Staff;
