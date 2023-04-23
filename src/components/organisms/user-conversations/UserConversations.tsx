import { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import Styles from './UserConversations.module.scss';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { RootState } from 'core/redux/store';
import { UserConversationItem } from 'components/atoms';

export const UserConversations: FunctionComponent = () => {
  const user = useSelector((state: RootState) => state.userReducer);

  const classes = classNames(Styles.base, 'd-flex flex-column');

  return (
    <div className={classes}>
      <FormattedMessage id={'conversations'} tagName={'h6'} />
      <div className={Styles.chatContainer}>
        {user?.conversations?.map((item, index) => (
          <UserConversationItem key={'conversation' + index} {...item} />
        ))}
      </div>
    </div>
  );
};
