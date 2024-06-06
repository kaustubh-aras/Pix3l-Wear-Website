import Hero from "@/components/hero/Hero";
import { AnimeSection } from "@/components/sections/anime/AnimeSection";
import { BestSellerSection } from "@/components/sections/bestseller/BestSellerSection";
import { GamingSection } from "@/components/sections/gaming/GamingSection";

export default function Home() {
  return(
  <>
    <Hero />
    <BestSellerSection/>
    <AnimeSection/>
    <GamingSection/>
  </>
  )
}
