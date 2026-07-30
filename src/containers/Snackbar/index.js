import { Button, Snackbar, Alert } from '@mui/material';
import { useState, useEffect } from "react";

export default function Loader () {
    const [ visible, setVisible ] = useState(false);
    const [ message, setMessage ] = useState('');
    const [ type, setType ] = useState('');
    const [ key, setKey ] = useState('');

    const showSnackbar = (event, data) => {
        event.preventDefault();

        const myEvent = new CustomEvent('show-snackbar', { detail: { type: data.type, message: data.message }});
        window.dispatchEvent(myEvent);
    };

    const hideSnackbar = (event, reason) => {
        const myEvent = new CustomEvent('hide-snackbar', { detail: { reason } });
        window.dispatchEvent(myEvent);
    };

    const handleShowSnackbar = (event) => {
        setMessage(event.detail?.message ?? '');
        const newType = event.detail?.type ?? '';
        setType(newType);
        setKey(newType + (new Date().getTime()));
        setVisible(true);
    };

    const handleHideSnackbar = (event) => {
        if (event.detail.reason === 'clickaway') {
            return;
        }
        setVisible(false);
        setType('');
        setMessage('');
    };

    useEffect(() => {
        window.addEventListener('show-snackbar', handleShowSnackbar);
        window.addEventListener('hide-snackbar', handleHideSnackbar);

        return () => {
            window.removeEventListener('show-snackbar', handleShowSnackbar);
            window.removeEventListener('hide-snackbar', handleHideSnackbar);
        };
    }, []);

    return (
        <>
            <Button variant={'contained'} onClick={(event) => showSnackbar(event, { type: 'success', message: 'Success'})}>
                Show Success
            </Button>
            &nbsp;
            <Button variant={'contained'} onClick={(event) => showSnackbar(event, { type: 'error', message: 'Error'})}>
                Show Error
            </Button>
            &nbsp;
            <Button variant={'contained'} onClick={(event) => showSnackbar(event, { type: 'info', message: 'Info'})}>
                Show Info
            </Button>
            &nbsp;
            <Button variant={'contained'} onClick={(event) => showSnackbar(event, { type: 'warning', message: 'Warning'})}>
                Show Warning
            </Button>
            {
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    open={visible}
                    onClose={hideSnackbar}
                    autoHideDuration={5000}
                    key={key}
                >
                    <Alert
                        onClose={hideSnackbar}
                        severity={type}
                        variant="filled"
                        icon={false}
                        sx={{minWidth: '300px'}}
                    >
                        {message}
                    </Alert>
                </Snackbar>
            }
        </>
    );
}