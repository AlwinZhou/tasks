import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

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
        </div>
    );
}

export default App;
