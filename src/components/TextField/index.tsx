import styles from './TextField.module.scss';

type TextFieldProps = {
  value?: string;
  name?: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextField = ({ name, value, onChangeInput }: TextFieldProps) => {
  return (
    <>
      <input
        name={name}
        pattern="/^\d+$/"
        className={styles.input}
        value={value}
        onChange={onChangeInput}
      />
    </>
  );
};

export default TextField;
