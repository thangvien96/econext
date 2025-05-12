const BreadCrumArea = ({ title }: {
    title: string
}) => {
    return (
        <div className="breadcrumb-area hidden-lg hidden-sm hidden-md">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row breadcrumb_box  align-items-center">
                            <div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-start">
                                <h2 className="breadcrumb-title">{title.toUpperCase()}</h2>
                            </div>
                            <div className="col-lg-6  col-md-6 col-sm-12">
                                
                                <ul className="breadcrumb-list text-center text-md-end">
                                    <li className="breadcrumb-item"><a href="index.html">Trang chủ</a></li>
                                    <li className="breadcrumb-item active">{title.toUpperCase()}</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumArea;