import React, { useState } from "react";
import { Button } from "react-bootstrap";
type Holiday = "A" | "B" | "C" | "D" | "E";
export function CycleHoliday(): JSX.Element {
    const courseLookup: Record<Holiday, string> = {
        A: "🎃",
        B: "😺",
        C: "👽",
        D: "👩‍🎤",
        E: "😆"
    };
    const Alphabet: Holiday[] = ["A", "B", "C", "D", "E"];
    const year: Holiday[] = ["E", "D", "C", "B", "A"];
    const [holiday, setholiday] = useState<Holiday>("A");
    function findAlphabet(): void {
        let index = Alphabet.findIndex((h): boolean => h === holiday);
        if (index === 4) {
            index = 0;
        } else {
            index = index + 1;
        }
        setholiday(Alphabet[index]);
    }
    function findYear(): void {
        let index = year.findIndex((h): boolean => h === holiday);
        if (index === 4) {
            index = 0;
        } else {
            index = index + 1;
        }
        setholiday(year[index]);
    }
    return (
        <div>
            <Button onClick={findAlphabet}>Alphabet</Button>
            Holiday: {courseLookup[holiday]}
            <Button onClick={findYear}>Year</Button>
        </div>
    );
}
