import classnames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper } from 'components/atoms/FieldWrapper';

import styles from './InputField.module.scss';

interface InputFieldProps {
  className?: string;
  type?: 'text' | 'email' | 'password';
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  registration: Partial<UseFormRegisterReturn>;
  label?: string;
  error?: FieldError | undefined | boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  className='',
  type = 'text',
  label,
  registration,
  error,
  isDisabled,
  isRequired,
  defaultValue,
  placeholder = 'Here is Placeholder',
}) => {
  const classes = classnames(styles.base, {
    [className]: className,
    [styles.base]: !error,
    [styles.base_error]: error,
    [styles.base_disabled]: isDisabled,
  });

  return (
    <FieldWrapper label={label} error={error} isRequired={isRequired}>
      <div className={classes}>
        <input
          defaultValue={defaultValue}
          disabled={isDisabled}
          placeholder={placeholder}
          type={type}
          className={`${styles.input}`}
          {...registration}
        />
        {/* {error ? <Icons type="error" className={styles.error_icon} /> : null} */}
      </div>
    </FieldWrapper>
  );
};
