import { React, useEffect } from "react";
import GLOBE from "vanta/src/vanta.globe";

const Workex = () => {
  useEffect(() => {
    const globe = GLOBE({
      el: "#globe",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      color: 0xffffff,
      color2: 0xff3f81,
      size: 1.0,
      backgroundColor: 0x23153c,
      scale: 1.0,
      scaleMobile: 1.0,
      speed: 5,
    });
  }, []);

  const mystyle = {
    glass: {
      background: "rgba(255, 255, 255, 0.25)",
      //   boxShadow: "0 8px 32px 0 rgba(255, 255, 255/, 0.37)",
      backdropFilter: "blur(4px)",
      borderRadius: "10px",
      border: "1px solid rgba(255, 255, 255, 0.18)",
      width: "80%",
      padding: " 10px",
      display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "20px",

    },
    expContainer: {
      //   backgroundColor: "red",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      maxHeight: "80vh",
      gap: "15px",
      //   padding: "10px",
      overflow: "auto",
    },
  };

  return (
    <div>
      <div
        className="globebg"
        id="globe"
        style={{
          minHeight: "100vh",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            background: "rgba(255, 255, 255, 0.25)",
            padding: "5px 10px ",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            backdropFilter: "blur(4px)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Experience
        </h1>
        <div style={mystyle.expContainer}>
          <div style={mystyle.glass}>
              
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <h4>Software Engineer</h4>

                <h4>July 2021 - Present</h4>
              </div>
              <h5 style={{ color: "#ff3f81" }}>Infosys Ltd.</h5>

                <p style={{textAlign:'justify'}}>
                    Working as a Software Engineer in Infosys Ltd. I am currently
                    working on a project for a client in the US. I am working on
                    the frontend of the project using ReactJS and Redux. I am
                    also working on the backend of the project using NodeJS and
                    ExpressJS. I am also working on the database of the project
                    using MongoDB. I am also working on the deployment of the
                    project using AWS.
                </p>
            </div>
           
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Workex;

{/* 
            */}