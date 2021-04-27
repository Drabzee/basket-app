import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <NavLink to="/" exact>All</NavLink> | {" "}
      <NavLink to="/pending" exact>Pending</NavLink> | {" "}
      <NavLink to="/purchased" exact>Purchased</NavLink>
    </footer>
  )
}

export default Footer
