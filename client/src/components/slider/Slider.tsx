import { IonButton } from '@ionic/react';
import { useSwiper } from 'swiper/react';
import './Slider.css';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <IonButton style={{backgroundColor: "#37F2A9"}} onClick={() => swiper.slideNext()} fill="clear" className="slider-next">Volgende</IonButton>
  );
}