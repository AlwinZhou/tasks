import React from "react";
import "./App.css";

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
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
