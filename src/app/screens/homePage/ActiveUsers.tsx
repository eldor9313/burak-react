import { CssVarsProvider, Typography } from "@mui/joy";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  {
    productName: "Doner",
    imagePath: "/img/donerlavash.webp",
  },
  {
    productName: "Pide",
    imagePath: "/img/pide3.webp",
  },
  {
    productName: "Iskender",
    imagePath: "/img/iskender.webp",
  },
  {
    productName: "Adana",
    imagePath: "/img/adana1.webp",
  },
];

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className="main">
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((ele, index) => {
                  return (
                    <Card key={index} variant="outlined" className={"card"}>
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={ele.imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <Typography className={"member-nickname"}>
                        {ele.productName}
                      </Typography>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No Active Users!</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
