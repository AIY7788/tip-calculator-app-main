import Logo from "./assets/images/logo.svg?react";
import { BillInput, NumPeopleInput, SelectTip } from "./components/FormInputs";
import TipSummary from "./components/TipSummary";

const App = () => {
  return (
    <main className="font-space-mono text-sm text-gray-500 bg-primary/25 min-h-screen sm:flex sm:flex-col sm:items-center sm:justify-center sm:gap-8">
      <div className="flex justify-center py-10">
        <Logo />
      </div>
      <div className="max-w-2xl bg-gray-50 p-5 rounded-t-2xl sm:flex gap-4 md:rounded-2xl">
        <form action="" className="flex flex-col gap-5 sm:gap-7 sm:p-4">
          <BillInput />
          <SelectTip />
          <NumPeopleInput />
        </form>
        <TipSummary />
      </div>
    </main>
  );
}

export default App;
