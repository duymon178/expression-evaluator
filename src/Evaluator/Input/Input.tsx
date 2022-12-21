import "./Input.css";

type Props = {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: number | "";
  label?: string;
  placeholder?: string;
};

export default function Input({ onChange, value, label, placeholder }: Props) {
  return (
    <>
      {label ? <label>{label}</label> : <></>}
      <input
        placeholder={placeholder}
        className="Input"
        type="number"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
