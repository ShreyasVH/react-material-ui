import {Avatar, Stack} from "@mui/material";
import {deepOrange, red} from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Avatars () {
  return (
    <div>
      <h2>
        Image:
      </h2>

      <Avatar alt="image" src="https://mui.com/static/images/avatar/1.jpg" />
      <Avatar src="https://mui.com/static/images/avatar/1.jpg" variant="rounded" sx={{ width: 80, height: 80 }} />

      <h2>
        Letter:
      </h2>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} >
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      </Stack>

      <h2>
        Icons:
      </h2>

      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: red['A400'] }}>
          <DeleteIcon color="default" />
        </Avatar>

        <Avatar sx={{ bgcolor: red['A400'] }} variant="square" >
          <DeleteIcon color="default" />
        </Avatar>

        <Avatar sx={{ bgcolor: red['A400'] }} variant="rounded">
          <DeleteIcon color="default" />
        </Avatar>
      </Stack>
    </div>
  );
}