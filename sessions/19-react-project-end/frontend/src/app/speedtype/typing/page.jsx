'use client'
import { useEffect, useState, useRef, useMemo } from 'react';
import './SpeedType.css';
import { useRouter } from 'next/navigation';
import TypingDisplay from './TypingDisplay.jsx';


// List of words for the typing test
let WORDS = [
  'the', 'and', 'that', 'have', 'for', 'not', 'with', 'you', 'this', 'but',
  'his', 'from', 'they', 'say', 'her', 'she', 'will', 'one', 'all', 'would',
  'there', 'their', 'what', 'about', 'which', 'when', 'make', 'can', 'like',
  'time', 'just', 'know', 'take', 'people', 'into', 'year', 'your', 'good',
  'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now', 'look',
  'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use',
  'two', 'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want',
  'because', 'any', 'these', 'give', 'day', 'most', 'us'
];

// Helper to pick random words
function getWords(x) {
  const shuffled = WORDS.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, x);
}

function calculateResults(typedChars, fullText, startTime) {
  let correctCount = 0;
  for (let i = 0; i < typedChars.length; i++) {
    if (typedChars[i] === fullText[i]) correctCount++;
  }
  const totalTyped = typedChars.length;
  
  const accuracy = totalTyped ? Math.round((correctCount / totalTyped) * 100) : 0;
  const elapsedMinutes = (Date.now() - startTime) / 60000;
  const wpm = elapsedMinutes ? Math.round((correctCount / 5) / elapsedMinutes) : 0;
  
  return { wpm, accuracy };
}

// Helper to save results (should use env/config for URL in production)
async function saveResults(wpm, accuracy) {

  try {
    const userId = sessionStorage.getItem('user_id');
    await fetch('https://vidyakshina-public-gules.vercel.app/results/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ userId, wpm, accuracy })
    });
  } catch (err) {
    console.error('Error saving result:', err);
  }
}



// Single status to represent test state
const STATUS = {
    IDLE: 'idle',
    RUNNING: 'running',
    FINISHED: 'finished'
};




function TimerOptions({ options, selectedddddd, onSelectttt }) {
    return (
        <div className="timer-options">
            {options.map(val => (
                <button
                    key={val}
                    className={val === selectedddddd ? 'selected' : ''}
                    onClick={() => onSelectttt(val)}
                >
                    {val}
                </button>
            ))}
        </div>
    );
}
function Controls({ onRetry }) {
    return (
        <div className="controls">
            <button onClick={onRetry}>Retry</button>
        </div>
    );
}
function ResultPanel({ wpm, accuracy }) {
  return (
    <div className="result-panel">
      <p><strong>WPM:</strong> {wpm}</p>
      <p><strong>Accuracy:</strong> {accuracy}%</p>
    </div>
  );
}

// UI subcomponents
function ColorBlindToggle({ value, onChange }) {
  return (
    <div className="colorblind-toggle">
      <label className="switch">
        <input type="checkbox" checked={value} onChange={onChange} />
        <span className="slider round"></span>
      </label>
      <span className="label-text">Color Blind Mode</span>
    </div>
  );
}


export default function TypingTest() {
    // State

    const [words, setWords] = useState([]);
    const [typedChars, setTypedChars] = useState([]);
    const [charIndex, setCharIndex] = useState(0);
    
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(60);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [testDuration, setTestDuration] = useState(60);
    const containerRef = useRef();

    const [wpm, setWpm] = useState(0);
    const [accuracy, setAccuracy] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [colorBlindMode, setColorBlindMode] = useState(false);

    const fullText = useMemo(() => words.join(' ') + ' ', [words]);
    const allChars = useMemo(() => fullText.split(''), [fullText]);

    // Load words on mount
    useEffect(() => {
        setWords(getWords(200));
        containerRef.current?.focus();
    }, []);

    function handleKeyPress(event) {
        const key = event.key;

        // 2. Escape => restart (go back to idle)
        if (key === 'Escape') {
            event.preventDefault();
            restartTest();
            return;
        }

        // 1. Space starts the test from idle
        if (status === STATUS.IDLE && key === ' ') {
            setStatus(STATUS.RUNNING);
            setStartTime(Date.now());
            return;
        }

        // 3. Ignore everything else unless running
        if (status !== STATUS.RUNNING) return;

        if (key === 'Backspace') {
            setTypedChars(prev => prev.slice(0, -1));
            setCharIndex(prev => Math.max(0, prev - 1));
            return;
        }

        if (key.length === 1 || key === ' ') {
            setTypedChars(prev => [...prev, key]);
            setCharIndex(prev => prev + 1);
        }

        if (typedChars.length >= Math.floor(allChars.length * 0.8)) {
            setWords(prev => [...prev, ...getWords(50)]);
        }
    }

    // Timer logic runs only while running
    useEffect(() => {
        if (status !== STATUS.RUNNING) return;

        if (timeLeft === 0) {
            finishTest();
            return;
        }

        const id = setTimeout(() => setTimeLeft(t => t - 1), 1000);

        return () => clearTimeout(id); // Runs before next effect
    }, [status, timeLeft]);

    // Finish test at end of timer
    async function finishTest() {
        setStatus(STATUS.FINISHED);
        const { wpm: calculatedWPM, accuracy: acc } = calculateResults(typedChars, fullText, startTime);
        setWpm(calculatedWPM);
        setAccuracy(acc);
        await saveResults(calculatedWPM, acc);
    }

    // Restart test (back to idle)
    function restartTest() {
        setWords(getWords(200));
        setTypedChars([]);
        setCharIndex(0);
        setStatus(STATUS.IDLE);
        setTestDuration(testDuration);
        setTimeLeft(() => testDuration);
        setWpm(0);
        setAccuracy(0);
        setStartTime(null);
    }

    return (
        <div
            className="typing-container"
            tabIndex={0} // Make div focusable to capture key events
            ref={containerRef}
            onKeyDown={handleKeyPress}
        >
            <ColorBlindToggle
                value={colorBlindMode}
                onChange={() => setColorBlindMode(prev => !prev)}
            />

            <h2>Typing Test</h2>
            <div className="timer-display">{timeLeft}s</div>

            <TypingDisplay
                chars={allChars}
                typed={typedChars}
                pos={charIndex}
                colorBlindMode={colorBlindMode}
            />

            {status === STATUS.IDLE ? (
                <>
                    <TimerOptions
                        options={[15, 40, 60, 120]}
                        selectedddddd={testDuration}
                        onSelectttt={val => {
                            setTestDuration(val);
                            setTimeLeft(val);
                        }}
                    />
                    <p><strong>Press spacebar to start</strong></p>
                </>
            ) : (
                <>
                    {status === STATUS.FINISHED && <ResultPanel wpm={wpm} accuracy={accuracy} />}
                    <Controls onRetry={restartTest} />
                </>
            )}

            <div className="controls">
                <button 
                    onClick={() => router.push('/auth/login')}
                    className="logout-button"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}

