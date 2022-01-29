let 美川さん;
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

  isGender(性別) {
    if (this.#性別 == 性別) {
      console.log('(頷く)');
      return true;
    } else {
      console.log('(首を振る)');
      return false;
    }
  }

  isSign(星座) {
    if (this.#星座 == 星座) {
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
  console.log('わー！'+美川さん.name()+'さんだー！！！'
              +美川さん.name()+'さん！'+美川さん.name()+'さん！');
}

function search2() {
  let 星座;
  let 性別;
  let 返事;
  
  for (星座 of 星座リスト) {
    for (性別 of 性別リスト) {
      
      console.log(星座+'の'+性別+'ですか？');
      返事 = 美川さん.isAsked(星座, 性別);
      if (返事) {
        return;
      }
    }
  }
}

init();
search2();
美川さん.startSinging();