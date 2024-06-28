import { useState } from 'react';

const useNotify = () => {
  const [notification, setNotification] = useState({ message: '' });

  const notifySuccess = (message: string) => {
      setNotification({ message });
      setTimeout(() => {
        setNotification({ message: '' });
      }, 3000);
  };

  return {
    notification,
    notifySuccess,
  };
};

export default useNotify;
