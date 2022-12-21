import "./Select.css";

type Props = {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  options: string[];
  label?: string;
  value: string;
};

export default function Select({ onChange, options, label, value }: Props) {
  const optionList = options.map((opt: string) => {
    return (
      <option value={opt} key={opt}>
        {opt}
      </option>
    );
  });

  return (
    <>
      {label && <label>{label}</label>}
      <select className="Select" onChange={onChange} value={value}>
        {optionList}
      </select>
    </>
  );
}
