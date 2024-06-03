// bookmark.js
function addBookmark(name, link, category) {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const newBookmark = { name, link, category };

    // 중복 확인
    if (bookmarks.some(bookmark => bookmark.link === link)) {
        alert('이미 북마크에 추가된 레시피입니다.');
        return;
    }

    // 북마크를 추가
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // 하트 아이콘 채우기
    const bookmarkButton = document.getElementById('bookmark-button');
    bookmarkButton.innerHTML = '<i class="fas fa-heart"></i>';

    alert('북마크에 추가되었습니다.');
}

document.addEventListener('DOMContentLoaded', function() {
    const wrap = document.getElementById('bar');

    if (wrap) {
        wrap.innerHTML = generateSideBar();
    }

    displayBookmarks();
});

function displayBookmarks() {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const categories = {
        korean: document.getElementById('korean'),
        western: document.getElementById('western'),
        japanese: document.getElementById('japanese'),
        chinese: document.getElementById('chinese')
    };

    // 각 카테고리의 북마크 리스트를 초기화
    for (let key in categories) {
        if (categories[key]) {
            categories[key].innerHTML = '';
        }
    }

    // 북마크를 해당 카테고리에 추가
    bookmarks.forEach(bookmark => {
        const bookmarkItem = document.createElement('div');
        bookmarkItem.className = 'bookmark-item';
        bookmarkItem.innerHTML = `<button onclick="removeBookmark('${bookmark.link}')">X</button><a href="${bookmark.link}">${bookmark.name}</a>`;
        
        if (categories[bookmark.category]) {
            categories[bookmark.category].appendChild(bookmarkItem);
        }
    });
}

function removeBookmark(link) {
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    bookmarks = bookmarks.filter(bookmark => bookmark.link !== link);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    displayBookmarks();
}
