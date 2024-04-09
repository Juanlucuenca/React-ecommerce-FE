import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// const carouselImages = [
//   "src/assets/banner1.png",
//   "src/assets/banner2.jpeg",
//   "src/assets/banner3.jpg",
//   "src/assets/banner4.jpeg",
// ];

export default function EmblaCarousel() {
  return (
    <Carousel
      opts={{
        startIndex: 2,
        active: true,
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 4000,
          stopOnInteraction: true,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from({ length: 4 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="overflow-hidden rounded-lg">
              <img src="src/assets/banner3.jpg" alt="Imagen computacion" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
