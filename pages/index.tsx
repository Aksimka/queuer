import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuLayout from "../layouts/menu";
import {ReactElement} from "react";

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        main page
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}


// eslint-disable-next-line react/display-name
Home.withLayout = (page: ReactElement) => {
    return (
        <MenuLayout>
            {page}
        </MenuLayout>
    )
}

