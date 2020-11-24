const timeBox = document.getElementById('timeBox');
const dateBox = document.getElementById('dateBox');

// Fonction qui affiche l'heure et la date du jour
let displayTime = () => {
  let date = new Date();
  let h = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let dayDate = date.toLocaleString('fr-FR', {
    weekday: 'short',
    day: 'numeric',
    month: 'numeric',
    year: '2-digit'
  });

  // Affichage de l'heure avec deux chiffres
  h = h < 10 ? '0' + h : h;
  min = min < 10 ? '0' + min : min;
  sec = sec < 10 ? '0' + sec : sec;

  let time = `${h} : ${min} : ${sec}`;

  timeBox.innerText = time;
  dateBox.innerText = dayDate;
}

// Lancement de la fonction displayTime une première fois pour que les secondes défilent dès qu'on arrive sur la page
displayTime();

// Lancement de la fonction displayTime toutes les 100 millisecondes
setInterval(displayTime, 100);
