
interface IProps {
    totalPage: number,
    currentPage: number,
    setCurrentpage : (a: any) => void
}

function getVisiblePages(current: number, total: number): (number | string)[] {
  const pages: (number | string)[] = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
    return pages;
  }

  pages.push(1);
  if (current > 4) pages.push('...');

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 3) pages.push('...');

  pages.push(total);
  return pages;
}

const ProductPagination = ({ totalPage, currentPage, setCurrentpage } : IProps) => {
    // const pages = Array.from({ length: totalPage }, (_, i) => i + 1);

    const pages = getVisiblePages(currentPage, totalPage);

    const handlePrevPage = () => {
        if(currentPage > 1){
            setCurrentpage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if(currentPage < totalPage){
            setCurrentpage(currentPage + 1);
        }
    }

    return (
        <div className="pro-pagination-style text-center mb-md-30px mb-lm-30px mt-30px" data-aos="fade-up">
            <ul>
                <li>
                    <a className="prev" onClick={handlePrevPage}><i className="ion-ios-arrow-left"></i></a>
                </li>

                {
                    pages.map((page, index) => (
                        page === '...' ? (
                        <span key={index} className="px-3 py-1 text-gray-400">...</span>
                        ) : (
                        <li key={index}><a className={`mx-1 ${currentPage === page ? 'active' : ''}`} onClick={() => setCurrentpage(page)}>{page}</a></li>)
                    ))
                }
                <li>
                    <a className="next" onClick={handleNextPage}><i className="ion-ios-arrow-right"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default ProductPagination;