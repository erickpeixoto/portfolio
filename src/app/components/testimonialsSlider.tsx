import { CardStack } from "@/app/components/ui/card-stack";
import { Separator } from "@/app/components/ui/separator";

import { FaHeart } from "react-icons/fa";
import { TESTIMONIALS } from "@/server/mock/testimonials";

export function Testimonials() {
  return (
    <div className="md:pr-16 w-full md:mb-0 mb-8">
      <h1 className="text-2xl font-bold mb-5 flex gap-2 items-center">
        Testimonials{" "}
        <span className="text-emerald-500">
          <FaHeart className="text-identity w-8" />{" "}
        </span>
      </h1>
      <Separator className="w-full mb-20" />
      <CardStack items={TESTIMONIALS} />
    </div>
  );
}
