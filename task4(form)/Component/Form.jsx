import React, {Component} from "react";

export class Form extends Component{
  state = {
    email: '',
    subscription: false
  }
  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({[name]: value});
  }
  inValid = () => {
    let regExp = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])", 'i')

    if (!regExp.test(this.state.email)) {
      alert('email invalid')
      return;
    }

    if (!this.state.subscription) {
      alert('click subscription')
      return;
    }

    this.setState({email: '', subscription: false})
    alert('form send')
  }

  render(){
    const { email, subscription } = this.state;
    return(
        <div>
          <input
              type="email"
              name='email'
              value={email}
              onChange={this.handleChange}
          />
          <br/>
          <label>
            <input
                type="checkbox"
                name='subscription'
                checked={subscription}
                onChange={this.handleChange}
            />
            substructure
          </label>
          <br/>
          <button
          onClick={this.inValid}
          >sens form</button>
        </div>
    )
  }
}