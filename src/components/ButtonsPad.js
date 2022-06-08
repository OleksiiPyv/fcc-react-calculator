export default function ButtonsPad(props) {
    return (
        <div className="calculator__input">
            <button
                onClick={props.clear}
                className="calculator__input-item clear"
                id="clear"
            >
                AC
            </button>
            <button
                onClick={props.operator}
                value="/"
                className="calculator__input-item divide"
                id="divide"
            >
                &divide;
            </button>
            <button
                onClick={props.operator}
                value="*"
                className="calculator__input-item multiply"
                id="multiply"
            >
                &times;
            </button>
            <button
                onClick={props.operator}
                value="-"
                className="calculator__input-item subtract"
                id="subtract"
            >
                -
            </button>
            <button
                onClick={props.operator}
                value="+"
                className="calculator__input-item add"
                id="add"
            >
                +
            </button>
            <button
                onClick={props.evaluate}
                value="="
                className="calculator__input-item equals"
                id="equals"
            >
                =
            </button>
            <button
                onClick={props.number}
                value="1"
                className="calculator__input-item one"
                id="one"
            >
                1
            </button>
            <button
                onClick={props.number}
                value="2"
                className="calculator__input-item two"
                id="two"
            >
                2
            </button>
            <button
                onClick={props.number}
                value="3"
                className="calculator__input-item three"
                id="three"
            >
                3
            </button>
            <button
                onClick={props.number}
                value="4"
                className="calculator__input-item four"
                id="four"
            >
                4
            </button>
            <button
                onClick={props.number}
                value="5"
                className="calculator__input-item five"
                id="five"
            >
                5
            </button>
            <button
                onClick={props.number}
                value="6"
                className="calculator__input-item six"
                id="six"
            >
                6
            </button>
            <button
                onClick={props.number}
                value="7"
                className="calculator__input-item seven"
                id="seven"
            >
                7
            </button>
            <button
                onClick={props.number}
                value="8"
                className="calculator__input-item eight"
                id="eight"
            >
                8
            </button>
            <button
                onClick={props.number}
                value="9"
                className="calculator__input-item nine"
                id="nine"
            >
                9
            </button>
            <button
                onClick={props.number}
                value="0"
                className="calculator__input-item zero"
                id="zero"
            >
                0
            </button>
            <button
                onClick={props.decimal}
                value="."
                className="calculator__input-item decimal"
                id="decimal"
            >
                .
            </button>
        </div>
    );
}
