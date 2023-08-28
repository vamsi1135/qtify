import React from "react";
import styles from "./Card.module.css";
// import { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Chip from "@mui/material/Chip";

function Card(data) {
  const type = data.type;
  console.log(type, "type");
  const getCard = (type) => {
    const { image, follows, title, slug, songs } = data.data;
    return (
      <>
        {type !== "Jaz" && (
          <Tooltip title={`${songs.length}songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="ima" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} follows`}
                    size="small"
                    className={styles.chip}
                  ></Chip>
                </div>
                <div className={styles.titleWrapper}>
                  <p className={styles.para}>{title}</p>
                </div>
              </div>
            </div>
          </Tooltip>
        )}
        {type === "Jaz" && (
          <div className={styles.wrapper}>
            <div className={styles.card}>
              <img src={image} alt="ima" />
              <div className={styles.banner}>
                <Chip
                  label={`follows`}
                  size="small"
                  className={styles.chip}
                ></Chip>
              </div>
              <div className={styles.titleWrapper}>
                <p className={styles.para}>{title}</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return getCard(type);
}
export default Card;
