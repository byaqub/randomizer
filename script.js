const staticArray = [
  "Alice Johnson",
  "Bob Smith",
  "Charlie Brown",
  "David White",
  "Eve Davis",
  "Frank Miller",
  "Grace Wilson",
  "Heidi Moore",
  "Ivan Taylor",
  "Judy Anderson",
  "Karl Thomas",
  "Liam Jackson",
  "Mona Harris",
  "Nina Martin",
  "Oscar Lee",
  "Paul Walker",
  "Quinn Scott",
  "Rita Adams",
  "Steve Baker",
  "Tina Turner",
  "Uma Patel",
]; // Hard-coded array of full names

let lastWinningIndex = -1; // To store the index of the last winning number

function startRandomizer() {
  const array = staticArray;

  const list = document.getElementById("list");
  list.innerHTML = "";

  // Duplicate the array items to create a seamless loop
  const items = [...array, ...array, ...array];
  items.forEach((item) => {
    const div = document.createElement("div");
    div.textContent = item;
    list.appendChild(div);
  });

  const itemHeight = list.firstElementChild.offsetHeight;
  const totalItems = items.length;
  const totalHeight = itemHeight * totalItems;

  list.style.height = `${totalHeight}px`; // Adjust the height to accommodate all items

  let currentIndex = 0;
  const randomTime = Math.floor(Math.random() * (8000 - 3000 + 1)) + 3000;

  // Ensure that the new winner is not the same as the previous winner
  let winningIndex;
  do {
    winningIndex = Math.floor(Math.random() * array.length);
  } while (winningIndex === lastWinningIndex);

  // Update lastWinningIndex
  lastWinningIndex = winningIndex;

  // Function to show the modal with the winning number
  function showModal() {
    const modal = document.getElementById("modal");
    const resultText = document.getElementById("modal-result");

    resultText.textContent = `Congratulations: ${array[winningIndex]}`;
    modal.style.display = "flex"; // Show the modal
  }

  const intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalItems;
    list.style.transform = `translateY(-${currentIndex * itemHeight}px)`;
  }, 50); // Shortened interval for smoother animation

  setTimeout(() => {
    clearInterval(intervalId);
    showModal();
  }, randomTime);
}

// Close modal event listener
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});
