import "./Button.css";

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
};

export default function Button({ onClick, children, disabled = false }: Props) {
  return (
    <>
      <button className="Button" onClick={onClick} disabled={disabled}>
        {children}
      </button>
    </>
  );
}
