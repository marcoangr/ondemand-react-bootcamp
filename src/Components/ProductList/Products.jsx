import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import PaginationControls from "../Controls/Pagination";

export default function Products({ products , pages, setCurrentPage, currentPage}) {
  return products?.length > 0 ? (
    <section className="main-content">
      <FeaturedProducts data={products} parent={"list"} />
      <PaginationControls
      pages={pages}
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      />
    </section>
  ) : (
    <section className="main-content">
      <div className="no-data-found">Ooops! No data was found</div>
    </section>
  );
}
