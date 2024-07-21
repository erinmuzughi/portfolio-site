import React, { useEffect } from "react";
import styles from "./Home.module.css"; // Make sure to create this CSS file with the provided styles
import { Button } from "@mui/material";

const HomeComponent = () => {
  useEffect(() => {
    const dataText = [
      "Hello", 
      "Hey!", 
      "Hi",
    ];

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
          document.querySelector(`.${styles.typingText}`).innerHTML =
            text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
          setTimeout(() => {
            typeWriter(text, i + 1, fnCallback);
          }, 100);
        } else if (typeof fnCallback === "function") {
          setTimeout(fnCallback, 700);
        }
      }
  
      function StartTextAnimation(i) {
        if (typeof dataText[i] === "undefined") {
          setTimeout(() => {
            StartTextAnimation(0);
          }, 20000);
        } else if (i < dataText.length) {
          typeWriter(dataText[i], 0, () => {
            StartTextAnimation(i + 1);
          });
        }
      }
  
      StartTextAnimation(0);
    }, []);
  
    return (
      <div className={styles.container}>
        <h1 className={styles.typingText}></h1>
        <p className= {styles.paragraph}>I'm Brittany Robinson. <a href= '/about'>It's nice to e-meet you!</a> </p>
      </div>
    );
  };

export default HomeComponent;
