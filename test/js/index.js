var success = document.getElementById('success')
var error = document.getElementById('error')
var warning = document.getElementById('warning')
var info = document.getElementById('info')
var light = document.getElementById('light')
var dark = document.getElementById('dark')

success.addEventListener('click', function () {
  iziToast.show({
    title: 'موفق',
    message: 'متن تستی وارد میشه، برای تست نوتیفیکیشن ',
    rtl: true,
    color: 'green', // blue, red, green, yellow, orange
    closeOnEscape: true,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    messageColor: '#fff',
    titleColor: '#fff',
    iconColor: '#fff',
    theme: 'light', // dark, light
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    transitionInMobile: 'bounceInDown',
    transitionOutMobile: 'fadeOutRight',
    animateInside: false,
    icon: 'fad fa-check-circle' // https://fontawesome.com/
  })
})

error.addEventListener('click', function () {
  iziToast.show({
    title: 'خطا',
    message: 'متن تستی وارد میشه، برای تست نوتیفیکیشن ',
    rtl: true,
    color: 'red', // blue, red, green, yellow, orange
    closeOnEscape: true,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    messageColor: '#fff',
    titleColor: '#fff',
    iconColor: '#fff',
    theme: 'light', // dark, light
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    transitionInMobile: 'bounceInDown',
    transitionOutMobile: 'fadeOutRight',
    animateInside: false,
    icon: 'fad fa-times-circle' // https://fontawesome.com/
  })
})

warning.addEventListener('click', function () {
  iziToast.show({
    title: 'هشدار',
    message: 'متن تستی وارد میشه، برای تست نوتیفیکیشن ',
    rtl: true,
    color: 'yellow', // blue, red, green, yellow, orange
    closeOnEscape: true,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    messageColor: '#676767',
    titleColor: '#676767',
    iconColor: '#676767',
    theme: 'light', // dark, light
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    transitionInMobile: 'bounceInDown',
    transitionOutMobile: 'fadeOutRight',
    animateInside: false,
    icon: 'fad fa-exclamation-triangle' // https://fontawesome.com/
  })
})

info.addEventListener('click', function () {
  iziToast.show({
    title: 'اطلاعات',
    message: 'متن تستی وارد میشه، برای تست نوتیفیکیشن ',
    rtl: true,
    color: 'blue', // blue, red, green, yellow, orange
    closeOnEscape: true,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    messageColor: '#fff',
    titleColor: '#fff',
    iconColor: '#fff',
    theme: 'light', // dark, light
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    transitionInMobile: 'bounceInDown',
    transitionOutMobile: 'fadeOutRight',
    animateInside: false,
    icon: 'fad fa-info-circle' // https://fontawesome.com/
  })
})

light.addEventListener('click', function () {
  iziToast.show({
    title: 'سوال',
    message: 'متن تستی وارد میشه، برای تست نوتیفیکیشن  ',
    rtl: true,
    closeOnEscape: true,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    messageColor: '#676767',
    titleColor: '#676767',
    iconColor: '#676767',
    theme: 'light', // dark, light
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    transitionInMobile: 'bounceInDown',
    transitionOutMobile: 'fadeOutRight',
    animateInside: false,
    icon: 'fad fa-question-circle' // https://fontawesome.com/
  })
})

dark.addEventListener('click', function () {
  iziToast.show({
    title: 'سوال',
    message: 'متن تستی وارد میشه، برای تست نوتیفیکیشن ',
    rtl: true,
    closeOnEscape: true,
    position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
    theme: 'dark', // dark, light
    transitionIn: 'bounceInLeft',
    transitionOut: 'fadeOutRight',
    transitionInMobile: 'bounceInDown',
    transitionOutMobile: 'fadeOutRight',
    animateInside: false,
    icon: 'fad fa-question-circle' // https://fontawesome.com/
  })
})
