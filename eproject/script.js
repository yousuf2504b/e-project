const form = document.getElementById('bookingForm');
const clearBtn = document.getElementById('clearBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const date = form.date.value;
  const guests = form.guests.value;

  if (!name || !email || !date) {
    alert('Please fill required fields!');
    return;
  }

  const formData = { name, email, phone, date, guests };

  localStorage.setItem('bookingFormData', JSON.stringify(formData));

  alert('Form data saved locally!');
});

window.addEventListener('load', () => {
  const savedData = localStorage.getItem('bookingFormData');
  if (savedData) {
    const formData = JSON.parse(savedData);
    form.name.value = formData.name || '';
    form.email.value = formData.email || '';
    form.phone.value = formData.phone || '';
    form.date.value = formData.date || '';
    form.guests.value = formData.guests || 1;
    console.log('Loaded saved form data:', formData);
  }
});

clearBtn.addEventListener('click', () => {
  form.reset();
});

clearAllBtn.addEventListener('click', () => {
  localStorage.removeItem('bookingFormData');
  form.reset();
  alert('All saved data deleted!');
});

console.log(formData)


fetch('navbar.html')
.then(response => response.text())
.then(data => {
  document.getElementById('navbar').innerHTML = data;
});