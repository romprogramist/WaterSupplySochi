// $(function () {
//   $("form").submit(function (e) {
//     e.preventDefault();
//     $.ajax({
//       type: "POST",
//       url: "mailer/smart.php",
//       data: $(this).serialize(),
//     }).done(function () {
//       $(this).find("input").val("");
//       $("form").trigger("reset");
//       const message = document.createElement("div");
//       message.textContent =
//         "Спасибо, Ваша заявка принята. C Вами свяжется наш специалист.";
//       message.style.position = "absolute";
//       message.classList.add('notification');
//       const form = document.querySelector("form");
//       form.insertAdjacentElement("afterbegin", message);
//     });
//     return false;
//   });
// });

// const form = document.querySelector('.postRequest1');
// Object.values(form).forEach((e) => {
// console.log(e);
// e.style.color = 'red'
// })
// form.forEach((e) => {
//   // console.log(e);
//   e.style.color = 'red'
// })
// console.log(form);
