export type TipContextType = {
  bill: string;
  setBill: (value: string) => void;
  tip: string;
  setTip: (value: string) => void;
  people: string;
  setPeople: (value: string) => void;
  customTip: string;
  setCustomTip: (value: string) => void;
  tipPerPerson: number;
  totalPerPerson: number;
};
