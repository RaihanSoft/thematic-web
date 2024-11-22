import { useLoaderData } from "react-router-dom"

import Astro_Themes from "../Components/Dynamic/Astro_Themes"
import Banner from "../Components/HeroSection/Banner/Banner"

const Home = () => {
  const astroTheme = useLoaderData()

  return (
    <div>
      <Banner/>

      {/* dynamic astro Theme starts */}
      <Astro_Themes astroTheme={astroTheme} />
      {/* dynamic astro Theme ends */}

    </div>
  )
}

export default Home
