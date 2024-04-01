import React from "react";
import "../App.css";
import bckgif from "../assets/tumblr_3e369e73ea03134914553dfd272e76a3_7f2728aa_2048.gif";
import Button from "@mui/material/Button";
import valBn from "../assets/val-banner.jpg";
import silver from "../assets/silver.png";
import gold from "../assets/gold.png";
import diamond from "../assets/diamond.png";
import ascendant from "../assets/ascendant.png";
import radiant from "../assets/radiant.png";
import Card from "../components/card";

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
    border: "2px solid black",
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
};

const LandingPage = () => {
  return (
    <div style={styles.landingPage}>
      <div style={styles.topHalf}>
        <img src={bckgif} alt="Background" style={styles.backgroundImage} />
        <h2
          style={{ zIndex: "1000", fontWeight: "bold", fontSize: "50px" }}
          className="trispace"
        >
          Valorant / LOL Boosting
        </h2>
        <div style={styles.buttonContainer}>
          <Button variant="contained">Click Me</Button>
          <Button variant="contained">Click Me</Button>
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
            <h3 className="trispace" style={{ color: "#489979", fontWeight: "bold", fontSize: "30px" }}>
              Built by Gamers
            </h3>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
