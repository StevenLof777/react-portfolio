import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./SlideShow.css";

const SlideShow = ({images}) => {
  return (
    <Carousel 
    additionalTransfrom={0}
    arrows
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container-with-dots"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite={true}
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
    >
      {images.map((image) => (
        <img src={image.url} alt={image.alt} />
      ))}
    </Carousel>
  );
}

export default SlideShow;