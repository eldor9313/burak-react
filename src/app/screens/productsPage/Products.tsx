import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Badge from "@mui/material/Badge";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setProducts } from "./slice";
import { Product } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";

/** REDUX SLICE & SELECTOR **/
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

const products = [
  { productName: "Doner Lavash", imagePath: "/img/donerlavash.webp" },
  { productName: "Turkish Pide", imagePath: "/img/pide3.webp" },
  { productName: "Iskender", imagePath: "/img/iskender.webp" },
  { productName: "Adana Kebab", imagePath: "/img/adana1.webp" },
  { productName: "Pirzola", imagePath: "/img/pirzola.webp" },
  { productName: "Lahmacun", imagePath: "/img/lahmajun.webp" },
  { productName: "Sarma", imagePath: "/img/sarma.webp" },
  { productName: "Baklava", imagePath: "/img/baklava.webp" },
];

export default function Products() {
  return (
    <div className="products">
      <Container>
        <Stack flexDirection={"column"} alignItems={"center"}>
          <Stack className={"avatar-big-box"}>
            <Box className="top-title">Burak Restaurant</Box>
            <Box className="search-box">
              <input placeholder="Type here" className="search-input" />
              <button className="search-btn">
                SEARCH
                <SearchIcon />
              </button>
            </Box>
          </Stack>

          <Stack className={"dishes-filter-section"}>
            <Stack className={"dishes-filter-box"}>
              <Button
                variant={"contained"}
                color={"primary"}
                className={"order"}
              >
                New
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                Price
              </Button>
              <Button
                variant={"contained"}
                color={"secondary"}
                className={"order"}
              >
                View
              </Button>
            </Stack>
          </Stack>

          <Stack className={"list-category-section"}>
            <Stack className={"product-category"}>
              <div className="category-main">
                <Button
                  className="btn"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Other
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Desert
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Drink
                </Button>
                <Button
                  className="btn"
                  variant={"contained"}
                  color={"secondary"}
                >
                  Salad
                </Button>
                <Button className="btn" variant={"contained"} color={"primary"}>
                  Dish
                </Button>
              </div>
            </Stack>

            <Stack className={"product-wrapper"}>
              {products.length !== 0 ? (
                products.map((product, index) => {
                  return (
                    <Stack key={index} className={"product-card"}>
                      <Stack
                        className={"product-img"}
                        sx={{ backgroundImage: `url(${product.imagePath})` }}
                      >
                        <div className={"product-sale"}>Normal size</div>
                        <Button className={"shop-btn"}>
                          <img
                            src={"/icons/shopping-cart.svg"}
                            style={{ display: "flex" }}
                          />
                        </Button>
                        <Button className={"view-btn"} sx={{ right: "36px" }}>
                          <Badge badgeContent={20} color="secondary">
                            <RemoveRedEyeIcon
                              sx={{
                                color: "white",
                                gray: "white",
                              }}
                            />
                          </Badge>
                        </Button>
                      </Stack>
                      <Box className={"product-desc"}>
                        <span className={"product-title"}>
                          {product.productName}
                        </span>
                        <div className={"product-desc1"}>
                          <MonetizationIcon />
                          {12}
                        </div>
                      </Box>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">New products are not available</Box>
              )}
            </Stack>
          </Stack>

          <Stack className={"pagination-section"}>
            <Pagination
              count={3}
              page={1}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                  color={"secondary"}
                />
              )}
            />
          </Stack>
        </Stack>
      </Container>

      <div className={"brands-logo"}>
        <div className="logo-title">Our Family Brands</div>
        <Stack className={"logo-box"}>
          <Box className={"logo-img"}>
            <a href="https://www.chefburakgurme.com/" target="_blank">
              <img src="/img/gurme.webp" alt="Brand 1" />
            </a>
          </Box>
          <Box className={"logo-img"}>
            <a href="https://www.cznburak.tr/" target="_blank">
              <img src="/img/seafood.webp" alt="Brand 2" />
            </a>
          </Box>
          <Box className={"logo-img"}>
            <a href="https://www.cznburakegypt.com/" target="_blank">
              <img src="/img/sweets.webp" alt="Brand 3" />
            </a>
          </Box>
          <Box className={"logo-img"}>
            <a href="https://devex.uz/" target="_blank">
              <img src="/img/doner.webp" alt="Brand 4" />
            </a>
          </Box>
        </Stack>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className={"address-area"}>
            <Box className={"title"}>Our address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3006.3245770524936!2d28.98446121181682!3d41.1056019133065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab56ac7ff7009%3A0x84c6097c80637640!2sCzn%20Burak%20Vadi%20%C4%B0stanbul!5e0!3m2!1sen!2skr!4v1745597549789!5m2!1sen!2skr"
              width="1320"
              height="500"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
