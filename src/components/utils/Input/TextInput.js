// Material components
import { TextField } from "@mui/material";

export default function TextInput(props) {
    //props destructuring 
    const { label, name, textValue, setTextValue, multiline, rows, type,disabled } = props;

    const handleTextInputChange = (e) => setTextValue(e.target.value);

    return (
        <TextField
            fullWidth
            multiline={multiline ? true : false}
            rows={rows ? rows : 1}
            disabled={disabled}
            varient="contained"
            type={type}
            value={`formik.values.${name}`}
            name={name}
            label={label}
            error={`formik.touched.${name} && Boolean(formik.errors.${name})`}
            helperText={`formik.touched.${name} && formik.errors.${name}`}
            color="info"
            onChange={handleTextInputChange}
            InputLabelProps={{shrink:textValue}}
        />
    );
}