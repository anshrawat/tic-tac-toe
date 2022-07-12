import React from 'react';

const History = ({ history, moveTo, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, moveIndex) => {
          return (
            <li key={moveIndex}>
              <button
                className={`btn-move ${
                  moveIndex === currentMove ? 'active' : ''
                }`}
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
    </div>
  );
};
export default History;
