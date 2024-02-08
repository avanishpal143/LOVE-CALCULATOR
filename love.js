document.getElementById('calculateBtn').addEventListener('click', async function () {
  const yourName = document.getElementById('yourName').value;
  const partnerName = document.getElementById('partnerName').value;

  try {
    const response = await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${partnerName}`, {
      headers: {
        'X-RapidAPI-Key': '86e053e618msh3b3aa284de934a7p109394jsnd1c74d481b90',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'        
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    displayResult(data);
  } catch (error) {
    console.error(error);
  }
});

function displayResult(data) {
const resultContainer = document.getElementById('result');
resultContainer.innerHTML = `Love Percentage: ${data.percentage}%<br>${data.result}`;
}
