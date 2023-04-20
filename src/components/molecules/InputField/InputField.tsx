import React from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper } from '../../atoms/FieldWrapper';
// import TextField from '@mui/material/TextField';

interface InputFieldProps {
  label?: string;
  placeholder?: string;
  registration: Partial<UseFormRegisterReturn>;
  error?: FieldError | undefined | boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  type?: 'text' | 'number' | 'password';
  variant?: 'filled' | 'outlined' | 'standard' ;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  registration,
  error,
  isRequired,
  isDisabled,
  type="text",
  variant='outlined',
  placeholder='default placeholder',
  onChange,
}) => {
  return (
    <FieldWrapper label={label} error={error}>
      {/* <TextField placeholder={placeholder} type={type}  required={isRequired} disabled={isDisabled} fullWidth {...registration} id="outlined-basic" onChange={onChange} label={label} variant={variant} /> */}
    </FieldWrapper>
  );
};
