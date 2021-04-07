import styles from "./form.module.css";

const FormForToday = ({date, temperature, condition, wind, pressure, humidity }) => {
  return (
    <div className={styles.form}>
      <p className={styles.title}>The weather for today</p>
      <p className={styles.day}>{date}</p>
      <p className={styles.temperature}>{temperature}$</p>
      <p>{condition}</p>
      <ul className={styles.details}> 
      <li>Wind speed:{wind}$ m/s</li>
      <li>Pressure:{pressure}$</li>
      <li>Humidity:{humidity}$</li>
     </ul>
    </div>
  );
};
export default FormForToday;
