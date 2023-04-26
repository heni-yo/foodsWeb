import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../gql/graphql";

const RegisterForm = () => {
  const navigate =useNavigate()
  const [,register]= useCreateUserMutation()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const subHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await  register({data:form})
    navigate('/')
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
        name="name"
        value={form.name}
        type="text"
      />
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

export default RegisterForm;
