export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      supporters: [{
        name: 'Deo Resta',
        link: 'https://www.instagram.com/deo_resta/',
        image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1696117081/StoriesInBetween/Supporters/deo_resta_ozgk7m.jpg'
      }, {
        name: 'Dian Pelangi',
        link: 'https://www.instagram.com/dianpelangi/',
        image: 'https://res.cloudinary.com/dk0z4ums3/image/upload/v1696117081/StoriesInBetween/Supporters/dian_pelangi_yz8m8r.jpg'
      }]
    })
  }
}