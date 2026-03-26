import IconPerson from "../assets/images/icon-person.svg?react";
import IconDollar from "../assets/images/icon-dollar.svg?react";
import { useTip } from "../contexts/formContexts";

const tips = ["5", "10", "15", "25", "50"];

export const BillInput = () => {
  const { bill, setBill } = useTip();
  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="bill">Bill</label>
        {bill == "0" && <span className="text-red-600">Can't be zero</span>}
      </div>
      <div className="flex items-center bg-blue-400/10 px-3 mt-2 rounded-sm input-hover input-focus">
        <IconDollar />
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          value={bill ? bill : ""}
          onChange={(e) => setBill(e.target.value)}
          className="w-full hover:cursor-pointer focus:cursor-text text-green-900 text-input text-end outline-none appearance-none"
        />
      </div>
    </div>
  );
};

export const SelectTip = () => {
  const { tip, customTip, setTip, setCustomTip } = useTip();

  return (
    <div>
      <p>Select Tip %</p>
      <div className="grid grid-cols-2 gap-4 text-input mt-2 md:grid-cols-3 md:gap-2">
        {tips.map((t) => (
          <div key={t} className="flex items-center">
            <input
              type="radio"
              name="tip_selection"
              id={"tip_" + t}
              value={t}
              checked={tip === t && tip !== customTip}
              onChange={() => {
                setTip(t);
                setCustomTip(""); // clear custom
              }}
              className="peer/tip hidden"
            />

            <label
              htmlFor={"tip_" + t}
              className={`text-center w-full rounded-sm px-2 py-1 peer-checked/tip:bg-primary peer-checked/tip:text-green-900 bg-green-900 text-white ${tip !== t && "hover:bg-primary-hover"} transition-colors duration-300 cursor-pointer md:text-lg`}
            >
              {t + "%"}
            </label>
          </div>
        ))}
        <input
          type="number"
          name="custom"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => {
            const value = e.target.value;
            setCustomTip(value);
            setTip(value === "" ? "0" : value); // sync to main state
          }}
          className="bg-gray-200 text-end px-2 rounded-sm md:text-lg outline-none focus:cursor-text focus:placeholder:text-transparent placeholder:text-center input-hover input-focus"
        />
      </div>
    </div>
  );
};

export const NumPeopleInput = () => {
  const { people, setPeople } = useTip();

  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor="num_people">Number of People</label>
        {people == "0" && <span className="text-red-600">Can't be zero</span>}
      </div>
      <div className="flex items-center bg-blue-400/10 px-3 mt-2 rounded-sm input-hover input-focus">
        <IconPerson />
        <input
          type="number"
          name="num_people"
          id="num_people"
          placeholder="0"
          value={people ? people : ""}
          onChange={(e) => setPeople(e.target.value)}
          className="w-full hover:cursor-pointer focus:cursor-text text-green-900 text-input text-end outline-none appearance-none"
        />
      </div>
    </div>
  );
};
