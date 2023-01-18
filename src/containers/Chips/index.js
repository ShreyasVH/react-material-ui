import {Button, Chip, Stack} from "@mui/material";
import {useState} from "react";

export default function Chips () {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => setDeleted(true)

  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
      <Chip label="Default" />

      <Chip label="Primary" color="primary" />

      <Chip label="Secondary" color="secondary" />

      <Chip label="Success" color="success" />

      <Chip label="Success" color="success" variant="outlined" clickable />

      {(!deleted) ?
        <Chip label="Success" color="success" variant="outlined" onDelete={handleDelete} />
        : <Button onClick={() => setDeleted(false)}>Reset</Button>}
    </Stack>
  );
}