
const TipSummary = () => {
  return (
    <div className="mt-6 bg-green-900 py-6 px-4 rounded-xl flex flex-col gap-5 sm:min-w-[50%] sm:py-8 sm:px-6 sm:m-0 sm:gap-8">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white">Tip Amount</h3>
          <span>/ person</span>
        </div>

        <p className="text-input text-primary md:text-3xl">$4.27</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white">Total</h3>
          <span>/ person</span>
        </div>

        <p className="text-input text-primary md:text-3xl">$32.79</p>
      </div>

      <button className="bg-primary p-2 uppercase text-green-900 rounded-sm cursor-pointer hover:bg-primary-hover transition-colors duration-300 sm:mt-auto">
        Reset
      </button>
    </div>
  );
}

export default TipSummary