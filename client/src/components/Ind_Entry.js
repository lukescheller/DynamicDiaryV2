import styles from "./style/Ind_Entry.module.css";

const Ind_Entry = (props) => {
  return (
    <div id={styles.border} className="p-3 bg-light text-dark">
      {props.children}
    </div>
  );
};

export default Ind_Entry;
