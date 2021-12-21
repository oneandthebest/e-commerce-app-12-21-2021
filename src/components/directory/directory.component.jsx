import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: 'pants',
          imageUrl: 'https://assets.ajio.com/medias/sys_master/root/20211013/NpTC/6165d42df997dd3ed46d1a53/-473Wx593H-461455469-olive-MODEL.jpg',
          id: 1,
        },
        {
          title: 'jackets',
          imageUrl: 'http://cdn.shopify.com/s/files/1/1684/8129/products/Refuge-Jacket-Cayenne-Front-straight.jpg?v=1626821840',
          id: 2,
        },
        {
          title: 'shoes',
          imageUrl: 'https://i.dailymail.co.uk/i/pix/2013/06/07/article-2337512-1A3361A3000005DC-866_634x432.jpg',
          id: 3,
        },
        {
          title: 'mens',
          imageUrl: 'https://www.sportsdirect.com/images/marketing/adi-ess-mens-clo-clothing-500x356.jpg',
          size: 'large',
          id: 4,
        },
        {
          title: 'women',
          imageUrl: 'https://media.istockphoto.com/photos/joyful-natural-young-woman-smiling-picture-id1289220974?k=20&m=1289220974&s=170667a&w=0&h=506e_Ng5c4ZE3D3qY3_oTNafnHVaEkJws-_eX0un4LM=',
          size: 'large',
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}
export default Directory;
