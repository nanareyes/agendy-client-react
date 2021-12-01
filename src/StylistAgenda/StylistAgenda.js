import React from 'react'
import '@progress/kendo-theme-default/dist/all.css'
import Schedule from './Schedule'
import PicKDate from './PickDate'
import BookDrivingSlot from './BookDrivingSlot'

function StylistAgenda() {
  return (
    <div>
      <PicKDate />
      <hr className="k-my-8" />
      <BookDrivingSlot />
      <hr className="k-my-8" />
      <Schedule />
    </div>
  )
}

export {StylistAgenda}
