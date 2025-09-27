document.addEventListener('DOMContentLoaded', function () {
  const colorSelect = document.getElementById('color');
  const productImage = document.querySelector('.product-gallery > img');
  const productTitle = document.querySelector('.product-info h2');

  const colorOptions = {
    'Preto': {
      img: 'img/fone_destaque.png',
      title: 'Fone de Ouvido Bluetooth - Preto'
    },
    'Branco': {
      img: 'img/fone_destaque2.jpg',
      title: 'Fone de Ouvido Bluetooth - Branco'
    },
    'Cinza': {
      img: 'img/fone_destaque3.png',
      title: 'Fone de Ouvido Bluetooth - Cinza'
    }
  };

  // Adiciona opção Cinza ao select, se não existir
  if (![...colorSelect.options].some(opt => opt.value === 'Cinza')) {
    const option = document.createElement('option');
    option.value = 'Cinza';
    option.textContent = 'Cinza';
    colorSelect.appendChild(option);
  }

  // Remove opção Azul, se existir
  [...colorSelect.options].forEach(opt => {
    if (opt.value === 'Azul') {
      colorSelect.removeChild(opt);
    }
  });

  colorSelect.addEventListener('change', function () {
    const selected = colorSelect.value;
    if (colorOptions[selected]) {
      productImage.src = colorOptions[selected].img;
      productTitle.textContent = colorOptions[selected].title;
    }
  });

});
