const btnLog = document.getElementById('btn_log')
const names = document.getElementById('name')
const mail = document.getElementById('mail')

user = {};


const getValues = (e) => {
    user.name = names.value,
    user.correo = mail.value
    if (user.name !== "") {
    localStorage.setItem('user', JSON.stringify(user))
    } else {alert('Name Invalid')}
}

btnLog.addEventListener('click', getValues)





