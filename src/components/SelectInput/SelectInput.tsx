import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { SelectInputProps } from "../../types/components";
import "./SelectInput.css"

const SelectInput = ({selected, onChange, data, id, label}: SelectInputProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <Select
        labelId={`${id}-label`}
        id={id}
        value={selected}
        label={label}
        onChange={(e)  => onChange(e.target.value)}
      >
        {data.map((current, index) => (
          <MenuItem className="item-input" key={`${index}-${current.value}`} value={current.value}>{current.display}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectInput;