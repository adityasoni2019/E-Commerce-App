// note, earlier there was name instead of name_text_value had to change this, cause apparently, 'name' is a special key word. 

const SHOP_DATA = [

    {
        id: 1,
        title: 'Hats',
        routeName: 'hats',
        items: [
            {
                id: 1,
                name_text_value: 'Brown Brim',
                imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
                price: 25
            },
            {
                id: 2,
                name_text_value: 'Blue Beanie',
                imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
                price: 18
            },
            {
                id: 3,
                name_text_value: 'Brown Cowboy',
                imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
                price: 35
            },
            {
                id: 4,
                name_text_value: 'Grey Brim',
                imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
                price: 25
            },
            {
                  id: 5,
                  name_text_value: 'Green Beanie',
                imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
                price: 18
            },
            {
                id: 6,
                name_text_value: 'Palm Tree Cap',
                imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
                price: 14
            },
            {
                id: 7,
                name_text_value: 'Red Beanie',
                imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
                price: 18
            },
            {
                id: 8,
                name_text_value: 'Wolf Cap',
                imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
                price: 14
            },
            {
                id: 9,
                name_text_value: 'Blue Snapback',
                imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
                price: 16
            }
        ]
    },
    {
        id: 2,
        title: 'Sneakers',
        routeName: 'sneakers',
        items: [
            {
                id: 1,
                name_text_value: 'Adidas NMD',
                imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
                price: 220
            },
            {
                id: 2,
                name_text_value: 'Adidas Yeezy',
                imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
                price: 280
            },
      
            {
                id: 3,
                name_text_value: 'Black Converse',
                imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
                price: 110
      
            },
            {
                id: 4,
                name_text_value: 'Nike White AirForce',
                imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
                price: 160
            },
        {
            id: 5,
            name_text_value: 'Nike Red High Tops',
            imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
            price: 160
        },
        {
            id: 6,
            name_text_value: 'Nike Brown High Tops',
            imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
            price: 160
        },
        {
            id: 7,
            name_text_value: 'Air Jordan Limited',
            imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
            price: 190
        },
        {
            id: 8,
            name_text_value: 'Timberlands',
            imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
            price: 200
        }
    ]
},
{
    id: 3,
        title: 'Jackets',
        routeName: 'jackets',
        items: [
            {
                id: 1,
                name_text_value: 'Black Jean Shearling',
                imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
                price: 125
            },
            {
                id: 2,
                name_text_value: 'Blue Jean Jacket',
                imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
                price: 90
            },
            {
                id: 3,
                name_text_value: 'Grey Jean Jacket',
                imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
                price: 90
            },
            {
                id: 4,
                name_text_value: 'Brown Shearling',
                imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
                price: 165
            },
            {
                id: 5,
                name_text_value: 'Tan Trench',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 185
            }
        ]
    },
      {
          id: 4,
          title: 'Womens',
        routeName: 'womens',
        items: [
            {
                id: 1,
                name_text_value: 'Blue Tanktop',
                imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
                price: 25
          },
          {
              id: 2,
              name_text_value: 'Floral Blouse',
              imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
              price: 20
            },
            {
                id: 3,
                name_text_value: 'Floral Dress',
                imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
                price: 80
          },
          {
              id: 4,
              name_text_value: 'Red Dots Dress',
              imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
              price: 80
            },
            {
                id: 5,
                name_text_value: 'Striped Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45
            },
            {
                id: 6,
                name_text_value: 'Yellow Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 135
            },
            {
            id: 7,
            name_text_value: 'White Blouse',
            imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
            price: 20
        }
    ]
},
{
    id: 5,
    title: 'Mens',
        routeName: 'mens',
        items: [
            {
                id: 1,
                name_text_value: 'Camo Down Vest',
            imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
            price: 325
        },
        {
            id: 2,
            name_text_value: 'Floral T-shirt',
            imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
            price: 20
        },
        {
            id: 3,
            name_text_value: 'Black &amp; White Longsleeve',
            imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
            price: 25
        },
          {
              id: 4,
              name_text_value: 'Pink T-shirt',
              imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
              price: 25
            },
            {
                id: 5,
                name_text_value: 'Jean Long Sleeve',
                imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
                price: 40
            },
            {
                id: 6,
                name_text_value: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 25
            }
        ]
    }

]

export default SHOP_DATA;