import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";

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
        {items.map(({ description, URI }) => (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink href={URI}>{description}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ))}
        <BreadcrumbPage>{active}</BreadcrumbPage>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
