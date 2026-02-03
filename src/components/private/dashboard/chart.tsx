"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
   Card,
   CardContent,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card"

import {
   ChartContainer,
   ChartTooltip,
   ChartTooltipContent,
   type ChartConfig,
} from "@/components/ui/chart"

const chartConfig = {
   summaries: {
      label: "Summaries:",
      color: "var(--chart-1)",
   },
} satisfies ChartConfig

export function WeeklySummariesChart({ weekActivities }: { weekActivities: any }) {
   const totalSummaries = weekActivities.reduce((acc, d) => acc + d.summaries, 0);

   return (
      <Card>
         <CardHeader>
            <CardTitle>Weekly Activity 📈</CardTitle>
            <CardDescription>
               {totalSummaries} summaries generated in last 7 days
            </CardDescription>
         </CardHeader>

         <CardContent>
            <ChartContainer
               config={chartConfig}
               className="h-[250px] w-full"
            >
               <LineChart
                  data={weekActivities}
                  margin={{ left: 1, right: 10 }}
               >
                  <CartesianGrid vertical={true} />

                  <XAxis
                     dataKey="day"
                     tickLine={false}
                     axisLine={false}
                     tickMargin={8}
                     tickFormatter={(value) =>
                        new Date(value).toLocaleDateString("en-US", {
                           weekday: "short",
                        })
                     }
                  />

                  <YAxis allowDecimals={false} />

                  <ChartTooltip
                     content={({ active, payload, label }) => {
                        if (!active || !payload || !payload.length) return null

                        const day = label  // X-axis value (day)
                        const summaries = payload[0]?.value  // Y-axis value (summaries)

                        return (
                           <div className="rounded-lg border bg-background p-2 shadow-sm">
                              {/* Format the date */}
                              <div className="font-medium text-sm">
                                 {new Date(day).toLocaleDateString("en-US", {
                                    weekday: "long",
                                    month: "short",
                                    day: "numeric",
                                 })}
                              </div>

                              {/* Show summaries */}
                              <div className="mt-1 flex items-center gap-2">
                                 <div
                                    className="h-2 w-2"
                                    style={{ backgroundColor: "var(--color-summaries)" }}
                                 />
                                 <span className="text-sm">
                                    Summaries: {summaries}
                                 </span>
                              </div>
                           </div>
                        )
                     }}
                  />

                  {/* <ChartTooltip
                     content={
                        <ChartTooltipContent
                           labelFormatter={(value) =>
                              new Date(value).toLocaleDateString("en-US", {
                                 weekday: "long",
                                 month: "short",
                                 day: "numeric",
                              })
                           }
                        />
                     }
                  /> */}

                  <Line
                     dataKey="summaries"
                     type="monotone"
                     stroke="var(--color-summaries)"
                     strokeWidth={2}
                     dot={true}
                  />
               </LineChart>
            </ChartContainer>
         </CardContent>
      </Card>
   )
}
