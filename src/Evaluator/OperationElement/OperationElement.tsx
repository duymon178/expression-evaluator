import "./OperationElement.css";

type Props = {
  value: string;
};

export default function OperationElement({ value }: Props) {
  return <span className="OperationElement">{value}</span>;
}
