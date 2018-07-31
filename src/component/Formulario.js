import React from 'react';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      gender: ''
    };

    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeGender = this.changeGender.bind(this);
  }

  changeName(event) {
    this.setState({ 
      name: event.target.value,
    });
  }
  changeDescription(event) {
    this.setState({ 
      description: event.target.value,
    });
  }
  changeGender(event) {
    this.setState({ 
      gender: event.target.value
    });
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" value={this.state.name} onChange={this.changeName} />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={this.state.description} onChange={this.changeDescription} />
        </div>
        <div>
          <label htmlFor="gender">Gender:</label>
          <select id="gender" value={this.state.gender} onChange={this.changeGender}>
            <option>comedia</option>
            <option>drama</option>
            <option>infantil</option>
          </select>
        </div>
        <input type="submit" value="Enviar" />
      </div>
    );
  }
}

export default Formulario;