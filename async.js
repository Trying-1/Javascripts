async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Network request failed');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
  