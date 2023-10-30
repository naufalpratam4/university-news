import React, { useState } from "react";
import { Form } from "react-bootstrap";

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Form.Group controlId="datepicker">
      <Form.Label>Select Date</Form.Label>
      <Form.Control
        type="date"
        value={selectedDate}
        onChange={(e) => handleDateChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default MyDatePicker;
