import { FormControl, InputLabel, Select } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FormStateFields } from '../../pages';


const StyledFormControl = styled(FormControl)`
width:100%;
&& {
  margin-bottom:10px;
  div:focus{background-color: white;};
};
`;

const StyledInputLabel = styled(InputLabel)`
background:white;
&& {
  padding:0px 4px;
}`;

type StyledSelectProps = React.ComponentProps<FunctionComponent> & {
    value: string;
    setValue: (newState: any) => void;
    placeholder: string;
    field: FormStateFields;
}


export const StyledSelect: React.FC<StyledSelectProps> = ({
  children, setValue, value, placeholder, field, ...props
}: StyledSelectProps) => (
  <StyledFormControl {...props} data-testid="select-field" variant="outlined">
    <StyledInputLabel>{placeholder}</StyledInputLabel>
    <Select
      data-testid="select-field-input"
      value={value}
      onChange={(e: React.ChangeEvent<{ value: unknown }>): void => {
        const newState = {};
        newState[field] = e.target.value as string;
        setValue(newState);
      }}
    >
      {children}
    </Select>
  </StyledFormControl>
);
