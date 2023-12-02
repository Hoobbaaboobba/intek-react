import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SizeComponent } from "./SizeComponent";
import { PackagePlus } from "lucide-react";

interface Props {
  description: string;
  type: string;
  form: string;
  material: string;
  lever: string;
  amount: string;
}

export const TabsComponent = ({
  description,
  type,
  form,
  material,
  lever,
  amount,
}: Props) => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid max-w-[700px] w-full grid-cols-2">
        <TabsTrigger value="account">Описание</TabsTrigger>
        <TabsTrigger value="password">Характеристики</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="w-full p-6 flex justify-center items-start gap-16">
          <img src="/images/brus.png" alt="" />
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <p>Размер</p>
            <SizeComponent />
            <div className="w-full flex gap-3 justify-center text-2xl items-center bg-main-orange rounded-md h-[80px] my-6">
              <PackagePlus /> Новый товар
            </div>
            <p>{description}</p>
          </div>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="w-full flex flex-col justify-start items-start p-6">
          <h1 className="font-bold text-2xl">
            Технические характеристики товара ИНТЕК
          </h1>
          <div className="flex flex-col gap-2">
            <div className="max-w-[550px] w-full">
              <span>Тип</span>
              {type}
            </div>
            <div className="max-w-[550px] w-full">
              <span>Тип</span>
              {type}
            </div>
            <div className="max-w-[550px] w-full">
              <span>Тип</span>
              {type}
            </div>
            <div className="max-w-[550px] w-full">
              <span>Тип</span>
              {type}
            </div>
            <div className="max-w-[550px] w-full">
              <span>Тип</span>
              {type}
            </div>
          </div>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
