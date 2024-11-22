import { useLoaderData } from "react-router-dom"
import BannerSlide from "../Components/BannerSlide/BannerSlide"
import Astro_Themes from "../Components/Dynamic/Astro_Themes"

const Home = () => {
  const astroTheme = useLoaderData()

  return (
    <div>
      <BannerSlide />

      {/* dynamic astro Theme starts */}
      <Astro_Themes astroTheme={astroTheme} />
      {/* dynamic astro Theme ends */}

    </div>
  )
}

export default Home
