let 美川さん;
const 星座順 = { 'おひつじ座':0, 'おうし座':1, 'ふたご座':2, 'かに座':3, 
                'しし座':4, 'おとめ座':5, 'てんびん座':6, 'さそり座':7, 
                'いて座':8, 'やぎ座':9, 'みずがめ座':10, 'うお座':11 };
const 性別順 = { '男':0, '女':1 };

const 星座リスト = ['おひつじ座', 'おうし座', 'ふたご座', 'かに座', 
                  'しし座', 'おとめ座', 'てんびん座', 'さそり座', 
                  'いて座', 'やぎ座', 'みずがめ座', 'うお座'];
const 性別リスト = ['男', '女'];

class Mikawa {
  #名前;
  #星座;
  #性別;
  #気持ちよく歌いだせるか;

  constructor(名前, 星座, 性別) {
    this.#名前 = 名前;
    this.#星座 = 星座;
    this.#性別 = 性別;
    this.#気持ちよく歌いだせるか = false;
  }

  startIntro() {
    console.log('~♪');
  }

  startSinging() {
    if (this.#気持ちよく歌いだせるか) {
      console.log('そうよ！私は'+this.#星座+'の'+this.#性別+'〜♪');
    } else {
      console.log('いいえ、私は'+this.#星座+'の'+this.#性別+'〜♪');
      this.feelsSad(); // 落ち込んじゃう
    }
  }

  isAsked(星座, 性別) {
    if (this.#星座 == 星座 && this.#性別 == 性別) {
      console.log('(頷く)');
      this.#気持ちよく歌いだせるか = true;
      return true;
    } else {
      console.log('(首を振る)');
      return false;
    }
  }

  feelsSad() {
    return;
  }

  name() {
    return this.#名前;
  }

  isGreaterSign(星座) {
    if (星座順[this.#星座] > 星座順[星座]) {
      console.log('(頷く)');
      return true;
    } else {
      console.log('(首を振る)');
      return false;
    }
  }

  isGreaterGender(性別) {
    if (性別順[this.#性別] > 性別順[性別]) {
      console.log('(頷く)');
      return true;
    } else {
      console.log('(首を振る)');
      return false;
    }
  }
}

function init() {
  美川さん = new Mikawa('美川', 'さそり座', '女');
  美川さん.startIntro();
}

function search4() {
  let 星座 = binarySearchSign(星座リスト);;
  let 性別 = binarySearchGender(性別リスト);

  console.log('ってことは'+星座+'の'+性別+'ですね？');
  美川さん.isAsked(星座, 性別);
}

function binarySearchSign(星座リスト) {
  let iMin = 0;
  let iMax = 星座リスト.length - 1;
  let iMid = Math.floor((iMin + iMax) / 2);
  let 真ん中の星座;
  while (iMin < iMax) {
    真ん中の星座  = 星座リスト[iMid + 1];
    console.log(真ん中の星座+'以降の星座ですか？');
    if (美川さん.isGreaterSign(星座リスト[iMid])) {
      iMin = iMid + 1;
    } else {
      iMax = iMid;
    }
    iMid = Math.floor((iMin + iMax) / 2);
  }
  return 星座リスト[iMid]
}

function binarySearchGender(性別リスト) {
  let iMin = 0;
  let iMax = 性別リスト.length - 1;
  let iMid = Math.floor((iMin + iMax) / 2);
  let 真ん中の性別;
  while (iMin < iMax) {
    真ん中の性別 = 性別リスト[iMid + 1];
    console.log('性別を名前の順にした時'+真ん中の性別+'以降ですか？');
    if (美川さん.isGreaterGender(性別リスト[iMid])) {
      iMin = iMid + 1;
    } else {
      iMax = iMid;
    }
    iMid = Math.floor((iMin + iMax) / 2);
  }
  return 性別リスト[iMid]
}

init();
search4();
美川さん.startSinging();