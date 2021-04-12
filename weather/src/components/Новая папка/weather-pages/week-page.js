import styles from "./form.module.css";

const FormForWeek = ({day, date, temperature}) => {
  return (
    <div className={styles.form_week}>
      <p className={styles.title_week}>The weather for a week</p>
      <ul className={styles.weather_for_week}>
            <li>{day}, {date}, temperature:{temperature}$</li>
            <li>{day}, {date}, temperature:{temperature}$</li>
            <li>{day}, {date}, temperature:{temperature}$</li>
            <li>{day}, {date}, temperature:{temperature}$</li>
            <li>{day}, {date}, temperature:{temperature}$</li>
            <li>{day}, {date}, temperature:{temperature}$</li>
            <li>{day}, {date}, temperature:{temperature}$</li>
     </ul>
    </div>
  );
};
export default FormForWeek;
