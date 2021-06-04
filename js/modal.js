function _createModal(options) {
  const modal = document.createElement(("div"));
  modal.classList.add("shadow");
  modal.insertAdjacentHTML(
    ("beforeend"),
    html = `
      <div class="requestSection requestSection1">
        <div class="container">
          <div class="request">
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
              <label for="comment">
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
              <button class="button button_postRequest">Жду звонка</button>
            </form>
          </div>
        </div>
      </div>
    `
  ); 
  document.querySelector('footer').insertAdjacentElement('afterend', modal);
  return modal;
}



w.modal = function (options) {
  const wmodal = _createModal(options);


    const modal = {
        open() {
            wmodal.classList.add('open')
        },
        close() {
            wmodal.classList.remove('open')
        }
    }

  wmodal.addEventListener('click', event => {
      if (event.target.dataset.close) {
        modal.close()
      }
  })
  const buttonModalOpen = document.querySelector('.buttonModalOpen');
  buttonModalOpen.addEventListener('click', event => {    
    modal.open()
})

  return modal;
};
