import React from "react";
import "./modal.css";

export default class Modal extends React.Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Modal Window</h2>
        <div class="content">
          <form id="addCow" onSubmit={this.onClose}>
              <input type="text" placeholder="Name" />
              <input type="number" placeholder="Ikä" />
              <input type="number" placeholder="L/pv" />
              <input type="number" placeholder="L/vk" />
              <button type="submit">Tallenna</button>
              <button type="button" onClick={this.onClose}>Peruuta</button>
            </form>  
        </div>
      </div>
    );
  }
}