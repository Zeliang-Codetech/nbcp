import React, {useState} from 'react';
import {Snackbar} from 'react-native-paper';

const SnackbarService = () => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [actionLabel, setActionLabel] = useState('');
  const [onActionPress, setOnActionPress] = useState(null);
  const [duration, setDuration] = useState(3000);

  const showSnackbar = (msg, dur = 3000, label = '', onPress = null) => {
    setMessage(msg);
    setDuration(dur);
    setActionLabel(label);
    setOnActionPress(onPress);
    setVisible(true);

    setTimeout(() => {
      setVisible(false);
    }, dur);
  };

  return (
    <Snackbar
      visible={visible}
      onDismiss={() => setVisible(false)}
      duration={duration}
      action={
        actionLabel ? {label: actionLabel, onPress: onActionPress} : undefined
      }>
      {message}
    </Snackbar>
  );
};

export default SnackbarService;
