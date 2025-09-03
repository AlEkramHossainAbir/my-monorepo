import React from 'react';
import { Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';

const AntdDemo = () => (
  <div style={{ padding: 24 }}>
    <h2>Ant Design Demo Component</h2>
    <Button type="primary" icon={<SmileOutlined />}>Hello Ant Design</Button>
  </div>
);

export default AntdDemo;
