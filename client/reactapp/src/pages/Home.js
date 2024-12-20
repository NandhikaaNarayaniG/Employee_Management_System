import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfEmp, setListOfEmp] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/employee").then((response) => {
      setListOfEmp(response.data);
    });
  }, []);

  return (
    <div>
      {listOfEmp.map((value, key) => {
        return (
          <div className="post">
            <div className="name"> {value.name} </div>
            <div className="emploeeID">{value.employeeID}</div>
            <div className="email">{value.email}</div>
            <div className="phone"> {value.phone} </div>
            <div className="department">{value.department}</div>
            <div className="dateOfJoining">{value.dateOfJoining}</div>
            <div className="role">{value.role}</div>
          </div>
        );
      })}
    </div>

  );
}

export default Home;
