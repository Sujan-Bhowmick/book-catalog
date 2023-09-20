import { Link } from "react-router-dom";
import { useGetBookQuery } from "../redux/features/Books/bookApi";
import { useAppSelector } from "../redux/hooks";

export default function AllBooks() {

  interface Book {
    _id: string
    title: string;
    author: string;
    genre: string;
    image: string;
    publicationDate: string;
  }
  

  const  { data, error, isLoading } = useGetBookQuery(undefined);
  console.log(error), console.log(isLoading);
  console.log(data);

  const {search} = useAppSelector((state) => state.book);

  let products = []
  
  if (data?.data?.length && search) {
    // Convert the search term to lowercase for case-insensitive comparison
    const searchLowerCase = search.toLowerCase();
    products = data?.data?.filter((item: Book) =>
      // Check if any field contains the search term
      Object.values(item).some((value) => typeof value === "string" &&
        value?.toLowerCase().includes(searchLowerCase)
      )
    );
  } else {
    // Handle the case when there's no search or data
    products = data?.data || [];
  }
  console.log(products)
  return (
    <div>
      <div className="">
        <h2 className="text-center font-bold my-3">AllBooks</h2>
      </div>
     
      <div
       className=" col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:w-auto">
        {products?.map((book: Book) => (
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
