import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Icon, LanguageChanger, ThemChanger } from 'components/atoms';
import { changeLanguageAction, changeThemAction } from 'core/redux/globalSlice';
import { RootState } from 'core/redux/store';

import styles from './Header.module.scss';
import { IconButton } from 'components/molecules';
import classNames from 'classnames';

interface authenticationLayoutProps {
  children?: React.ReactNode;
  transparent?: boolean;
  canChangeOnScroll?: boolean;
  isSticky?: boolean;
}

export const Header: React.FC<authenticationLayoutProps> = ({
  children,
  transparent,
  canChangeOnScroll = false,
  isSticky = false,
}) => {
  const dispatch = useDispatch();
  const [isDark, setIsDark] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const isScrolled = useScrollDirection();

  const CURRENT_LANGUAGE = useSelector((state: RootState) => state.globalReducer.language);
  const changeLanguage = (key: 'arabic' | 'english') => () => {
    dispatch(changeLanguageAction(key));
  };

  useEffect(() => {
    if (document) {
      const dark = document.documentElement.classList.contains('theme-dark');
      setIsDark(dark);
    }
  }, []);

  const changeThem = (key: string) => {
    setIsDark(key === 'dark');
    document.documentElement.className = '';
    document.documentElement.classList.add(`theme-${key}`);
    localStorage.setItem('theme', `theme-${key}`);
  };

  const classes = classNames(styles.base, {
    [styles.transparent]: transparent,
    [styles.scrolled]: !canChangeOnScroll,
    [styles.scrolled]: canChangeOnScroll && isScrolled,
    [styles.sticky]: isSticky,
  });

  const navClasses = classNames(styles.nav, {
    [styles.open]: isNavExpanded,
  });

  function handleClick() {
    setIsNavExpanded((s) => !s);
  }

  return (
    <div className={classes}>
      <h6 className={styles.title}>Sample Dashboard</h6>
      <Icon icon="menu" className={styles.menu} onClick={handleClick} />
      <div className={navClasses}>
        <a>
          <IconButton icon={'donut_large'}>dashboard</IconButton>
        </a>
        <a>
          <IconButton icon={'person'}>profile</IconButton>
        </a>
        <a>
          <IconButton icon={'account_circle'}>signup</IconButton>
        </a>
        <a>
          <IconButton icon={'key'}>signin</IconButton>
        </a>
      </div>
      <div className="d-flex flex-row align-items-center">
        <LanguageChanger currentLanguage={CURRENT_LANGUAGE} onChange={changeLanguage} />
        <IconButton
          className={styles.themeButton}
          onClick={() => changeThem(isDark ? 'light' : 'dark')}
          icon={isDark ? 'sunny' : 'nightlight'}
        />
        {children}
      </div>
    </div>
  );
};

function useScrollDirection() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // store the last scrolled Y to detect how fast users scroll pages
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const goingDown = scrollY > lastScrollY;
      const diff = 4;
      // There are two cases that the header might want to change the state:
      // - when scrolling up but the header is hidden
      // - when scrolling down but the header is shown
      // stateNotMatched variable decides when to try changing the state
      const stateNotMatched = goingDown !== isHidden;
      const scrollDownTooFast = scrollY - lastScrollY > diff;
      const scrollUpTooFast = scrollY - lastScrollY < -diff;

      const shouldToggleHeader = stateNotMatched && (scrollDownTooFast || scrollUpTooFast);
      if (shouldToggleHeader) {
        setIsHidden(goingDown);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener('scroll', updateScrollDirection);
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [isHidden]);

  return isHidden;
}
