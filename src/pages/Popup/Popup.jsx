import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <div className="fb-url">
        <div class="input-group mb-3">
          <label>Fb Url</label>
          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
          <button>ok</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
