import { ArrowPathIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function ResetButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
        aria-hidden
      >
        <ArrowPathIcon className="size-5 text-gray-400" />
      </div>
      Reset
    </button>
  );
}
ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ResetButton;
