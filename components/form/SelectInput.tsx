import React from 'react'
import Select, { ActionMeta } from 'react-select'

type Props = {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (option: readonly typeof Option[], actionMeta: ActionMeta<typeof Option>) => {};
};

const SelectInput = ({
  options
}: Props) => (
  <Select options={options} />
);

export default SelectInput;