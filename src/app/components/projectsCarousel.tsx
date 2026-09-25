import { Project } from "@/server/mock/projects/project.types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/app/components/ui/carousel";
import Image from "next/image";

export default function ProjectCarousel(project: Project) {
  const multiple = project.images.length > 1;
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {project.images.map((image, index) => (
          <CarouselItem key={image}>
            <div className="relative w-full aspect-video bg-[--surface-1]">
              <Image
                src={image}
                alt={`${project.title}, screen ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 960px"
                className="object-contain"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {multiple && <CarouselPrevious className="left-3" />}
      {multiple && <CarouselNext className="right-3" />}
    </Carousel>
  );
}
