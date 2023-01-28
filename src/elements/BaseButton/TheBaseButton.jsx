import styles from "./TheBaseButton.module.scss";

const TheBaseButton = () => {
  return (
    <button
      className={`btn col-8 col-md-3 col-lg-1 rounded ${styles.moreButton}`}
    >
      بیشتر
    </button>
  );
};

export default TheBaseButton;
