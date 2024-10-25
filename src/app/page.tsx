import { Header } from "@/components/header";
import { Workouts } from "@/components/workouts";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Workouts />
    </main>
  );
}
