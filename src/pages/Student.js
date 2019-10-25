import React from 'react'
import { data } from '../data/index'
import PathNow from '../components/PathNow'

const Student = props => {
  // 注意 props.match.params.id 是字串類型
  console.log(typeof props.match.params.id)

  // 用for迴圈找data符合id的資料，沒找到時會是 null
  let studentData = null

  for (let i = 0; i < data.length; i++) {
    if (data[i].id === +props.match.params.id) {
      studentData = data[i]
    }
  }

  // 方法2：用find方法測試比對，沒找到時會是 undefined
  const studentData2 = data.find(value => value.id === +props.match.params.id)

  console.log(studentData)
  console.log(studentData2)

  // 如果沒找到資料時，回傳一段訊息給使用者
  if (!studentData2)
    return (
      <>
        <h1>沒找到資料</h1>
        <PathNow />
        <button onClick={() => props.history.push('/')}>回首頁</button>
      </>
    )

  // 有找到資料時的呈現
  return (
    <>
      <h1>學生詳細資料</h1>
      <PathNow />
      {/* 用props.match.params物件得到網址參數 */}
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-header">學號: {studentData.id}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">姓名: {studentData.name}</li>
          <li className="list-group-item">生日: {studentData.birth}</li>
        </ul>
      </div>
      <button onClick={() => props.history.push('/')}>回首頁</button>
    </>
  )
}

export default Student
