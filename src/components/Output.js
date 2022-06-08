export default function Output(props) {
    return (
        <div className="calculator__output">
            <div className="calculator__output-display">
                {props.result}
            </div>

            <div  className="calculator__output-current" id="display">
                {props.display}
            </div>
        </div>
    );
}
