import React from "react";
import Carousel from 'react-material-ui-carousel';
import { Typography, Box } from "@material-ui/core";
import useStyles from "./style.js";
import items from "./descData.jsx";


const Description = () => {
  const classes = useStyles();

  const Item = ({ item }) => (
    <div className={classes.parent}>
      <div
        className={classes.paper}
        style={{
          backgroundImage: `linear-gradient(rgba(0,1,1,0.3),rgba(1,0,0.5)),url(${item.img})`,
        }}
      >
        <div className={classes.content}>
          <Typography variant="h1">
            <div className={classes.text}>{item.heading}</div>
            <Box
              fontWeight="fontWeightBold"
              letterSpacing={10}
              className={classes.contentBold}
            >
              Kitabi Bazaar
            </Box>
          </Typography>
          <Typography variant="h5" className={classes.smallText}>
            {item.subHeading}
          </Typography>
          <Typography variant="h6" className={classes.smallText}>
            {item.description}
          </Typography>
        </div>
      </div>
    </div>
  );

  return (
    <Carousel
      indicators={false}
      animation="fade"
      autoPlay={true}
      interval={10000}
      stopAutoPlayOnHover={false}
      navButtonsAlwaysInvisible={true}
    >
      {items.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default Description;
