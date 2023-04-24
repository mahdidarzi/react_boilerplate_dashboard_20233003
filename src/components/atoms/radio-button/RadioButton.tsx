import classnames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import styles from './radio-button.styles.module.scss';
import { FieldWrapper } from '..';

interface RadioButtonProps {
  className?: string;
  name?: string;
  type?: 'radio';
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  registration?: Partial<UseFormRegisterReturn>;
  label?: string;
  error?: FieldError | undefined | boolean;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  className = '',
  type = 'radio',
  label,
  registration,
  isDisabled,
  isRequired,
  name,
}) => {
  const classes = classnames(styles.base, {
    [className]: className,
  });

  return (
    <FieldWrapper isRequired={isRequired}>
      <div className={classes}>
        <input className={classes} disabled={isDisabled} type={type} name={name} {...registration} />
      </div>
    </FieldWrapper>
  );
};
