import Logo from '/public/image/header/shopify-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
function Header(){
    return(
        <header>
            <div className='headBanner'><Link href="/">7월 한달간 배송비 무료!</Link></div>
            <div className='headCenter'>
                <div className='headLeft'>
                <h1><Link href="/"><Image src={Logo} alt='logo' title='https://worldvectorlogo.com/logo/shopify-logo-2018' style={{width: '84px', height: '100%'}}/></Link></h1>
                <nav className='navbar'>
                    <ul>
                        <li>
                            <Link href="/">전체상품</Link>
                            <ul className='subMenu'>
                                <li><Link href="/">여성신발</Link></li>
                                <li><Link href="/">남성신발</Link></li>
                                <li><Link href="/">아동신발</Link></li>
                                <li><Link href="/">슬리퍼</Link></li>
                            </ul>
                        </li> 
                        <li><Link href="/">인기상품</Link></li> 
                        <li><Link href="/">이달의 상품</Link></li> 
                        <li><Link href="/">할인상품</Link></li> 
                        <li><Link href="/">이벤트</Link></li> 
                    </ul>
                </nav>
                </div>
                <div className='headRight'>
                <nav className='navbar'>
                    <ul>
                        <li><Link href="/">로그인</Link></li> 
                        <li><Link href="/">마이페이지</Link></li> 
                        <li><Link href="/">검색</Link></li> 
                        <li><Link href="/">장바구니함</Link></li> 
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    )
}
export default Header