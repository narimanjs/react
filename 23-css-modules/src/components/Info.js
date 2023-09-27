import './Info.css';
import styles from './Info.module.css';

console.log(styles);
function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info Component</h1>
      <h2>Heading in the info Coomponent</h2>
      <button className='my-button'>click me Info Component</button>
      <button className={styles.myOtherBtn}>click me Info myOtherBtn</button>
    </div>
  );
}

export default Info;
