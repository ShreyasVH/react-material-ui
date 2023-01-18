import {IconButton, Stack} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function IconButtons () {
  return (
    <div>
      <h2>
        Icon:
      </h2>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
        <IconButton aria-label="delete" color="error">
          <DeleteIcon />
        </IconButton>

        <Button variant="contained" startIcon={<DeleteIcon />}>
          Button
        </Button>
        <Button variant="contained" endIcon={<DeleteIcon />}>
          Button
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Button
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
          Button
        </Button>
      </Stack>
    </div>
  );
}