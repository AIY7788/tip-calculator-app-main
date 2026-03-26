import { useState, type ReactNode } from "react";
import { TipContext } from "./formContexts";

export const TipProvider = ({ children }:{children: ReactNode}) => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [people, setPeople] = useState('');
  const [customTip, setCustomTip] = useState("");

  // derived values (this is where context shines)
  const tipAmount = Number(bill) * (Number(tip) / 100);
  const tipPerPerson = Number(people) > 0 ? tipAmount / Number(people) : 0;
  const totalPerPerson = Number(people) > 0 ? (Number(bill) + tipAmount) / Number(people) : 0;

  const values = {
    bill,
    setBill,
    tip,
    setTip,
    people,
    setPeople,
    customTip,
    setCustomTip,
    tipPerPerson,
    totalPerPerson,
  };

  return (
    <TipContext.Provider value={values}>
      {children}
    </TipContext.Provider>
  )
};

