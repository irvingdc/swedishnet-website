import React, { Component } from "react";
import classes from "./ContactForm.module.css";
import Address from "../Address/Address";
import { contact_white } from "../../images";
import Axios from "axios";

export default class ContactForm extends Component {
  state = {
    form: {
      name: {
        text: "",
        valid: true
      },
      email: {
        text: "",
        valid: true
      },
      phone: {
        text: "",
        valid: true
      },
      message: {
        text: "",
        valid: true
      }
    },
    sending: false
  };

  content = {
    en: {
      name: "NAME:",
      phone: "PHONE:",
      email: "EMAIL:",
      message: "MESSAGE:",
      submit: "SEND MESSAGE",
      sending: "SENDING..."
    },
    sv: {
      name: "NAMN:",
      phone: "TELEFON:",
      email: "E-MAIL:",
      message: "MEDDELANDE:",
      submit: "SKICKA MEDDELANDE",
      sending: "VÄNTA..."
    }
  };

  handleChange = event => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: {
          text: event.target.value,
          valid: true
        }
      }
    });
  };

  defaultState = () => {
    return {
      form: {
        name: {
          text: "",
          valid: true
        },
        email: {
          text: "",
          valid: true
        },
        phone: {
          text: "",
          valid: true
        },
        message: {
          text: "",
          valid: true
        }
      },
      sending: false
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    let { email, message, name, phone } = this.state.form;
    let form = {
      email: { ...email },
      message: { ...message },
      name: { ...name },
      phone: { ...phone }
    };
    var error = false;
    if (this.sending) return;

    if (email.text === "") {
      form.email.valid = false;
      error = true;
    }
    if (name.text === "") {
      form.name.valid = false;
      error = true;
    }
    if (message.text === "") {
      form.message.valid = false;
      error = true;
    }
    this.setState({ form });
    if (error) return;

    console.log("sending");
    this.setState({
      sending: true
    });
    let formData = new FormData();
    formData.set("email", email.text);
    formData.set("name", name.text);
    formData.set("phone", phone.text);
    formData.set("message", message.text);
    Axios.post("https://www.swedishnet.se/contact.php", formData)
      .then(response => {
        if (response.data === "success") {
          console.log("response", response);
          setTimeout(() => this.setState(this.defaultState()), 2000);
        } else throw new Error(response.data);
      })
      .catch(error => {
        console.log("error", error);
      });
  };
  render() {
    let { sending, form } = this.state;
    let { name, phone, email, message } = form;
    let { style, lan } = this.props;
    let labels = this.content[lan];
    console.log("name", name.text);
    return (
      <div
        className={classes.container}
        style={{
          ...style,
          background: `url(${contact_white}) center center / cover no-repeat`
        }}
      >
        <div className={classes.content}>
          <Address lan={lan} />
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={labels.name}
              onChange={this.handleChange}
              value={name.text}
              className={name.valid ? "" : classes.invalid}
            />
            <div className={classes.flex}>
              <input
                type="text"
                name="phone"
                placeholder={labels.phone}
                onChange={this.handleChange}
                value={phone.text}
                className={phone.valid ? "" : classes.invalid}
              />
              <input
                type="email"
                name="email"
                placeholder={labels.email}
                onChange={this.handleChange}
                value={email.text}
                className={email.valid ? "" : classes.invalid}
              />
            </div>
            <textarea
              name="message"
              placeholder={labels.message}
              onChange={this.handleChange}
              value={message.text}
              className={message.valid ? "" : classes.invalid}
            />
            <button
              onClick={this.handleSubmit}
              className={sending ? classes.disabled : ""}
            >
              {sending ? labels.sending : labels.submit}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
