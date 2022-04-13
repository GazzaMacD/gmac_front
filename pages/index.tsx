import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/pages/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gareth Macdonald</title>
        <meta name="description" content="Awesome new personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gareth Macdonald</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
