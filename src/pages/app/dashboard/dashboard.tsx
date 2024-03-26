import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthCanceledOrdersAmountCard } from "./month-canceled-orders-amount-card copy";
import { MonthCard } from "./month-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { PopularProductsChart } from "./popular-products-chart";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>


        <div className="grid grid-cols-4 gap-4">
          <MonthCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
