const dates = document.querySelectorAll('.date');

// クリックイベントを追加
dates.forEach(date => {
    date.addEventListener('click', function () {
        // 既に選択されている要素の選択状態を解除
        dates.forEach(d => d.classList.remove('selected'));

        // クリックした要素に選択クラスを追加
        this.classList.add('selected');
    });
});
