import { Field } from "@headlessui/react";
import { FieldLabel } from "./ui/field";
import { Progress } from "./ui/progress";

const ProgressBar = ({
  id,
  title,
  value
}: {
  id: string;
  title: string;
  value: number
}) => {
  return (
    <Field className="w-full max-w-sm">
      <FieldLabel htmlFor={id}>
        <span>{title}</span>
        <span className="ml-auto">{value}%</span>
      </FieldLabel>
      <Progress value={value} id={id} />
    </Field>
  )
};

export default ProgressBar;