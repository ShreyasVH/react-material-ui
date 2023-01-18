import {Checkbox, FormControlLabel, Stack} from "@mui/material";
import {FavoriteBorder, Favorite} from "@mui/icons-material";

export default function Checkboxes () {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
      <FormControlLabel
        label="Primary"
        control={
          <Checkbox
            checked={true}
          />
        }
      />

      <FormControlLabel
        label="Success"
        control={
          <Checkbox
            checked={true}
            color="success"
          />
        }
      />

      <FormControlLabel
        label="Error"
        control={
          <Checkbox
            checked={true}
            color="error"
          />
        }
      />

      <FormControlLabel
        label="Info"
        control={
          <Checkbox
            checked={true}
            color="info"
          />
        }
      />

      <FormControlLabel
        label="Warning"
        control={
          <Checkbox
            checked={true}
            color="warning"
          />
        }
      />

      <FormControlLabel
        label="Indeterminate"
        control={
          <Checkbox
            indeterminate={true}
          />
        }
      />

      <Checkbox
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite />}
        color="error"
      />
    </Stack>
  );
}