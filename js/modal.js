function _createModal(options) {
  const modal = document.createElement(("div"));
  modal.classList.add("shadow");
  modal.insertAdjacentHTML(
    ("beforeend"),
    html = `
    <h1 class="headerTop white headerTopwhite">Оставьте заявку, и мы Вам перезвоним</h1>
      <div class="requestSection requestSection1">
        <div class="container">
         
          <div class="request request1">
            <span data-close="true" class="close">&times;</span>
            <form class="postRequest">
              <label for="name">
                <span class="errorPush errorPush1"></span>
                <input
                  data-rule="name"
                  id="nameInquiryOneModal"
                  placeholder="Имя"
                  class="general postRequest__name"
                  name="name"
                  type="text"
                />
              </label>
              <label for="tel">
                <span class="errorPush errorPush2"></span>
                <input
                  data-rule="number"
                  id="telInquiryTwoModal"
                  placeholder="Телефон"
                  class="general postRequest__tel"
                  name="tel"
                  type="text"
                />
              </label>
              <label class="labelComment" for="comment">
                <span class="errorPush errorPush3"></span>
                <textarea
                  data-rule="comment"
                  id="commentInquiryThreeModal"
                  class="general "
                  placeholder="Коментарий"
                  name="comment"
                  cols="40"
                  rows="3"
                ></textarea>
              </label>
              <button class="button button_postRequest">Отправить заявку</button>
            </form>
          </div>
        </div>
      </div>
    `
  ); 
  document.querySelector('footer').insertAdjacentElement('afterend', modal);
  return modal;
}

const body = document.querySelector('body');

w.modal = function (options) {
  const wmodal = _createModal(options);


    const modal = {
        open() {
            wmodal.classList.add('open')
            body.style.overflow = "hidden";
        },
        close() {
            wmodal.classList.remove('open')
            body.style.overflow = "";
        }
    }

  wmodal.addEventListener('click', event => {
      if (event.target.dataset.close) {
        modal.close()
      }
  })


  const buttonModalOpen = document.querySelectorAll('.buttonModalOpen');

  Object.values(buttonModalOpen).forEach((d) => {
    d.addEventListener('click', event => {
      modal.open()
  })
  })

 

  return modal;
};
