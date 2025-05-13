interface IProps {
    openModalCart: boolean
}

const OffCanvasOverlay = ({ openModalCart } : IProps) => {
    return (
        <div className={`offcanvas-overlay ${openModalCart ? 'block' : 'hidden' }`}></div>
    )
}

export default OffCanvasOverlay;