import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import BookingModal from "../BookingModal/BookingModal";

const Booking = ({ booking, date, setBookingSuccess }) => {
  const [openBooking, setOpenBooking] = React.useState(false);
  const handleBookingOpen = () => setOpenBooking(true);
  const handleBookingClose = () => setOpenBooking(false);
  const { name, time, space } = booking;
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper sx={{ py: 5 }} elevation={3}>
          <Typography
            sx={{ color: "info.main", fontWeight: 700 }}
            variant="h5"
            gutterBottom
            component="div"
          >
            {name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {time}
          </Typography>
          <Typography variant="caption" gutterBottom component="div">
            {space} SPACES AVAILABLE
          </Typography>
          <Button onClick={handleBookingOpen} variant="contained">
            BOOK APPOINTMENT
          </Button>
        </Paper>
      </Grid>
      <BookingModal
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        date={date}
        setBookingSuccess={setBookingSuccess}
      ></BookingModal>
    </>
  );
};

export default Booking;
