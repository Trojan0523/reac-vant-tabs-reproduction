/*
 * @Author: BuXiongYu
 * @Date: 2023-08-24 14:23:41
 * @LastEditors: BuXiongYu
 * @LastEditTime: 2023-09-03 12:54:33
 * @Description: 请填写简介
 */
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Tabs } from 'react-vant'
import './tabs.css'

const TabsComponent = () => {
  const [showBodySizeFlag, setShowBodySizeFlag] = useState<boolean>(false)
  const [tab, setTab] = useState<string>('BODY_SIZE')

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBodySizeFlag(true)
    }, 2500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const TabList = useMemo(() => {
    const originalTabList = [
      {
        key: 'BODY_SIZE',
        component: (
          <>
            <div>BODY_SIZE</div>
          </>
        ),
      },
      {
        key: 'PRODUCT_SIZE',
        component: (
          <>
            <div>PRODUCT_SIZE</div>
          </>
        )
      },
    ]
    if (!showBodySizeFlag) {
      const filterList = originalTabList.filter((item) => item.key === 'BODY_SIZE')
      return filterList
    }
    setTab('PRODUCT_SIZE')
    return originalTabList
  }, [showBodySizeFlag])

  /**
   * 切换tab
   */
  const handleTabChange = useCallback((name: string | number) => {
    setTab(String(name))
  }, [])

  useEffect(() => {
    if (!showBodySizeFlag) {
      setTab('PRODUCT_SIZE')
    }
  }, [showBodySizeFlag])

  return (
    <div className='size-tab-list'>
      <Tabs
        sticky
        active={tab}
        align='center-auto'
        type='line'
        lineWidth={158}
        lineHeight={2}
        color='#000000'
        titleActiveColor='#000000'
        titleInactiveColor='#000000'
        onChange={handleTabChange}
        defaultActive='BODY_SIZE'
        stickyInitScrollbar={true}
        animated
        border
      >
        {
          TabList.map((item) => (
            <Tabs.TabPane
              key={item.key}
              title={item.key}
              name={item.key}
              titleClass="tab-collection-title"
            >
              {item.component}
            </Tabs.TabPane>
          ))
        }
      </Tabs>
    </div>
  )
}

export default TabsComponent