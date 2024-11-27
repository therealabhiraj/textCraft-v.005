import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Edit = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setSelectedImage(previewUrl);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Profile Updated Successfully!");
    // Add your submission logic here
  };

  return (
    <div className="w-full h-full bg-zinc-900 text-white">

      {/* Header Section */}
      <div className="lg:h-1/2 h-1/3 py-3  border-b-4 border-zinc-700 justify-center bg-zinc-800 flex ">
        <div className="w-60 realtive h-60 border-2  border-zinc-600 rounded-full overflow-hidden">
          <img
            src={selectedImage || "./images/profile.png"}
            alt="Profile"
            className="w-60   object-cover"
          />

        </div>
      </div>




      {/* Form Section */}
      <div className="h-full pb-12 hidden lg:flex justify-center mt-8 ">
        <div className="w-1/2 h-fit  p-6 border-2 border-zinc-800 rounded-lg bg-zinc-800">
          <h1 className="text-2xl font-bold mb-8">Edit Profile</h1>


          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Name Field */}
            <label htmlFor="name" className="text-lg font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="rounded-lg bg-transparent outline-none px-4 py-3 border-2 border-zinc-700 focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />

            {/* Username Field */}
            <label htmlFor="username" className="text-lg font-medium">Username</label>
            <input
              type="text"
              id="username"
              className="rounded-lg bg-transparent outline-none px-4 py-3 border-2 border-zinc-700 focus:border-blue-500"
              placeholder="Enter Your Username"
              required
            />

            {/* Image Upload Field */}
            <label htmlFor="profilePic" className="text-lg font-medium">Upload Profile Picture</label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="rounded-lg border-2  bg-transparent outline-none px-4 py-2 border-zinc-700 text-gray-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-white file:bg-zinc-600 hover:file:bg-zinc-700"
              onChange={handleImageUpload}
            />

            {/* Submit Button */}
            <div className='w-full flex flex-col gap-1'>
            <button
              type="submit"
              className="px-3 w-32 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-lg font-medium mt-4">
              Update
            </button>
            <div
              type="submit"
              className="px-3 mb-8 text-sm w-full underline hover:text-blue-500 hover:text-md text-blue-700 font-medium mt-4">
             <Link to="/profile"> go back to dashboard </Link>
            </div>
            </div>
          </form>
        </div>
      </div>




      {/* mobile view */}


      <div className="h-full w-full lg:hidden pb-12 flex justify-center mt-8 ">
        <div className="w-3/4 h-fit  p-6 border-2 border-zinc-800 rounded-lg bg-zinc-800">
          <h1 className="text-xl font-bold mb-8">Edit Profile</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Name Field */}
            <label htmlFor="name" className="text-md font-medium">Name</label>
            <input
              type="text"
              id="name"
              className="rounded-lg bg-transparent outline-none px-4 py-3 border-2 border-zinc-700 focus:border-blue-500"
              placeholder="Enter Your Name"
              required
            />

            {/* Username Field */}
            <label htmlFor="username" className="text-md font-medium">Username</label>
            <input
              type="text"
              id="username"
              className="rounded-lg bg-transparent outline-none px-4 py-3 border-2 border-zinc-700 focus:border-blue-500"
              placeholder="Enter Your Username"
              required
            />

            {/* Image Upload Field */}
            <label htmlFor="profilePic" className="text-md font-medium">Upload Profile Picture</label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              className="rounded-lg border-2  bg-transparent outline-none px-4 py-2 border-zinc-700 text-gray-400 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-white file:bg-zinc-600 hover:file:bg-zinc-700"
              onChange={handleImageUpload}
            />

            {/* Submit Button */}
            <div className='w-full flex flex-col '>
            <button
              type="submit"
              className="px-3 w-32 py-3 bg-yellow-400 hover:bg-yellow-500 rounded-lg text-md font-medium mt-4">
              Update
            </button>
            <div
              type="submit"
              className=" mb-1 text-sm w-full underline hover:text-blue-500 hover:text-md text-blue-600 font-medium mt-4">
             <Link to="/profile"> Go back to Dashboard </Link>
            </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Edit;
