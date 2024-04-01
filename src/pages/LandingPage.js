import React from "react";
import "../App.css";
import bckgif from "../assets/tumblr_3e369e73ea03134914553dfd272e76a3_7f2728aa_2048.gif";

const styles = {
  landingPage: {
    position: "relative",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  topHalf: {
    height: "50vh", // Set height to cover half of the viewport
    position: "relative",
    overflow: "hidden", // Hide overflow content
  },
  backgroundImage: {
    width: "100%",
    height: "100%", // Cover the entire container
    objectFit: "cover",
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottomHalf: {
    flex: 1, // Take remaining space
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    background: "rgba(215, 248, 230, 0.8)",
    position: "relative",
  },
  cardContent: {
    padding: "20px",
    width: "50%",
    textAlign: "center",
  },
  slashLine: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%",
    width: "100%",
    height: "100%",
    transform: "rotate(-45deg)", // Rotate the line
    transformOrigin: "left center", // Set the rotation origin
    borderLeft: "2px solid black", // Change border to left side
    zIndex: 1, // Ensure the line appears above card content
  },
};

const LandingPage = () => {
  return (
    <div style={styles.landingPage}>
      <div style={styles.topHalf}>
        <img src={bckgif} alt="Background" style={styles.backgroundImage} />
      </div>
      <div style={styles.bottomHalf}>
        <div style={styles.cardContent}>
          <h1>Valorant Boosting</h1>
        </div>
        <div style={styles.slashLine}></div>
        <div style={styles.cardContent}>
          <h1>League of Legends Boosting</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
