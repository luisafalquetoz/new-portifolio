import { FaHome } from "react-icons/fa";

import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-black px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
