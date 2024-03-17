// Adicione esta função para converter o texto para maiúsculas
function convertToUppercase() {
  const inputText = document.getElementById('inputText');
  inputText.value = inputText.value.toUpperCase();
}

function encryptText() {
  const inputText = document.getElementById('inputText').value.toLowerCase();
  const encryptedText = encrypt(inputText);
  document.getElementById('encryptedText').value = encryptedText;
}

function decryptText() {
  const encryptedText = document.getElementById('encryptedText').value.toLowerCase();

  // Copiar o texto criptografado para o campo de entrada
  document.getElementById('inputText').value = encryptedText;

  // Ajuste a lógica diretamente na função decryptText
  const decryptedText = decrypt(encryptedText);
  document.getElementById('encryptedText').value = decryptedText;
}

function copyToClipboard() {
  const outputText = document.getElementById('encryptedText');

  // Selecionar e copiar o texto da caixa de texto
  outputText.select();
  document.execCommand('copy');

  alert('Texto copiado para a área de transferência!');
}

// Remova a função isEncrypted

function encrypt(text) {
  return text.replace(/e/g, 'enter')
             .replace(/i/g, 'imes')
             .replace(/a/g, 'ai')
             .replace(/o/g, 'ober')
             .replace(/u/g, 'ufat');
}

function decrypt(text) {
  // A lógica da descriptografia permanece a mesma
  return text.replace(/enter/g, 'e')
             .replace(/imes/g, 'i')
             .replace(/ai/g, 'a')
             .replace(/ober/g, 'o')
             .replace(/ufat/g, 'u');
}

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 2;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

anime.timeline({loop: true})
.add({
  targets: '.ml4 .letters-1',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
}).add({
  targets: '.ml4 .letters-1',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
}).add({
  targets: '.ml4 .letters-2',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
}).add({
  targets: '.ml4 .letters-2',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
}).add({
  targets: '.ml4 .letters-3',
  opacity: ml4.opacityIn,
  scale: ml4.scaleIn,
  duration: ml4.durationIn
}).add({
  targets: '.ml4 .letters-3',
  opacity: 0,
  scale: ml4.scaleOut,
  duration: ml4.durationOut,
  easing: "easeInExpo",
  delay: ml4.delay
}).add({
  targets: '.ml4',
  opacity: 0,
  duration: 500,
  delay: 500
});
