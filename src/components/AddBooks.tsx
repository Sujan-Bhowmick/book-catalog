import { useForm, SubmitHandler } from "react-hook-form";
import { useCreateBookMutation } from "../redux/features/Books/bookApi";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

interface IFormInput {
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
}

export default function AddBooks() {

  const [createBook, {error, isLoading}] = useCreateBookMutation();
  console.log(error)
  console.log(isLoading)

  const navigate = useNavigate();
  // const fetchBooks = useGetBookQuery(undefined);

  const { register, handleSubmit, reset} = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async(data: IFormInput) =>{
    console.log(data);
    try {
      await createBook(data).unwrap();
      toast.success('Book added successfully!', {
        position: 'top-right',
        autoClose: 3000, 
      });

      navigate("/book")
      // fetchBooks.refetch()
      reset();
    } catch (error) {
      toast.error('An error occured', {
        position: 'top-right',
        autoClose: 3000, 
      });
      console.error('Error creating post:', error);
    }
  }

  return (
    <div className="font-bold text-center my-3">
      AddBooks
   
    <div className="flex my-5 justify-center ">
        <div className="w-96">
      <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col ">
          
        <input className="my-1 input input-bordered"{...register('title', { required: true, maxLength: 20 })}  placeholder="title" />
        <input  className="my-1 input input-bordered" {...register("author")} placeholder="author" />
        <input  className="my-1 input input-bordered" type="string" {...register("genre")} placeholder="genre"/>
        <input  className="my-1 input input-bordered" {...register("image", )} placeholder="image" />
        <input  className="my-1 input input-bordered" {...register("publicationDate")} placeholder="publicationDate" />
        <input className="btn my-2" type="submit" />
      </form>
      </div>
    </div>
    </div>
  );
}
