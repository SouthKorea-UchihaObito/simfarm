import Link from 'next/link'
import Image from 'next/image'
let discountArr = [
    {id : 0, name: "discountImage1"},
    {id : 1, name: "discountImage2"},
    {id : 2, name: "discountImage3"},
    {id : 3, name: "discountImage4"},
    {id : 4, name: "discountImage5"},
    {id : 5, name: "discountImage6"},
    {id : 6, name: "discountImage7"},
    {id : 7, name: "discountImage8"}
]
function Discount(){
  return(
    <section className='section5'>
      <div className='sectionTitle'>
        <h2>Special Discount</h2>
        <Link href="/">할인 상품 보러 가기 →</Link>
      </div>
      <div className='discountGroup'>
        {
          discountArr.map((a, i)=>{
            return(
              <div className='discountImage' key={i} title='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/fUEP0djb1hA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
                <Image src={require("/public/image/main/discount/discount" + i + ".png")} alt={a.name} title='https://unsplash.com/ko/%EC%82%AC%EC%A7%84/fUEP0djb1hA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'/>
              </div>
            )
          })
        }
      </div>
      <Link className='moreBtn' href="/">더보기</Link>
    </section>
  )
}
export default Discount