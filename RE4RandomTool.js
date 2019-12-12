'use strict';

var Button = document.getElementById('Random');
var divarea = document.getElementById('result-area');
var Dead = document.getElementById('Dead');
var number = document.getElementById('number');
var tweet = document.getElementById('tweet-area');

//Take記載機能、クリアしたら花火。

const shibari = [
    '商人・アタッシュ開くの禁止',
    '命中率0%',
    'アタッシュ中身全捨て',
    '商人・アイテム拾得禁止',
    'ノーダメージ',
    '命中率100%',
    'リロード禁止',
    '最大撃退数',

];

const Chapter = [
    '1-1',
    '1-2',
    '1-3',
    '2-1',
    '2-2',
    '2-3',
    '3-1',
    '3-2',
    '3-3',
    '3-4',
    '4-1',
    '4-2',
    '4-3',
    '4-4',
    '5-1',
    '5-2',
    '5-3',
    '5-4',
    'Final'
];




var count = 0;


number.onchange = () => {
    count = parseInt(number.value);
    console.log(count);
    
}







function del(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

Button.onclick = () => {
    console.log(typeof count)
    //配列操作
    if (count === 4 || count === 5 || count === 6 || count === 10 || count === 15 || count === 17) {

        shibari.push('ウェイト禁止');
        console.log(shibari);
    }

    if (count === 13 || count === 0) {
        shibari.pop();
        console.log(shibari);
    }

    //子要素削除
    del(divarea);
    del(tweet);

    //クリアした時の処理一覧
    if (count === Chapter.length) {
        const maintext = document.createElement('h2');
        maintext.innerText = `クリアおめでとう！`;
        divarea.appendChild(maintext);

        const anchor = document.createElement('a');
        const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
            + encodeURIComponent('ランダム縛りクリア！'); +
                '&ref_src=twsrc%5Etfw';

        anchor.setAttribute('href', hrefValue);
        anchor.className = 'twitter-hashtag-button';
        anchor.setAttribute('data-text', `バイオ4チャプター毎ランダム縛りクリアしました！ #バイオ4チャプター毎ランダム縛りツール https://marshall0910.github.io/RE4RandomTool/RE4RandomTool.html`);
        anchor.innerText = 'Tweet #バイオ4チャプター毎ランダム縛りツール'

        tweet.appendChild(anchor);

        const script = document.createElement('script');
        script.setAttribute('src', 'https://platform.twitter.com/widgets.js');

        tweet.appendChild(script);
    }
    if (count >= Chapter.length) {
        return;
    }

    //配列からランダム取得した結果を変数に入れてChapterと共に表示。

    var RandomShibari = shibari[Math.floor(Math.random() * shibari.length)];

    const header = document.createElement('h3');
    header.innerText = `Chapter${Chapter[count]}の縛りは`;
    divarea.appendChild(header);

    const maintext = document.createElement('h2');
    maintext.innerText = `${RandomShibari}`;
    divarea.appendChild(maintext);



    //tweetボタン

    const anchor = document.createElement('a');
    const hrefValue = 'https://twitter.com/intent/tweet?button_hashtag='
        + encodeURIComponent('https://marshall0910.github.io/RE4RandomTool/RE4RandomTool.html'); +
            '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.className = 'twitter-hashtag-button';
    anchor.setAttribute('data-text', `今日はChapter${Chapter[count]}で終わりました。#バイオ4チャプター毎ランダム縛りツール https://marshall0910.github.io/RE4RandomTool/RE4RandomTool.html`);
    anchor.innerText = 'Tweet #バイオ4チャプター毎ランダム縛りツール'

    tweet.appendChild(anchor);

    const script = document.createElement('script');
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js');

    tweet.appendChild(script);

    //配列を戻す

    if (count === 4 || count === 5 || count === 6 || count === 10 || count === 15 || count === 17) {

        shibari.pop();
        console.log(shibari);
    }

    if (count === 13 ||count === 0) {
        shibari.push('最大撃退数');
        console.log(shibari);

    }

    //カウント変数インクリメント
    count++;

};


//you are dead ボタン
Dead.onclick = () => {
    if (confirm('本当に死にましたか？')) {
        count = 0;

        location.reload();
    }
};


