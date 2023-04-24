import styles from './ThemChanger.styles.module.scss';

interface LanguageChangerProps {
  className?: string;
  currentThem: 'light' | 'dark';
  onChange: (key: 'light' | 'dark') => void;
}

export const ThemChanger: React.FC<LanguageChangerProps> = ({ className = '', onChange, currentThem = 'light' }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <div className={styles.base} onClick={onChange(currentThem === 'light' ? 'dark' : 'light')}>
      <p>{currentThem}</p>
    </div>
  );
};
