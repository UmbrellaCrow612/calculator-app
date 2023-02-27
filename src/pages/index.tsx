import Calculator from "@/components/Calculator";
import { League_Spartan } from "next/font/google";

const league_spartan = League_Spartan({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Page() {
  return (
    <main
      className={`flex items-center justify-center min-h-screen ${league_spartan.className}`}
    >
      <Calculator />
    </main>
  );
}
