import Hero from "../components/hero/Hero.jsx";
import { AnimeSection } from "../components/sections/anime/AnimeSection.jsx";
import { BestSellerSection } from "../components/sections/bestseller/BestSellerSection.jsx";
import { GamingSection } from "../components/sections/gaming/GamingSection.jsx";

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
