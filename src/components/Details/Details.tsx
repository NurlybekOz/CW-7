interface  Item {
    name: string,
    count: number,
    price: number,
}

interface DetailsProps {
    item: Item,
    index: number,
    onDelete: () => void,
}

const Details: React.FC<DetailsProps> = ({item, index, onDelete}) => {
    return (
        item.count > 0 && (
            <div key={index} className='detail'>{item.name} <span>x{item.count} {item.price * item.count} KGS<button onClick={onDelete}>X</button></span></div>
        )
    )
}
export default Details;