import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "../redux/hooks";
import { createUser } from "../redux/features/user/userSlice";

interface IFormInput {
  email: string;
//   name: string;
  password: string;
}

export default function Signup() {
 
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
    dispatch(createUser({email: data.email, password: data.password}))
    console.log(data);
}
 
  return (
    <div className="">
      <div className="text-center font-bold my-3">Signup</div>
      <div className="flex justify-center">
        <form className="flex flex-col w-96 " onSubmit={handleSubmit(onSubmit)}>
          <input
            className="my-1 input input-bordered"
            placeholder="email"
            {...register("email", { required: true, maxLength: 20 })}
          />
          {/* <input
            className="my-1 input input-bordered"
            placeholder="name"
            {...register("name", { required: true, maxLength: 20 })}
            
          /> */}
          <input
            className="my-1 input input-bordered"
            placeholder="password"
            {...register("password", {required: true  })}
           
          />
          <input className="btn my-2" type="submit" />
        </form>
      </div>
    </div>
  );
}
