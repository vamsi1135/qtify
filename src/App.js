import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import React from "react";
import Hero from "./components/Hero/Hero";
import { useEffect, useState } from "react";
import { fetchTopAlbums } from "./api/api";
import styles from "./App.module.css";
import Section from "../src/components/Section/Section";
import Tabs from "../src/components/Tabs/Tabs";
import Faqs from "./components/Faqs/Faqs";
// 
export default function App() {
  const [data, setData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    generateData();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={data} title="Top Albums" />
        <h3 className={styles.heading2}>songs</h3>
        <Tabs>
          <Section data={data} title="songs" type="songs" />
        </Tabs>
      </div>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.faqs}>
        <Faqs />
      </div>
    </div>
  );
}
