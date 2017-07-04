import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllSlots, getUi } from './../../../reducers/index.js';
import { selectSlot, selectSlotNav } from './../../../actions/index.js';

import Slot from './../../Slot/index.jsx';
import SlotDetail from './../../SlotDetail/index.jsx';


class Slots extends Component {
  constructor(props) {
    super(props);
    this.handleSlotSelect = this.handleSlotSelect.bind(this)
    this.handleSlotNavSelect = this.props.selectSlotNav.bind(this)
  }
  genarateSlots() {
    return this.props.slots.map((slot, i) => {
      return (
        <div key={`${slot.slotIdent}-composite`}>
          <Slot
            key={slot.slotIdent}
            {...slot}
            selectedSlot={this.props.ui.selectedSlot}
            handleSlotSelect={this.handleSlotSelect}
          />
          {this.toggleDetail(slot)}
        </div>
      )
    })
  }
  handleSlotSelect(slotIdent) {
    let selectedSlot = this.props.ui.selectedSlot;

    if(selectedSlot === slotIdent) {
      this.props.selectSlot(false)
    } else {
      this.props.selectSlot(slotIdent)
    }
  }
  toggleDetail(slot) {
    if(slot.slotIdent === this.props.ui.selectedSlot) {
      return (<SlotDetail
                key={`${slot.slotIdent}-detail`}
                selectedSlot={this.props.ui.selectedSlot}
                selectedSlotNav={this.props.ui.selectedSlotNav}
                handleSlotNavSelect={this.handleSlotNavSelect}
                {...slot}
      />)}
  }
  render() {
    return(
      <div className='slots' style={{width: '100%'}}>
        {this.genarateSlots()}
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    slots: getAllSlots(state),
    ui: getUi(state)
  };
}
const mapDispatchToProps = dispatch => {
  return {
    selectSlot: slotIdent => dispatch(selectSlot(slotIdent)),
    selectSlotNav: slotNav => dispatch(selectSlotNav(slotNav)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Slots);