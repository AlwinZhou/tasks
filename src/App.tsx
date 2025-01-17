import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Home Page</h1>
                UD CISC275 with React Hooks andTypeScript.
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <img
                    src="/Users/ziyizhou/Desktop/CISC275/TASKS-MAIN/tasks/src/Flag-Taiwan.webp"
                    alt="A picture of Republic of China"
                />
            </header>
            <hr></hr>
            <CheckAnswer expectedAnswer="1" />
            <hr></hr>
            <GiveAttempts></GiveAttempts>
            <hr></hr>
            <EditMode></EditMode>
            <hr></hr>
            <MultipleChoiceQuestion
                options={["Option 1", "Option 2", "Option 3"]}
                expectedAnswer="Option 2"
            />{" "}
            <hr></hr>
            <ChangeColor></ChangeColor>
            <hr></hr>
            <DoubleHalf></DoubleHalf>
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <DoubleHalf></DoubleHalf>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
