import "./App.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function NotFound() {
  return (
    <Container
          maxWidth="100%"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            backgroundColor: "background.default",
          }}
          style={{ padding: 0 }}
        >
          <Box
            padding={5}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              // backgroundColor: "background.paper",
            }}
          >
            <Typography
              variant="h3"
              textAlign="center"
              gutterBottom
              sx={{ color: "text.primary" }}
            >
              404 Not Found
            </Typography>
          </Box>
        </Container>
  );
}
export default NotFound;