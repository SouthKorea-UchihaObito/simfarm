import Image from 'next/image'
import jumpImage from '../../public/image/main/banner/jumpImage.png'
function Banner(){
  return(
    <section className='section3' title='https://pixabay.com/ko/users/openclipart-vectors-30363/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=2024320/https://www.pngwing.com/ko/free-png-ziosh/download/https://www.pngwing.com/ko/free-png-zcqcc/download'>
      <p>
        이달의 상품을 추천합니다.<br/>
        <b>개성있는</b> 아이템으로<br/>
        패션을 꾸며보아요!
      </p>
      <p>
        <b>600만개</b>인기 상품이 팔린 제품들로<br/>
        나만을 위한 패션 아이템을 추천받아보세요,
      </p>
      <Image src={jumpImage} alt="jumpImage" title='https://pixabay.com/ko/users/carvit56-9226797/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7246982'/>
    </section>
  )
}
export default Banner