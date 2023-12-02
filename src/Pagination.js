import { Link } from 'react-router-dom';

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex space-x-2 justify-center mb-10 mt-10">
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link onClick={() =>paginate(number)} to="!#">
                {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
