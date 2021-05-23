import {
  // GetServerSideProps,
  GetStaticProps,
} from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';
import { formatCurrency } from '../utils/formatNumber';
import styles from './home.module.scss';

// Client-side
// Server-side
// Static Site Generation

type HomeProps = {
  product: {
    priceId: string;
    amount: number;
  };
};

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {formatCurrency(product.amount)} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src='/images/avatar.svg' alt='Girl coding' />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IuOlfF0pBQVL2PNmraxHi9c', {
    expand: ['product'],
  });

  const product = {
    priceId: price.id,
    amount: price.unit_amount / 100,
  };

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24hrs
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const price = await stripe.prices.retrieve('price_1IuOlfF0pBQVL2PNmraxHi9c', {
//     expand: ['product'],
//   });

//   const product = {
//     priceId: price.id,
//     amount: price.unit_amount / 100,
//   };

//   return {
//     props: {
//       product,
//     },
//   };
// };
