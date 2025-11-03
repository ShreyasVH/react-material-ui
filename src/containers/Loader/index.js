import { CircularProgress, Dialog, Button } from '@mui/material';
import { useState } from "react";

export default function Loader () {
    const [ visible, setVisible ] = useState(false);

    window.addEventListener('show-loader', function(event) {
        setVisible(true);
    });

    window.addEventListener('hide-loader', function(event) {
        setVisible(false);
    });

    const showLoader = (event) => {
        event.preventDefault();

        const myEvent = new CustomEvent('show-loader', {});
        window.dispatchEvent(myEvent);
    };

    const hideLoader = (event) => {
        event.preventDefault();

        const myEvent = new CustomEvent('hide-loader', {});
        window.dispatchEvent(myEvent);
    };

    return (
        <>
            <Button variant={'contained'} onClick={showLoader}>
                Show Loader
            </Button>
            {
                visible && <div onClick={hideLoader}>
                    <Dialog open={true} PaperProps={{sx: {backgroundColor: 'transparent', boxShadow: 'none'}}} >
                        <CircularProgress />
                    </Dialog>
                </div>
            }
        </>
    );
}