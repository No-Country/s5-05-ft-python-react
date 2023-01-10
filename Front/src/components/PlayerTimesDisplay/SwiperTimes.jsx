import "./swiperTimes.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const SwiperTimes = ({ times }) => {
	return (
		<Swiper slidesPerView={"auto"} spaceBetween={0} className='mySwiper'>
			{times.map((dateTime) => (
				<SwiperSlide key={dateTime}>{dateTime}</SwiperSlide>
			))}
		</Swiper>
	);
};
