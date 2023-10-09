import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

import { Button, Col, Container, Row } from "react-bootstrap";
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
                <h1>Republic of China</h1>
                UD CISC275 with React Hooks andTypeScript.
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
                <img
                    src="/Users/ziyizhou/Desktop/CISC275/TASKS-MAIN/tasks/src/Flag-Taiwan.webp"
                    alt="A picture of Republic of China"
                />
            </header>
            <Container>
                <Row>
                    <Col>
                        First column.<div className="APP-renc"></div>
                    </Col>
                    <Col>
                        Second column.<div className="APP-renc"></div>
                    </Col>
                </Row>
            </Container>
            <p>Ziyi Zhou</p>
            Movie List:
            <ul>
                <li>catch me if you can</li>
                <li>catch you if I can</li>
                <li>catch her if heeeeq can</li>
            </ul>
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
