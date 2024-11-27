import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../index.css"

const User = () => {
  const [slide, setSlide] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching images from backend...');
        
        const response = await fetch('http://localhost:5000/image/get-images');
        
        if (!response.ok) {
          console.error('Failed to fetch images, status:', response.status);
          throw new Error('Failed to fetch images');
        }
  
        const data = await response.json();
        console.log('Images fetched from backend:', data);
  
        setImages(data); // Update the images state
        setError(null);  // Clear any previous errors
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Failed to fetch images. Please try again later.');
      } finally {
        setLoading(false); // Set loading to false after fetch operation is complete
      }
    };
    
    fetchImages();
  }, []);

  const handleDownload = async (imageSrc) => {
    try {
      console.log("Downloading image from URL:", imageSrc);
      const response = await fetch(imageSrc);
      if (!response.ok) {
        throw new Error("Failed to fetch the image.");
      }

      const blob = await response.blob();
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "generated-image.png"; // Default filename for the downloaded image
      link.click();
      URL.revokeObjectURL(link.href); // Cleanup the object URL after download
    } catch (error) {
      console.error("Error downloading the image:", error);
    }
  };

  return (
    <>
      <div className="hidden w-full h-screen  md:flex text-white bg-zinc-800">
        {/* Sidebar Section */}
        <div className="flex flex-col  sm:w-1/2 justify-center bg-zinc-900 overflow-hidden h-full border-zinc-600 border-r-2 lg:w-1/4">
          <div className="pb-12 flex items-start justify-center bg-zinc-900 w-full h-fit">
            <img
              className="w-40 hover:big-0 bg-zinc-900 border-2 rounded-full object-contain"
              src="./images/profile.png"
              alt="Profile"
            />
          </div>
          <div className="mb-12 border-zinc-700 bg-zinc-900 w-full h-fit">
            <div className="py-2 text-lg font-md hover:big-0 hover:bg-lgray flex px-2 w-full justify-center hover:border">
              NEERAJ RANA
            </div>
            <div className="py-2 text-sm font-sm hover:big-0 text-zinc-400 hover:bg-lgray flex px-2 w-full justify-center hover:border">
              @RANAJI00234
            </div>
          </div>
          <div className="w-full flex hover:big-0 justify-center">
            <Link to="/edit" className="border-2 px-2 py-1 rounded-lg">
              EDIT PROFILE <i className="ri-pencil-line"></i>
            </Link>
          </div>
        </div>

        {/* Main Content Section */}
        <div className="px-2 py-2  w-full h-full ">
          <div className="w-full border-b-2  border-zinc-600 py-3 mb-10 mt-8 text-xl font-bold">
            GENERATED IMAGE LIBRARY
          </div>
          <div className="w-full flex flex-wrap gap-6 px-3 py-3   h-[850px] overflow-y-scroll scrollbar-thin scrollbar-black">
          
            {loading ? (
              <div className="text-zinc-400 text-center w-full">Loading images...</div>
            ) : error ? (
              <div className="text-red-500 text-center w-full">{error}</div>
            ) : images.length > 0 ? (
              images.map((image, index) => (
                <div key={index} className="w-72 h-fit cursor-pointer hover:big-0">
                  <div className="w-full hover:border-zinc-400 hover:border-2 hover:bg-neutral-800 h-fit py-2 bg-lgray border border-zinc-500 overflow-hidden rounded-lg">
                    <div className="w-full relative h-fit px-1 py-1 rounded-xl overflow-hidden">
                      <img
                        id="image"
                        className="w-full px-1 py-1 h-full object-cover"
                        src={image.image}  // Image URL (ensure this is a valid URL)
                        alt={image.prompt || 'Untitled Image'}
                      />
                      <div className={`rounded-lg flex ${slide ? '' : 'hidden'} justify-center`}>
                        <div className="w-full backdrop-blur-sm brightness-75 rounded-lg absolute bottom-0 h-20"></div>
                        <div className="w-full absolute bottom-0 overflow-hidden brightness-100 rounded-lg text-white text-xs text-wrap h-20 px-1 flex justify-center items-center">
                          {image.prompt}
                        </div>
                      </div>
                    </div>
                    <div className="w-full px-2 py-2 flex justify-between items-center rounded-md">
                      <div className="flex w-full mr-1 justify-between">
                        <div
                          onClick={() => {
                            setSlide((prev) => !prev);
                          }}
                          className="border-2 px-2 rounded-lg bg-violet-700 border-violet-700 text-sm hover:bg-violet-500 py-1"
                        >
                          <button className="">prompt</button>
                        </div>
                        <div onClick={() => handleDownload(image.image)}>
                          <i className="text-blue-700 text-2xl hover:text-blue-500 ri-download-2-fill"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-zinc-400 text-center w-full">No images have been generated yet!</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
