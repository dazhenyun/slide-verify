# 滑动验证组件

## 描述

基于js封装的滑动验证组件，用于登录时人机验证，有效防止接口被调用等攻击行为。只需通过简单的右滑交互操作，用户无需思考即可通过验证。

## 效果

<img src="https://s2.loli.net/2021/12/20/cVabgIUZtSTkJzD.png" width="320"/><img src="https://s2.loli.net/2021/12/20/QckIs3OTuiEdvql.png" width="320"/>

## 安装

```
在Web页面中使用滑动验证功能，需要在前端页面代码中添加以下代码，引入所需的JS资源。<script src="https://g.alicdn.com/AWSC/AWSC/awsc.js"></script>。
```

## 使用

```jsx
import React from 'react';
import SlideVerify from '../components/SlideVerify';

export default () => {

  const onSuccess = (e) => { console.log('前端滑动验证通过时会触发该回调参数。您可以在该回调参数中将会话ID（sessionId）、签名串（sig）、请求唯一标识（token）字段记录下来，随业务请求一同发送至您的服务端调用验签。', e) }

  const onFail = (e) => { console.log('滑动验证失败时触发该回调参数。', e) }

  const onError = (e) => { console.log('验证码加载出现异常时触发该回调参数。', e) }

  const SlideVerifyProps = {
    id: 'nc',
    width: '300px',
    height: '34px',
    fontSize: '12px',
    onSuccess,
    onFail,
    onError
  }

  return <SlideVerify {...SlideVerifyProps} />;
};

```

## API

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| --- | --- | --- | --- | --- |
| title | 列表标题 | string | '文本列表' | - |
| showHeader | 是否显示列表头部 | boolean | true | - |
| height | 列表高度（包含头部） | string &#124; number | '100%' | - |
| method | 列表数据请求方式 | string | 'GET' | 'GET' &#124; 'POST' |
| url | 列表数据请求地址 | string | '' | - |
| currentPageKey | 列表滚动的起始页字段key | string | 'page' | - |
| params | 列表数据请求参数对象（一般包含请求条数、请求当前页等字段） | object | - | - |
| reqCodeKey | 列表请求返回的状态字段名（可参考下方数据格式） | string | 'code' | - |
| reqCodeValue | 列表请求返回的成功状态值（可参考下方数据格式） | string | '200' | - |
| reqDataKey | 列表请求返回的数据字段名（可参考下方数据格式） | string | 'data' | - |
| reqListKey | 列表请求返回的列表字段名（可参考下方数据格式） | string | 'msgs' | - |
| reqTotalKey | 列表请求返回的总数字段名（可参考下方数据格式） | string | 'total' | - |


## 更新日志

```
3.0.2 组件滚动条优化
3.0.1 组件样式优化
3.0.0 组件发布
```

## 数据格式

![demo.png](https://i.loli.net/2021/11/17/CEKRXPwjqshU973.png)
---
![demo.png](https://i.loli.net/2021/11/16/RFpnluXH1QTIAg7.png)

## 温馨提示

```
如需支持更多自定义效果，请联系作者逐步完善
开发者：诺克
微信：15858194070
```

## 鼓励和支持

开发不易，开源不易。如果这篇经验对您有所帮助，请多给我一些鼓励和支持，谢谢！。

<img src="https://i.loli.net/2021/11/12/IgrFyOTfE5AkWpu.jpg" width="300"/><img src="https://i.loli.net/2021/11/12/AMhSpxZX19d5CIq.jpg" width="300"/>
