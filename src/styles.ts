import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const CustomTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    border-radius: 20px; /* Rounded corners */
  }
  .MuiInputBase-input {
    font-size: 0.9em; /* Smaller text size */
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: darkblue; /* Blue outline */
  }
  .MuiInputLabel-root {
    color: darkblue; /* Blue label color */
  }
  .MuiInputLabel-root.Mui-focused {
    color: darkblue; /* Blue label color when focused */
  }
  input::placeholder {
    color: lightblue; /* Blue placeholder color */
  }
`;

export const CustomButton = styled(Button)`
background-color: lightgreen;
  background-color: lightgreen;
  color: white;
  padding: 12px 60px;
  border-radius: 20px;
  font-size: 1.5em;
  display: block;
  margin: 20px auto;
  text-align: center;

  &:hover {
    background-color: green; /* Darker green on hover */
  }
`;
