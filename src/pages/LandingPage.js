import React from "react";
import "../App.css";
import bckgif from "../assets/tumblr_3e369e73ea03134914553dfd272e76a3_7f2728aa_2048.gif";
import Button from "@mui/material/Button";
import valBn from "../assets/val-banner.jpg";
import silver from "../assets/silver.png";
import gold from "../assets/gold.png";
import diamond from "../assets/diamond.png";
import ascendant from "../assets/ascendant.png";
import radiant from "../assets/immortal.png";
import Card from "../components/card";
import LOL from "../assets/test.jpg";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SupportAgentRoundedIcon from "@mui/icons-material/SupportAgentRounded";
import EmojiEventsRoundedIcon from "@mui/icons-material/EmojiEventsRounded";
import valLogo from "../assets/vallogo4.png";
import lollogo from "../assets/lollogo.png";
import lollogo2 from "../assets/lologo.png";

const styles = {
  landingPage: {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  topHalf: {
    height: "50vh",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  secondImage: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  thirdImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    right: "0",
    zIndex: -1,
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    gap: "10px",
  },
  cardContent: {
    padding: "20px",
    width: "50%",
    textAlign: "center",
  },
  bottomHalf: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  rankContainer: {
    display: "flex",
    flexDirection: "row",
    width: "50vw",
    height: "100%",
    justifyContent: "center",
    alignItems: "end",
    gap: "130px",
  },
  rankImage: {
    width: "120px", // Adjust the width as needed
    height: "120px",
    objectFit: "cover",
    zIndex: 2,
  },
  logoContainer: {
    position: "absolute",
    bottom: 0, // Place at the bottom of the top half
    left: 0,
    width: "100%",
    height: "100px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999",
  },
  logoImage: {
    width: "100px",
    background: "transparent",
    objectFit: "cover",
    marginRight: "200px", // Adjust spacing between logos if needed
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  },
  slashedLine: {
    width: "100px",
    height: "2px",
    background: "#fff",
    transform: "rotate(-45deg)",
    position: "absolute",
    marginLeft: "20px", // Adjust spacing between logos and slashed line
    zIndex: 1,
  },
  stackedLogoContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px", // Adjust spacing between stacked images if needed
    marginLeft: "200px", // Adjust spacing between slashed line and stacked images
  },
  stackedLogoImage: {
    width: "140px",
    background: "transparent",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  },
  valLogo: {
    marginRight: "20px", // Adjust spacing between valLogo and slashedLine
  },
};

const LandingPage = () => {
  const handleMouseEnter = (event) => {
    event.target.style.transform = "scale(1.2)";
    // event.target.style.boxShadow = "0px 0px 10px rgba(255, 255, 255, 0.5)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "scale(1)";
    // event.target.style.boxShadow = "none";
  };

  return (
    <div style={styles.landingPage}>
      <div style={styles.topHalf}>
        <img src={bckgif} alt="Background" style={styles.backgroundImage} />
        <h2
          style={{
            zIndex: "1000",
            fontWeight: "bold",
            fontSize: "50px",
            marginBottom: "10px",
          }}
          className="trispace"
        >
          Best Boosting Service.
        </h2>
        <p style={{ zIndex: "1000", fontWeight: "bold" }} className="trispace">
          For Gamers, By Gamers.
        </p>
        <div style={styles.buttonContainer}>
          <Button variant="contained">Click Me</Button>
          <Button variant="contained">Click Me</Button>
        </div>
        <div style={styles.logoContainer}>
          <img
            src={valLogo}
            alt="Valorant Logo"
            style={styles.logoImage}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          <div style={styles.slashedLine}></div>
          <div style={styles.stackedLogoContainer}>
            <img
              src={lollogo}
              alt="LoL Logo"
              style={styles.stackedLogoImage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: "-1",
            }}
          />
        </div>
      </div>
      <div style={styles.bottomHalf}>
        <div
          className="left-side"
          style={{
            flexBasis: "50%",
            backgroundColor: "inherit",
            height: "100%",
          }}
        >
          <img src={valBn} alt="Background" style={styles.secondImage} />
          <div className="rankContainer" style={styles.rankContainer}>
            <img src={diamond} alt="Diamond" style={styles.rankImage} />
            <img src={ascendant} alt="Ascendant" style={styles.rankImage} />
            <img src={radiant} alt="Radiant" style={styles.rankImage} />
          </div>
        </div>
        <div
          className="right-side"
          style={{
            flexBasis: "50%",
            backgroundColor: "inherit",
            height: "100%",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h3
              className="trispace"
              style={{ color: "#489979", fontWeight: "bold", fontSize: "30px" }}
            >
              Built by Gamers
            </h3>
            {/* Your content for the right side */}
            <Card></Card>
          </div>
        </div>
      </div>
      <div style={styles.bottomHalf}>
        <div
          className="right-side"
          style={{
            flexBasis: "50%",
            backgroundColor: "inherit",
            height: "100%",
            display: "flex",
            justifyContent: "center", // Center the content horizontally
            alignItems: "center", // Center the content vertically
          }}
        >
          <div style={{ padding: "20px" }}>
            <h3
              className="trispace"
              style={{ color: "#489979", fontWeight: "bold", fontSize: "30px" }}
            >
              Why Us?
            </h3>
            <div style={{ display: "flex", gap: "30px" }}>
              <div>
                <LockOpenIcon
                  style={{
                    height: "100px",
                    width: "100px",
                    marginBottom: "0",
                    marginRight: "50px",
                    paddingBottom: "0",
                  }}
                />
                <h3 style={{ marginTop: "0", paddingTop: "0" }}>
                  Safe & Secure.
                </h3>
              </div>
              <div>
                <SupportAgentRoundedIcon
                  style={{
                    height: "100px",
                    width: "100px",
                    marginBottom: "0",
                    marginRight: "50px",
                  }}
                />
                <h3 style={{ marginTop: "0", paddingTop: "0" }}>
                  Satisfaction Guaranteed
                </h3>
              </div>
              <div>
                <EmojiEventsRoundedIcon
                  style={{
                    height: "100px",
                    width: "100px",
                    marginBottom: "0",
                    marginRight: "50px",
                  }}
                  sx={{ color: "black" }}
                />
                <h3 style={{ marginTop: "0", paddingTop: "0" }}>
                  Elite Valorant Boosters
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div
          className="left-side"
          style={{
            flexBasis: "50%",
            backgroundColor: "inherit",
            height: "100%",
          }}
        >
          <img src={LOL} alt="Background" style={styles.thirdImage} />
          <div className="rankContainer" style={styles.rankContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
