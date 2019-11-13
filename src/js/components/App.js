import { h } from 'preact';
import { useState } from 'preact/hooks';

import TestMeidator from './TestMediator';

const routesMap = {
    observer: 'observer'
}

const App = () => {
    // const [activePattern, changePattern] = useState(routesMap.observer);

    return (
        <div class='container' id='container'>
            <TestMeidator />
        </div>
    )
}

export default App;
