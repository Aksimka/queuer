import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MenuLayout from "../layouts/menu";
import {ReactElement} from "react";
import MainLayout from "../layouts/main";

export default function Home() {
  return (
    <div className={styles.Main}>
      main
    </div>
  )
}

Home.withLayout = (page: ReactElement) => {
  return (
    <MenuLayout>
      <MainLayout heading="Все очереди" footer="footer">
        {page}
      </MainLayout>
    </MenuLayout>
  )
}

