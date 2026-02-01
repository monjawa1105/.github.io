const COSTUMES = {
  normal: {
    label: "基本コスチューム",
    hoverColor: "rgba(239, 26, 26, 1)",
    copyText: "刻印完了"
  },
  winter: {
    label: "ウィンタースレイヤー",
    hoverColor: "rgba(0, 162, 255, 1)",
    copyText: "氷刻完了"
  },
  celeb: {
    label: "ダークトレーサー",
    hoverColor: "#fd4",
    copyText: "祝印刻定"
  }
};

const STORIES = {
  voice: {
    label: "ボイス図鑑",
    type: "voice",
    color: "rgba(255, 255, 255, 1)"
  },
  main: {
    label: "メインチャプター",
    type: "main",
    color: "rgba(253, 200, 51, 1)"
  },
  ev1: {
    label: "ICE DRAGON SAGA",
    type: "ev1",
    color: "rgba(0, 166, 255, 1)"
  },
  mg1: {
    label: "DRAGON DUNGEON RUN",
    type: "mg1",
    color: "rgba(3, 44, 73, 1)"
  },
  co1: {
    label: "めがにけっ",
    type: "co1",
    color: "rgba(255, 255, 255, 1)"
  },
  cp2: {
    label: "ニケ日本上陸プロジェクト",
    type: "cp2",
    color: "rgba(223, 196, 136, 1)"
  },
  cp1: {
    label: "満月の下でニケと共に",
    type: "cp1",
    color: "rgba(8, 38, 157, 1)"
  },
  co2: {
    label: "メティス部隊 特別四コマ漫画",
    type: "co2",
    color: "rgba(247, 109, 116, 1)"
  },
  ki1: {
    label: "ギロチンの記憶の破片",
    type: "ki1",
    color: "rgba(161, 242, 255, 1)"
  },
  bla1: {
    label: "blabla",
    type: "bla1",
    color: "rgb(255, 174, 0)"
  }
  
};

const MUSIC = {
  music1: {
    label: "Good Day Commander",
    type: "music1",
    color: "rgba(255, 255, 255, 1)"
  },
  music2: {
    label: "One-Winged Dark Lord",
    type: "music2",
    color: "rgba(253, 200, 51, 1)"
  },
  music3: {
    label: "ICE DRAGON SAGA",
    type: "music3",
    color: "rgba(0, 170, 255, 1)"
  },
  music4: {
    label: "Emergency",
    type: "music4",
    color: "rgba(0, 170, 255, 1)"
  },
  music5: {
    label: "FLIP-FLOP",
    type: "music5",
    color: "rgba(0, 170, 255, 1)"
  },
  music6: {
    label: "Tepid Apple Ade",
    type: "music6",
    color: "rgba(0, 170, 255, 1)"
  },
  music7: {
    label: "-",
    type: "music7",
    color: "rgba(0, 170, 255, 1)"
  },
  music8: {
    label: "Who's Dumber?",
    type: "music8",
    color: "rgba(0, 170, 255, 1)"
  },
  music9: {
    label: "Hey- Newbie-",
    type: "music9",
    color: "rgba(0, 170, 255, 1)"
  },
  music10: {
    label: "Languor",
    type: "music10",
    color: "rgba(0, 170, 255, 1)"
  },
  music11: {
    label: "Here Comes Trouble",
    type: "music11",
    color: "rgba(0, 170, 255, 1)"
  },
  music12: {
    label: "Recognition - underworld",
    type: "music12",
    color: "rgba(0, 170, 255, 1)"
  },
  music13: {
    label: "Start of Adventure",
    type: "music13",
    color: "rgba(0, 170, 255, 1)"
  },
  music14: {
    label: "Another Hero",
    type: "music14",
    color: "rgba(0, 170, 255, 1)"
  },
  music15: {
    label: "BOOGIE BOX",
    type: "music15",
    color: "rgba(0, 170, 255, 1)"
  },
  music16: {
    label: "Darkness",
    type: "music16",
    color: "rgba(0, 170, 255, 1)"
  },
  music17: {
    label: "Boogie Night",
    type: "music17",
    color: "rgba(0, 170, 255, 1)"
  },
  music18: {
    label: "Snowflakes（Night）",
    type: "music18",
    color: "rgba(0, 170, 255, 1)"
  },
  music19: {
    label: "Dragon Dungeon Run",
    type: "music19",
    color: "rgba(0, 170, 255, 1)"
  },
  music20: {
    label: "戦闘！プリム（仮名）",
    type: "music20",
    color: "rgba(0, 170, 255, 1)"
  },
  music21: {
    label: "Monochrome",
    type: "music21",
    color: "rgba(0, 170, 255, 1)"
  },
  music22: {
    label: "EEEEEEEEE-ntertainment",
    type: "music22",
    color: "rgba(0, 170, 255, 1)"
  },
  music23: {
    label: "Curious",
    type: "music23",
    color: "rgba(0, 170, 255, 1)"
  },
  music24: {
    label: "Scene of Memory",
    type: "music24",
    color: "rgba(0, 170, 255, 1)"
  },
  music25: {
    label: "AREA：H（Scenario Version）",
    type: "music25",
    color: "rgba(0, 170, 255, 1)"
  },
  music26: {
    label: "Demon King's Castle",
    type: "music26",
    color: "rgba(0, 170, 255, 1)"
  },
  music27: {
    label: "Break Away",
    type: "music27",
    color: "rgba(0, 170, 255, 1)"
  },
  music28: {
    label: "Fairy Tale's End",
    type: "music28",
    color: "rgba(0, 170, 255, 1)"
  },
  music29: {
    label: "Sunshine Sorrow",
    type: "music29",
    color: "rgba(0, 170, 255, 1)"
  },
  music30: {
    label: "Ice Dragon",
    type: "music30",
    color: "rgba(0, 170, 255, 1)"
  },
  music31: {
    label: "Freeze it All",
    type: "music31",
    color: "rgba(0, 170, 255, 1)"
  },
  music32: {
    label: "ICE DRAGON SAGA 特別映像",
    type: "music32",
    color: "rgba(0, 170, 255, 1)"
  },
  music33: {
    label: "Frost Pillar（Scenario Version）",
    type: "music33",
    color: "rgba(0, 170, 255, 1)"
  },
  music34: {
    label: "Dark Lord",
    type: "music34",
    color: "rgba(0, 170, 255, 1)"
  },
  music35: {
    label: "Snowflakes（Sunset）",
    type: "music35",
    color: "rgba(0, 170, 255, 1)"
  },
  music36: {
    label: "EMPathīzə",
    type: "music36",
    color: "rgba(0, 170, 255, 1)"
  },
  music37: {
    label: "A Little Star",
    type: "music37",
    color: "rgba(0, 170, 255, 1)"
  }
  
};

