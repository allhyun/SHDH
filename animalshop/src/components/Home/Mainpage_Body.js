import "./MainPage_HeadNav.scss"


export default function Mainpage_Body(){
  return(
    <>
    <div className="main_body">
       <div className="bodyban_1"> 
         <div>메인 슬라이드 배너공간</div>
         <div className="slide_1">메인 슬라이드 목록??
         <br/>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>

     </div>
     <hr/>
     <div className="bodyban_2">
      <div>추천 상품 공간</div>
      <div className="slide_2"> 추천 상품 슬라이드 목록??
      <br/>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
       </div>
       </div>

       <hr/>
       <div className="bodyban_3">
      <div >베스트 상품 공간</div>
      <div className="slide_3"> 베스트 상품 슬라이드 목록??
      <br/>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
       </div>
       
     </div>
     </div>
    </>
  )
}