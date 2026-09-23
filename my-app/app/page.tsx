import Comp1 from "@/components/Comp1";
import Navbar from "@/components/Navbar";
import Comp2 from "@/components/Comp2";
import Comp3 from "@/components/Comp3";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Comp1/>
      <Comp2/>
      <Comp3/>
    </main>
  );
}