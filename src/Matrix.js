import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('white')));
  const [clicks, setClicks] = useState([]);

  const handleClick = (row, col) => {
    if (matrix[row][col] === 'white') {
      const newMatrix = matrix.map((r, rIndex) =>
        r.map((c, cIndex) => {
          if (rIndex === row && cIndex === col) return 'green';
          return c;
        })
      );
      const newClicks = [...clicks, { row, col }];
      setMatrix(newMatrix);
      setClicks(newClicks);

      if (newClicks.length === 9) {
        changeColorsToOrange(newClicks);
      }
    }
  };

  const changeColorsToOrange = (clicks) => {
    clicks.forEach((click, index) => {
      setTimeout(() => {
        setMatrix((prevMatrix) =>
          prevMatrix.map((r, rIndex) =>
            r.map((c, cIndex) => {
              if (rIndex === click.row && cIndex === click.col) return 'orange';
              return c;
            })
          )
        );
      }, index * 500); // Change color every 500ms
    });
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;
