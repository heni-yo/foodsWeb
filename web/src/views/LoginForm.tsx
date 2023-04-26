import { useState } from "react";
import { useLoginUserMutation } from "../gql/graphql";

const LoginForm = () => {
  const [, login] = useLoginUserMutation();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const subHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login({ data: form });
    console.log(res);
  };
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <form onSubmit={subHandler}>
      <input
        onChange={changeHandler}
        name="email"
        value={form.email}
        type="email"
      />
      <input
        onChange={changeHandler}
        name="password"
        value={form.password}
        type="password"
      />
      <button>submit</button>
    </form>
  );
};

export default LoginForm;
