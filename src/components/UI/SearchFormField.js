import React, { useRef, useState } from 'react'
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead";

const SearchFormField = (props) => {
  const [selected, setSelected] = useState([]);

  let isInvalid;
  if (selected.length) {
    // isInvalid = selected[0].name === state.name ? false : true;
  }

  const changeHandler = (values) => {
    console.log(values);
    setSelected(values);
    if(values.length > 0){
      props.handleChange(values[0].name, values[0]);
    } else {
      props.handleChange("", {});
    }
  }

  return (
    <Col sm="12">
      <Form.Group className="mb-3">
        <Form.Label htmlFor={props.id}>
          {props.name} (searchBy: {props.searchBy})
        </Form.Label>
        <Typeahead
          id={props.id}
          required={true}
          isInvalid={isInvalid}
          labelKey={props.searchBy}
          onChange={changeHandler}
          options={props.optionItems}
          placeholder={props.placeholder}
          selected={selected}
          paginate={true}
          renderMenuItemChildren={(option) => (
            <div>
              {option[props.searchBy]}
              <div>
                <small>{Object.entries(option).map((x,y) => `${x} : ${y}`).join(" | ")}</small>
              </div>
            </div>
          )}
        />
        <Form.Control.Feedback type="invalid">
          {props.error}
        </Form.Control.Feedback>
      </Form.Group>
    </Col>
  );
}

export default SearchFormField;


SearchFormField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  options: PropTypes.array,
  optionalFunc: PropTypes.func,
  optionalNumber: PropTypes.number,
  optionalObject: PropTypes.object,
  optionalSymbol: PropTypes.symbol,
};