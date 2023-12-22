import "./MainPage_HeadNav.scss"
import { Link } from "react-router-dom";

export default function MainPage_HeadNav() {
  return (
    <>
      <header className="mainheader">
        <div>
          <section>
            <div>
              <Link to="/signup">회원가입</Link>
            </div>
            <div>
              <Link to="/login">로그인</Link>
            </div>
          </section>
        </div>
        <div className="Head">
          <h1>쇼핑몰 명</h1>
          <div className="Head_1">
            <form>
              <input type="text" placeholder="검색어를 입력하시오" />
              <button>검색</button>
            </form>
          </div>
          <div className="Head_2">
            <p>찜목록</p>
            <p>장바구니</p>
            <div>
              <Link to="/mypage">마이페이지</Link>
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>카테고리1</li>
            <li>카테고리2</li>
            <li>카테고리3</li>
            <li>카테고리4</li>
          </ul>
        </nav>
      </header>
    </>
  );
}
