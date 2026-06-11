import { ProblemSet } from '../types';

const percentageKeypadLayout = [
    ['7', '8', '9', 'x'],
    ['4', '5', '6', 'y'],
    ['1', '2', '3', '.'],
    ['0', '(', ')', ' ']
];

const standardKeypadLayout = [
    ['7', '8', '9', 'x', 'y'],
    ['4', '5', '6', '=', ','],
    ['1', '2', '3', '.', '-'],
    ['0', ' ', ' ', ' ', ' ']
];

const concentrationPrepKeypadLayout = [
    ['7', '8', '9', 'x', '('],
    ['4', '5', '6', 'y', ')'],
    ['1', '2', '3', '+', '-'],
    ['0', '.', '/', ' ']
];

const speedPrepKeypadLayout = [
    ['7', '8', '9', 'x', '/'],
    ['4', '5', '6', 'y', '('],
    ['1', '2', '3', 'a', ')'],
    ['0', 'b', '+', '-']
];

export const simultaneousEquationsWordProblems: ProblemSet = {
  "金銭問題(基)": [
    { type: 'text', data: { question: "1本80円の鉛筆と1本120円のボールペンを合わせて10本買ったら、代金は920円でした。鉛筆とボールペンはそれぞれ何本買いましたか？（鉛筆:x本, ボールペン:y本で答えてください）", hint: "本数の式と、代金の式を立ててみましょう。x+y=10と、80x+120y=920です。", keypadLayout: standardKeypadLayout }, answer: "x=7,y=3" },
    { type: 'text', data: { question: "りんご3個とみかん5個で650円、りんご1個とみかん2個で250円です。りんご1個、みかん1個の値段はそれぞれいくらですか？（りんご:x円, みかん:y円で答えてください）", keypadLayout: standardKeypadLayout}, answer: "x=150,y=50" },
    { type: 'text', data: { question: "大人2人と子供3人で入場料が1600円、同じ料金で大人1人と子供2人では900円です。大人1人、子供1人の入場料はそれぞれいくらですか？（大人:x円, 子供:y円）", keypadLayout: standardKeypadLayout}, answer: "x=500,y=200" },
    { type: 'text', data: { question: "1個150円のパンと1個100円のドーナツを合わせて8個買い、1000円でした。パンとドーナツはそれぞれ何個買いましたか？（パン:x個, ドーナツ:y個）", keypadLayout: standardKeypadLayout}, answer: "x=4,y=4" },
    { type: 'text', data: { question: "ノート3冊と鉛筆4本で480円、ノート1冊と鉛筆2本で180円です。ノート1冊、鉛筆1本の値段はそれぞれいくらですか？（ノート:x円, 鉛筆:y円）", keypadLayout: standardKeypadLayout}, answer: "x=120,y=30" },
  ],
  "数の問題(基)": [
    {
      type: 'text',
      data: {
        question: "大小2つの数があり、その和は11、差は5です。この2つの数を求めなさい。(大きい数をx, 小さい数をyとして答えてください)",
        hint: "「和」と「差」で2つの式を立てましょう。x+y=11 と x-y=5 です。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=8,y=3"
    },
    {
      type: 'text',
      data: {
        question: "2つの数があり、その和は10です。また、大きい方の数は小さい方の数の2倍より1大きいです。この2つの数を求めなさい。(大きい数をx, 小さい数をyとして答えてください)",
        hint: "2つの数の和の式と、大小関係の式を立てましょう。x+y=10 と x=2y+1 です。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=7,y=3"
    },
    {
      type: 'text',
      data: {
        question: "大小2つの数があります。大きい数をx、小さい数をyとします。大きい数と小さい数の2倍の和は19です。また、大きい数の2倍と小さい数の3倍の和は33です。この2つの数を求めなさい。",
        hint: "問題文をそのまま式に直してみましょう。x+2y=19 と 2x+3y=33 です。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=9,y=5"
    },
    {
      type: 'text',
      data: {
        question: "2桁の自然数があります。この数の各位の数字の和は12です。また、この数の十の位の数字と一の位の数字を入れかえてできる数は、もとの数より36大きくなります。もとの自然数の十の位をx、一の位をyとして、xとyの値を求めなさい。",
        hint: "もとの数は10x+y、入れかえた数は10y+xと表せます。x+y=12 と 10y+x = (10x+y)+36 の2つの式を立てましょう。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=4,y=8"
    },
    {
      type: 'text',
      data: {
        question: "2桁の自然数があります。十の位の数字は一の位の数字より5大きいです。また、もとの自然数は、各位の数字の和の8倍に等しいです。もとの自然数の十の位をx、一の位をyとして、xとyの値を求めなさい。",
        hint: "十の位と一の位の関係の式と、もとの自然数と各位の和の関係の式を立てましょう。x = y+5 と 10x+y = 8(x+y) です。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=7,y=2"
    }
  ],
  "割合(準備)": [
    {
      type: 'text',
      data: {
        question: "xの20%を文字式で表しなさい。",
        hint: "パーセント(%)を小数に直すには100で割ります。20%は0.2です。",
        keypadLayout: percentageKeypadLayout
      },
      answer: "0.2x"
    },
    {
      type: 'text',
      data: {
        question: "yの3割を文字式で表しなさい。",
        hint: "「割」を小数に直すには10で割ります。3割は0.3です。",
        keypadLayout: percentageKeypadLayout
      },
      answer: "0.3y"
    },
    {
      type: 'text',
      data: {
        question: "定価x円の品物を15%引きで買ったときの代金を、文字式で表しなさい。",
        hint: "15%引きは、もとの値段の (100-15)%=85% になります。85%を小数で表すと0.85です。",
        keypadLayout: percentageKeypadLayout
      },
      answer: "0.85x"
    },
    {
      type: 'text',
      data: {
        question: "原価y円の品物に25%の利益を見込んで定価をつけた。定価を文字式で表しなさい。",
        hint: "25%増しは、もとの値段の (100+25)%=125% になります。125%は小数で1.25です。",
        keypadLayout: percentageKeypadLayout
      },
      answer: "1.25y"
    },
    {
      type: 'text',
      data: {
        question: "去年の生徒数がx人で、今年は5%増えた。今年の生徒数を文字式で表しなさい。",
        hint: "5%増えたということは、去年の105%になったということです。105%を小数で表しましょう。",
        keypadLayout: percentageKeypadLayout
      },
      answer: "1.05x"
    }
  ],
  "割合(標準)": [
    {
      type: 'text',
      data: {
        question: "ある中学校の去年の生徒数は男女合わせて500人でした。今年は去年に比べて男子が10%増え、女子が5%減ったので、全体で11人増えました。去年の男子、女子の生徒数をそれぞれ求めなさい。(男子:x人, 女子:y人)",
        hint: "去年の男子をx人、女子をy人とします。「去年の合計人数」の式と、「今年の増減人数」の式を立てて連立方程式を解きましょう。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=240,y=260"
    },
    {
      type: 'text',
      data: {
        question: "ある高校の全校生徒は、去年は600人でした。今年は男子が5%減り、女子が10%増えたため、全体で6人増えました。去年の男子、女子の生徒数をそれぞれ求めなさい。(男子:x人, 女子:y人)",
        hint: "男子の生徒数は減っているので、変化を表す式ではマイナスを使うことに注意しましょう。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=360,y=240"
    },
    {
      type: 'text',
      data: {
        question: "ある店で、定価が合わせて5000円のシャツとズボンを特売で買いました。シャツは定価の20%引き、ズボンは定価の30%引きだったので、合計金額は3700円になりました。シャツとズボンの定価はそれぞれいくらですか？(シャツの定価:x円, ズボンの定価:y円)",
        hint: "「定価の合計」の式と、「割引後の代金の合計」の式を立てましょう。20%引きは定価の80% (0.8倍) の値段になります。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=2000,y=3000"
    },
    {
      type: 'text',
      data: {
        question: "商品Aと商品Bがあります。Aを5個とBを3個買うと代金は1050円です。Aの値段が10%値上がりし、Bの値段が20%値下がりしたときに、同じ数を買うと代金は1020円になります。もとの商品AとBの値段はそれぞれいくらですか？(A:x円, B:y円)",
        hint: "もとの値段での代金の式と、値段が変わった後の代金の式を立てましょう。10%値上がりは1.1倍、20%値下がりは0.8倍です。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=120,y=150"
    },
    {
      type: 'text',
      data: {
        question: "ある兄弟の先月のおこづかいの合計は4500円でした。今月は兄が10%増え、弟が10%減ったので、兄弟の合計は4400円になりました。先月の兄と弟のおこづかいはそれぞれいくらでしたか？(兄:x円, 弟:y円)",
        hint: "「先月の合計」の式と、「今月の合計」の式を立てましょう。10%増えたら1.1倍、10%減ったら0.9倍になります。",
        keypadLayout: standardKeypadLayout
      },
      answer: "x=1750,y=2750"
    }
  ],
  "濃度(準備)": [
    {
      type: 'text',
      data: {
        question: "5%の食塩水 x g に含まれる食塩の重さを、xを使った式で表しなさい。",
        hint: "食塩の重さ = 食塩水の重さ × (濃度/100) です。5%は小数で0.05です。",
        keypadLayout: concentrationPrepKeypadLayout,
      },
      answer: "0.05x"
    },
    {
      type: 'text',
      data: {
        question: "8%の食塩水 y g に含まれる水の重さを、yを使った式で表しなさい。",
        hint: "水溶液全体の割合を1(100%)と考えましょう。食塩が8%なら、水は (100-8)%=92% です。",
        keypadLayout: concentrationPrepKeypadLayout,
      },
      answer: "0.92y"
    },
    {
      type: 'text',
      data: {
        question: "水 x gに食塩 y gを溶かしたときの食塩水の濃度を求める式を、xとyを使って分数で表しなさい。(パーセント表示ではありません)",
        hint: "濃度 = (溶質(食塩)の重さ) / (溶液(食塩水)全体の重さ) です。食塩水全体の重さは (x+y)g です。",
        keypadLayout: concentrationPrepKeypadLayout,
      },
      answer: "y/(x+y)"
    },
    {
      type: 'text',
      data: {
        question: "15%の食塩水 200 g に含まれる食塩の重さは何gですか？",
        hint: "200gの15%が食塩の重さです。",
        keypadLayout: concentrationPrepKeypadLayout,
      },
      answer: "30"
    },
    {
      type: 'text',
      data: {
        question: "12%の食塩水 300 g に含まれる水の重さは何gですか？",
        hint: "まず食塩の重さを計算し、全体の重さから引きましょう。",
        keypadLayout: concentrationPrepKeypadLayout,
      },
      answer: "264"
    }
  ],
  "食塩濃度(標)": [
    {
      type: 'text',
      data: {
        question: "5%の食塩水と10%の食塩水を混ぜて、8%の食塩水を500g作りたい。それぞれ何gずつ混ぜればよいですか？ (5%食塩水をx g, 10%食塩水をy gとして答えなさい)",
        hint: "「食塩水の重さの合計」の式と、「含まれる食塩の重さの合計」の式を立てて連立方程式を作りましょう。",
        keypadLayout: standardKeypadLayout,
      },
      answer: "x=200,y=300"
    },
    {
      type: 'text',
      data: {
        question: "3%の食塩水と8%の食塩水を混ぜて、6%の食塩水を400g作りたい。それぞれ何gずつ混ぜればよいですか？ (3%食塩水をx g, 8%食塩水をy gとして答えなさい)",
        keypadLayout: standardKeypadLayout,
      },
      answer: "x=160,y=240"
    },
    {
      type: 'text',
      data: {
        question: "濃度の異なる食塩水AとBがあります。Aを200gとBを300g混ぜると7%の食塩水になり、Aを300gとBを200g混ぜると8%の食塩水になります。AとBの濃度はそれぞれ何%ですか？ (Aの濃度をx%, Bの濃度をy%として答えなさい)",
        hint: "Aの濃度をx%、Bの濃度をy%として、それぞれの混ぜ方で「食塩の重さ」の等式を2つ作りましょう。",
        keypadLayout: standardKeypadLayout,
      },
      answer: "x=10,y=5"
    },
    {
      type: 'text',
      data: {
        question: "銅を60%含む合金Aと、銅を85%含む合金Bを混ぜて、銅を70%含む合金を500g作りたい。合金Aと合金Bはそれぞれ何g必要ですか？ (合金Aをx g, 合金Bをy gとして答えなさい)",
        hint: "食塩水の問題と考え方は同じです。「合金全体の重さ」と「含まれる銅の重さ」で式を立てましょう。",
        keypadLayout: standardKeypadLayout,
      },
      answer: "x=300,y=200"
    },
    {
      type: 'text',
      data: {
        question: "4%の食塩水に水を加えて2.5%の食塩水を320g作りたい。4%の食塩水と水はそれぞれ何g必要ですか？ (4%食塩水をx g, 水をy gとして答えなさい)",
        hint: "水の濃度は0%として考えましょう。「食塩水の重さ」と「食塩の重さ」で式を立てます。",
        keypadLayout: standardKeypadLayout,
      },
      answer: "x=200,y=120"
    }
  ],
  "速度(準備)": [
    {
      type: 'text',
      data: {
        question: "毎時xkmの速さで走る車がykmを走る時間を文字式で表しなさい。",
        hint: "時間 = 距離 ÷ 速さ の公式を使いましょう。",
        keypadLayout: speedPrepKeypadLayout,
      },
      answer: "y/x"
    },
    {
      type: 'text',
      data: {
        question: "毎時xkmの速さで走る車がy時間で走る距離を文字式で表しなさい。",
        hint: "距離 = 速さ × 時間 の公式を使いましょう。",
        keypadLayout: speedPrepKeypadLayout,
      },
      answer: "xy"
    },
    {
      type: 'text',
      data: {
        question: "xkmの距離をy時間で走る車の速度を、毎時何kmか文字式で表しなさい。",
        hint: "速さ = 距離 ÷ 時間 の公式を使いましょう。",
        keypadLayout: speedPrepKeypadLayout,
      },
      answer: "x/y"
    },
    {
      type: 'text',
      data: {
        question: "毎時xkmの速さで走る車が30分で走る距離を文字式で表しなさい。",
        hint: "単位を時間に合わせましょう。30分は 30/60 = 1/2 時間です。",
        keypadLayout: speedPrepKeypadLayout,
      },
      answer: "x/2"
    },
    {
      type: 'text',
      data: {
        question: "xkmの距離を15分で走る車の速度を、毎時何kmか文字式で表しなさい。",
        hint: "単位を時間に合わせましょう。15分は 15/60 = 1/4 時間です。",
        keypadLayout: speedPrepKeypadLayout,
      },
      answer: "4x"
    }
  ],
  "速度問題(標1)": [
    { type: 'text', data: { question: "家から1800m離れた駅まで、はじめは毎分60mで歩き、途中から毎分180mで走って、合計20分かかった。歩いた時間と走った時間を求めよ。(歩いた時間:x分, 走った時間:y分)", hint: "時間の合計の式と、距離の合計の式を立てましょう。x + y = 20 と 60x + 180y = 1800 です。", keypadLayout: standardKeypadLayout }, answer: "x=15,y=5" },
    { type: 'text', data: { question: "A町からB町を経由してC町まで240kmの道のりを、A-B間は時速40km、B-C間は時速80kmで走り、合計4時間かかった。A-B間とB-C間にかかった時間をそれぞれ求めよ。(A-B時間:x時間, B-C時間:y時間)", hint: "かかった時間の合計と、進んだ距離の合計で連立方程式を立てます。", keypadLayout: standardKeypadLayout}, answer: "x=2,y=2" },
    { type: 'text', data: { question: "周囲1kmの池の周りを、AさんとBさんが同じ地点から反対方向に出発すると6分で出会い、同じ方向に出発すると30分でAさんがBさんを追い抜く。Aさん、Bさんの分速をそれぞれ求めよ。(Aの速さ:分速xm, Bの速さ:分速ym, A>B)", hint: "反対方向は「2人の距離の和=池の周囲」、同じ方向は「2人の距離の差=池の周囲」で式を立てます。", keypadLayout: standardKeypadLayout }, answer: "x=100,y=200/3" },
    { type: 'text', data: { question: "峠をはさんで12km離れたA、B両地がある。AからBまで、上りは毎時3km、下りは毎時5kmで歩いたら3時間かかった。Aから峠までの道のりと、峠からBまでの道のりを求めよ。(A-峠:xkm, 峠-B:ykm)", hint: "道のりの合計と、かかった時間の合計で式を立てます。時間は「距離÷速さ」です。", keypadLayout: standardKeypadLayout}, answer: "x=4.5,y=7.5" },
    { type: 'text', data: { question: "家から2700m離れた学校まで、歩いたり走ったりして合計30分かかった。歩く速さは毎分60m、走る速さは毎分150mである。歩いた時間と走った時間をそれぞれ求めなさい。(歩いた時間:x分, 走った時間:y分)", hint: "時間の合計と、距離の合計で連立方程式を立てましょう。", keypadLayout: standardKeypadLayout }, answer: "x=20,y=10" },
    { type: 'text', data: { question: "家から1500mはなれた駅を往復しました。行きは10分歩き、5分走った。帰りは8分歩き、6分走った。歩く速さと、走る速さは毎分何ｍでしたか。(歩く速さ:x m/分, 走る速さ:y m/分)", hint: "「行きの距離」と「帰りの距離」で2つの式を立てましょう。距離=速さ×時間です。", keypadLayout: standardKeypadLayout }, answer: "x=75,y=150" },
    { type: 'text', data: { question: "1800mはなれた家までバスと歩きで合計20分かかりました。バスの速さを毎分300m、歩きの速さを毎分60mとして、バスに乗っていた時間と歩いた時間を求めなさい。(バスの時間:x分, 歩いた時間:y分)", hint: "「時間の合計」と「距離の合計」で2つの式を立てます。", keypadLayout: standardKeypadLayout }, answer: "x=2.5,y=17.5" },
    { type: 'text', data: { question: "一周2kmの池があります。A君とB君がそれぞれ反対方向に走ると8分で出会います。また同じ方向に走ると40分後にA君はB君に追いつきます。A君とB君の走る速さを毎分何mか求めなさい。(Aの速さ:x m/分, Bの速さ:y m/分, A>B)", hint: "反対方向は「速さの和」、同じ方向は「速さの差」で考えます。距離は2000mです。", keypadLayout: standardKeypadLayout }, answer: "x=150,y=100" },
    { type: 'text', data: { question: "A地からB地を通ってC地まで行くのに、A-B間を自転車で、B-C間を歩いて合計3時間かかった。道のりは全部で30kmである。自転車の速さを時速15km、歩く速さを時速5kmとするとき、自転車で進んだ道のりと歩いた道のりを求めなさい。(自転車の道のり:x km, 歩いた道のり:y km)", hint: "「道のりの合計」と「時間の合計」で式を立てます。時間は「距離÷速さ」です。", keypadLayout: standardKeypadLayout }, answer: "x=22.5,y=7.5" },
    { type: 'text', data: { question: "ある列車が、長さ440mの鉄橋を渡り始めてから渡り終わるまでに30秒かかり、長さ800mのトンネルに入り終えてから出始めるまでに40秒かかりました。この列車の速さと長さを求めなさい。(速さ:秒速xm, 長さ:ym)", hint: "渡り始めから渡り終わりまでの距離は「鉄橋+列車」、トンネルに隠れている距離は「トンネル-列車」です。", keypadLayout: standardKeypadLayout }, answer: "x=20,y=160" }
  ],
  "速度問題(標2)": [
    { type: 'text', data: { question: "A君は家から28km離れた祖母の家まで、自転車とバスを乗り継いで行きました。自転車は時速20km、バスは時速40kmで走り、合計で1時間かかりました。自転車で進んだ道のりとバスで進んだ道のりをそれぞれ求めなさい。(自転車の道のり:x km, バスの道のり:y km)", hint: "道のりの合計の式 (x+y=28) と、時間の合計の式 (x/20 + y/40 = 1) を立てて連立方程式を解きましょう。", keypadLayout: standardKeypadLayout }, answer: "x=12,y=16" },
    { type: 'text', data: { question: "ある列車が、長さ510mの鉄橋を渡り始めてから渡り終わるまでに30秒かかり、長さ930mのトンネルを通過するとき、列車が完全に隠れていたのは45秒でした。この列車の速さと長さを求めなさい。(速さ:秒速xm, 長さ:ym)", hint: "渡りきる距離は「鉄橋＋列車長」、完全に隠れる距離は「トンネルー列車長」です。距離=速さ×時間で式を立てましょう。", keypadLayout: standardKeypadLayout }, answer: "x=19.2,y=66" },
    { type: 'text', data: { question: "弟が家を出発して分速60mで歩いています。兄が弟の忘れ物に気づき、10分後に分速210mの自転車で追いかけました。兄は家を出発してから何分後に弟に追いつきますか？また、追いついたのは家から何mの地点ですか？ (兄の時間:x分, 家からの距離:y m)", hint: "兄が進んだ距離と、弟が進んだ距離が等しい地点で追いつきます。弟は兄より10分長く歩いていることに注意して式を立てましょう。", keypadLayout: standardKeypadLayout }, answer: "x=4,y=840" },
    { type: 'text', data: { question: "周囲が3kmの池があります。A君とB君が同じ地点から同時に出発します。反対方向に進むと12分で出会い、同じ方向に進むと60分でA君がB君をちょうど一周追い抜きます。A君、B君の分速をそれぞれ求めなさい。(Aの分速:xm, Bの分速:ym, A君の方が速い)", hint: "反対方向は「2人の進んだ距離の和＝池の周囲」、同じ方向は「2人の進んだ距離の差＝池の周囲」で式を立てます。距離は3000mです。", keypadLayout: standardKeypadLayout }, answer: "x=150,y=100" },
    { type: 'text', data: { question: "静水時の速さが時速xkmの船と、時速ykmで流れる川があります。この船で24kmの距離を上るのに3時間、同じ距離を下るのに2時間かかります。船の静水時の速さと川の流れの速さを求めなさい。(船の速さ:x km/h, 川の速さ:y km/h)", hint: "上りの速さは x-y、下りの速さは x+y です。速さ=距離÷時間で式を立てましょう。", keypadLayout: standardKeypadLayout }, answer: "x=10,y=2" }
  ],
  "速度問題(標3)": [
    { type: 'text', data: { question: "A町から峠を越えてB町まで往復します。A町から峠までの上りは時速2km、峠からB町までの下りは時速4kmで進みます。行きは4時間かかり、帰りは5時間かかりました。A町から峠まで、峠からB町までの道のりをそれぞれ求めなさい。(Aから峠:x km, 峠からB:y km)", hint: "行きはA→峠が上り、峠→Bが下りです。帰りはB→峠が上り、峠→Aが下りになります。「行きにかかった時間」と「帰りにかかった時間」で2つの式を立てましょう。", keypadLayout: standardKeypadLayout }, answer: "x=4,y=8" },
    { type: 'text', data: { question: "湖をボートで一周するのに、A地点からB地点までは流れに沿って進み40分、B地点からA地点までは流れに逆らって進み1時間かかりました。湖は一周6kmです。ボートの静水時の速さと、湖の流れの速さはそれぞれ分速何mですか？ (ボートの速さ:分速xm, 流れの速さ:分速ym)", hint: "A→Bを「下り」、B→Aを「上り」と考えましょう。距離は片道3000mです。下りの速さはx+y、上りの速さはx-yです。", keypadLayout: standardKeypadLayout }, answer: "x=62.5,y=12.5" },
    { type: 'text', data: { question: "A君の家から学校までは、平坦な道と上り坂があり、合わせて2kmです。家から学校まで行くのに、平坦な道を分速80m、上り坂を分速60mで進むと29分かかります。帰りは、同じ道を下り坂を分速100m、平坦な道を分速80mで進むと22分かかります。平坦な道と坂道の道のりはそれぞれ何mですか？ (平坦な道:xm, 坂道:ym)", hint: "「道のりの合計」「行きにかかった時間」「帰りにかかった時間」のうち、2つを使って式を立てます。", keypadLayout: standardKeypadLayout }, answer: "x=1040,y=960" },
    { type: 'text', data: { question: "A地とB地の間の片道12kmの道を往復します。行きは上り坂と下り坂があり、上りは時速2km、下りは時速4kmで進むと4時間かかりました。帰りは同じ道を通って5時間かかりました。A地からB地までの上り坂と下り坂の道のりはそれぞれ何kmですか？(行きの時の上り坂:x km, 下り坂:y km)", hint: "行きと帰りで上り坂と下り坂が入れ替わります。道のりの合計の式と、行きか帰りの時間の式を使いましょう。", keypadLayout: standardKeypadLayout }, answer: "x=4,y=8" },
    { type: 'text', data: { question: "A市からB市まで120kmあります。普通列車で行くと、急行列車で行くより30分多くかかります。また、急行列車の速さは普通列車の速さの1.5倍です。普通列車と急行列車の速さはそれぞれ時速何kmですか？(普通列車の速さ:x km/h, 急行列車の速さ:y km/h)", hint: "時間の差が30分(0.5時間)であることと、速さの関係で2つの式を立てましょう。時間は「距離÷速さ」です。", keypadLayout: standardKeypadLayout }, answer: "x=80,y=120" }
  ]
};
