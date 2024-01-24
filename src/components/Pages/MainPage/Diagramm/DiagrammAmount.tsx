import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = [
  {
    average: 0.1,
    today: 0.2,
  },
  {
    average: 0.7,
    today: 0.5,
  },
  {
    average: 1,
    today: 1,
  },
  {
    average: 1.5,
    today: 2,
  },
  {
    average: 6,
    today: 5,
  },
  {
    average: 5,
    today: 7,
  },
  {
    average: 8,
    today: 7.5,
  },
  {
    average: 8,
    today: 7,
  },
  {
    average: 10,
    today: 9,
  },
  {
    average: 11,
    today: 10.2,
  },
  {
    average: 12,
    today: 11,
  },
];

export const DiagrammAmount = () => {
  return (
    <div className="flex w-full items-center justify-center py-16">
      <Card className="w-full max-w-[1300px] border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-4xl text-dark-gray">
            Реализация продукции, штук
          </CardTitle>
          <CardDescription className="text-md gap-2 font-light text-dark-gray">
            <span>В 2021 году реализовано более</span>{" "}
            <span className="text-green-500">11 млн. шт. изделий</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-center gap-4">
          <ul className="flex h-[500px] w-[80px] flex-col items-center justify-between text-primary/40">
            <li>12 млн</li>
            <li>10 млн</li>
            <li>8 млн</li>
            <li>6 млн</li>
            <li>4 млн</li>
            <li>2 млн</li>
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
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  План
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].value} млн
                                </span>
                              </div>
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
                    strokeWidth={2}
                    dataKey="average"
                    activeDot={{
                      r: 6,
                      style: { fill: "blue", opacity: 0.25 },
                    }}
                    style={
                      {
                        stroke: "blue",
                        opacity: 0.25,
                        color: "blue",
                      } as React.CSSProperties
                    }
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
            <ul className="hidden w-full items-center justify-between text-primary/40 sm:flex">
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
