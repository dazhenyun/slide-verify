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
