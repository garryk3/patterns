import { h, Component } from 'preact'

import Loader from './Loader';

import Transport from '../transport';

import { formatNumber } from './Helpers';

class App extends Component {
    constructor () {
        super();

        this.transport = new Transport('API_URL');
    }

    set (key, value) {
        this[key] = value;
    }

    render (props, {}) {
        return (
            <div class='container' id='container'>
                BOILERPLATE
            </div>
        )
    }
}

export default App;
