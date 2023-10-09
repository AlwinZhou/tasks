import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [progress, setProgress] = useState<boolean>(false);
    const [Attempts, setAttempts] = useState<number>(4);
    function startQuiz(): void {
        if (Attempts === 0) {
            setProgress(false);
        } else {
            setProgress(true);
            setAttempts(Attempts - 1);
        }
    }
    function StopQuiz(): void {
        setProgress(false);
    }
    function Mulligan(): void {
        setAttempts(Attempts + 1);
    }
    return (
        <div>
            <Button onClick={startQuiz} disabled={progress || Attempts === 0}>
                Start Quiz{" "}
            </Button>
            {Attempts}
            <Button onClick={StopQuiz} disabled={!progress}>
                Stop Quiz{" "}
            </Button>
            <Button onClick={Mulligan} disabled={progress}>
                Mulligan{" "}
            </Button>
        </div>
    );
}
