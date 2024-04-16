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
  return (
    <Carousel
      className="w-screen md:w-full md:ml-0 md:mr-0 -mt-5 md:-mt-0 
    dark:border-gray-800 border-t-1 border-identity/65"
    >
      <CarouselContent>
        {project?.images.map((image, index) => (
          <CarouselItem key={index}>
            <Image
              key={index}
              src={image}
              alt={project?.description}
              width={800}
              height={400}
              className="mb-4 w-full h-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
