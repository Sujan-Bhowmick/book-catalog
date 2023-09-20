

import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { loginUser } from "../redux/features/user/userSlice";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const dispatch = useAppDispatch();
 
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data:IFormInput) => {
    dispatch(loginUser({email:data.email, password: data.password}))
    console.log(data);
}
 
  return (
    <div className="">
      <div className="text-center font-bold my-3">Login</div>
      <div className="flex justify-center">
        <form className="flex flex-col w-96 " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="my-1 input input-bordered"
            {...register("email", { required: true, maxLength: 20 })}
            placeholder="email"
          />
          <input
            className="my-1 input input-bordered"
            {...register("password", {required: true  })}
            placeholder="password"
          />
          <input className="btn my-2" type="submit" />
        </form>
      </div>
    </div>
  );
}

