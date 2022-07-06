import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Breadcrumb } from "./components/Breadcrumb";
import { EmployeeList } from "./table";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { faker } from "@faker-js/faker";
import { useState, useEffect } from "react";
import axios from 'axios';
import PutRequest from "./putRequest"
import PostRequest from "./postRequest"

function App() {

  const [list, setList] = useState([]);
  const [modif, setModif] = useState(false);
  const [add, setAdd] = useState(false);
  const [idSelected, setIdSelected] = useState(1);

  const selectId = (value)=>{
      setIdSelected(value);
  }

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/users"
    })
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setList]);
  
  const employees = list;

  const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");

  function toggleSidebarClass() {
    setSidebarClass(
      sidebarClass.includes("toggled")
        ? "sb-nav-fixed"
        : "sb-nav-fixed sb-sidenav-toggled"
    );
  }

  function EditingFunction() {
    modif ? setModif(false) : setModif(true);
  }

  function AddFunction() {
    add ? setAdd(false) : setAdd(true);
  }

  //console.log(idSelected);

  return (
    <div className={sidebarClass}>
      <Navbar toggleSidebarClass={toggleSidebarClass} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              <Breadcrumb />
              <Card>
                DataTables is a third party plugin that is used to generate the
                demo table below. For more information about DataTables, please
                visit the
                <a target="_blank" href="https://datatables.net/">
                  official DataTables documentation
                </a>
                .
              </Card>
              <Card title="DataTable Example">
                <EmployeeList items={employees} boolAdd={AddFunction} boolMod={EditingFunction} selectId={selectId}/>
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      {modif ? <PutRequest donnee={employees} boolMod={EditingFunction} id={idSelected}/> : <div></div>}
      {add ? <PostRequest donnee={employees} boolMod={AddFunction} /> : <div></div>}
    </div>
  );
}
export default App;
