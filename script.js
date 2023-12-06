
document.addEventListener('DOMContentLoaded', function () {
    const episodesList = document.getElementById('episode-list');

  
    const episode1 = document.createElement('li');
    episode1.textContent = 'Episode 1: Talking about illigal drugs';
    episodesList.appendChild(episode1);

    const episode2 = document.createElement('li');
    episode2.textContent = 'Still working on Episode 2...';
    episodesList.appendChild(episode2);

    
});
