export default function Login() {
  return (
    <section>
      <h1>로그인</h1>
      <section>
        <form id="login">
          <label>ID </label>
          <input type="text" name="email" placeholder="ID" />
          <br />

          <label>Password </label>
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요"
          />
          <section>
            <button type="submit" name="로그인" form="login">
              로그인
            </button>
          </section>
        </form>
      </section>
    </section>
  );
}
