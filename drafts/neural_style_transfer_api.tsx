// import * as tf from "@tensorflow/tfjs-node";
// import { loadGraphModel } from "@tensorflow/tfjs-node";

// let model;

// const loadModel = async () => {
//   if (!model) {
//     model = await loadGraphModel("https://storage.googleapis.com/tfjs-models/tfjs/arbitrary-image-stylization-v1-256/1/model.json");
//   }
// };

// const applyStyleTransfer = async (imageBuffer, styleUrl) => {
//   const imgTensor = tf.node.decodeImage(imageBuffer);

//   // Fetch the style image
//   const styleBuffer = await fetchStyleImage(styleUrl);
//   const styleTensor = await tf.node.decodeImage(styleBuffer);

//   const styledImageTensor = await model.executeAsync([imgTensor, styleTensor]);

//   const styledImageBuffer = await tf.node.encodeJpeg(styledImageTensor[0]);

//   return styledImageBuffer.toString("base64");
// };

// // Helper to fetch style image from URL
// const fetchStyleImage = async (styleUrl) => {
//   const response = await fetch(styleUrl);
//   const arrayBuffer = await response.arrayBuffer();
//   return Buffer.from(arrayBuffer);
// };

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const { image, style } = req.body; // Receive both image and style URL
//       const buffer = Buffer.from(image.split(",")[1], "base64");

//       await loadModel();
//       const styledImage = await applyStyleTransfer(buffer, style);

//       res.status(200).json({ styledImage: `data:image/jpeg;base64,${styledImage}` });
//     } catch (error) {
//       console.error("Error during style transfer:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   } else {
//     res.status(405).json({ error: "Method Not Allowed" });
//   }
// }