import React, { PureComponent } from 'react'


class PureChild extends PureComponent {
   // if any difference in the shallow with props and states compoarision means it will rerende or else nothing chnages in Pure COmponent
 
  render() {
    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}
export default PureChild