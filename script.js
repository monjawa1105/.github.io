const quotes = [
  {
    text: `くくっ･･･注目せよ！
愚か者たちよ。`,
    yomi: "くく",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップⅠ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `我の名前はギロチン・デ・メフィスト。
「均衡の守護者」である。`,
    yomi: "われ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップⅡ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `受け止められるか？
我の中に渦巻く「アレ」を。`,
    yomi: "うけ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップⅢ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `友は我のサーバントとして我に服従するのだ。
そして我は、何があっても友を守ろう。`,
    yomi: "とも",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `ふぅ･･･昔の我は「孤独」という結界に封じ込められていた。
しかし友のおかげで、その結界から抜け出せたのだ！`,
    yomi: "ふぅ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅱ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `友を見るたびに、我の心臓が熱くなるんだ･･･
これは「ブレイズハート」を手にする過程なのか！？`,
    yomi: "とも",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅲ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `片翼の魔王よ、落ち着くのだ。
ここで我々の力を解放してはいけない。`,
    yomi: "かた",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーに放置」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `片翼の魔王も友の前では大人しい。
友のことが随分と気に入ったようだ。`,
    yomi: "かた",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーに放置（好感度10）Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `平凡な人間どもに 我を理解することなどできない。
だから我はいつも孤独なのだ。`,
    yomi: "へいぼん",
    story: "ボイス図鑑",
    episode: "前哨基地「前哨基地でタップⅠ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `あいつら･･･動きが怪しい。
まさか「組織」の人間か？`,
    yomi: "あい",
    story: "ボイス図鑑",
    episode: "前哨基地「前哨基地でタップⅡ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `協会ほど「組織」の人間を 避けるのに ふさわしい場所はない。
そういう場所には 奴らも足を 踏み入れないのだ。`,
    yomi: "きょう",
    story: "ボイス図鑑",
    episode: "前哨基地「前哨基地でタップⅢ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `気になるだろう？この右目に封印された存在が何なのか。`,
    yomi: "き",
    story: "ボイス図鑑",
    episode: "獲得および成長「初対面」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くくくっ、力が沸々とみなぎってくる。`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "獲得および成長「戦闘力UP Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `ちょっと待て･･･急に片方の目がズキズキと痛み出したんだが？`,
    yomi: "ち",
    story: "ボイス図鑑",
    episode: "獲得および成長「戦闘力UP Ⅱ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くっ、これで「組織」が我がさらに警戒するだろう。`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "獲得および成長「戦闘力UP Ⅲ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `はっ。これはもしや･･･
我がずっと探し求めていた「アレ」なのか？`,
    yomi: "は",
    story: "ボイス図鑑",
    episode: "獲得および成長「プレゼントⅠ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `この程度のプレゼントで我を買収しようとは･･･ふむ･･･見事だ。`,
    yomi: "この",
    story: "ボイス図鑑",
    episode: "獲得および成長「プレゼントⅡ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くくくっ･･･礼は省略する。`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "獲得および成長「プレゼントⅢ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `もしかすると友こそが、
我の孤独な人生における唯一の理解者かもしれないな。`,
    yomi: "も",
    story: "ボイス図鑑",
    episode: "獲得および成長「好感度UP Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `我の内に潜む闇まで浄化される気分だ。
白魔法を使えるのか？`,
    yomi: "われ",
    story: "ボイス図鑑",
    episode: "獲得および成長「好感度UP Ⅱ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `友に我のすべてを包み隠さず見せることにしよう。`,
    yomi: "とも",
    story: "ボイス図鑑",
    episode: "獲得および成長「好感度UP Ⅲ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `喜んで力を貸してやろう。`,
    yomi: "よろ",
    story: "ボイス図鑑",
    episode: "フィールド「部隊編成」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `何か用件でも？`,
    yomi: "なに",
    story: "ボイス図鑑",
    episode: "フィールド「フィールドで部隊をタップ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `確かにそちらの方向に不吉な風が吹いている。`,
    yomi: "た",
    story: "ボイス図鑑",
    episode: "フィールド「フィールドで部隊を移動」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `戦闘を開始する。`,
    yomi: "せん",
    story: "ボイス図鑑",
    episode: "フィールド「戦闘突入」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くくっ、我の内に秘める狂気を解放する時が来たか。`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘開始Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `･･･また、血の雨が降りそうだ。`,
    yomi: "ま",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘開始Ⅱ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `少しばかり暴れさせてもらおうか。くくっ。`,
    yomi: "す",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘開始Ⅲ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `装填が必要だ。`,
    yomi: "そう",
    story: "ボイス図鑑",
    episode: "戦闘「リロードⅠ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `しばし待つのだ。`,
    yomi: "し",
    story: "ボイス図鑑",
    episode: "戦闘「リロードⅡ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `機をうかがおう。`,
    yomi: "き",
    story: "ボイス図鑑",
    episode: "戦闘「リロードⅢ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `時は来た！`,
    yomi: "と",
    story: "ボイス図鑑",
    episode: "戦闘「バーストスキル使用可能」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `来たれ、片翼の魔王よ！魔・界・黒・龍・波！！`,
    yomi: "き",
    story: "ボイス図鑑",
    episode: "戦闘「バーストスキル」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `究極の合体技を受けてみたまえ！`,
    yomi: "きゅ",
    story: "ボイス図鑑",
    episode: "戦闘「フルバースト」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `大したことなかったな。`,
    yomi: "た",
    story: "ボイス図鑑",
    episode: "戦闘「敵殲滅Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くくくっ`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「敵殲滅Ⅱ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `無益な存在よ。`,
    yomi: "む",
    story: "ボイス図鑑",
    episode: "戦闘「敵殲滅Ⅲ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くうっ！`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「被撃Ⅰ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `ちぃっ！`,
    yomi: "ち",
    story: "ボイス図鑑",
    episode: "戦闘「被撃Ⅱ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `ぐほっ！`,
    yomi: "ぐ",
    story: "ボイス図鑑",
    episode: "戦闘「被撃Ⅲ」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くっ･･･まだ時期尚早だったようだ。`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘不能」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `くっ、また勝ってしまった。
なるべく「組織」の目につかないようにしたかったのだが。`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘勝利」",
    costumeKey: "normal", 
    costumeLabel: "基本コスチューム"
  },
  {
    text: `血が冷たい。冬の訪れを感じるな。`,
    yomi: "ち",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップⅠ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `勇者の隣には素晴らしい仲間が存在するもの。
友は我の仲間としてふさわしいだろうか。`,
    yomi: "ゆ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップⅡ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `片翼の魔王。奴は我を飲み込もうとしている。
その日が来たら、「アイスローズ」と共に我を倒してくれ。`,
    yomi: "か",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップⅢ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `かつては孤独という過酷な運命に縛られていると思っていた。
この冒険を終わらせるまではな。`,
    yomi: "か",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `我の新しい服装？まさしく冬の勇者にふさわしいであろう。
だ、だからといってあまりジロジロ見ないでくれ･･･`,
    yomi: "わ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅱ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `片翼の魔王に飲み込まれることなどない。
我には友とメイデンがいるのだから。`,
    yomi: "かた",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーでタップ（好感度10）Ⅲ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `くっ。ああっ。落ち着け、片翼の魔王よ。
今はお前が出る時ではない！`,
    yomi: "くっ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーに放置」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `クロエから受け継いだ「均衡の守護者」という称号に恥じぬよう、
しっかりと振る舞わねば。`,
    yomi: "くろ",
    story: "ボイス図鑑",
    episode: "ロビー「ロビーに放置（好感度10）Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `電波塔。あそこで隠居した 賢者がいるのだな。
異世界に関する すべてを知り尽くした賢者･･･ その名もエクシアが･･･ ！`,
    yomi: "でん",
    story: "ボイス図鑑",
    episode: "前哨基地「前哨基地でタップⅠ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `「冬の呪い」がない世界は、こんなにも平和なのか。`,
    yomi: "ふゆ",
    story: "ボイス図鑑",
    episode: "前哨基地「前哨基地でタップⅡ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `友よ。我の宿敵でありライバル･･･
「碧眼の小さな夜叉」を見かけたら我を呼んでくれ。`,
    yomi: "とも",
    story: "ボイス図鑑",
    episode: "前哨基地「前哨基地でタップⅢ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `勇者、ギロチン・デ・メフィスト。
世界の意志に従い、その呼びかけに応えん！`,
    yomi: "ゆう",
    story: "ボイス図鑑",
    episode: "獲得および成長「初対面」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `ククッ。力がみなぎってくるな。`,
    yomi: "くく",
    story: "ボイス図鑑",
    episode: "獲得および成長「戦闘力UP Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `ホワイトアイスドラゴンなぞ、いくらでも倒してみせよう！`,
    yomi: "ほわ",
    story: "ボイス図鑑",
    episode: "獲得および成長「戦闘力UP Ⅱ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `進むべき道は決まった。
あとは突き進むのみ。`,
    yomi: "すす",
    story: "ボイス図鑑",
    episode: "獲得および成長「戦闘力UP Ⅲ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `おやおや。
友よ、やはり我に興味を持ってしまったか。`,
    yomi: "おや",
    story: "ボイス図鑑",
    episode: "獲得および成長「プレゼントⅠ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `勇者とは、いかなる誘惑にも負けない者のこと。これは断らせて･･･
くっ。ああっ。片翼の魔王･･･勝手にプレゼントに手を伸ばすな！`,
    yomi: "ゆう",
    story: "ボイス図鑑",
    episode: "獲得および成長「プレゼントⅡ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `こんなもの、我が喜ぶと思ったら･･･
オホンッ、正しい判断だな。`,
    yomi: "こんな",
    story: "ボイス図鑑",
    episode: "獲得および成長「プレゼントⅢ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `友に誓おう。
我の剣は、常に友のためにあると。`,
    yomi: "とも",
    story: "ボイス図鑑",
    episode: "獲得および成長「好感度UP Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `前世からの縁が続いているとは。
友よ、やはり我々は運命で結ばれているようだ。`,
    yomi: "ぜん",
    story: "ボイス図鑑",
    episode: "獲得および成長「好感度UP Ⅱ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `冒険は気の合う仲間たちと共にするものだろう？
ククッ。友と一緒であれば、どこにでも行けそうだ。`,
    yomi: "ぼう",
    story: "ボイス図鑑",
    episode: "獲得および成長「好感度UP Ⅲ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `ククッ。友よ。この我を制御しきれるかな？`,
    yomi: "くく",
    story: "ボイス図鑑",
    episode: "フィールド「部隊編成」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `友よ、指示を。`,
    yomi: "とも",
    story: "ボイス図鑑",
    episode: "フィールド「フィールドで部隊をタップ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `運命が我々を呼んでいる！`,
    yomi: "うん",
    story: "ボイス図鑑",
    episode: "フィールド「フィールドで部隊を移動」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `ククッ、勝負だ！`,
    yomi: "くく",
    story: "ボイス図鑑",
    episode: "フィールド「戦闘突入」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `勇者とはなにか見せてやろう。`,
    yomi: "ゆう",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘開始Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `血がたぎるな。`,
    yomi: "ち",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘開始Ⅱ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `「組織」の奴らめ、全員片付けてやる！`,
    yomi: "「そ",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘開始Ⅲ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `落ち着け、片翼の魔王！`,
    yomi: "おち",
    story: "ボイス図鑑",
    episode: "戦闘「リロードⅠ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `しばし援護を頼む。`,
    yomi: "し",
    story: "ボイス図鑑",
    episode: "戦闘「リロードⅡ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `約束しよう、すぐに戻ってくる。`,
    yomi: "やく",
    story: "ボイス図鑑",
    episode: "戦闘「リロードⅢ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `最高の終焉を見せてやろう。`,
    yomi: "さい",
    story: "ボイス図鑑",
    episode: "戦闘「バーストスキル使用可能」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `壮大な叙事詩の幕を下ろす時だ！`,
    yomi: "そう",
    story: "ボイス図鑑",
    episode: "戦闘「バーストスキル」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `我が信じるお前たちを信じろ！`,
    yomi: "われ",
    story: "ボイス図鑑",
    episode: "戦闘「フルバースト」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `問答無用。`,
    yomi: "もん",
    story: "ボイス図鑑",
    episode: "戦闘「敵殲滅Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `弱いな。`,
    yomi: "よわ",
    story: "ボイス図鑑",
    episode: "戦闘「敵殲滅Ⅱ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `いけにえとなれ。`,
    yomi: "いけ",
    story: "ボイス図鑑",
    episode: "戦闘「敵殲滅Ⅲ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `うぐっ･･･！`,
    yomi: "う",
    story: "ボイス図鑑",
    episode: "戦闘「被撃Ⅰ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `くっ！`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「被撃Ⅱ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `あう･･･`,
    yomi: "あう",
    story: "ボイス図鑑",
    episode: "戦闘「被撃Ⅲ」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `くっ･･･孤独な運命だな･･･エル・テルマ・ソルース･･･`,
    yomi: "く",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘不能」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  },
  {
    text: `どうだ？友よ。
このギロチン・デ・メフィストと偉大なる冒険を共にした感想は！`,
    yomi: "どう",
    story: "ボイス図鑑",
    episode: "戦闘「戦闘勝利」",
    costumeKey: "winter", 
    costumeLabel: "ウィンタースレイヤー"
  }
];


const list = document.getElementById("quoteList");
const searchInput = document.getElementById("searchInput");
const storyFilter = document.getElementById("storyFilter");
const costumeFilter = document.getElementById("costumeFilter");

const modalOverlay = document.getElementById("modalOverlay");
const modalText = document.getElementById("modalText");
const modalStory = document.getElementById("modalStory");
const modalEpisode = document.getElementById("modalEpisode");
const modalCostume = document.getElementById("modalCostume");
const closeModal = document.getElementById("closeModal");
const kanaFilter = document.getElementById("kanaFilter");

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



/* 一覧描画（イベントは付けない） */
function render() {
  list.innerHTML = "";

  quotes
    .filter(q => {
      const firstChar = q.yomi?.trim()[0];
const row = getKanaRow(firstChar);


      return (
        (!searchInput.value || q.text.includes(searchInput.value)) &&
        (!storyFilter.value || q.story === storyFilter.value) &&
        (!costumeFilter.value || q.costumeKey === costumeFilter.value) &&
        (!kanaFilter.value ||
          (kanaFilter.value === "other"
            ? row === "other"
            : row === kanaFilter.value))
      );
    })
    .forEach((q) => {
  const li = document.createElement("li");
  li.className = "quote-item costume-" + q.costumeKey;

  // ★ indexじゃなくてJSONを持たせる
  li.quoteData = q;

  const copyBtn = document.createElement("button");
  copyBtn.className = "copy-btn";
  copyBtn.textContent = "📋";

  const span = document.createElement("span");
  span.className = "quote-text";
  span.textContent = q.text;

  li.append(copyBtn, span);
  list.appendChild(li);
});

}


searchInput.oninput = render;
kanaFilter.onchange = render;
storyFilter.onchange = render;
costumeFilter.onchange = render;

render();

/* 🔥 イベント委譲（ここが最重要） */
list.addEventListener("click", (e) => {
  const li = e.target.closest(".quote-item");
  if (!li) return;

  const q = li.quoteData;


  // コピー
  if (e.target.classList.contains("copy-btn")) {
    navigator.clipboard.writeText(q.text).then(() => {
      e.target.classList.add("copied");

      const old = li.querySelector(".copy-feedback");
      if (old) old.remove();

      const feedback = document.createElement("span");
      feedback.className = "copy-feedback";
      feedback.textContent =
  q.costumeKey === "celeb" ? "祝印刻定" :
  q.costumeKey === "winter"   ? "氷刻完了" :
                             "刻印完了";


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

/* モーダル */

function openModal(q) {

// ← これを追加！
  setParticleColor(q.costumeKey);


  typeText(modalText, q.text); /*変更*/
  modalStory.textContent = q.story;
  modalEpisode.textContent = q.episode;
  modalCostume.textContent = q.costumeLabel;

  modalOverlay.style.display = "flex";

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

/* 粒子 */

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");
let particles = [];
let anim;

/*色変数追加 */
let particleColor = {
  r: 255,
  g: 50,
  b: 50
};
/*追加コード色 */
function setParticleColor(key) {
  switch (key) {
    case "normal":
      particleColor = { r: 255, g: 50, b: 50 }; // 深紅
      break;
    case "winter":
      particleColor = { r: 120, g: 180, b: 255 }; // 青白
      break;
    case "celeb":
      particleColor = { r: 255, g: 200, b: 80 }; // 金
      break;
    default:
      particleColor = { r: 255, g: 50, b: 50 };
  }
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

/*台詞文字の出現演出*/ 
function typeText(element, text, speed = 30) {
  element.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    element.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

/* 🔥 背景炎アニメーション */

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
