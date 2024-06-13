import Form from "./components/Form";
import ResetButton from "./components/ResetButton";
import Results from "./components/Results";

function TipCalculator() {
  function handleReset() {
    // TODO
  }

  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] lg:max-w-4xl">
        <div className="bg-white p-2 shadow sm:rounded-lg lg:flex">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <Form />
          </div>
          <div className="p-2 max-lg:-mt-2 lg:w-full lg:max-w-md lg:flex-none">
            <div className="rounded-md bg-gray-50 p-6 ring-1 ring-inset ring-gray-900/5 lg:flex lg:h-full lg:flex-col">
              <Results />
              <div className="mt-10 flex flex-col lg:mt-auto">
                <ResetButton onClick={handleReset} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TipCalculator;
