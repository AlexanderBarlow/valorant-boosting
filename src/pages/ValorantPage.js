import React from "react";
import Radiant from "../assets/radiant.png";

const ValorantPage = () => {
  const handleMouseEnter = (event) => {
    event.target.style.transform = "scale(1.2)";
  };

  const handleMouseLeave = (event) => {
    event.target.style.transform = "scale(1)";
  };

 const styles = {
   mainContainer: {
     width: "100%",
     minHeight: "100vh",
     display: "flex",
     flexDirection: "column",
     backgroundColor: "#49437F",
   },
   topBar: {
     display: "flex",
     justifyContent: "center",
     height: "fit-content",
     backgroundColor: "rgba(0, 0, 0, 0.5)",
     width: "fit-content",
     marginTop: "100px",
     marginLeft: "auto",
     marginRight: "auto", // Center the top bar horizontally
     borderRadius: "12px",
     padding: "10px",
   },
   icon: {
     height: "100px",
     marginRight: "5%",
     marginLeft: "5%",
   },
   text: {
     textAlign: "center",
     marginTop: "5px",
   },
   contentContainer: {
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexGrow: 1,
   },
   contentColumn: {
     display: "flex",
     flexWrap: "wrap",
     gap: "20px",
     maxWidth: "1200px",
     margin: "0 auto",
     padding: "20px",
   },
   contentItem: {
     flex: 1,
     minWidth: "300px",
     backgroundColor: "#f0f0f0",
     padding: "20px",
     borderRadius: "5px",
     transition: "transform 0.3s ease",
   },
 };


  return (
    <div style={styles.mainContainer}>
      <div style={styles.topBar}>
        <div>
        <img src={Radiant} alt="Radiant Logo" style={styles.icon} />
        <h5 style={styles.text}>Net Win Icon Here</h5>
       </div>
       <div>
        <img src={Radiant} alt="Radiant Logo" style={styles.icon} />
        <h5 style={styles.text}>Pure Rank Icon Here</h5>
        </div>
      </div>
      <div style={styles.contentContainer}>
        <div style={styles.contentColumn}>
          <div
            className="content-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={styles.contentItem}
          >
            <h2>Content 1</h2>
            <p>Filler content for container 1</p>
          </div>
          <div
            className="content-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={styles.contentItem}
          >
            <h2>Content 2</h2>
            <p>Filler content for container 2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValorantPage;
