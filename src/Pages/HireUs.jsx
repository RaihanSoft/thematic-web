import React from 'react';
import ProfileCard from '../Components/Cards/ProfileCard';



// Our info
const profiles = [
  {
    id: "1",
    photoUrl: "https://i.ibb.co.com/PNZW4L8/mi-rohan.png",
    name: "M.I. Rohan",
    phoneNumber: "01777012333",
    email: "rohan26ir@gmail.com",
    portfolioUrl: "https://rohans-protfolio.vercel.app/"
  },
  {
    id: "2",
    photoUrl: "https://example.com/photo2.jpg",
    name: "Ahsan Ahmed",
    phoneNumber: "01777012333",
    email: "ahsan@example.com",
    portfolioUrl: "https://github.com/Ahsan-1015"
  },
  {
    id: "3",
    photoUrl: "https://example.com/photo3.jpg",
    name: "Abo Raihan",
    phoneNumber: "01969365539",
    email: "raihan@gamil.com",
    portfolioUrl: "https://portfolio-using-next-js-7dhz.vercel.app/"
  }
];

// console.log(profiles.id);


const HireUs = () => {
  return (
    <div className='my-10'>
      <div>
        <div className='text-center space-y-3'>
          <h2 className='text-4xl font-bold'>Let’s Build Your Dream Project</h2>
          <p className='text-gray-500'>We're available for custom web development projects. <br />Send us an email to share your vision, and we'll provide a personalized quote to bring your dream website to life!</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto justify-center gap-5'>
           {
            profiles.map(profile => <ProfileCard key={profile.id} profile={profile}></ProfileCard> )
           }
        </div>
      </div>
    </div>
  );
};

export default HireUs;