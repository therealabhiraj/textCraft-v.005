import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';

const Main = () => {
  const [inputText, setInputText] = useState("");  // Store input text
  const [imageSrc, setImageSrc] = useState(null);  // Store the generated image URL
  const [loading, setLoading] = useState(false);   // Track loading state

  const token = "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";  // Hugging Face token

  // Function to query Hugging Face API and get the generated image
  const query = async (data) => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected interpolation
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );

      const result = await response.blob();  // Get the image as a blob
      setLoading(false); // Set loading to false after fetching
      return result;
    } catch (error) {
      console.error("Error querying the API:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  // Function to handle image generation when the button is clicked
  const handleGenerateImage = async () => {
    if (inputText.trim() === "") {
      alert("Please enter a prompt!");
      return;
    }

    const response = await query({ inputs: inputText });
    if (response) {
      const objectURL = URL.createObjectURL(response); // Create object URL from the image blob
      setImageSrc(objectURL);  // Set the generated image URL
    }
  };

  return (
    <>
      <div className="w-1/2 h-screen mt-1 relative mr-8 text-white">
        {/* Main Heading section */}
        <div className="w-full py-2 mb-1 h-fit flex items-center justify-center rounded-md">
          <div className="border-b-2 border-zinc-600 w-4/5 px-2 py-2 h-fit flex justify-between items-center">
            <h1 className="text-3xl cursor-text font-bold ml-4">Cute Ram Lala</h1>
            <div className="flex gap-5 mr-4">
              <i className="hover:big-2 text-lg hover:text-yellow-300 py-2 ri-sparkling-line"></i>
              <i className="hover:big-2 text-lg hover:text-blue-400 text-blue-700 py-2 ri-download-line"></i>
              <i className="hover:big-2 text-lg py-2 ri-more-fill"></i>
            </div>
          </div>
        </div>

        {/* Image Display Section */}
        <div className="w-full cursor-pointer mb-0 flex flex-col items-center justify-center rounded-md">
          <div className="w-3/4 py-2 h-1/2 bg-lgray border border-zinc-500 overflow-hidden rounded-lg">
            <div className="w-full relative h-fit aspect-[13/12] rounded-xl overflow-hidden">
              {/* Display loading GIF if loading is true */}
              {loading ? (
                <img
                  src="./images/loading.gif"  // Add path to your loading GIF
                  alt="Loading..."
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <img
                  id="image"
                  className="w-full h-full object-contain rounded-lg"
                  src={imageSrc || "./images/tokyo.jpg"}  // Fallback to default image
                  alt="Generated"
                />
              )}
            </div>
          </div>

          {/* Add Download Button */}
          {imageSrc && (
            <a
              href={imageSrc} // Use the generated image URL
              download="generated-image.png" // Default file name for the download
              className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Download Image
            </a>
          )}

          {/* Input and Generate Button */}
          <div className="fixed bottom-0 w-1/2 h-fit flex justify-center">
            <div className="gap-3 px-1 py-1 text-white w-3/4 border-2 border-zinc-600 bg-lgray rounded-md flex justify-between items-center">
              {/* Input Field */}
              <input
                id="input"
                className="rounded-lg outline-none focus:outline-none bg-transparent w-full px-2 py-3 text-white"
                type="text"
                placeholder="Enter your Prompt"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}  // Update input text state
              />

              {/* Button to trigger image generation */}
              <button
                id="btn"
                className="w-8 mr-1 opacity-65 hover:opacity-100"
                onClick={handleGenerateImage}  // Trigger image generation
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
