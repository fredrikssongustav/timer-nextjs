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
  children, setValue, value, placeholder, field, ...props
}: StyledSelectProps) => (
  <FormControl {...props} data-testid="select-field">
    <InputLabel>{placeholder}</InputLabel>
    <StyledSelectInner
      data-testid="select-field-input"
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
