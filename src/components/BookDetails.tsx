import { useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetBookByIdQuery,
} from "../redux/features/Books/bookApi";
import { toast } from "react-toastify";

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: book, isLoading, error } = useGetBookByIdQuery(id);
  const [deleteBook] = useDeleteBookMutation();
  console.log(isLoading);
  console.log(error);
  console.log(book);

  // const fetchBooks = useGetBookQuery(undefined);

  const handleDelete = async () => {
    // Display a confirmation dialog
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) {
      // User canceled the delete operation
      return;
    }

    try {
      await deleteBook(id);
      // Show a success toast notification
      toast.success("Book deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      navigate("/book");
      // fetchBooks.refetch()
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  return (
    <div>
      <div className="text-center font-bold">BookDetails</div>
      <div className=" col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:w-auto">
        <div>
          <div className="card w-76 bg-base-100 shadow-xl ">
            <figure className="px-10 pt-10">
              <img
                src={book?.data?.image}
                alt=""
                className="rounded-xl w-full h-60"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h6 className="card-title">Title: {book?.data?.title}</h6>
              <small>Author: {book?.data?.author}</small>
              <small>
                <p>Genre: {book?.data?.genre}</p>
              </small>
              <div className="card-actions">
                <button className="btn bg-base-300">Edit</button>
                {/* <Link to= "/book"> */}
                <button
                  onClick={() => handleDelete()}
                  className="btn bg-base-300"
                >
                  Delete
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
