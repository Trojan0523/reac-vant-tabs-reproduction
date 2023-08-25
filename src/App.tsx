/*
 * @Author: BuXiongYu
 * @Date: 2023-08-24 14:04:39
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-08-25 19:20:18
 * @Description: 请填写简介
 */
import { useEffect, useState } from 'react'
import TabsComponent from './tabs'
import { Button } from 'react-vant'
import './App.css'

function App() {
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(true)
    }, 2500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Button style={{ width: '120px' }} type='primary' onClick={() => setFlag(!flag)}>切换</Button>
      </div>
      <TabsComponent showBodySizeFlag={flag} />
    </>
  )
}

export default App
