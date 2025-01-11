interface  Item {
    name: string,
    count: number,
    price: number,
    image: string,
}

interface ItemsProps {
    index: number,
    item: Item,
    onAdd: () => void,
}

const Items: React.FC<ItemsProps> = ({item, index, onAdd}) => {
    return (
        <button className='item' key={index} onClick={onAdd}><img src={item.image} alt={item.name}/><strong>{item.name}
            <br/> Price: {item.price} KGS</strong></button>
    )
}
export default Items;