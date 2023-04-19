// let Acura = ["NSX"];
// let AstonMartin = [];
// let Audi = [];
// let BMW = [];
// let Bugatti = [];
// let Chevrolet = [];
// let Dodge = [];
// let Ferrari = [];
// let Ford = [];
// let Honda = [];
// let Jaguar = [];
// let Lamborghini = [];
// let Lexus = [];
// let Maserati = [];
// let McLaren = [];
// let MercedesBenz = [];
// let Nissan = [];
// let Pagani = [];
// let Porsche = [];
// let Tesla = [];
// let Koenigsegg = [];
// let Toyota = [];


// const makeSelect = document.getElementById('SelectMake');
// const modelSelect = document.getElementById('Select-model');

makeSelect.addEventListener('change', () => {
  // Get the selected make
  const selectedMake = makeSelect.value;
  
  // Update the model select options based on the selected make
  updateModelSelect(selectedMake);
});


function addOptionsToModelSelect(options) {
  // Add a new option for each model to the model select
  options.forEach((option) => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    modelSelect.appendChild(optionElement);
  });
}

document.addEventListener('DOMContentLoaded', () => {
    const makeSelect = document.getElementById('SelectMake');
    const modelSelect = document.getElementById('Select-model');
  
    makeSelect.addEventListener('change', () => {
      const selectedMake = makeSelect.value;
      updateModelSelect(selectedMake);
    });
  
    function updateModelSelect(make) {
      modelSelect.innerHTML = '';
      switch (make) {
        case 'Acura':
          addOptionsToModelSelect(['MDX', 'RDX', 'TLX']);
          break;
        case 'AstonMartin':
          addOptionsToModelSelect(['DB11', 'DBS Superleggera', 'Vantage']);
          break;
        case 'Audi':
          addOptionsToModelSelect(['A3', 'A4', 'A6']);
          break;
          default:
            // If the selected make does not have any models, add a placeholder option
            modelSelect.innerHTML = '<option disabled selected>No models available</option>';
      }
      modelSelect.disabled = false;
    }
  });


