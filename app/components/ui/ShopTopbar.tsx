export const ShopTopBar = () => {
    return (
        <div className="shop-top-bar d-flex">
                                
            <p>Tổng 17 sản phẩm</p>
            
            
            <div className="select-shoing-wrap d-flex align-items-center">
                <div className="shot-product">
                    <p>Sắp xếp:</p>
                </div>
                <div className="shop-select">
                    <select className="shop-sort">
                        <option value="1"> Tên A đến Z</option>
                        <option value="2"> Tên Z đến A</option>
                        <option value="3"> Giá thấp đến cao</option>
                        <option value="4"> Giá cao đến thấp</option>
                    </select>

                </div>
            </div>
            
        </div>
    )
}

export default ShopTopBar