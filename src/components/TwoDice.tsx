import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftRoll, setleft] = useState<number>(1);
    const [rightRoll, setright] = useState<number>(2);
    let winner = "";
    function left(): void {
        setleft(d6());
    }
    function right(): void {
        setright(d6());
    }
    function check(leftRoll: number, rightRoll: number): string {
        if (leftRoll === rightRoll) {
            if (leftRoll === 1) {
                winner = "Lose";
            } else {
                winner = "Win";
            }
        } else {
            winner = "";
        }
        return winner;
    }

    return (
        <div>
            <Button onClick={left}>Roll Left</Button>
            <span data-testid="left-die">{leftRoll}</span>
            {"  "}
            {winner} {"  "}
            <Button onClick={right}>Roll Right</Button>
            <span data-testid="right-die">{rightRoll}</span>
        </div>
    );
}
