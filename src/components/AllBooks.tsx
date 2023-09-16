import { Link } from "react-router-dom";
import { useGetBookQuery } from "../redux/features/Books/bookApi";

export default function AllBooks() {
  const { data, error, isLoading } = useGetBookQuery(undefined);
  // console.log(data.id)
  console.log(error), console.log(isLoading);
  console.log(data);
  interface Book {
    _id: string
    title: string;
    author: string;
    genre: string;
    image: string;
    publicationDate: string;
  }
  
  return (
    <div>
      <div className="">
        <h2 className="text-center font-bold my-3">AllBooks</h2>
      </div>
     
      <div
       className=" col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:w-auto">
        {data?.data?.map((book: Book) => (
          <div>
            <div className="card w-76 bg-base-100 shadow-xl ">
              <figure className="px-10 pt-10">
              <Link to={`/book-details/${book?._id}`}>
                <img src={book.image} alt="" className="rounded-xl w-full h-60" />
                </Link>
              </figure>
              <div className="card-body items-center text-center">
                <h6 className="card-title">Title: {book.title}</h6>
                 <small>Author: {book.author}</small>
                 <small><p>Genre: {book.genre}</p></small>
                <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
