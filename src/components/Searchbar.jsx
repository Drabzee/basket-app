import { connect } from "react-redux";
import { updateFilterText } from "../redux/actions";

const Searchbar = ({ filterText, updateFilterText }) => {
  return (
    <nav>
      <input
        value={filterText}
        onChange={(e) => updateFilterText(e.target.value)}
        type="text"
        placeholder="filter for e.g. Apple" />
    </nav>
  );
};

const mapStateToProps = (state) => ({
  filterText: state.filterText,
});

const mapDispatchToProps = (dispatch) => ({
  updateFilterText: (text) => dispatch(updateFilterText(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
