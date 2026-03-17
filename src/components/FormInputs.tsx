import IconPerson from "../assets/images/icon-person.svg?react";
import IconDollar from "../assets/images/icon-dollar.svg?react";

const tips = ["5", "10", "15", "25", "50"];

export const BillInput = () => {
  return (
    <div>
      <label htmlFor="bill">Bill</label>
      <div className="flex items-center bg-gray-200 px-3 mt-2 rounded-sm">
        <IconDollar />
        <input
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          className="w-full text-green-900 text-input text-end outline-none py-1 appearance-none"
        />
      </div>
    </div>
  );
};

export const SelectTip = () => {
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
              value={Number(t)}
              className="peer hidden"
            />

            <label
              htmlFor={"tip_" + t}
              className="text-center w-full rounded-sm px-2 py-1 peer-checked:bg-primary peer-checked:text-green-900 bg-green-900 text-white hover:bg-primary-hover transition-colors duration-300 cursor-pointer md:text-lg"
            >
              {t === "Custom" ? t : `${t}%`}
            </label>
          </div>
        ))}
        <button
          type="button"
          className="bg-gray-200 rounded-sm cursor-pointer md:text-base"
        >
          Custom
        </button>
      </div>
    </div>
  );
};

export const NumPeopleInput = () => {
  return (
    <div>
      <label htmlFor="num_people">Number of People</label>
      <div className="flex items-center bg-gray-200 px-3 mt-2 rounded-sm">
        <IconPerson />
        <input
          type="number"
          name="num_people"
          id="num_people"
          placeholder="0"
          className="w-full text-green-900 text-input text-end outline-none py-1 appearance-none"
        />
      </div>
    </div>
  );
};
