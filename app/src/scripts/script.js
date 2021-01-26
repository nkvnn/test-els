const button = document.querySelector('.button_bookNow');


button.addEventListener('click', () => {
  const checkLabels = document.querySelectorAll('.check input:checked');
  var orders = '';
  for (let i = 0; i < checkLabels.length; i++) {
    orders += ' ' + checkLabels[i].nextElementSibling.innerHTML + ' ';
  }
  // console.log(orders);
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  const address = document.querySelector('#address').value;
  const name = document.querySelector('#name').value;
  const number = document.querySelector('#number').value;
  const email = document.querySelector('#email').value;
  // const type = document.querySelector('input[name = "checkType"]:checked').getAttribute("info");
  var type = document.querySelector('input[name = "checkType"]:checked');
  if (type) {
    type = type.getAttribute("info");
  }

  if (checkLabels.length != 0 && date != '' && time != '' && address != '' && name != '' && number != '' && email != '' && type != null) {
    fetch(`https://api.telegram.org/bot1578082347:AAHc4kQZQ7DuKNskd-sDlTc_fGhCTnv5Ctk/SendMessage?chat_id=-521725315_mode=html&text=Checked:   ${orders}%0ADate:   ${date}%0ATime:   ${time}%0AAddress:   ${address}%0APackage:   ${type}%0AName:   ${name}%0ANumber:  ${number}%0AEmail:   ${email}%0APrice: ${type}`)

    
  }
  else {
    alert('Заполните все !!');
  }


  // document.getElementById('myform').reset();

})
