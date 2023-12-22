import "./App.css";
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import SignUp from "./components/Signup/Signup";
import Login from "./pages/Login/Login";
// 마이페이지
import Mypage from "./components/Mypage/Mypage";

function App() {
  const [userData, setUserData] = useState(null);

  const handleSignUp = (data) => {
    // SignUp 컴포넌트에서 전달받은 회원가입 정보를 상태에 저장
    setUserData(data);
  };
  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<HomePage  />} />
            <Route path="/signup" element={<SignUp />} />
            
            {/* 정보 받아서 마이페이지 보내주는..? */}
            {/* <Route path="/signup" element={<SignUp onSignUp={handleSignUp}/>} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/mypage" element={<Mypage />} />

            {/* signup 정보 받아서  마이페이지 나타내기..? */}
            <Route path="/mypage" element={userData && <Mypage userData={userData} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
