import React, { Component } from "react";
import "./menu.css";
import { data } from "../moc";
import Order from "../order";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: data,
      selected: [],
      total: 0,
    };
  }
  render() {
    const onSelect = (value) => {
      const selected = [
        ...this.state.selected,
        { ...value, id: this.state.selected.length + 1 },
      ];
      this.setState({ selected });
      selected.forEach((item) => {
        this.setState({ total: this.state.total + item.price });
      });
    };
    const sub = (id) => {
      const newData = this.state.selected.filter((value) => value.id !== id);
      this.setState({ selected: newData });
    };
    return (
      <div className="menu">
        <div className="cont-category">
          {this.state.list.map((value) => {
            return (
              <div key={value.id}>
                <h1>{value.category}</h1>
                <div className="list" key={value.id}>
                  {value?.list.map((item) => (
                    <div
                      className="list-item"
                      key={item.id}
                      onClick={() => onSelect(item)}
                    >
                      <img src={item.img} alt="img" />
                      <div className="elem">{item.title}</div>
                      <div className="elem">{item.price}so'm</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Order
          onDelete={(id) => sub(id)}
          total={this.state.total}
          selected={this.state.selected}
        />
      </div>
    );
  }
}
