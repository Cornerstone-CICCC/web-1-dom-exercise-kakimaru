// YOUR CODE HERE
const btn1 = document.querySelector('#btn1')
const output1 = document.querySelector('#output1')
const btn2 = document.querySelector('#btn2')
const output2 = document.querySelector('#output2')
const btn3 = document.querySelector('#btn3')
const output3p = document.querySelector('#output3 p')
const btn4 = document.querySelector('#btn4')
const output4 = document.querySelectorAll('#output4 p')
const btn5 = document.querySelector('#btn5')
const output5i = document.querySelector('#output5 input')


// task1
btn1.addEventListener('click', () => {
  output1.style.color = 'red'
})

// task2
const span = document.createElement('span')
btn2.addEventListener('click', () => {
  span.innerHTML= `Hello world`;
  output2.append(span)
})

// task3
btn3.addEventListener('click', () => {
  output3p.classList.remove('small-text')
})

// task4
// console.log(output4);
btn4.addEventListener('click', () => {
  output4.forEach(p => p.style.color = 'red')
})

// task5
btn5.addEventListener('click', () => {
  const value = output5i.value;
  console.log(value);
})