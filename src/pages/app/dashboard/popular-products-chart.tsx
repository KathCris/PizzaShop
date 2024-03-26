import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ResponsiveContainer,
  Pie,
  PieChart,
  Cell,
} from 'recharts'

import colors from 'tailwindcss/colors'

const products = [
  { name: 'Mussarela', amount: 1200 },
  { name: 'Peperoni', amount: 640 },
  { name: 'Calabresa', amount: 4000 },
  { name: 'Frango', amount: 2000 },
  { name: 'Quatro queijos', amount: 120 },
]

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
]

export function PopularProductsChart() {
  return (
    <>
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Produtos populares</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <PieChart style={{ fontSize: 12 }}>

            <Pie 
              data={products} 
              dataKey='amount' 
              nameKey='name' 
              cx='50%'
              cy='50%'
              outerRadius={86}
              innerRadius={64}
              strokeWidth={8}
              labelLine={false}
              label={({
                cx,
                cy,
                midAngle,
                innerRadius,
                outerRadius,
                value,
                index,
              }) => {
                const RADIAN = Math.PI / 180
                const radius = 12 + innerRadius + (outerRadius - innerRadius)
                const x = cx + radius * Math.cos(-midAngle * RADIAN)
                const y = cy + radius * Math.sin(-midAngle * RADIAN)
              
                return (
                  <text
                    x={x}
                    y={y}
                    className="fill-muted-foreground text-xs"
                    textAnchor={x > cx ? 'start' : 'end'}
                    dominantBaseline="central"
                  >
                    {products[index].name.length > 12
                      ? products[index].name.substring(0, 12).concat('...')
                      : products[index].name}{' '}
                    ({value})
                  </text>
                )
              }}
            >
              {products.map((_, index) => {
                return (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} className="stroke-background hover:opacity-80" />
                )
              })}
            </Pie> 

          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
    </>
  )
}
