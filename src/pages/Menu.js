import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

function Menu() {
  const [menuData, setMenuData] = useState([
    {
      itemName: "item1",
      days: ["Monday", "Saturday"],
      slot: ["Breakfast", "Dinner"],
    },
    {
      itemName: "item2",
      days: ["Monday", "Saturday"],
      slot: ["Breakfast", "Dinner"],
    },
    {
      itemName: "item3",
      days: ["Monday", "Saturday"],
      slot: ["Breakfast", "Dinner"],
    },
    {
      itemName: "item4",
      days: ["Monday", "Saturday"],
      slot: ["Breakfast", "Dinner"],
    },
    {
      itemName: "item5",
      days: ["Monday", "Saturday"],
      slot: ["Breakfast", "Dinner"],
    },
  ]);
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurshday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const slots = ["Breakfast", "Lunch", "Snacks", "Dinner"];
  return (
    <React.Fragment>
      {slots.map((slot) => (
        <Box sx={{ paddingBottom: 5 }}>
          <Typography variant="h5">{slot}</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-around",
              alignItems: "stretch",
            }}
          >
            {days.map((day) => {
              return (
                // <Grid item xs="auto">
                <Paper sx={{ flexGrow: 1, maxWidth: 250, minWidth: 150 }}>
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{ border: 1, padding: 1 }}
                  >
                    {day}
                  </Typography>
                  {menuData
                    .filter(
                      (ele) =>
                        ele["days"].includes(day) && ele["slot"].includes(slot)
                    )
                    .map((ele) => (
                      <Typography align="center" sx={{ border: 1, padding: 1 }}>
                        asdf
                      </Typography>
                    ))}
                </Paper>
                // </Grid>
              );
            })}
          </Box>
        </Box>
      ))}
    </React.Fragment>
  );
}

export default Menu;
