import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import {
    bubbleSort,
    mergeSort
} from "../utils/sortingAlgorithms"

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  // Generate a new random array
  const generateNewArray = () => {
    const newArray = Array.from({ length: 50 }, () => Math.floor(Math.random() * 500) + 5);
    setArray(newArray);
  };

  // Run once on mount
  useEffect(() => {
    generateNewArray();
  }, []);

  return (
    <div className="visualizer-container">
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
            }}
          ></div>
        ))}
      </div>
      <div className="controls">
        <button onClick={generateNewArray}>Generate New Array</button>
        <button onClick={() => bubbleSort(array, setArray)}>Bubble Sort</button>
        <button onClick={() => mergeSort(array, setArray)}>Merge Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
