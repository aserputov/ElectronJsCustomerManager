import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import Nav from "react-bootstrap/Nav";
import LogItem from "./LogItem";
import AddLogItem from "./AddLogItem";
import { ipcRenderer } from "electron";
const App = () => {
  const [logs, setLogs] = useState([]);
  const [alert, SetAlert] = useState({
    show: false,
    message: "",
    variant: "success",
  });
  useEffect(() => {
    ipcRenderer.send("logs:load");
    ipcRenderer.on("logs:get", (e, logs) => {
      setLogs(JSON.parse(logs));
    });

    ipcRenderer.on("logs:clear", () => {
      setLogs([]);
      showAlert("Logs Cleared");
    });
  }, []);

  function addItem(item) {
    if (item.text === "" || item.phone === "") {
      showAlert("Please Enter All the Field", "danger");
      return false;
    }
    // item._id = 1;
    // item.created = new Date().toString()
    // setLogs([...logs,item])
    ipcRenderer.send("logs:add", item);
    showAlert("Log Added");
  }

  function deleteItem(_id) {
    // setLogs(logs.filter((item)=> item._id !== _id))
    ipcRenderer.send("logs:delete", _id);
    showAlert("Log Removed");
  }

  function showAlert(message, variant = "success", seconds = 3000) {
    SetAlert({
      show: true,
      message,
      variant,
    });
    setTimeout(() => {
      SetAlert({
        show: false,
        message: "",
        variant: "success",
      });
    }, seconds);
  }
  return (
    <Container>
      <br />
      
      <h1 align="center">Sweezard. Inc</h1>
      <p align="center">Add Customers Application</p>
      <AddLogItem addItem={addItem} />
      <br />
      {alert.show && <Alert variant={alert.variant}>{alert.message}</Alert>}
      <p>
        Admin: <strong style={{ color: "Red" }}> Kirill Serputov</strong>
      </p>
      <Table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Name </th>
            <th>Phone</th>
            <th>Date</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem key={log._id} log={log} deleteItem={deleteItem} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
