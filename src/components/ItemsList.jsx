import { connect } from "react-redux";

const ItemsList = ({ title, icon, list, type, itemsList, onClickHandler }) => {
  return (
    <div className="items-list">
      <h3>
        <i className={`fa fa-${icon}`}></i> {title}
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

const mapStateToProps = (state) => ({
  itemsList: state.itemsList,
});

export default connect(mapStateToProps)(ItemsList);
