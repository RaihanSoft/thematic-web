import { useLoaderData } from "react-router-dom"
import BannerSlide from "../Components/BannerSlide/BannerSlide"
import Astro_Themes from "../Components/Dynamic/Astro_Themes"

const Home = () => {
  const astroTheme = useLoaderData()
  const astroThemes = astroTheme.slice(0, 6)

  return (
    <div>
      <BannerSlide />

      {/* dynamic astro Theme starts */}
      <div>
        <h2 className="text-center font-bold text-4xl py-10" >Astro-Themes</h2>
        <div className="grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 justify-items-center " >
          {
            astroThemes.map((themeData, index) => <Astro_Themes themeData={themeData} />)
          }
        </div>
        <div className="flex items-center justify-center my-5 " >
          <button className="btn  bg-green-400  ">View All Products</button>
        </div>
      </div>
      {/* dynamic astro Theme ends */}

    </div>
  )
}

export default Home
