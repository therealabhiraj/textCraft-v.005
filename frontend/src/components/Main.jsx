import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css';

const Main = () => {
  const [inputText, setInputText] = useState("");  // Store input text
  const [finalPrompt, setFinalPrompt] = useState(""); // Store final prompt
  const [slide, setSlide] = useState(false);  // Manage "Prompt" section visibility
  const [imageSrc, setImageSrc] = useState("./images/tokyo.jpg");  // Set default image
  const [loading, setLoading] = useState(false);   // Track loading state

  const HUGGING_FACE_API_TOKEN = "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"; // Hugging Face API token

  // Function to query Hugging Face API and get the generated image
  const query = async (data) => {
    setLoading(true); // Start loading
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev",
        {
          headers: {
            Authorization: `Bearer ${HUGGING_FACE_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        }
      );
      const result = await response.blob(); // Get the image as a blob
      setLoading(false); // Stop loading
      return result;
    } catch (error) {
      console.error("Error querying the API:", error);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };

  // Function to convert Blob to Base64
  const convertBlobToBase64 = async (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  // Function to handle image generation and save to the backend
  const handleGenerateImage = async () => {
    if (inputText.trim() === "") {
      alert("Please enter a prompt!");
      return;
    }

    const response = await query({ inputs: inputText });
    if (response) {
      const objectURL = URL.createObjectURL(response); // Create object URL from the image blob
      setImageSrc(objectURL);  // Update image URL

      // Convert Blob to Base64 string
      const base64Image = await convertBlobToBase64(response);

      // Set the final prompt after successful generation
      setFinalPrompt(inputText);

      // Send the generated image and prompt to the backend for saving
      const saveResponse = await fetch("http://localhost:5000/image/save-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: base64Image,
          prompt: inputText,
        }),
      });

      if (saveResponse.ok) {
        console.log("Image saved to the database successfully.");
      } else {
        console.error("Failed to save image to the database.");
      }
    }
  };

  // Simulate download action for the image
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = "generated-image.png";
    link.click();
  };

  return (
    <>
    
      <div className="w-1/2 h-screen mt-1 relative mr-8 text-white">
        {/* Main Heading Section */}
        <div className="w-full py-2 mb-1 h-fit flex items-center justify-center rounded-md">
          <div className="border-b-2 border-zinc-600 w-4/5 px-2 py-2 h-fit flex justify-between items-center">
            <h1 className="text-3xl cursor-text font-bold ml-4">
              {finalPrompt || "Generated prompt will appear here"}
            </h1>
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
              {/* Display loading or the image */}
              {loading ? (
                <img
                  src="./images/loading.gif"
                  alt="Loading..."
                  className="w-full h-full object-contain rounded-lg"
                />
              ) : (
                <img
                  id="image"
                  className="w-full h-full object-contain rounded-lg"
                  src={imageSrc}
                  alt="Generated"
                />
              )}

              {/* Toggle Prompt Section */}
              <div
                onClick={() => setSlide(false)}
                className={`rounded-lg flex justify-center ${slide ? "block" : "hidden"}`}
              >
                <div className="w-11/12 backdrop-blur-sm brightness-75 rounded-lg absolute bottom-0 h-40"></div>
                <div className="w-11/12 absolute bottom-0 brightness-100 rounded-lg text-white text-md text-wrap h-40 px-14 flex justify-center items-center">
                  {finalPrompt || "Generated prompt will appear here"}
                </div>
              </div>
            </div>

            {/* Controls Below Image */}
            <div className="w-full px-2 py-2 flex justify-between items-center rounded-md">
              <div className="flex gap-3">
                <span className="flex w-14 gap-1 justify-center items-center border-2 border-red-600 bg-red-400 rounded-md">
                  50 <i className="hover:big-2 ri-heart-3-fill text-red-600"></i>
                </span>
                <span className="flex gap-1 px-1 w-14 justify-center items-center border-2 border-white rounded-md">
                  12 <i className="hover:big-2 ri-message-2-fill"></i>
                </span>
                <button
                  onClick={() => setSlide(!slide)}
                  className="px-1 w-20 flex bg-violet-500 border-2 border-violet-500 justify-center py-1 active:scale-110 active:bg-violet-400 active:text-white rounded-md"
                >
                  Prompt
                </button>
              </div>
              <button
                onClick={handleDownload}
                className="flex justify-center text-white bg-blue-500 px-3 py-2 rounded-md hover:big-1"
              >
                Download
              </button>
            </div>
          </div>
        </div>

        {/* Input and Button Section */}
        <div className="fixed bottom-0 w-1/2 h-fit flex justify-center">
          <div className="gap-3 px-1 py-1 text-white w-3/4 border-2 border-zinc-600 bg-lgray rounded-md flex justify-between items-center">
            <input
              id="input"
              className="rounded-lg outline-none focus:outline-none bg-transparent w-full px-2 py-3 text-white"
              type="text"
              placeholder="Enter your Prompt"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)} // Update input text
            />
            <button
              id="btn"
              className="w-8 mr-1 opacity-65 hover:opacity-100"
              onClick={handleGenerateImage}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.5 1.34558C3.58425 1.34558 3.66714 1.36687 3.74096 1.40747L22.2034 11.5618C22.4454 11.6949 22.5337 11.9989 22.4006 12.2409C22.3549 12.324 22.2865 12.3924 22.2034 12.4381L3.74096 22.5924C3.499 22.7255 3.19497 22.6372 3.06189 22.3953C3.02129 22.3214 3 22.2386 3 22.1543V1.84558C3 1.56944 3.22386 1.34558 3.5 1.34558ZM5 4.38249V10.9999H10V12.9999H5V19.6174L18.8499 11.9999L5 4.38249Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;


