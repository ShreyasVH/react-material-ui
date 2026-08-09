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
import SearchSelect from '../../components/searchSelect';

export default function TabsCustom () {
    const [selectedItem, setSelectedItem] = useState('');

    const handleSelect = (event, item) => {
        setSelectedItem(item);
    };

    return (
        <div>
            <SearchSelect onSelect={handleSelect} />

            {selectedItem}
        </div>

    );
}