import Form from "./components/Form";

function TipCalculator() {
  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] lg:max-w-4xl">
        <div className="bg-white p-2 shadow sm:rounded-lg lg:flex">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <Form />
          </div>
        </div>
      </div>
    </main>
  );
}

export default TipCalculator;
