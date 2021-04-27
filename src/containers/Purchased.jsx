import { connect } from 'react-redux';
import ItemsList from '../components/ItemsList';
import { toggleItemPurchase } from '../redux/actions';

const Pending = ({basketList, toggleItemPurchase}) => {
  const pendingBasketList = {};
  for(let id in basketList) {
    if(basketList[id].isPurchased) pendingBasketList[id] = basketList[id];
  }

  return (
    <ItemsList
      title = "Basket"
      icon = "shopping-basket"
      list = {pendingBasketList}
      type = "remove"
      onClickHandler = {toggleItemPurchase} />
  )
}

const mapStateToProps = state => ({
  basketList: state.basketList
});

const mapDispatchToProps = dispatch => ({
  toggleItemPurchase: (id) => dispatch(toggleItemPurchase(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Pending)
