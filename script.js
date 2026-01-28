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

  quotes
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



    .forEach((q) => {
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

