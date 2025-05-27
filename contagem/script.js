function atualizarContagem() {
  const destino = new Date("2061-07-28T00:00:00").getTime();
  const agora = new Date().getTime();
  const tempoRestante = destino - agora;

  if (tempoRestante < 0) {
    document.getElementById("countdown").innerHTML = "O Cometa Halley já passou!";
    document.getElementById("progress-bar").style.width = "100%";
    return;
  }

  const segundos = Math.floor((tempoRestante / 1000) % 60);
  const minutos = Math.floor((tempoRestante / 1000 / 60) % 60);
  const horas = Math.floor((tempoRestante / (1000 * 60 * 60)) % 24);
  const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));

  document.getElementById("dias").innerText = dias.toString().padStart(5, '0');
  document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
  document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
  document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');

  // Barra de progresso
  const inicio = new Date("2024-05-27T00:00:00").getTime(); // Data de hoje
  const total = destino - inicio;
  const passou = agora - inicio;
  const porcentagem = Math.min(100, (passou / total) * 100);

  document.getElementById("progress-bar").style.width = `${porcentagem}%`;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();
