// SENDMAIL_KEY = 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
// JWT_ACCOUNT_ACTIVATION =  chouser_hung_jwt_secretkey
// EMAIL_FROM = chipchipdaam@gmail.com
// CLIENT_URL = http://localhost:3000
   // add to database
        userModel
          .add(entity)
          .then((id) => {
            res.status(200).json({
              message: "Đăng ký tài khoản thành công",
            });
          })
          .catch((err) => {
            res.status(400).json({
              message: "Có lỗi phát sinh, vui lòng thử lại sau",
            });
          });
