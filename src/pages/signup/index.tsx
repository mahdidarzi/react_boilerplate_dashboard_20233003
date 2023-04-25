import { SignupLayout, UserSignupForm } from 'components/organisms';
import React from 'react';

export const Signup: React.FC = () => {
  return (
    <SignupLayout>
      <UserSignupForm />
    </SignupLayout>
  );
};
