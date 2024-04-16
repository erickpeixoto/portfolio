import { Project } from "@/server/mock/projects/project.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/app/components/ui/carousel";
import { Image } from "@nextui-org/react";

export default function ProjectCarousel(project: Project) {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {project?.images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              key={index}
              isZoomed
              src={image}
              alt={project?.description}
              width="100%"
              height="100%"
              className="rounded-md mb-4"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-identity border-1 border-identity/65" />
      <CarouselNext className="bg-identity border-1 border-identity/65" />
    </Carousel>
  );
}
