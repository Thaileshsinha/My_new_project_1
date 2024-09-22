"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// const chartDat = [
//   { month: "Oct, 2023", Systolic: 110, Diastolic: 120 },
//   { month: "Nov, 2023", Systolic: 60, Diastolic: 115 },
//   { month: "Dec, 2023", Systolic: 115, Diastolic: 160 },
//   { month: "Jan, 2024", Systolic: 90, Diastolic: 114 },
//   { month: "Fab, 2024", Systolic: 70, Diastolic: 155 },
//   { month: "Mar, 2024", Systolic: 80, Diastolic: 160 },
// ];

export default function Graph({ data }) {
  const chartData = [];
  data?.diagnosis_history?.length > 0 &&
    data?.diagnosis_history?.map((item) => {
      chartData.push({
        month: item.month,
        Diastolic: item.blood_pressure.systolic.value,
        Systolic: item.blood_pressure.diastolic.value,
      });
    });

  const chartConfig = {
    desktop: {
      label: "Systolic",
      color: "#8C6FE6",
    },
    mobile: {
      label: "Diastolic",
      color: "#E66FD2",
    },
  };

  return (
    <div className="w-[70%]">
      <Card className=" bg-[#F6F7F8]  shadow-none border-none rounded-[20px]">
        <CardHeader>
          {/* <CardTitle>
            <div className="flex justify-between">
              <b>Blood Pressure</b>
              <p>Last 6 Months</p>
            </div>
          </CardTitle> */}
          <CardDescription>
            <div className="flex justify-between">
              <b>Blood Pressure</b>
              <p>Last 6 Months</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis tickLine={false} axisLine={false} tickMargin={8} />
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
              <Line
                dataKey="Systolic"
                type="monotone"
                stroke="var(--color-mobile)"
                strokeWidth={2}
                dot={false}
              />
              <Line
                dataKey="Diastolic"
                type="monotone"
                stroke="var(--color-desktop)"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
