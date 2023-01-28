import styles from './TheBaseTitle.module.scss'

const TheBaseTitle = (props) => {
  return (
    <div className='d-flex my-2 justify-content-center'>
      <h4 className={styles.titles}>{props.title}</h4>
    </div>
  );
};

export default TheBaseTitle;
