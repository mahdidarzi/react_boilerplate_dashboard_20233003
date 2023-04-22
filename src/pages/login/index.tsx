import React from 'react';

import { InputField,Form } from 'components/molecules';
import { CheckBox, RadioButton, ToggleButton } from 'components/atoms';

interface loginProps {
  label?: string;
}
type FormValues = {
  Title1: string;
  Title2: string;
  Title3: string;
  Title4: string;
  Title5: string;
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
              {/* <RadioButton isChecked={false}  />
              <RadioButton isChecked={true}  /> */}
              <ToggleButton active={false}  />
              <ToggleButton active={true}  />
              <CheckBox registration={register('Title2')}    />
              <CheckBox  registration={register('Title3')}    />
              <RadioButton defaultValue='defaultValu1'  registration={register('Title4')}    />
              <RadioButton defaultValue='defaultValue2'  registration={register('Title4')}    />
              <button>button</button>
            </>
          );
        }}
      </Form>
    </div>
  );
};
