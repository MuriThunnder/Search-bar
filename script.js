document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const suggestionsList = document.getElementById('suggestionsList');
  
    const suggestions = ['JavaScript', 'HTML', 'CSS', 'React', 'Vue', 'Angular', 'Node.js'];
  
    searchInput.addEventListener('input', function () {
      const inputValue = searchInput.value.toLowerCase();
      const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(inputValue));
      displaySuggestions(filteredSuggestions);
    });
  
    function displaySuggestions(suggestionsArray) {
      suggestionsList.innerHTML = '';
  
      suggestionsArray.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', function () {
          searchInput.value = suggestion;
          suggestionsList.innerHTML = '';
        });
        suggestionsList.appendChild(li);
      });
    }
  
    document.addEventListener('click', function (event) {
      const isSearchInput = searchInput.contains(event.target);
      const isSuggestionsList = suggestionsList.contains(event.target);
  
      if (!isSearchInput && !isSuggestionsList) {
        suggestionsList.innerHTML = '';
      }
    });
  });
  