import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useUser, userState } from '../state/user';
import styles from '../styles/Home.module.css';

function Recursive({ iterationLimit, index = 0 }: { iterationLimit: number; index?: number }) {
  const user = useUser();
  const [initialStateHook] = useState(user.renderCount);
  const [initialStateState] = useState(userState.renderCount);

  useEffect(() => {
    userState.renderCount += 1;
    console.log('rendering Recursive', userState.renderCount);
  }, []);

  return (
    <>
      <Card>
        <div>
          <p>index: {index}</p>
          <p>user.renderCount: {user.renderCount}</p>
          <p>userState.renderCount: {userState.renderCount}</p>
          <p>initialStateHook (user.renderCount): {initialStateHook}</p>
          <p>initialStateState (userState.renderCount): {initialStateState}</p>
        </div>
      </Card>
      {index + 1 < iterationLimit && <Recursive iterationLimit={iterationLimit} index={index + 1} />}
    </>
  );
}

function Card({ children }: any) {
  const user = useUser();
  return (
    <article style={{ marginLeft: '10px' }}>
      {children}
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <Image src={user.avatar} alt={user.name} width="200" height="200" />
    </article>
  );
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <Recursive iterationLimit={25} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;