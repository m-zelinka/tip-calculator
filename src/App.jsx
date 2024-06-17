import PropTypes from "prop-types";
import { FormProvider, useForm } from "react-hook-form";
import Form from "./components/Form";
import ResetButton from "./components/ResetButton";
import Results from "./components/Results";
import { tipOptions } from "./utils";

const defaultValues = { bill: "", tip: tipOptions[3].value, peopleCount: "" };

function TipCalculator() {
  const methods = useForm({
    mode: "onChange",
    defaultValues,
  });

  function handleReset() {
    methods.reset(defaultValues);
  }

  return (
    <main className="flex min-h-full flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Logo className="mx-auto h-10 w-auto text-emerald-600" />
        <h1 className="mt-8 text-balance text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Split your expenses with your{" "}
          <span className="text-emerald-600">friends & colleagues</span>
        </h1>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px] lg:max-w-4xl">
        <div className="bg-white p-2 shadow sm:rounded-lg lg:flex">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <FormProvider {...methods}>
              <Form />
            </FormProvider>
          </div>
          <div className="p-2 max-lg:-mt-2 lg:w-full lg:max-w-md lg:flex-none">
            <div className="rounded-md bg-gray-50 p-6 ring-1 ring-inset ring-gray-900/5 lg:flex lg:h-full lg:flex-col">
              <FormProvider {...methods}>
                <Results />
              </FormProvider>
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

function Logo({ className }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M199.06 140.014C199.605 145.51 195.075 150 189.552 150H153.302C147.779 150 143.42 145.463 142.173 140.083C137.681 120.698 120.304 106.25 99.5522 106.25C78.8007 106.25 61.4237 120.698 56.931 140.083C55.6841 145.463 51.325 150 45.8022 150H9.55217C4.02932 150 -0.500355 145.51 0.0445342 140.014C5.0553 89.4741 47.6939 50 99.5522 50C151.41 50 194.049 89.4741 199.06 140.014Z" />
    </svg>
  );
}
Logo.propTypes = {
  className: PropTypes.string,
};
