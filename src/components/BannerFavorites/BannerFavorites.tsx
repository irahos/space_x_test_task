import { FC } from 'react';
import image from './assets/banner_image_3.png';
import './BannerFavorites.scss';

export const BannerFavorites:FC = () => {
  return (
    <div className='banner'>
      <img src={image} alt="banner favorites image" className='banner__img' />
      <h1 className='banner__title'>favourites</h1>
    </div>
  );
};
