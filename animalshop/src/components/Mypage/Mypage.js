import {useState} from 'react';
import { useForm } from "react-hook-form";

const mysql =require('mysql');



export default function Mypage({userData}){

  const [newPassword, setNewPassword]=useState('')
  const [confirmPassword, setConfirmPassword]=useState('')


  const [userId, setUserId] = useState(''); // 어딘가에서 아이디를 받아온다고 가정
  const [userName, setUserName] = useState(''); // 어딘가에서 아이디를 받아온다고 가정
  const [gender, setGender] = useState(''); // 어딘가에서 성별을 받아온다고 가정
  const [address, setAddress] = useState(''); // 어딘가에서 주소를 받아온다고 가정
  const [email, setEmail] = useState(''); // 어딘가에서 이메일을 받아온다고 가정


  const {
    register,
    handleSubmit,
    formState: { errors }, // 상태 알려줌
    // watch,
  } = useForm();

  const onValid = (data) => {
    console.log("성공", data); // 성공했을 때 form에 어떤 게 닮겨있는지 data 매개변수 받아볼 수 있음.
  };

  const onInvaild = (err) => {
    console.log("실패", err); // 왜 실패했는지 보기 위해서 err 매개변수로
  };


  return(
    <>
    <h3> 마이페이지 </h3>
    <form onSubmit={handleSubmit(onValid, onInvaild)}>
      아이디 : {userData.ID} 
      <br/>

      새 비밀번호 : <input 
      type="password"
      placeholder="새 비밀번호"
      value={newPassword}
      onChange={(e)=> setNewPassword(e.target.value)}
      {...register("password", {
        required: "비밀번호는 필수값입니다.",
      })}
      />
      <br/>
      비밀번호 확인: <input 
      type="password"
      placeholder="새 비밀번호 확인"
      value={confirmPassword}
      onChange={(e)=> setConfirmPassword(e.target.value)}
      {...register("password", {
        required: "비밀번호는 필수값입니다.",
      })}
      />
      <br/>

      이름 : {userData.username}
      <br/>

      성별 : {userData.gender}
      <br/>

      주소 : {userData.address}
      <br/>

      이메일: {userData.email}
      <br/>


    </form>
    </>
  )
}