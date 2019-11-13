import { useCallback, useRef } from 'preact/hooks';

const useMediator = () => {
    const subscribesList = useRef({});

    const unsubscribe = useCallback((event, lisenerName) => {
        const { current: eventsList } = subscribesList;

        if (!eventsList[event]) {
            return;
        }

        delete eventsList[event][lisenerName];

        if (!Object.keys(eventsList[event]).length) {
            delete eventsList[event];
        }
    }, [subscribesList]);
    const subscribe = useCallback((event, callback, listenerName) => {
        const { current: eventsList } = subscribesList;
        const activeSubscribe = eventsList[event];

        if (activeSubscribe && typeof callback === 'function') {
            activeSubscribe[listenerName] = callback;
        } else if (!activeSubscribe) {
            eventsList[event] = {
                [listenerName]: callback
            }
        }
    }, [subscribesList]);
    const emit = useCallback((event, data) => {
        const { current: eventsList } = subscribesList;
        const activeSubscribe = eventsList[event];

        if (activeSubscribe) {
            Object.keys(activeSubscribe).forEach((key) => {
                activeSubscribe[key](data);
            })
        }
    }, [subscribesList]);

    return {
        subscribe,
        unsubscribe,
        emit
    }
};

export default useMediator;
