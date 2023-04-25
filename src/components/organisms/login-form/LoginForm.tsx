import React, { FunctionComponent } from 'react';
import Styles from './LoginForm.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, InputField } from 'components/molecules';
import { Button, CardWrapper, CheckBox, Icon, RadioButton, ToggleButton } from 'components/atoms';

interface Props {
  name?: string;
}

export const UserLoginForm: FunctionComponent<Props> = () => {
  const intl = useIntl();

  return (
    <CardWrapper className={Styles.base}>
      <div className={Styles.header}>
        <h4>
          <FormattedMessage id="signin" />
        </h4>
        <div className={Styles.socials}>
          <Icon icon="facebook" />
          <Icon icon="mail" />
          <Icon icon="public" />
        </div>
      </div>

      <Form
        onSubmit={async (values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        id="my-form"
      >
        {({ register, formState, getValues, setValue }) => {
          return (
            <>
              <InputField
                label={intl.formatMessage({ id: 'username' })}
                registration={register('username')}
                placeholder=""
              />
              <InputField
                label={intl.formatMessage({ id: 'password' })}
                registration={register('password')}
                placeholder=""
              />
              <ToggleButton className={Styles.toggle}>Remember me</ToggleButton>
              <Button className="w-100">{intl.formatMessage({ id: 'signin' })}</Button>
            </>
          );
        }}
      </Form>
      <div className={Styles.signup}>
        <p>
          <FormattedMessage tagName={'text'} id="dontHaveAnAccount" />
        </p>
        <a>
          <FormattedMessage tagName={'text'} id="signup" />
        </a>
      </div>
    </CardWrapper>
  );
};
