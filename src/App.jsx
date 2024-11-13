import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  List,
  Divider,
  Paper,
  ThemeProvider,
  createTheme,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MapView from "./MapView";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
  },
});

const hazards = [
  {
    id: 1,
    title: "Icy Pavement",
    distance: "0.4 mi",
    reports: 28,
    timeReported: "7 mins ago",
    closedUntil: "4:00pm",
    location: { lat: 40.748817, lng: -73.985428 },
  },
  {
    id: 2,
    title: "Flooded Sidewalk",
    distance: "0.8 mi",
    reports: 15,
    timeReported: "20 mins ago",
    closedUntil: "5:00pm",
    location: { lat: 40.741895, lng: -73.989308 },
  },
  {
    id: 3,
    title: "Firefighters Present",
    distance: "1.2 mi",
    reports: 10,
    timeReported: "40 mins ago",
    closedUntil: "6:00pm",
    location: { lat: 40.73061, lng: -73.935242 },
  },
  {
    id: 4,
    title: "Vehicle Collision",
    distance: "0.6 mi",
    reports: 35,
    timeReported: "2 mins ago",
    closedUntil: "3:30pm",
    location: { lat: 40.752726, lng: -73.977229 },
  },
];

function App() {
  const apiKey = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace with your actual API key

  return (
    <ThemeProvider theme={darkTheme}>
      {/* Top Navigation Bar */}
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            DaYu
          </Typography>

          {/* Navigation links on the left side */}
          <Box sx={{ display: "flex", ml: 2 }}>
            <Button color="inherit">Recent Hazards</Button>
            <Button color="inherit">Another Link</Button>
          </Box>

          {/* Sign up / Log in buttons on the right side */}
          <Box sx={{ ml: "auto" }}>
            <Button color="inherit">Sign up</Button>
            <Button color="inherit">Log in</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        display="flex"
        height="calc(100vh - 64px)"
        bgcolor="background.default"
      >
        {/* Left side: List of hazards styled as cards */}
        <Box flex={1} p={2} sx={{ overflowY: "auto" }}>
          <Typography variant="h5" gutterBottom color="text.primary">
            Recent Hazards
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <List>
            {hazards.map((hazard) => (
              <Card
                key={hazard.id}
                sx={{
                  mb: 2,
                  bgcolor: "background.paper",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box display="flex">
                  {/* Placeholder for an image */}
                  <Box
                    width={80}
                    height={80}
                    bgcolor="#444"
                    m={2}
                    borderRadius="8px"
                  ></Box>

                  {/* Hazard Information */}
                  <CardContent sx={{ flex: 1 }}>
                    <Typography variant="h6" color="text.primary">
                      {hazard.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {hazard.distance} away
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Closed until {hazard.closedUntil}
                    </Typography>
                  </CardContent>

                  {/* Hazard Reports and Time (Stacked) */}
                  <Box
                    textAlign="right"
                    p={2}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography variant="caption" color="text.secondary">
                      {hazard.reports} reports
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {hazard.timeReported}
                    </Typography>
                  </Box>
                </Box>

                {/* "See details" button aligned to the right at the bottom */}
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button variant="contained" color="secondary" size="small">
                    See details
                  </Button>
                </CardActions>
              </Card>
            ))}
          </List>
        </Box>

        {/* Right side: Map */}
        <Box
          flex={2}
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={2}
          component={Paper}
          elevation={3}
        >
          <MapView apiKey={apiKey} hazards={hazards} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
