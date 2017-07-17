import React from 'react';

import Button from '../../ui/Button';

import image from '../../../img/slides/slider-image-3.svg';

const Slide3 = () =>
  <div className="row Slider__slide">
    <div className="col-md-6">
      <h1 className="Slider__title Slider__title--main">
        Yağlı ellerinle klavyeye dokunma, seslenerek Tepsi’yi kontrol et!
      </h1>
      <p className="u-gap-bottom">
        Yağlı ellerinle klavye ve mouse’unu kirletme, seslenerek Tepsi’ye komutlar ver. Hangi
        komutların ne işe yaradığını öğrenmek için buraya tıkla!
      </p>
      <Button>Kullanmaya Başla!</Button>
    </div>
    <div className="col-md-6 u-text-center">
      <img
        src={image}
        className="u-inline-block"
        alt="Yağlı ellerinle klavyeye dokunma, seslenerek Tepsi’yi kontrol et!"
        width="400"
        height="378"
      />
    </div>
  </div>;

export default Slide3;
