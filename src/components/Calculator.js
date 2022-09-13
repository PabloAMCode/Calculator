import ButtonRows from './ButtonRows';
import CalculatorScreen from './CalculatorScreen';
import './Calculator.css';

function Calculator() {
    const buttonValues = [
        {
          b1: "%",
          b2: "CE",
          b3: "C",
          b4: "Del",
        },
        {
          b1: "1/x",
          b2: "x^2",
          b3: "SQRT",
          b4: "/",
        },
        {
          b1: "7",
          b2: "8",
          b3: "9",
          b4: "x",
        },
        {
          b1: "4",
          b2: "5",
          b3: "6",
          b4: "-",
        },
        {
          b1: "1",
          b2: "2",
          b3: "3",
          b4: "+",
        },
        {
          b1: "+/-",
          b2: "0",
          b3: ",",
          b4: "=",
        },
      ];
      return (
        <div className='calculator'>
          <CalculatorScreen/>
          <ButtonRows values={buttonValues}/>    
        </div>
      );

}

export default Calculator;