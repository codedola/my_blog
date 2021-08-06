import React, {useState} from 'react'
import { Button, Tabs } from 'antd';
import TableInfo from './TableInfo';
const { TabPane } = Tabs;



export default function MembersTable() {
  const [activeKey, setActiveKey] = useState("1")
  const [panes, setPanes] = useState([]);


  const add = () => {
    const activeKey = Math.floor(Math.random() * 1000);
    setPanes([
      ...panes,
      { title: `Tab ${activeKey}`, content: <h1>Helllo 1</h1>, key: String(activeKey) },
    ])
  };

  const remove = targetKey => {
    //targetKey = Number(targetKey);
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panesFilter = panes.filter(pane => pane.key !== targetKey);
    setPanes(panesFilter)
    if (panesFilter.length && activeKey === targetKey) {
      if (lastIndex >= 0) {
        setActiveKey(panes[lastIndex].key);
      } else {
        setActiveKey(panes[0].key);
      }
    }
  };

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  }

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      remove(targetKey)
    }
  }
  return (
  
    <div>
        <div style={{position: "fixed", top: 2, left: 300, zIndex: 99999}}>
          <Button onClick={add}>ADD</Button>
        </div>
        <Tabs
          hideAdd
          size="small"
          onChange={onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={onEdit}
        >

           <TabPane
              tab="All members"
              key= "1"
              forceRender={true}
            closable={false}
          >
             <TableInfo/>
          </TabPane>

          {panes?.map(pane => (
            <TabPane
              tab={pane?.title}
              key={pane?.key}>
              {
                pane?.content
              }
            </TabPane>
          ))}
          
        </Tabs>
    </div>
  )
}
