import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [language, setLanguage] = React.useState("");
  const [seniority, setSeniority] = React.useState("");
  const [sentenceVisibility, setSentenceVisibility] = React.useState(false);

  const handleChangeOfLanguage = (event) => {
    setLanguage(event.target.value);
  };

  const handleChangeOfSeniority = (event) => {
    setSeniority(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleOK = () => {
    setSentenceVisibility((prev) => !prev);
    console.log(language, seniority);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Open select dialog</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: "flex", flexWrap: "wrap" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Language</InputLabel>
              <Select
                native
                value={language}
                onChange={handleChangeOfLanguage}
                input={
                  <OutlinedInput label="Language" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                <option value={"HTML"}>HTML</option>
                <option value={"CSS"}>CSS</option>
                <option value={"JS"}>JS</option>
                <option value={"ReactJS"}>ReactJS</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Seniority</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={seniority}
                onChange={handleChangeOfSeniority}
                input={<OutlinedInput label="Language" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Junior"}>Junior</MenuItem>
                <MenuItem value={"Mid"}>Mid</MenuItem>
                <MenuItem value={"Senior"}>Senior</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        {sentenceVisibility === true ? (
          <div>
            Wybrałeś {language}'a na levelu: {seniority}
          </div>
        ) : null}

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleOK}>
            {sentenceVisibility === true ? "Hide" : "OK"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
