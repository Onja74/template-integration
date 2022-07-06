import BoutonType from "../components/BoutonType";
import "./style.css";

export function EmployeeList(props) {
  const { items } = props; const { getId } = props; const { boolMod } = props; const { boolAdd } = props;

  const ClickEvent = event => {
    const id = event.currentTarget.getAttribute("data-rowid");
    getId(id - 1);
    boolMod();
  };

  return (
    <div className="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns">
      <div className="dataTable-top">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5">5</option>
              <option value="10" selected="">
                10
              </option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <BoutonType defComponent="ADD INFO" defClass="btn_type" defFunction={boolAdd} />

        </div>
      </div>
      <div className="dataTable-container">
        <table className="table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {(items || []).map((item) => (              
              <tr key={item.name} data-rowid={item.id} onClick={ClickEvent} className='click'>
                <td>{item.name}</td>
                <td>{item.address.city}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="dataTable-bottom">
        <div className="dataTable-info">Showing 1 to 10 of 57 entries</div>
        <nav className="dataTable-pagination">
          <ul className="dataTable-pagination-list">
            <li className="active">
              <a href="#" data-page="1">
                1
              </a>
            </li>
            <li className="">
              <a href="#" data-page="2">
                2
              </a>
            </li>
            <li className="">
              <a href="#" data-page="3">
                3
              </a>
            </li>
            <li className="">
              <a href="#" data-page="4">
                4
              </a>
            </li>
            <li className="">
              <a href="#" data-page="5">
                5
              </a>
            </li>
            <li className="">
              <a href="#" data-page="6">
                6
              </a>
            </li>
            <li className="pager">
              <a href="#" data-page="2">
                ›
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
