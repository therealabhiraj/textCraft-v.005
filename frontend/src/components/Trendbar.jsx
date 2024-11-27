import React, { useState, useEffect } from 'react';

const Trendbar = () => {
  const [images, setImages] = useState([]);  // Store fetched images

  // Fetch the saved images from the backend
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching images from backend...');
        
        const response = await fetch('http://localhost:5000/image/get-images');
        
        // Debugging: Check the status of the response
        if (!response.ok) {
          console.error('Failed to fetch images, status:', response.status);
          throw new Error('Failed to fetch images');
        }

        const data = await response.json();
        
        // Debugging: Log the data returned from the backend
        console.log('Images fetched from backend:', data);
        
        // Store the fetched images in state
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();  // Call the fetch function when the component mounts
  }, []);

  // Debugging: Log the images in state
  console.log('Images in state:', images);

  return (
    <div className="hidden border-zinc-600 w-1/4 border-l-2 b sm:relative sm:flex scrollbar-thin scrollbar-black flex-col px-2 py-2 h-screen bg-cgray text-white transition all duration-1000 ease-in-out items-center overflow-y-scroll">
      <div className="w-full border-b-2 px-1 py-1 mb-2">
        <span className="text-xl font-semibold py-1">Trending</span>
      </div>

      {/* Render images dynamically */}
      {images.length > 0 ? (
        images.map((image, index) => {
          // Debugging: Log each image's data before rendering
          console.log('Rendering image:', image);

          return (
            <div
              className="w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-lgray rounded-lg"
              key={index}
            >
              <div className="text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start">
                {image.prompt}
              </div>

              <div className="w-full mb-2 flex justify-center mt-2 rounded-xl">
                {/* Ensure the image URL is valid and being correctly rendered */}
                <img
                  className="w-11/12 object-cover rounded-xl"
                  src={image.image}  // Image URL
                  alt={image.prompt || 'Untitled Image'}
                />
              </div>
            </div>
          );
        })
      ) : (
        <div className="w-3/4 flex mb-4 hover:big-0 mt-2 flex-col gap-1 h-fit px-1 py-3 bg-lgray rounded-lg">
          <div className="text-lg font-light px-2 py-1 text-white border-b-2 flex justify-start">
            No Images Available
          </div>
        </div>
      )}
    </div>
  );
};

export default Trendbar;
