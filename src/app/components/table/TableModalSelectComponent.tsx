'use client'
import styles from './TableModalSelectComponent.module.css'
import * as React from 'react'

export default function TableModalSelectComponent() {
  const [inputType, setInputType] = React.useState('number')

  return (
    <div>
      <label>
        Select format
        <select onChange={(e) => setInputType(e.target.value)}>
          <option>Number</option>
          <option>Text</option>
        </select>
      </label>
      <input type={inputType} className={styles.modalInput} />
    </div>
  )
}
