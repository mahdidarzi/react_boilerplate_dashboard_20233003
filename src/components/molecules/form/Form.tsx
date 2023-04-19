import React from 'react';
import { useForm, UseFormReturn, SubmitHandler, UseFormProps, FieldValues } from 'react-hook-form';

interface FormProps<TFormValues extends FieldValues> {
  className?: string;
  onSubmit?: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
}

export const Form = <TFormValues extends Record<string, unknown> = Record<string, unknown>>({
  onSubmit = () => {
    return null;
  },
  children = () => {
    return null;
  },
  className,
  options,
  id,
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ ...options });
  return (
    <form className={className} onSubmit={methods.handleSubmit(onSubmit)} id={id}>
      {children(methods)}
    </form>
  );
};
