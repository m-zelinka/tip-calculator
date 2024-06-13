import clsx from "clsx";
import { formatCurrency } from "../utils";

function Results() {
  const tipAmount = 0;
  const total = 0;

  return (
    <dl className="space-y-6">
      <div>
        <dt className="text-sm/6 font-medium text-gray-600">Tip Amount</dt>
        <dd
          className={clsx(
            "mt-2 flex items-baseline gap-x-2 text-4xl font-semibold tracking-tight",
            tipAmount === 0 ? "text-gray-500" : "text-indigo-600",
          )}
        >
          {formatCurrency(tipAmount)}
          <span className="text-sm text-gray-500">/ person</span>
        </dd>
      </div>
      <div>
        <dt className="text-sm/6 font-medium text-gray-600">Total</dt>
        <dd
          className={clsx(
            "mt-2 flex items-baseline gap-x-2 text-4xl font-semibold tracking-tight",
            total === 0 ? "text-gray-500" : "text-indigo-600",
          )}
        >
          {formatCurrency(total)}
          <span className="text-sm text-gray-500">/ person</span>
        </dd>
      </div>
    </dl>
  );
}

export default Results;
