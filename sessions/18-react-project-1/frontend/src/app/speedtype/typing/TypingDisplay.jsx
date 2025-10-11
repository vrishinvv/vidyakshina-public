import { useEffect, useRef } from 'react';

// Helper function to calculate className for each character
function getCharClassName(i, char, typed, pos, colorBlindMode) {
  let cls = 'char';

  if (i < typed.length) {
    const isCorrect = typed[i] === char;
    if (isCorrect) {
      cls += ' correct';
    } else {
      cls += ' incorrect';
    }
  }

  if (i === pos) {
    cls += ' current';
  }

  return cls;
}

export default function TypingDisplay({ chars, typed, pos }) {
  const currentCharRef = useRef(null);

  // Scroll to the current character when it moves
  useEffect(() => {
    if (currentCharRef.current) {
      currentCharRef.current.scrollIntoView({ block: 'nearest', inline: 'start' });
    }
  }, [pos]);


  return (
    <div className="word-box">
      {chars.map((char, i) => (
        <span
          key={i}
          className={getCharClassName(i, char, typed, pos)}
          ref={i === pos ? currentCharRef : null}
          
        >
          {char}
        </span>
      ))}
    </div>
  );
}