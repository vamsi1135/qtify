import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carsousel/Carsousel";

const Section = (data, title) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h3>{data.title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {toggle ? "showAll" : "Collapse All"}
        </h4>
      </div>
      {data && data.data.length > 0 && (
        <div className={styles.cardWrapper}>
          {!toggle ? (
            <div className={styles.wrapper}>
              {data.data.map((item) => {
                return <Card data={item} />;
              })}
            </div>
          ) : (
            <>
              <Carousel
                data={data}
                component={(data) => <Card data={data} />}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Section;
