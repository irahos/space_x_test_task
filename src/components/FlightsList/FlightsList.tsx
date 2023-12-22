import { useRecoilState } from 'recoil';
import { favoriteFlightsState } from '../Atoms/FavoriteAtom';
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';

import deleteImage from './assets/delete.svg';

import { FC } from 'react';

import './FlightsList.scss';
import { isClickedState } from '../Atoms/IsClickedAtom';
import { Rocket } from '../Types/Rocket';
import classNames from 'classnames';


export const FlightsList:FC = () => {
  const [favoriteFlights, setFavoriteFlights] = useRecoilState(favoriteFlightsState);
  const [isClicked, setIsClicked] = useRecoilState(isClickedState);

  const deleteFavorite = (flight: Rocket) => {
    setFavoriteFlights(favoriteFlights.filter((r) => r.id !== flight.id));
    setIsClicked((prevIsClicked) => ({ ...prevIsClicked, [flight.id]: !prevIsClicked[flight.id] }));
  };

  const deleteAll = () => {
    setFavoriteFlights([]);
    setIsClicked({});
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
    <div className='container'>
      <div className='delete-all' onClick={deleteAll}>Clear all</div>
      <div className='favorites'>
        {favoriteFlights.map((flight) => (
          <div className='tour-card' key={flight.id}>
            <div className='tour-card__data'>
                <img src={getImage(flight.name)} alt="tour image" className='tour-card__image' />
                <h2 className='tour-card__title'>{flight.name}</h2>
                <p className='tour-card__description'>{flight.description}</p>
            </div>
            <div className='tour-card__buttons'>
              <button className='tour-card__button-buy'>buy</button>
              <button className='tour-card__button-favourite' onClick={() => deleteFavorite(flight)}>
                <img src={deleteImage} alt="favourites button" className={classNames({'active': isClicked})}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
