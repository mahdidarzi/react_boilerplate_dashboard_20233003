import React, { FunctionComponent, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Styles from './PlatformSettings.module.scss';
import { IconButton, PlatformSettingsItem } from 'components/molecules';
import classNames from 'classnames';
import { RadioButton, ToggleButton } from 'components/atoms';

export const PlatformSettings: FunctionComponent = () => {
  const classes = classNames(Styles.base, 'd-flex flex-column');

  return (
    <div className={classes}>
      <FormattedMessage id={'PlatformSettings'} tagName={'h6'} />
      <PlatformSettingsItem title="account">
        <ToggleButton name="a1">
          <FormattedMessage id={'platform.seeting.email.follow'} tagName={'p'} />
        </ToggleButton>
        <ToggleButton name="a2">
          <FormattedMessage id={'platform.seeting.email.post'} tagName={'p'} />
        </ToggleButton>
        <ToggleButton name="a3">
          <FormattedMessage id={'platform.seeting.email.mention'} tagName={'p'} />
        </ToggleButton>
      </PlatformSettingsItem>

      <PlatformSettingsItem title="account">
        <ToggleButton name="a1">
          <FormattedMessage id={'platform.seeting.email.follow'} tagName={'p'} />
        </ToggleButton>
        <ToggleButton name="a2">
          <FormattedMessage id={'platform.seeting.email.post'} tagName={'p'} />
        </ToggleButton>
        <ToggleButton name="a3">
          <FormattedMessage id={'platform.seeting.email.mention'} tagName={'p'} />
        </ToggleButton>
      </PlatformSettingsItem>
    </div>
  );
};
