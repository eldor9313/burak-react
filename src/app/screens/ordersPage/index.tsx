import { useState, SyntheticEvent } from "react";
import { Box, Container, Stack } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import "../../../css/order.css";

export default function OrdersPage() {
  const [value, setValue] = useState("1");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className={"order-left"}>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className={"order-right"}>
          <Box className={"order-info-box"}>
            <Box className={"member-box"}>
              <div className={"order-user-img"}>
                <img
                  src={"/icons/default-user.svg"}
                  className={"order-user-avatar"}
                />
                <div className={"order-user-icon-box"}>
                  <img
                    src={"/icons/user-badge.svg"}
                    className={"order-user-prof-img"}
                  />
                </div>
              </div>
              <span className={"order-user-name"}>J.Artikhujaev</span>
              <span className={"order-user-prof"}>USER</span>
            </Box>
            <Box className={"linear"}></Box>
            <Box className={"order-user-address"}>
              <div style={{ display: "flex" }}>
                <LocationOnIcon
                  style={{ fontSize: 24, color: "#616164", marginRight: "5px" }}
                />
              </div>
              <span className={"spec-address-txt"}>Uzbekistan, Tashkent</span>
            </Box>
          </Box>
          <Box className={"order-info-box"}>
            <div className="payment-form">
              <input
                type="text"
                placeholder="Card number : 5243 4090 2002 7495"
                className="payment-input"
              />

              <div className="payment-row">
                <input
                  type="text"
                  placeholder="07 / 24"
                  className="payment-input small"
                />
                <input
                  type="text"
                  placeholder="CVV : 010"
                  className="payment-input small"
                />
              </div>

              <input
                type="text"
                placeholder="Jakhongir Artikhujaev"
                className="payment-input"
              />

              <div className="payment-logos">
                <img src="/icons/western-card.svg" alt="Western Union" />
                <img src="/icons/master-card.svg" alt="Mastercard" />
                <img src="/icons/paypal-card.svg" alt="Paypal" />
                <img src="/icons/visa-card.svg" alt="Visa" />
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
