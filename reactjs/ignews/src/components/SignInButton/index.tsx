import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, useSession, signOut } from 'next-auth/client';

import styles from './styles.module.scss';

const SignInButton = () => {
  const [session] = useSession();
  const logged = true;

  console.log('session::', session);

  return session ? (
    <button
      onClick={() => signOut()}
      className={styles.signInButton}
      type='button'
    >
      <FaGithub color='#04d301' />
      {session.user.name}
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      className={styles.signInButton}
      type='button'
    >
      <FaGithub color='#eba417' />
      Sign In with Github
    </button>
  );
};

export { SignInButton };
