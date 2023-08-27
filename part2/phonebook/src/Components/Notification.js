const Notification = ({ message, typeNotification }) => {
  if (message === null) {
    return null;
  }
  return <div className={typeNotification}>{message}</div>;
};

export default Notification;
