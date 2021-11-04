import React from "react";
import chair from "../../../images/chair.png";
import bg from "../../../images/bg.png";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, Typography, Container } from "@mui/material";

const bannerBg = {
  backgroundColor: `url(${bg})`,
};

const verticalCenter = {
  display: "flex",
  height: "450px",
  alignItems: "center",
};

const Banner = () => {
  return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid
          item
          style={{ ...verticalCenter, textAlign: "left" }}
          xs={12}
          md={6}
        >
          <Box>
            <Typography variant="h3">
              Your New Smile <br />
              Starts Here
            </Typography>
            <Typography
              variant="h6"
              sx={{ my: 3, fontSize: 12, fontWeight: 300, color: "gray" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              consectetur vitae sint voluptatem autem temporibus accusamus
              architecto fuga minus modi!
            </Typography>
            <Button style={{ backgroundColor: "#5ce7ed" }} variant="contained">
              {" "}
              Get Appointment
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} style={verticalCenter}>
          <img style={{ width: "400px" }} src={chair} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;
