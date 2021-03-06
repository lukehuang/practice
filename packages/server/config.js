module.exports = {
  port: 3000,

  dbpath: 'mongodb://localhost:27017/practice',

  // token 签名 => 必改
  secret: 'practice',

  // 七牛图片上传
  qn: {
    ACCESS_KEY: '',
    SECRET_KEY: '',
    BUCKET_NAME: 'image-mintsweet-cn',
    DONAME: 'http://image.mintsweet.cn',
    ZONE: 'Zone_z2',
  },

  // 邮件配置
  mail: {
    service: '',
    secureConnection: true,
    port: 465,
    auth: {
      user: '',
      pass: ''
    }
  }
};
