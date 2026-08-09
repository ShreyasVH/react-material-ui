import {
    TextField,
    Paper,
    List,
    ListItemButton,
    ListItemText,
    ClickAwayListener
} from "@mui/material";
import { useState } from "react";

export default function SearchSelect(props) {
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);

    const searchItems = async (keyword) => {
        let options = [];
        if (keyword.length === 2) {
            options = [
                'Apple',
                'Orange'
            ];
        } else if (keyword.length === 3) {
            options = [
                'Banana',
                'Grapes'
            ];
        } else if (keyword.length === 4) {
            options = [
                'Pomegranate'
            ];
        }

        return options;
    }

    const handleChange = async (event) => {
        event.preventDefault();

        console.log(event.target.value);

        const keyword = event.target.value;
        if (keyword.length >= 2) {
            setOptions(await searchItems(keyword));
            setOpen(true);
        }
        setSearch(keyword);
    };

    const handleSelect = (event, item) => {
        console.log(item);
        props.onSelect && props.onSelect(event, item);
        setOpen(false);
        setSearch('');
    };

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <div style={{ position: "relative", width: 300 }}>
                <TextField
                    fullWidth
                    autoComplete="off"
                    label="Search"
                    value={search}
                    onChange={handleChange}
                />

                {open && (
                    <Paper
                        elevation={4}
                        sx={{
                            position: "absolute",
                            top: "100%",
                            left: 0,
                            right: 0,
                            mt: 0.5,
                            zIndex: 1,
                            maxHeight: 250,
                            overflow: "auto"
                        }}
                    >
                        <List dense>
                            {options.map((item) => (
                                <ListItemButton
                                    key={item}
                                    onClick={(event) => handleSelect(event, item)}
                                >
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Paper>
                )}
            </div>
        </ClickAwayListener>
    );
}