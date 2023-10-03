import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

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
                <li>catch her if he can</li>
            </ul>
            <hr></hr>
            <Counter></Counter>
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
