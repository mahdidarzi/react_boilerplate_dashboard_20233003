import classnames from 'classnames';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { FieldWrapper } from 'components/atoms';

import styles from './check-box.styles.module.scss';

interface InputFieldProps {
  className?: string;
  type?: 'checkbox';
  isRequired?: boolean;
  isDisabled?: boolean;
  registration: Partial<UseFormRegisterReturn>;
}

export const CheckBox: React.FC<InputFieldProps> = ({
  className = '',
  type = 'checkbox',

  registration,

  isDisabled,
  isRequired,
}) => {
  const classes = classnames(styles.base, {
    [className]: className,
    [styles.base_disabled]: isDisabled,
  });

  return (
    <FieldWrapper isRequired={isRequired}>
      <div>
        <input disabled={isDisabled} type={type} className={classes} {...registration} />
      </div>
    </FieldWrapper>
  );
};
