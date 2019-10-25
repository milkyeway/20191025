import React from 'react'

// 要額外安裝兩個模組
// https://github.com/sweetalert2/sweetalert2-react-content
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

class App extends React.Component {
  // 生命周期方法  掛載 - 1
  constructor() {
    super()
    this.state = {
      hasData: false,
      data: '',
    }
  }

  // 生命周期方法  掛載 - 3
  componentDidMount() {
    setTimeout(() => {
      this.setState({ data: '資料來了！', hasData: true })
    }, 3000)
  }

  // 生命周期方法  掛載 - 2
  render() {
    if (!this.state.hasData) {
      // 範例參考
      // https://sweetalert2.github.io/#examples
      let timerInterval
      MySwal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <strong></strong> milliseconds.',
        timer: 3000,
        onBeforeOpen: () => {
          Swal.showLoading()
          timerInterval = setInterval(() => {
            Swal.getContent().querySelector(
              'strong'
            ).textContent = Swal.getTimerLeft()
          }, 100)
        },
        onClose: () => {
          clearInterval(timerInterval)
        },
      }).then(result => {
        if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log('I was closed by the timer')
        }
      })
      return <></>
    }

    return (
      <>
        <h1>{this.state.data}</h1>
      </>
    )
  }
}

export default App
