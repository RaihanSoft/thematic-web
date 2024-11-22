import React from 'react'
import { NavLink } from 'react-router-dom'

const Astro_Themes = ({ astroTheme }) => {



    return (
        <>
            <h2 className="text-5xl font-bold  text-center my-10 " >Astro Themes</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-4 ' >
                {
                    astroTheme.slice(0, 6).map((astro, index) =>
                        <div className="card bg-base-100 w-96 shadow-xl">
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
            <div className='flex items-center justify-center' >
                <NavLink to={'/all_astro'}>
                    <button className='btn bg-green-500 my-10 ' >View All Products</button>
                </NavLink>
            </div>
        </>


    )
}

export default Astro_Themes