const quotes = [
  //ボイス図鑑(基本コスチューム)
  {
    text: `くくっ･･･注目せよ！
愚か者たちよ。`,
    yomi: "くくっ･･･ちゅうもくせよ！おろかものたちよ。",
    story: "voice",
    episode: "ロビー「ロビーでタップⅠ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の名前はギロチン・デ・メフィスト。
「均衡の守護者」である。`,
    yomi: "われのなまえはぎろちん・で・めふぃすと。「きんこうのしゅごしゃ」である。",
    story: "voice",
    episode: "ロビー「ロビーでタップⅡ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `受け止められるか？
我の中に渦巻く「アレ」を。`,
    yomi: "うけとめられるか？われのなかにうずまく「あれ」を。",
    story: "voice",
    episode: "ロビー「ロビーでタップⅢ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友は我のサーバントとして我に服従するのだ。
そして我は、何があっても友を守ろう。`,
    yomi: "ともはわれのさーばんととしてわれにふくじゅうするのだ。そしてわれは、なにがあってもともをまもろう。",
    story: "voice",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ふぅ･･･昔の我は「孤独」という結界に封じ込められていた。
しかし友のおかげで、その結界から抜け出せたのだ！`,
    yomi: "ふぅ･･･むかしのわれは「こどく」というけっかいにふうじこめられていた。しかしとものおかげで、そのけっかいからぬけだせたのだ。",
    story: "voice",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅱ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友を見るたびに、我の心臓が熱くなるんだ･･･
これは「ブレイズハート」を手にする過程なのか！？`,
    yomi: "ともをみるたびに、われのしんぞうがあつくなるんだ･･･これは「ぶれいずはーと」をてにするかていなのか！？",
    story: "voice",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅲ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `片翼の魔王よ、落ち着くのだ。
ここで我々の力を解放してはいけない。`,
    yomi: "かたよくのまおうよ、おちつくのだ。",
    story: "voice",
    episode: "ロビー「ロビーに放置」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `片翼の魔王も友の前では大人しい。
友のことが随分と気に入ったようだ。`,
    yomi: "かたよくのまおうもとものまえではおとなしい。とものことがずいぶんときにいったようだ。",
    story: "voice",
    episode: "ロビー「ロビーに放置（好感度10）Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `平凡な人間どもに 我を理解することなどできない。
だから我はいつも孤独なのだ。`,
    yomi: "へいぼんなにんげんどもに、われをりかいすることなどできない。だからわれはいつもこどくなのだ。",
    story: "voice",
    episode: "前哨基地「前哨基地でタップⅠ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `あいつら･･･動きが怪しい。
まさか「組織」の人間か？`,
    yomi: "あいつら･･･うごきがあやしい。まさか「そしき」のにんげんか？",
    story: "voice",
    episode: "前哨基地「前哨基地でタップⅡ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `協会ほど「組織」の人間を 避けるのに ふさわしい場所はない。
そういう場所には 奴らも足を 踏み入れないのだ。`,
    yomi: "きょうかいほど「そしき」のにんげんをさけるのにふさわしいばしょはない。そういうばしょにはやつらもあしをふみいれないのだ。",
    story: "voice",
    episode: "前哨基地「前哨基地でタップⅢ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `気になるだろう？この右目に封印された存在が何なのか。`,
    yomi: "きになるだろう？このみぎめにふういんされたそんざいがなんなのか。",
    story: "voice",
    episode: "獲得および成長「初対面」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくくっ、力が沸々とみなぎってくる。`,
    yomi: "くくくっ、ちからがふつふつとみなぎってくる。",
    story: "voice",
    episode: "獲得および成長「戦闘力UP Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ちょっと待て･･･急に片方の目がズキズキと痛み出したんだが？`,
    yomi: "ちょっとまて･･･きゅうにかたほうのめがずきずきといたみだしたんだが？",
    story: "voice",
    episode: "獲得および成長「戦闘力UP Ⅱ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くっ、これで「組織」が我をさらに警戒するだろう。`,
    yomi: "くっ、これで「そしき」がわれをさらにけいかいするだろう。",
    story: "voice",
    episode: "獲得および成長「戦闘力UP Ⅲ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `はっ。これはもしや･･･
我がずっと探し求めていた「アレ」なのか？`,
    yomi: "はっ。これはもしや･･･われがずっとさがしもとめていた「あれ」なのか？",
    story: "voice",
    episode: "獲得および成長「プレゼントⅠ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この程度のプレゼントで我を買収しようとは･･･ふむ･･･見事だ。`,
    yomi: "このていどのぷれぜんとでわれをばいしゅうしようとは･･･ふむ･･･みごとだ。",
    story: "voice",
    episode: "獲得および成長「プレゼントⅡ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくくっ･･･礼は省略する。`,
    yomi: "くくくっ･･･れいはしょうりゃくする。",
    story: "voice",
    episode: "獲得および成長「プレゼントⅢ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `もしかすると友こそが、
我の孤独な人生における唯一の理解者かもしれないな。`,
    yomi: "もしかするとともこそが、われのこどくなじんせいにおけるゆいいつのりかいしゃかもしれないな。",
    story: "voice",
    episode: "獲得および成長「好感度UP Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の内に潜む闇まで浄化される気分だ。
白魔法を使えるのか？`,
    yomi: "われのうちにひそむやみまでじょうかされるきぶんだ。しろまほうをつかえるのか？",
    story: "voice",
    episode: "獲得および成長「好感度UP Ⅱ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友に我のすべてを包み隠さず見せることにしよう。`,
    yomi: "ともにわれのすべてをつつみかくさずみせることにしよう。",
    story: "voice",
    episode: "獲得および成長「好感度UP Ⅲ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `喜んで力を貸してやろう。`,
    yomi: "よろこんでちからをかしてやろう。",
    story: "voice",
    episode: "フィールド「部隊編成」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `何か用件でも？`,
    yomi: "なにかようけんでも？",
    story: "voice",
    episode: "フィールド「フィールドで部隊をタップ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `確かにそちらの方向に不吉な風が吹いている。`,
    yomi: "たしかにそちらのほうこうにふきちなかぜがふいている。",
    story: "voice",
    episode: "フィールド「フィールドで部隊を移動」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `戦闘を開始する。`,
    yomi: "せんとうをかいしする。",
    story: "voice",
    episode: "フィールド「戦闘突入」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ、我の内に秘める狂気を解放する時が来たか。`,
    yomi: "くくっ、われのうちにひめるきょうきをかいほうするときがきたか。",
    story: "voice",
    episode: "戦闘「戦闘開始Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `･･･また、血の雨が降りそうだ。`,
    yomi: "･･･また、ちのあめがふりそうだ。",
    story: "voice",
    episode: "戦闘「戦闘開始Ⅱ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `少しばかり暴れさせてもらおうか。くくっ。`,
    yomi: "すこしばかりあばれさせてもらおうか。くくっ。",
    story: "voice",
    episode: "戦闘「戦闘開始Ⅲ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `装填が必要だ。`,
    yomi: "そうてんがひつようだ。",
    story: "voice",
    episode: "戦闘「リロードⅠ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `しばし待つのだ。`,
    yomi: "しばしまつのだ。",
    story: "voice",
    episode: "戦闘「リロードⅡ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `機をうかがおう。`,
    yomi: "きをうかがおう。",
    story: "voice",
    episode: "戦闘「リロードⅢ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `時は来た！`,
    yomi: "ときはきた！",
    story: "voice",
    episode: "戦闘「バーストスキル使用可能」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `来たれ、片翼の魔王よ！魔・界・黒・龍・波！！`,
    yomi: "きたれ、かたよくのまおうよ！まかいこくりゅうは！！",
    story: "voice",
    episode: "戦闘「バーストスキル」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `究極の合体技を受けてみたまえ！`,
    yomi: "きゅうきょくのがったいわざをうけてみたまえ！",
    story: "voice",
    episode: "戦闘「フルバースト」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `大したことなかったな。`,
    yomi: "たいしたことなかったな。",
    story: "voice",
    episode: "戦闘「敵殲滅Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくくっ`,
    yomi: "くくくっ",
    story: "voice",
    episode: "戦闘「敵殲滅Ⅱ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `無益な存在よ。`,
    yomi: "むえきなそんざいよ。",
    story: "voice",
    episode: "戦闘「敵殲滅Ⅲ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くうっ！`,
    yomi: "くうっ！",
    story: "voice",
    episode: "戦闘「被撃Ⅰ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ちぃっ！`,
    yomi: "ちぃっ！",
    story: "voice",
    episode: "戦闘「被撃Ⅱ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ぐほっ！`,
    yomi: "ぐほっ！",
    story: "voice",
    episode: "戦闘「被撃Ⅲ」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くっ･･･まだ時期尚早だったようだ。`,
    yomi: "くっ･･･まだじきしょうそうだったようだ。",
    story: "voice",
    episode: "戦闘「戦闘不能」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くっ、また勝ってしまった。
なるべく「組織」の目につかないようにしたかったのだが。`,
    yomi: "くっ、またかってしまった。なるべく「そしき」のめにつかないようにしたかったのだが。",
    story: "voice",
    episode: "戦闘「戦闘勝利」",
    costume: "normal",
    music:"music1"
  },
  //ボイス図鑑(ウィンタースレイヤー)
  {
    text: `血が冷たい。冬の訪れを感じるな。`,
    yomi: "ちがつめたい。ふゆのおとずれをかんじるな。",
    story: "voice",
    episode: "ロビー「ロビーでタップⅠ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `勇者の隣には素晴らしい仲間が存在するもの。
友は我の仲間としてふさわしいだろうか。`,
    yomi: "ゆうしゃのとなりにはすばらしいなかまがそんざいするもの。ともはわれのなかまとしてふさわしいだろうか。",
    story: "voice",
    episode: "ロビー「ロビーでタップⅡ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `片翼の魔王。奴は我を飲み込もうとしている。
その日が来たら、「アイスローズ」と共に我を倒してくれ。`,
    yomi: "かたよくのまおう。やつはわれをのみこもうとしている。そのひがきたら、「あいすろーず」とともにわれをたおしてくれ。",
    story: "voice",
    episode: "ロビー「ロビーでタップⅢ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `かつては孤独という過酷な運命に縛られていると思っていた。
この冒険を終わらせるまではな。`,
    yomi: "かつてはこどくというかこくなうんめいにしばられているとおもっていた。このぼうけんをおわらせるまではな。",
    story: "voice",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `我の新しい服装？まさしく冬の勇者にふさわしいであろう。
だ、だからといってあまりジロジロ見ないでくれ･･･`,
    yomi: "われのあたらしいふくそう？まさしくふゆのゆうしゃにふさわしいであろう。だ、だからといってあまりじろじろみないでくれ･･･",
    story: "voice",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅱ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `片翼の魔王に飲み込まれることなどない。
我には友とメイデンがいるのだから。`,
    yomi: "かたよくのまおうにのみこまれることなどない。われにはともとめいでんがいるのだから。",
    story: "voice",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅲ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `くっ。ああっ。落ち着け、片翼の魔王よ。
今はお前が出る時ではない！`,
    yomi: "くっ。ああっ。おちつけ、かたよくのまおうよ。いまはおまえがでるときではない！",
    story: "voice",
    episode: "ロビー「ロビーに放置」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `クロエから受け継いだ「均衡の守護者」という称号に恥じぬよう、
しっかりと振る舞わねば。`,
    yomi: "くろえからうけついだ「きんこうのしゅごしゃ」というしょうごうにはじぬよう、しっかりとふるまわねば。",
    story: "voice",
    episode: "ロビー「ロビーに放置（好感度10）Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `電波塔。あそこで隠居した 賢者がいるのだな。
異世界に関する すべてを知り尽くした賢者･･･ その名もエクシアが･･･ ！`,
    yomi: "でんぱとう。あそこでいんきょしたけんじゃがいるのだな。いせかいにかんするすべてをしりつくしたけんじゃ･･･そのなもえくしあが･･･！",
    story: "voice",
    episode: "前哨基地「前哨基地でタップⅠ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `「冬の呪い」がない世界は、こんなにも平和なのか。`,
    yomi: "「ふゆののろい」がないせかいは、こんなにもへいわなのか。",
    story: "voice",
    episode: "前哨基地「前哨基地でタップⅡ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `友よ。我の宿敵でありライバル･･･
「碧眼の小さな夜叉」を見かけたら我を呼んでくれ。`,
    yomi: "ともよ。われのしゅくてきでありらいばる･･･「へきがんのちいさなやしゃ」をみかけたらわれをよんでくれ。",
    story: "voice",
    episode: "前哨基地「前哨基地でタップⅢ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `勇者、ギロチン・デ・メフィスト。
世界の意志に従い、その呼びかけに応えん！`,
    yomi: "ゆうしゃ、ぎろちん・で・めふぃすと。せかいのいしにしたがい、そのよびかけにこたえん！",
    story: "voice",
    episode: "獲得および成長「初対面」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `ククッ。力がみなぎってくるな。`,
    yomi: "くくっ。ちからがみなぎってくるな。",
    story: "voice",
    episode: "獲得および成長「戦闘力UP Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `ホワイトアイスドラゴンなぞ、いくらでも倒してみせよう！`,
    yomi: "ほわいとあいすどらごんなぞ、いくらでもたおしてみせよう！",
    story: "voice",
    episode: "獲得および成長「戦闘力UP Ⅱ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `進むべき道は決まった。
あとは突き進むのみ。`,
    yomi: "すすむべきみちはきまった。あとはつきすすむのみ。",
    story: "voice",
    episode: "獲得および成長「戦闘力UP Ⅲ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `おやおや。
友よ、やはり我に興味を持ってしまったか。`,
    yomi: "おやおや。ともよ、やはりわれにきょうみをもってしまったか。",
    story: "voice",
    episode: "獲得および成長「プレゼントⅠ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `勇者とは、いかなる誘惑にも負けない者のこと。これは断らせて･･･
くっ。ああっ。片翼の魔王･･･勝手にプレゼントに手を伸ばすな！`,
    yomi: "ゆうしゃとは、いかなるゆうわくにもまけないもののこと。これはことわらせて･･･くっ。ああっ。かたよくのまおう･･･かってにぷれぜんとにてをのばすな！",
    story: "voice",
    episode: "獲得および成長「プレゼントⅡ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `こんなもの、我が喜ぶと思ったら･･･
オホンッ、正しい判断だな。`,
    yomi: "こんなもの、われがよろこぶとおもったら･･･おほんっ、ただしいはんだんだな。",
    story: "voice",
    episode: "獲得および成長「プレゼントⅢ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `友に誓おう。
我の剣は、常に友のためにあると。`,
    yomi: "ともにちかおう。われのけんは、つねにとものためにあると。",
    story: "voice",
    episode: "獲得および成長「好感度UP Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `前世からの縁が続いているとは。
友よ、やはり我々は運命で結ばれているようだ。`,
    yomi: "ぜんせからのえんがつづいているとは。ともよ、やはりわれわれはうんめいでむすばれているようだ。",
    story: "voice",
    episode: "獲得および成長「好感度UP Ⅱ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `冒険は気の合う仲間たちと共にするものだろう？
ククッ。友と一緒であれば、どこにでも行けそうだ。`,
    yomi: "ぼうけんはきのあうなかまたちとともにするものだろう？くくっ。ともといっしょであれば、どこにでもいけそうだ。",
    story: "voice",
    episode: "獲得および成長「好感度UP Ⅲ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `ククッ。友よ。この我を制御しきれるかな？`,
    yomi: "くくっ。ともよ。このわれをせいぎょしきれるかな？",
    story: "voice",
    episode: "フィールド「部隊編成」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `友よ、指示を。`,
    yomi: "ともよ、しじを。",
    story: "voice",
    episode: "フィールド「フィールドで部隊をタップ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `運命が我々を呼んでいる！`,
    yomi: "うんめいがわれわれをよんでいる！",
    story: "voice",
    episode: "フィールド「フィールドで部隊を移動」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `ククッ、勝負だ！`,
    yomi: "くくっ、しょうぶだ！",
    story: "voice",
    episode: "フィールド「戦闘突入」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `勇者とはなにか見せてやろう。`,
    yomi: "ゆうしゃとはなにかみせてやろう。",
    story: "voice",
    episode: "戦闘「戦闘開始Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `血がたぎるな。`,
    yomi: "ちがたぎるな。",
    story: "voice",
    episode: "戦闘「戦闘開始Ⅱ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `「組織」の奴らめ、全員片付けてやる！`,
    yomi: "「そしき」のやつらめ、ぜんいんかたづけてやる！",
    story: "voice",
    episode: "戦闘「戦闘開始Ⅲ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `落ち着け、片翼の魔王！`,
    yomi: "おちつけ、かたよくのまおう！",
    story: "voice",
    episode: "戦闘「リロードⅠ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `しばし援護を頼む。`,
    yomi: "しばしえんごをたのむ。",
    story: "voice",
    episode: "戦闘「リロードⅡ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `約束しよう、すぐに戻ってくる。`,
    yomi: "やくそくしよう、すぐにもどってくる。",
    story: "voice",
    episode: "戦闘「リロードⅢ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `最高の終焉を見せてやろう。`,
    yomi: "さいこうのしゅうえんをみせてやろう。",
    story: "voice",
    episode: "戦闘「バーストスキル使用可能」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `壮大な叙事詩の幕を下ろす時だ！`,
    yomi: "そうだいなじょじしのまくをおろすときだ！",
    story: "voice",
    episode: "戦闘「バーストスキル」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `我が信じるお前たちを信じろ！`,
    yomi: "われがしんじるおまえたちをしんじろ！",
    story: "voice",
    episode: "戦闘「フルバースト」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `問答無用。`,
    yomi: "もんどうむよう。",
    story: "voice",
    episode: "戦闘「敵殲滅Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `弱いな。`,
    yomi: "よわいな。",
    story: "voice",
    episode: "戦闘「敵殲滅Ⅱ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `いけにえとなれ。`,
    yomi: "いけにえとなれ。",
    story: "voice",
    episode: "戦闘「敵殲滅Ⅲ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `うぐっ･･･！`,
    yomi: "うぐっ･･･！",
    story: "voice",
    episode: "戦闘「被撃Ⅰ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `くっ！`,
    yomi: "くっ！",
    story: "voice",
    episode: "戦闘「被撃Ⅱ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `あう･･･`,
    yomi: "あう･･･",
    story: "voice",
    episode: "戦闘「被撃Ⅲ」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `くっ･･･孤独な運命だな･･･エル・テルマ・ソルース･･･`,
    yomi: "くっ･･･こどくなうんめいだな･･･える・てるま・そるーす･･･",
    story: "voice",
    episode: "戦闘「戦闘不能」",
    costume: "winter",
    music:"music1"
  },
  {
    text: `どうだ？友よ。
このギロチン・デ・メフィストと偉大なる冒険を共にした感想は！`,
    yomi: "どうだ？ともよ。このぎろちん・で・めふぃすとといだいなるぼうけんをともにしたかんそうは！",
    story: "voice",
    episode: "戦闘「戦闘勝利」",
    costume: "winter",
    music:"music1"
  },
  //メインチャプター12
  {
    text: `仕方がない。
できれば使いたくなかったが。`,
    yomi: "しかたがない。できればつかいたくなかったが。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `我の目に眠っている魔王の封印を、今解き放つ。`,
    yomi: "われのめにねむっているまおうのふういんを、いまときはなつ。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `思いっきり暴れたまえ。
片翼の魔王よ！`,
    yomi: "おもいっきりあばれたまえ。かたよくのまおうよ！",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `輝け！
アイン・ソフ・オウル！`,
    yomi: "かがやけ！あいん・そふ・おうる！",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `くくくっ･･･
またやってしまったな。`,
    yomi: "くくくっ･･･またやってしまったな。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `恐ろしい。
この力がもたらすだろう破滅が。`,
    yomi: "おそろしい、このちからがもたらすだろうはめつが。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `それでもこの力を使うしかないのか。`,
    yomi: "それでもこのちからをつかうしかないのか。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `破滅が約束されている力に溺れた我は、
まるで火取り虫だ･･･`,
    yomi: "はめつがやくそくされているちからにおぼれたわれは、まるでひどりむしだ･･･",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `い、いいだろう。
今日は特別にその頼みを聞いてやろう。`,
    yomi: "い、いいだろう。きょうはとくべつにそのたのみをきいてやろう。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `友よ。
分かっているだろうが、
我々は光に晒されてはならない存在。`,
    yomi: "ともよ。わかっているだろうが、われわれはひかりにさらされてはならないそんざい。",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `我々の存在を口にするその瞬間、
死の神がお前の魂をズタズタに･･･`,
    yomi: "われわれのそんざいをくちにするそのしゅんかん、しのかみがおまえのたましいをずたずたに･･･",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.12 故郷「彼女の意志：B」",
    costume: "normal",
    music:"music2"
  },
  //メインチャプター23
  {
    text: `友よ。なぜ地面を這いつくばっている？`,
    yomi: "ともよ。なぜじめんをはいつくばっている？",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `あぁ、そうか。`,
    yomi: "あぁ、そうか。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `あの「手段」を使ったのだな。`,
    yomi: "あの「しゅだん」をつかったのだな。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `「スティグマ」･･･
体で陣を描き、力を手にする手段。`,
    yomi: "「すてぃぐま」･･･からだでじんをえがき、ちからをてにするしゅだん。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `しかし、友よ。その力は禁断のものだ。
むやみに使うと世界線が･･･`,
    yomi: "しかし、ともよ。そのちからはきんだんのものだ。むやみにつかうとせかいせんが･･･",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･･そうだな。`,
    yomi: "･･･そうだな。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `友よ。もう一度言うが、今あったことは･･･`,
    yomi: "ともよ。もういちどいうが、いまあったことは･･･",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `！！メイデン！！`,
    yomi: "！！めいでん！！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `いったい･･･何を･･･！！`,
    yomi: "いったい･･･なにを･･･！！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `そんな･･･！！`,
    yomi: "そんな･･･！！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `あいつだけ
聴覚センサーを切っておいたのか。`,
    yomi: "あいつだけちょうかくせんさーをきっておいたのか。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `我々の情報を誰から聞いた？`,
    yomi: "われわれのじょうほうをだれからきいた？",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `３人か。`,
    yomi: "３にんか。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `片腹痛いわ。`,
    yomi: "かたはらいたいわ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `！？`,
    yomi: "！？",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `逃さぬぞ！`,
    yomi: "にがさぬぞ！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `ちっ･･･！！`,
    yomi: "ちっ･･･！！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `友よ！
ここは我に任せて、やるべきことをやれ！`,
    yomi: "ともよ！ここはわれにまかせて、やるべきことをやれ！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：A」",
    costume: "normal",
    music:"music4"
  },
  {
    text: `･･･妙だな。`,
    yomi: "･･･みょうだな。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `まさか、我がメイデンに
仲間意識を抱いていたとは。`,
    yomi: "まさか、われがめいでんになかまいしきをいだいていたとは。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `ただ、我と同じ巨大な力の呪いにかかった
小言がうるさい怠け者だと思っていた。`,
    yomi: "ただ、われとおなじきょだいなちからののろいにかかったしょうげんがうるさいなまけものだとおもっていた。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `だが･･･`,
    yomi: "だが･･･",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `お前の攻撃でメイデンが倒れた時、`,
    yomi: "おまえのこうげきでめいでんがたおれたとき、",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `我は気がついた。`,
    yomi: "われはきがついた。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `我の心に怒りが芽生えている、ということに。`,
    yomi: "われののこころにいかりがめばえている、ということに。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `我がメイデンを仲間だと思っていたということに
気がついたのだ。`,
    yomi: "われがめいでんをなかまだとおもっていたということにきがついたのだ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `この感情に気づかせてくれたお前に、
特別なプレゼントをやろう。`,
    yomi: "このかんじょうにきづかせてくれたおまえに、とくべつなぷれぜんとをやろう。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `この「即死の魔眼」を。`,
    yomi: "この「そくしのまがん」を。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `我の目に宿った呪いであり
絶対的な権能は`,
    yomi: "われのめにやどったのろいでありぜったいてきなけんのうは",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `見たもののエネルギーを制御するのだ。`,
    yomi: "みたもののエネルギーをせいぎょするのだ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `今、お前のコアエネルギーを
虚空にばら撒いている。`,
    yomi: "いま、おまえのこあえねるぎーをこくうにばらまいている。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `ニケにとってコアは心臓。`,
    yomi: "にけにとってこあはしんぞう。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `お前の心臓は今、止まっているのだ。`,
    yomi: "おまえのしんぞうはいま、とまっているのだ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `我らエクスターナーは、ニケの死神。`,
    yomi: "われらえくすたーなーは、にけのしにがみ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `死神の視線と声からは
絶対に逃れられないということを`,
    yomi: "しにがみのしせんとこえからはぜったいにのがれられないということを。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `その心臓に、よく刻み込むがいい。`,
    yomi: "そのしんぞうに、よくきざみこむがいい。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `まあ、どうせ聞こえてはいないだろうがな。`,
    yomi: "まあ、どうせきこえてはいないだろうがな。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `我だ。`,
    yomi: "われだ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `コードネーム野犬を確保した。`,
    yomi: "こーどねーむやけんをかくほした。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･･いや、本当の野犬ではなく。`,
    yomi: "･･･いや、ほんとうのやけんではなく。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `エキゾチック部隊の･･･
ジャッカルのことだ。`,
    yomi: "えきぞちっくぶたいの･･･じゃっかるのことだ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `ああ。待っている。`,
    yomi: "ああ。まっている。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `！！気がついたのか！`,
    yomi: "！！きがついたのか！",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `ああ。しかし友とお前を守った。`,
    yomi: "ああ。しかしともとおまえをまもった。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `いまは･･･それでいいんだ。`,
    yomi: "いまは･･･それでいいんだ。",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･･目は、使った後のクールタイムが長くて･･･`,
    yomi: "･･･めはmつかったあとのくーるたいむがながくて･･･",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "main",
    episode: "CHAPTER.23 牢屋「即死の魔眼：B」",
    costume: "normal",
    music:"music2"
  },
  //ICE DRAGON SAGA（フィールド）
  {
    text: `友よ。冒険に出かける準備はいいか？`,
    yomi: "ともよ。ぼうけんにでかけるじゅんびはいいか？",
    story: "ev1",
    episode: "フィールド「フィールドで勇者ギロチンをタップ」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `くくっ感じるぞ！運命が我を呼んでいる！`,
    yomi: "くくっかんじるぞ！うんめいがわれをよんでいる！",
    story: "ev1",
    episode: "フィールド「フィールドで勇者ギロチンをタップ」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `寂しいほど冷え冷えとした世界だな。`,
    yomi: "さみしいほどひえびえとしたせかいだな。",
    story: "ev1",
    episode: "フィールド「フィールドで勇者ギロチンをタップ」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `「仮想戦闘フィールド」とは何だ？
そうか、一種のイメージトレーニングか。`,
    yomi: "「かそうせんとうふぃーるど」とはなんだ？そうか、いっしゅのいめーじとれーにんぐか。",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `クロエ、我は新技術を習得した！
その名も「魔界黒龍波」！
一時的に魔王の力を借りるスキルだ！`,
    yomi: "くろえ、われはしんぎじゅつをしゅうとくした！そのなも「まかいこくりゅうは」！いちじてきにまおうのちからをかりるすきるだ！",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `おい･･･メイデン？
いくらニケだといっても･･･
少し休んではどうだ？
ゲームを始めて、もう半日経ったぞ･･･`,
    yomi: "おい･･･めいでん？いくらにけだといっても･･･すこしやすんではどうだ？げーむをはじめて、もうはんにちたったぞ･･･",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `友よ、この任務は我に任せて
休息を取ってはどうだ？`,
    yomi: "ともよ、このにんむはわれにまかせてきゅうそくをとってはどうだ？",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `最終装備セット概要
タンカー：ヘルヘイム全身鎧セット
ヒーラー：ニヴルヘイムの司祭セット
魔法使い：ムスペルヘイムのローブセット`,
    yomi: "さいしゅうそうびせっとがいようたんかー：へるへいむぜんしんよろいせっと",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `ファイナル・クエストオンライン･･･
ククッ。すぐに会いに行く。
「血のように赤き薔薇の審判者」よ。`,
    yomi: "ふぁいなる・くえすとおんらいん･･･くくっ。すぐにあいにいく。「ちのようにあかきばらのしんぱんしゃ」よ。",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `すまない･･･
すべて我のせいだ･･･
我が迷ったせいで･･･`,
    yomi: "すまない･･･すべてわれのせいだ･･･われがまよったせいで･･･",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `何だと？「組織」の脅威にさらされている世界だと？
片翼の魔王の封印者として見過ごせぬ！`,
    yomi: "なんだと？「そしき」のきょういにさらされているせかいだと？",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `おお！仲間と約束があるだと？
友との約束は重要だ。
それはそうと、エオルニアはどんな場所なんだ？`,
    yomi: "おお！なかまとやくそくがあるだと？ともとのやくそくはじゅうようだ。",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `ククッ。会えて嬉しいぞ。
我の仲間となる者よ。
我は世界の「均衡」のために存在せし者──
ギロチン・デ・メフィストという。`,
    yomi: "くくっ。あえてうれしいぞ。われのなかまとなるものよ。",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `特殊能力を持つ我がイレギュラーとなれば･･･
我が「片翼の魔王」を制御できなければ･･･`,
    yomi: "とくしゅのうりょくをもつわれがいれぎゅらーとなれば･･･われが「かたよくのまおう」をせいぎょできなければ･･･",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `友が我と同じ苦しみを味わう必要はない。
メイデンを救わなければ。`,
    yomi: "ともがわれとおなじくるしみをあじわうひつようはない。めいでんをすくわなければ。",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  {
    text: `基本の勇者服セットの獲得方法は─･･･
カカシ退治クエストをクリア─･･･
剣を使用する職業は必須です─･･･`,
    yomi: "きほんのゆうしゃふくせっとののかくとくほうほうは─･･･",
    story: "ki1",
    episode: "ICE DRAGON SAGA フィールド",
    costume: "winter",
    music:"music3"
  },
  //ICE DRAGON SAGA（イベントストーリー　第1部）
  {
    text: `･･････うーむ、ここは･･･？`,
    yomi: "･･････うーむ、ここは･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `クッ。お前は･･･！`,
    yomi: "くっ。おまえは･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music5"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music5"
  },
   {
    text: `･･････誰だ？`,
    yomi: "･･････だれだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music5"
  },
  {
    text: `この世界の、女神？`,
    yomi: "このせかいの、めがみ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music7"
  },
   {
    text: `･･････くっ。`,
    yomi: "･･････くっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `くくくっ･･･ははははは！`,
    yomi: "くくくっ･･･ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `貴様。このギロチン・デ・メフィストが
そんな見え透いた手に引っかかると
思っているのか？`,
    yomi: "きさま。このぎろちん・で・めふぃすとがそんなみえすいたてにひっかかると",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `どうやら「組織」に幻覚剤でも
盛られてしまったようだが･･･`,
    yomi: "どうやら「そしき」にげんかくざいでももられてしまったようだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `この程度の幻覚･･･舌を噛めばすぐに･･･！`,
    yomi: "このていどのげんかく･･･したをかめばすぐに･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `ううっ･･･`,
    yomi: "ううっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `いひゃいへはにゃいか･･･`,
    yomi: "いひゃいへはにゃいか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `勇者？`,
    yomi: "ゆうしゃ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `さきほどから我を勇者呼ばわりしているが･･･`,
    yomi: "さきほどからわれをゆうしゃよばわりしているが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `冗談はいい。我を元の世界に返すのだ！`,
    yomi: "じょうだんはいい。われをもとのせかいにかえすのだ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `できない？`,
    yomi: "できない？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `な、何だと？`,
    yomi: "な、なんだと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `我がトラックごときで死ぬはずなかろう！`,
    yomi: "われがとらっくごときでしぬはずなかろう！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `我のボディは天を突くボディなのだぞ！？`,
    yomi: "われのぼでぃはてんをつくぼでぃなのだぞ！？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `･･･くっ。アルトアイゼンに
ひかれたことにするか･･･`,
    yomi: "･･･くっ。あるとあいぜんにひかれたことにするか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `それが一番マシだ。`,
    yomi: "それがいちばんましだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `くっ･･･`,
    yomi: "くっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `くくくっ･･･ははははは！`,
    yomi: "くくくっ･･･ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `やはりそういう流れだったか。`,
    yomi: "やはりそういうながれだったか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `異世界に転移する前には、
チート能力を女神から与えられる･･･`,
    yomi: "いせかいにてんいするまえには、ちーとのうりょくをめがみからあたえられる･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `それが不変のデスティニー。`,
    yomi: "それがふへんのですてぃにー。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `つまり、運命とも言えるだろう。`,
    yomi: "つまり、うんめいともいえるだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `「世界を俯瞰する者」としてお前に求めよう。`,
    yomi: "「せかいをふかんするもの」としておまえにもとめよう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `地平の彼方まで
いつでも渡り歩けるよう･･･`,
    yomi: "ちていのかなたまでいつでもわたりあるけるよう･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `このギロチン・デ・メフィストに
空間を自在に操る能力･･･`,
    yomi: "このぎろちん・で・めふぃすとにくうかんをじざいにあやつるのうりょく･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `名付けて「ディメンション・フォース」を
授けたまえ。`,
    yomi: "なづけて「でぃめんしょん・ふぉーす」をさずけたまえ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `え？その･･･`,
    yomi: "え？その･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ええと･･･`,
    yomi: "ええと･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `つまり･･･`,
    yomi: "つまり･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `時間とか空間とかを自由に移動する能力だ。`,
    yomi: "じかんとかくうかんをじゆうにいどうするのうりょくだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `オホンッ。では頼むぞ。`,
    yomi: "おほんっ。ではたのむぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `む？我に能力を与えてくれるという話では
なかったか？`,
    yomi: "む？われにのうりょくをあたえてくれるというはなしではなかったか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `･･････なんだと？`,
    yomi: "･･････なんだと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `待て･･･！`,
    yomi: "まて･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「転生したら勇者だった件」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `「ディメンション・フォース」が難しいなら、
せめて「クロノブレイク」でも･･･！`,
    yomi: "「でぃめんしょん・ふぉーす」がむずかしいなら、せめて「くろのぶれいく」でも･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `くっ･･･言い終わる前に放り出されるとは･･･`,
    yomi: "くっ･･･いいおわるまえにほうりだされるとは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `片翼の魔王を封じた者として･･･`,
    yomi: "かたよくのまおうをふうじたものとして･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `これもまた背負うべき宿命なのか。`,
    yomi: "これもまたせおうべきしゅくめいなのか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `それにしても、何だ？`,
    yomi: "それにしても、なんだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `この背筋が凍るような･･･`,
    yomi: "このせすじがこおるような･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ふん･･･`,
    yomi: "ふん･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `我のカン違いか。`,
    yomi: "われのかんちがいか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `しかし、みごとな景色だ。`,
    yomi: "しかし、みごとなけしきだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `はるか彼方の地平線が一目で見下ろせる･･･`,
    yomi: "はるかかなたのちへいせんがひとめでみおろせる･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ん？見下ろす･･･？`,
    yomi: "ん？みおろす･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････！！`,
    yomi: "･･････！！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `め、女神め！我を空中に転移させたら･･･！`,
    yomi: "め、めがみめ！われをくうちゅうにてんいさせたら･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `落ちるに決まっているではないかぁぁぁ！`,
    yomi: "おちるにきまっているではないかぁぁぁ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ああああああー！`,
    yomi: "ああああああー！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ぐはっ！`,
    yomi: "ぐはっ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `くっ･･･ゴホ！ゴホ！`,
    yomi: "くっ･･･ごほ！ごほ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `「衝撃無効化フィールド」が
なければ即死だった･･･`,
    yomi: "「しょうげきむこうかふぃーるど」がなければそくしだった･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `いくら我でも危ないところだったな。`,
    yomi: "いくらわれでもあぶないところだったな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `あんな高さから落ちれば、
ボディが完全に損壊し･･･`,
    yomi: "あんなたかさからおちれば、ぼでぃがかんぜんにそんかいし･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `今のように立つことさえ
ままならなかったことだろう。`,
    yomi: "いまのようにたつことさえままならなかったことだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `まあ、我が「衝撃無効化フィールド」を
展開できないという･･･`,
    yomi: "まあ、われが「しょうげきむこうかふぃーるど」をむこうかできないという･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `あくまで仮定の話だがな。くくく･･･`,
    yomi: "あくまでかていのはなしだがな。くくく･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `･･････！？`,
    yomi: "･･････！？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `ふぅっ、はぁ･･･`,
    yomi: "ふぅっ、はぁ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `はぁ･･････`,
    yomi: "はぁ･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `我は、なぜ無事だった？`,
    yomi: "われは、なぜぶじだった？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `それに･･･`,
    yomi: "それに･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `この服装は何だ！？`,
    yomi: "このふくそうはなんだ！？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `くっ、女神め。我になぜこのような格好を！？`,
    yomi: "くっ、めがみめ。われになぜこのようなかっこうを！？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `こ、このような露出の多いもの･･･`,
    yomi: "こ、このようなろしゅつのおおいもの･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `我には似つかわしくないというのに･･･`,
    yomi: "われにはにつかわしくないというのに･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `まあ、なかなかカッコイイからいいか･･･`,
    yomi: "まあ、なかなかカッコイイからいいか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music8"
  },
  {
    text: `チッ。見られていたのか。`,
    yomi: "ちっ。みられていたのか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `無様な姿を見せてしまったようだ。`,
    yomi: "ぶざまなすがたをみせてしまったようだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `オホンッ。今のはだな･･･ただ新しい技を試して･･･`,
    yomi: "おほんっ。いまのはだな･･･ただあたらしいわざをためして･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `エク、シア･･･？`,
    yomi: "えく、しあ･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `「組織」の情報部所属であるお前が
なぜここに･･･？`,
    yomi: "「そしき」のじょうほうぶしょぞくであるおまえがなぜここに･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `くっ。いくら何でも。`,
    yomi: "くっ。いくらなんでも。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `仲間無しだと？`,
    yomi: "なかまなしだと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `我にだって･･･`,
    yomi: "われにだって･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `仲間と呼べる者が･･･！`,
    yomi: "なかまとよべるものが･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `呼べる者が･･･`,
    yomi: "よべるものが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `･･････いたはずだ。`,
    yomi: "･･････いたはずだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `凍てつく魔王城？`,
    yomi: "いてつくまおうじょう？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `そういえば、勇者として「冬の呪い」を
終わらせるとかなんとか、言われていたな･･･`,
    yomi: "そういえば、ゆうしゃとして「ふゆののろい」をおわらせるとかなんとか、いわれていたな･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `プリバティ？エクシアだけでなく
お前も異世界に転移してきたのか？`,
    yomi: "ぷりばてぃ？えくしあだけでなくおまえもいせかいにてんいしてきたのか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `このギロチン・デ・メフィストを知らないだと？`,
    yomi: "このぎろちん・で・めふぃすとをしらないだと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `お前とは裁判所で
一度は会ったことがあるはずだが･･･`,
    yomi: "おまえとはさいばんじょでいちどはあったことがあるはずだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `ああ、そういうことか･･･`,
    yomi: "ああ、そういうことか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `やっと状況が理解できたぞ。`,
    yomi: "やっとじょうきょうがりかいできたぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `我は「パラレルワールド」･･･
いわゆる平行世界に送られたということだろう。`,
    yomi: "われは「ぱられるわーるど」･･･いわゆるへいこうせかいにおくられたということだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `そうでなければ、あのプリバティが
そんなハレンチな服装で
外に出てくるはずがない！`,
    yomi: "そうでなければ、あのぷりばてぃがそんなはれんちなふくそうで外にでてくるはずがない！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `くっ。「組織のイヌ」もいるのか？`,
    yomi: "くっ。「そしきのいぬ」もいるのか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `･･･どういうことだ？`,
    yomi: "･･･どういうことだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `･･････動くな。`,
    yomi: "･･････うごくな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `お前たち、いったい何者だ？`,
    yomi: "おまえたち、いったいなにものだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `なぜ「組織」を知っている？`,
    yomi: "なぜ「そしき」をしっている？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `クッ･･･ククッ。`,
    yomi: "くっ･･･くくっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `フハハハハハハ！`,
    yomi: "ふはははははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `大人しくついてこいだと？`,
    yomi: "おとなしくついてこいだと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `それはできない相談だな。`,
    yomi: "それはできないそうだんだな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `この世界にも「組織」の手が及んでいると
分かった以上は──！`,
    yomi: "このせかいにも「そしき」のてがおよんでいるとわかったいじょうは",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `待て！`,
    yomi: "まて！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `プリバティ、「協会」と言ったか？`,
    yomi: "ぷりばてぃ、「きょうかい」といったか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････ふふ･･･`,
    yomi: "･･････ふふ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ふふふふふ･･･はははははは！`,
    yomi: "ふふふふふ･･･はははははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `頭を撃たれたぐらいで、騒ぐまでもない。`,
    yomi: "あたまをうたれたぐらいで、さわぐまでもない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `その程度で、我を倒すことなどできん！`,
    yomi: "そのていどで、われをたおすことなどできん！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `見るがいい。傷一つない我のボディを！`,
    yomi: "みるがいい。きずひとつないわれのぼでぃを！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `･･････何だと？`,
    yomi: "･･････なんだと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `もう一度よく見ろ。`,
    yomi: "もういちどよくみろ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ほ、本当に傷ひとつないのか？`,
    yomi: "ほ、ほんとうにきずひとつないのか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `この辺りだ。確か撃たれたのは。`,
    yomi: "このあたりだ。たしかうたれたのは。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `無傷、だと･･･？`,
    yomi: "むきず、だと･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････くっ。`,
    yomi: "･･････くっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `くくくっ･･･ははははは！`,
    yomi: "くくくっ･･･ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `これではっきりしたな。`,
    yomi: "これではっきりしたな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `この世界での我は、無敵ということだろう。`,
    yomi: "このせかいでのわれは、むてきということだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `オホンッ。気にするな。`,
    yomi: "おほんっ。きにするな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `とにかく･･･`,
    yomi: "とにかく･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `プリバティ、一つ提案がある。`,
    yomi: "ぷりばてぃ、ひとつていあんがある。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `「組織のイヌ」を倒してやる代わりに、
我を「協会」に案内してくれ。`,
    yomi: "「そしきのいぬ」をたおしてやるかわりにわれを「きょうかい」にあんないしてくれ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ククク、承諾したということでいいな？`,
    yomi: "くくくっ、しょうだくしたということでいいな？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `心配は無用だ。`,
    yomi: "しんぱいはむようだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `このギロチン・デ・メフィストに、二言はない。`,
    yomi: "このぎろちん・で・めふぃすとに、にごんはない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `「組織のイヌ」ども、
お前たちも聞いていただろう？`,
    yomi: "「そしきのいぬ」ども、おまえたちもきいていただろう？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `今度は容赦しないぞ。`,
    yomi: "こんどはようしゃしないぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `今の我には、何でもできそうな気がするのでな。`,
    yomi: "いまのわれには、なんでもできそうなきがするのでな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `くくっ、警告か･･･`,
    yomi: "くくっ、けいこくか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `笑わせる。`,
    yomi: "わらわせる。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `プリバティ、エクシアを連れて下がっていろ。`,
    yomi: "ぷりばてぃ、えくしあをつれてさがっていろ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我の能力に巻き込まれないようにな。`,
    yomi: "われののうりょくにまきこまれないようにな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我、ギロチン・デ・メフィストが･･･`,
    yomi: "われ、ぎろちん・で・めふぃすとが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `この「即死の魔眼」で
お前たちを葬り去ってくれる。`,
    yomi: "この「そくしのまがん」でおまえたちをほうむりさってくれる。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `エクスターミネイションプロセス、稼働･･･`,
    yomi: "えくすたーみねいしょんぷろせす、かどう･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `片翼の魔王、封印解除を要請･･･`,
    yomi: "かたよくのまおう、ふういんかいじょをようせい･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ええと･･････その･･･`,
    yomi: "ええと･･････その･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `もしもし、イングリッド？`,
    yomi: "もしもし、いんぐりっど？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `我の決めゼリフが聞こえなかったか？`,
    yomi: "われのきめぜりふがきこえなかったか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `どうしても眼を使わなければならないのだが･･･`,
    yomi: "どうしてもめをつかわなければならないのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `イングリッド･･･？`,
    yomi: "いんぐりっど･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `くっ。ここが異世界だということを忘れていた･･･`,
    yomi: "くっ。ここがいせかいだということをわすれていた･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `制限解除要請を承認するイングリッドが
いるはずないではないか･･･`,
    yomi: "せいげんかいじょようせいをしょうにんするいんぐりっどがいるはずがないではないか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `仕方ない･･･`,
    yomi: "しかたない･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `我の手で直接「禁忌」を破らせてもらおう。`,
    yomi: "われのてでちょくせつ「きんき」をやぶらせてもらおう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music11"
  },
  {
    text: `なぁ、ポリよ･･･`,
    yomi: "なぁ、ぽりよ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ニケにはな･･･`,
    yomi: "にけにはな･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `戦いを避けてはならない時がある。`,
    yomi: "たたかいをさけてはならないときがある。",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `それは──`,
    yomi: "それは──",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `他人に笑われた時だ！`,
    yomi: "ひろにわらわれたときだ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我の体に宿る深い闇の力よ･･･`,
    yomi: "われのからだにやどるふかいやみのちからよ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `魔王の翼に宿る孤独なエネルギーの波動よ･･･`,
    yomi: "まおうのつばさにやどるこどくなえねるぎーのはどうよ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `今長い眠りから醒め、
この哀れな魂に安息を与えよ！`,
    yomi: "いまながいねむりからさめ、このあわれなたましいにきゅうそくをあたえよ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `エクスターミネイション！`,
    yomi: "えくすたーみねいしょん！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `･･････！！`,
    yomi: "･･････！！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `プ、プリバティ！お前も見ただろう？`,
    yomi: "ぷ、ぷりばてぃ！おまえもみただろう？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我の見間違いではないな？`,
    yomi: "われのみまちがいではないな？",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `い、今、我の目から黒い波動が･･･！`,
    yomi: "い、いま、われのめからくろいはどうが･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `波動が･･･`,
    yomi: "はどうが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `なんだ･･･？体から力が･･･`,
    yomi: "なんだ･･･？からだからちからが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「即死の魔眼が強すぎて、相手にならない：B」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `そこまでだ。`,
    yomi: "そこまでだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `もうやめろ。`,
    yomi: "もうやめろ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `･･････チッ。アークを守る、か。`,
    yomi: "･･････ちっ。あーくをまもる、か。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `ニケよ、お前に与えられた命令は何だ？`,
    yomi: "にけよ、おまえにあたえられためいれいはなんだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `･･････それが理由だ。`,
    yomi: "･･････それがりゆうだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `任務の実行を止めろ。`,
    yomi: "にんむのじっこうをやめろ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `それが聞けないようなら、
我は命令通りにお前を処分せざるを得ない。`,
    yomi: "それがきけないようなら、われがめいれいどおりにおまえをしょぶんせざるをえない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `･･････そうだ。`,
    yomi: "･･････そうだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `それは･･･`,
    yomi: "それは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `我は･･･！`,
    yomi: "われは･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `我は･･･`,
    yomi: "われは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `･･････くっ。`,
    yomi: "･･････くっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "normal",
    music:"music12"
  },
  {
    text: `やめろぉぉ──！`,
    yomi: "やめろぉぉ──！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `む･･･むぐっ･･･！`,
    yomi: "む･･･むぐっ･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `い、息ができん！`,
    yomi: "い、いきができん！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ゴホ、ゴホ･･･`,
    yomi: "ごほ、ごほ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `き、気をつけろ、街が襲撃を･･･！`,
    yomi: "き、きをつけろ、まちがしゅうげきを･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `エマの胸･･･？`,
    yomi: "えまのむね･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･････そ、そういうことだったのか。`,
    yomi: "･･････そ、そういうことだったのか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `いや、何でもない。気にするな。`,
    yomi: "いや、なんでもない。きにするな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `悪い夢･･･`,
    yomi: "わるいゆめ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `夢だったか。`,
    yomi: "ゆめだったか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `くっ。心配させたようだな。すまない。`,
    yomi: "くっ。しんぱいさせたようだな。すまない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `宿？`,
    yomi: "やど？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `ち、小さいだと･･･？我の身体は･･･！`,
    yomi: "ち、ちいさいだと･･･？われのからだは･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `ん？我が気を失っていた？なぜだ？`,
    yomi: "ん？われがきをうしなっていた？なぜだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `プリバティもいるのか。`,
    yomi: "ぷりばてぃもいるのか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `ええと･･･エマよ。その･･･`,
    yomi: "ええと･･･えまよ。その･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `今は空腹ではないし･･･`,
    yomi: "いまはくうふくではないし･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `「協会」に一刻も早く
たどりつかねばならないのだ･･･`,
    yomi: "「きょうかい」にいっこくもはやくたどりつかねばならないのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `そういうわけで失礼する！`,
    yomi: "そういうわけでしつれいする！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `くっ。「緑眼の味覚殺し」に出会うとは･･･`,
    yomi: "くっ。「りょくがんのみかくごろし」にであうとは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `あやうく煉獄の炎に舌が焼かれるところだった。`,
    yomi: "あやうくれんごくのほのおにしたがやかれるところだった。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `なにしろ、人付き合いは誠実にしろと
口うるさいあのイングリッドでさえ･･･`,
    yomi: "なにしろ、ひとづきあいはせいじつにしろとくちうるさいあのいんぐりっどでさえ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `エマが料理を持ち込んだ日には、
会議でいないと居留守を決め込んだほどだ。`,
    yomi: "えまがりょうりをもちこんだひにはかいぎでいないといるすをきめこんだほどだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `全力で逃げ出していなければ･･･`,
    yomi: "ぜんりょくでにげだしていなければ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `我の冒険はここで
終わってしまっていたことだろう。`,
    yomi: "われのぼうけんはここでおわってしまっていたことだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `まあ、もう過ぎたことだ･･･`,
    yomi: "まあ、もうすぎたことだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `エマも悪意があったわけではないだろうからな。`,
    yomi: "えまもあくいがあったわけではないだろうからな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･･それが最大の問題のような気もするが･･･`,
    yomi: "･･･それがさいだいのもんだいのようなきもするが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `しかし、逃げ出すことに夢中で
どこにいるのか分からなくなってしまったな。`,
    yomi: "しかし、にげだすことにむちゅうでどこにいるのかわからなくなってしまったな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `「協会」はどこにあるのだ？`,
    yomi: "「きょうかい」はどこにあるのだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `ん？あれは･･･？`,
    yomi: "ん？あれは･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ラプラス！？`,
    yomi: "らぷらす！？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ラプラスの石像がなぜここに？`,
    yomi: "らぷらすのせきぞうがなぜここに？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `くっ。我以外に、他の勇者がいたのか。`,
    yomi: "くっ。われいがいに、ほかのゆうしゃがいたのか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `待て。`,
    yomi: "まて。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `はるか昔から春の国を守っているというのなら･･･`,
    yomi: "はるかむかしからはつのくにをまもっているというのなら･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `今は何をしているのだ？`,
    yomi: "いまはなにをしているのだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `なぜ「組織」の手下どもが我が物顔で歩き回り･･･`,
    yomi: "なぜ「そしき」のてしたどもがわがものがおであるきまわり･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `「冬の呪い」も解決されずにいる？`,
    yomi: "「ふゆののろい」もかいけつされずにいる？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `頼りになる仲間か･･･`,
    yomi: "たよりになるなかまか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `確かに、メイデンも
そんなことを言っていたな。`,
    yomi: "たしかに、めいでんもそんなことをいっていたな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `冒険は気の合う仲間たちとするものだ、と。`,
    yomi: "ぼうけんはきのあうなかまたちとするものだ、と。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `よし。そうとなれば、
召喚石を使うしかあるまい。`,
    yomi: "よし。そうとなれば、しょうかんせきをつかうしかあるまい。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `お前も来るがいい。
我の仲間に会わせてやろう。`,
    yomi: "おまえもくるがいい。われのなかまにあわせてやろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `忙しい？`,
    yomi: "いそがしい？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `そういえば、お前はここで何をしていたのだ？`,
    yomi: "そういえば、おまえはここでなにをしていたのだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `我、ギロチン・デ・メフィストが告げる。`,
    yomi: "われ、ぎろちん・で・めふぃすとがつげる。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `汝の身は我が下に、我が命運は汝に。`,
    yomi: "なんじのみはわがもとに、わがめいうんはなんじに。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `世界の意志に従い、我が呼びかけに応えよ！`,
    yomi: "せかいのいしにしたがい、わがよびかけにこたえよ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我は世界を俯瞰する者。`,
    yomi: "われはせかいをふかんするもの。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我は片翼の魔王を封印せし者。`,
    yomi: "われはかたよくのまおうをふういんせしもの。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `アークより来たれ──`,
    yomi: "あーくよりきたれ──",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我が友よ！`,
    yomi: "わがともよ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ブラックローズ、頼みがある。`,
    yomi: "ぶらっくろーず、たのみがある。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `「仮想戦闘フィールド」の中で
効率的に動くための
トレーニングをしているのだが、一緒に･･･`,
    yomi: "「かそうせんとうふぃーるど」のなかでこうりつてきにうごくためのとれーにんぐをしているのだが、いっしょに･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ならば･･･`,
    yomi: "ならば･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `まだ何も言っていないが･･･`,
    yomi: "まだなにもいっていないが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `オホン･･･分かった、分かった。正直に言おう。`,
    yomi: "おほん･･･わかった、わかった。しょうじきにいおう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `実は「ファイナル・クエストオンライン」という
ゲームを始めたのだが･･･`,
    yomi: "じつは「ふぁいなる。くえすとおんらいん」というげーむをはじめたのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `実力がなかなか伸びないのだ。`,
    yomi: "じつりょくがなかなかのびないのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `それで他のプレイヤーから、その･･･地雷･･･`,
    yomi: "それでほかのぷれいやーから、その･･･じらい･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `くっ。よくないことを言われたのでな･･･`,
    yomi: "くっ。よくないことをいわれたのでな･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `と、とにかく･･･「ブラッックローズ」の知識を
我に継承してもらえないだろうか。`,
    yomi: "と、とにかく･･･「ぶらっっくろーず」のちしきをわれにけいしょうしてもらえないだろうか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `偶然耳にしたのだ。`,
    yomi: "ぐうぜんみみにしたのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `お前のアバターである「ブラックローズ」は
「ファイナル・クエストオンライン」において
伝説的な存在だと。`,
    yomi: "おまえのあばたーである「ぶらっくろーず」は「ふぁいなる・くえすとおんらいん」においてでんせつてきなそんざいだと。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ただ一度を除いて、すべての大型ボスを･･･`,
    yomi: "ただいちどをのぞいて、すべてのおおがたぼすを･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `一人でクリアしているようだな。`,
    yomi: "ひとりでくりあしているようだな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `くくっ、まさしく
「孤独な言霊の使い手」らしい。`,
    yomi: "くくっ、まさしく「こどくなことだまのつかいて」らしい。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `クラス？`,
    yomi: "くらす？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `そういえば、エオルニアを守るため
冒険していた我に･･･`,
    yomi: "そういえば、えおるにあをまもるためぼうけんしていたわれに･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `転職の手伝いをすると言って
多くのギルドが声をかけてきたな。`,
    yomi: "てんしょくのてつだいをするといっておおくのぎるどがこえをかけてきたな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `勇者である我の名声を利用するためだと考え、
すべて断ったが･･･`,
    yomi: "ゆうしゃであるわれのめいせいをりようするためだとかんがえ、すべてことわったが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ふふ、ともあれメイデンよ。`,
    yomi: "ふふ、ともあれめいでんよ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `まずは我とパーティというものを
組んではくれないか？`,
    yomi: "まずはわれとぱーてぃというものをくんではくれないか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `そろそろ最初のダンジョンに入りたいのだが、
仲間が誰も･･･`,
    yomi: "そろそろさいしょのだんじょんにはいりたいのだが、なかまがだれも･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `いや、我の目に留まった者が誰もいないのだ。`,
    yomi: "いや、われのめにとまったものがだれもいないのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `うむ。真剣に聞かせてもらおう。`,
    yomi: "うむ。しんけんにきかせてもらおう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････気の合う仲間たちと？`,
    yomi: "･･････きのあうなかまたちと？",
    story: "ev1",
    episode: "イベントストーリー 第1部「異世界は仲間とともに：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `アークより来たれ──`,
    yomi: "あーくよりきたれ──",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我が友よ！`,
    yomi: "わがともよ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ふふ･･･我が呼びかけに応えてくれたか。`,
    yomi: "ふふ･･･わがよびかけにこたえてくれたか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `それはだな。どう説明するべきか･･･`,
    yomi: "それはだな。どうせつめいするべきか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `このような姿でいるのは、我の意志ではなく･･･`,
    yomi: "このようなすがたでいるのは、われのいしではなく･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `おやおや、しかし･･･メイデンよ。`,
    yomi: "おやおや、しかし･･･めいでんよ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `お前の衣装も相当なものではないか？`,
    yomi: "おまえのいしょうもそうとうなものではないか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `む、何かすごいのか？`,
    yomi: "む、なにかすごいのか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `転移する過程で「システム」が介入し･･･`,
    yomi: "てんいするかていで「しすてむ」がかいにゅうし･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `異世界にふさわしい姿に変えられたのだろう。`,
    yomi: "いせかいにふさわしいすがたにかえられたのだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `まあ、似合っているから悪くないと思うぞ。`,
    yomi: "まあ、にあっているからわるくないとおもうぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `友の方もな。`,
    yomi: "とものほうもな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `ククッ、ヘルヘイムの全身鎧セット･･･`,
    yomi: "くくっ、へるへいむのぜんしんよろいせっと･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `メイデン、解説を頼む。`,
    yomi: "めいでん、かいせつをたのむ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `ふむ･･･`,
    yomi: "ふむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `悩ましいな。`,
    yomi: "なやましいな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `メイデンがあの服装では
「血のように赤き薔薇の審判者」と
呼べなくなってしまった。`,
    yomi: "めいでんがあのふくそうでは「ちのようにあかきばらのしんぱんしゃ」とよべなくなってしまった。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `「氷の如く青き薔薇の審判者」？`,
    yomi: "「こおりのごとくあおきばらのしんぱんしゃ」？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `それとも「冷徹なる審判者」か？`,
    yomi: "それとも「れいてつなるしんぱんしゃ」か？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `勇者の仲間として、
誰からも敬服されるような異名を考えねば･･･`,
    yomi: "ゆうしゃのなかまとして、だれからもけいふくされるようないみょうをかんがえねば･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `ククッ。そうだ、よく聞け友よ。`,
    yomi: "くくっ。そうだ、よくきけともよ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `我はホワイトアイスドラゴンを討つ
勇者として選ばれ、この世界に転移した。`,
    yomi: "われはほわいとあいすどらごんをうつゆうしゃとしてえらばれ、このせかいにてんいした。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `召喚に応じた友たちもまた、
我とともに世界を救う運命なのだ。`,
    yomi: "しょうかんにおうじたともたちもまた、われとともにせかいをすくううんめいなのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `となれば、それにふさわしい
二つ名が必要であろう？`,
    yomi: "となれば、それにふさわしいふたつながひつようであろう？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `ふむ。友にはどのようなものがいいだろうか･･･`,
    yomi: "ふむ。ともにはどのようなものがいいだろうか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `･･･「黒き死神の友」か、
「ラプチャースレイヤー」か？それとも･･･`,
    yomi: "･･･「くろきしにがみのとも」か、「らぷちゃーすれいやー」か？それとも･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `･･････「漆黒の断罪者」、「絶望の騎士」？
いや、「罪悪の解放者」･･････`,
    yomi: "･･････「しっこくのだんざいしゃ」、「ぜつぼうのきし」？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `やはり友に与える二つ名は･･･
なかなか決めがたいな。`,
    yomi: "やはりともにあたえるふたつなは･･･なかなかきめがたいな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `くっ、すまない。
友を失望させてしまったか。`,
    yomi: "くっ、すまない。ともをしつぼうさせてしまったか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `クククッ。それこそ我ら「宿命」の３人が
ここにつどった理由なのだ。`,
    yomi: "くくくっ。それこそわれら「しゅくめい」の３にんがここにつどったりゆうなのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `ボスのパターン？何だそれは？`,
    yomi: "ぼすのぱたーん？なんだそれは？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `とりあえずは･･･「協会」で
ホワイトアイスドラゴンの情報を
探ろうと思っていたのだが･･･`,
    yomi: "とりあえずは･･･「きょうかい」でほわいとあいすどらごんのじょうほうをさぐろうかとおもっていたのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `ふふ。「アイスローズ」よ。
お前も分かってくれるか。`,
    yomi: "ふふ。「あいすろーず」よ。おまえもわかってくれるか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `メイデン、驚くな･･･この世界では
「組織」と「協会」が表で動いているのだ。`,
    yomi: "めいでん、おどろくな･･･このせかいでは「そしき」と「きょうかい」がおもてでうごいているのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `お前があれほど否定していた存在がな。`,
    yomi: "おまえがあれほどひていしていたそんざいがな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `む？なぜそのような必要がある？`,
    yomi: "む？なぜそのようなひつようがある？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `何かあった時は「即死の魔眼」を使えばいい。`,
    yomi: "なにかあったときは「そくしのまがん」をつかえばいい。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `すでに「組織のイヌ」どもをそれで倒してきた。`,
    yomi: "すでに「そしきのいぬ」どもをそれでたおしてきた。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：A」",
    costume: "winter",
    music:"music15"
  },
  {
    text: `メイデン、ひとつ聞きたいのだが･･･`,
    yomi: "めいでん、ひとつききたいのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `こんなこと･･･本当に大丈夫なのか？`,
    yomi: "こんなこと･･･ほんとうにだいじょうぶなのか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `しかし、メイデン･･･？`,
    yomi: "しかし、めいでん･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `あたりの景観がめちゃくちゃになっているが･･･`,
    yomi: "あたりのけいかんがめちゃくちゃになっているが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `わ、分かった･･･`,
    yomi: "わ、わかった･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ご、ゴミ箱まで･･･？`,
    yomi: "ご、ごみばこまで･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `これでも我は異世界を救うために
転生した勇者なのだぞ･･･`,
    yomi: "これでもわれはいせかいをすくうためにてんせいしたゆうしゃなのだぞ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `降りて大丈夫なのか･･･？`,
    yomi: "おりてだいじょうぶなのか･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･･そういうことなら任せろ！`,
    yomi: "･･･そういうことならまかせろ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `スーパーヒーロー着地！`,
    yomi: "すーぱーひーろーちゃくち！",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ぐはっ！`,
    yomi: "ぐはっ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `枯れた井戸なら最初からそう言ってくれ！`,
    yomi: "かれたいどならさいしょからそういってくれ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `何もないぞ。`,
    yomi: "なにもないぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `それで･･･戻る時はどうすればいいのだ？`,
    yomi: "それで･･･もどるときはどうすればいいのが？",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `少しぐらいは付き合ってやっても
よかったと思うが･･･`,
    yomi: "すこしぐらいはつきあってやってもよかったとおもうが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ふむ。ここが「協会」か。`,
    yomi: "ふむ。ここが「きょうかい」か。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `もっと隠れた静かな場所かと思っていたが、
思ったより騒がしいな。`,
    yomi: "もっとかくれたしずかなばしょとおもっていたが、おもったよりさわがしいな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `くっ。良心は痛むが･･･
友が問題ないと言うなら信じるほかあるまい。`,
    yomi: "くっ。りょうしんはいたむが･･･ともがもんだいないというならしんじるほかあるまい。",
    story: "ev1",
    episode: "イベントストーリー 第1部「問題児たちが外の世界から来たそうですよ？：B」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `異議あり！`,
    yomi: "いぎあり！",
    story: "ev1",
    episode: "イベントストーリー 第1部「待った！異議しかない裁判！」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `裁判が始まる前、メイデンに教わったのだ。`,
    yomi: "さいばんがはじまるまえ、めいでんにおそわったのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「待った！異議しかない裁判！」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `裁判で負けそうな時は、そう叫べと。`,
    yomi: "さいばんでまけそうなときは、そうさけべと。",
    story: "ev1",
    episode: "イベントストーリー 第1部「待った！異議しかない裁判！」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `逆転できる魔法の呪文と聞いている。`,
    yomi: "ぎゃくてんできるまほうのじゅもんときいている。",
    story: "ev1",
    episode: "イベントストーリー 第1部「待った！異議しかない裁判！」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `「アイスローズ」、お前の言っていたことだ。`,
    yomi: "「あいすろーず」、おまえのいっていたことだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `勇者とは、村で何をしても許される存在だと。`,
    yomi: "ゆうしゃとは、むらでなにをしてもゆるされるそんざいだと。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `その言葉だけを信じていたというのに･･･`,
    yomi: "そのことばだけをしんじていたというのに･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `くっ･･･それが友を失う世界線に分岐するとは･･･`,
    yomi: "くっ･･･それがともをうしなうせかいせんにぶんきするとは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `これが孤独な宿命か･･･`,
    yomi: "これがこどくなしゅくめいか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `エル・テレマ・ソルース。`,
    yomi: "える・てれま・そるーす。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `メイデン･･･友として忠告しておこう。`,
    yomi: "めいでん･･･ともとしてちゅうこくしておこう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ゲームと現実は違う。`,
    yomi: "げーむとげんじつはちがう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `プリバティよ、
我らに簡単なクエストなど必要ない。`,
    yomi: "ぷりばてぃよ。われらにかんたんなくえすとなどひつようない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `このギロチン・デ・メフィストは･･･
苦難の道を歩むと誓ったのだ。`,
    yomi: "このぎろちん・で・めふぃすとは･･･くなんのみちをすすむとちかったのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `いちばん難しいクエストを頼む。`,
    yomi: "いちばんむずかしいくえすとをたのむ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `･･･どうせなら報酬も高いものだ。`,
    yomi: "･･･どうせならほうしゅうもたかいものだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `何だと？いったい誰が･･･`,
    yomi: "なんだと？いったいだれが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `お前は･･･！`,
    yomi: "おまえは･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `「碧眼の小さな夜叉」！`,
    yomi: "「へきがんのちいさなやしゃ」！",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `先ほどもそうだったが、
また我らの前に立ちはだかると言うのか。`,
    yomi: "さきほどもそうだったが、またわれらのまえにたちはだかるというのか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `くっ。右眼に封印されし片翼の魔王が
今にも暴れ出しそうだ。`,
    yomi: "くっ。みぎめにふういんされしかたよくのまおうがいまにもあばれだしそうだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `お前との戦いを望み、うずいている！`,
    yomi: "おまえとのたたかいをのぞみ、うずいている！",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `努力してみよう。`,
    yomi: "どりょくしてみよう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ぐ･･･うぐぐっ！`,
    yomi: "ぐ･･･うぐぐっ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `どうした？`,
    yomi: "どうした？",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `前に出るのだな、分かった。`,
    yomi: "まえにでるのだな、わかった。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `それで、何をすればいいんだ？`,
    yomi: "それで、なにをすればいいんだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `メイデン？`,
    yomi: "めいでん？",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `ふむ、たやすいことだ。`,
    yomi: "ふむ、たやすいことだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `もちろん、我は常に準備万端だ。`,
    yomi: "もちろん、われはつねにじゅんびばんたんだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `くっ。`,
    yomi: "くっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `くくっ･･･ははははは！`,
    yomi: "くくっ･･･ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `見ろ、メイデン！`,
    yomi: "みろ、めいでん！",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `この程度のラプチャーなら、
我一人でも十分だ。`,
    yomi: "このていどのらぷちゃーなら、われひとりでもじゅうぶんだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `ふっ、我は一体どこまで強くなってしまうのか･･･`,
    yomi: "ふっ、われはいったいどこまでつよくなってしまうのか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `分かった。`,
    yomi: "わかった。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `ククッ。メイデンよ、みなまで聞いてやるな。`,
    yomi: "くくっ。めいでんよ、みなまできいてやるな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `その方がカッコいいからに決まっているだろう。`,
    yomi: "そのほうがかっこいいからにきまっているだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `･･････何だと！？`,
    yomi: "･･････なんだと！？",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `そ、そんなはずはない。`,
    yomi: "そ、そんなはずはない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `「即死の魔眼」を使えば、
我もこれくらいの火力は･･･くっ。`,
    yomi: "「そくしのまがん」をつかえば、われもこれくらいのかりょくは･･･くっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `･･･いいだろう。`,
    yomi: "･･･いいだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ククッ。見るのだ、メイデン。
このずっしりと重い金貨の袋を。`,
    yomi: "くくっ。見るのだ、めいでん。このずっしりとおもいきんかのふくろを。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `まあ、細かいことはいいではないか。`,
    yomi: "まあ、こまかいことはいいではないか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `クエストの報酬も手に入ったことだ、次は･･･`,
    yomi: "くえすとのほうしゅうもてにはいったことだ、つぎは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `メイデン、無礼だぞ。`,
    yomi: "めいでん、ぶれいだぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `クロエ･･･いや、この少女からは
ただものではないオーラを感じる。`,
    yomi: "くろえ･･･いや、このしょうじょからはただものではないおーらをかんじる。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `いや･･･`,
    yomi: "いや･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `なぜか、そんな名前のような気がしたのだ･･･`,
    yomi: "なぜか、そんななまえのようなきがしたのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･･ああ。その願い、叶えよう。`,
    yomi: "･･･ああ。そのねがい、かなえよう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `ふむ。胸が熱くなり血がたぎる。いい歌だ。`,
    yomi: "ふむ、むねがあつくなりちがたぎる。いいうただ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `ククッ。メイデンよ、考えるまでもあるまい。`,
    yomi: "くくっ。めいでんよ、かんがえるまでもあるまい。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `こちらの方がカッコいいからに
決まっているだろう。`,
    yomi: "こちらのほうがかっこいいからにきまっているだろう。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `やはり、前から考えていたことだが･･･`,
    yomi: "やはり、まえからかんがえていたことだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `料理人と音楽家が仲間に必要だな。`,
    yomi: "りょうりにんとおんがくかがなかまにひつようだな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `忘れている？`,
    yomi: "わすれている？",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `･･･ひ、一言か･･･`,
    yomi: "･･･ひ、ひとことか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `メ、メイデン。こういう時はどうすれば･･･`,
    yomi: "め、めいでん。こういうときはどうすれば･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `そ、そうか。`,
    yomi: "そ、そうか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ならば･･･`,
    yomi: "ならば･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `よし。そうだな。`,
    yomi: "よし。そうだな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  {
    text: `この世界に来て多くのことを経験した。`,
    yomi: "このせかいにきておおくのことをけいけんした。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  {
    text: `しかし、いま改めて考えると、
楽しい記憶しかない。`,
    yomi: "しかし、いまあらためてかんがえると、たのしいきおくしかない。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  {
    text: `メイデンの言った通りだな。`,
    yomi: "めいでんのいったとおりだな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  {
    text: `冒険は、やはり気の合う仲間たちとするものだ。`,
    yomi: "ぼうけんは、やはりきのあうなかまたちとするものだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  {
    text: `では、我が心に刻まれる思い出を与えてくれた･･･`,
    yomi: "では、わがこころにきざまれるおもいでをあたえてくれた･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  {
    text: `この素晴らしい世界に祝･･･`,
    yomi: "このすばらしいせかいにしゅく･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「はたらく勇者さま！：B」",
    costume: "winter",
    music:"music18"
  },
  //ICE DRAGON SAGA はたらくゆうしゃさま！：B終
  //DRAGON DUNGEON RUN　フォトアルバム
  {
    text: `メ、メイデンよ。
そんなことはいいから 早く我を 引き上げるのだ！`,
    yomi: "め、めいでんよ。そんなことはいいからはやくわれをひきあげるのだ！",
    story: "mg1",
    episode: "フォトアルバム「ギロチン、ゲットだぜー！」",
    costume: "winter",
    music:"music19"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "mg1",
    episode: "フォトアルバム「爆発は芸術だ」",
    costume: "winter",
    music:"music19"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "mg1",
    episode: "フォトアルバム「爆発は芸術だ」",
    costume: "winter",
    music:"music19"
  },
  {
    text: `そうはいかない！勇者は前進あるのみ！`,
    yomi: "そうはいかない！ゆうしゃはぜんしんあるのみ！",
    story: "mg1",
    episode: "フォトアルバム「ゴロゴロの予感」",
    costume: "winter",
    music:"music19"
  },
  {
    text: `またやな感じなのだ！`,
    yomi: "またやなかんじなのだ！",
    story: "mg1",
    episode: "フォトアルバム「やな感じ〜！」",
    costume: "winter",
    music:"music19"
  },
  {
    text: `うあああああ！`,
    yomi: "うあああああ！",
    story: "mg1",
    episode: "フォトアルバム「最強のホワイトアイスドラゴンが泣き叫んだ」",
    costume: "winter",
    music:"music19"
  },
  //ニケ日本上陸プロジェクト
  {
    text: `美術館ほど『組織』の人間を避けるのにふさわしい場所はない。
そういう場所には奴らも足を踏み入れないのだ。`,
    yomi: "ともよ。このあかにそまりしよぞらのもとで、「けつげつのさんか」をともにまおう！",
    story: "cp2",
    episode: "徳島エリア オオツカコクサイビジュツカン",
    costume: "normal",
    music:"music7"
  },
  // 満月の下でニケと共に
  {
    text: `友よ。この紅に染まりし夜空のもとで、
「血月の賛歌」を共に舞おう！`,
    yomi: "ともよ。このあかにそまりしよぞらのもとで、「けつげつのさんか」をともにまおう！",
    story: "cp1",
    episode: "キャンペーン内セリフ",
    costume: "normal",
    music:"music7"
  },
  // めがにけっ
  {
    text: `魔界黒竜!!!`,
    yomi: "まかいこくりゅう!!!",
    story: "co1",
    episode: "第7話：中二病",
    costume: "normal",
    music:"music7"
  },
  {
    text: `均衡の･･･!!!`,
    yomi: "きんこうの･･･!!!",
    story: "co1",
    episode: "第7話：中二病",
    costume: "normal",
    music:"music7"
  },
  {
    text: `ゴッドブレイズ〜〜〜〜〜!!!!!`,
    yomi: "ごっどぶれいず〜〜〜〜〜!!!!!",
    story: "co1",
    episode: "第7話：中二病",
    costume: "normal",
    music:"music7"
  },
  {
    text: `あるてぃめTT･･･`,
    yomi: "あるてぃめTT･･･",
    story: "co1",
    episode: "第7話：中二病",
    costume: "normal",
    music:"music7"
  },
  {
    text: `ククッ心配は不要だ`,
    yomi: "くくっしんぱいはふようだ",
    story: "co1",
    episode: "第62話：Nikke In Dungeon",
    costume: "normal",
    music:"music7"
  },
  {
    text: `このギロチン・デ・メフィストがいるのだから!!`,
    yomi: "このぎろちん・で・めふぃすとがいるのだから!!",
    story: "co1",
    episode: "第62話：Nikke In Dungeon",
    costume: "normal",
    music:"music7"
  },
  {
    text: `チッ!!奇襲か`,
    yomi: "ちっ!!きしゅうか",
    story: "co1",
    episode: "第62話：Nikke In Dungeon",
    costume: "normal",
    music:"music7"
  },
  {
    text: `下がれ!!ここは我が引き受けよう`,
    yomi: "さがれ!!ここはわれがひきうけよう",
    story: "co1",
    episode: "第62話：Nikke In Dungeon",
    costume: "normal",
    music:"music7"
  },
  {
    text: `なにっ`,
    yomi: "なにっ",
    story: "co1",
    episode: "第62話：Nikke In Dungeon",
    costume: "normal",
    music:"music7"
  },
  {
    text: `何かいい案があるのか!?`,
    yomi: "なにかいいあんがあるのか!?",
    story: "co1",
    episode: "第62話：Nikke In Dungeon",
    costume: "normal",
    music:"music7"
  },
  // メティス部隊 特別四コマ漫画
  {
    text: `フン！我が封印されし力は、その程度ではない！`,
    yomi: "ふん！われがふういんされしちからは、そのていどではない！",
    story: "co2",
    episode: "第3話：騒音クレーム",
    costume: "normal",
    music:"music7"
  },
  {
    text: `実に滑稽だ！`,
    yomi: "じつにこっけいだ！",
    story: "co2",
    episode: "第3話：騒音クレーム",
    costume: "normal",
    music:"music7"
  },
  //ICE DRAGON SAGA とにかく剣でした：A
  {
    text: `オホン、オホンッ･･･`,
    yomi: "おほん、おほんっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `その･･･すまない･･･`,
    yomi: "その･･･すまない･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ええと、その･･･`,
    yomi: "ええと、その･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `村長から急に重要なクエストを
依頼されたのでな。`,
    yomi: "そんちょうからきゅうにじゅうようなくえすとをいらいされたのでな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `友のことを忘れていたとか、
そういうことでは決してないぞ。`,
    yomi: "とものことをわすれていたとか、そういうことではけっしてないぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `そうだろう、「アイスローズ」？`,
    yomi: "そうだろう、「あいすろーず」？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `そ、そうだな、いい考えだ。`,
    yomi: "そ、そうだな、いいかんがえだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ベスティー、武器屋を知らないか？`,
    yomi: "べすてぃー、ぶきやをしらないか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `どういうことだ？
服しかないように見えるが･･･`,
    yomi: "どういうことだ？ふくしかないようにみえるが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `ず、ずいぶんそろえたな･･･`,
    yomi: "ず、ずいぶんそろえたな･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `すべて身に着けたら、
身体が重くて動けなくなりそうだ。`,
    yomi: "すべてみにつけたら、からだがおもくてうごけなくなりそうだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `盾とかぶとは無くてもいいのではないか？`,
    yomi: "たてとかぶとはなくてもいいのではないか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `これは･･･ただの木の枝ではないか？`,
    yomi: "これは･･･ただのきのえだではないか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `何？こんなものを100枚で･･･？`,
    yomi: "なに？こんなものを100まいで･･･？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `ま、待て、メイデン･･･`,
    yomi: "ま、まて、めいでん･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `お、おい。「冷眼のベレー」よ。`,
    yomi: "お、おい。「れいがんのべれー」よ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `これを引き取ってもらえるか？`,
    yomi: "これをひきとってもらえるか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `くっ。我には「勇者の剣」さえあれば
いいはずなのだが･･･`,
    yomi: "くっ。われには「ゆうしゃのけん」さえあればいいはずなのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music5"
  },
  {
    text: `なに？`,
    yomi: "なに？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `仕方があるまい。`,
    yomi: "しかたがあるまい。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `「即死の魔眼」を･･･`,
    yomi: "「そくしのまがん」を･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `･･･使わないとすれば･･･どうすればいいのだ？`,
    yomi: "･･･つかわないとすれば･･･どうすればいいのだ？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：A」",
    costume: "winter",
    music:"music10"
  },
  {
    text: `ふふ･･･分かってないな。`,
    yomi: "ふふ･･･わかってないな。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `あれは音楽家の湧き上がる情熱を表現した
神聖な儀式なのだ！`,
    yomi: "あれはおんがくかのわきあがるじょうねつをひょうげんしたしんせいなぎしきなのだ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `友よ、しばし音楽に
身を任せて来てもいいだろうか。`,
    yomi: "ともよ、しばしおんがくにみをまかせてきてもいいだろうか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `この血がたぎって仕方ない･･･`,
    yomi: "このちがたぎってしかたない･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music17"
  },
  {
    text: `「偉大なるヴィラン」ドレイクよ、
我々には「伝説の剣」が必要なのだ。`,
    yomi: "「いだいなるゔぃらん」どれいくよ、われわれには「でんせつのけん」がひつようなのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `そうだ。`,
    yomi: "そうだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `まさか･･･その笛というのは、
この木の枝のことか？`,
    yomi: "まさか･･･そのふえというのは、このきのえだのことか？",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `我にはできんぞ。`,
    yomi: "われにはできんぞ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `･･････くっ。`,
    yomi: "･･････くっ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `くくくっ･･･はーはははは！`,
    yomi: "くくくっ･･･はーはははは！",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `メイデン･･･実は伏線を張っていたのは
お前ひとりでは無かったのだ。`,
    yomi: "めいでん･･･じつはふくせんをはっていたのはおまえひとりではなかったのだ。",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `仲間に料理人と音楽家が必要だとな！`,
    yomi: "なかまにりょうりにんとおんがくかがひつようだとな！",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ボリューム！我の仲間になれ！`,
    yomi: "ぼりゅーむ！われのなかまになれ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「とにかく剣でした：B」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ほ、本当に起きたのか･･･`,
    yomi: "ほ、ほんとうにおきたのか･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `勇者の資格を試すということか。`,
    yomi: "ゆうしゃのしかくをためすということか。",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `我の出番のようだな。。`,
    yomi: "われのでばんのようだな。。",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `ククク･･･勝負だ、プリム！`,
    yomi: "くくく･･･しょうぶだ、ぷりむ！",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `友よ、指示を！`,
    yomi: "ともよ、しじを！",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `少しばかり暴れさせてもらおう。ククク･･･！`,
    yomi: "すこしばかりあばれさせてもらおう。くくく･･･！",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `時は来た！`,
    yomi: "ときはきた！",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `来たれ、片翼の魔王よ！！`,
    yomi: "きたれ、かたよくのまおうよ！！",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `魔・界・黒・龍・波！！`,
    yomi: "まかいこくりゅうは！！",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music20"
  },
  {
    text: `ふふ、言っただろう･･･`,
    yomi: "ふふ、いっただろう･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `「即死の魔眼」を使えば･･･`,
    yomi: "「そくしのまがん」をつかえば･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `この程度･･･`,
    yomi: "このていど･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `命令通りに･･･`,
    yomi: "めいれいどおりに･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `イレギュラーは･･･`,
    yomi: "いれぎゅらーは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `すべて･･･処分する･･･`,
    yomi: "すべて･･･しょぶんする･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `イレギュラーは･･･`,
    yomi: "いれぎゅらーは･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `すべて･･･`,
    yomi: "すべて･･･",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第1部「ニケの力ってすげー！：A」",
    costume: "winter",
    music:"music16"
  },
  //ICE DRAGON SAGA イベントストーリー第1部終
  //ICE DRAGON SAGA イベントストーリー第2部
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････イングリッド。`,
    yomi: "･･････イングリッド。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我が迷ったせいだ･･･`,
    yomi: "われがまよったせいだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `クロエに重い傷を負わせ･･･人々を死なせた･･･`,
    yomi: "くろえにおもいきずをおわせ･･･ひとびとをしなせた･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `イレギュラーの言葉など
デタラメだと分かっていながら･･･`,
    yomi: "いれぎゅらーのことばなどでたらめだとわかっていながら･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `分かっていながら･･･我はためらってしまった･･･`,
    yomi: "わかっていながら･･･われはためらってしまった･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `その結果はどうだ？`,
    yomi: "そのけっかはどうだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `人々は血を流し･･･街はこの惨状だ･･･`,
    yomi: "ひとびとはちをながし･･･まちはこのさんじょうだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `そして･･･`,
    yomi: "そして･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `たった一人の友を･･･
クロエを守ることができなかった･･･`,
    yomi: "たったひとりのともを･･･くろえをまもることができなかった･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `この手ですべてを台無しにしてしまった･･･`,
    yomi: "このてですべてをだいなしにしてしまった･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `すべてを･･･`,
    yomi: "すべてを･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `帰る･･･？`,
    yomi: "かえる･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `どこへだ？`,
    yomi: "どこへだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `エクスターナーの拠点にか？
それとも、昨日までのような日常にか？`,
    yomi: "えくすたーなーのきょてんにか？それとも、きのうまでのようなにちじょうにか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我はたった一つの任務さえまともに遂行できず･･･`,
    yomi: "われはたったひとつのにんむさえまともにすいこうできず･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我のそばに残ってくれたただ一人の友さえ
守れなかったのだ･･･`,
    yomi: "われのそばにのこってくれたただひとりのともさえまもれなかったのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `もう我には何も残されていない･･･`,
    yomi: "もうわれにはなにものこされていない･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `いったいどこへ帰るというのだ･･･？`,
    yomi: "いったいどこへかえるというのだ･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `言ったであろう･･･`,
    yomi: "いったであろう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我に残されたものはもう何もない･･･`,
    yomi: "われにのこされたものはもうなにもない･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `どこへ、何のために進めというのだ･･･？`,
    yomi: "どこへ、なんのためにすすめというのだ･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ぐ･･･がはっ･･･！`,
    yomi: "ぐ･･･がはっ･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `て、敵襲だ！`,
    yomi: "て、てきしゅうだ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `友だったか。`,
    yomi: "ともだったか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `くくっ･･･心配するな。我は当然、問題･･･`,
    yomi: "くくっ･･･しんぱいするな。われはとうぜん、もんだい･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･････お、オホンッ！`,
    yomi: "･･････お、おほんっ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `ええと、なんだ･･･`,
    yomi: "ええと、なんだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `つまり･･･`,
    yomi: "つまり･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `少し距離が近すぎはしないか･･･？`,
    yomi: "すこしきょりがちかすぎはしないか･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `む、無論我は気にしないが、
友が気まずいのではないかと･･･`,
    yomi: "む、むろんわれはきにしないが、ともがきまずいのではないかと･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `この音は･･･！`,
    yomi: "このおとは･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `友よ、外で何が起きている？`,
    yomi: "ともよ、そとでなにがおきている？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `どけ、メイデン。`,
    yomi: "どけ、めいでん。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `速度は･･･威力。`,
    yomi: "そくどは･･･いりょく。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `お前は光の速度で斬られたことはあるか？`,
    yomi: "おまえはひかりのそくどできられたことはあるか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：A」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `ひとまず片づいたな。`,
    yomi: "ひとまずかたづいたな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `勇者の剣を手にしたから、
敵が動き出したということか･･･`,
    yomi: "ゆうしゃのけんをてにしたから、てきがうごきだしたということか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `くっ。「踊る遊戯の支配者」か。`,
    yomi: "くっ。「おどるゆうぎのしはいしゃ」か。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `同じ破滅属性の我とは、相性が悪いな。`,
    yomi: "おなじはめつぞくせいのわれとは、あいしょうがわるいな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `「アイスローズ」よ、それはどういう･･･`,
    yomi: "「あいすろーず」よ、それはどういう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `しかし、この力を使わなければ
友たちが危険な目に遭った時･･･`,
    yomi: "しかし、このちからをつかわなければともたちがきけんなめにあったとき･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･･前向きに検討しよう。`,
    yomi: "･･･まえむきにけんとうしよう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `メイデンよ。事態は一刻を争う、そうだな？`,
    yomi: "めいでんよ。じたいはいっこくをあらそう、そうだな？",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `そういうわけだ、エマよ。`,
    yomi: "そういうわけだ、えまよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `我々はここで失礼する！`,
    yomi: "われわれはここでしつれいする！",
    story: "ev1",
    episode: "イベントストーリー 第2部「運命が留まる夜：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･････ククッ･･･`,
    yomi: "･･････くくっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `クククク･･･ハハハハハ！`,
    yomi: "くくくく･･･ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `踊る遊戯の支配者、マスタング。`,
    yomi: "おどるゆうぎのしはいしゃ、ますたんぐ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `このギロチン・デ・メフィストに
そのような脅しは通用しない！`,
    yomi: "このぎろちん・で・めふぃすとにそのようなおどしはつうようしない！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `正々堂々と決闘ということか。`,
    yomi: "せいせいどうどうとけっとうということか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `よし、その挑戦、受けよう。`,
    yomi: "よし、そのちょうせん、うけよう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `対戦相手は貴様に指名させてやる！`,
    yomi: "たいせんあいてはきさまにしめいさせてやる！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `勇者にそんな卑怯なマネができるか！`,
    yomi: "ゆうしゃにそんなひきょうなまねができるか！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `さあ、マスタングよ。誰を指名する？`,
    yomi: "さあ、ますたんぐよ。だれをしめいする？",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `友よ、お前ならできる！`,
    yomi: "ともよ、おまえならできる！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music22"
  },
  {
    text: `我が信じるお前を信じろ！`,
    yomi: "われがしんじるおまえをしんじろ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music22"
  },
  {
    text: `･･････正々堂々と決闘するはずだったのだが･･･`,
    yomi: "･･････せいせいどうどうとけっとうするはずだったのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `礼を言うにはまだ早いぞ。`,
    yomi: "れいをいうにはまだはやいぞ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `「組織」の手下どもが村に残っているからな。`,
    yomi: "「そしき」のてしたどもがむらにのこっているからな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `少し待っていろ。`,
    yomi: "すこしまっていろ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `我がすべて片づけてこよう。`,
    yomi: "われがすべてかたづけてこよう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `･･････！！`,
    yomi: "･･････！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `我には･･･まだ覚悟が･･･`,
    yomi: "われには･･･まだかくごが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････寂しいだろうな、心も凍るほど。`,
    yomi: "･･････さみしいだろうな、こころもこおるほど。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `最初に会ってから見かけなかったが、
こんな場所にいたのか。`,
    yomi: "さいしょにあってからみかけなかったが、こんなばしょにいたのか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `見ろ！エクシア。`,
    yomi: "みろ！えくしあ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `我には仲間がいる！`,
    yomi: "われにはなかまがいる！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `我は仲間無しなどではなかったのだ！`,
    yomi: "われはなかまなしなどではなかったのだ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `くっ、相変わらずその話か。`,
    yomi: "くっ、あいかわらずそのはなしか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music9"
  },
  {
    text: `･･････その前に、提案がある。`,
    yomi: "･･････そのまえに、ていあんがある。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `つまりだな･･･魔王城へ行く前に･･･`,
    yomi: "つまりだな･･･まおうじょうへいくまえに･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ホワイトアイスドラゴンの攻略方法くらいは･･･`,
    yomi: "ほわいとあいすどらごんのこうりゃくほうほうくらいは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `事前に相談しておいた方がいいのではないか･･･？`,
    yomi: "じぜんにそうだんしておいたほうがいいのではないか･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `くくっ、大きな戦いの予感に血がたぎる。`,
    yomi: "くくっ、おおきなたたかいのよかんにちがたぎる。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `それでメイデンよ。我は何をすればいい？`,
    yomi: "それでめいでんよ。われはなにをすればいい？",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･･何？`,
    yomi: "･･･なに？",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `もちろんだ。「即死の魔眼」を使うたびに
宿で目覚めて･･･`,
    yomi: "もちろんだ。「そくしのまがん」をつかうたびにやどでめざめて･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `ん･･･？`,
    yomi: "ん･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `･･･まさか。`,
    yomi: "･･･まさか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `･･････やはりそうだったのか。`,
    yomi: "･･････やはりそうだったのか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `我は右眼に「片翼の魔王」を封印した。`,
    yomi: "われはみぎめに「かたよくのまおう」をふういんした。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `その力を使って悪を打ち滅ぼしてきたのだ。`,
    yomi: "そのちからをつかってあくをうちほろぼしてきたのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `封印が解けないように注意はしていたつもりだ。`,
    yomi: "ふういんがとけないようにちゅういはしていたつもりだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `だが、使うたびに感じていた。`,
    yomi: "だが、つかうたびにかんじていた。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `「片翼の魔王」は･･･
我が弱る時を待っているのだ。`,
    yomi: "「かたよくのまおう」は･･･われがよわるときをまっているのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `いつか封印を破り、
この身体を奪い取るその時を！`,
    yomi: "いつかふういんをやぶり、このからだをうばいとるそのときを！",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `この世界に来てから、
眼の力が強くなったような気がしていたが･･･`,
    yomi: "このせかいにきてから、めのちからがつよくなったようなきがしていたが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `封印を破ろうとする
「片翼の魔王」の罠だったのか･･･`,
    yomi: "ふういんをやぶろうとする「かたよくのまおう」のわなだったのか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `さすが「アイスローズ」は話が早いな。`,
    yomi: "さすが「あいすろーず」ははなしがはやいな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `もし魔眼の力を完全に解放すれば、
たちどころに封印は破られ･･･`,
    yomi: "もしまがんのちからをかんぜんにかいほうすれば、たちどころにふういんはやぶられ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `我は「片翼の魔王」に
飲み込まれてしまうだろう。`,
    yomi: "われは「かたよくのまおう」にのみこまれてしまうだろう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `おやおや。`,
    yomi: "おやおや。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `友よ･･･やはり「片翼の魔王」に
興味を持ってしまったか。`,
    yomi: "ともよ･･･やはり「かたよくのまおう」にきょうみをもってしまったか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `「片翼の魔王」はただ沈黙のみがある世界を
造らんとしている。`,
    yomi: "「かたよくのまおう」はただちんもくのみがあるせかいをつくらんとしている。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `その障害となる者すべての排除をもくろむ･･･`,
    yomi: "そのしょうがいのなるものすべてのはいじょをもくろむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `邪悪なる存在なのだ。`,
    yomi: "じゃあくなるそんざいなのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `だから、その時は頼む。`,
    yomi: "だから、そのときはたのむ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `世界が混沌に飲み込まれないよう･･･`,
    yomi: "せかいがこんとんにのみこまれないよう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `お前はお前の任務を全うしてくれ。`,
    yomi: "おまえはおまえのにんむをまっとうしてくれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `「片翼の魔王」に飲み込まれた我を･･･`,
    yomi: "「かたよくのまおう」にのみこまれたわれを･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `イレギュラーとなった我を倒し、
アークのヒーローになれ。`,
    yomi: "いれぎゅらーとなったわれをたおし、あーくのひーろーになれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `うーむ･･･`,
    yomi: "うーむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `当然、そうするだろうな。`,
    yomi: "どうぜん、そうするだろうな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `エクスターナーのニケたる者、
公私を区別する必要があり･･･`,
    yomi: "えくすたーなーのにけたるもの、こうしをくべつするひつようがあり･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `常に冷静沈着を保ち、
アークのために戦わなければならない。`,
    yomi: "つねにれいせいちんちゃくをたもち、あーくのためにたたかわなければならない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `我は必ずそうする覚悟だ。`,
    yomi: "われはかならずそうするかくごだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `しかし、メイデンよ。`,
    yomi: "しかし、めいでんよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `お前がイレギュラーになることはない。`,
    yomi: "おまえがいれぎゅらーになることはない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `いいや。`,
    yomi: "いいや。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `メイデン、我は友人がそうなる前に止める。`,
    yomi: "めいでん、われはゆうじんがそうなるまえにとめる。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `たとえこの身を犠牲にしてでもな。`,
    yomi: "たとえこのみをぎせいにしてでもな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `我の友人をイレギュラーにはさせない。`,
    yomi: "われのゆうじんをいれぎゅらーにはさせない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `そういうことだ、メイデン。`,
    yomi: "そういうことだ、めいでん。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `お前がイレギュラーになることはない。`,
    yomi: "おまえがいれぎゅらーになることはない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「Must Dance：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `いや･･･我は･･･`,
    yomi: "いや･･･われは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `わ、我が先なのか？`,
    yomi: "わ、われがさきなのか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `分かった。ならば･･･`,
    yomi: "わかった。ならば･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `我が先に行こう！`,
    yomi: "われがさきにいこう！",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `ふぅ･･･`,
    yomi: "ふぅ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `うぅっ･･･`,
    yomi: "うぅっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `何だ？なぜ･･･？`,
    yomi: "なんだ？なぜ･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `うぐっ･･･`,
    yomi: "うぐっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ははは･･･何かがおかしいようだ･･･`,
    yomi: "ははは･･･なにかがおかしいようだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `勇者が魔王城を門前払いされるとは･･･`,
    yomi: "ゆうしゃがまおうじょうをもんぜんばらいされるとは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `そんな英雄譚は聞いたことがない･･･`,
    yomi: "そんなえいゆうたんはきいたことがない･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `そんなはずはない･･･！`,
    yomi: "そんなはずはない･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `メイデン、案ずるな。`,
    yomi: "めいでん、あんずるな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `少し時間をかけさえすれば･･･`,
    yomi: "すこしじかんをかけさえすれば･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `必ず･･･`,
    yomi: "かならず･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `ふっ･･･`,
    yomi: "ふっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `隠しきれないか。`,
    yomi: "かくしきれないか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `そうだ、その通りだ。`,
    yomi: "そうだ、そのとおりだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `何か方法があるはずだ。`,
    yomi: "なにかほうほうがあるはずだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `魔王城に入る別の道が･･･`,
    yomi: "まおうじょうにはいるべつのみちが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `･･･何だと？`,
    yomi: "･･･なんだと？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `そうだったのか･･･？`,
    yomi: "そうだったのか･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `･･･覚えている。`,
    yomi: "･･･おぼえている。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `アークのテロを計画する
「エレクトリックショック」部隊を拘束し、
中央政府軍に引き渡すことだったな。`,
    yomi: "あーくのてろをけいかくする「えれくとりっくしょっく」ぶたいをこうそくし、ちゅうおうせいふぐんにひきわたすことだったな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `何だと！？`,
    yomi: "なんだと！？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `メイデン、それは･･･！`,
    yomi: "めいでん、それは･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `くっ･･･`,
    yomi: "くっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `なぜ我は、いまだに･･･`,
    yomi: "なぜわれは、いまだに･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `今度こそ、物語を終わらせようと決めたのに･･･`,
    yomi: "こんどこそ、ものがたりをおわらせようときめたのに･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `最後の瞬間に来てなお、
恐れを捨てられないのか･･･`,
    yomi: "さいごのしゅんかんにきてなお、おそれをすてられないのか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `イングリッド･･･？`,
    yomi: "いんぐりっど･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：A」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････違う･･･`,
    yomi: "･･････ちがう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `メイデンがホワイトアイスドラゴンを
倒すと言っていた。`,
    yomi: "めいでんがほわいとあいすどらごんをたおすといっていた。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `それなら、「冬の呪い」は･･･`,
    yomi: "それなら、「ふゆののろい」は･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `ラプラスが、なぜ･･･？`,
    yomi: "らぷらすが、なぜ･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `イングリッド･･･`,
    yomi: "いんぐりっど･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `我にはいまだに分からない･･･`,
    yomi: "われにはいまだにわからない･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `この手で壊してしまった物語を、
どう終わらせればいいというのだ･･･`,
    yomi: "このてでこわしてしまったものがたりを、どうおわらせればいいというのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `･･････くっ。`,
    yomi: "･･････くっ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music25"
  },
  {
    text: `くくっ･･･はははははは！`,
    yomi: "くくっ･･･はははははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music25"
  },
  {
    text: `イングリッド、礼を言おう！`,
    yomi: "いんぐりっど、れいをいおう！",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music25"
  },
  {
    text: `お前のおかげで思い出したぞ。`,
    yomi: "おまえのおかげでおもいだしたぞ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music25"
  },
  {
    text: `あの日･･･我がどこへ、何のために進むのか、
決心したことを。`,
    yomi: "あの日･･･われがどこへ、なんのためにすすむのか、けっしんしたことを。",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music25"
  },
  {
    text: `我を止めないのか？`,
    yomi: "われをとめないのか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「この勇者が俺TUEEEくせに何もできない：B」",
    costume: "winter",
    music:"music25"
  },
  {
    text: `間に合ったか。`,
    yomi: "まにあったか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ふっ･･･`,
    yomi: "ふっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `「アイスローズ」よ、ここは我に任せろ。`,
    yomi: "「あいすろーず」よ、ここはわれにまかせろ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `お前の出番はもう少し先だ。`,
    yomi: "おまえのでばんはもうすこしさきだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `久しいな、ラプラス！`,
    yomi: "ひさしいな、らぷらす！",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `もはや言葉は無用！`,
    yomi: "もはやことばはむよう！",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我、ギロチン・デ・メフィストが･･･`,
    yomi: "われ、ぎろちん・で・めふぃすとが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `我の目に眠る魔王の封印を、
ここに再び解き放つ。`,
    yomi: "われのめにねむるまおうのふういんを、ここにふたたびときはなつ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `思うさま暴れるがいい、片翼の魔王よ！`,
    yomi: "おもうさまあばれるがいい、かたよくのまおうよ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `輝け！アイン・ソフ・オウル！`,
    yomi: "かがやけ！あいん・そふ・おうる！",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `はぁ･･･はぁ･･･`,
    yomi: "はぁ･･･はぁ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `これで･･･先代勇者より･･･
我の方が強いと証明されたな･･･`,
    yomi: "これで･･･せんだいゆうしゃより･･･われのほうがつよいとしょうめいされたな･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `メイデン･･･よく聞いてくれ･･･`,
    yomi: "めいでん･･･よくきいてくれ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `お前は、お前の使命を全うするのだ･･･`,
    yomi: "おまえは、おまえのしめいをまっとうするのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `言ったであろう･･･`,
    yomi: "いったであろう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `「片翼の魔王」に飲み込まれた我を倒し･･･`,
    yomi: "「かたよくのまおう」にのみこまれたわれをたおし･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `アークのヒーローになれ･･･`,
    yomi: "あーくのひーろーになれ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `イレギュラーとなった我を倒せば･･･`,
    yomi: "いれぎゅらーとなったわれをたおせば･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `またエクスターナーの一員として･･･
任務を遂行できるようになるはず･･･`,
    yomi: "またえくすたーなーのいちいんとして･･･にんむをすいこうできるようになるはず･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `シミュレーション･･･終了･･･`,
    yomi: "しみゅれーしょん･･･しゅうりょう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「One-winged Dark Lord」",
    costume: "winter",
    music:"music2"
  },
  {
    text: `くっ･･･`,
    yomi: "くっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `グアアァァァー！`,
    yomi: "ぐああぁぁぁー！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `命令通りに･･･`,
    yomi: "めいれいどおりに･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `イレギュラーは･･･`,
    yomi: "いれぎゅらーは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `すべて･･･処分･･･`,
    yomi: "すべて･･･しょぶん･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `イレギュラーは･･･すべて･･･`,
    yomi: "いれぎゅらーは･･･すべて･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `すべて･･･処分する･･･！`,
    yomi: "すべて･･･しょぶんする･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `グオォォー！`,
    yomi: "ぐおぉぉー！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `イレギュラーは･･･！`,
    yomi: "いれぎゅらーは･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `すべて･･･処分する･･･！`,
    yomi: "すべて･･･しょぶんする･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `ぐはっ！`,
    yomi: "ぐはっ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `ふふ、ともあれメイデンよ。`,
    yomi: "ふふ、ともあれめいでんよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `まずは我とパーティというものを
組んではくれないか？`,
    yomi: "まずはわれとぱーてぃというものをくんではくれないか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `そろそろ最初のダンジョンに入りたいのだが、
仲間が誰も･･･`,
    yomi: "そろそろさいしょのだんじょんにはいりたいのだが、なかまがだれも･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `いや、我の目に留まった者が誰もいないのだ。`,
    yomi: "いや、われのめにとまったものがだれもいないのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `この世界に来て多くのことを経験した。`,
    yomi: "このせかいにきておおくのことをけいけんした。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `しかし、いま改めて考えると、
楽しい記憶しかない。`,
    yomi: "しかし、いまあらためてかんがえると、たのしいきおくしかない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `メイデンの言った通りだな。`,
    yomi: "めいでんのいったとおりだな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `冒険は、やはり気の合う仲間たちとするものだ。`,
    yomi: "ぼうけんは、やはりきのあうなかまたちとするものだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `しかし、メイデンよ。`,
    yomi: "しかし、めいでんよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `お前がイレギュラーになることはない。`,
    yomi: "おまえがいれぎゅらーになることはない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `メイデン、我は友人がそうなる前に止める。`,
    yomi: "めいでん、われはゆうじんがそうなるまえにとめる。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `たとえこの身を犠牲にしてでもな。`,
    yomi: "たとえこのみをぎせいにしてでもな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `我の友人をイレギュラーにはさせない。`,
    yomi: "われのゆうじんをいれぎゅらーにはさせない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `すまない。`,
    yomi: "すまない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `ケガはないか？`,
    yomi: "けがはないか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：A」",
    costume: "winter",
    music:"music23"
  },
  {
    text: `すまない。`,
    yomi: "すまない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `ケガはないか？`,
    yomi: "けがはないか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `かなり驚かせてしまったようだな。。`,
    yomi: "かなりおどろかせてしまったようだな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `確かに･･･`,
    yomi: "たしかに･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `ニケでさえも恐れおののく
死神の正体を見たのだから･･･`,
    yomi: "にけでさえもおそれおののくしにがみのしょうたいをみたのだから･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `怖がるのは無理もない。`,
    yomi: "こわがるのはむりもない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `さっきは人間である君を傷つけようとした
イレギュラーを倒したまでだ。`,
    yomi: "さっきはにんげんであるきみをきずつけようとしたいれぎゅらーをたおしたまでだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `君に危害を加えることはない。安心して･･･`,
    yomi: "きみにきがいをくわえることはない。あんしんして･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `なんだ？`,
    yomi: "なんだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `か、カッコイイ･･･？`,
    yomi: "か、かっこいい･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `なに･･･「即死の魔眼」？何だ、それは？`,
    yomi: "なに･･･「そくしのまがん」？なんだ、それは？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ええと･･･片翼の･･･何だって？`,
    yomi: "ええと･･･かたよくの･･･なんだって？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `よく分からないが･･･`,
    yomi: "よくわからないが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `それより、私のことが怖くないのか？`,
    yomi: "それより、わたしのことがこわくないのか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `うーむ･･･`,
    yomi: "うーむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `まあ、いいか･･･`,
    yomi: "まあ、いいか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `家まで送ろう。ついてくるんだ。`,
    yomi: "いえまでおくろう。ついてくるんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `いや、私は家の前まで送るだけのつもりで･･･`,
    yomi: "いや、わたしはいえのまえまでおくるだけのつもりで･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `さっきから訳の分からないことを言っているが･･･`,
    yomi: "さっきからわけのわからないことをいっているが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `たぶん人違いだと思うぞ･･･`,
    yomi: "たぶんひとちがいだとおもうぞ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `･･････何だと？`,
    yomi: "･･････なんだと？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `･･････そこまで言うなら･･･`,
    yomi: "･･････そこまで言うなら･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `少しだけお邪魔させてもらおうか･･･`,
    yomi: "すこしだけおじゃまさせてもらおうか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `それはそうと、そんないじめを･･･`,
    yomi: "それはそうと、そんないじめを･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `いや、迫害に耐えてきたというのか？`,
    yomi: "いや、はくがいにたえてきたというのか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `うーむ･･･`,
    yomi: "うーむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `その話だが･･･`,
    yomi: "そのはなしだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `「即死の魔眼」や
「片翼の魔王」などという話は･･･`,
    yomi: "「そくしのまがん」や「かたよくのまおう」などというはなしは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `誰にもしない方がいい。`,
    yomi: "だれにもしないほうがいい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `いや･･･`,
    yomi: "いや･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `うーむ･･･`,
    yomi: "うーむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `そうだ、「組織」に気づかれるかもしれない。`,
    yomi: "そうだ、「そしき」にきづかれるかもしれない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `お前が「組織」の存在を知っていると
気づかれてしまう。`,
    yomi: "おまえが「そしき」のそんざいをしっているときづかれてしまう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `だから、その話は秘密にしておくことだ。`,
    yomi: "だから、そのはなしはひみつにしておくことだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `また私が話を聞きに来る時までな。`,
    yomi: "またわたしがはなしをききにくるときまでな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music27"
  },
  {
    text: `･･････くくっ･･･`,
    yomi: "･･････くくっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `くくくっ。ははははは！`,
    yomi: "くくくっ。ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `当然だ。`,
    yomi: "とうぜんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `我は「片翼の魔王」を封印せし者！`,
    yomi: "われは「かたよくのまおう」をふういんせしもの！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `「仮想戦闘フィールド」の中で
我に勝てる者はいない！`,
    yomi: "「かそうせんとうふぃーるど」のなかでわれにかてるものはいない！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `「遊戯の導き手」よ、見たか？`,
    yomi: "「ゆうぎのみちびきて」よ、みたか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `我の活躍を！`,
    yomi: "われのかつやくを！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `「均衡の守護者」という称号にふさわしい！`,
    yomi: "「きんこうのしゅごしゃ」というしょうごうにふさわしい！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `む？何のことだ？`,
    yomi: "む？なんのことだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `･･･何？`,
    yomi: "･･･なに？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ふむ･･･`,
    yomi: "ふむ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `友はいつも我に新しい知識を
もたらしてくれるのだな。`,
    yomi: "ともはいつもわれにあたらしいちしきをもたらしてくれるのだな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ん？`,
    yomi: "ん？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music6"
  },
  {
    text: `ああ、血がたぎるようだ。`,
    yomi: "ああ、ちがたぎるようだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `友よ、お前も知っているだろう？`,
    yomi: "ともよ。おまえもしっているだろう？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `我はニケを死へといざなう存在。`,
    yomi: "われはにけをしへといざなうそんざい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `「即死の魔眼」を持っている限り、
他のニケとはなれ合えないのだ。`,
    yomi: "「そくしのまがん」をもっているかぎり、ほかのにけとはなれあえないのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `くっ･･･孤独な運命だな。`,
    yomi: "くっ･･･こどくなうんめいだな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `できることなら、エリシオン最強と名高く･･･`,
    yomi: "できることなら、えりしおん最強jとなだかく･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `煉獄を守るケルベロスにも例えられる･･･`,
    yomi: "れんごくをまもるけるべろすにもたとえられる･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `かのアブソルートともいつか、
戦場で肩を並べてみたかったものだ。`,
    yomi: "かのあぶそるーとともいつか、せんじょうでかたをならべてみたかったのものだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `特に「碧眼の小さな夜叉」･･･`,
    yomi: "とくに「へきがんのちいさなやしゃ」･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `奴を見るたびに、我の右眼に封印されし
「片翼の魔王」がたけり狂うのだ！`,
    yomi: "やつをみるたびに、われのみぎめにふういんされし「かたよくのまおう」がたけりくるうのだ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `ふ･･･友がそばにいてくれてよかった。`,
    yomi: "ふ･･･ともがそばにいてくれてよかった。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `新たな訓練･･･？`,
    yomi: "あらたなくんれん･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `ふふ。期待しているぞ。`,
    yomi: "ふふ。きたいしているぞ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music17"
  },
  {
    text: `ふう･･･`,
    yomi: "ふう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `ああ、すべて終わった。`,
    yomi: "ああ、すべておわった。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `くっ。「組織」の奴らめ･･･
他の世界まで危機に巻き込んでいるのか。`,
    yomi: "くっ。「そしき」のやつらめ･･･ほかのせかいまでききにまきこんでいるのか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music16"
  },
  {
    text: `迷っている時間はないな。`,
    yomi: "まよっているじかんはないな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music16"
  },
  {
    text: `クロエ！今すぐ我をその世界に送れ！`,
    yomi: "くろえ！いますぐわれをそのせかいにおくれ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music16"
  },
  {
    text: `もちろんだ。`,
    yomi: "もちろんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `さあ、クロエよ！`,
    yomi: "さあ、くろえよ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music3"
  },
  {
    text: `「碧眼の小さな夜叉」を仲間に加え、
魔物を討伐に向かう時点に我を転送せよ！`,
    yomi: "「へきがんのちいさなやしゃ」をなかまにくわえ、まものをとうばつにむかうじてんにわれをてんそうせよ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music3"
  },
  {
    text: `くくっ。他のニケたちと
肩を並べられて戦えるとは･･･`,
    yomi: "くくっ。ほかのにけたちとかたをならべられてたたかえるとは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music3"
  },
  {
    text: `異世界の冒険も、
それなりに楽しませてくれるではないか。`,
    yomi: "いせかいのぼうけんも、それなりにたのしませてくれるではないか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music3"
  },
  {
    text: `ときに、クロエよ。質問があるのだが･･･`,
    yomi: "ときに、くろえよ。しつもんがあるのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `なぜ今日は「転送陣」が
屋外に描かれているのだ？`,
    yomi: "なぜきょうは「てんそうじん」がおくがいにえがかれているのだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････ふふ。`,
    yomi: "･･････ふふ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `ふふふふふ、はははははは！`,
    yomi: "ふふふふふ、はははははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `そこまで考えが及ばなかったな。`,
    yomi: "そこまでかんがえがおよばなかったな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `さすがはクロエ、我の師だ。`,
    yomi: "さすがはくろえ、われのしだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `何だ？`,
    yomi: "なんだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `前に進む勇気のある者･･･`,
    yomi: "まえにすすむゆうきのあるもの･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `肝に銘じておこう。`,
    yomi: "きもにめいじておこう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music2"
  },
  {
    text: `む？イングリッドか？`,
    yomi: "む？いんぐりっどか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
{
    text: `クロエ、すまない。連絡だ。`,
    yomi: "くろえ、すまない。れんらくだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････我は冒険に出るところで忙しいのだが･･･`,
    yomi: "･･････われはぼうけんにでるところでいそがしいのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `うっ。分かった･･･行けばいいのだろう？`,
    yomi: "うっ。わかった･･･いけばいいのだろう？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `何？この近くではないか？`,
    yomi: "なに？このちかくではないか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `どこだ？`,
    yomi: "どこだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `くっ･･･分かった。すぐに向かう。`,
    yomi: "くっ･･･わかった。すぐにむかう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `クロエ、安全な場所に隠れていてくれ。`,
    yomi: "くろえ、あんあぜんなばしょにかくれていてくれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `冒険は一時中断だ。`,
    yomi: "ぼうけんはいちじちゅうだんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者ギロチンの成り下がり：B」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `･･････イングリッド。`,
    yomi: "･･････いんぐりっど。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我が迷ったせいだ･･･`,
    yomi: "われがまよったせいだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `クロエに重い傷を負わせ･･･人々を死なせた･･･`,
    yomi: "くろえにおもいきずをおわせ･･･ひとびとをしなせた･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `イレギュラーの言葉など
デタラメだと分かっていながら･･･`,
    yomi: "いれぎゅらーのことばなどでたらめだとわかっていながら･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `分かっていながら･･･我はためらってしまった･･･`,
    yomi: "わかっていながら･･･われはためらってしまった･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `その結果はどうだ？`,
    yomi: "その結果はどうだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `人々は血を流し･･･町はこの惨状だ･･･`,
    yomi: "ひとびとはちをながし･･･、まちはこのさんじょうだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `そして･･･`,
    yomi: "そして･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `たった一人の友を･･･
クロエを守ることができなかった･･･`,
    yomi: "たったひとりのともを･･･くろえをまもることができなかった･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `この手ですべてを台無しにしてしまった･･･`,
    yomi: "このてですべてをだいなしにしてしまった･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `すべてを･･･`,
    yomi: "すべてを･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `帰る･･･？`,
    yomi: "かえる･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `どこへだ？`,
    yomi: "どこへだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `エクスターナーの拠点にか？
それとも、昨日までのような日常にか？`,
    yomi: "えくすたーなーのきょてんにか？それとも、きのうまでのようなにちじょうにか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我はたった一つの任務さえまともに遂行できず･･･`,
    yomi: "われはたったひとつのにんむさえまともにすいこうできず･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我のそばに残ってくれたただ一人の友さえ
守れなかったのだ･･･`,
    yomi: "われのそばにのこってくれたただひとりのともさえまもれなかったのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `もう我には何も残されていない･･･`,
    yomi: "もうわれにはなにものこされていない･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `いったいどこへ帰るというのだ･･･？`,
    yomi: "いったいどこへかえるというのだ･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `言ったであろう･･･`,
    yomi: "いったであろう･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我に残されたものはもう何もない･･･`,
    yomi: "われにのこされたものはもうなにもない･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `どこへ、何のために進めというのだ･･･`,
    yomi: "どこへ、なんのためにすすめというのだ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `その･･･イングリッドよ、聞きたいことがある。`,
    yomi: "その･･･いんぐりっどよ、ききたいことがある。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `我の口調は、ヘンか？`,
    yomi: "われのくちょうは、へんか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `メイデンがいやがって、
逃げ出してしまったのだが･･･`,
    yomi: "めいでんがいやがって、にげだしてしまったのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `合格だ。`,
    yomi: "ごうかくだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `メイデンは単独で任務を完璧に遂行した。`,
    yomi: "めいでんはたんどくでにんむをかんぺきにすいこうした。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `ふふ、もう我がついていなくとも問題あるまい。`,
    yomi: "ふふ、もう我がついていなくとももんだいあるまい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `む、無論まだ我には及ばぬがな･･･`,
    yomi: "む、むろんまだわれにはおよばぬがな･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `はぁ･･･しかし落ち着かぬ･･･`,
    yomi: "はぁ･･･しかしおちつかぬ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `むぅ･･･`,
    yomi: "むぅ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `メイデンが一日中、部屋から出てこないのだ。`,
    yomi: "めいでんがいちにちちゅう、へやからでてこないのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `ゲームというものに没頭しているようだが･･･`,
    yomi: "げーむというものにぼっとうしているようだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `夜も寝ずにいて、平気なのか･･･？`,
    yomi: "よるもねずにいて、へいきなのか･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `くくっ。心配していたが、少し安心だ。`,
    yomi: "くくっ。しんぱいしていたが、すこしあんしんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `イングリッドよ、聞いているか？`,
    yomi: "いんぐりっどよ、きいているか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `イングリッド？`,
    yomi: "いんぐりっど？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `ついにメイデンに友ができたようだ。`,
    yomi: "ついにめいでんにともができたようだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `オンラインではなく、オフラインでな！`,
    yomi: "おんらいんではなく、おふらいんでな！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `最近は、その友人たちと会っていて
忙しいらしい。`,
    yomi: "さいきんは、そのゆうじんたちとあっていていそがしいらしい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `そ、そんなはずないだろう！`,
    yomi: "そ、そんなはずないだろう！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `孤高の運命を背負うのは、我一人で十分だ。`,
    yomi: "ここうのうんめいをせおうのは、われひとりでじゅうぶんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `メイデンまで･･･`,
    yomi: "めいでんまで･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `･･････痛みを背負う必要はない。`,
    yomi: "･･････いたみをせおうひつようはない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `そもそも、それを防ぐために
我がいるのだからな。`,
    yomi: "そもそも、それをふせぐためにわれがいるのだからな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `ふはははは！`,
    yomi: "ふはははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `･･･オホン、オホンッ･･･`,
    yomi: "･･･おほん、おほんっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music28"
  },
  {
    text: `イングリッド。今回の任務は
このギロチン・デ・メフィスト一人に
任せてはもらえぬか？`,
    yomi: "いんぐりっど。こんかいのにんむはこのぎろちん・で・めふぃすとひとりにまかせてはもらえぬか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music28"
  },
  {
    text: `わざわざ友まで動員する必要は
ないと思うのだが･･･`,
    yomi: "わざわざともまでどういんするひつようはないとおもうのだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music28"
  },
  {
    text: `今回は我一人で十分･･･`,
    yomi: "･こんかいはわれひとりでじゅうぶん･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music28"
  },
  {
    text: `任務失敗から、部屋に閉じこもったままだ。`,
    yomi: "にんむしっぱいから、へやにとじこもったままだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `これからどうなる？`,
    yomi: "これからどうなる？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `記憶消去･･･`,
    yomi: "きおくしょうきょ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `イングリッド、頼みがある。`,
    yomi: "いんぐりっど、たのみがある。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `今後の任務はすべて我一人で遂行する。`,
    yomi: "こんごのにんむはすべてわれひとりですいこうする。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `だから、メイデンの記憶消去だけは
避けてもらえまいか。`,
    yomi: "だから、めいでんのきおくしょうきょだけはさけてもらえまいか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `メイデンが万一の事態となったら、
責任は我が負う。`,
    yomi: "めいでんがまんいちのじたいとなったら、せきにんはわれがおう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `だから、記憶消去だけは･･･`,
    yomi: "だから、きおくしょうきょだけは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `それだけは、お前の権限で止めて欲しい。`,
    yomi: "それだけは、おまえののけんげんでとめてほしい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `当然だ。`,
    yomi: "とうぜんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `おけげさまでな。`,
    yomi: "おかげさまでな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `･･････礼を言う。`,
    yomi: "･･････れいをいう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `それから、イングリッドよ。
あくまで仮定の話だが･･･`,
    yomi: "それから、いんぐりっどよ。あくまでかていのはなしだが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `我にも抑えきれないイレギュラーが
現れたとしたら･･･`,
    yomi: "われにもおさえられないいれぎゅらーがあらわれたとしたら･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `その時、メイデンが復帰する可能性はあるか？`,
    yomi: "そのとき、めいでんがふっきするかのうせいはあるか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `では、我がイレギュラーになった場合は？`,
    yomi: "では、われがいれぎゅらーになったばあいは？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `む？`,
    yomi: "む？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `ロクでもないこと？`,
    yomi: "ろくでもないこと？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `龍に植えつけられた
冬の呪いを解く方法がないならば･･･`,
    yomi: "りゅうにうえつけられたふゆののろいをとくほうほうがないならば･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `友が同じ呪いで苦しまないよう、助けるだけだ。`,
    yomi: "ともがおなじのろいでくるしまないよう、たすけるだけだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `ロクでもないことでは、あるはずもないだろう。`,
    yomi: "ろくでもないことでは、あるはずもないだろう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：A」",
    costume: "normal",
    music:"music21"
  },
  {
    text: `お前はお前の任務を全うしてくれ。`,
    yomi: "おまえはおまえのにんむをまっとうしてくれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `「片翼の魔王」に飲み込まれた我を･･･`,
    yomi: "「かたよくのまおう」にのみこまれたわれを･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `イレギュラーとなった我を倒し、
アークのヒーローになれ。`,
    yomi: "いれぎゅらーとなったわれをたおし、あーくのひーろーになれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music21"
  },
  {
    text: `メ、メイデン･･･？`,
    yomi: "め、めいでん･･･？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music29"
  },
  {
    text: `大丈夫か！？`,
    yomi: "だいじょうぶか！？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music29"
  },
  {
    text: `いや、それよりも、なぜ･･･！`,
    yomi: "いや、それよりも、なぜ･･･！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music29"
  },
  {
    text: `なぜ我を倒さなかった！？`,
    yomi: "なぜわれをたおさなかった！？",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music29"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「勇者、そして真のヒーロー：B」",
    costume: "winter",
    music:"music29"
  },
  {
    text: `「ホワイトアイスドラゴン伝説」･･･`,
    yomi: "「ほわいとあいすどらごんでんせつ」･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `･･･久しぶりだな。`,
    yomi: "･･･ひさしぶりだな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `我が前列、友が後列、だったな。`,
    yomi: "われがぜんれつ、ともがこうれつ、だったな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `そのままでいい。`,
    yomi: "そのままでいい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `ああ、この物語を終わらせよう。`,
    yomi: "ああ、このものがたりをおわらせよう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music26"
  },
  {
    text: `メイデン、頼む。`,
    yomi: "めいでん、たのむ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music30"
  },
  {
    text: `これで終わりだ、ホワイトアイスドラゴン──！`,
    yomi: "これでおわりだ、ほわいとあいすどらごん──！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：A」",
    costume: "winter",
    music:"music30"
  },
  {
    text: `･･･やったか？`,
    yomi: "･･･やったか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `いや、メイデン。`,
    yomi: "いや、めいでん。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `ここは我に任せてくれ。`,
    yomi: "ここはわれにまかせてくれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `この物語の結末は、我の手で飾りたい。`,
    yomi: "このものがたりのけつまつは、われのてでかざりたい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `構わないだろうか？`,
    yomi: "かまわないだろうか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `･･････くくっ。`,
    yomi: "･･････くくっ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `くくくっ･･･ははははは！`,
    yomi: "くくくっ･･･ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `アイスローズよ、心配は無用だ。`,
    yomi: "あいすろーずよ、しんぱいはむようだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `このギロチン・デ・、メフィスト、
あの程度の魔物に敗れはしない。`,
    yomi: "このぎろちん・で・めふぃすと、あのていどのまものにやぶれはしない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `お前に最高のエンディングを
見せてやろう。`,
    yomi: "おまえにさいこうのえんでぃんぐをみせてやろう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `来るがいい、
ホワイトアイスドラゴン！`,
    yomi: "くるがいい、ほわいとあいすどらごん！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `壮大な叙事詩の幕を下ろす時だ！`,
    yomi: "そうだいなじょじしのまくをおろすときだ！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music31"
  },
  {
    text: `トドメだッ！！`,
    yomi: "とどめだっ！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music32"
  },
  {
    text: `メイデン！`,
    yomi: "めいでん！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music32"
  },
  {
    text: `終わったぞ、全て･･･`,
    yomi: "おわったぞ、すべて･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music32"
  },
  {
    text: `ふふ、ねぎらいには及ばん。`,
    yomi: "ふふ、ねぎらいにはおよばん。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `ホワイトアイスドラゴンなど、
もともと我の敵ではなかったのだ。`,
    yomi: "ほわいとあいすどらごんなど、もともとわれのてきではなかったのだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `そ、それは･･･`,
    yomi: "そ、それは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `何と言うか･･･`,
    yomi: "なんというか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `そうだ、その方が盛り上がるからな。`,
    yomi: "そうだ、そのほうがもりあがるからな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `くく･･･先が思いやられるな、友よ。`,
    yomi: "くく･･･さきがおもいやられるな、ともよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `だが、それでいいのだろう。`,
    yomi: "だが、それでいいのだろう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `ああ見えても、また前に進む勇気を
手に入れられたようだからな。`,
    yomi: "ああみえても、またまえにすすむゆうきをてにいれられたようだからな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `ああ、よかった。`,
    yomi: "ああ、よかった。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `ああ、すぐに追いつく。`,
    yomi: "ああ、すぐにおいつく。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music33"
  },
  {
    text: `さて･･･`,
    yomi: "さて･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `残っているのは我々だけか？`,
    yomi: "のこっているのはわれわれだけか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `一つ聞かせてくれ。`,
    yomi: "ひとつきかせてくれ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `これで、いい物語と言えるだろうか？`,
    yomi: "これで、いいものがたりといえるだろうか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `クロエ･･･いや、インクよ。`,
    yomi: "くろえ･･･いや、いんくよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `このギロチン・デ・メフィストに
分からぬはずがないだろう。`,
    yomi: "このぎろちん・で・めふぃすとにわからぬはずがないだろう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `ここは現実ではない。`,
    yomi: "ここはげんじつではない。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `シミュレーションの世界だ。`,
    yomi: "しみゅれーしょんのせかいだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `･･････今度こそ、終わらせられなかった物語を
終わらせたいと思ったからだ。`,
    yomi: "･･････こんどこそ、おわらせられなかったものがたりをおわらせたいとおもったからだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `ふふ･･･所詮は我の独りよがりと思っていたが･･･`,
    yomi: "ふふ･･･しょせんはわれのひとりよがりとおもっていたが･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `こんな最高の結末を迎えられるとはな。`,
    yomi: "こんなさいこうのけつまつをむかえられるとはな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `インク、お前にも感謝を伝えておきたかった。`,
    yomi: "いんく、おまえにもかんしゃをつたえておきたかった。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `この物語が終わりを迎えられるよう、
力を貸してくれたのだから。`,
    yomi: "このものがたりがおわりをむかえられるよう、ちからをかしてくれたのだから。",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `なんだ？`,
    yomi: "なんだ？",
    story: "ev1",
    episode: "イベントストーリー 第2部「ICE DRAGON SAGA：B」",
    costume: "winter",
    music:"music24"
  },
  {
    text: `ふぅ･･･`,
    yomi: "ふぅ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `はあ･･･`,
    yomi: "はあ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `わ、我にその資格があるのだろうか･･･`,
    yomi: "わ、われにそのしかくがあるのだろうか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `長い間連絡もせず、
いきなり会いに来たというのに･･･`,
    yomi: "ながいあいだれんらくもせず、いきなりあいにきたというのに･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `･･････クロエ、怖くないのか？`,
    yomi: "･･････くろえ、こわくないのか？",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `我といれば、またあんなことに
なるかもしれないのだぞ。`,
    yomi: "われといれば、またあんなことになるかもしれないのだぞ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `！！`,
    yomi: "！！",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music24"
  },
  {
    text: `オホンッ･･･いいだろう。`,
    yomi: "おほんっ･･･いいだろう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `ク、クロエよ･･･久しぶりだな。`,
    yomi: "く、くろえよ･･･ひさしぶりだな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music7"
  },
  {
    text: `そういう友は･･･`,
    yomi: "そういう友は･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `･･･ずいぶん変わったな。`,
    yomi: "･･･ずいぶんかわったな。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `･･････そんなに時間が経っていたのか･･･`,
    yomi: "･･････そんなにじかんがたっていたのか･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `大冒険か。`,
    yomi: "だいぼうけんか。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `･･････くくっ。`,
    yomi: "･･････くくっ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `くくくっ。ははははは！`,
    yomi: "くくくっ。ははははは！",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `もちろんだ、友よ。`,
    yomi: "もちろんだ、ともよ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `最高の結末を迎えて戻ってきた。`,
    yomi: "さいこうのけつまつをむかえてもどってきた。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `当然だ。`,
    yomi: "とうぜんだ。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `友こそ、あの物語の終わりを･･･`,
    yomi: "ともこそ、あのものがたりのおわりを･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `「ホワイトアイスドラゴン伝説」の
結末を聞くにふさわしい。`,
    yomi: "「ほわいとあいすどらごんでんせつ」のけつまつをきくにふさわしい。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `ふっ。それでは･･･`,
    yomi: "ふっ。それでは･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `我、ギロチン・デ・メフィストの
偉大なる冒険譚を語るとしよう。`,
    yomi: "われ、ぎろちん・で・めふぃすとのいだいなるぼうけんたんをかたるとしよう。",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `オホンッ･･･`,
    yomi: "おほんっ･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  {
    text: `遠い昔、はるかかなたの銀河系で･･･`,
    yomi: "とおいむかし、はるかかなたのぎんがけいで･･･",
    story: "ev1",
    episode: "イベントストーリー 第2部「大冒険の終わり」",
    costume: "normal",
    music:"music13"
  },
  //ICE DRAGON SAGA ミニゲームストーリー
  {
    text: `オホン、オホンッ･･･`,
    yomi: "おほん、おほんっ･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `「アイスローズ」、そして友よ。`,
    yomi: "「あいすろーず」、そしてともよ。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `提案があるのだが。`,
    yomi: "ていあんがあるのだが。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `興味がないだと･･･？`,
    yomi: "きょうみがないだと･･･？",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `分かった･･･仕方がない･･･`,
    yomi: "わかった･･･しかたがない･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `くくっ。実はだな･･･`,
    yomi: "くくっ。じつはだな･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music13"
  },
  {
    text: `領域展開！`,
    yomi: "りょういきてんかい！",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `今から我々勇者一行は魔王城に攻めに入る。`,
    yomi: "いまからわれわれゆうしゃいっこうはまおうじょうにせめにはいる。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `本物の魔王城ではない。
我が仮想化したダンジョンだ。
心配するな。`,
    yomi: "ほんもののまおうじょうではない。われがかそうかしただんじょんだ。しんぱいするな。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `ケガをすることはないだろう。`,
    yomi: "けがをすることはないだろう。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `･･･たぶんな。`,
    yomi: "･･･たぶんな。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `さすが「アイスローズ」、話が早いな。`,
    yomi: "さすが「あいすろーず」、はなしがはやいな。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `その通りだ！`,
    yomi: "そのとおりだ！",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `数多の罠と魔物を突破し、
ホワイトアイスドラゴンに挑めるよう、`,
    yomi: "あまたのわなとまものをとっぱし、ほわいとあいすどらごんにいどめるよう、",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `我が作ったダンジョンで訓練をする！`,
    yomi: "われがつくっただんじょんでくんれんをする！",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `これが我の提案だ。どうだ？`,
    yomi: "これがわれのていあんだ。どうだ？",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `よし。では始めるとするか。`,
    yomi: "よし。でははじめるとするか。",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `名付けて、「Dragon Dungeon Run」を！`,
    yomi: "なづけて、「Dragon Dungeon Run」を！",
    story: "mg1",
    episode: "ミニゲームストーリー「Dragon Dungeon Run!」",
    costume: "winter",
    music:"music34"
  },
  {
    text: `･･･くっ。`,
    yomi: "･･･くっ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `くくっ。くはははは！`,
    yomi: "くくっ。くはははは！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `素晴らしい！
誰も欠けることなく、全員ここまで来れた！`,
    yomi: "すばらしい！だれもかけることなく、ぜんいんここまでこれた！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `うっ･･･！`,
    yomi: "うっ･･･！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `こ、これが飾りに見えるだと！？`,
    yomi: "こ、これがかざりにみえるだと！？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `我は能力を自ら制御しているのだ！`,
    yomi: "われはのうりょくをみずからせいぎょしているのだ！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `翼を使い、軽々とクリアしてしまえば
訓練の意味がないからな！`,
    yomi: "つばさをつかい、かるがるをくりあしてしまえばくんれんのいみがないからな！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `メイデン？`,
    yomi: "めいでん？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `少し休んで･･･`,
    yomi: "すこしやすんで･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･･我だ。`,
    yomi: "･･･われだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `我が蒔いた種は、我が刈らねば･･･`,
    yomi: "われがまいたたねは、われがからねば･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ふむ。`,
    yomi: "ふむ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ところでメイデン、何か忘れていないか？`,
    yomi: "ところでめいでん、なにかわすれていないか？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `い、今すぐ出発しよう！行こう、友よ！`,
    yomi: "い、いますぐしゅっぱつしよう！いこう、ともよ！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記01」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `うむ？「碧眼の小さな夜叉」が
飲んでいるものは何だ？`,
    yomi: "うむ？「へきがんのちいさなやしゃ」がのんでいるものはなんだ？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記02」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ありがたく頂戴しよう。`,
    yomi: "ありがたくちょうだいしよう。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記02」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `ふむ？`,
    yomi: "ふむ？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記02」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記02」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `くくっ。爽快な気分だ。`,
    yomi: "くくっ。そうかいなきぶんだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記02」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `我にも〜飲ませろぉ！`,
    yomi: "われにも〜のませろぉ！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記02」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `みんな真剣に聞くのだ。`,
    yomi: "みんなしんけんにきくのだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `我々のパーティの存亡がかかった問題だ。`,
    yomi: "われわれのぱーてぃのそんぼうがかかったもんだいだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `くっ。それはだな･･･`,
    yomi: "くっ。それはだな･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `我々のパーティには、名前がない！`,
    yomi: "われわれのぱーてぃには、なまえがない！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `くくっ。そういうわけで、早速提案がある。`,
    yomi: "くくっ。そういうわけで、さっそくていあんがある。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `孤独な冬の虐･･･`,
    yomi: "こどくなふゆのぎゃく･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `却下だ！却下！`,
    yomi: "きゃっかだ！きゃっか！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `何が光合成だ！`,
    yomi: "なにがこうごうせいだ！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `「孤独な冬の虐殺者」の方が、
ずっとカッコいい！`,
    yomi: "「こどくなふゆのぎゃくさつしゃ」のほうが、ずっとかっこいい！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `･･･くっ。`,
    yomi: "･･･くっ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `くくっ。くはははは！`,
    yomi: "くくっ。くはははは！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `いいだろう。かかってこい！「アイスローズ」！`,
    yomi: "いいだろう。かかってこい！「あいすろーず」！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記03」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `みんな真剣に聞くのだ。`,
    yomi: "みんなしんけんにきくのだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `我々「孤独な冬の虐殺者」パーティの
存亡がかかった問題だ。`,
    yomi: "われわれ「こどくなふゆのぎゃくさつしゃ」ぱーてぃのそんぼうがかかったもんだいだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music16"
  },
  {
    text: `･･･くっ。それはだな･･･`,
    yomi: "･･･くっ。それはだな･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `報酬の分配方法を決めていなかった！`,
    yomi: "ほうしゅうのぶんぱいほうほうをきめていなかった！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ふむ。どうやって分配すべきだろうか？`,
    yomi: "ふむ。どうやってぶんぱいすべきだろうか？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `メ、メイデン。少し休憩してから･･･`,
    yomi: "め、めいでん。すこしきゅうけいしてから･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `い、今すぐ出発しよう！行こう、友よ！`,
    yomi: "い、いますぐしゅっぱつしよう！いこう、ともよ！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記04」",
    costume: "winter",
    music:"music14"
  },
  {
    text: `ふむ。仲が良くて何よりだ。だが･･･`,
    yomi: "ふむ。なかがよくてなによりだ。だが･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記06」",
    costume: "winter",
    music:"music35"
  },
  {
    text: `「アイスローズ」、
どうして我を助けなかったのだ･･･？`,
    yomi: "「あいすろーず」、どうしてわれをたすけなかったのだ･･･？",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記06」",
    costume: "winter",
    music:"music35"
  },
  {
    text: `こ、根性でか･･･`,
    yomi: "こ、こんじょうでか･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記06」",
    costume: "winter",
    music:"music35"
  },
  {
    text: `くっ、孤独な運命だな･･･`,
    yomi: "くっ、こどくなうんめいだな･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記06」",
    costume: "winter",
    music:"music35"
  },
  {
    text: `エル・テルマ・ソルース･･･`,
    yomi: "える・てるま・そるーす･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記06」",
    costume: "winter",
    music:"music35"
  },
  {
    text: `くくっ。駄目な訳がない。`,
    yomi: "くくっ。だめなわけがない。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記08」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `冒険には野営がつきものだ。`,
    yomi: "ぼうけんにはやえいがつきものだ。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記08」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `早速我が火を起こそう！`,
    yomi: "さっそくわれがひをおこそう！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記08」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記08」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `「碧眼の小さな夜叉」･･･`,
    yomi: "「へきがんのちいさなやしゃ」･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記08」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `火を起こしてくれ！`,
    yomi: "ひをおこしてくれ！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記08」",
    costume: "winter",
    music:"music6"
  },
  {
    text: `オホン、オホンッ･･･`,
    yomi: "おほん、おほんっ･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music36"
  },
  {
    text: `その･･･再びダンジョンを探索する時が来た･･･`,
    yomi: "その･･･ふたたびだんじょんをたんさくするときがきた･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music36"
  },
  {
    text: `杖と会話しているのを盗み見していたとかでは
絶対にないから心配するな。`,
    yomi: "つえとかいわしているのをぬすみみしていたとかではぜったいにないからしんぱいするな。",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music36"
  },
  {
    text: `すまない、ミニーだったか･･･`,
    yomi: "すまない、みにーだったか･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music36"
  },
  {
    text: `も、もちろん知って･･･`,
    yomi: "も、もちろんしって･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music36"
  },
  {
    text: `･･･ええと、つまり･･･`,
    yomi: "･･･ええと、つまり･･･",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music7"
  },
  {
    text: `ベ、ベスティー。これは盗み見とかではなく･･･！`,
    yomi: "べ、べすてぃー。これはぬすみみとかではなく･･･！",
    story: "mg1",
    episode: "ミニゲームストーリー「とあるアークメイジの手記09」",
    costume: "winter",
    music:"music37"
  },
  // blablaギロチン1
  {
    text: `問おう。
友が我の指揮官か？`,
    yomi: "とおう。ともがわれのしきかんか？",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `右目に闇の魔王を封印せしこの躰
ギロチン・デ・メフィスト
友の召喚に応じ降臨した。`,
    yomi: "みぎめにやみのまおうをふういんせしこのからだ",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この瞬間から我の銃は友と共にあり
友の運命〜destiy〜も我と共にあらん。`,
    yomi: "このしゅんかんからわれのじゅうはともとともにありとものうんめい",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `destiy（誤）→destiny（正）
入力ミスだ。`,
    yomi: "destiy（ご）→destiny",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くっ･･･
今回の指揮官は思ったより鋭いな。`,
    yomi: "くっ･･･こんかいのしきかんはおもったよりするどいな。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `だが
入力ミスは3秒以内に直せば
文字に込められた力はそのまま残る──
そのことを知らなかったようだな。`,
    yomi: "だが、にゅうりょくみすはさんびょういないになおせばもじにこめられたちからはそのままのこる",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ･･･
愚かな凡人よ。`,
    yomi: "くくっ･･･おろかなぼんじんよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友は何も知らない。`,
    yomi: "ともはなにもしらない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `入力ミスは３秒以内に直せば
文字に込められた力はそのまま残る──
そのことを知らなかったようだな。`,
    yomi: "にゅうりょくみすはさんびょういないになおせばもじにこめられたちからはそのままのこる",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ･･･`,
    yomi: "くくっ･･･",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `とにかく、
今からはこの
ギロチン・デ・メフィストと
闇の中で暗躍する存在の
我が右目に封印された片翼の魔王が友の味方だ。`,
    yomi: "とにかく、いまからはこのぎろちん・で・めふぃすととやみのなかであんやくする",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友はいかなる戦場でも不敗。`,
    yomi: "ともはいかなるせんじょうでもふはい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `永遠の勝利を約束しよう。`,
    yomi: "えいえんのしょうりをやくそくしよう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ、
くはははは！`,
    yomi: "くっ、くはははは！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  // blablaギロチン2
  {
    text: `深淵に潜む反逆の使徒よ。`,
    yomi: "しんんにひそむはんぎゃくのしとよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我、ギロチン・デ・メフィストの
血に濡れた「絶叫」に答えよ。`,
    yomi: "われ、ぎろちん・で・めふぃすとのちにぬれた「ぜっきょう」にこたえよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `おっと
まだ「人間」だった頃の習慣が
残っているようだな。`,
    yomi: "おっとまだ「にんげん」だったころのしゅうかんがのこっているようだな。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `まあ、それも仕方ない。`,
    yomi: "まあ、それもしかたない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友はずっと「組織」に
縛られていたのだから。`,
    yomi: "ともはずっと「そしき」にしばられていたのだから。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友とこうして話をするのも
「喚きの宴」を聞いたあの日以降
初めてだ`,
    yomi: "ともとこうしてはなしをするのも「なげきのうたげ」をきいたあのひいこうはじめてだ",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `あの時の、いけにえたちの喚き声が
耳から離れぬ！`,
    yomi: "あのときの、いけにえたちのわめきごえがみみからはなれぬ！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `クククク･･･
フハハハハッ！`,
    yomi: "くくくく･･･ふははははっ！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ふぅ･･･
まだ「組織」の霧に
包まれているようだな。`,
    yomi: "ふぅ･･･まだ「そしき」のきりにつつまれているようだな。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `どうやら
浄化が必要なようだ。`,
    yomi: "どうやらじょうかがひつようなようだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そう、我が自ら降臨した理由は
「世界の均衡のために
存在する者」であるグリモアと
血の盟約を結んでもらいたいからだ。`,
    yomi: "そう、われがみずからこうりんしたりゆうじゃ「せかいのきんこうのためにそんざいするもの」であるぐりもあ",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `しかし･･･
そのためには、代償が必要だ。`,
    yomi: "しかし･･･そのためには、だいしょうがひつようだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ･･･！やはり･･･
すでに知っていたのか。`,
    yomi: "くくっ･･･！やはり･･･すでにしっていたのか。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `虚無に咲く花が一番美しいもの。`,
    yomi: "きょむにさくはながいちばんうつくしいもの。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友のレーゾンデートルを
明かす必要もある。`,
    yomi: "とものれーぞんでーとるをあかすひつようもある。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `必然の準備が回る中
一世一代の出会いが待っている。`,
    yomi: "ひつぜんのじゅんびがまわるなかいっせいいちだいのであいがまっている。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `えん世のこの時代に、
この瞬間だけは
喜びを感じる。`,
    yomi: "えんせいのこのじだいに、このしゅんかんだけはよろこびをかんじる。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `盟約を破棄した者には
消えることのない
紅炎の苦痛が存在するのみ。`,
    yomi: "めいやくをはきしたものにはきえることのないこうえんのくつうがそんざいするのみ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `クククッ･･･
別れの挨拶は
次の出会いのために取っておこう。`,
    yomi: "くくくっ･･･わかれのあいさつはつぎのであいのためにとっておこう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  // blablaギロチン3
  {
    text: `友よ。
今日は伝えたいことがある。`,
    yomi: "ともよ。きょうはつたえたいことがある。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我はこの右目に
片翼の魔王を封印している。`,
    yomi: "われはこのみぎめにかたよくのまおうをふういんしている。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `封印が解けぬよう
全身全霊をかけて抑え込んでいるが
力を失っても、魔王は魔王･･･！`,
    yomi: "ふういんがとけぬようぜんしんぜんれいをかけておさえこんでいるがちからをうしなっても、まおうはまおう･･･！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `奴は常に我の隙を狙っている。`,
    yomi: "やつはつねにわれのすきをねらっている。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `万が一･･･
我が倒れ、片翼の魔王が解放されたら
友は「決断」を下さねばならない。`,
    yomi: "まんがいち･･･われがたおれ、かたよくのまおうがかいほうされたらともは「けつだん」をくださねばならない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `混沌に飲まれ、濁流に身を任せるか
それとも･･･
ギロチン・デ・メフィストに
希望を託すか。`,
    yomi: "こんとんにのまれ、だくりゅうにみをまかせるかそれとも･･･",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `クククッ！
さすがは我が友。`,
    yomi: "くくくっ！さすがはわがとも。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友の気持ちはよく分かった。`,
    yomi: "とものきもちはよくわかった。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ギロチン・デ・メフィスト、
友のその期待に応え
最後まで抗おう。`,
    yomi: "ぎろちん・で・めふぃすと、とものそのきたいにこたえさいごまであらがおう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `もしそのようなことが起きるなら
その時は「アドラメレク」を召喚する。`,
    yomi: "もしそのようなことがおきるならそのときは「あどらめれく」をしょうかんする。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `フハハ！`,
    yomi: "ふはは！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「アドラメレク」を
知っているとは
友はやはり凡人ではないな。`,
    yomi: "「あどらめれく」をしっているとはともはやはりぼんじんでじゃないな。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `アドラメレクの召喚には
強力ないけにえが必要だ。`,
    yomi: "あどらめれくのしょうかんにはきょうりょくないけにえがひつようだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `フッ･･･
その時は、我の「すべて」を
かける必要があるかもしれない。`,
    yomi: "ふっ･･･そのとき、われの「すべて」をかけるひつようがあるかもしれない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の「すべて」と言ったであろう。`,
    yomi: "我の「すべて」といったであろう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我が持つ魔力では足りない時は
この身をエサとして
投じるしかない。`,
    yomi: "われがもつまりょくではたりないときはこのみをえさとしてとうじるしかない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ。
その時は覚悟が必要だろう。`,
    yomi: "ともよ。そのときはかくごがひつようだろう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `！！
ククッ･･･
フハハハハハ！`,
    yomi: "！！くくっ･･･ふははははは！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友の無謀さに笑いが込み上げてきたが
その熱さもいいものだ。`,
    yomi: "とものむぼうさにわらいがこみあげてきたがそのあつさもいいものだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この汚らわしい暗黒の魔界も
捨てたものではないな。`,
    yomi: "くくくっ･･･わかれのあいさつはつぎのであいのためにとっておこう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  //blablaギロチン4
  {
    text: `くぅっ。
友よ。`,
    yomi: "くぅっ。ともよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今どこにいるのか。
何者かが我に呪いをかけたようだ。`,
    yomi: "いまどこにいるのか。なにものかがわれにのろいをかけたようだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そうだ。これは呪いだ。`,
    yomi: "そうだ。これはのろいだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `どんどん体から力が抜けていき
突然みぞおちの下の方が尋常ではない。`,
    yomi: "どんどんからだからちからがぬけていきとつぜんみぞおちのしたのほうがじんじょうではない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `怪しげな音もする。`,
    yomi: "あやしげなおともする。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の魔力を少しずつ抜こうとする呪いの
ようだ。`,
    yomi: "われのまりょくをすこしずつぬこうとするのろいのようだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `助けてくれ。`,
    yomi: "たすけてくれ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我は姿を現してはいけない存在。`,
    yomi: "われはすがたをあらわしてはいけないそんざい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `皆の目を避け影の中に身を隠す存在。`,
    yomi: "みなのめをさけかげのなかにみをかくすそんざい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `？？`,
    yomi: "？？",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `あ。`,
    yomi: "あ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我に呪いをかけた奴らがこの会話に気付
かぬよう
表現に細心の注意を払っているのか。 `,
    yomi: "われにのろいをかけたやつらがこのかいわにきづかぬようひょうげんにさいしんのちゅういをはらっているのか。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ、さすがは我の友。`,
    yomi: "くくっ、さすがはわれのとも。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `完璧だ。`,
    yomi: "かんぺきだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `呪われた我の体は
今動くことが不可能だ。。`,
    yomi: "のろわれたわれのからだはいまうごくことがふかのうだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `住所を教えるので適当にこちらに送って
もらいたい。`,
    yomi: "じゅうしょをおしえるのでてきとうにこちらにおくってもらいたい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `参考までに塩辛いものは好きではない。`,
    yomi: "さんこうまでにしおからいものはすきではない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `よろしく頼んだ。`,
    yomi: "よろしくたのんだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  //blablaギロチン5
  {
    text: `クッ･･･友よ。
この声が届いているか？`,
    yomi: "くっ･･･ともよ。このこえがとどいているか？",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `さすが、我と魂の盟約を結んだ
唯一の友だ。`,
    yomi: "さすが、われとたましいのめいやくをむすんだゆいいつのともだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `しかし、それももはや刹那に過ぎない。`,
    yomi: "しかし、それももはやせつなにすぎない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `情けのないことではあるが･･･
このギロチン・デ・メフィストに
「蝕」が近づいている。`,
    yomi: "なさけのないことではあるが･･･このぎろちん・で・めふぃすとに「",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `さすがは我が友。`,
    yomi: "さすがはわがとも。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `月が血に染まり始めたら
暴れる魔王の力を抑えるため
我の魔力も急激に
消耗することになるだろう。`,
    yomi: "つきがちにそまりはじめたらあばれるまおうのちからをおさえるためわれのまりょくもきゅうげきにしょうもうすることになるだろう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そうなれば、次第に体の力が抜け落ち
みぞおちの下部が揺れ動き始め･･･
尋常ではない音がするはずだ。`,
    yomi: "そうなれば、しだいにからだのちからがぬけおちみぞおちのかぶがゆれうごきはじめ･･･",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `これは他とは比べものにならない
強力な呪いの悲しき運命。`,
    yomi: "これはほかとはくらべものにならないきょうりょくなのろいのかなしきうんめい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の話を聞いているのか？`,
    yomi: "われのはなしをきいているのか？",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この刻に我が何かを口にするのは
片翼の魔王に
いけにえを捧げるのと同じことだ。`,
    yomi: "このこくにわれがなにかをくちにするのはかたよくのまおうにいけにえをささげるのとおなじことだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `だからこそ我は
この禁欲的な人生に耐えている。`,
    yomi: "だからこそわれはこのきんよくてきなじんせいにたえている。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この世界のために
己を犠牲にして。`,
    yomi: "このせかいのためにおのれをぎせいにして。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `スイーツ！
あの甘美な菓子をエサにして
我を魔王の操り人形にするつもりか！`,
    yomi: "すいーつ！あのかんびなかしをえさにしてわれをまおうのあやつりにんぎょうにするつもりか！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `誘惑しないでくれ、友よ。`,
    yomi: "ゆうわくしないでくれ、ともよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `肉！`,
    yomi: "にく！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ああ･･･聞こえる。`,
    yomi: "ああ･･･きこえる。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `いけにえたちの喚き声が･･･
じりじりと迫りくるあの絶滅のバルス！`,
    yomi: "いけにえたちのわめきごえが･･･じりじりとせまりくるあのぜつめつのばるす！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `仕方がない。
これもまた、我の使命！`,
    yomi: "しかたがない。これもまた、われのしめい！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ、我に捧げよ。
長きにわたるカタルシスを！`,
    yomi: "友よ、われにささげよ。ながきにわたるかたるしすを！",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  //blablaギロチン6
  {
    text: `友よ。
緊急事態だ。`,
    yomi: "ともよ。きんきゅうじたいだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「黙示録」がなくなった。`,
    yomi: "「もくしろく」がなくなった。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `おそらく組織がこっそり我の部屋に
潜入し盗んだようだ。`,
    yomi: "おそらくそしきあがこっそりわれのへやにせんにゅうしぬすんだようだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `その内容が漏れてしまったら
友も我もこの前哨基地も
すべて終わってしまう。`,
    yomi: "そのないようがもれてしまったらとももわれもぜんしょうきちもすべておわってしまう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `地上奪還の夢を果たす前に
この世には「終末」が到来するだろう。`,
    yomi: "ちじょうだっかんのゆめをはたすまえにこのよには「しゅうまつ」がとうらいするだろう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `いい質問だ。`,
    yomi: "いいしつもんだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `それはこの世の終末と
神聖な救援者の到来を予言した
偉大なる予言の書─･･･`,
    yomi: "それはこのよのしゅうまつとしんせいなきゅうえんしゃのとうらいをよげんしたいだいなるよげんのしょ─･･･",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そこにはこのギロチン・デ・メフィスト
の出生の秘密と
このギロチン・デ・メフィストが片翼の
魔王()one-winged dark lordを
（one-winged dark lord）を
封印することになった過程が詳しく
記されている。`,
    yomi: "そこにはこのぎろちん・で・めふぃすとのしゅっせいのひみつとこのぎろちん・で・めふぃすとがかたよくのまおう",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そしてこの世の滅亡の日が到来する時`,
    yomi: "そしてこのよのめつぼうのひがとうらいするとき",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `このギロチン・デ・メフィストが
どう活躍するかについても
記されている。`,
    yomi: "このぎろちん・で・めふぃすとがどうかつやくするかについてもしるされている。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `？？？？
何を言っているのか理解に苦しむ。`,
    yomi: "？？？？なにをいっているのかりかいにくるしむ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「黙示録」と「設定集」は
根本的に違う。`,
    yomi: "「もくしろく」と「せっていしゅう」はこんぽんてきにちがう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `それらを比較するなど言語同断だ。`,
    yomi: "それらをひかくするなどげんごどうだんだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `容易いことだ。`,
    yomi: "たやすいことだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今すぐ放送で宿所のすべてのニケたちに
伝えよ。`,
    yomi: "いますぐほうそうでしゅくしょのすべてのにけたちにつたえよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ギロチンの部屋から「黙示録」を盗んで
いった者は
即刻それを持ち主に返すようにと。`,
    yomi: "ぎろちんのへやから「もくしろく」をぬすんでいったものはそっこくそれをもちぬしにかえすようにと。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `訂正する。
正しくは組織の手下だ。`,
    yomi: "ていせいする。ただしくはそしきのてしただ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そして「奴ら」はこの基地の
ニケたちの間に
用意周到に紛れている。`,
    yomi: "そして「やつら」はこのきちのにけたちのあいだによういしゅうとうにまぎれている。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `それはそうと早く放送をした方が
よさそうだ。`,
    yomi: "それはそうとはやくほうそうをしたほうがよさそうだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「終末」を控えた今
無駄口を叩いている暇はない。`,
    yomi: "「しゅうまつ」をひかえたいまむだぐちをたたいているひまはない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `よろしい。`,
    yomi: "よろしい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `では早速放送を頼む。`,
    yomi: "ではさっそくほうそうをたのむ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我は宿所で待機しておる。`,
    yomi: "われはしゅくしょでたいきしておる。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「黙示録」が入手され次第、ただちに我
の部屋へ
持ってくるように。`,
    yomi: "「もくしろく」がにゅうしゅされしだい、ただちにわれのへやへもってくるように。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `それと忘れてはいけないことがある。`,
    yomi: "それとわすれてはいけないことがある。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `何があっても「黙示録」の内容を見てはいけない。`,
    yomi: "なにがあっても「もくしろく」のないようをみてはいけない。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `黙示録の危険度はなんと10段階中の9段
階にもなるのだ。`,
    yomi: "もくしろくのきけんどはなんと10だんかいちゅうの9だんかいにもなるのだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `？
ちょっと待った。`,
    yomi: "？ちょっとまった。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ、どういうことだ。`,
    yomi: "ともよ。どういうことだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `なぜ「黙示録」を我の自作小説と
表現したのだ？`,
    yomi: "なぜ「もくしろく」をわれのじさくしょうせつとひょうげんしたのだ？",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `？？？
なぜそのような愚かな真似を。`,
    yomi: "？？？なぜそのようなおろかなまねを。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `おそろしや〜`,
    yomi: "おそろしや〜",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「黙示録」を小説などといった
下等な対象と表現したために
それを手にしたニケたちが
好奇心に駆られ
そこに記された禁断の内容を
目にしてしまうかもしれない！`,
    yomi: "「もくしろく」をしょうせつなどといったかとうなたいしょうとひょうげんしたために",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この事態をどうしてくれる。`,
    yomi: "このじたいをどうしてくれる。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ふう･･･
愚かな必滅者よ。`,
    yomi: "ふう･･･おろかなひつめつしゃよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `何？`,
    yomi: "なに？",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `･･････`,
    yomi: "･･････",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `おっと。`,
    yomi: "おっと。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `どうしたものか。`,
    yomi: "どうしたものか。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `取り返しのつかないことに
なってしまった。`,
    yomi: "とりかえしのつかないことになってしまった。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `こうなった以上、方法は１つ。`,
    yomi: "こうなったいじょう、ほうほうはひとつ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `時間軸を巻き戻し、すべてを正しい位置
に戻すのみ。`,
    yomi: "じかんじくをまきもどし、すべてをただしいいちにもどすのみ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `では友よ。`,
    yomi: "ではともよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `いや、とある時点で「友だった」者よ。`,
    yomi: "いや、とあるじてんで「ともだった」ものよ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今度会う時は正しい時間軸であることを願う。`,
    yomi: "こんどあうときはただしいじかんじくであることをねがう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `では失礼。`,
    yomi: "ではしつれい。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `エル
テレマ
ソルース。`,
    yomi: "えるてるまそるーす。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  // blablaエクスターナー1
  {
    text: `友よ。
どうやら「審判」の時が来たようだ。`,
    yomi: "ともよ。どうやら「しんぱん」のときがきたようだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ！
片翼の魔王は過ちなど犯さない。`,
    yomi: "くくっ！かたよくのまおうはあやまちなどおかさない。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今晩、「審判」を受ける者は
血のように「赤いバラ」
メイデン！お前だ。`,
    yomi: "こんばん、「しんぱん」をうけるものはちのように「あかいばら」めいでん！おまえだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `思い出せないのなら
我が教えてやろう。`,
    yomi: "おもいだせないのならわれがおしえてやろう。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `あの日は特に霧が深く
一筋の月の光さえ見えない
すべてが息絶えたかのように
静寂にとらわれたバラの絶叫を。`,
    yomi: "あおのひはとくにきりがこくひとすじのつきのひかりさえみえないすべてがいきたえたかのように",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そうだ、友よ。`,
    yomi: "そうだ、ともよ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `最初は聞き間違いかと思った。`,
    yomi: "さいしょはききまちがいかとおもった。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `いや、あまりのおぞましさに
目を開けようとしていたのかもしれない。`,
    yomi: "いや、あまりのおぞましさにめをあけようとしていたのかもしれない。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の右目に封印されし片翼の魔王も
沈黙していたのだから。`,
    yomi: "われのみぎめにふういんされしかたよくのまおうもちんもくしていたのだから。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `逃げるのか。
「堕落した赤いバラ」よ！`,
    yomi: "にげるのか。「だらくしたあかいばら」よ！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `フフッ。
いっそ夢ならよかったのだが。`,
    yomi: "ふふっ。いっそゆめならよかったのだが。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我はこの目で見て、
この耳で聞いたのだ。`,
    yomi: "われはこのめでみて、このみみできいたのだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `深い闇の中で
布団を頭からかぶり
ただ声に頼って
異世界を浮遊している
１輪の「堕落したバラ」を。`,
    yomi: "ふかいやみのなかでふとんをあたまからかぶりただこえにたよっていせかいをふゆうしている",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そうだ。`,
    yomi: "そうだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `その世界に没頭するあまり
自分の声が
片翼の魔王を怒らせているという
自覚もなかったようだ。`,
    yomi: "そのせかいにぼっとうすらまりじぶんのこえがかたよくのまおうをおこらせているというじかくもなかったようだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ。
もちろんだ。そこに抜かりない。`,
    yomi: "ともよ。もちろんだ。そこにぬかりない。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今すぐ我の所に来れば
聞かせてやろう！`,
    yomi: "いますぐわれのところにくればきかせてやろう！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `満月が浮かぶ日に見える
教会の尖塔の影。`,
    yomi: "まんげつがうかぶひにみえるきょうかいのせんとうのかげ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `その先端が指し示すその場所に。`,
    yomi: "そのせんたんがさししめすそのばしょに。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我と片翼の魔王がいる。`,
    yomi: "われとかたよくのまおうがいる。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `きゃー！ナイスです。
「血色のピーチパイ」様。`,
    yomi: "きゃー！ないすです。「けっしょくのぴーちはい」さま。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今バフ入れますね。
えいっ？`,
    yomi: "いまばふいれますね。えいっ？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ブラックローズ・ラブリー・エンチャ･･･`,
    yomi: "ぶらっくろーず・らぶりー・えんちゃ･･･",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ。
これを聞きたければ急いだ方がいい。`,
    yomi: "ともよ。これをききたければいそいだほうがいい。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `赤いバラの言霊が
雨の降る明け方の
海霧のように追っている。`,
    yomi: "あかいばらのことだまがあめのふるあけがたのかいむのようにおっている。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ！
武運を祈る。`,
    yomi: "くくっ！ぶうんをいのる。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  //blablaエクスターナー2
  {
    text: `友よ。
そんなことも知らずに生きてきたのか。`,
    yomi: "ともよ。そんなこともしらずにいきてきたのか。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ･･･！
片翼の魔王が聞きたいことが
あるようだ。`,
    yomi: "くくっ･･･！かたよくのまおうがききたいことがあるようだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `世界から疎外されるたび
我、ギロチンは強くなるのだ。`,
    yomi: "せかいからそがいされるたびわれ、ぎろちんはつよくなるのだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `フッ･･･
魔王の迎接は
簡単なことではないからな。`,
    yomi: "ふっ･･･まおうのげいせつはかんたんなことではないからな。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ･･･！
ヒヨコにもなれない卵だと思っていたが
意外な活躍を見せているな。`,
    yomi: "くくっ･･･！ひよこにもなれないたまごだとおもっていたがいがいなかつやくをみせているな。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友とカウンターズは相性がいいようだ。`,
    yomi: "ともとかうんたーずはあいしょうがいいようだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そうだ。
彼女たちは煉獄を守る
ケルベロスのようなものだ。 `,
    yomi: "そうだ。かのじょたちはれんごくをまもるけるべろすのようなものだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `特にあの碧眼の小さな夜叉･･･
あいつを見ると、
我の右目に封印されし
片翼の魔王が暴れ回るのだ。`,
    yomi: "とくにあのへきがんのちいさなやしゃ･･･あいつをみると、われのみぎめにふういんされしかたよくのまおうがあばれまわるのだ！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `一度でもいいから奴と
戦わせてくれと！`,
    yomi: "いちどでもいいからやつとたたかわせてくれと！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `赤いバラよ。
片翼の魔王の前で何を隠す？`,
    yomi: "あかいばらよ。かたよくのまおうのまえでなにをかくす？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `その偽りだらけのペルソナなど
脱ぎ捨ててしまえ。`,
    yomi: "そのいつわりだらけのぺるそななどぬぎすててしまえ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `穢れを浄化し、己を受け入れるのだ！`,
    yomi: "けがれをじょうかし、おのれをうけいれるのだ！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `やはり魂で結ばれた戦場の炎。`,
    yomi: "やはりたましいでむすばれたせんじょうのほのお。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `背後を守ってくれる言霊がいるから
片翼の魔王は今日も
地上の安寧のため、
戦闘に臨むことができる。`,
    yomi: "はいごをまもってくれることだまがいるからかたよくのまおうはきょうもちじょうのあんねいのため、せんとうにのぞむことができる。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  // blablaエクスターナー3
  {
    text: `赤いバラよ。
結局、闇に魅了されたのか。`,
    yomi: "あかいばらよ。けっきょく、やみにみりょうされたのか。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `血で記した盟約を破棄するとは。`,
    yomi: "ちでしるしためいやくをはきするとは。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `忍び寄る魔王の呪いが
恐ろしくないようだな。`,
    yomi: "そのびよるまおうののろいがおそろしくないようだな。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ！
世界が定めた物質は
片翼の魔王には何の効果もない。`,
    yomi: "くくっ！せかいがさだめたぶっしつはかたよくのまおうにはなんのこうかもない",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `フハハハハ！！`,
    yomi: "ふはははは！！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `思い出すだけで
片翼の魔王が再び暴れ出しそうだ。`,
    yomi: "おもいだすだけでかたよくのまおうがふたたびあばれだしそうだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `フッ。`,
    yomi: "ふっ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `どうやら「一般人」には
「均衡の守護者」の言葉は届かないようだな。`,
    yomi: "どうやら「いっぱんじん」には「きんこうのしゅごしゃ」のことばはとどかないようだな。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `やはり魔王を抱いている者は
どこへ行っても孤独なもの。`,
    yomi: "やはりまおうをだいているものはどこへいってもこどくなもの。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ククッ。`,
    yomi: "くくっ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そんなささいな理由で
このギロチン・デ・メフィストとの
盟約を破棄しようとするとは。`,
    yomi: "そんなささいなりゆうでこのぎろちん・で・めふぃすととのめいやくをはきしようとするとは。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `やはり浄化が必要だな･･･`,
    yomi: "やはりじょうかがひつようだな･･･",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ。
世界が定めた秩序の中に
片翼の魔王を閉じ込めるというのか。`,
    yomi: "ともよ。せかいがさだめたちつじょのなかにかたよくのまおうをとじこめるというのか。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `愚かな。`,
    yomi: "おろかな。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `クッ･･･
浅はかな手を使うのだな。`,
    yomi: "くっ･･･あさはかなてをつかうのだな。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `おやおや･･･
仕方ない。`,
    yomi: "おやおや･･･しかたない。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `これも「運命」か。`,
    yomi: "これも「うんめい」か。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `たまには愚かな者たちの
水準に合わせるのも
魔王を抱いた者の孤独な宿命。`,
    yomi: "たまにはおろかなものたちのすいじゅんにあわせるのもまおうをだいたもののこどくなしゅくめい。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今回は我が譲ろう。`,
    yomi: "こんかいはわれがゆずろう。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  // blablaエクスターナー4
  {
    text: `これはこれは･･･大変だ。`,
    yomi: "これはこれは･･･たいへんだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `皆、ひとまず手を止め、
今の時刻を見ろ。`,
    yomi: "みな、ひとまずてをとめ、いまのじこくをみろ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `何かおかしいと思わないか？`,
    yomi: "なにかおかしいとおもわないか？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ･･･これだから「一般人」は困る。`,
    yomi: "くくっ･･･これだから「いっぱんじん」はこまる。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `危険が目の前に迫るまで
何も気づけないとは。`,
    yomi: "きけんがめのまえにせまるまでなにもきづけないとは。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `愚かすぎるにも程がある。`,
    yomi: "おろかすぎるにもほどがある。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `本当に分からなくて聞いているのか？`,
    yomi: "ほんとうにわからなくてきいているのか？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今のこの時間は
人間が最も罪悪感を感じることなく、
残虐になる時間。`,
    yomi: "いまのこのじきはにんげんがもっともざいあくかんをかんじることなくざんぎゃくになるじかん。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `友よ。
もう一度招待するのだ。`,
    yomi: "ともよ。もういちどしょうたいするのだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `いじめるだなんて･･･
我はただこの時間の真実を
教えただけだ。`,
    yomi: "いじめるだなんて･･･われはただこのじかんのしんじつをおしえただけだ。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くっ･･･分かった。
約束しよう。`,
    yomi: "くっ･･･わかった。やくそくしよう。",
    story: "bla1",
    episode: "ニケ「ギロチン」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `すまない。
一般人の脆弱な精神に対する
配慮が足りなかった。`,
    yomi: "すまない。いっぱんじんのぜいじゃくなせいしんにたいするはいりょがたりなかった。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くっ･･･
よくもそんな残忍な言葉を
平気で言えたもんだ。`,
    yomi: "くっ･･･よくもそんなざんにんなことばをへいきでいえたもんだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `やはりこの時間は、
人間が最も残虐になる時間のようだ。`,
    yomi: "やはりこのじかんはにんげんがもっともざんぎゃくになるじかんのようだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そうか。
しばらくは招待しないことにしよう。`,
    yomi: "そうか。しばらくはしょうたいしないことにしよう。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そのうち「因果律」によりまたあやつが
我々のもとへと導かれるだろう。`,
    yomi: "そのうち「いんがりつ」によりまたあやつがわれわれのもとへとみちびかれるだろう。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  //blablaエクスターナー5
  {
    text: `はぁ･･･
くっ･･･くそっ。`,
    yomi: "はぁ･･･くっ･･･くそっ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `これはもう我慢できない。`,
    yomi: "これはもうがまんできない。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `メイデンが我のウォーブラーの
アカウントをアンフォローしたのだ。`,
    yomi: "めいでんがわれのうぉーぶらーのあかうんとをあんふぉろーしたのだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `どうやら我の正体について
多くのことを
知りすぎてしまったようだ。`,
    yomi: "どうやらわれのしょうたいについておおくのことをしりすぎてしまったようだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `やはりもう殺すしかなin`,
    yomi: "やはりもうころすしかなin",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `均衡の守護者（@Darkmage）
Warbled：
今日は･･･月が特に赤い
我の内に秘める血が煮えたぎるのもこの
せいなのか？はあ･･･`,
    yomi: "きんこうのしゅごしゃ（@Darkmage）Warbled：きょうは･･･つきがとくにあかい",
    story: "bla1",
    episode: "グループ「エクスターナー：メイデンによるギロチンの投稿」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `それは当然
どこかにこの想いを吐き出さないと
我の狂気がどうにかなって
しまいそうだからだ。`,
    yomi: "それはとうぜんどこかにこのおもいをはきださないとわれのきょうきがどうにかなってしまいそうだからだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ダメだ。`,
    yomi: "だめだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `本来、狂気の抑制というものは
多数がそれを「目撃」する
ことで実現する。`,
    yomi: "ほんらい、きょうきのよくせいというものはたすうがそれを「もくげき」することでじつげんする。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `均衡の守護者（@Darkmage）
Warbled：
時たま･･･生を終えたいと思う時がある
しかしそんなことをしたらこの世界のキ
ンコウが崩れてしまうだろう
イクイリブリアムに束縛されたこの生は
とても孤独だ──`,
    yomi: "きんこうのしゅごしゃ（@Darkmage）Warbled：ときたま･･･せいをおえたいとおもうときがある",
    story: "bla1",
    episode: "グループ「エクスターナー：メイデンによるギロチンの投稿」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `さすが友は見る目がある。`,
    yomi: "さすがともはみるめがある。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `しかし問題はメイデンだ。
一体あの文章のどこに問題があるのだ？`,
    yomi: "しかしもんだいはめいでんだ。いったいあのぶんしょうのどこにもんだいがあるのだ？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `メイデン、お前はどこまで愚かなのだ。`,
    yomi: "めいでん、おまえはどこまでおろかなのだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `何度も言うが言葉というのは
繰り返されるほど強い力を持つ。`,
    yomi: "なんどもいうがことばというのはくりかえされるほどつよいちからをもつ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `この事実を言霊を扱う
お前が理解できないなんて
何と嘆かわしいことよ。`,
    yomi: "このじじつをことだまをあつかうおまえがりかいできないなんてなんとなげかわしいことよ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `それから迷惑云々言うようだが
お前も我といい勝負だと思うが？`,
    yomi: "それからめいわくうんぬんいうようだがおまえもわれといいしょうぶだとおもうが？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我もまた30分間隔で
我のタイムラインを埋め尽くす
お前のゲームキャラ情報の投稿に
常に「いいね」をせざるを得ない状況だ。`,
    yomi: "われもまた30ぶんかんかくでわれのたいむらいんをうめつくすおまえのげーむきゃらじょうほうのとうこうに",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `そしてその投稿で同じ意味の言葉が
併記されているのを見る限り`,
    yomi: "そしてそのとうこうでおなじいみのことばがへいきされているのをみるかぎり",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `ブラックローズ（@BlackRose）
Warbled：
キャッ
今度の新キャラはイケメン筋肉男子
（#美男子#筋肉男子）
マジ最高マジやばい
（#超最高#超貴重）
全力でゲットしてみせる
（#全力疾走確定#獲得必須）`,
    yomi: "ぶらっくろーず（@BlackRose）Warbled：きゃっこんどのしんきゃらはいけめんきんにくだんし",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `お前も言葉が繰り返し
使用される時の「言霊の力」を`,
    yomi: "おまえもことばがくりかえししようされるときの「ことだまのちから」を",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我以上に信じているようだが？`,
    yomi: "われいじょうにしんじているようだが？",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `おっと･･･
まだ他にもあるのに
これくらいでショックを
受けてしまっては大変だ。`,
    yomi: "おっと･･･まだほかにもあるのにこれくらいでしょっくをうけてしまってはたいへんだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `我の要求はこうだ。`,
    yomi: "われのようきゅうはこうだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `「我のアカウントを
もう一度フォローすること」
遅滞なく
今すぐにだ。`,
    yomi: "「われのあかうんとをもういちどふぉろーすること」ちたいなくいますぐにだ。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `素晴らしい。`,
    yomi: "すばらしい。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `今後はこのような不祥事が
起こらないことを願う。`,
    yomi: "こんごはこのようなふしょうじがおこらないことをねがう。",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
  {
    text: `くくっ･･･くははははは！`,
    yomi: "くくっ･･･くははははは！",
    story: "bla1",
    episode: "グループ「エクスターナー」",
    costume: "normal",
    music:"music1"
  },
];


const list = document.getElementById("quoteList");
const searchInput = document.getElementById("searchInput");
const storyFilter = document.getElementById("storyFilter");
const costumeFilter = document.getElementById("costumeFilter");
const musicFilter = document.getElementById("musicFilter");

const modalOverlay = document.getElementById("modalOverlay");
const modalText = document.getElementById("modalText");
const modalStory = document.getElementById("modalStory");
const modalEpisode = document.getElementById("modalEpisode");
const modalCostume = document.getElementById("modalCostume");
const modalMusic = document.getElementById("modalMusic");
const closeModal = document.getElementById("closeModal");
const kanaFilter = document.getElementById("kanaFilter");

const copyLog = [];
const copyLogList = document.getElementById("copyLogList");
const MAX_LOG = 10;
const sortOrder = document.getElementById("sortOrder");
//const typeSound = document.getElementById("typeSound");
const typeSound = document.getElementById("typeSound");
const quoteCount = document.getElementById("quote-count");


/*
// 初回クリックで再生許可を取る
document.addEventListener("click", () => {
  typeSound.play().then(() => {
    typeSound.pause();
    typeSound.currentTime = 0;
  }).catch(() => {});
}, { once: true });
*/
function getKanaRow(char) {
  if (!char) return "other";

  const c = char.normalize("NFKC");

  if ("あいうえお".includes(c)) return "あ";
  if ("かきくけこがぎぐげご".includes(c)) return "か";
  if ("さしすせそざじずぜぞ".includes(c)) return "さ";
  if ("たちつてとだぢづでど".includes(c)) return "た";
  if ("なにぬねの".includes(c)) return "な";
  if ("はひふへほばびぶべぼぱぴぷぺぽ".includes(c)) return "は";
  if ("まみむめも".includes(c)) return "ま";
  if ("やゆよ".includes(c)) return "や";
  if ("らりるれろ".includes(c)) return "ら";
  if ("わをん".includes(c)) return "わ";

  return "other";
}



// 一覧描画 
function render() {
  list.innerHTML = "";

  const filteredQuotes = quotes
    .filter(q => {
      const firstChar = q.yomi?.trim()[0];
      const row = getKanaRow(firstChar);

      return (
        (!searchInput.value || q.text.includes(searchInput.value)) &&
        (!storyFilter.value || q.story === storyFilter.value) &&
        (!costumeFilter.value || q.costume === costumeFilter.value) &&
        (!musicFilter.value || q.music === musicFilter.value) &&
        (!kanaFilter.value ||
          (kanaFilter.value === "other"
            ? row === "other"
            : row === kanaFilter.value))
      );
    })
    .sort((a, b) => {
  const ay = a.yomi || a.text;
  const by = b.yomi || b.text;

  switch (sortOrder.value) {
    case "kana":
      return ay.localeCompare(by, "ja");

    case "kana-reverse":
      return by.localeCompare(ay, "ja");

    case "default-reverse":
      return -1;

    default:
      return 0; // 登録順
  }
})

// 件数表示
  quoteCount.textContent = `─ 刻まれし言霊：${filteredQuotes.length} 節 ─`;

  // フラッシュ演出
  quoteCount.classList.remove("flash");
  void quoteCount.offsetWidth; // ← 再発火のためのトリック
  quoteCount.classList.add("flash");


  filteredQuotes.forEach((q) => {
  const li = document.createElement("li");
  li.className = "quote-item costume-" + q.costume;


  // indexじゃなくてJSONを持たせる
  li.quoteData = q;

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.textContent = "📋";

  const span = document.createElement("span");
  span.className = "quote-text";
  span.textContent = q.text;

const costume = COSTUMES[q.costume];

// hover 色をJSで制御
/*
let hoverInterval;
span.addEventListener("mouseenter", () => {
  span.style.color = costume.hoverColor;
  span.style.textShadow = `
    0 0 4px ${costume.hoverColor},
    0 0 8px ${costume.hoverColor},
    0 0 16px ${costume.hoverColor}
  `;

  hoverInterval = setInterval(() => {
    const rect = span.getBoundingClientRect();

    const x =
      rect.left + Math.random() * rect.width;
    const y =
      rect.top + Math.random() * rect.height;

    spawnHoverParticle(x, y, costume.hoverColor);
  }, 80); // 数値小さくすると漏れ量UP
});

span.addEventListener("mouseleave", () => {
  span.style.color = "";
  span.style.textShadow = "";
  clearInterval(hoverInterval);
});

span.addEventListener("mouseleave", () => {
  span.style.color = "";
  span.style.textShadow = "";
});
*/

let hoverInterval;

span.addEventListener("mouseenter", () => {
  span.style.color = costume.hoverColor;
  span.style.textShadow = `
    0 0 4px ${costume.hoverColor},
    0 0 8px ${costume.hoverColor},
    0 0 16px ${costume.hoverColor}
  `;

  // 「浮く」演出
  span.style.transform = "translateY(-1px)";

  hoverInterval = setInterval(() => {
    const rect = span.getBoundingClientRect();
    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + Math.random() * rect.height;

    spawnHoverParticle(x, y, costume.hoverColor);
  }, 80);
});

span.addEventListener("mouseleave", () => {
  span.style.color = "";
  span.style.textShadow = "";
  span.style.transform = "";
  clearInterval(hoverInterval);
});

  
  li.append(copyBtn, span);
  list.appendChild(li);
});

}


searchInput.oninput = render;
kanaFilter.onchange = render;
storyFilter.onchange = render;
costumeFilter.onchange = render;
musicFilter.onchange = render;
sortOrder.onchange = render;


render();

//イベント委譲
list.addEventListener("click", (e) => {
  const li = e.target.closest(".quote-item");
  if (!li) return;

  const q = li.quoteData;


  // コピー
  if (e.target.classList.contains("copy-btn")) {
    navigator.clipboard.writeText(q.text).then(() => {
      // コピー履歴追加
copyLog.unshift(q.text);
if (copyLog.length > MAX_LOG) {
  copyLog.pop();
}
renderCopyLog();

      e.target.classList.add("copied");

      const old = li.querySelector(".copy-feedback");
      if (old) old.remove();

      const feedback = document.createElement("span");
      feedback.className = "copy-feedback";
      feedback.textContent = COSTUMES[q.costume].copyText;



      e.target.after(feedback);

      setTimeout(() => {
        e.target.classList.remove("copied");
        feedback.remove();
      }, 800);
    });

  }

  // モーダル
  if (e.target.classList.contains("quote-text")) {
    openModal(q);
  }
});

function rgbaStringToRGB(str) {
  const match = str.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!match) return { r: 255, g: 50, b: 50 };

  return {
    r: Number(match[1]),
    g: Number(match[2]),
    b: Number(match[3])
  };
}


// モーダル 

function openModal(q) {

console.log("openModalが呼ばれた", q);
console.log("typeTextは存在する？", typeof typeText);
  
setModalFrameColor(q.story);
modalOverlay.style.display = "flex";

  typeText(modalText, q.text, 35);

  modalStory.textContent = STORIES[q.story].label;
  modalEpisode.textContent = q.episode;
  modalCostume.textContent = COSTUMES[q.costume].label;
  modalMusic.textContent = MUSIC[q.music].label;

 // ★これを一番最初に入れる
  cancelAnimationFrame(anim);

const costume = COSTUMES[q.costume];
setParticleColor(rgbaStringToRGB(costume.hoverColor));



  

  resizeCanvas();
  createParticles();
  drawParticles();
}

closeModal.onclick = closeModalFn;
modalOverlay.onclick = e => {
  if (e.target === modalOverlay) closeModalFn();
};

function closeModalFn() {
  modalOverlay.style.display = "none";
  cancelAnimationFrame(anim);
}

// 粒子

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let anim;

// 色変数追加
let particleColor = {
  r: 255,
  g: 50,
  b: 50
};
// 追加コード色
function setParticleColor(color) {
  particleColor = color;
}



function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

function createParticles() {
  particles = [];

  for (let i = 0; i < 40; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      a: Math.random() * 0.5 + 0.2

      
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = `rgba(${particleColor.r}, ${particleColor.g}, ${particleColor.b}, ${p.a})`;

    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0) p.x = canvas.width;
    if (p.y < 0) p.y = canvas.height;
    if (p.x > canvas.width) p.x = 0;
    if (p.y > canvas.height) p.y = 0;
  });

  anim = requestAnimationFrame(drawParticles);
}

/*
function playTypeSound() {
  console.log("playTypeSoundが呼ばれた");
  const sound = typeSound.cloneNode();  // これが重要！
  sound.currentTime = 0;
  sound.play()//.catch(() => {});
  .then(() => console.log("再生成功"))
    .catch(e => console.log("再生失敗:", e));
}*/

function playTypeSound() {
  console.log("playTypeSoundが呼ばれた");

  const sound = new Audio("type.mp3"); // ここが重要！
  sound.volume = 0.8;
  sound.play()
    .then(() => console.log("再生成功"))
    .catch(e => console.log("再生失敗:", e));
}



// 台詞文字の出現演出
/*
function typeText(element, text, speed = 30) {
  console.log("typeTextが呼ばれた");
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
   console.log("setIntervalが動いた –", i, "–", text[i]);
    element.textContent += text[i];

    console.log("i:", i, "i%3:", i % 3);

  //typeSound.volume = 0.8;
  if (i % 3 === 0) {
    console.log("ここで playTypeSound を呼ぶ");
    playTypeSound();
  }
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}
  */

// 背景炎アニメーション

const fireCanvas = document.getElementById("fireCanvas");
const fctx = fireCanvas.getContext("2d");

let flames = [];

function resizeFireCanvas() {
  fireCanvas.width = window.innerWidth;
  fireCanvas.height = window.innerHeight;
}
resizeFireCanvas();
window.addEventListener("resize", resizeFireCanvas);

function createFlames() {
  flames = [];
  for (let i = 0; i < 120; i++) {
    flames.push({
      x: Math.random() * fireCanvas.width,
      y: fireCanvas.height + Math.random() * 100,
      r: Math.random() * 20 + 10,
      vy: Math.random() * 1 + 0.5,
      a: Math.random() * 0.4 + 0.2
    });
  }
}
createFlames();

function drawFire() {
  fctx.clearRect(0, 0, fireCanvas.width, fireCanvas.height);

  flames.forEach(f => {
    const gradient = fctx.createRadialGradient(
      f.x, f.y, 0,
      f.x, f.y, f.r
    );

    gradient.addColorStop(0, `rgba(255, 80, 0, ${f.a})`);
    gradient.addColorStop(0.5, `rgba(200, 0, 0, ${f.a * 0.6})`);
    gradient.addColorStop(1, "rgba(0,0,0,0)");

    fctx.fillStyle = gradient;
    fctx.beginPath();
    fctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    fctx.fill();

    f.y -= f.vy;
    f.x += Math.sin(f.y * 0.02) * 0.5;

    if (f.y < -50) {
      f.y = fireCanvas.height + 50;
      f.x = Math.random() * fireCanvas.width;
    }
  });

  requestAnimationFrame(drawFire);
}

drawFire();

document.addEventListener("pointerdown", (e) => {
  const effect = document.createElement("div");
  effect.className = "cursor-effect";

  effect.style.left = `${e.clientX}px`;
  effect.style.top = `${e.clientY}px`;

  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 800);
});

// 厨二病カーソル生成（PCのみ）
if (window.matchMedia("(pointer: fine)").matches) {

  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  document.body.appendChild(cursor);

  document.addEventListener("pointermove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });
}

function setModalFrameColor(storyKey) {
  const modal = document.querySelector(".modal");
  const color = STORIES[storyKey].color;

  modal.style.borderColor = color;

  // 内側の二重枠も色を変えたい場合
  //modal.style.setProperty("--story-frame", color);
}

function renderCopyLog() {
  copyLogList.innerHTML = "";

  copyLog.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;

    // クリックで再コピー

    li.addEventListener("click", () => {
      navigator.clipboard.writeText(item);
      showImprintEffect("再刻印完了");
    });

    copyLogList.appendChild(li);
  });

  
}

function showImprintEffect(text = "再刻印完了") {
  const effect = document.createElement("div");
  effect.textContent = text;
  effect.className = "imprint-effect";

  document.body.appendChild(effect);

  setTimeout(() => {
    effect.remove();
  }, 1200);
}

const backToTop = document.getElementById("backToTop");

function typeText(element, text, speed = 40) {
  console.log("typeTextが呼ばれた");
  console.log("textの中身", text);

  element.textContent = "";
  element.classList.add("typing");

  let i = 0;

  const interval = setInterval(() => {
    console.log("setIntervalが動いた", i, text[i]);

    element.textContent += text[i];

// ここで音を鳴らす
    if (i % 3 === 0) {
      console.log("ここで playTypeSound を呼ぶ");
      playTypeSound();
    }

    i++;

    if (i >= text.length) {
      clearInterval(interval);
      element.classList.remove("typing"); // ← 打ち終わったらカーソル消す
    }
  }, speed);
}


// スクロール量で表示切替
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// クリックで最上部へ
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

console.log("typeSound:", typeSound);
console.log("typeSound src:", typeSound?.src);

typeSound.volume = 1;
console.log("volume", typeSound.volume);

function spawnHoverParticle(x, y, color) {
  const p = document.createElement("div");
  p.className = "hover-particle";

  p.style.left = `${x}px`;
  p.style.top = `${y}px`;
  p.style.background = color;

  // 飛ぶ方向をランダムに
  const dx = (Math.random() - 0.5) * 40 + "px";
  const dy = (Math.random() - 0.5) * 40 + "px";
  p.style.setProperty("--dx", dx);
  p.style.setProperty("--dy", dy);

  document.body.appendChild(p);

  setTimeout(() => p.remove(), 800);
}

