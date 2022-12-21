import { ChangeEvent, useState } from "react";
import "./Evaluator.css";
import Operation from "./Operation/Operation";
import Result from "./Result/Result";

export default function Evaluator() {
  const operators = ["+", "-", "*", "/"];

  const [firstScreen, setFirstScreen] = useState(true);
  const [firstOperand, setFirstOperand] = useState<number | "">("");
  const [secondOperand, setSecondOperand] = useState<number | "">("");
  const [selectedOperator, setSelectedOperator] = useState("+");
  // Reverse Polish notation:
  const [notation, setNotation] = useState<string[]>([]);

  function handleFirstOperandChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstOperand(Number(e.target.value));
  }

  function handleSecondOperandChange(e: ChangeEvent<HTMLInputElement>) {
    setSecondOperand(Number(e.target.value));
  }

  function handleOperatorChange(e: ChangeEvent<HTMLSelectElement>) {
    setSelectedOperator(e.target.value);
  }

  function handleAddFirstOperand() {
    setNotation([firstOperand.toString()]);
    setFirstScreen(false);
  }

  function handleAddSecondOperand() {
    const newNotation = [...notation];
    newNotation.push(secondOperand.toString());
    newNotation.push(selectedOperator);

    setNotation(newNotation);
  }

  return (
    <div className="Evaluator">
      {firstScreen && (
        <div className="Heading">
          <span className="Title">
            Expression
            <br />
            Evaluator
          </span>
        </div>
      )}

      {!firstScreen && (
        <div className="ResultSection">
          <Result notation={notation} />
        </div>
      )}

      <div className="OperationSection">
        <Operation
          operators={operators}
          firstScreen={firstScreen}
          firstOperand={firstOperand}
          secondOperand={secondOperand}
          selectedOperator={selectedOperator}
          onFirstOperandChange={handleFirstOperandChange}
          onSecondOperandChange={handleSecondOperandChange}
          onOperatorChange={handleOperatorChange}
          onAddFirstOperand={handleAddFirstOperand}
          onAddSecondOperand={handleAddSecondOperand}
        />
      </div>
    </div>
  );
}
