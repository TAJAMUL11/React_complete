import PropTypes from 'prop-types';

function List(props){
   const category = props.category;
   const items = props.items;
    // Sort the list
    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //Alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name));  // Reverse alphabetical order
    // fruits.sort((a, b) => a.calories - b.calories);  //  ascending order 0 -1
    // fruits.sort((a, b) => b.calories - a.calories);  //  Descending order 1 - 0
    const listItems  = items.map( item => <li key = {item.id}>
                                                        {item.name}:&nbsp;
                                                         {item.calories}</li>)
    return (
            <>
                <h2 className = "Header">{category}</h2>
                <ul className = "list">{listItems}</ul>
            </>);
}
List.defaultProps = {
    category : "Category",
    items : [],
}
List.propTypes = {
    category : PropTypes.string,
    items : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.number,
        name : PropTypes.string,
        calories : PropTypes.number,
    }))
    
}

export default List;