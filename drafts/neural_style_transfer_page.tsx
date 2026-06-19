// import { useState, useRef } from "react";
// import Head from "next/head";

// export default function NeuralStyleTransfer() {
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [styledImage, setStyledImage] = useState(null);
//   const [selectedStyle, setSelectedStyle] = useState(null);
//   const canvasRef = useRef(null);

//   // Predefined style images (can be URLs or local static assets)
//   const styleImages = [
//     'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1920px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg', // Starry Night
//     ];

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => setImage(reader.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleStyleSelection = (styleUrl) => {
//     setSelectedStyle(styleUrl);
//   };

//   const handleApplyStyle = async () => {
//     if (!image || !selectedStyle) return;

//     setLoading(true);
//     try {
//       const response = await fetch("/api/neural_style_transfer", {
//         method: "POST",
//         body: JSON.stringify({ image, style: selectedStyle }), // Send both image and style URL
//         headers: { "Content-Type": "application/json" },
//       });

//       if (!response.ok) throw new Error("Failed to apply style.");

//       const result = await response.json();
//       setStyledImage(result.styledImage); // Expecting styled image URL from the backend
//     } catch (error) {
//       console.error("Error:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Head>
//         <title>Neural Style Transfer</title>
//         <meta name="description" content="Apply neural style transfer to your images" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>

//       <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//         <h1 className="text-4xl font-semibold mb-4">Neural Style Transfer</h1>

//         <div className="w-full max-w-md p-4 bg-white shadow-md rounded-lg">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageUpload}
//             className="block mb-4 w-full text-sm text-gray-500 border border-gray-300 rounded-lg"
//           />

//           {image && (
//             <div className="mb-4">
//               <img src={image} alt="Uploaded Image" className="w-full rounded-lg" />
//             </div>
//           )}

//           <div className="mb-4">
//             <h2 className="text-lg font-semibold mb-2">Choose a Style</h2>
//             <div className="flex space-x-4 overflow-x-auto">
//               {styleImages.map((styleUrl, index) => (
//                 <div
//                   key={index}
//                   className={`cursor-pointer border-2 ${selectedStyle === styleUrl ? 'border-blue-500' : 'border-transparent'} rounded-lg`}
//                   onClick={() => handleStyleSelection(styleUrl)}
//                 >
//                   <img
//                     src={styleUrl}
//                     alt={`Style ${index + 1}`}
//                     className="w-24 h-24 object-cover rounded-lg"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {selectedStyle && (
//             <div className="mb-4">
//               <h2 className="text-lg font-semibold">Selected Style</h2>
//               <img src={selectedStyle} alt="Selected Style" className="w-32 h-32 object-cover rounded-lg" />
//             </div>
//           )}

//           <button
//             onClick={handleApplyStyle}
//             className="w-full py-2 bg-blue-500 text-white rounded-lg disabled:bg-blue-300"
//             disabled={loading}
//           >
//             {loading ? "Applying Style..." : "Apply Style"}
//           </button>

//           {styledImage && (
//             <div className="mt-6">
//               <h2 className="text-xl font-semibold">Styled Image</h2>
//               <img src={styledImage} alt="Styled" className="w-full mt-2 rounded-lg" />
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }
