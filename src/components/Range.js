import React, { Component } from 'react'

export class Range extends Component {
    state = {
        value1: 80,
        value2: 50,
        value3: 130,
        opacity: 100

    }
    range_value1 = (e) => this.setState({ value1: e.target.value });
    range_value2 = (e) => this.setState({ value2: e.target.value });
    range_value3 = (e) => this.setState({ value3: e.target.value });
    range_opacity = (e) => this.setState({ opacity: e.target.value });
    render() {
        return (

            <div className="center_range" style={{ opacity: this.state.opacity / 100, height: "50vh", backgroundColor: "rgb(" + String(this.state.value1) + "," + String(this.state.value2) + "," + String(this.state.value3) + ")" }}>
                <div className="range_child">
                    <h3>{"rgb(" + String(this.state.value1) + "," + String(this.state.value2) + "," + String(this.state.value3) + ")"}</h3>
                    <input style={{ width: "80%" }} type="range" min={0} max={255} value={this.state.value1} onChange={this.range_value1} />
                    <div>{this.state.value1}</div>
                    <input style={{ width: "80%" }} type="range" min={0} max={255} value={this.state.value2} onChange={this.range_value2} />
                    <div>{this.state.value2}</div>
                    <input style={{ width: "80%" }} type="range" min={0} max={255} value={this.state.value3} onChange={this.range_value3} />
                    <div>{this.state.value3}</div>
                </div>
                <div className="range_child">
                    <h3>Opacity</h3>
                    <input style={{ opacity: 1, width: "80%", height: "50px" }} type="range" min={20} max={100} value={this.state.opacity} onChange={this.range_opacity} />
                    <div>{this.state.opacity / 100}</div>
                </div>
            </div>
        )
    }
}

export default Range
