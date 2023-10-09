import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface MyFunction {
    dhValue: number;
    setDhValue: (dhValue: number) => void;
}

function Doubler({ dhValue, setDhValue }: MyFunction): JSX.Element {
    const doublev = () => {
        setDhValue(2 * dhValue);
    };
    return <Button onClick={doublev}>Double</Button>;
}

function Halver({ dhValue, setDhValue }: MyFunction): JSX.Element {
    const halve = () => setDhValue(0.5 * dhValue);
    return <Button onClick={halve}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setDhValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setDhValue={setDhValue}></Halver>
        </div>
    );
}
