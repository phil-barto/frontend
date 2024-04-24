"use client";
import styles from "./page.module.css";
import TicketForm from '../components/ticket-form'
import Navbar from "../components/nav-bar";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      </div>

      <Navbar />
      <div className={styles.center}>
        <TicketForm></TicketForm>
      </div>
    </main>
  );
}
