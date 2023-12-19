import "./Mainpage.scss"

export default function Header() {
  return(
    <>
     <header>
      <div className="Head">
        <h1>쇼핑몰 명</h1>
        <div>
         <form>
          <input type="text"  placeholder="검색어를 입력하시오"/>
          <button>검색</button>
         </form>

         
        </div>

      </div>
     </header>
    </>
  )
}