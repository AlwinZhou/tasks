import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [type, setType] = useState<QuestionType>("short_answer_question");
    function ChangeType(): void {
        if (type === "short_answer_question") {
            setType("multiple_choice_question");
        } else {
            setType("short_answer_question");
        }
    }
    return (
        <div>
            <Button onClick={ChangeType}>Change Type</Button>
            {type === "short_answer_question"
                ? "Short Answer"
                : "Multiple Choice"}
            {type}
        </div>
    );
}
