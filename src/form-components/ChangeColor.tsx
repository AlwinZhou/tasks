import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    // Define an array of colors
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "teal"
        // Add more colors as needed
    ];

    // Initialize state for the selected color
    const [selectedColor, setSelectedColor] = useState(colors[0]);

    // Function to handle the color selection
    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(event.target.value);
    };

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colors.map((color) => (
                    <Form.Check
                        inline
                        key={color}
                        type="radio"
                        label={color}
                        id={color}
                        value={color}
                        checked={selectedColor === color}
                        onChange={handleColorChange}
                    />
                ))}
            </div>
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    margin: "10px 0",
                    color: "white"
                }}
            >
                {selectedColor}
            </div>
        </div>
    );
}
