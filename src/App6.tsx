import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./App6.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>React Tabs Test</h1>

      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Home</Tab>
          <Tab>About</Tab>
          <Tab>Contact</Tab>
        </TabList>

        <TabPanel>
          <p>This is the Home tab.</p>
        </TabPanel>

        <TabPanel>
          <p>This is the About tab.</p>
        </TabPanel>

        <TabPanel>
          <p>This is the Contact tab.</p>
        </TabPanel>
      </Tabs>

    </div>
  );
};

export default App;