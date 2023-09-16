
import { useParams } from 'react-router-dom'
import { useGetBookByIdQuery } from '../redux/features/Books/bookApi';

export default function BookDetails() {
    const {id } = useParams();

    const {data: book, isLoading, error} = useGetBookByIdQuery(id);
    console.log(isLoading)
    console.log(error)
    console.log(book)
  return (
    <div>
    <div className='text-center font-bold'>BookDetails</div>
    <div className=" col-span-9 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full lg:w-auto">
      <div>
        <div className="card w-76 bg-base-100 shadow-xl ">
          <figure className="px-10 pt-10">
            <img src={book?.data?.image} alt="" className="rounded-xl w-full h-60" />
          </figure>
          <div className="card-body items-center text-center">
            <h6 className="card-title">Title: {book?.data?.title}</h6>
             <small>Author: {book?.data?.author}</small>
             <small><p>Genre: {book?.data?.genre}</p></small>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  )
}
