document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);
  
    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
  })
  
  const handleNewItemFormSubmit = function (event) {
    event.preventDefault();
  
    const endangeredAnimalsItem = createEndangeredAnimalsItem(event.target);
    const endangeredAnimals = document.querySelector('#endangered-animals');
    endangeredAnimals.appendChild(endangeredAnimalsItem);
  
    event.target.reset();
  }
  
  const createEndangeredAnimalsItem = function (form) {
    const endangeredAnimalsItem = document.createElement('li');
    endangeredAnimalsItem.classList.add('endangered-animals-item');
  
    const name = document.createElement('h2');
    name.textContent = form.name.value;
    endangeredAnimalsItem.appendChild(name);
  
    const species = document.createElement('h2');
    species.textContent = form.species.value;
    endangeredAnimalsItem.appendChild(species);
  
    const continent = document.createElement('h2');
    continent.textContent = form.continent.value;
    endangeredAnimalsItem.appendChild(continent);
  
    return endangeredAnimalsItem;
  }
  
  const handleDeleteAllClick = function (event) {
    const endangeredAnimals = document.querySelector('#endangered-animals');
    endangeredAnimals.innerHTML = '';
  }