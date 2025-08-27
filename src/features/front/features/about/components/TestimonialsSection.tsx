import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Adopting my puppy here was the best decision. The team is caring and supportive!",
      name: "Tina Campbell",
      role: "Pet Owner",
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
    },
    {
      quote:
        "Amazing experience! They truly care for animals and make adoption stress-free.",
      name: "John Miller",
      role: "Pet Lover",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    },
    {
      quote:
        "Highly recommend! The service was professional, and my cat is so happy in her new home.",
      name: "Sophia Davis",
      role: "Cat Owner",
      img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    },
    {
      quote:
        "From start to finish, everything was smooth. My family found the perfect dog.",
      name: "Michael Thompson",
      role: "Dog Owner",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      quote:
        "The adoption fees are fair, and the support after adoption is excellent!",
      name: "Emma Wilson",
      role: "Animal Advocate",
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-500 text-sm mb-2">
            What Our Clients Say About Us
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Read Testimonials
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  role,
  img,
}: {
  quote: string;
  name: string;
  role: string;
  img: string;
}) {
  return (
    <div className="text-center px-6">
      <div className="text-6xl text-blue-500 mb-4">"</div>
      <p className="text-lg text-gray-600 mb-8 italic">{quote}</p>
      <div className="flex items-center justify-center gap-4">
        <img
          src={img}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
