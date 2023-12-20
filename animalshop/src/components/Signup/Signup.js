import { useForm } from "react-hook-form";

export default function SignUp() {
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

  const genderRegister = register("gender", {
    required: "성별은 필수값입니다.",
  });

  return (
    <>
      <h4>회원가입 페이지</h4>
      {/* handleSubmit(onVaild[, onInvalid]) */}
      {/* onValid : 폼을 정상적으로 제출할 수 있는 상태일 때, 실행시킬 함수 */}
      {/* onInValid : (선택값) 폼을 제출할 수 없을 상태일 때, 실행시킬 함수 */}
      <form onSubmit={handleSubmit(onValid, onInvaild)}>
        <input
          type="text"
          placeholder="아이디"
          {...register("ID", {
            required: "아이디는 필수값입니다.",
          })}
        />

        {errors.ID?.message}
        <br />

        <input
          type="text"
          placeholder="비밀번호"
          {...register("password", {
            required: "비밀번호는 필수값입니다.",
          })}
        />
        {errors.ID?.message}
        <br />

        <input
          type="text"
          placeholder="이름"
          {...register("username", {
            required: "이름은 필수값입니다.",
            minLength: {
              value: 2,
              message: "이름은 두 글자 이상 입력해야 합니다.",
            },
          })}
        />
        {errors.username?.message}
        <br />

        <label htmlFor="gender-men">
          <input type="radio" value="남" id="gender-men" {...genderRegister} />
          남
        </label>
        <label htmlFor="gender-women">
          <input
            type="radio"
            value="여"
            id="gender-women"
            {...genderRegister}
          />
          여
        </label>
        {"  "}
        {errors.gender?.message}
        <br />

        <input
          type="text"
          placeholder="휴대폰번호"
          {...register("phonenumber", {
            required: "휴대폰 번호는 필수값입니다.",
          })}
        />
        {errors.username?.message}
        <br />

        <input
          type="text"
          placeholder="이메일"
          {...register("email", {
            required: "이메일은 필수값입니다.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
              message: "올바른 형태의 이메일을 입력해주세요",
            },
            validate: (v) =>
              v.includes("gmail.com") || "gmail로만 가입이 가능합니다.",
          })}
        />
        {errors.email?.message}
        <br />

        <input
          type="text"
          placeholder="주소"
          {...register("address", {
            required: "주소는 필수값입니다.",
          })}
        />
        {errors.address?.message}
        <br />

        <button type="submit">회원가입</button>
      </form>
    </>
  );
}
