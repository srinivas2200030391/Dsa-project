// Helper function to create animations
const animateSorting = (array, animations, setArray) => {
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        setArray([...animations[i]]);
      }, i * 10);
    }
  };
  
  // Bubble Sort
  export const bubbleSort = (array, setArray) => {
    const animations = [];
    const tempArray = [...array];
    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = 0; j < tempArray.length - i - 1; j++) {
        if (tempArray[j] > tempArray[j + 1]) {
          [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
        }
        animations.push([...tempArray]);
      }
    }
    animateSorting(array, animations, setArray);
  };
  
  // Merge Sort
  export const mergeSort = (array, setArray) => {
    const animations = [];
    const tempArray = [...array];
  
    const merge = (left, right) => {
      let sorted = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) sorted.push(left.shift());
        else sorted.push(right.shift());
        animations.push([...sorted, ...left, ...right, ...tempArray.slice(sorted.length + left.length + right.length)]);
      }
      return sorted.concat(left, right);
    };
  
    const mergeSortHelper = (arr) => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSortHelper(arr.slice(0, mid));
      const right = mergeSortHelper(arr.slice(mid));
      return merge(left, right);
    };
  
    mergeSortHelper(tempArray);
    animateSorting(array, animations, setArray);
  };
  