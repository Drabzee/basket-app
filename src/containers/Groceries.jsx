import { connect } from 'react-redux';
import ItemsList from "../components/ItemsList";
import { addToBasket } from '../redux/actions';

const Groceries = ({itemsList, filterText, addToBasket}) => {

  let filteredList = {};
  if(filterText !== '') {
    for(let id in itemsList) {
      if(itemsList[id].toLowerCase().includes(filterText.toLowerCase())) filteredList[id] = itemsList[id];
    }
  } else filteredList = itemsList;

  return (
    <ItemsList icon="leaf" title="Groceries" list={filteredList} type="add" onClickHandler={addToBasket} />
  )
}

const mapStateToProps = state => ({
  itemsList: state.itemsList,
  filterText: state.filterText
});

const mapDispatchToProps = dispatch => ({
  addToBasket: (id) => dispatch(addToBasket(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Groceries)
