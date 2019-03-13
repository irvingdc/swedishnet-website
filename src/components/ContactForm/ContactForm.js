import React, { Component } from "react"
import classes from "./ContactForm.module.css"
import Address from "../Address/Address"
import { contact_white } from "../../images"

export default class ContactForm extends Component{

    state={
        form: {
            name: "",
            email: "",
            phone: "",
            message: "",
        }
    }

    content={
        en: {
            name: "NAME:",
            phone: "PHONE:",
            email: "EMAIL:",
            message: "MESSAGE:",
            submit: "SEND MESSAGE",
        },
        sv: {
            name: "NAMN:",
            phone: "TELEFON:",
            email: "E-MAIL:",
            message: "MEDDE:",
            submit: "SKICKA MEDDELANDE",
        }
    }

    handleChange = event => {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value,
            }
        })
    }

    handleSubmit = event => {
        event.preventDefault()
    }
    render(){
        let { name, phone, email, message } = this.state.form
        let { style, lan } = this.props
        let labels = this.content[lan]
        return (
            <div 
                className={ classes.container }
                style={{
                    ...style,
                    background: `url(${ contact_white }) center center / cover no-repeat` ,
                }}
            >
                <div className={ classes.content }>
                    <Address lan={lan}/>
                    <form onSubmit={ this.handleSubmit }>
                        <input 
                            name="name"
                            placeholder={labels.name}
                            onChange={ this.handleChange }
                            value={ name }
                        />
                        <div className={ classes.flex }>
                            <input 
                                name="phone"
                                placeholder={labels.phone}
                                onChange={ this.handleChange }
                                value={ phone }
                            />
                            <input
                                name="email"
                                placeholder={labels.email}
                                onChange={ this.handleChange }
                                value={ email }
                            />
                        </div>
                        <textarea 
                            name="message"
                            placeholder={labels.message}
                            onChange={ this.handleChange }
                            value={ message }
                        />
                        <button>{labels.submit}</button>
                    </form>
                </div>
            </div>
        )
    }
}