import { ButtonSubmit } from "./styles";

interface ButtonProps {
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({ label, type, onClick }: ButtonProps) => {
  return (
    <ButtonSubmit onClick={onClick} type={type}>
      {label}
    </ButtonSubmit>
  );
};
