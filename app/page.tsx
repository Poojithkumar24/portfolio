import styles from "./main.module.css";
import {Navbar} from "@/components/Navbar"
import {ProfilePic} from "@/components/ProfilePic"

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 ${styles.semi_radial_gradient_1}`}>
     <Navbar/>
     <ProfilePic />
    </main>
  );
}
