import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

const SignInButton = () => {
  const logged = true;

  return logged ? (
    <button className={styles.signInButton} type='button'>
      <FaGithub color='#04d301' />
      Vitor Rios
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} type='button'>
      <FaGithub color='#eba417' />
      Sign In with Github
    </button>
  );
};

export { SignInButton };
