import React from 'react';

import { InputField,Form } from 'components/molecules';

interface loginProps {
  label?: string;
}
type FormValues = {
  Title1: string;
};
export const Login: React.FC<loginProps> = ({ label }) => {
  return (
    <div>
      {/* <>Login</> */}
      <Form<FormValues>
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        id="my-form"
      >
        {({ register, formState, getValues, setValue }) => {
          return (
            <>
              <InputField registration={register('Title1')} placeholder="placeholder" />
            </>
          );
        }}
      </Form>
    </div>
  );
};
