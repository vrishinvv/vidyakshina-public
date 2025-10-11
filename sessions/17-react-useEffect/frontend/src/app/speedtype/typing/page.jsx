'use client'
import { useEffect, useState, useRef, useMemo } from 'react';
import './SpeedType.css';
import { useRouter } from 'next/navigation';


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

// Single status to represent test state
const STATUS = {
    IDLE: 'idle',
    RUNNING: 'running',
    FINISHED: 'finished'
};



export default function TypingTest({ user }) {
    // State
    const router = useRouter();
    const [timeLeft, setTimeLeft] = useState(60);
    const [status, setStatus] = useState(STATUS.IDLE);
    const [testDuration, setTestDuration] = useState(60);
    const containerRef = useRef();


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
            return;
        }

        // 3. Ignore everything else unless running
        // if (status !== STATUS.RUNNING) return;
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
    }

    // Restart test (back to idle)
    function restartTest() {
        setStatus(STATUS.IDLE);
        setTestDuration(testDuration);
        setTimeLeft(() => testDuration);
    }

    return (
        <div
            className="typing-container"
            tabIndex={0} // Make div focusable to capture key events
            ref={containerRef}
            onKeyDown={handleKeyPress}
        >

            <h2>Typing Test</h2>
            <div className="timer-display">{timeLeft}s</div>

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
                <Controls onRetry={restartTest} />
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