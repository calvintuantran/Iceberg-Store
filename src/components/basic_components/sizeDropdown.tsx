import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SizeDropdown() {
  const [size, setSize] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const clothingSizes = ["SX", "S", "M", "L", "XL", "XXL"];
  return (
    <Box sx={{ minWidth: 120, marginTop: "1.5rem" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Clothing Sizes</InputLabel>
        <Select value={size} label="Clothing Size" onChange={handleChange}>
          {clothingSizes.map((size) => {
            return (
              <MenuItem key={size} value={size}>
                {size}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
