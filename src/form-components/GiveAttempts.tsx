import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("0"); // Initialize as a string

    const handleUseAttempt = () => {
        if (attemptsLeft > 0) {
            setAttemptsLeft(attemptsLeft - 1);
        }
    };

    const handleGainAttempt = () => {
        const requested = parseInt(requestedAttempts);

        if (!isNaN(requested) && requested > 0) {
            setAttemptsLeft(attemptsLeft + requested);
            setRequestedAttempts("0"); // Reset the input as a string
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setRequestedAttempts(inputValue);
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts Left: {attemptsLeft}</p>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleInputChange}
                placeholder="Requested Attempts"
            />
            <button onClick={handleUseAttempt} disabled={attemptsLeft === 0}>
                Use Attempt
            </button>
            <button onClick={handleGainAttempt}>Gain Attempt</button>
        </div>
    );
}
