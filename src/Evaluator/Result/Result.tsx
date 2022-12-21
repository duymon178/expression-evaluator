import OperationElement from "../OperationElement/OperationElement";
import "./Result.css";

type Props = {
  notation: string[];
};

export default function Result({ notation }: Props) {
  const stack: string[] = [];

  function calculateResult(notation: string[]): JSX.Element {
    for (let el of notation) {
      if (isOperator(el)) {
        const secondOperand = stack.pop();
        const firstOperand = stack.pop();

        if (firstOperand && secondOperand) {
          const result = executeOperation(+firstOperand, +secondOperand, el);
          stack.push(result.toString());
        }
      } else {
        stack.push(el);
      }
    }

    return <>{stack[0]}</>;
  }

  function isOperator(element: string): boolean {
    return (
      element === "+" || element === "-" || element === "*" || element === "/"
    );
  }

  function executeOperation(
    first: number,
    second: number,
    operator: string
  ): number {
    let result = 0;

    switch (operator) {
      case "+": {
        result = first + second;
        break;
      }
      case "-": {
        result = first - second;
        break;
      }
      case "*": {
        result = first * second;
        break;
      }
      case "/": {
        result = first / second;
        break;
      }
    }

    return result;
  }

  return (
    <>
      <div className="Elements">
        {notation.map((value: string, index) => (
          <OperationElement value={value} key={index} />
        ))}
      </div>

      <div className="Equals">=</div>

      <div className="Result">{calculateResult(notation)}</div>
    </>
  );
}
