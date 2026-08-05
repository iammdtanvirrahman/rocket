const buttons = document.querySelectorAll('[data-screen]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.screen;

    // Future router hook
    console.log(`Navigate to: ${target}`);

    if (target === 'play') {
      alert('Play screen will be added next.');
    }
  });
});
