import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Moment from "react-moment";
const LogItem = ({
  deleteItem,
  log: { _id, __v, language, phone, comment, text, created },
}) => {
  const setVariant = () => {
    if (language === "ru") {
      return "danger";
    } else if (language === "en") {
      return "warning";
    } else {
      return "success";
    }
  };
  return (
    <tr>
      <td>
        <Badge variant={setVariant()}>{language}</Badge>
      </td>
      <td>{text}</td>
      <td>{phone}</td>
      <td>
        <Moment format="MMMM Do YYYY">{new Date(created)}</Moment>
      </td>
      <td
        style={{
          backgroundColor: "#ffff52",
          color:"black",
          margin: 5,
          borderRadius: 20,
          fontFamily:  "cursive",
          fontSize: 17,
          // opacity: 0.7,
        }}
      >
        {comment}
      </td>
    </tr>
  );
};

export default LogItem;
