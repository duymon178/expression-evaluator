import { ChangeEventHandler } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Select from "../Select/Select";
import "./Operation.css";

type Props = {
  selectedOperator: string;
  operators: string[];
  firstOperand: number | "";
  secondOperand: number | "";
  firstScreen: boolean;
  onFirstOperandChange: ChangeEventHandler<HTMLInputElement>;
  onSecondOperandChange: ChangeEventHandler<HTMLInputElement>;
  onOperatorChange: ChangeEventHandler<HTMLSelectElement>;
  onAddFirstOperand: React.MouseEventHandler<HTMLButtonElement>;
  onAddSecondOperand: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Operation({
  selectedOperator,
  operators,
  firstOperand,
  secondOperand,
  firstScreen = true,
  onFirstOperandChange,
  onSecondOperandChange,
  onOperatorChange,
  onAddFirstOperand,
  onAddSecondOperand,
}: Props) {
  const addFirstOperand = (
    <div className="Operation">
      <div className="Operation__Item">
        <Input
          placeholder="Please enter a number"
          onChange={onFirstOperandChange}
          value={firstOperand}
        />
      </div>

      <div className="Operation__Item">
        <Button onClick={onAddFirstOperand} disabled={firstOperand === ""}>
          Add number
        </Button>
      </div>
    </div>
  );

  const disableAddOperation: boolean =
    secondOperand === "" || (secondOperand === 0 && selectedOperator === "/");

  const addSecondOperand = (
    <div className="Operation">
      <div className="Operation__Item SecondScreen">
        <div className="SecondOperation">
          <div className="SecondOperation__Item">
            <Select
              onChange={onOperatorChange}
              options={operators}
              value={selectedOperator}
            />
          </div>

          <div className="SecondOperation__Item">
            <Input
              placeholder="Operand"
              onChange={onSecondOperandChange}
              value={secondOperand}
            />
          </div>
        </div>
      </div>

      <div className="Operation__Item">
        <Button onClick={onAddSecondOperand} disabled={disableAddOperation}>
          Add Operation
        </Button>
      </div>
    </div>
  );

  const show = firstScreen ? addFirstOperand : addSecondOperand;

  return <>{show}</>;
}
