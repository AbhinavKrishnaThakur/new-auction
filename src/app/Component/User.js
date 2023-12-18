"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
  TextField,
  Rating,
} from "@mui/material";
import { useMediaQuery } from "@material-ui/core";

const User = () => {
  const [filterTerm, setFilterTerm] = useState("");
  const [priceAbove1Million, setPriceAbove1Million] = useState(false);
  const [priceAbove5Million, setPriceAbove5Million] = useState(false);
  const [ratingAboveTwo, setRatingAboveTwo] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");

  let arrayContent = [
    {
      title: "Ferrari",
      image:
        "https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795129_960_720.jpg",
      price: 200000,
      rating: 4.5,
      bColor:"skyblue"
    },
    {
      title: "Porshe",
      image:
        "https://cdn.pixabay.com/photo/2012/11/02/13/02/car-63930_1280.jpg",
      price: 70000,
      rating: 3,
      bColor:"#eb8787"
    },
    {
      title: "Mercedes",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_960_720.jpg",
      price: 1800000,
      rating: 5,
      bColor:"#d3eb87"
    },
    {
      title: "G-wagon",
      image:
        "https://cdn.pixabay.com/photo/2023/08/20/17/44/mercedes-8202872_1280.jpg",
      price: 60000,
      rating: 2,
      bColor:"#cedade"
    },

    {
      title: "Porshe Sport",
      image:
        "https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629_1280.png",
      price: 223000,
      rating: 3.5,
      bColor:"#ebc08799"
    },

    {
      title: "Speed f1",
      image:
        "https://cdn.pixabay.com/photo/2016/03/26/22/32/fast-1281628_960_720.jpg",
      price: 245000,
      rating: 5,
      bColor:"#9e79a3"
    },

    {
      title: "RangRover",
      image:
        "https://cdn.pixabay.com/photo/2017/01/28/16/03/range-rover-2015660_1280.jpg",
      price: 677000,
      rating: 4,
      bColor:"#1bbaff"
    },

    {
      title: "Audi A5",
      image:
        "https://cdn.pixabay.com/photo/2016/12/03/11/48/car-1879635_1280.jpg",
      price: 760000,
      rating: 2,
      bColor:"#4cff83"
    },

    {
      title: "Mustang gt",
      image:
        "https://cdn.pixabay.com/photo/2017/05/23/20/07/mustang-2338355_1280.jpg",
      price: 870000,
      rating: 1,
      bColor:"#ece5ff"
    },

    {
      title: "Mustang",
      image:
        "https://cdn.pixabay.com/photo/2020/10/19/08/20/car-5667110_1280.jpg",
      price: 900000,
      rating: 5,
      bColor:"#b4c8b0"
    },

    {
      title: "Rolls-Royce",
      image:
        "	https://cdn.pixabay.com/photo/2015/09/26/14/47/bentley-959192_1280.jpg",
      price: 60000,
      rating: 5,
      bColor:"#5a9fa8"
    },

    {
      title: "BMW",
      image:
        "https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_960_720.jpg",
      price: 22000,
      rating: 3,
      bColor:"#ff89d8"
    },
  ];

  const filteredArray = arrayContent.filter((item) => {
    const titleMatches = item.title
      .toLowerCase()
      .includes(filterTerm.toLowerCase());
    const priceMatches =
      (!priceAbove1Million || item.price < 100000) && // Check if the price is above 1 million when the checkbox is checked
      (!priceAbove5Million || item.price > 100000); // Check if the price is above 5 million when the checkbox is checked

    const starRating = !ratingAboveTwo || item.rating > 3;

    return titleMatches && priceMatches && starRating;
  });

  return (
    <Container className="style.app">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search your car here..."
            value={filterTerm}
            onChange={(e) => setFilterTerm(e.target.value)}
            autoComplete="off"
          />

          <div
            style={
              !isMobile
                ? { display: "flex" }
                : { display: "flex", flexDirection: "column" }
            }
          >
            <div style={{ margin: 20 }}>
              <input
                type="checkbox"
                checked={priceAbove1Million}
                onChange={() => setPriceAbove1Million(!priceAbove1Million)}
              />{" "}
              Price less than 1 Million dollar
            </div>

            <div style={{ margin: 20 }}>
              <input
                type="checkbox"
                checked={priceAbove5Million}
                onChange={() => setPriceAbove5Million(!priceAbove5Million)}
              />{" "}
              Price less then 5 Million dollar
            </div>

            <div style={{ margin: 20 }}>
              <input
                type="checkbox"
                checked={ratingAboveTwo}
                onChange={() => setRatingAboveTwo(!ratingAboveTwo)}
              />{" "}
              Star Rating Above 2 cars
            </div>

          </div>
        </Grid>

        <>
          {filteredArray.length ? (
            filteredArray.map((item, index) => (
              <Grid key={index} item sm={6} xs={12} md={3} lg={3}>
                <Card className="card" style={{backgroundColor:`${item?.bColor}`}} >
                  <img
                    style={{
                      height: "150px",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={item.image}
                    alt="card"
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      style={{ fontWeight: "bolder" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="div"
                      style={{ color: "green" }}
                    >
                      ${item.price}
                    </Typography>
                    <Rating
                      name="half-rating-read"
                      defaultValue={item?.rating}
                      precision={0.5}
                      readOnly
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))
          ) : (
            <h1>No Items of your search is available here</h1>
          )}
        </>
      </Grid>
    </Container>
  );
};

export default User;
