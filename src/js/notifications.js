const notificationUpSection = document.querySelector('.notification-up');

// Получаем секцию с классом "notification-warning"
const notificationWarningSection = document.querySelector('.notification-warning');

// Получаем секцию с классом "notification-info"
const notificationInfoSection = document.querySelector('.notification-info');

const infoTrigger = document.querySelectorAll('.buy__info');

const donateTrigger = document.querySelector('.balance');

const warningTrigger = document.getElementById('diamond');

const closeTrigger = document.querySelectorAll('.notification__back');

const body = document.body;

const bgInfo = document.querySelector('.bg-info');
const bgUp = document.querySelector('.bg-up');
const bgWarning = document.querySelector('.bg-warning');

infoTrigger.forEach((el) => {
  el.addEventListener('click', () => {
    notificationInfoSection.classList.add('active');
    body.classList.add('active');
    bgInfo.classList.add('active');
  });
});

closeTrigger.forEach((el) => {
  el.addEventListener('click', () => {
    notificationInfoSection.classList.remove('active');
    notificationUpSection.classList.remove('active');
    notificationWarningSection.classList.remove('active');
    body.classList.remove('active');
    bgInfo.classList.remove('active');
    bgUp.classList.remove('active');
    bgWarning.classList.remove('active');
  });
});

donateTrigger.addEventListener('click', () => {
  notificationUpSection.classList.add('active');
  body.classList.add('active');
  bgUp.classList.add('active');
});

warningTrigger.addEventListener('click', () => {
  notificationWarningSection.classList.add('active');
  body.classList.add('active');
  bgWarning.classList.add('active');
});

const closeModal = (section, bg) => {
  section.classList.remove('active');
  body.classList.remove('active');
  bg.classList.remove('active');
};

bgUp.addEventListener('click', (event) => {
  // Проверяем, кликнули ли по самому модальному окну или его детям
  if (event.target !== bgUp && event.target.closest('.notification-up')) {
    return; // Если клик внутри окна, ничего не делаем
  }

  // Закрываем окно, если клик был за пределами
  notificationUpSection.classList.remove('active');
  body.classList.remove('active');
  bgUp.classList.remove('active');
});

bgInfo.addEventListener('click', (event) => {
  // Проверяем, кликнули ли по самому модальному окну или его детям
  if (event.target !== bgInfo && event.target.closest('.notification-info')) {
    return; // Если клик внутри окна, ничего не делаем
  }

  // Закрываем окно, если клик был за пределами
  notificationInfoSection.classList.remove('active');
  body.classList.remove('active');
  bgInfo.classList.remove('active');
});

bgWarning.addEventListener('click', (event) => {
  // Проверяем, кликнули ли по самому модальному окну или его детям
  if (event.target !== bgWarning && event.target.closest('.notification-warning')) {
    return; // Если клик внутри окна, ничего не делаем
  }

  // Закрываем окно, если клик был за пределами
  notificationWarningSection.classList.remove('active');
  body.classList.remove('active');
  bgWarning.classList.remove('active');
});

// bgInfo.addEventListener('click', (event) => {
//   // Проверяем, кликнули ли по самому модальному окну
//   if (notificationInfoSection.closest(event.target)) {
//     closeModal(notificationInfoSection, bgInfo);
//   }
// });

// bgUp.addEventListener('click', (event) => {
//   if (event.target !== notificationUpSection) {
//     closeModal(notificationUpSection, bgUp);
//   }
// });

// bgWarning.addEventListener('click', (event) => {
//   if (event.target !== notificationWarningSection) {
//     closeModal(notificationWarningSection, bgWarning);
//   }
// });
