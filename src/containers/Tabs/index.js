import {Tab, Tabs} from "@mui/material";
import Buttons from '../Buttons';
import Avatars from "../Avatars";
import {useState} from "react";
import Checkboxes from "../Checkboxes";
import Table from "../Table";
import Chips from "../Chips";
import Loader from '../Loader';
import Card from '../Card';
import Snackbar from '../Snackbar';
import SearchSelectContainer from '../searchSelectContainer';

export default function TabsCustom () {
  const [value, setValue] = useState('Button');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    return (
      <div
        hidden={props.id !== value}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab value="Button" label="Buttons" />
        <Tab value="Avatar" label="Avatars" />
        <Tab value="Checkbox" label="Checkboxes" />
        <Tab value="Chip" label="Chips" />
        <Tab value="Table" label="Table" />
        <Tab value="Loader" label="Loader" />
        <Tab value="Card" label="Card" />
        <Tab value="Snackbar" label="Snackbar" />
        <Tab value="SearchSelect" label="SearchSelect" />
      </Tabs>
      <div>
        <TabPanel id="Button">
          <Buttons />
        </TabPanel>
        <TabPanel id="Avatar">
          <Avatars />
        </TabPanel>
        <TabPanel id="Checkbox">
          <Checkboxes />
        </TabPanel>
        <TabPanel id="Chip">
          <Chips />
        </TabPanel>
        <TabPanel id="Table">
          <Table />
        </TabPanel>
        <TabPanel id="Loader">
          <Loader />
        </TabPanel>
        <TabPanel id="Card">
          <Card />
        </TabPanel>
        <TabPanel id="Snackbar">
          <Snackbar />
        </TabPanel>
        <TabPanel id="SearchSelect">
          <SearchSelectContainer />
        </TabPanel>
      </div>
    </div>

  );
}