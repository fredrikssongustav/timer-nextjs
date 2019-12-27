import { FormControl, InputLabel, Select } from '@material-ui/core';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { FormStateFields } from '../../pages';


const StyledSelectInner = styled(Select)`
width:100px;
margin-right:10px;

`;

type StyledSelectProps = React.ComponentProps<FunctionComponent> & {
    value: string;
    setValue: (newState: any) => void;
    placeholder: string;
    field: FormStateFields;
}


export const StyledSelect: React.FC<StyledSelectProps> = ({
  children, setValue, value, placeholder, field,
}: StyledSelectProps) => (
  <FormControl>
    <InputLabel id="demo-simple-select-label">{placeholder}</InputLabel>
    <StyledSelectInner
      id="demo-simple-select"
      value={value}
      onChange={(e: React.ChangeEvent<{ value: unknown }>): void => {
        const newState = {};
        newState[field] = e.target.value as string;
        setValue(newState);
      }}
    >
      {children}
    </StyledSelectInner>
  </FormControl>
);
