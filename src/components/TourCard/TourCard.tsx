import { FC } from 'react';
import { Rocket } from '../Types/Rocket';
import heart from '../Header/assets/heart.svg';
import './TourCard.scss';
import { useRecoilState } from 'recoil';
import { favoriteFlightsState } from '../Atoms/FavoriteAtom';
import classNames from 'classnames';
import { isClickedState } from '../Atoms/IsClickedAtom';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';



type TTourCardProps = {
  rocket: Rocket;
};

export const TourCard: FC<TTourCardProps> = ({ rocket }) => {
  const [favoriteFlights, setFavoriteFlights] = useRecoilState(favoriteFlightsState);
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);

  const toggleFavorite = (rocket: Rocket) => {
    if (favoriteFlights.some((r) => r.id === rocket.id)) {
      setFavoriteFlights(favoriteFlights.filter((r) => r.id !== rocket.id));
    } else {
      setFavoriteFlights([...favoriteFlights, rocket]);
    }

    setIsClicked((prevIsClicked) => ({ ...prevIsClicked, [rocket.id]: !prevIsClicked[rocket.id] }));
  };

  const getImage = (name: string) => {
  switch (name.toLowerCase()) {
    case 'falcon 1':
    case 'starship':
      return image1;
    case 'falcon 9':
      return image2;
    case 'falcon heavy':
      return image3;
    default:
      return image1;
  }
};

  return (
    <div className='tour-cards'>
      <div className='tour-card'>
        <img src={getImage(rocket.name)} alt="tour image" className='tour-card__image' />
        <div className='tour-card__general'>
        <div className='tour-card__data'>
          <h2 className='tour-card__title'>{rocket.name}</h2>
          <p className='tour-card__description'>{rocket.description}</p>
        </div>
        <div className='tour-card__buttons'>
          <button className='tour-card__button-buy'>buy</button>
            <button className={classNames('tour-card__button-favourite', { 'tour-card__button-favourite--active': isClicked[rocket.id] })} onClick={() => toggleFavorite(rocket)}>
            <img src={heart} alt="favourites button" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
