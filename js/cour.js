  const lecons = document.querySelectorAll('.lecons-dropdown h3');

  for (var i = 0; i < lecons.length; i++) {
    lecons[i].getAttribute("data-offline")
    if (lecons[i].getAttribute("data-offline") === "0") {
        lecons[i].classList.add('online')
    } else if (lecons[i].getAttribute("data-offline") === "1") {
        lecons[i].classList.add('offline')
    }
  }

  const dropers = document.querySelectorAll('.droper');
  const droped =  document.querySelectorAll('.lecons-dropdown');

  for (let i = 0; i < dropers.length; i++) {
    dropers[i].addEventListener('click', function() {
      dropers[i].classList.toggle('after_closed');
      dropers[i].classList.toggle('after_open');
      droped[i].classList.toggle('is_hidden')
    })
  }

  if (navigator.onLine === false) {
    const content_offline = document.querySelectorAll('.online a');

    for (var i = 0; i < content_offline.length; i++) {
      content_offline[i].addEventListener('click', (event) => {
        event.preventDefault();
      })
    }

    var header = document.querySelector('header');
    header.innerHTML = "<style> .online{cursor: not-allowed !important;} .online a{cursor: not-allowed !important;} </style>"
  }
