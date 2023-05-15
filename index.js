let display = document.getElementById('screen');

//clears the display screen
function wipe() {
  display.value = '';
}

//deletes last number
function backspace() {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

//display
function show(number) {
  display.value += number;
}

function calc() {
  const expression = display.value;

  try {
    const result = eval(expression);

    if (Number.isFinite(result)) {
      display.value = result;
    } else {
      display.value = 'Cant divide by 0';
    }
  } catch (error) {
    display.value = 'Cant divide by 0';
  }
}
