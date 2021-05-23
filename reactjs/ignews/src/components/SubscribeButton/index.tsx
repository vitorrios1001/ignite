import styles from './styles.module.scss';

type SubscribeButtonProps = {
  priceId: string;
};

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  return (
    <button className={styles.subscribeButton} type='button'>
      Subscribe now
    </button>
  );
};
