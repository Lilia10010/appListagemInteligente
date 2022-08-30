import { ButtonSubmit } from "./styles";

interface ButtonProps {
  label: string;
  type: "button" | "submit" | "reset";
}

export const Button = ({ label, type }: ButtonProps) => {
  return <ButtonSubmit type={type}>{label}</ButtonSubmit>;
};
