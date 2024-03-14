import { Fragment } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import Link from "next/link";

interface Item {
  URI: string;
  description: string;
}

export interface BreadcrumbProps {
  items: Item[];
  active: string;
}

export function BreadcrumbDynamic({ items = [], active }: BreadcrumbProps) {
  return (
    <Breadcrumb className="m-5">
      <BreadcrumbList>
        {items.map(({ description, URI }, index) => (
          <Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href={URI}>{description}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
        <BreadcrumbPage>{active}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
