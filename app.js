const tasksRemaining = document.querySelector('#tasksRemaining');

tasksRemaining.innerHTML = `You have 1 task remaining`;

// ------------------------------ MODALS

const tasksModalOpen = document.querySelector('#tasksModalOpen');
const tasksModalContainer = document.querySelector('#tasksModalContainer');
const tasksModalClose = document.querySelector('#tasksModalClose');

tasksModalOpen.addEventListener('click', () => {
    tasksModalContainer.classList.add('show')
});

tasksModalClose.addEventListener('click', () => {
    tasksModalContainer.classList.remove('show')
});
