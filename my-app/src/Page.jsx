import React, { useState } from "react";
import "./page.css";
function Page() {
  let [cardHolderName, setCardHolderName] = useState("");
  let [cardHolderNumber, setCardHolderNumber] = useState("");
  let [cardHolderMonth, setCardHolderMonth] = useState("");
  let [cardHolderYear, setCardHolderYear] = useState("");
  let [cardHolderCVC, setCardHolderCVC] = useState("");
  let [error, setError] = useState(true);
  let [error1, setError1] = useState(false);

  function handleSubmit() {
    var validateName = /^([A-Za-z]{3, })\s([A-Za-z]{3, })$/;
    if (validateName.test(cardHolderName)) {
      setError(false);
    }
    var regex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    if (regex.test(cardHolderNumber)) {
      setError1(false);
    } else {
      setError1(true);
    }
    if (0 < cardHolderYear < 13 && 0 < cardHolderMonth < 32){
      setError(false);
    }
    else {
      setError(true);
    }
    console.log(cardHolderName);
  }
  return (
    <form className="formPage">
      <label className="input1">
        CARDHOLDER NAME:
        <input
          value={cardHolderName}
          onChange={(e) => {
            setCardHolderName(e.target.value);
          }}
          type="text"
          placeholder="e.g. Lokesh Patidar"
        />
        {error1 ? (
          <label style={{ color: "red", fontSize: 13 }}>
            Enter valid cardholder name
          </label>
        ) : (
          ""
        )}
      </label>
      <label className="input1">
        CARD NUMBER:
        <input
          value={cardHolderNumber}
          onChange={(e) => {
            setCardHolderNumber(e.target.value);
          }}
          type="number"
          placeholder="e.g. 0000 0000 0000 0000"
        />
        {error ? (
          <label style={{ color: "red", fontSize: 13 }}>
            Enter valid card number
          </label>
        ) : (
          ""
        )}
      </label>
      <label className="input2">
        EXP. DATE (MM/YY):
        <div className="input3">
          <input
            value={cardHolderMonth}
            onChange={(e) => {
              setCardHolderMonth(e.target.value);
            }}
            type="number"
            placeholder="MM"
          />
          <input
            value={cardHolderYear}
            onChange={(e) => {
              setCardHolderYear(e.target.value);
            }}
            type="number"
            placeholder="YY"
          />
        </div>
        {error ?
        <label style={{ color: "red", fontSize: 13 }}>
          Enter valid month and year
        </label> : ""}
      </label>
      <label className="input1">
        CVC:
        <input
          value={cardHolderCVC}
          onChange={(e) => {
            setCardHolderCVC(e.target.value);
          }}
          type="number"
          placeholder="e.g 123"
        />
        <label style={{ color: "red", fontSize: 13 }}>Enter valid CVC</label>
      </label>
      <button
        onClick={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
        className="button"
      >
        CONFIRM
      </button>
    </form>
  );
}

export default Page;
