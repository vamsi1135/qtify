import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import styles from "../../components/Section/Section.module.css";
import { fetchTopAlbums, fetchTopSongs } from "../../api/api";
import Card from "../Card/Card";

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  const generateData1 = async () => {
    try {
      const res = await fetchTopSongs();
      setFilterData(res);
    } catch (err) {}
  };

  useEffect(() => {
    generateData();
    generateData1();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1", color: "white" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="white"
            indicatorColor="secondary"
            backgroundColor="secondary"
          >
            <Tab label="All" value="1" />
            <Tab label="Pop" value="2" />
            <Tab label="Jazz" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className={styles.wrapper}>
            {data.map((item) => {
              return <Card data={item} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div className={styles.wrapper}>
            {filterData
              .filter((item) => item.genre.label === "Pop")
              .map((dat) => {
                return <Card data={dat} type="Jaz" />;
              })}
          </div>
        </TabPanel>
        <TabPanel value="3">
          <div className={styles.wrapper}>
            {filterData
              .filter((item) => item.genre.label === "Jazz")
              .map((dat) => {
                return <Card data={dat} type="Jaz" />;
              })}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
