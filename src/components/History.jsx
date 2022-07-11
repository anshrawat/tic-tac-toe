import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, moveIndex) => {
        return (
          <li key={moveIndex}>
            <button
              style={{
                fontWeight: moveIndex === currentMove ? 'bold' : 'normal',
              }}
              type="button"
              onClick={() => {
                moveTo(moveIndex);
              }}
            >
              {' '}
              {moveIndex === 0
                ? `Go to game start`
                : `Go to move #${moveIndex}`}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default History;
