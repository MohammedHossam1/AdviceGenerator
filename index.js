var button = document.getElementById('adviceButton');
var adviceInput = document.getElementById('advice');
var adviceNum = document.getElementById('advice-num');
var previousAdvice = '';

button.addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            var newAdvice = data.slip.advice;
            if (newAdvice !== previousAdvice) {
                adviceInput.innerHTML = `"${newAdvice}"`;
                adviceNum.innerHTML = `Advice #${data.slip.id}`;
                previousAdvice = newAdvice;
            } else {
                button.click(); // Fetch advice again
            }
        })
        .catch(error => console.error('Error:', error));
});


const toast = document.getElementById('toast');


function updateOfflineStatus() {
    toast.classList.remove('hidden');
}

document.addEventListener('offline', updateOfflineStatus);

// تحديث الحالة عند تحميل الصفحة
if (! navigator.onLine) {
    updateOfflineStatus();
}
