import React, { useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import heroImage from "/images/h1.jpg";

const classLabels = [
  "battery", "biological", "brown-glass", "cardboard", "clothes",
  "green-glass", "metal", "paper", "plastic", "shoes", "trash", "white-glass"
];

const garbageToBag = {
  "battery": { bag: "Green Bag ♻️", type: "Hazardous Waste", color: "success", bagImage: "/images/bags/green.jpg" },
  "biological": { bag: "Brown Bag 🌿", type: "Organic Waste", color: "warning", bagImage: "/images/bags/brown.jpg" },
  "brown-glass": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" },
  "cardboard": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" },
  "clothes": { bag: "Gray Bag ⚫", type: "General Waste", color: "secondary", bagImage: "/images/bags/grey.jpg" },
  "green-glass": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" },
  "metal": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" },
  "paper": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" },
  "plastic": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" },
  "shoes": { bag: "Gray Bag ⚫", type: "General Waste", color: "secondary", bagImage: "/images/bags/grey.jpg" },
  "trash": { bag: "Gray Bag ⚫", type: "General Waste", color: "secondary", bagImage: "/images/bags/grey.jpg" },
  "white-glass": { bag: "Blue Bag 🔵", type: "Recyclables", color: "primary", bagImage: "/images/bags/blue.jpg" }
};

const GarbageClassification = () => {
  const [image, setImage] = useState(null);
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const modelURL = "/model/model.json";

  useEffect(() => {
    const loadModel = async () => {
      try {
        const loadedModel = await tf.loadLayersModel(modelURL);
        setModel(loadedModel);
        console.log("✅ Model loaded successfully!");
      } catch (error) {
        console.error("❌ Error loading model:", error);
        alert("❌ Failed to load model");
      }
    };

    loadModel();
  }, []);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  const classifyImage = async () => {
    if (!model || !image) {
      alert("⚠️ Please upload an image and wait for the model to load.");
      return;
    }

    const imgElement = document.createElement("img");
    imgElement.src = image;
    imgElement.onload = async () => {
      let tensor = tf.browser.fromPixels(imgElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat()
        .div(tf.scalar(255.0))
        .expandDims();

      const predictions = model.predict(tensor);
      const predictedIndex = predictions.argMax(1).dataSync()[0];
      const predictedClass = classLabels[predictedIndex];

      setPrediction({ class: predictedClass, ...garbageToBag[predictedClass] });
    };
  };

  const downloadPDF = () => {
    const input = document.getElementById("result-section");
  
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Portrait, millimeters, A4 size
      
      pdf.setFontSize(18);
      pdf.text("Garbage Classification Result", 10, 10);
  
      // Add uploaded image (larger)
      if (image) {
        pdf.text("Uploaded Image:", 10, 20);
        pdf.addImage(image, "PNG", 10, 25, 90, 70); 
      }
  
      // Add classification result image (larger)
      pdf.text("Classification Result:", 10, 100);
      pdf.addImage(imgData, "PNG", 10, 110, 190, 140); 
  
      pdf.save("classification_result.pdf");
    });
  };
  

  return (
    <div>
      {/* Hero Section */}
      <div
        className="text-white text-center p-5"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <h1 className="fw-bold">AI-Powered Garbage Classification</h1>
        <p className="fs-5 mt-3">
          Upload an image and let our AI classify it into the correct category.
        </p>
      </div>

      {/* Main Content */}
      <div className="container text-center my-4">
        <h2>Garbage Classification</h2>

        <input type="file" className="form-control w-50 mx-auto my-3" accept="image/*" onChange={handleImageUpload} />
        {image && <img src={image} alt="Uploaded" className="img-fluid my-3" style={{ maxWidth: "200px" }} />}

        <button className="btn btn-primary" onClick={classifyImage} disabled={!image || !model}>
          Classify Garbage
          <small></small>
        </button>

        {prediction && (
          <div className="container mt-4" id="result-section">
            <h3 className="text-success">Prediction Result:</h3>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className={`card border-${prediction.color} mb-3`}>
                  <div className={`card-header text-white bg-${prediction.color}`}>
                    <h4 className="card-title">{prediction.bag}</h4>
                  </div>
                  <div className="card-body">
                    <h5 className="card-text text-capitalize">{prediction.class}</h5>
                    <p className="card-text">{prediction.type}</p>
                    <img
                      src={prediction.bagImage}
                      alt="Garbage Bag"
                      className="img-fluid mt-3"
                      style={{ maxWidth: "100px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {prediction && (
          <button className="btn btn-success mt-3" onClick={downloadPDF}>
            Download PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default GarbageClassification;
