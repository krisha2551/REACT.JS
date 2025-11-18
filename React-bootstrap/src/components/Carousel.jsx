import Carousel from "react-bootstrap/Carousel";

function HeroCarousel() {
  const carouselData = [
    {
      id: 1,
      title: "Serene Lake Retreat",
      image:
        "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
      descriptions:
        "Escape to peaceful lakes surrounded by lush greenery and fresh mountain air",
    },
    {
      id: 2,
      title: "Urban City Adventure",
      image:
        "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
      descriptions:
        "Explore modern architecture, vibrant streets, and cultural highlights in the city",
    },
    {
      id: 3,
      title: "Majestic Mountain Journey",
      image:
        "https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg",
      descriptions:
        "Experience stunning mountain views, hiking trails, and nature’s beauty",
    },
  ];

  return (
    <Carousel fade interval={3000}>
      {carouselData.map((c) => (
        <Carousel.Item key={c.id}>
          <div className="carousel-overlay"></div>

          <img
            src={c.image}
            alt={`image${c.id}`}
            className="d-block w-100"
            style={{ height: "700px", objectFit: "cover" }}
          />

          <Carousel.Caption className="mb-5">
            <h3 className="fw-bold display-5">{c.title}</h3>
            <p className="fs-5">{c.descriptions}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

      <style>{`
        .carousel-overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.4),
            rgba(0,0,0,0.7)
          );
          z-index: 1;
        }
        .carousel-caption {
          z-index: 2 !important;
        }
      `}</style>
    </Carousel>
  );
}

export default HeroCarousel;
