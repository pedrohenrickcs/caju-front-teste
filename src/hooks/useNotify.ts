import { useState } from 'react';

const useNotify = () => {
  const [notification, setNotification] = useState({ message: '', type: '' });

  const notifySuccess = (message: string) => {
    setNotification({ message, type: 'success' });
    setTimeout(() => {
      setNotification({ message: '', type: '' });
    }, 3000);
  };

  return {
    notification,
    notifySuccess,
  };
};

export default useNotify;
