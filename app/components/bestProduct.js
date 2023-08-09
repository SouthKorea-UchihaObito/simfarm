'use client'
import Image from 'next/image'
import axios from 'axios'
let bestArr = [
    {id : 0, name : "Pink Shoes", price :"59,000" },
    {id : 1, name : "Green Shoes", price :"49,000" },
    {id : 2, name : "Black Shoes", price :"69,000" },
    {id : 3, name : "All Red Shoes", price :"89,000" },
    {id : 4, name : "Siple red Shoes", price :"49,000" }
  ]
function BestProduct(){
  return(
    <section className='section2'>
      <div className='sectionTitle'>
        <h2>Best Product</h2>
        <div className='cardFilter'>
          <button className='active'>가격 높은순</button>
          <button>가격 낮은순</button>
          <button>높은 리뷰순 </button>
          <button>낮은 리뷰순</button>
        </div>
      </div>
      <div className='cardItem'>
        {
          bestArr.map((a, i)=>{
            return(
              <div className='card' key={i}>
                <Image src={require("/public/image/main/bestProduct/shoes" + i + ".png")} alt={a.name}/>
                <h4>{a.name}</h4>
                <span>{a.price}원</span>
              </div>
            )
          })              
        }
        <button onClick={()=>{
          fetch('/api/test', {
            method : "GET",
          }).then((r)=>{
            if(r.status === 200){
              return r.json()
            } else {

            }
          }).then((result)=>{
            
          })
        }}>ajax 요청</button>
      </div>
    </section>
  )
}
export default BestProduct