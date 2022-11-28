import images from "../../../assets/HomePage/imagesHomePage.js";
import classes from "./homeCard.module.css";

export const HomeCard = ({name, description, icon}) => {
  const { card__container, card__icon, card__title, card__paragraph } = classes;

  return (
    <div className={card__container}>
      <div className={card__icon}>
        <img src={images.DrinkIcon} alt="Icono de bebida" />
      </div>
      <h4 className={card__title}>{name}</h4>
      <p className={card__paragraph}>
        {description}
      </p>
    </div>
  );
};
