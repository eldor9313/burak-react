import { CssVarsProvider, Typography } from "@mui/joy";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

const activeUsers = [
  {
    productName: "Eldor",
    imagePath: "/img/eldor.webp",
  },
  {
    productName: "C.Ronaldo",
    imagePath: "/img/cristiano.webp",
  },
  {
    productName: "Khabib",
    imagePath: "/img/habib.webp",
  },
  {
    productName: "A.Jakhongir",
    imagePath: "/img/jahongir.webp",
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
