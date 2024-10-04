'use client'

import { IElem } from './TableComponent'

interface IData {
  data: IElem
  fileName: string
}

const DownloadJSON = ({ data, fileName }: IData) => {
  const downloadJSON = () => {
    const jsonData = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    })
    const jsonURL = URL.createObjectURL(jsonData)
    const link = document.createElement('a')
    link.href = jsonURL
    link.download = `${fileName}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return <button onClick={downloadJSON}>Download JSON</button>
}

export default DownloadJSON
