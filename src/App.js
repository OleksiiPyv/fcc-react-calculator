import React from "react";
import "./App.scss";
import ButtonsPad from "./components/ButtonsPad";
import Output from "./components/Output";

const endsWithOperator = /\d[/*-+]$/;
const endsWithNegative = /\d-$/;
const endsWithDouble = /\d[-/*+]-$/;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "0",
            result: "0",
            evaluated: false,
            evaluatedVal: "0",
        };
        this.handleOperator = this.handleOperator.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleDecimal = this.handleDecimal.bind(this);
        this.handleEvaluate = this.handleEvaluate.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleOperator(e) {
        const value = e.target.value;

        this.setState((state) => {
            if (state.evaluated) {
                return {
                    display: value,
                    result: state.evaluatedVal + value,
                    evaluated: false,
                };
            } else {
                return {
                    display: value,
                    result:
                        endsWithOperator.test(state.result) && value !== "-"
                            ? state.result.slice(0, -1) + value
                            : endsWithDouble.test(state.result) && value !== "-"
                            ? state.result.slice(0, -2) + value
                            : (endsWithDouble.test(state.result) &&
                                  value === "-") ||
                              (endsWithNegative.test(state.result) &&
                                  value !== "-")
                            ? state.result
                            : state.result + value,
                };
            }
        });
    }

    handleNumber(e) {
        const value = e.target.value;

        this.setState((state) => {
            if (state.evaluated) {
                return {
                    display: value,
                    result:
                        state.evaluatedVal !== "0"
                            ? state.evaluatedVal + value
                            : value,
                    evaluated: false,
                };
            } else {
                return {
                    display:
                        state.display === "0" ? value : state.display + value,
                    result: state.result === "0" ? value : state.result + value,
                };
            }
        });
    }

    handleDecimal(e) {
        const value = e.target.value;

        if (!/[.]/g.test(this.state.display)) {
            this.setState((state) => {
                if (state.evaluated) {
                    return {
                        display: state.evaluatedVal + value,
                        result: state.evaluatedVal + value,
                        evaluated: false,
                    };
                } else {
                    return {
                        display: state.display + value,
                        result: state.result + value,
                    };
                }
            });
        }
    }

    handleEvaluate() {
        this.setState((state) => {
            if (!state.evaluated) {
                const result =
                    Math.round(eval(state.result.replace("--", "+")) * 100000) /
                    100000;
                return {
                    display: result + "",
                    result: state.result + "=" + result,
                    evaluatedVal: result + "",
                    evaluated: true,
                };
            }
        });
    }

    handleClear() {
        this.setState({
            display: "0",
            result: "0",
            evaluatedVal: "0",
            evaluated: false,
        });
    }

    render() {
        return (
            <div className="App">
                <section className="calculator" id="calculator">
                    <Output
                        display={this.state.display}
                        result={this.state.result}
                    />
                    <ButtonsPad
                        operator={this.handleOperator}
                        number={this.handleNumber}
                        decimal={this.handleDecimal}
                        evaluate={this.handleEvaluate}
                        clear={this.handleClear}
                    />
                </section>
            </div>
        );
    }
}

export default App;
