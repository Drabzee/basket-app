import { connect } from "react-redux";
import { emptyBasket } from '../redux/actions';

const ItemsList = ({ title, icon, list, type, itemsList, onClickHandler, emptyBasket }) => {
  return (
    <div className="items-list">
      <h3>
        <i className={`fa fa-${icon}`}></i> {' '}
        {title}
        {type === 'remove' && <i onClick={emptyBasket} className="fa fa-trash"></i>}
      </h3>
      <ul className={`list-item-${type}`}>
        {Object.keys(list).length ? Object.keys(list).map((id) => {
          return (
            <li className={list[id].isPurchased ? 'striked' : ''} key={id} onClick={() => onClickHandler(id)}>{`${
              list[id].count ?? ""
            } ${itemsList[id]}`}</li>
          );
        }) : <li>Your list is empty!</li>}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  itemsList: state.itemsList,
});

const mapDispatchToProps = dispatch => ({
  emptyBasket: () => dispatch(emptyBasket())
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
