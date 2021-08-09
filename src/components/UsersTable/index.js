import React, { useState, useMemo, useCallback} from 'react';
import { Tabs } from 'antd';
import TableInfo from './TableInfo';
import TabUserInfo from './TabUserInfo';
const { TabPane } = Tabs;



export default function UsersTable() {
  const [panes, setPanes] = useState([]);
  const [activeKey, setActiveKey] = useState("0")


  const addNewTabUser = useCallback((infoUser) => {
    let isExits = panes.find(o => o.key === String(infoUser?.key));
    if (!isExits) {
      setPanes([
        ...panes,
        {
          title: `${infoUser?.nickname}`,
          //content: <h1>{infoUser?.nickname}</h1>,
          key: String(infoUser?.key)
        }
      ]);
    } 
  }, [panes]);
  

  const getNewTitleTabPane = useCallback(
    ({ keyId, newTitle }) => {
    let paneObj = panes.find(o => o.key === String(keyId));
    if (paneObj) {
      setPanes([
        ...panes.filter(o => o.key !== String(keyId)),
        {
          key: String(keyId),
          title: newTitle
        }
      ])
    }
  }, [panes]
  )

  const remove = targetKey => {
    targetKey = String(targetKey)
    const panesFilter = panes.filter(pane => pane.key !== targetKey);
    setPanes(panesFilter)
  };

  const onChange = (activeKey) => {
    setActiveKey(activeKey);
  }

  const onEdit = (targetKey, action) => {
    if (action === "remove") {
      remove(targetKey)
    }
  }

  const renderTabUser = useMemo(function () {
    return panes?.map(pane => (
          <TabPane
            tab={pane?.title}
            key={pane?.key}
          >
            <TabUserInfo userInfo={pane} getNewTitleTabPane={getNewTitleTabPane}/>
          </TabPane>
      ))
  }, [panes, getNewTitleTabPane])

  return (
  
    <div>
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
        key= "0"
        forceRender={true}
        closable={false}
      >
          <TableInfo addNewTabUser={addNewTabUser} />
      </TabPane>

      {renderTabUser}
        
      </Tabs>
    </div>
  )
}
