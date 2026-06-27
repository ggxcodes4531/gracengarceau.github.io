const typedName = document.getElementById('typed-name');

if (typedName) {
  const fullText = 'Gracen Garceau';
  let index = 0;

  function typeName() {
    typedName.textContent = fullText.slice(0, index);
    index += 1;

    if (index <= fullText.length) {
      setTimeout(typeName, 90);
    }
  }

  typeName();
}
