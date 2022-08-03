import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CustomizedSwitches from "./Switch";

export default function BasicButtons() {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button
          variant="outlined"
          sx={{
            color: "yellow",
            border: "5px solid yellow",
          }}
        >
          Outlined
        </Button>
      </Stack>
      <Box width={300}>
        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={1}
          max={200}
        />
      </Box>
      <FormGroup>
        <CustomizedSwitches />
      </FormGroup>
    </>
  );
}
