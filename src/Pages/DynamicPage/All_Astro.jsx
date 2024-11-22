import { useLoaderData } from "react-router-dom"
import FilterButtons from "../../Components/Common/FilterButton"

const All_Astro = () => {
  const allAstro = useLoaderData()
  return (
    <>
      <div className="text-center my-10   " >
        <h2 className="text-5xl font-bold mb-5 " >Astro Themes</h2>
        <p>These themes are based on Astro static site generator.</p>
      </div>
      <div className="flex items-center justify-center mb-10" >
        <FilterButtons />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center ' >
        {
          allAstro.map((astro, index) =>
            <div className="card bg-base-100 w-96 shadow-xl gap-4 ">
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>)
        }
      </div>
    </>
  )
}

export default All_Astro
