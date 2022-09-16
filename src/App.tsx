import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import './App.scss';
import geo from './assets/geo.svg';
import OptionField from './components/OptionField';
import TextField from './components/TextField';
import { selectConvert } from './redux/convert/selector';
import { useAppDispatch } from './hooks/selectorHook';
import { setTo, setFrom, setValue } from './redux/convert/slice';
import { fetchConvert } from './redux/convert/async/fetchConvert';

const App = () => {
  const dispatch = useAppDispatch();

  const { from, to, value, result } = useSelector(selectConvert);

  const onChangeAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setValue(event.target.value));
  };

  const onChangeFrom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFrom(event.target.value));
  };

  const onChangeTo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setTo(event.target.value));
  };

  React.useEffect(() => {
    dispatch(setFrom('RUS'));
  }, []);

  React.useEffect(() => {
    if (from !== '' && to !== '' && value !== '') {
      dispatch(fetchConvert({ to: to, from: from, amount: value }));
    }
  }, [to, from, value]);

  return (
    <Container className="pt-5 mb-5">
      <Row className="justify-content-center mb-5">
        <Col lg={2} className="d-flex align-items-center justify-content-center">
          <img src={geo} alt="Geo" />
          <span className="geo-text">{navigator.language}</span>
        </Col>
      </Row>
      <Row className="justify-content-center mb-4">
        <Col className="d-flex" lg={8}>
          <TextField value={value} name="first" onChangeInput={onChangeAmount} />
        </Col>
      </Row>
      <Row className="justify-content-center mb-4 gy-4">
        <Col lg={4}>
          <OptionField value={from} onChangeSelect={onChangeFrom} />
        </Col>
        <Col lg={4}>
          <OptionField value={to} onChangeSelect={onChangeTo} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex" lg={8}>
          <span className="result-convert">Result: {result}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
