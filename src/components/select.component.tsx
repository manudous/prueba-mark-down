import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { languages } from "../constants.syntax";
import * as classes from "./select.styles";

interface Props {
  syntax: string;
  setSyntax: (syntax: string) => void;
}

export const SelectComponent: React.FC<Props> = (props: Props) => {
  const { syntax, setSyntax } = props;

  const handleChange = (event: SelectChangeEvent) => {
    setSyntax(event.target.value as string);
  };
  return (
    <FormControl className={classes.root}>
      <InputLabel>Choose Syntax</InputLabel>
      <Select
        value={syntax}
        label="Elige tipo de código"
        onChange={handleChange}
      >
        {languages.map((language) => (
          <MenuItem key={language.label} value={language.label}>
            {language.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
