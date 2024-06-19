import '../Categories/Categories.scss';
import pesticides from '../../imgs/pesticides.svg';
import pesticidesHover from '../../imgs/pesticidesHover.svg';
import cultures from '../../imgs/cultures.svg';
import culturesHover from '../../imgs/culturesHover.svg';
import pests from '../../imgs/pests.svg';
import pestsHover from '../../imgs/pestsHover.svg';
import substances from '../../imgs/substances.svg';
import substancesHover from '../../imgs/substancesHover.svg';

import Card from '../Card/Card';

function Categories() {
  const listCards = [
    {
      name: 'Пестициды',
      img: pesticides,
      imgHover: pesticidesHover,
    },
    {
      name: 'Культуры',
      img: cultures,
      imgHover: culturesHover,
    },
    {
      name: 'Вредители',
      img: pests,
      imgHover: pestsHover,
    },
    {
      name: 'Действующие вещества',
      img: substances,
      imgHover: substancesHover,
    },
  ];
  return (
    <div className='categories'>
      <div className='categories__wrapper'>
        <h1 className='categories__title'>Категории</h1>
        <div className='categories__wrapper-card'>
          {listCards.map((el, index) => (
            <Card
              key={index}
              name={el.name}
              img={el.img}
              imgHover={el.imgHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
