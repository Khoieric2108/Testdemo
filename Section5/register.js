const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn sự kiện tự động reload của trình duyệt.
  
  let selectedGender = document.querySelector('input[name="gender"]:checked')
  //// Lưu trữ dữ liệu người dùng dưới dạng Object.
  const user = {
    fullName: registerForm.fullName.value.trim(),
    username: registerForm.username.value.trim(),
    email: registerForm.email.value.trim(),
    phoneNumber: registerForm.phoneNumber.value.trim(),
    password: registerForm.password.value.trim(),
    confirmPassword: registerForm.confirmPassword.value.trim(),
    gender: selectedGender ? selectedGender.value : "No gender selected",
  };
  console.log(user);
});

