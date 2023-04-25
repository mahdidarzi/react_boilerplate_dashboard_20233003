import React, { FunctionComponent } from 'react';
import Styles from './SignupForm.module.scss';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form, InputField } from 'components/molecules';
import { Button, CardWrapper, CheckBox, Icon, RadioButton, ToggleButton } from 'components/atoms';

interface Props {
  name?: string;
}

export const UserSignupForm: FunctionComponent<Props> = () => {
  const intl = useIntl();

  return (
    <CardWrapper className={Styles.base} noGap>
      <div className={Styles.header}>
        <h4>
          <FormattedMessage id="signup" />
        </h4>
        <div className={Styles.socials}>
          <p>
            <FormattedMessage id="signup.message" />
          </p>
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
              <InputField label={intl.formatMessage({ id: 'email' })} registration={register('email')} placeholder="" />
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
              <div className={Styles.terms}>
                <CheckBox registration={register('agree')} />
                <FormattedMessage id={'signup.agree'} />
                <a>{intl.formatMessage({ id: 'signup.terms' })}</a>
              </div>
              <Button className="w-100">{intl.formatMessage({ id: 'signup' })}</Button>
            </>
          );
        }}
      </Form>
      <div className={Styles.signup}>
        <p>
          <FormattedMessage tagName={'text'} id="haveAnAccount" />
        </p>
        <a>
          <FormattedMessage tagName={'text'} id="signin" />
        </a>
      </div>
    </CardWrapper>
  );
};
