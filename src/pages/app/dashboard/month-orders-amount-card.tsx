import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function MonthOrdersAmountCard() {
  return (
    <>
      <Card>
        <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="flex items-center justify-between space-y-0 pb-2 text-base font-semibold">
            Pedidos (Mês)
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-1">
          <span className="text-2xl font-bold tracking-tight"> 248 </span>
          <p className="text-sm text-muted-foreground">
            <span className="text-emerald-500 dark:text-emerald-400">+6%</span>
            Relação ao mês passado
          </p>
        </CardContent>
      </Card>
    </>
  )
}
