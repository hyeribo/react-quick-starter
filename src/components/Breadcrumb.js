import React from 'react';
import { Breadcrumb } from 'antd';

const BreadcrumbComponent = ({items}) => {
  const Items = items.map((item, i) => {
    return <Breadcrumb.Item key={i}>{item}</Breadcrumb.Item>
  })
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {Items}
    </Breadcrumb>
  )
}

export default BreadcrumbComponent;