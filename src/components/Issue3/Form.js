import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
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
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: `${theme.spacing.unit}px 0`
  }
});

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user1: "",
      user2: "",
      value: "User1",
      response: [],
      isOpened: false,
      reqT: [],
      reqK: [],
      formErrors: { user1: "", user2: "" },
      user1Valid: false,
      user2Valid: false,
      formValid: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handChange = this.handChange.bind(this);
  }

  componentDidMount() {}
  handChange = event => {
    console.log(event.target.value);
    this.setState({ value: event.target.value });
  };

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
    let user1Valid = this.state.user1Valid;
    let user2Valid = this.state.user2Valid;
    switch (fieldName) {
      case "user1":
        user1Valid = value.match(/^0.[1-3]$/gi);
        fieldValidationErrors.user1 = user1Valid
          ? ""
          : "  Value Is invalid, only digits!!!";
        break;
      case "user2":
        user2Valid = value.match(/^0.[1-3]$/gi);
        fieldValidationErrors.user2 = user2Valid
          ? ""
          : "  Value Is invalid, only digits!!!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        user1Valid: user1Valid,
        user2Valid: user2Valid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid: this.state.user1Valid && this.state.user2Valid
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = {
      user1: this.state.user1,
      user2: this.state.user2,
      value: this.state.value
    };
    axios.post(`http://localhost:4200/issue3`, data).then(res => {
      console.log(res);
      const response = res.data;
      const { isOpened } = this.state;
      this.setState({
        response,
        isOpened: !isOpened,
        user1: "",
        user2: "",
        position: "User1"
      });
    });
  }

  render() {
    const { classes } = this.props;
    const { response, isOpened } = this.state;
    return (
      <div className={classes.div}>
        <form
          id="myForm"
          className={classes.container}
          onSubmit={this.handleSubmit}
        >
          <div>
            <h3>
              <FormErrors formErrors={this.state.formErrors} />
            </h3>
          </div>
          <div>
            <div className={classes.div}>
              <TextField
                id="tf1"
                label="User-1 Level"
                className={classes.textField}
                type="text"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                name="user1"
                value={this.state.temp}
                required
                ref="u1"
              />
            </div>
            <div className={classes.div}>
              <RadioGroup
                aria-label="gender"
                name="gender2"
                className={classes.group}
                value={this.state.value}
                onChange={this.handChange}
              >
                <FormControlLabel
                  value="User1"
                  control={<Radio color="primary" />}
                  label="User-1 TheFirst"
                  labelPlacement="start"
                />
                <FormControlLabel
                  value="User2"
                  control={<Radio color="primary" />}
                  label="User-2 The First"
                  labelPlacement="start"
                />
              </RadioGroup>
            </div>
            <div className={classes.div}>
              <TextField
                id="tf2"
                label="User-2 Level"
                className={classes.textField}
                type="text"
                margin="normal"
                variant="outlined"
                onChange={this.handleChange}
                name="user2"
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
          </div>
        </form>
        {isOpened && response && (
          <div>
            {this.state.response.map(elem => (
              <ul key={elem.key}>
                <h3>The Best Stap for {elem.key}</h3>
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
