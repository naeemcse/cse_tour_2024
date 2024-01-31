import React, { useEffect, useState } from 'react';
import styles from './Countdown.module.css'; // Import your CSS module

const CountdownToFebruary28 = () => {
  const targetDate = new Date('2024-02-28T00:00:00');
  const now = new Date();
  const remainingTime = targetDate - now;

  const [days, setDays] = useState(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
  const [hours, setHours] = useState(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const [minutes, setMinutes] = useState(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
  const [seconds, setSeconds] = useState(Math.floor((remainingTime % (1000 * 60)) / 1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const remainingTime = targetDate - now;

      setDays(Math.floor(remainingTime / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((remainingTime % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.countdownContainer}>
      <h2>Remaining  to February 28, 2024:</h2>
      <div className={styles.clock}>
        <span className={styles.time}>{days} D</span>
        <span className={styles.separator}>:</span>
        <span className={styles.time}>{hours} H</span>
        <span className={styles.separator}>:</span>
        <span className={styles.time}>{minutes} M  </span>
        <span className={styles.separator}>:</span>
        <span className={styles.time}>{seconds} S </span>
      </div>
    </div>
  );
};

export default CountdownToFebruary28;
