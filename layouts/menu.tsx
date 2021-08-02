import styles from "@/styles/menu.module.css"
import {ReactElement} from "react";

interface PropTypes {
    children: ReactElement
}

export default function MenuLayout(props: PropTypes) {

    const {children} = props

    return (
        <>
            <div className={styles.Menu}>menu</div>
            <div className={styles.Slot}>
                {children}
            </div>
        </>

    )
}

