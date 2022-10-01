import React from "react";
import { BiCreditCard } from "react-icons/bi";
import { AiOutlinePieChart } from "react-icons/ai";
import { BsWindowDock } from "react-icons/bs";
import { BiCreditCardFront } from "react-icons/bi";
import { Row, Col } from "react-bootstrap";

const Bank = () => {
  const boites = [
    { icon: <BiCreditCard />, balance: "$143,624", text: "Your bank balance" },
    {
      icon: <AiOutlinePieChart />,
      balance: "$658,456",
      text: "Your bank balance",
    },
    { icon: <BsWindowDock />, balance: "7", text: "employees working today" },
    {
      icon: <BiCreditCardFront />,
      balance: "$3,287.49",
      text: "This week's card spending",
    },
  ];
  return (
    <div className="info">
      {boites.map((boite) => {
        return (
          <div className="info-boite">
            {boite.icon}
            <h5>{boite.balance}</h5>
            <h6>{boite.text}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Bank;
