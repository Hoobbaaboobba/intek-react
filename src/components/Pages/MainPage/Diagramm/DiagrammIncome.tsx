import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MoveUpIcon } from "lucide-react";

const data = [
  {
    average: 2,
    today: 2,
  },
  {
    average: 6,
    today: 6,
  },
  {
    average: 10,
    today: 10,
  },
  {
    average: 40,
    today: 40,
  },
  {
    average: 110,
    today: 110,
  },
  {
    average: 200,
    today: 200,
  },
  {
    average: 250,
    today: 250,
  },
  {
    average: 240,
    today: 240,
  },
  {
    average: 350,
    today: 350,
  },
  {
    average: 410,
    today: 410,
  },
  {
    average: 500,
    today: 500,
  },
];

export const DiagrammIncome = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#F9F9F9] py-16">
      <Card className="w-full max-w-[1300px] border-none bg-transparent shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl text-dark-gray">
            Выручка, руб
          </CardTitle>
          <CardDescription className="text-md text-dark-gray">
            <span>Рост выручки в 2021 году к 2019 году более</span>{" "}
            <span className="text-green-500">19,8%</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-4">
          <ul className="flex h-[500px] w-[80px] flex-col items-center justify-between text-light-gray">
            <li>600 млн</li>
            <li>500 млн</li>
            <li>400 млн</li>
            <li>300 млн</li>
            <li>200 млн</li>
            <li>100 млн</li>
            <li>0</li>
          </ul>
          <div className="flex w-full flex-col items-center justify-center gap-4 pb-4">
            <div className="h-[500px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 0,
                  }}
                >
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-1 gap-2">
                              {/* <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  План
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].value} млн
                                </span>
                              </div> */}
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Реализовано
                                </span>
                                <span className="font-bold">
                                  {payload[1].value} млн
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    strokeWidth={0}
                    dataKey="average"
                    activeDot={{}}
                    style={
                      {
                        stroke: "",
                        opacity: 0,
                        color: "",
                      } as React.CSSProperties
                    }
                    className="hidden"
                  />
                  <Line
                    type="monotone"
                    dataKey="today"
                    strokeWidth={2}
                    activeDot={{
                      r: 8,
                      style: { fill: "blue" },
                    }}
                    style={
                      {
                        stroke: "blue",
                      } as React.CSSProperties
                    }
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <ul className="hidden w-full items-center justify-between text-dark-gray sm:flex">
              <li>2011</li>
              <li>2012</li>
              <li>2013</li>
              <li>2014</li>
              <li>2015</li>
              <li>2016</li>
              <li>2017</li>
              <li>2018</li>
              <li>2019</li>
              <li>2020</li>
              <li>2021</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
