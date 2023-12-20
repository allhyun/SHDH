// import "./Mainpage.scss"


export default function MainPage_HeadNav() {
  return(
    <>
     <header className="mainheader">
      <div>
       <section>
          <div>회원가입</div>
          <div>로그인</div>
       </section>

      </div>
      <div className="Head">
        <h1>쇼핑몰 명</h1>
        <div className="Head_1">
         <form>
          <input type="text"  placeholder="검색어를 입력하시오"/>
          <button>검색</button>
         </form>
        </div>
        <div>
          <p>찜목록</p>
          <p>장바구니</p>
          <p>마이페이지</p>
        </div>

      </div>
      <nav >
        <ul>
          <li>카테고리1</li>
          <li>카테고리2</li>
          <li>카테고리3</li>
          <li>카테고리4</li>
        </ul>
      </nav>
     </header>
    </>
  )
}