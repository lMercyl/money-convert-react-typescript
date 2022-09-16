import React from 'react';
import styles from './OptionField.module.scss';
import { selectCurencies } from '../../redux/curencies/selector';
import { fetchCurencies } from '../../redux/curencies/async/fetchCurencies';
import { useAppDispatch } from '../../hooks/selectorHook';
import { useSelector } from 'react-redux';

type OptionFieldProps = {
  value?: string;
  onChangeSelect?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const OptionField = ({ value, onChangeSelect }: OptionFieldProps) => {
  const dispatch = useAppDispatch();

  const { list } = useSelector(selectCurencies);

  React.useEffect(() => {
    if (list.length === 0) {
      dispatch(fetchCurencies());
    }
  }, []);

  return (
    <div className={styles.select}>
      <select value={value} onChange={onChangeSelect}>
        {list.map((item, index) => (
          <option key={index} value={item.shortName}>
            {item.fullName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default OptionField;
