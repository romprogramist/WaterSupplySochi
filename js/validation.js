document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const forms = document.querySelectorAll("form");

  forms.forEach((f) => {
    const message = document.createElement("div");
    message.classList.add("notification");
    f.querySelector(".button_postRequest").insertAdjacentElement(
      "afterend",
      message
    );
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      const notification = f.querySelector(".notification");
      notification.textContent = "";
      let validateFailed = false;
      for (let elem of f.elements) {
        if (elem.tagName !== "BUTTON") {
          if (elem.value === "") {
            validateFailed = true;
            elem.previousElementSibling.textContent =
              "Данное поле не заполнено!";
          } else {
            elem.previousElementSibling.textContent = "";
          }
        }
      }

      if (validateFailed) {
        return;
      }

      $.ajax({
        type: "POST",
        url: "https://xn----7sbdckiagtc1cegbj2bj3i.xn--p1ai/mailer/smart.php",
        data: $(this).serialize(),
      })
        .done(function () {
          $(this).find("input").val("");
          $("form").trigger("reset");
          notification.textContent =
            "Спасибо, Ваша заявка принята. C Вами свяжется наш специалист.";
        })
        .fail(function () {
          $(this).find("input").val("");
          $("form").trigger("reset");
          notification.textContent =
            "Произошла ошибка. Попробуйте отправить данные позже.";
        });
    });
  });
});
