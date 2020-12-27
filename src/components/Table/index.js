import React, { useState } from "react";
import { Table } from "reactstrap";
import { Doctor } from "../../layout/Search/Data";
import Cards from "../Card/index";


const Index = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(true);
  };

  return (
    <>
      <Table dark>
        <thead>
          <tr>
            <th>Jam</th>
            <th>Senen</th>
            <th>Selasa</th>
            <th>Rebo</th>
            <th>Kemis</th>
            <th>Jumat</th>
            <th>Sabtu</th>
            <th>Minggu</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <th scope="row">06.00 AM</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <th scope="row">08.00 AM</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>minjul</td>
          </tr>

          <tr>
            <th scope="row">10.00 AM</th>
            {Doctor.filter((item) => {
              if (item.id === 2) {
                return item;
              } else {
                return null;
              }
            }).map((item) => {
              return (
                <td
                  key={item.id}
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                >
                  {item.patient.name}
                </td>
              );
            })}
            <td>minjul</td>
            <td>minjul</td>
          </tr>

          <tr>
            <th scope="row">12.00 AM</th>
            <td>minjul</td>
            <td>minjul</td>
          </tr>

          <tr>
            <th scope="row">14.00 PM</th>
            <td>minjul</td>
            <td>minjul</td>
          </tr>

          <tr>
            <th scope="row">16.00 PM</th>
            <td></td>
            <td>minjul</td>
          </tr>

          <tr>
            <th scope="row">18.00 PM</th>
            <td></td>
            <td></td>
            <td>minjul</td>
          </tr>

          <tr>
            <th scope="row">20.00 PM</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>minjul</td>
          </tr>
          <tr>
            <th scope="row">21.00 PM</th>
            <td></td>
            <td>minjul</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      {toggle && <Cards />}
    </>
  );
};

export default Index;
