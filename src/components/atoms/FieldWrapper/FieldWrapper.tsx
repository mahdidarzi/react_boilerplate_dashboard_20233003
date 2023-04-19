import React from 'react';
import { FieldError } from 'react-hook-form';

import styles from './FieldWrapper.module.scss';

interface FieldWrapperProps {
  label?: string;
  error?: FieldError | undefined | boolean;
  className?: string;
  children: React.ReactNode;
  description?: string;
  isRequired?: boolean;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, className, error, children, isRequired }) => {
 
  return (
    <div>
      <div className={styles.label_container}>
        {label ? <span>{label}</span> : null}
        {isRequired ? <span className={styles.require_star}>{' *'}</span> : null}
      </div>

      <div className={className}>{children}</div>
      {/* bellow cod is an example we should make our error system */}
      {error ? <span className={styles.error_message}>{'this is a eg for error message'}</span> : null}
    </div>
  );
};
