import { h } from 'preact';
import { useEffect, useState, useCallback } from 'preact/hooks';

import useMediator from './hooks/use-mediator';

const Component1 = ({ mediator }) => {
    const listenerId = 'testComponent1';
    const { subscribe, unsubscribe } = mediator;

    const [value, changeValue] = useState('empty 1');

    useEffect(() => {
        subscribe('testEvent', testCallback, listenerId);

        return function () {
            unsubscribe('testEvent', listenerId)
        }
    }, []);

    const testCallback = useCallback((data) => {
        changeValue(data);
    }, [value]);

    return <div>{value}</div>
}

const Component2 = ({ mediator }) => {
    const { emit } = mediator;

    function onClickButton () {
        emit('testEvent', `value222-${Math.random() * 1000}`);
    }

    return <button onClick={onClickButton}>Click me</button>
}

const Component3 = ({ mediator }) => {
    const listenerId = 'testComponent3';
    const { subscribe, unsubscribe } = mediator;

    const [value, changeValue] = useState('empty 3');

    useEffect(() => {
        subscribe('testEvent2', testCallback, listenerId);

        return function () {
            unsubscribe('testEvent2', listenerId)
        }
    }, []);

    const testCallback = useCallback((data) => {
        changeValue(data);
    }, [value]);

    return <div>{value}</div>
}

const Component4 = ({ mediator }) => {
    const { emit } = mediator;

    function onClickButton () {
        emit('testEvent2', `value444-${Math.random() * 1000}`);
    }

    return <button onClick={onClickButton}>Click me</button>
}

const Component5 = ({ mediator }) => {
    const listenerId = 'testComponent5';
    const { subscribe, unsubscribe } = mediator;

    const [value, changeValue] = useState('empty 5');

    useEffect(() => {
        subscribe('testEvent', testCallback, listenerId);

        return function () {
            unsubscribe('testEvent', listenerId)
        }
    }, []);

    const testCallback = useCallback((data) => {
        changeValue(data);
    }, [value]);

    return <div>{value}</div>
}

const Component6 = ({ mediator }) => {
    const listenerId = 'testComponent6';
    const { subscribe, unsubscribe } = mediator;

    const [value, changeValue] = useState(false);

    useEffect(() => {
        subscribe('testEvent6', testCallback, listenerId);

        setTimeout(() => {
            unsubscribe('testEvent6', listenerId)
        }, 5000);

        return function () {
            unsubscribe('testEvent6', listenerId)
        }
    }, []);

    const testCallback = useCallback((data) => {
        changeValue(data);
    }, [value]);

    return <div>{value}</div>
}

const TestMediator = () => {
    const mediator = useMediator();

    return (
        <div className='mediator'>
            <Component1 mediator={mediator} />
            <Component2 mediator={mediator} />
            <Component3 mediator={mediator} />
            <Component4 mediator={mediator} />
            <Component5 mediator={mediator} />
            <Component6 mediator={mediator} />
        </div>
    )
}

export default TestMediator;
