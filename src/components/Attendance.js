import React from 'react'
import { withRouter } from 'react-router-dom'

const Attendance = (props) => {
    return (
        <>
            <h3>出席情況</h3>
            {/* 用props.match.params物件得到網址參數 */}
            學號: {props.match.params.id}
        </>
    )
}

export default withRouter(Attendance)