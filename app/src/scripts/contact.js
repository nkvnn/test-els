const buttonContact = document.querySelector('.buttonContact');

buttonContact.addEventListener('click', () => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;


    if (name != '' && email != '' && message != null) {
        fetch(`https://api.telegram.org/bot1578082347:AAHc4kQZQ7DuKNskd-sDlTc_fGhCTnv5Ctk/SendMessage?chat_id=287343802_mode=html&text=Name: ${name}%0AEmail:  ${email}%0AMessage: ${message}`);
      }
      else {
        alert('Заполните все !!');
      }

      document.getElementById('.main_book-now').reset();
})
