import './CalculatorScreen.css';
import Button from './Button';

function CalculatorScreen () {
    return(
        <div className="calculator-screen">{Button.val}</div>
    );
}

export function changeVal(props) {
    this.changeVal(this.val=props.value)
    
}

export default CalculatorScreen;