import Button from "./Button";
import './ButtonRowsDiv.css';
import './ButtonRows.css';

function ButtonRows(props) {
  return (
    <div className="button-rows-div" >
      <div className="button-rows">
        <Button value={props.values[0].b1} />
        <Button value={props.values[0].b2} />
        <Button value={props.values[0].b3} />
        <Button value={props.values[0].b4} />
      </div>
      <div className="button-rows">
        <Button value={props.values[1].b1} />
        <Button value={props.values[1].b2} />
        <Button value={props.values[1].b3} />
        <Button value={props.values[1].b4} />
      </div>
      <div className="button-rows">
        <Button value={props.values[2].b1} />
        <Button value={props.values[2].b2} />
        <Button value={props.values[2].b3} />
        <Button value={props.values[2].b4} />
      </div>
      <div className="button-rows">
        <Button value={props.values[3].b1} />
        <Button value={props.values[3].b2} />
        <Button value={props.values[3].b3} />
        <Button value={props.values[3].b4} />
      </div>
      <div className="button-rows">
        <Button value={props.values[4].b1} />
        <Button value={props.values[4].b2} />
        <Button value={props.values[4].b3} />
        <Button value={props.values[4].b4} />
      </div>
      <div className="button-rows">
        <Button value={props.values[5].b1} />
        <Button value={props.values[5].b2} />
        <Button value={props.values[5].b3} />
        <Button style={{backgroundColor: 'blue'}} value={props.values[5].b4} /> 
      </div>
    </div>
  );
}

export default ButtonRows;
