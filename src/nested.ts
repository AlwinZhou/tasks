import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newQuestions = questions.filter(
        (question: Question): boolean => question.published === true
    );
    return newQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const Nonempty = questions.filter(
        (question: Question): boolean =>
            question.body !== "" ||
            question.expected !== "" ||
            question.options.length > 0
    );
    return Nonempty;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const findID = questions.filter(
        (question: Question): boolean => question.id === id
    );
    if (findID.length === 1) {
        return findID[0];
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    return questions.filter(
        (question: Question): boolean => question.id !== id
    );
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    return questions.map((question: Question): string => question.name);
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const array = questions.map(
        (question: Question): number => question.points
    );
    const sum = array.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const arrayPublished = questions.filter(
        (question: Question): boolean => question.published === true
    );
    const arraypoints = arrayPublished.map(
        (point: Question): number => point.points
    );
    const sum = arraypoints.reduce((accum, current) => accum + current, 0);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const firstRow = ["id", "name", "options", "points", "published"];
    const array = questions
        .map(
            (question: Question): string =>
                `${question.id},${question.name},${question.options.length},${question.points},${question.published}`
        )
        .join("\n");
    return firstRow + "\n" + array;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    interface Answer {
        questionId: number;
        text: string;
        submitted: boolean;
        correct: boolean;
    }

    // Use the map method to create an array of Answer objects based on questions
    const answers: Answer[] = questions.map((question: Question) => {
        return {
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        };
    });

    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const publishedQuestions: Question[] = questions.map(
        (question: Question) => {
            return { ...question, published: true };
        }
    );

    return publishedQuestions;
}
/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        // Handle the case where the array is empty.
        return true;
    }
    const theType = questions[0].type;
    const theLength = questions.length;
    const newQuestion = questions.filter(
        (question: Question): boolean => question.type === theType
    );
    if (newQuestion.length === theLength) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const NewQ: Question = makeBlankQuestion(id, name, type);
    const newQuestions: Question[] = [...questions, NewQ];
    return newQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const NewQ = [...questions];
    if (targetIndex !== -1) {
        NewQ[targetIndex] = {
            ...questions[targetIndex],
            name: newName
        };
    }
    return NewQ;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const targetIndex = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const newQ = [...questions];
    newQ[targetIndex] = {
        ...newQ[targetIndex],
        type: newQuestionType
    };
    if (newQuestionType !== "multiple_choice_question") {
        newQ[targetIndex].options = [];
    }
    return newQ;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    // Create a deep copy of the original questions array
    const newQuestions: Question[] = questions.map((question) => ({
        ...question
    }));

    // Find the index of the question with the targetId
    const targetIndex: number = newQuestions.findIndex(
        (question) => question.id === targetId
    );

    // Check if the targetId exists in the array
    if (targetIndex !== -1) {
        const targetQuestion = newQuestions[targetIndex];

        // Create a deep copy of the options array of the target question
        const updatedOptions: string[] = [...targetQuestion.options];

        // Add the newOption to the target question's options
        if (targetOptionIndex === -1) {
            updatedOptions.push(newOption);
        } else {
            // Replace the existing element at targetOptionIndex with newOption
            updatedOptions[targetOptionIndex] = newOption;
        }

        // Update the options property of the target question
        targetQuestion.options = updatedOptions;
    }

    return newQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const newQuestions: Question[] = [];

    for (const question of questions) {
        newQuestions.push(question);

        // Check if the current question has the targetId
        if (question.id === targetId) {
            // Duplicate the current question with a new ID
            const duplicate: Question = duplicateQuestion(newId, question);

            // Insert the duplicate directly after the original question
            newQuestions.push(duplicate);
        }
    }

    return newQuestions;
}
