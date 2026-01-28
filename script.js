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
    label: "Snowflakes (Night)",
    type: "music18",
    color: "rgba(0, 170, 255, 1)"
  }
};

const quotes = [
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
  {
    text: `友よ。冒険に出かける準備はいいか？`,
    yomi: "",
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
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `クロエ、我は新技術を習得した！
その名も「魔界黒龍波」！
一時的に魔王の力を借りるスキルだ！`,
    yomi: "くろえ、われはしんぎじゅつをしゅうとくした！そのなも「まかいこくりゅうは」！いちじてきにまおうのちからをかりるすきるだ！",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `おい･･･メイデン？
いくらニケだといっても･･･
少し休んではどうだ？
ゲームを始めて、もう半日経ったぞ･･･`,
    yomi: "おい･･･めいでん？いくらにけだといっても･･･すこしやすんではどうだ？げーむをはじめて、もうはんにちたったぞ･･･",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `友よ、この任務は我に任せて
休息を取ってはどうだ？`,
    yomi: "ともよ、このにんむはわれにまかせてきゅうそくをとってはどうだ？",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `最終装備セット概要
タンカー：ヘルヘイム全身鎧セット
ヒーラー：ニヴルヘイムの司祭セット
魔法使い：ムスペルヘイムのローブセット`,
    yomi: "さいしゅうそうびせっとがいようたんかー：へるへいむぜんしんよろいせっと",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `ファイナル・クエストオンライン･･･
ククッ。すぐに会いに行く。
「血のように赤き薔薇の審判者」よ。`,
    yomi: "ふぁいなる・くえすとおんらいん･･･くくっ。すぐにあいにいく。「ちのようにあかきばらのしんぱんしゃ」よ。",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `すまない･･･
すべて我のせいだ･･･
我が迷ったせいで･･･`,
    yomi: "すまない･･･すべてわれのせいだ･･･われがまよったせいで･･･",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `何だと？「組織」の脅威にさらされている世界だと？
片翼の魔王の封印者として見過ごせぬ！`,
    yomi: "なんだと？「そしき」のきょういにさらされているせかいだと？",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `おお！仲間と約束があるだと？
友との約束は重要だ。
それはそうと、エオルニアはどんな場所なんだ？`,
    yomi: "おお！なかまとやくそくがあるだと？ともとのやくそくはじゅうようだ。",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `ククッ。会えて嬉しいぞ。
我の仲間となる者よ。
我は世界の「均衡」のために存在せし者──
ギロチン・デ・メフィストという。`,
    yomi: "くくっ。あえてうれしいぞ。われのなかまとなるものよ。",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `特殊能力を持つ我がイレギュラーとなれば･･･
我が「片翼の魔王」を制御できなければ･･･`,
    yomi: "とくしゅのうりょくをもつわれがいれぎゅらーとなれば･･･われが「かたよくのまおう」をせいぎょできなければ･･･",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `友が我と同じ苦しみを味わう必要はない。
メイデンを救わなければ。`,
    yomi: "ともがわれとおなじくるしみをあじわうひつようはない。めいでんをすくわなければ。",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
  {
    text: `基本の勇者服セットの獲得方法は─･･･
カカシ退治クエストをクリア─･･･
剣を使用する職業は必須です─･･･`,
    yomi: "きほんのゆうしゃふくせっとののかくとくほうほうは─･･･",
    story: "ev1",
    episode: "フィールド「ギロチンの記憶の破片」",
    costume: "winter",
    music:"music3"
  },
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
    yomi: "待て･･･！",
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
    yomi: "待て！",
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
    yomi: "無傷、だと･･･？",
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
    yomi: "笑わせる。",
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
    yomi: "仕方ない･･･",
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
    yomi: "ラプラス！？",
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

