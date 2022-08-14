const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password) return 'Vui Lòng Nhập Ký Tự.';

  if (!validateEmail(email)) return 'Email Không Hợp Lệ.';

  if (password.length < 6) return 'Mật Khẩu Phải Có Ít Nhất 6 Ký Tự.';

  if (password !== cf_password) return 'Xác Nhận Mật Khẩu Sai.';
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid;
