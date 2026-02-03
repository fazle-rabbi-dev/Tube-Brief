import Link from "next/link"
import Image from "next/image"

import { Card, CardHeader } from "@/components/ui/card"
import { BorderBeam } from "@/components/ui/border-beam"
import { WeeklySummariesChart } from "@/components/private/dashboard/chart"
import { IVideoSummary } from "@/lib/database/video-summary.model"

const DashboardContent = ({ histories, weekActivities }: { histories: IVideoSummary[] | null, weekActivities: any }) => {

   // weekActivities = aggregation result
   // Get the last 7 days
   const today = new Date()
   const days = [...Array(7)].map((_, i) => {
      const d = new Date()
      d.setDate(today.getDate() - (6 - i)) // last 7 days
      return d.toISOString().split("T")[0] // "YYYY-MM-DD"
   })

   const normalizedData = days.map(day => {
      const found = weekActivities?.find(d => d._id === day)
      return {
         day,
         summaries: found ? found.count : 0,
      }
   })


   return (
      <main className="container mt-0">
         <section className="">
            <h2 className="heading-3 mt-2">Recent summaries</h2>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-stretch gap-4">
               {
                  histories?.map(item => (
                     <Link key={item.title} href={`/dashboard/summaries/${item._id.toString()}`}>
                        <Card className="h-full relative overflow-hidden">
                           <CardHeader>
                              <Image src={item.thumbnailUrl} width={400} height={250} alt={item.title} className="w-full" />
                              <p>{item.title}</p>
                           </CardHeader>
                           <BorderBeam
                              duration={6}
                              size={400}
                              className="from-transparent via-primary to-transparent"
                           />
                           <BorderBeam
                              duration={6}
                              delay={3}
                              size={400}
                              borderWidth={2}
                              className="from-transparent via-secondary to-transparent"
                           />
                        </Card>
                     </Link>
                  ))
               }

            </div>

            {/* When there is no summary */}
            {
               histories?.length === 0 && (
                  <div className="text-center">
                     <p className="font-semibold text-primary">No summary available yet</p>
                     <p className="text-muted-foreground">
                        Generate a summary from a YouTube video to see it here.
                     </p>
                  </div>
               )
            }
         </section>

         <section className="mt-10">
            <h2 className="heading-3">Usages stats</h2>

            <div className="mt-4">
               <WeeklySummariesChart weekActivities={normalizedData} />
            </div>
         </section>
      </main>
   )
}

export default DashboardContent