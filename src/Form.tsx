import { useState } from "react";
import DatePicker from "react-datepicker";
import MaskedTextInput from "react-text-mask";

const DateInput = () => {
  return (
    <div className="line_form">
      <div className="label">Дата народження</div>
      <MaskedTextInput
        mask={[/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]}
        placeholder="Введіть дату народження"
        guide={false}
        className="input"
        name="birthbay"
        type="text"
      />
      <div className="error_text">Введіть правильну дату</div>
    </div>
  );
};

const DatePickerInput = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        if (!date) {
          return;
        }

        setStartDate(date);
      }}
      customInput={<DateInput />}
    />
  );
};

const NameInput = () => {
  return (
    <div className="line_form">
      <div className="label">Ім'я</div>
      <input type="text" className="input" name="name"></input>
    </div>
  );
};

const Form = () => (
  <>
    <DatePickerInput />
    <NameInput />
  </>
);

export default Form;
