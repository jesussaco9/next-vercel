
import Head from '../../node_modules/next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';
interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Jesus Sanchez</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
