import styles from '../styles/Home.module.css'
import MenuLayout from "../layouts/menu";
import {ReactElement} from "react";
import MainLayout from "../layouts/main";
import CommonCard from "../components/cards/CommonCard/CommonCard";

export default function Home() {
  return (
    <div className={styles.Main}>
      <div className={styles.Cards}>
        <div className={styles.Card}>
          <CommonCard />
        </div>
        <div className={styles.Card}>
          <CommonCard />
        </div>
        <div className={styles.Card}>
          <CommonCard />
        </div>
        <div className={styles.Card}>
          <CommonCard />
        </div>
      </div>
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

