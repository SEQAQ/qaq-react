import { Client } from '@stomp/stompjs';

import { userInfo } from './lib';

const WS_API = process.env.REACT_APP_WS_URL;

/**
 * A websocket based notification client
 * call activate() to activate the client
 * Returns null if no user is logged in
 *
 * @param {function} onNewNotification this function will be called when a new notification message receives, the first paramter is message data
 */
const WsClient = (onNewNotification) => {
  const user = userInfo();
  if (!user) {
    return null;
  }

  const client = new Client({
    brokerURL: WS_API,
    reconnectDelay: 10000,
    heartbeatIncoming: 5000,
    heartbeatOutgoing: 5000,
  });

  client.onConnect = () => {
    // Do something, all subscribes must be done is this callback
    // This is needed because this will be executed after a (re)connect
    /* eslint-disable-next-line */
    console.log('Connected!');
    client.subscribe(`/notify/user${user.uid}`, (msg) => {
      const data = msg.body;
      if (onNewNotification) {
        onNewNotification(data);
      }
    });
  };

  client.onStompError = (frame) => {
    // Will be invoked in case of error encountered at Broker
    // Bad login/passcode typically will cause an error
    // Complaint brokers will set `message` header with a brief message. Body may contain details.
    // Compliant brokers will terminate the connection after any error
    /* eslint-disable-next-line */
    console.error('Broker reported error: ' + frame.headers.message);
    /* eslint-disable-next-line */
    console.error('Additional details: ' + frame.body);
  };

  return client;
};

export default WsClient;
