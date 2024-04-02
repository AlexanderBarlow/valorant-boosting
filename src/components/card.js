import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#039FDB",
          marginBottom: "10px",
        }}
        className="trispace cards"
      >
        <LockOpenIcon style={{ height: "100px", width: "100px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: theme.spacing(1),
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h2 className="trispace">Secure and Reliable</h2>
            <p>
              With our secure login system and reliable servers, you can trust
              us.
            </p>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#FFCA78",
          marginBottom: "10px",
        }}
        className="trispace cards"
      >
        <SupportAgentRoundedIcon style={{ height: "100px", width: "100px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: theme.spacing(1),
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h2 className="trispace">Customer Service</h2>
            <p>
              Unsatisfied with the results, we offer no questions asked returns.
            </p>
          </CardContent>
        </Box>
      </Card>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#CC3333",
          marginBottom: "10px",
        }}
        className="trispace cards"
      >
        <EmojiEventsRoundedIcon style={{ height: "100px", width: "100px" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: theme.spacing(1),
          }}
        >
          <CardContent sx={{ flex: "1 0 auto" }}>
            <h2 className="trispace">Only the Best</h2>
            <p>
              We only accept <span>Radiants and Immortals</span> for boosters.
              Ensuring that you are playing with top notch gamers.
            </p>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
