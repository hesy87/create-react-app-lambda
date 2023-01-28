import "./AcademyTab.scss";
import { useState, useContext } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import TabPage from "./TabPage";
import TheBaseTitle from "../../../elements/BaseTitles/TheBaseTitle";
import { DataContext } from "./../../../context/dataContext";

const AcademyTab = (props) => {
  const [key, setKey] = useState("home");
  const ctx = useContext(DataContext);
  return (
    <div className="container my-5">
      <TheBaseTitle title={"آکادمی"} />
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        {ctx.TabPageData.TabPageData.map((items) => (
          <Tab eventKey={items[0]} title={items[1]}>
            <TabPage  paragraph={items[2]} Address={items[3]}/>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default AcademyTab;

