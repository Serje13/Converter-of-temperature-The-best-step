import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import FormErrors from "./FormErrors";

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  div: {
    display: "flex"
  },
  margin: {
    margin: theme.spacing.unit
  },
  main: {
    marginLeft: "20px"
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: "",
      key: "",
      response: [],
      isOpened: false,
      reqT: [],
      reqK: [],
      formErrors: { temp: "", key: "" },
      tempValid: false,
      keyValid: false,
      formValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {}

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let tempValid = this.state.tempValid;
    let keyValid = this.state.keyValid;
    switch (fieldName) {
      case "temp":
        tempValid = value.match(/^\d{1,9}$/gi);
        fieldValidationErrors.temp = tempValid
          ? ""
          : "  Temperature Is invalid, only numbers!!!";
        break;
      case "key":
        keyValid = value.match(/^[CFK]|[cfk]$/gi);
        fieldValidationErrors.key = keyValid
          ? ""
          : "  Key Is Invalid !! Only C,F,K or c,f,k!!!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        tempValid: tempValid,
        keyValid: keyValid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({ formValid: this.state.tempValid && this.state.keyValid });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      temp: this.state.temp,
      key: this.state.key
    };
    axios.post(`http://localhost:4200`, data).then(res => {
      console.log(res.data.strToJson[0]);
      console.log(res.data.strToJson[1]);
      const response = res.data.strToJson;
      const { temp: reqT } = res.data;
      const { key: reqK } = res.data;
      const { isOpened } = this.state;
      this.setState({
        response,
        isOpened: !isOpened,
        reqT,
        reqK,
        temp: "",
        key: ""
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { response, isOpened, reqT, reqK } = this.state;
    return (
      <div className={classes.div}>
        <form
          className={classes.container}
          onSubmit={this.handleSubmit}
          id="myForm"
        >
          <div>
            <div className={classes.div}>
              <TextField
                id="tf1"
                label="Temperature (Number)"
                className={classes.textField}
                type="text"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                name="temp"
                value={this.state.temp}
                required
                ref="tmp"
              />
            </div>
            <div className={classes.div}>
              <TextField
                id="tf2"
                label="Key (C, F, K)"
                className={classes.textField}
                type="text"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                name="key"
                value={this.state.key}
                required
              />
            </div>
            <div className={classes.div}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                color="primary"
                className={classes.margin}
                disabled={!this.state.formValid}
              >
                Get Result
              </Button>
            </div>
            <div className={classes.div}>
              <h3>
                <FormErrors formErrors={this.state.formErrors} />
              </h3>
            </div>
          </div>
        </form>
        {isOpened && reqT && reqK && (
          <div>
            <h3>
              Request value: {reqT}
              {reqK}
            </h3>
          </div>
        )}
        {isOpened && response && (
          <div>
            {this.state.response.map(elem => (
              <ul key={elem.key}>
                <h3>Result:</h3>
                <h3>
                  <li>
                    {elem.key}:{elem.value}
                  </li>
                </h3>
              </ul>
            ))}
          </div>
        )}
      </div>
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Form);
