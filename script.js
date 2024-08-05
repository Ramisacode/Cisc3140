document.addEventListener('DOMContentLoaded', () => {
    // Medal Rankings Mock Data
    const medalData = [
        { country: 'Australia', gold: 17, silver: 7, bronze: 22 },
        { country: 'Germany', gold: 10, silver: 11, bronze: 16 },
        { country: 'Great Britain', gold: 22, silver: 20, bronze: 22 },
        { country: 'Hungary', gold: 6, silver: 7, bronze: 7 },
        { country: 'Italy', gold: 10, silver: 10, bronze: 20 },
        { country: 'Japan', gold: 27, silver: 14, bronze: 17 }
    ];

    const medalList = document.getElementById('medal-list');
    medalData.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.country}: Gold ${item.gold}, Silver ${item.silver}, Bronze ${item.bronze}`;
        medalList.appendChild(listItem);
    });

    // Sports List Mock Data
    const sportsData = ['Baseball', 'Boxing', 'Diving', 'Karate', 'Softball'];
    const sportsList = document.getElementById('sports-list');
    sportsData.forEach((sport) => {
        const listItem = document.createElement('li');
        listItem.textContent = sport;
        sportsList.appendChild(listItem);
    });

    // News Section Mock Data
    const newsData = [
        { headline: 'Nine of the most memorable moments from the Tokyo 2020 Olympic Games', detail: 'https://olympics.com/en/news/nine-of-the-most-memorable-moments-from-the-tokyo-2020-olympic-games' },
        { headline: 'New sports mesmerise, puzzle and entertain to leave an indelible mark on Tokyo 2020', detail: 'https://olympics.com/en/news/new-sports-mesmerise-puzzle-and-entertain' },
        { headline: 'Fans vote Rayssa Leal as the winner of The Visa Award for inspirational display at the Olympic Games Tokyo 2020', detail: 'https://olympics.com/en/news/fans-vote-rayssa-leal-winner-of-the-visa-award' }
    ];
    
    const newsList = document.getElementById('news-list');
    newsData.forEach((news) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${news.headline}: `;

        const link = document.createElement('a');
        link.href = news.detail;
        link.textContent = 'Read more';
        link.target = '_blank';
        
        listItem.appendChild(link);
        newsList.appendChild(listItem);
    });
});
