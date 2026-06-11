import type { ProblemSet } from '../types';

export const geometryAngleProblems: ProblemSet = {
  "角度 基礎": [
    {
        type: 'text',
        data: {
            question: "図の∠AOBと∠CODのように向かい合っている角を何というか答えよ。",
            svg: '<svg viewBox="100 70 190 130" preserveAspectRatio="xMidYMid meet"><line x1="140" y1="90" x2="280" y2="160" style="stroke:white;stroke-width:1.5" /><line x1="140" y1="180" x2="240" y2="80" style="stroke:white;stroke-width:1.5" /><path style="fill:none;stroke:white;" d="M 213,126 A 14 14 0 0 0 210,111"/><text x="142" y="89" font-size="16" fill="white">A</text><text x="132" y="188" font-size="16" fill="white">B</text><text x="279" y="169" font-size="16" fill="white">C</text><text x="240" y="82" font-size="16" fill="white">D</text><path style="fill:none;stroke:white;" d="M 188,114 A 14 14 0 0 0 191,130"/><text x="196" y="133" font-size="16" fill="white">O</text></svg>',
            options: ["対頂角", "同位角", "錯角", "内角"]
        },
        answer: "対頂角"
    },
    {
        type: 'text',
        data: {
            question: "図2に示した多角形の内側の角を何というか。",
            svg: '<svg viewBox="120 105 160 70" preserveAspectRatio="xMidYMid meet"><polygon style="fill:none;stroke:white;stroke-width:1.5" points="140,160 180,120 260,160" /><path style="fill:none;stroke:white;" d="M 150,161 A 10 10 0 0 0 147,153"/><path style="fill:none;stroke:white;" d="M 174,126 A 10 10 0 0 0 188,124"/><path style="fill:none;stroke:white;" d="M 247,154 A 14 14 0 0 0 245,160"/><text x="134" y="115" font-size="16" fill="white">図2</text></svg>',
            options: ["内角", "外角", "頂角", "底角"]
        },
        answer: "内角"
    },
    {
        type: 'text',
        data: {
            question: "図3に示した、各辺を延長した線と隣の辺との角を何というか。",
            svg: '<svg viewBox="120 100 170 80" preserveAspectRatio="xMidYMid meet"><text x="134" y="115" font-size="16" fill="white">図3</text><line x1="120" y1="160" x2="260" y2="160" style="stroke:white;stroke-width:1.5" /><line x1="180" y1="120" x2="280" y2="170" style="stroke:white;stroke-width:1.5" /><line x1="140" y1="160" x2="200" y2="100" style="stroke:white;stroke-width:1.5" /><path style="fill:none;stroke:white;" d="M 189,125 A 10 10 0 0 0 187,113"/><path style="fill:none;stroke:white;" d="M 148,152 A 20 20 0 0 0 131,160"/><path style="fill:none;stroke:white;" d="M 249,160 A 20 20 0 0 0 270,165"/></svg>',
            options: ["外角", "内角", "対頂角", "同位角"]
        },
        answer: "外角"
    },
     {
        type: 'text',
        data: {
            question: "多角形の内角と、それと隣り合う外角の和は何度か。",
            options: ["90°", "180°", "270°", "360°"]
        },
        answer: "180°"
    },
    {
        type: 'text',
        data: {
            question: "図で、l//m のとき、∠a と ∠b のような位置にある角を何というか。",
            svg: '<svg viewBox="185 90 125 125" preserveAspectRatio="xMidYMid meet"><line x1="200" y1="120" x2="301" y2="117" style="stroke:white;stroke-width:1.5" /><line x1="200" y1="180" x2="302" y2="184" style="stroke:white;stroke-width:1.5" /><line x1="280" y1="100" x2="220" y2="200" style="stroke:white;stroke-width:1.5" /><path style="fill:none;stroke:#f87171;" d="M 274,110 A 10 10 0 0 0 261,118"/><text x="260" y="105" font-size="16" fill="#f87171">a</text><path style="fill:none;stroke:#60a5fa;" d="M 235,175 A 10 10 0 0 0 224,181"/><text x="223" y="170" font-size="16" fill="#60a5fa">b</text></svg>',
            options: ["対頂角", "同位角", "錯角", "内角"]
        },
        answer: "同位角"
    },
    {
        type: 'text',
        data: {
            question: "図で、l//m のとき、∠a と ∠c のような位置にある角を何というか。",
            svg: '<svg viewBox="185 90 125 125" preserveAspectRatio="xMidYMid meet"><line x1="200" y1="120" x2="301" y2="117" style="stroke:white;stroke-width:1.5" /><line x1="200" y1="180" x2="302" y2="184" style="stroke:white;stroke-width:1.5" /><line x1="280" y1="100" x2="220" y2="200" style="stroke:white;stroke-width:1.5" /><path style="fill:none;stroke:#f87171;" d="M 259,119 A 10 10 0 0 0 263,128"/><text x="273" y="138" font-size="16" fill="#f87171">a</text><path style="fill:none;stroke:#60a5fa;" d="M 242,182 A 10 10 0 0 0 237,173"/><text x="245" y="170" font-size="16" fill="#60a5fa">c</text></svg>',
            options: ["対頂角", "同位角", "錯角", "内角"]
        },
        answer: "錯角"
    },
    {
        type: 'text',
        data: {
            question: "図について、∠AODの対頂角を答えよ。",
            svg: '<svg viewBox="150 30 180 150" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="60" x2="320" y2="140" style="stroke:white;stroke-width:1.5" /><line x1="260" y1="40" x2="220" y2="160" style="stroke:white;stroke-width:1.5" /><text x="153" y="63" font-size="16" fill="white">A</text><text x="214" y="170" font-size="16" fill="white">B</text><text x="318" y="150" font-size="16" fill="white">C</text><text x="260" y="43" font-size="16" fill="white">D</text><text x="242" y="103" font-size="16" fill="white">O</text></svg>'
        },
        answer: "∠BOC"
    },
    {
        type: 'text',
        data: {
            question: "図について、もう一組の対頂角を「∠Xと∠Y」の形で答えよ。",
            svg: '<svg viewBox="150 30 180 150" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="60" x2="320" y2="140" style="stroke:white;stroke-width:1.5" /><line x1="260" y1="40" x2="220" y2="160" style="stroke:white;stroke-width:1.5" /><text x="153" y="63" font-size="16" fill="white">A</text><text x="214" y="170" font-size="16" fill="white">B</text><text x="318" y="150" font-size="16" fill="white">C</text><text x="260" y="43" font-size="16" fill="white">D</text><text x="242" y="103" font-size="16" fill="white">O</text></svg>'
        },
        answer: "∠AOBと∠DOC"
    },
    {
        type: 'text',
        data: {
            question: "図で∠AOB=42°である。∠DOCの角度を求めよ。",
            svg: '<svg viewBox="155 160 140 80" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="220" x2="280" y2="180" style="stroke:white;stroke-width:1.5"/><line x1="180" y1="190" x2="280" y2="210" style="stroke:white;stroke-width:1.5"/><text x="169" y="193" font-size="16" fill="white">A</text><text x="160" y="232" font-size="16" fill="white">B</text><text x="278" y="221" font-size="16" fill="white">C</text><text x="281" y="185" font-size="16" fill="white">D</text><text x="219" y="195" font-size="16" fill="white">O</text></svg>'
        },
        answer: "42°"
    },
    {
        type: 'text',
        data: {
            question: "図で∠AOB=42°である。∠AODの角度を求めよ。",
            svg: '<svg viewBox="155 160 140 80" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="220" x2="280" y2="180" style="stroke:white;stroke-width:1.5"/><line x1="180" y1="190" x2="280" y2="210" style="stroke:white;stroke-width:1.5"/><text x="169" y="193" font-size="16" fill="white">A</text><text x="160" y="232" font-size="16" fill="white">B</text><text x="278" y="221" font-size="16" fill="white">C</text><text x="281" y="185" font-size="16" fill="white">D</text><text x="219" y="195" font-size="16" fill="white">O</text></svg>'
        },
        answer: "138°"
    },
    {
        type: 'text',
        data: {
            question: "図で∠AOB=52°、∠COD=63°である。∠AOFの角度を求めよ。",
            svg: '<svg viewBox="180 110 155 150" preserveAspectRatio="xMidYMid meet"><line x1="200" y1="160" x2="320" y2="200" style="stroke:white;stroke-width:1.5"/><line x1="250" y1="120" x2="270" y2="240" style="stroke:white;stroke-width:1.5"/><line x1="220" y1="200" x2="320" y2="150" style="stroke:white;stroke-width:1.5"/><text x="239" y="118" font-size="16" fill="white">A</text><text x="190" y="166" font-size="16" fill="white">B</text><text x="214" y="211" font-size="16" fill="white">C</text><text x="267" y="250" font-size="16" fill="white">D</text><text x="321" y="208" font-size="16" fill="white">E</text><text x="322" y="154" font-size="16" fill="white">F</text><text x="263" y="194" font-size="16" fill="white">O</text></svg>'
        },
        answer: "63°"
    },
    {
        type: 'text',
        data: {
            question: "図で∠AOB=52°、∠COD=63°である。∠FOEの角度を求めよ。",
            svg: '<svg viewBox="180 110 155 150" preserveAspectRatio="xMidYMid meet"><line x1="200" y1="160" x2="320" y2="200" style="stroke:white;stroke-width:1.5"/><line x1="250" y1="120" x2="270" y2="240" style="stroke:white;stroke-width:1.5"/><line x1="220" y1="200" x2="320" y2="150" style="stroke:white;stroke-width:1.5"/><text x="239" y="118" font-size="16" fill="white">A</text><text x="190" y="166" font-size="16" fill="white">B</text><text x="214" y="211" font-size="16" fill="white">C</text><text x="267" y="250" font-size="16" fill="white">D</text><text x="321" y="208" font-size="16" fill="white">E</text><text x="322" y="154" font-size="16" fill="white">F</text><text x="263" y="194" font-size="16" fill="white">O</text></svg>'
        },
        answer: "65°"
    },
    {
        type: 'text',
        data: {
            question: "図でDは辺BCの延長線上の点である。∠ACB=112°のとき、∠ACDの大きさを求めよ。",
            svg: '<svg viewBox="200 130 150 110" preserveAspectRatio="xMidYMid meet"><polyline style="fill:none;stroke:white;stroke-width:1.5" points="340,220 220,220 320,140 300,220" /><text x="318" y="139" font-size="16" fill="white">A</text><text x="213" y="225" font-size="16" fill="white">B</text><text x="294" y="231" font-size="16" fill="white">C</text><text x="342" y="225" font-size="16" fill="white">D</text></svg>'
        },
        answer: "68°"
    }
],
 "平行線の錯角・同位角（基本）": [
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="180 100 120 130" preserveAspectRatio="xMidYMid meet"><line x1="180" y1="120" x2="280" y2="120" style="fill:none;stroke:white;" /><line x1="180" y1="200" x2="280" y2="200" style="fill:none;stroke:white;" /><line x1="220" y1="100" x2="220" y2="230" style="fill:none;stroke:white;" transform="translate(220,120) rotate(-24) translate(-220,-120)" /><text x="283" y="125" font-size="12" fill="white">l</text><text x="283" y="203" font-size="12" fill="white">m</text><path d="M 224,129 A 6 6 0 0 0 230,120" style="fill:none;stroke:white;"/><path d="M 251,190 A 11 11 0 0 0 246,200" style="fill:none;stroke:white;"/><text x="230" y="135" font-size="12" fill="white">66°</text><text x="238" y="194" font-size="12" fill="white">x</text></svg>' }, answer: "66°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="190 100 120 130" preserveAspectRatio="xMidYMid meet"><line x1="180" y1="120" x2="280" y2="120" style="fill:none;stroke:white;" /><line x1="180" y1="200" x2="280" y2="200" style="fill:none;stroke:white;" /><text x="287" y="124" font-size="12" fill="white">l</text><text x="282" y="202" font-size="12" fill="white">m</text><line x1="260" y1="100" x2="260" y2="230" transform="translate(260,100) rotate(16) translate(-260,-100)" style="fill:none;stroke:white;" /><path d="M 222,200 A 11 11 0 0 0 229,209" style="fill:none;stroke:white;"/><path d="M 246,120 A 9 9 0 0 0 252,128" style="fill:none;stroke:white;"/><text x="205" y="217" font-size="12" fill="white">74°</text><text x="238" y="133" font-size="12" fill="white">x</text></svg>' }, answer: "74°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="210 60 150 130" preserveAspectRatio="xMidYMid meet"><line x1="220" y1="160" x2="300" y2="80" style="fill:none;stroke:white;" /><line x1="260" y1="200" x2="340" y2="120" style="fill:none;stroke:white;" /><line x1="240" y1="100" x2="320" y2="180" style="fill:none;stroke:white;" transform="translate(280,140) rotate(-3) translate(-280,-140)" /><path d="M 253,115 A 9 9 0 0 0 253,128" style="fill:none;stroke:white;"/><path d="M 306,165 A 8 8 0 0 0 306,153" style="fill:none;stroke:white;"/><text x="311" y="162" font-size="12" fill="white">x</text><text x="231" y="127" font-size="12" fill="white">87°</text><text x="303" y="80" font-size="12" fill="white">l</text><text x="341" y="129" font-size="12" fill="white">m</text></svg>' }, answer: "87°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="210 150 210 80" preserveAspectRatio="xMidYMid meet"><line x1="220" y1="220" x2="340" y2="160" style="fill:none;stroke:white;" /><line x1="300" y1="220" x2="420" y2="160" style="fill:none;stroke:white;" /><line x1="260" y1="220" x2="380" y2="160" style="fill:none;stroke:white;" transform="translate(320,190) rotate(28) translate(-320,-190)" /><text x="345" y="177" font-size="12" fill="white">152°</text><path d="M 366,187 A 8 8 0 0 0 349,191" style="fill:none;stroke:white;"/><path d="M 300,189 A 18 18 0 0 0 298,181" style="fill:none;stroke:white;"/><text x="303" y="186" font-size="12" fill="white">x</text><text x="218" y="215" font-size="12" fill="white">l</text><text x="293" y="217" font-size="12" fill="white">m</text></svg>' }, answer: "28°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="160 130 170 100" preserveAspectRatio="xMidYMid meet"><line x1="200" y1="140" x2="320" y2="200" style="fill:none;stroke:white;" /><line x1="260" y1="220" x2="140" y2="160" style="fill:none;stroke:white;" /><line x1="180" y1="160" x2="300" y2="220" style="fill:none;stroke:white;" transform="translate(220,180) rotate(-56) translate(-220,-180)" /><path d="M 213,197 A 13 13 0 0 0 212,185" style="fill:none;stroke:white;"/><path d="M 258,159 A 12 12 0 0 0 237,160" style="fill:none;stroke:white;"/><text x="215" y="195" font-size="12" fill="white">56°</text><text x="246" y="150" font-size="12" fill="white">x</text><text x="315" y="195" font-size="12" fill="white">l</text><text x="255" y="215" font-size="12" fill="white">m</text></svg>' }, answer: "124°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="300 100 140 130" preserveAspectRatio="xMidYMid meet"><line x1="360" y1="80" x2="320" y2="200" style="fill:none;stroke:white;" /><line x1="420" y1="100" x2="380" y2="220" style="fill:none;stroke:white;" /><line x1="390" y1="90" x2="350" y2="210" style="fill:none;stroke:white;" transform="translate(370,150) rotate(-97) translate(-370,-150)" /><text x="315" y="197" font-size="12" fill="white">l</text><text x="370" y="215" font-size="12" fill="white">m</text><path d="M 343,133 A 14 14 0 0 0 326,142" style="fill:none;stroke:white;"/><path d="M 412,159 A 11 11 0 0 0 404,148" style="fill:none;stroke:white;"/><text x="411" y="151" font-size="12" fill="white">x</text><text x="321" y="131" font-size="12" fill="white">97°</text></svg>' }, answer: "83°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="170 130 160 120" preserveAspectRatio="xMidYMid meet"><line x1="180" y1="160" x2="320" y2="160" style="fill:none;stroke:white;" /><line x1="180" y1="220" x2="320" y2="220" style="fill:none;stroke:white;" /><line x1="250" y1="140" x2="250" y2="260" style="fill:none;stroke:white;" transform="translate(250,160) rotate(-32) translate(-250,-160)" /><line x1="250" y1="140" x2="250" y2="250" style="fill:none;stroke:white;" transform="translate(250,160) rotate(20) translate(-250,-160)" /><path d="M 294,231 A 12 12 0 0 0 300,220" style="fill:none;stroke:white;"/><path d="M 254,150 A 13 13 0 0 0 244,152" style="fill:none;stroke:white;"/><path d="M 240,160 A 10 10 0 0 0 247,170" style="fill:none;stroke:white;"/><text x="184" y="157" font-size="12" fill="white">l</text><text x="181" y="219" font-size="12" fill="white">m</text><text x="301" y="236" font-size="12" fill="white">58°</text><text x="240" y="146" font-size="12" fill="white">52°</text><text x="232" y="175" font-size="12" fill="white">x</text></svg>' }, answer: "70°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="210 120 160 130" preserveAspectRatio="xMidYMid meet"><line x1="220" y1="140" x2="360" y2="140" style="fill:none;stroke:white;" /><line x1="220" y1="220" x2="360" y2="220" style="fill:none;stroke:white;" /><line x1="260" y1="120" x2="260" y2="250" style="fill:none;stroke:white;" transform="translate(260,140) rotate(12) translate(-260,-140)" /><line x1="260" y1="120" x2="260" y2="265" style="fill:none;stroke:white;" transform="translate(260,140) rotate(-42) translate(-260,-140)" /><path d="M 233,220 A 11 11 0 0 0 241,229" style="fill:none;stroke:white;"/><path d="M 258,153 A 12 12 0 0 0 269,150" style="fill:none;stroke:white;"/><path d="M 253,132 A 11 11 0 0 0 249,140" style="fill:none;stroke:white;"/><text x="242" y="137" font-size="12" fill="white">x</text><text x="216" y="237" font-size="12" fill="white">68°</text><text x="257" y="167" font-size="12" fill="white">64°</text><text x="350" y="137" font-size="12" fill="white">l</text><text x="346" y="216" font-size="12" fill="white">m</text></svg>' }, answer: "48°" },
    { type: 'text', data: { question: "図でl // mである。∠xの大きさを求めよ。", svg: '<svg viewBox="220 60 150 130" preserveAspectRatio="xMidYMid meet"><line x1="220" y1="100" x2="360" y2="100" style="fill:none;stroke:white;" /><line x1="220" y1="160" x2="360" y2="160" style="fill:none;stroke:white;" /><line x1="260" y1="180" x2="260" y2="50" style="fill:none;stroke:white;"  transform="translate(260,160) rotate(37) translate(-260,-160)" /><line x1="260" y1="70" x2="260" y2="180" style="fill:none;stroke:white;" transform="translate(260,160) rotate(-9) translate(-260,-160)" /><path d="M 249,89 A 12 12 0 0 0 239,100" style="fill:none;stroke:white;"/><path d="M 274,160 A 13 13 0 0 0 268,149" style="fill:none;stroke:white;"/><path d="M 254,168 A 10 10 0 0 0 262,170" style="fill:none;stroke:white;"/><text x="254" y="181" font-size="12" fill="white">x</text><text x="350" y="97" font-size="12" fill="white">l</text><text x="347" y="157" font-size="12" fill="white">m</text><text x="275" y="157" font-size="12" fill="white">53°</text><text x="226" y="93" font-size="12" fill="white">81°</text></svg>' }, answer: "46°" },
    { type: 'text', data: { question: "下の図のうち、直線lとmが平行であるものをすべて選びなさい。", svg: '<svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet"><g transform="translate(10, 20)"><text x="65" y="-5" font-size="16" fill="white">A</text><line x1="10" y1="30" x2="130" y2="30" stroke="white" stroke-width="1.5"/><line x1="10" y1="90" x2="130" y2="90" stroke="white" stroke-width="1.5"/><line x1="50" y1="10" x2="90" y2="100" stroke="white" stroke-width="1.5"/><path d="M 75,42 A 17 17 0 0 0 85,30" style="fill:none;stroke:white;"/><path d="M 102,90 A 16 16 0 0 0 85,75" style="fill:none;stroke:white;"/><text x="97" y="39" font-size="12" fill="white">83°</text><text x="68" y="85" font-size="12" fill="white">97°</text><text x="13" y="27" font-size="12" fill="white">l</text><text x="13" y="87" font-size="12" fill="white">m</text></g><g transform="translate(160, 20)"><text x="65" y="-5" font-size="16" fill="white">B</text><line x1="10" y1="30" x2="130" y2="30" stroke="white" stroke-width="1.5"/><line x1="10" y1="90" x2="130" y2="90" stroke="white" stroke-width="1.5"/><polyline points="50,10 90,70 30,100" style="fill:none;stroke:white;stroke-width:1.5;"/><path d="M 64,39 A 10 10 0 0 0 70,30" style="fill:none;stroke:white;"/><path d="M 86,61 A 10 10 0 0 0 82,74" style="fill:none;stroke:white;"/><text x="79" y="33" font-size="12" fill="white">70°</text><text x="73,68" font-size="12" fill="white">88°</text><text x="13" y="27" font-size="12" fill="white">l</text><text x="13" y="87" font-size="12" fill="white">m</text></g><g transform="translate(10, 160)"><text x="65" y="-5" font-size="16" fill="white">C</text><line x1="10" y1="30" x2="130" y2="30" stroke="white" stroke-width="1.5"/><line x1="10" y1="90" x2="130" y2="90" stroke="white" stroke-width="1.5"/><polyline points="90,10 30,40 90,70 50,90" style="fill:none;stroke:white;stroke-width:1.5;"/><path d="M 70,30 A 20 20 0 0 0 68,20" style="fill:none;stroke:white;"/><text x="73" y="28" font-size="12" fill="white">28°</text><path d="M 44,47 A 14 14 0 0 0 44,34" style="fill:none;stroke:white;"/><text x="49" y="46" font-size="12" fill="white">60°</text><path d="M 78,64 A 14 14 0 0 0 77,76" style="fill:none;stroke:white;"/><text x="55" y="76" font-size="12" fill="white">59°</text><path d="M 55,101 A 14 14 0 0 0 60,85" style="fill:none;stroke:white;"/><text x="61" y="102" font-size="12" fill="white">75°</text><text x="13" y="27" font-size="12" fill="white">l</text><text x="13" y="87" font-size="12" fill="white">m</text></g><g transform="translate(160, 160)"><text x="65" y="-5" font-size="16" fill="white">D</text><line x1="10" y1="30" x2="130" y2="30" stroke="white" stroke-width="1.5"/><line x1="10" y1="90" x2="130" y2="90" stroke="white" stroke-width="1.5"/><polyline points="40,10 20,50 30,90" style="fill:none;stroke:white;stroke-width:1.5;"/><path d="M 40,30 A 10 10 0 0 0 34,22" style="fill:none;stroke:white;"/><text x="40" y="27" font-size="12" fill="white">78°</text><path d="M 23,60 A 20 20 0 0 0 25,41" style="fill:none;stroke:white;"/><text x="27" y="55" font-size="12" fill="white">158°</text><path d="M 26,80 A 20 20 0 0 0 23,99" style="fill:none;stroke:white;"/><text x="26" y="108" font-size="12" fill="white">26°</text><text x="13" y="27" font-size="12" fill="white">l</text><text x="13" y="87" font-size="12" fill="white">m</text></g></svg>', options: ["A", "B", "C", "D"], multiple: true }, answer: "A,C" },
    { type: 'text', data: { question: "a〜eの直線のうち平行な直線の組をすべて選びなさい。", svg: '<svg viewBox="150 150 230 230" preserveAspectRatio="xMidYMid meet"><g transform="translate(260,250) rotate(-30.96) translate(-260,-250)"><line x1="200" y1="200" x2="320" y2="180" style="fill:none;stroke:white;"></line><line x1="200" y1="290" x2="320" y2="280" style="fill:none;stroke:white;"></line><line x1="200" y1="330" x2="320" y2="310" style="fill:none;stroke:white;"></line><line x1="200" y1="230" x2="320" y2="220" style="fill:none;stroke:white;"></line><line x1="280" y1="170" x2="230" y2="370" style="fill:none;stroke:white;"></line><line x1="220" y1="180" x2="340" y2="390" style="fill:none;stroke:white;"></line></g><text x="173" y="244" font-size="12" fill="white">a</text><text x="189" y="268" font-size="12" fill="white">b</text><text x="204" y="290" font-size="12" fill="white">c</text><text x="218" y="319" font-size="12" fill="white">d</text><text x="241" y="358" font-size="12" fill="white">e</text><path style="fill:none;stroke:white;" d="M 233,196 A 10 10 0 0 0 245,200"></path><path style="fill:none;stroke:white;" d="M 290,316 A 10 10 0 0 0 279,313"></path><line x1="213" y1="286" x2="308" y2="213" style="fill:none;stroke:white;"></line><text x="225" y="212" font-size="12" fill="white">67°</text><text x="280" y="310" font-size="12" fill="white">67°</text><text x="205" y="243" font-size="12" fill="white">65°</text><text x="282" y="257" font-size="12" fill="white">115°</text><path style="fill:none;stroke:white;" d="M 227,232 A 10 10 0 0 0 227,243"></path><path style="fill:none;stroke:white;" d="M 335,292 A 12 12 0 0 0 334,278"></path><text x="187" y="225" font-size="12" fill="white">f</text><text x="255" y="213" font-size="12" fill="white">g</text><text x="241" y="254" font-size="12" fill="white">h</text><text x="265" y="305" font-size="12" fill="white">i</text><text x="339" y="290" font-size="12" fill="white">j</text><text x="265" y="272" font-size="12" fill="white">51°</text></svg>', options: ["a // e", "b // d", "a // c", "c // e"], multiple: true }, answer: "a // e,b // d" },
    { type: 'text', data: { question: "∠f〜∠jのうち等しい角の組をすべて選びなさい。", svg: '<svg viewBox="150 150 230 230" preserveAspectRatio="xMidYMid meet"><g transform="translate(260,250) rotate(-30.96) translate(-260,-250)"><line x1="200" y1="200" x2="320" y2="180" style="fill:none;stroke:white;"></line><line x1="200" y1="290" x2="320" y2="280" style="fill:none;stroke:white;"></line><line x1="200" y1="330" x2="320" y2="310" style="fill:none;stroke:white;"></line><line x1="200" y1="230" x2="320" y2="220" style="fill:none;stroke:white;"></line><line x1="280" y1="170" x2="230" y2="370" style="fill:none;stroke:white;"></line><line x1="220" y1="180" x2="340" y2="390" style="fill:none;stroke:white;"></line></g><text x="173" y="244" font-size="12" fill="white">a</text><text x="189" y="268" font-size="12" fill="white">b</text><text x="204" y="290" font-size="12" fill="white">c</text><text x="218" y="319" font-size="12" fill="white">d</text><text x="241" y="358" font-size="12" fill="white">e</text><path style="fill:none;stroke:white;" d="M 233,196 A 10 10 0 0 0 245,200"></path><path style="fill:none;stroke:white;" d="M 290,316 A 10 10 0 0 0 279,313"></path><line x1="213" y1="286" x2="308" y2="213" style="fill:none;stroke:white;"></line><text x="225" y="212" font-size="12" fill="white">67°</text><text x="280" y="310" font-size="12" fill="white">67°</text><text x="205" y="243" font-size="12" fill="white">65°</text><text x="282" y="257" font-size="12" fill="white">115°</text><path style="fill:none;stroke:white;" d="M 227,232 A 10 10 0 0 0 227,243"></path><path style="fill:none;stroke:white;" d="M 335,292 A 12 12 0 0 0 334,278"></path><text x="187" y="225" font-size="12" fill="white">f</text><text x="255" y="213" font-size="12" fill="white">g</text><text x="241" y="254" font-size="12" fill="white">h</text><text x="265" y="305" font-size="12" fill="white">i</text><text x="339" y="290" font-size="12" fill="white">j</text><text x="265" y="272" font-size="12" fill="white">51°</text></svg>', options: ["∠f = ∠j", "∠g = ∠i", "∠f = ∠h", "∠g = ∠j"], multiple: true }, answer: "∠f = ∠j,∠g = ∠i" }
],
  "三角形と角(基)": [
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">60°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">80°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "40°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">45°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">75°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "60°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#60a5fa">x</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">30°</text><rect x="160" y="135" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="148" y="136" font-size="14" fill="#f87171">90°</text></svg>'
        },
        answer: "60°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">55°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">63°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "62°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">70°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#60a5fa">x</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#f87171">40°</text></svg>'
        },
        answer: "70°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">35°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">85°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "60°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 170,145 30,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="172" y="158" font-size="14" fill="white">C</text><text x="12" y="158" font-size="14" fill="white">B</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#60a5fa">x</text><rect x="20" y="135" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="35" y="136" font-size="14" fill="#f87171">90°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#f87171">52°</text></svg>'
        },
        answer: "38°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">48°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">67°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "65°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#60a5fa">x</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">72°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#f87171">54°</text></svg>'
        },
        answer: "54°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 240 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="145" x2="230" y2="145" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="163" y="158" font-size="14" fill="white">C</text><text x="225" y="158" font-size="14" fill="white">D</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">40°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">65°</text><path d="M 186,145 A 18 18 0 0 1 178,132" fill="none" stroke="white" stroke-width="1"/><text x="182" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "105°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 88,40 A 20 20 0 0 1 112,40" fill="none" stroke="white" stroke-width="1"/><text x="84" y="56" font-size="14" fill="#f87171">110°</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">25°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "45°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 240 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="145" x2="230" y2="145" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="163" y="158" font-size="14" fill="white">C</text><text x="225" y="158" font-size="14" fill="white">D</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">35°</text><path d="M 154,143 A 18 18 0 0 1 162,130" fill="none" stroke="white" stroke-width="1"/><text x="136" y="136" font-size="14" fill="#f87171">50°</text><path d="M 186,145 A 18 18 0 0 1 178,132" fill="none" stroke="white" stroke-width="1"/><text x="182" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "85°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><line x1="58" y1="67" x2="55" y2="76" stroke="white" stroke-width="1.5"/><line x1="62" y1="68" x2="59" y2="77" stroke="white" stroke-width="1.5"/><line x1="142" y1="67" x2="145" y2="76" stroke="white" stroke-width="1.5"/><line x1="138" y1="68" x2="141" y2="77" stroke="white" stroke-width="1.5"/><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#60a5fa">x</text><path d="M 46,143 A 18 18 0 0 1 38,130" fill="none" stroke="white" stroke-width="1"/><text x="44" y="136" font-size="14" fill="#f87171">65°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#f87171">65°</text></svg>'
        },
        answer: "50°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 200 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><text x="93" y="15" font-size="14" fill="white">A</text><text x="12" y="158" font-size="14" fill="white">B</text><text x="172" y="158" font-size="14" fill="white">C</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="white" stroke-width="1"/><text x="88" y="52" font-size="14" fill="#f87171">28°</text><rect x="20" y="135" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><text x="35" y="136" font-size="14" fill="#f87171">90°</text><path d="M 162,130 A 18 18 0 0 1 154,143" fill="none" stroke="white" stroke-width="1"/><text x="140" y="136" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "62°"
    }
  ],
  "三角形と角(応)": [
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 250 160" preserveAspectRatio="xMidYMid meet"><polygon points="110,20 30,140 170,140" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="140" x2="240" y2="140" stroke="white" stroke-width="1.5"/><text x="103" y="15" font-size="14" fill="white">A</text><text x="12" y="153" font-size="14" fill="white">B</text><text x="163" y="153" font-size="14" fill="white">C</text><text x="235" y="153" font-size="14" fill="white">D</text><path d="M 102,38 A 18 18 0 0 1 118,38" fill="none" stroke="white" stroke-width="1"/><text x="98" y="52" font-size="14" fill="#f87171">50°</text><path d="M 46,138 A 18 18 0 0 1 38,125" fill="none" stroke="white" stroke-width="1"/><text x="44" y="130" font-size="14" fill="#f87171">68°</text><path d="M 186,140 A 18 18 0 0 1 178,127" fill="none" stroke="white" stroke-width="1"/><text x="188" y="130" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "118°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 250 160" preserveAspectRatio="xMidYMid meet"><polygon points="110,20 30,140 170,140" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="140" x2="240" y2="140" stroke="white" stroke-width="1.5"/><text x="103" y="15" font-size="14" fill="white">A</text><text x="12" y="153" font-size="14" fill="white">B</text><text x="163" y="153" font-size="14" fill="white">C</text><text x="235" y="153" font-size="14" fill="white">D</text><path d="M 102,38 A 18 18 0 0 1 118,38" fill="none" stroke="white" stroke-width="1"/><text x="98" y="52" font-size="14" fill="#f87171">35°</text><path d="M 46,138 A 18 18 0 0 1 38,125" fill="none" stroke="white" stroke-width="1"/><text x="44" y="130" font-size="14" fill="#f87171">73°</text><path d="M 186,140 A 18 18 0 0 1 178,127" fill="none" stroke="white" stroke-width="1"/><text x="188" y="130" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "108°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 250 160" preserveAspectRatio="xMidYMid meet"><polygon points="110,20 30,140 170,140" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="140" x2="240" y2="140" stroke="white" stroke-width="1.5"/><text x="103" y="15" font-size="14" fill="white">A</text><text x="12" y="153" font-size="14" fill="white">B</text><text x="163" y="153" font-size="14" fill="white">C</text><text x="235" y="153" font-size="14" fill="white">D</text><path d="M 102,38 A 18 18 0 0 1 118,38" fill="none" stroke="white" stroke-width="1"/><text x="98" y="52" font-size="14" fill="#60a5fa">x</text><path d="M 46,138 A 18 18 0 0 1 38,125" fill="none" stroke="white" stroke-width="1"/><text x="44" y="130" font-size="14" fill="#f87171">42°</text><path d="M 186,140 A 18 18 0 0 1 178,127" fill="none" stroke="white" stroke-width="1"/><text x="182" y="130" font-size="14" fill="#f87171">110°</text></svg>'
        },
        answer: "68°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 250 160" preserveAspectRatio="xMidYMid meet"><polygon points="110,20 30,140 170,140" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="140" x2="240" y2="140" stroke="white" stroke-width="1.5"/><text x="103" y="15" font-size="14" fill="white">A</text><text x="12" y="153" font-size="14" fill="white">B</text><text x="163" y="153" font-size="14" fill="white">C</text><text x="235" y="153" font-size="14" fill="white">D</text><path d="M 102,38 A 18 18 0 0 1 118,38" fill="none" stroke="white" stroke-width="1"/><text x="98" y="52" font-size="14" fill="#f87171">60°</text><path d="M 46,138 A 18 18 0 0 1 38,125" fill="none" stroke="white" stroke-width="1"/><text x="44" y="130" font-size="14" fill="#60a5fa">x</text><path d="M 186,140 A 18 18 0 0 1 178,127" fill="none" stroke="white" stroke-width="1"/><text x="182" y="130" font-size="14" fill="#f87171">135°</text></svg>'
        },
        answer: "75°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 260 180" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="160" x2="240" y2="160" stroke="white" stroke-width="1.5"/><line x1="60" y1="160" x2="140" y2="20" stroke="white" stroke-width="1.5"/><line x1="140" y1="20" x2="200" y2="160" stroke="white" stroke-width="1.5"/><line x1="200" y1="160" x2="250" y2="90" stroke="white" stroke-width="1.5"/><text x="133" y="15" font-size="14" fill="white">A</text><text x="42" y="173" font-size="14" fill="white">B</text><text x="193" y="173" font-size="14" fill="white">C</text><text x="245" y="88" font-size="14" fill="white">D</text><path d="M 132,38 A 18 18 0 0 1 148,38" fill="none" stroke="white" stroke-width="1"/><text x="128" y="52" font-size="14" fill="#f87171">50°</text><path d="M 76,158 A 18 18 0 0 1 68,145" fill="none" stroke="white" stroke-width="1"/><text x="74" y="150" font-size="14" fill="#f87171">70°</text><path d="M 216,158 A 18 18 0 0 1 208,145" fill="none" stroke="white" stroke-width="1"/><text x="218" y="148" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "120°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 260 180" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="160" x2="240" y2="160" stroke="white" stroke-width="1.5"/><line x1="80" y1="160" x2="150" y2="20" stroke="white" stroke-width="1.5"/><line x1="150" y1="20" x2="190" y2="160" stroke="white" stroke-width="1.5"/><line x1="190" y1="160" x2="240" y2="80" stroke="white" stroke-width="1.5"/><text x="143" y="15" font-size="14" fill="white">A</text><text x="62" y="173" font-size="14" fill="white">B</text><text x="183" y="173" font-size="14" fill="white">C</text><text x="235" y="78" font-size="14" fill="white">D</text><path d="M 142,38 A 18 18 0 0 1 158,38" fill="none" stroke="white" stroke-width="1"/><text x="138" y="52" font-size="14" fill="#f87171">45°</text><path d="M 96,158 A 18 18 0 0 1 88,145" fill="none" stroke="white" stroke-width="1"/><text x="94" y="150" font-size="14" fill="#f87171">65°</text><path d="M 206,158 A 18 18 0 0 1 198,145" fill="none" stroke="white" stroke-width="1"/><text x="208" y="148" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "110°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 220 180" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="190" y2="140" stroke="white" stroke-width="1.5"/><line x1="190" y1="40" x2="30" y2="140" stroke="white" stroke-width="1.5"/><line x1="110" y1="90" x2="110" y2="170" stroke="white" stroke-width="1.5"/><text x="22" y="35" font-size="14" fill="white">A</text><text x="192" y="35" font-size="14" fill="white">B</text><text x="103" y="178" font-size="14" fill="white">C</text><path d="M 42,48 A 14 14 0 0 1 42,60" fill="none" stroke="white" stroke-width="1"/><text x="48" y="60" font-size="14" fill="#f87171">35°</text><path d="M 178,48 A 14 14 0 0 0 178,60" fill="none" stroke="white" stroke-width="1"/><text x="152" y="60" font-size="14" fill="#f87171">40°</text><path d="M 102,96 A 12 12 0 0 1 118,96" fill="none" stroke="white" stroke-width="1"/><text x="96" y="82" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "75°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 220 180" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="190" y2="140" stroke="white" stroke-width="1.5"/><line x1="190" y1="40" x2="30" y2="140" stroke="white" stroke-width="1.5"/><line x1="110" y1="90" x2="110" y2="170" stroke="white" stroke-width="1.5"/><text x="22" y="35" font-size="14" fill="white">A</text><text x="192" y="35" font-size="14" fill="white">B</text><text x="103" y="178" font-size="14" fill="white">C</text><path d="M 42,48 A 14 14 0 0 1 42,60" fill="none" stroke="white" stroke-width="1"/><text x="48" y="60" font-size="14" fill="#f87171">28°</text><path d="M 178,48 A 14 14 0 0 0 178,60" fill="none" stroke="white" stroke-width="1"/><text x="152" y="60" font-size="14" fill="#f87171">47°</text><path d="M 102,96 A 12 12 0 0 1 118,96" fill="none" stroke="white" stroke-width="1"/><text x="96" y="82" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "75°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet"><polygon points="120,15 20,165 220,165" fill="none" stroke="white" stroke-width="1.5"/><line x1="120" y1="15" x2="120" y2="165" stroke="white" stroke-width="1.5"/><text x="113" y="10" font-size="14" fill="white">A</text><text x="2" y="178" font-size="14" fill="white">B</text><text x="222" y="178" font-size="14" fill="white">C</text><text x="123" y="178" font-size="14" fill="white">D</text><path d="M 112,33 A 18 18 0 0 1 118,33" fill="none" stroke="white" stroke-width="1"/><text x="97" y="50" font-size="14" fill="#f87171">35°</text><rect x="110" y="155" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><path d="M 36,163 A 18 18 0 0 1 28,150" fill="none" stroke="white" stroke-width="1"/><text x="34" y="155" font-size="14" fill="#f87171">55°</text><path d="M 135,163 A 16 16 0 0 1 128,152" fill="none" stroke="white" stroke-width="1"/><text x="137" y="152" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "55°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 240 170" preserveAspectRatio="xMidYMid meet"><polygon points="110,20 30,150 190,150" fill="none" stroke="white" stroke-width="1.5"/><line x1="30" y1="150" x2="30" y2="20" stroke="white" stroke-width="1.5"/><text x="103" y="15" font-size="14" fill="white">A</text><text x="33" y="158" font-size="14" fill="white">B</text><text x="192" y="158" font-size="14" fill="white">C</text><text x="15" y="20" font-size="14" fill="white">D</text><line x1="58" y1="67" x2="55" y2="76" stroke="white" stroke-width="1.5"/><line x1="62" y1="68" x2="59" y2="77" stroke="white" stroke-width="1.5"/><line x1="68" y1="147" x2="65" y2="138" stroke="white" stroke-width="1.5"/><line x1="72" y1="148" x2="69" y2="139" stroke="white" stroke-width="1.5"/><path d="M 102,38 A 18 18 0 0 1 118,38" fill="none" stroke="white" stroke-width="1"/><text x="98" y="52" font-size="14" fill="#f87171">40°</text><path d="M 30,133 A 18 18 0 0 1 42,138" fill="none" stroke="white" stroke-width="1"/><text x="36" y="128" font-size="14" fill="#60a5fa">x</text><path d="M 30,38 A 18 18 0 0 0 42,48" fill="none" stroke="white" stroke-width="1"/></svg>'
        },
        answer: "110°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 250 180" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="160" x2="230" y2="160" stroke="white" stroke-width="1.5"/><line x1="50" y1="160" x2="130" y2="20" stroke="white" stroke-width="1.5"/><line x1="130" y1="20" x2="180" y2="160" stroke="white" stroke-width="1.5"/><line x1="180" y1="160" x2="220" y2="50" stroke="white" stroke-width="1.5"/><line x1="220" y1="50" x2="130" y2="20" stroke="white" stroke-width="1.5"/><text x="123" y="15" font-size="14" fill="white">A</text><text x="32" y="173" font-size="14" fill="white">B</text><text x="173" y="173" font-size="14" fill="white">C</text><text x="222" y="48" font-size="14" fill="white">D</text><path d="M 122,38 A 18 18 0 0 1 138,38" fill="none" stroke="white" stroke-width="1"/><text x="118" y="52" font-size="14" fill="#f87171">30°</text><path d="M 66,158 A 18 18 0 0 1 58,145" fill="none" stroke="white" stroke-width="1"/><text x="64" y="150" font-size="14" fill="#f87171">75°</text><path d="M 212,58 A 14 14 0 0 0 208,72" fill="none" stroke="white" stroke-width="1"/><text x="192" y="72" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "75°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 250 180" preserveAspectRatio="xMidYMid meet"><polygon points="120,15 30,165 210,165" fill="none" stroke="white" stroke-width="1.5"/><line x1="30" y1="165" x2="180" y2="15" stroke="white" stroke-width="1.5"/><text x="113" y="10" font-size="14" fill="white">A</text><text x="12" y="178" font-size="14" fill="white">B</text><text x="212" y="178" font-size="14" fill="white">C</text><text x="182" y="10" font-size="14" fill="white">D</text><path d="M 112,33 A 18 18 0 0 1 128,33" fill="none" stroke="white" stroke-width="1"/><text x="108" y="50" font-size="14" fill="#f87171">50°</text><path d="M 46,163 A 18 18 0 0 1 38,150" fill="none" stroke="white" stroke-width="1"/><text x="44" y="155" font-size="14" fill="#f87171">70°</text><path d="M 172,30 A 14 14 0 0 0 168,44" fill="none" stroke="white" stroke-width="1"/><text x="152" y="44" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "120°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 260 180" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="160" x2="240" y2="160" stroke="white" stroke-width="1.5"/><line x1="50" y1="160" x2="130" y2="20" stroke="white" stroke-width="1.5"/><line x1="130" y1="20" x2="180" y2="160" stroke="white" stroke-width="1.5"/><line x1="180" y1="160" x2="230" y2="70" stroke="white" stroke-width="1.5"/><line x1="230" y1="70" x2="130" y2="20" stroke="white" stroke-width="1.5"/><text x="123" y="15" font-size="14" fill="white">A</text><text x="32" y="173" font-size="14" fill="white">B</text><text x="173" y="173" font-size="14" fill="white">C</text><text x="232" y="68" font-size="14" fill="white">D</text><path d="M 122,38 A 18 18 0 0 1 138,38" fill="none" stroke="white" stroke-width="1"/><text x="118" y="52" font-size="14" fill="#f87171">25°</text><path d="M 66,158 A 18 18 0 0 1 58,145" fill="none" stroke="white" stroke-width="1"/><text x="64" y="150" font-size="14" fill="#f87171">80°</text><path d="M 196,158 A 18 18 0 0 1 188,145" fill="none" stroke="white" stroke-width="1"/><text x="198" y="148" font-size="14" fill="#f87171">70°</text><path d="M 222,78 A 14 14 0 0 0 218,92" fill="none" stroke="white" stroke-width="1"/><text x="202" y="92" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "105°"
    },
    {
        type: 'text',
        data: {
            question: "∠xの大きさを求めなさい。",
            svg: '<svg viewBox="0 0 260 180" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="100" x2="240" y2="100" stroke="white" stroke-width="1.5"/><line x1="60" y1="100" x2="180" y2="20" stroke="white" stroke-width="1.5"/><line x1="180" y1="20" x2="200" y2="100" stroke="white" stroke-width="1.5"/><line x1="200" y1="100" x2="130" y2="170" stroke="white" stroke-width="1.5"/><line x1="130" y1="170" x2="60" y2="100" stroke="white" stroke-width="1.5"/><text x="173" y="15" font-size="14" fill="white">A</text><text x="42" y="98" font-size="14" fill="white">B</text><text x="204" y="98" font-size="14" fill="white">C</text><text x="123" y="183" font-size="14" fill="white">D</text><path d="M 172,38 A 18 18 0 0 1 188,38" fill="none" stroke="white" stroke-width="1"/><text x="168" y="52" font-size="14" fill="#f87171">50°</text><path d="M 123,162 A 14 14 0 0 1 138,162" fill="none" stroke="white" stroke-width="1"/><text x="119" y="155" font-size="14" fill="#f87171">40°</text><path d="M 78,100 A 18 18 0 0 1 70,88" fill="none" stroke="white" stroke-width="1"/><text x="76" y="86" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "90°"
    }
  ],
  "角度（基本）": [
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="140 60 160 120" preserveAspectRatio="xMidYMid meet"><line x1="140" y1="80" x2="280" y2="80" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="140" y1="160" x2="280" y2="160" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="220" y1="120" x2="220" y2="40" style="fill:none;stroke:white;stroke-width:1.5" transform="translate(220,120) rotate(-26) translate(-220,-120)"></line><line x1="220" y1="120" x2="220" y2="200" style="fill:none;stroke:white;stroke-width:1.5" transform="translate(220,120) rotate(51) translate(-220,-120)"></line><path style="fill:none;stroke:white;" d="M 206,91 A 13 13 0 0 0 214,79"></path><path style="fill:none;stroke:white;" d="M 215,109 A 13 13 0 0 0 210,129"></path><path style="fill:none;stroke:white;" d="M 184,160 A 12 12 0 0 0 181,151"></path><text x="277" y="79" font-size="12" fill="white">l</text><text x="273" y="159" font-size="12" fill="white">m</text><text x="213" y="96" font-size="12" fill="white">64°</text><text x="188" y="158" font-size="12" fill="white">39°</text><text x="198" y="123" font-size="12" fill="white">x</text></svg>' }, answer: "103°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="160 50 160 130" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="80" x2="300" y2="80" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="160" y1="160" x2="300" y2="160" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="240" y1="120" x2="240" y2="40" style="fill:none;stroke:white;stroke-width:1.5" transform="translate(240,120) rotate(-38) translate(-240,-120)"></line><line x1="240" y1="120" x2="240" y2="190" style="fill:none;stroke:white;stroke-width:1.5" transform="translate(240,120) rotate(18) translate(-240,-120)"></line><path style="fill:none;stroke:white;" d="M 203,80 A 9 9 0 0 0 215,87"></path><path style="fill:none;stroke:white;" d="M 234,113 A 10 10 0 0 0 237,129"></path><path style="fill:none;stroke:white;" d="M 230,152 A 10 10 0 0 0 217,160"></path><text x="177" y="94" font-size="12" fill="white">128°</text><text x="203" y="125" font-size="12" fill="white">134°</text><text x="211" y="155" font-size="12" fill="white">x</text><text x="297" y="77" font-size="12" fill="white">l</text><text x="289" y="156" font-size="12" fill="white">m</text></svg>' }, answer: "98°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="60 40 130 120" preserveAspectRatio="xMidYMid meet"><line x1="60" y1="60" x2="180" y2="60" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="60" y1="140" x2="180" y2="140" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="130" y1="110" x2="130" y2="30" style="fill:none;stroke:white;stroke-width:1.5" transform="translate(130,110) rotate(-33) translate(-130,-110)"></line><line x1="130" y1="110" x2="130" y2="160" style="fill:none;stroke:white;stroke-width:1.5" transform="translate(130,110) rotate(32) translate(-130,-110)"></line><path style="fill:none;stroke:white;" d="M 125,102 A 10 10 0 0 0 124,118"></path><path style="fill:none;stroke:white;" d="M 116,134 A 10 10 0 0 0 103,140"></path><path style="fill:none;stroke:white;" d="M 102,67 A 9 9 0 0 0 105,60"></path><text x="94" y="107" font-size="12" fill="white">115°</text><text x="83" y="134" font-size="12" fill="white">122°</text><text x="107" y="69" font-size="12" fill="white">x</text><text x="174" y="58" font-size="12" fill="white">l</text><text x="167" y="136" font-size="12" fill="white">m</text></svg>' }, answer: "57°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="170 80 150 120" preserveAspectRatio="xMidYMid meet"><line x1="180" y1="100" x2="300" y2="100" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="180" y1="180" x2="300" y2="180" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline style="fill:none;stroke:white;stroke-width:1.5" points="220,60 260,120 180,140 230,200 "></polyline><path style="fill:none;stroke:white;" d="M 252,109 A 9 9 0 0 0 256,100"></path><path style="fill:none;stroke:white;" d="M 255,113 A 7 7 0 0 0 250,123"></path><path style="fill:none;stroke:white;" d="M 188,150 A 14 14 0 0 0 193,137"></path><path style="fill:none;stroke:white;" d="M 223,180 A 11 11 0 0 0 207,173"></path><text x="231" y="121" font-size="12" fill="white">70°</text><text x="259" y="111" font-size="12" fill="white">x</text><text x="221" y="175" font-size="12" fill="white">129°</text><text x="295" y="96" font-size="12" fill="white">l</text><text x="290" y="176" font-size="12" fill="white">m</text><text x="193" y="152" font-size="12" fill="white">65°</text></svg>' }, answer: "56°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="130 90 150 130" preserveAspectRatio="xMidYMid meet"><line x1="140" y1="120" x2="260" y2="120" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="140" y1="200" x2="260" y2="200" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline style="fill:none;stroke:white;stroke-width:1.5" points="230,90 160,140 230,170 180,220 "></polyline><path style="fill:none;stroke:white;" d="M 202,121 A 14 14 0 0 0 199,111"></path><path style="fill:none;stroke:white;" d="M 172,145 A 12 12 0 0 0 171,133"></path><path style="fill:none;stroke:white;" d="M 221,166 A 10 10 0 0 0 224,177"></path><path style="fill:none;stroke:white;" d="M 210,200 A 10 10 0 0 0 207,193"></path><text x="259" y="116" font-size="12" fill="white">l</text><text x="256" y="197" font-size="12" fill="white">m</text><text x="212" y="176" font-size="12" fill="white">x</text><text x="211" y="197" font-size="12" fill="white">44°</text><text x="174" y="145" font-size="12" fill="white">57°</text><text x="205" y="118" font-size="12" fill="white">35°</text></svg>' }, answer: "66°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="150 290 150 130" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="320" x2="280" y2="320" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="160" y1="400" x2="280" y2="400" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline style="fill:none;stroke:white;stroke-width:1.5" points="190,290 230,340 220,380 170,410 "></polyline><path style="fill:none;stroke:white;" d="M 207,312 A 10 10 0 0 0 202,320"></path><path style="fill:none;stroke:white;" d="M 226,335 A 11 11 0 0 0 228,349"></path><path style="fill:none;stroke:white;" d="M 222,372 A 10 10 0 0 0 213,384"></path><path style="fill:none;stroke:white;" d="M 200,400 A 13 13 0 0 0 199,393"></path><text x="208" y="375" font-size="12" fill="white">x</text><text x="272" y="318" font-size="12" fill="white">l</text><text x="266" y="398" font-size="12" fill="white">m</text><text x="184" y="318" font-size="12" fill="white">50°</text><text x="196" y="346" font-size="12" fill="white">127°</text><text x="205" y="398" font-size="12" fill="white">31°</text></svg>' }, answer: "134°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="110 300 140 120" preserveAspectRatio="xMidYMid meet"><line x1="120" y1="320" x2="240" y2="320" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="120" y1="400" x2="240" y2="400" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline style="fill:none;stroke:white;stroke-width:1.5" points="210,410 140,380 160,340 230,310 "></polyline><text x="123" y="315" font-size="12" fill="white">l</text><text x="119" y="398" font-size="12" fill="white">m</text><path style="fill:none;stroke:white;" d="M 202,407 A 17 17 0 0 0 204,400"></path><path style="fill:none;stroke:white;" d="M 149,384 A 7 7 0 0 0 144,371"></path><path style="fill:none;stroke:white;" d="M 156,348 A 10 10 0 0 0 168,336"></path><path style="fill:none;stroke:white;" d="M 198,324 A 11 11 0 0 0 215,320"></path><text x="209" y="408" font-size="12" fill="white">x</text><text x="155" y="385" font-size="12" fill="white">87°</text><text x="164" y="355" font-size="12" fill="white">140°</text><text x="203" y="337" font-size="12" fill="white">160°</text></svg>' }, answer: "27°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="150 250 140 150" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="280" x2="280" y2="280" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="160" y1="370" x2="280" y2="370" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline style="fill:none;stroke:white;stroke-width:1.5" points="200,250 270,340 180,310 240,360 180,390 "></polyline><path style="fill:none;stroke:white;" d="M 202,370 A 16 16 0 0 0 205,378"></path><path style="fill:none;stroke:white;" d="M 233,354 A 11 11 0 0 0 232,365"></path><path style="fill:none;stroke:white;" d="M 197,324 A 22 22 0 0 0 201,316"></path><path style="fill:none;stroke:white;" d="M 261,329 A 10 10 0 0 0 256,336"></path><path style="fill:none;stroke:white;" d="M 232,290 A 13 13 0 0 0 237,279"></path><text x="202" y="327" font-size="12" fill="white">x</text><text x="238" y="293" font-size="12" fill="white">52°</text><text x="234" y="326" font-size="12" fill="white">34°</text><text x="211" y="363" font-size="12" fill="white">67°</text><text x="180" y="381" font-size="12" fill="white">27°</text><text x="274" y="275" font-size="12" fill="white">l</text><text x="270" y="364" font-size="12" fill="white">m</text></svg>' }, answer: "22°" },
    { type: 'text', data: { question: "図の∠xの大きさを求めよ。(l // m)", svg: '<svg viewBox="150 260 150 150" preserveAspectRatio="xMidYMid meet"><line x1="160" y1="290" x2="280" y2="290" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="160" y1="390" x2="280" y2="390" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline style="fill:none;stroke:white;stroke-width:1.5" points="230,260 180,350 220,320 270,350 220,410 "></polyline><path style="fill:none;stroke:white;" d="M 228,290 A 15 15 0 0 0 220,276"></path><path style="fill:none;stroke:white;" d="M 202,334 A 27 27 0 0 0 193,326"></path><path style="fill:none;stroke:white;" d="M 212,326 A 14 14 0 0 0 230,326"></path><path style="fill:none;stroke:white;" d="M 260,344 A 13 13 0 0 0 262,358"></path><path style="fill:none;stroke:white;" d="M 248,390 A 12 12 0 0 0 244,380"></path><text x="160" y="286" font-size="12" fill="white">l</text><text x="158" y="388" font-size="12" fill="white">m</text><text x="199" y="326" font-size="12" fill="white">x</text><text x="228" y="284" font-size="12" fill="white">61°</text><text x="207" y="342" font-size="12" fill="white">111°</text><text x="241" y="361" font-size="12" fill="white">80°</text><text x="250" y="386" font-size="12" fill="white">50°</text></svg>' }, answer: "22°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet"><line x1="10" y1="50" x2="190" y2="50" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="10" y1="110" x2="190" y2="110" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="50" y1="20" x2="120" y2="140" style="fill:none;stroke:white;stroke-width:1.5"></line><path d="M 76, 50 A 9 9 0 0 0 64, 44" fill="none" stroke="white" stroke-width="1"></path><path d="M 111, 110 A 9 9 0 0 0 99, 104" fill="none" stroke="white" stroke-width="1"></path><text x="10" y="48" fill="white" font-size="14">m</text><text x="10" y="108" fill="white" font-size="14">n</text><text x="63" y="39" fill="white" font-size="14">125°</text><text x="108" y="99" fill="white" font-size="14" font-style="italic">x</text></svg>' }, answer: "55°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet"><line x1="10" y1="50" x2="190" y2="50" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="10" y1="110" x2="190" y2="110" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="100" y1="20" x2="50" y2="140" style="fill:none;stroke:white;stroke-width:1.5"></line><path d="M 75, 50 A 9 9 0 0 0 83, 60" fill="none" stroke="white" stroke-width="1"></path><path d="M 67, 100 A 9 9 0 0 1 75, 110" fill="none" stroke="white" stroke-width="1"></path><text x="10" y="48" fill="white" font-size="14">m</text><text x="10" y="108" fill="white" font-size="14">n</text><text x="53" y="65" fill="white" font-size="14">73°</text><text x="75" y="105" fill="white" font-size="14" font-style="italic">x</text></svg>' }, answer: "73°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet"><line x1="10" y1="50" x2="190" y2="50" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="10" y1="110" x2="190" y2="110" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="30" y1="20" x2="180" y2="140" style="fill:none;stroke:white;stroke-width:1.5"></line><path d="M 76, 50 A 12 12 0 0 0 60, 44" fill="none" stroke="white" stroke-width="1"></path><path d="M 131, 101 A 9 9 0 0 0 127, 110" fill="none" stroke="white" stroke-width="1"></path><text x="10" y="48" fill="white" font-size="14">m</text><text x="10" y="108" fill="white" font-size="14">n</text><text x="63" y="39" fill="white" font-size="14">130°</text><text x="115" y="108" fill="white" font-size="14" font-style="italic">x</text></svg>' }, answer: "50°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><line x1="10" y1="50" x2="190" y2="50" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="10" y1="110" x2="190" y2="110" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline points="40, 20 120, 70 40, 180" style="fill:none;stroke:white;stroke-width:1.5"></polyline><path d="M 72, 40 A 9 9 0 0 0 70, 50" fill="none" stroke="white" stroke-width="1"></path><path d="M 111, 64 A 9 9 0 0 0 113, 79" fill="none" stroke="white" stroke-width="1"></path><path d="M 80, 110 A 9 9 0 0 0 85, 118" fill="none" stroke="white" stroke-width="1"></path><text x="10" y="48" fill="white" font-size="14">m</text><text x="10" y="108" fill="white" font-size="14">n</text><text x="43" y="48" fill="white" font-size="14">30°</text><text x="55" y="125" font-size="14">50°</text><text x="98" y="73" fill="white" font-size="14" font-style="italic">x</text></svg>' }, answer: "80°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><line x1="10" y1="50" x2="190" y2="50" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="10" y1="110" x2="190" y2="110" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline points="60, 20 120, 90 50, 180" style="fill:none;stroke:white;stroke-width:1.5"></polyline><path d="M 75, 38 A 9 9 0 0 0 70, 50" fill="none" stroke="white" stroke-width="1"></path><path d="M 113, 82 A 10 10 0 0 0 114, 97" fill="none" stroke="white" stroke-width="1"></path><path d="M 95, 110 A 9 9 0 0 0 98, 118" fill="none" stroke="white" stroke-width="1"></path><text x="10" y="48" fill="white" font-size="14">m</text><text x="10" y="108" fill="white" font-size="14">n</text><text x="48" y="48" fill="white" font-size="14">50°</text><text x="80" y="92" fill="white" font-size="14">105°</text><text x="81" y="120" fill="white" font-size="14" font-style="italic">x</text></svg>' }, answer: "55°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><line x1="10" y1="50" x2="190" y2="50" style="fill:none;stroke:white;stroke-width:1.5"></line><line x1="10" y1="110" x2="190" y2="110" style="fill:none;stroke:white;stroke-width:1.5"></line><polyline points="30, 20 140, 80 40, 170" style="fill:none;stroke:white;stroke-width:1.5"></polyline><path d="M 98, 50 A 16 16 0 0 0 74, 44" fill="none" stroke="white" stroke-width="1"></path><path d="M 130, 74 A 10 10 0 0 0 131, 89" fill="none" stroke="white" stroke-width="1"></path><path d="M 121, 110 A 9 9 0 0 0 118, 100" fill="none" stroke="white" stroke-width="1"></path><text x="10" y="48" fill="white" font-size="14">m</text><text x="10" y="108" fill="white" font-size="14">n</text><text x="72" y="39" fill="white" font-size="14">160°</text><text x="126" y="108" fill="white" font-size="14">40°</text><text x="113" y="87" fill="white" font-size="14" font-style="italic">x</text></svg>' }, answer: "60°" }
  ],
  "角度（応用）": [
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="60 40 220 130" preserveAspectRatio="xMidYMid meet"><polyline style="fill:none;stroke:white;" points="120,60 270,160 80,160 169,93 "></polyline><path style="fill:none;stroke:white;" d="M 253,148 A 22 22 0 0 0 249,160"/><path style="fill:none;stroke:white;" d="M 100,160 A 20 20 0 0 0 96,148"/><path style="fill:none;stroke:white;" d="M 157,85 A 16 16 0 0 0 158,102"/><text x="223" y="157" font-size="14" fill="white">31°</text><text x="102" y="153" font-size="14" fill="white">47°</text><text x="144" y="95" font-size="14" fill="white">x</text></svg>' }, answer: "78°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="60 40 190 170" preserveAspectRatio="xMidYMid meet"><polyline style="fill:none;stroke:white;" points="160,60 240,120 80,200 220,200 160,60 "></polyline><path style="fill:none;stroke:white;" d="M 230,113 A 14 14 0 0 0 228,126"/><path style="fill:none;stroke:white;" d="M 168,79 A 20 20 0 0 0 177,72"/><path style="fill:none;stroke:white;" d="M 216,188 A 14 14 0 0 0 207,200"/><path style="fill:none;stroke:white;" d="M 105,200 A 24 24 0 0 0 102,189"/><text x="206" y="124" font-size="12" fill="white">50°</text><text x="175" y="96" font-size="12" fill="white">28°</text><text x="107" y="198" font-size="12" fill="white">30°</text><text x="198" y="192" font-size="12" fill="white">x</text></svg>' }, answer: "48°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="40 30 220 170" preserveAspectRatio="xMidYMid meet"><polyline style="fill:none;stroke:white;" points="120,40 50,190 130,140 240,150 120,40 "></polyline><path style="fill:none;stroke:white;" d="M 112,59 A 20 20 0 0 0 135,54"/><path style="fill:none;stroke:white;" d="M 74,176 A 28 28 0 0 0 62,166"/><path style="fill:none;stroke:white;" d="M 118,148 A 30 30 0 0 0 146,142"/><path style="fill:none;stroke:white;" d="M 226,137 A 20 20 0 0 0 221,149"/><text x="132" y="161" font-size="14" fill="white">x</text><text x="114" y="75" font-size="12" fill="white">55°</text><text x="200" y="144" font-size="12" fill="white">42°</text><text x="67" y="167" font-size="12" fill="white">38°</text></svg>' }, answer: "135°" },
    { type: 'text', data: { question: "m//nのとき、次のxの角度を求めよ。", svg: '<svg viewBox="30 10 320 190" preserveAspectRatio="xMidYMid meet"><line x1="40" y1="40" x2="320" y2="40" style="fill:none;stroke:white;"></line><line x1="40" y1="180" x2="320" y2="180" style="fill:none;stroke:white;"></line><polyline style="fill:none;stroke:white;" points="180,40 260,90 240,150 130,180 "></polyline><text x="213" y="54" font-size="12" fill="white">48°</text><text x="186" y="177" font-size="12" fill="white">22°</text><text x="214" y="102" font-size="12" fill="white">110°</text><text x="220" y="135" font-size="14" fill="white">x</text><path style="fill:none;stroke:white;" d="M 249,84 A 13 13 0 0 0 257,103"/><path style="fill:none;stroke:white;" d="M 246,134 A 23 23 0 0 0 224,155"/><path style="fill:none;stroke:white;" d="M 170,180 A 40 40 0 0 0 169,170"/><path style="fill:none;stroke:white;" d="M 203,54 A 26 26 0 0 0 206,40"/><text x="321" y="42" font-size="12" fill="white">m</text><text x="322" y="182" font-size="12" fill="white">n</text></svg>' }, answer: "140°" },
    { type: 'text', data: { question: "m//nのとき、次のxの角度を求めよ。", svg: '<svg viewBox="30 10 350 190" preserveAspectRatio="xMidYMid meet"><line x1="60" y1="40" x2="300" y2="40" style="fill:none;stroke:white;"></line><text x="311" y="42" font-size="12" fill="white">m</text><text x="312" y="162" font-size="12" fill="white">n</text><line x1="60" y1="160" x2="300" y2="160" style="fill:none;stroke:white;"></line><polyline style="fill:none;stroke:white;" points="220,40 140,90 260,110 120,160 "></polyline><path style="fill:none;stroke:white;" d="M 241,107 A 20 20 0 0 0 242,117"/><path style="fill:none;stroke:white;" d="M 157,93 A 17 17 0 0 0 154,82"/><path style="fill:none;stroke:white;" d="M 210,46 A 20 20 0 0 0 229,40"/><path style="fill:none;stroke:white;" d="M 134,155 A 23 23 0 0 0 108,160"/><text x="214" y="58" font-size="12" fill="white">125°</text><text x="214" y="118" font-size="12" fill="white">38°</text><text x="104" y="149" font-size="12" fill="white">152°</text><text x="164" y="89" font-size="14" fill="white">x</text></svg>' }, answer: "65°" },
    { type: 'text', data: { question: "m//nのとき、次のxの角度を求めよ。", svg: '<svg viewBox="40 30 240 180" preserveAspectRatio="xMidYMid meet"><line x1="60" y1="100" x2="250" y2="100" style="fill:none;stroke:white;"></line><line x1="60" y1="200" x2="250" y2="200" style="fill:none;stroke:white;"></line><polyline style="fill:none;stroke:white;" points="100,100 220,40 120,200 "></polyline><path style="fill:none;stroke:white;" d="M 143,201 A 22 22 0 0 0 132,182"/><path style="fill:none;stroke:white;" d="M 124,100 A 22 22 0 0 0 121,90"/><path style="fill:none;stroke:white;" d="M 205,49 A 17 17 0 0 0 211,55"/><text x="128" y="98" font-size="14" fill="white">29°</text><text x="184" y="68" font-size="14" fill="white">32°</text><text x="148" y="188" font-size="14" fill="white">x</text><text x="255" y="103" font-size="14" fill="white">m</text><text x="255" y="203" font-size="14" fill="white">n</text></svg>' }, answer: "61°" },
    { type: 'text', data: { question: "次の図で、∠xの大きさを求めなさい。", svg: '<svg viewBox="0 -15 290 185" preserveAspectRatio="xMidYMid meet"><line x1="20" y1="20" x2="240" y2="20" style="fill:none;stroke:white;"></line><polyline style="fill:none;stroke:white;" points="20,160 120,20 280,160 20,20 "></polyline><line x1="20" y1="160" x2="240" y2="20" style="fill:none;stroke:white;"></line><text x="53" y="34" font-size="14" fill="white">33°</text><text x="188" y="35" font-size="14" fill="white">42°</text><text x="50" y="129" font-size="14" fill="white">25°</text><path style="fill:none;stroke:white;" d="M 240,126 A 53 53 0 0 0 233,134"/><path style="fill:none;stroke:white;" d="M 210,20 A 26 26 0 0 0 217,36"/><path style="fill:none;stroke:white;" d="M 48,144 A 31 31 0 0 0 39,135"/><path style="fill:none;stroke:white;" d="M 45,33 A 28 28 0 0 0 48,20"/><path style="fill:none;stroke:white;" d="M 113,32 A 17 17 0 0 0 131,30"/><text x="119" y="46" font-size="14" fill="white">x</text><text x="218" y="83" font-size="14" fill="white">20°</text></svg>' }, answer: "60°" },
    { type: 'text', data: { question: "m//nのとき、次のxの角度を求めよ。", svg: '<svg viewBox="40 -15 210 175" preserveAspectRatio="xMidYMid meet"><line x1="60" y1="20" x2="220" y2="20" style="fill:none;stroke:white;" /><line x1="60" y1="100" x2="220" y2="100" style="fill:none;stroke:white;" /><polyline style="fill:none;stroke:white;" points="120,20 200,80 100,150 130,100 " /><text x="225" y="25" font-size="14" fill="white">m</text><text x="225" y="103" font-size="14" fill="white">n</text><text x="123" y="125" font-size="14" fill="white">x</text><text x="88" y="119" font-size="14" fill="white">68°</text><text x="149" y="37" font-size="14" fill="white">43°</text><text x="156" y="84" font-size="14" fill="white">82°</text><path style="fill:none;stroke:white;" d="M 137,33 A 22 22 0 0 0 142,20"/><path style="fill:none;stroke:white;" d="M 190,70 A 18 18 0 0 0 190,70"/><path style="fill:none;stroke:white;" d="M 186,70 A 18 18 0 0 0 185,90"/><path style="fill:none;stroke:white;" d="M 116,100 A 14 14 0 0 0 122,112"/><path style="fill:none;stroke:white;" d="M 119,136 A 24 24 0 0 0 113,130"/></svg>' }, answer: "29°" },
    { type: 'text', data: { question: "印をつけた角の合計を求めよ。", svg: '<svg viewBox="30 40 300 170" preserveAspectRatio="xMidYMid meet"><polyline style="fill:none;stroke:white;" points="220,60 60,120 220,180 130,40 100,200 220,60 " /><path style="fill:none;stroke:white;" d="M 127,55 A 14 14 0 0 0 138,52"/><path style="fill:none;stroke:white;" d="M 207,65 A 14 14 0 0 0 211,70"/><path style="fill:none;stroke:white;" d="M 76,126 A 17 17 0 0 0 77,114"/><path style="fill:none;stroke:white;" d="M 210,165 A 17 17 0 0 0 203,174"/><path style="fill:none;stroke:white;" d="M 113,185 A 17 17 0 0 0 104,180"/></svg>' }, answer: "180°" },
    { type: 'text', data: { question: "xを求めよ。ただし、印をつけた角は等しい。", svg: '<svg viewBox="10 0 300 170" preserveAspectRatio="xMidYMid meet"><polygon style="fill:none;stroke:white;" points="200,40 80,160 260,160 " /><polyline style="fill:none;stroke:white;" points="80,160 188,115 260,160 " /><circle cx="240" cy="138" r="3" style="fill:none;stroke:white;"/><circle cx="231" cy="151" r="3" style="fill:none;stroke:white;"/><circle r="2" cx="110" cy="141" style="fill:white;stroke:none;" /><circle r="2" cx="115" cy="153" style="fill:white;stroke:none;" /><path style="fill:none;stroke:white;" d="M 190,50 A 14 14 0 0 0 206,52"/><path style="fill:none;stroke:white;" d="M 179,119 A 15 15 0 0 0 196,120"/><text x="184" y="70" font-size="14" fill="white">72°</text><text x="183" y="134" font-size="14" fill="white">x</text></svg>' }, answer: "126°" }
  ],
  "二等辺三角形(角度)": [
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、∠A=50°のとき、∠Bは何度ですか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="60" y1="92" x2="68" y2="79" stroke="white" stroke-width="2"/><line x1="140" y1="92" x2="132" y2="79" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 91,34 A 14 14 0 0 1 109,34" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="86" y="55" font-size="12" fill="#f87171">50°</text></svg>' }, answer: "65°" },
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、∠B=70°のとき、∠Aは何度ですか？", svg: '<svg viewBox="0 0 200 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="60" y1="92" x2="68" y2="79" stroke="white" stroke-width="2"/><line x1="140" y1="92" x2="132" y2="79" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 43,133 A 17 17 0 0 1 57,131" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="50" y="127" font-size="12" fill="#60a5fa">70°</text></svg>' }, answer: "40°" },
    { type: 'text', data: { question: "AB=ACの二等辺三角形ABCで、頂角Aの外角が100°のとき、底角Cは何度ですか？", svg: '<svg viewBox="0 0 230 165" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="60" y1="92" x2="68" y2="79" stroke="white" stroke-width="2"/><line x1="140" y1="92" x2="132" y2="79" stroke="white" stroke-width="2"/><line x1="100" y1="20" x2="200" y2="20" stroke="white" stroke-width="1.5" stroke-dasharray="5,3"/><path d="M 138,20 A 38 38 0 0 1 100,58" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="140" y="46" font-size="11" fill="#f87171">外角</text><text x="138" y="16" font-size="10" fill="#f87171">100°</text><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text></svg>' }, answer: "50°" },
  ],
  "三・四角形(角度)": [
    { type: 'text', data: { question: "平行四辺形ABCDで、∠A=80°のとき、∠Bは何度ですか？", svg: '<svg viewBox="0 0 220 130" preserveAspectRatio="xMidYMid meet"><polygon points="45,100 80,30 165,30 130,100" fill="none" stroke="white" stroke-width="1.5"/><line x1="58" y1="67" x2="67" y2="61" stroke="white" stroke-width="1.5"/><line x1="143" y1="61" x2="152" y2="67" stroke="white" stroke-width="1.5"/><line x1="55" y1="72" x2="64" y2="66" stroke="white" stroke-width="1.5"/><line x1="140" y1="66" x2="149" y2="72" stroke="white" stroke-width="1.5"/><line x1="95" y1="30" x2="100" y2="18" stroke="white" stroke-width="1.5"/><line x1="148" y1="64" x2="153" y2="52" stroke="white" stroke-width="1.5"/><path d="M 65,88 A 18 18 0 0 1 53,83" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="60" y="78" font-size="11" fill="#f87171">80°</text><text x="30" y="112" font-size="13" fill="white">A</text><text x="76" y="24" font-size="13" fill="white">B</text><text x="165" y="24" font-size="13" fill="white">C</text><text x="130" y="112" font-size="13" fill="white">D</text></svg>' }, answer: "100°" },
    { type: 'text', data: { question: "ひし形ABCDで、∠A=120°のとき、∠ABDは何度ですか？", svg: '<svg viewBox="0 0 210 150" preserveAspectRatio="xMidYMid meet"><polygon points="105,15 185,75 105,135 25,75" fill="none" stroke="white" stroke-width="1.5"/><line x1="62" y1="48" x2="70" y2="42" stroke="white" stroke-width="1.5"/><line x1="70" y1="42" x2="78" y2="48" stroke="white" stroke-width="1.5"/><line x1="140" y1="48" x2="132" y2="42" stroke="white" stroke-width="1.5"/><line x1="132" y1="42" x2="124" y2="48" stroke="white" stroke-width="1.5"/><line x1="62" y1="102" x2="70" y2="108" stroke="white" stroke-width="1.5"/><line x1="70" y1="108" x2="78" y2="102" stroke="white" stroke-width="1.5"/><line x1="140" y1="102" x2="132" y2="108" stroke="white" stroke-width="1.5"/><line x1="132" y1="108" x2="124" y2="102" stroke="white" stroke-width="1.5"/><line x1="105" y1="15" x2="105" y2="135" stroke="white" stroke-width="0.8" stroke-dasharray="4,3"/><line x1="25" y1="75" x2="185" y2="75" stroke="white" stroke-width="0.8" stroke-dasharray="4,3"/><path d="M 125,22 A 22 22 0 0 1 125,68" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="128" y="48" font-size="11" fill="#f87171">120°</text><text x="100" y="10" font-size="13" fill="white">A</text><text x="187" y="79" font-size="13" fill="white">B</text><text x="100" y="143" font-size="13" fill="white">C</text><text x="10" y="79" font-size="13" fill="white">D</text></svg>' }, answer: "30°" },
    {
        type: 'text',
        data: { question: "x の大きさを求めよ。ただし、同じ印のついた角や辺は同じ大きさである。", imageUrl: "/Image/76.jpg" },
        answer: "36°"
    },
    {
        type: 'text',
        data: { question: "m//n のとき、x の大きさを求めよ。", imageUrl: "/Image/77.jpg" },
        answer: "10°"
    },
    {
        type: 'text',
        data: { question: "正方形ABCDの内部に△PBCが正三角形になるように点Pをとる。このとき∠PAD は何度になるか。", imageUrl: "/Image/78.jpg" },
        answer: "15°"
    },
  ],
  "多角形と角(基)": [
    {
        type: 'text',
        data: {
            question: "四角形の内角の和は何度か。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="30,140 20,50 150,20 180,130" fill="none" stroke="white" stroke-width="1.5"/><path d="M 28,126 A 14 14 0 0 1 38,134" fill="none" stroke="white" stroke-width="1"/><path d="M 33,58 A 14 14 0 0 1 24,64" fill="none" stroke="white" stroke-width="1"/><path d="M 137,25 A 14 14 0 0 1 145,33" fill="none" stroke="white" stroke-width="1"/><path d="M 173,118 A 14 14 0 0 1 167,127" fill="none" stroke="white" stroke-width="1"/></svg>',
            options: ["180°", "360°", "540°", "720°"]
        },
        answer: "360°"
    },
    {
        type: 'text',
        data: {
            question: "五角形の内角の和は何度か。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 166.6,49.4 141.2,122.6 58.8,122.6 33.4,49.4" fill="none" stroke="white" stroke-width="1.5"/><path d="M 95,29 A 12 12 0 0 1 105,29" fill="none" stroke="white" stroke-width="1"/><path d="M 155,52 A 12 12 0 0 1 157,63" fill="none" stroke="white" stroke-width="1"/><path d="M 134,114 A 12 12 0 0 1 131,121" fill="none" stroke="white" stroke-width="1"/><path d="M 69,121 A 12 12 0 0 1 66,114" fill="none" stroke="white" stroke-width="1"/><path d="M 43,63 A 12 12 0 0 1 45,52" fill="none" stroke="white" stroke-width="1"/></svg>',
            options: ["360°", "540°", "720°", "900°"]
        },
        answer: "540°"
    },
    {
        type: 'text',
        data: {
            question: "六角形の内角の和は何度か。",
            svg: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 160.6,47.5 160.6,112.5 100,145 39.4,112.5 39.4,47.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M 95,29 A 12 12 0 0 1 105,29" fill="none" stroke="white" stroke-width="1"/><path d="M 150,51 A 12 12 0 0 1 152,62" fill="none" stroke="white" stroke-width="1"/><path d="M 152,100 A 12 12 0 0 1 150,111" fill="none" stroke="white" stroke-width="1"/><path d="M 105,133 A 12 12 0 0 1 95,133" fill="none" stroke="white" stroke-width="1"/><path d="M 50,111 A 12 12 0 0 1 48,100" fill="none" stroke="white" stroke-width="1"/><path d="M 48,62 A 12 12 0 0 1 50,51" fill="none" stroke="white" stroke-width="1"/></svg>',
            options: ["540°", "720°", "900°", "1080°"]
        },
        answer: "720°"
    },
    {
        type: 'text',
        data: {
            question: "正五角形の1つの内角は何度か。",
            svg: '<svg viewBox="0 0 200 150" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 166.6,49.4 141.2,122.6 58.8,122.6 33.4,49.4" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,28 A 16 16 0 0 1 109,28" fill="#60a5fa" fill-opacity="0.2" stroke="#60a5fa" stroke-width="1.5"/><text x="90" y="46" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "108°"
    },
    {
        type: 'text',
        data: {
            question: "正六角形の1つの内角は何度か。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 160.6,47.5 160.6,112.5 100,145 39.4,112.5 39.4,47.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,28 A 16 16 0 0 1 109,28" fill="#60a5fa" fill-opacity="0.2" stroke="#60a5fa" stroke-width="1.5"/><text x="90" y="46" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "120°"
    },
    {
        type: 'text',
        data: {
            question: "正八角形の1つの内角は何度か。",
            svg: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 149.5,35.5 170,85 149.5,134.5 100,155 50.5,134.5 30,85 50.5,35.5" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,28 A 16 16 0 0 1 109,28" fill="#60a5fa" fill-opacity="0.2" stroke="#60a5fa" stroke-width="1.5"/><text x="90" y="46" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "135°"
    },
    {
        type: 'text',
        data: {
            question: "正三角形の1つの外角は何度か。",
            svg: '<svg viewBox="0 0 240 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 40,140 160,140" fill="none" stroke="white" stroke-width="1.5"/><line x1="160" y1="140" x2="220" y2="140" stroke="white" stroke-width="1.5"/><path d="M 175,140 A 15 15 0 0 0 168,127" fill="#60a5fa" fill-opacity="0.2" stroke="#60a5fa" stroke-width="1.5"/><text x="178" y="134" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "120°"
    },
    {
        type: 'text',
        data: {
            question: "正五角形の1つの外角は何度か。",
            svg: '<svg viewBox="0 0 230 150" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 166.6,49.4 141.2,122.6 58.8,122.6 33.4,49.4" fill="none" stroke="white" stroke-width="1.5"/><line x1="141.2" y1="122.6" x2="210" y2="122.6" stroke="white" stroke-width="1.5"/><path d="M 158,122.6 A 17 17 0 0 0 150,111" fill="#60a5fa" fill-opacity="0.2" stroke="#60a5fa" stroke-width="1.5"/><text x="162" y="117" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "72°"
    },
    {
        type: 'text',
        data: {
            question: "四角形ABCDで∠A=85°, ∠B=100°, ∠C=95°のとき、∠D=xを求めよ。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="30,140 20,40 160,20 180,130" fill="none" stroke="white" stroke-width="1.5"/><text x="10" y="155" font-size="14" fill="white">A</text><text x="8" y="35" font-size="14" fill="white">B</text><text x="162" y="16" font-size="14" fill="white">C</text><text x="182" y="140" font-size="14" fill="white">D</text><path d="M 38,132 A 14 14 0 0 1 36,126" fill="none" stroke="#f87171" stroke-width="1"/><text x="42" y="126" font-size="12" fill="#f87171">85°</text><path d="M 28,52 A 14 14 0 0 1 32,44" fill="none" stroke="#f87171" stroke-width="1"/><text x="34" y="56" font-size="12" fill="#f87171">100°</text><path d="M 148,28 A 14 14 0 0 1 155,34" fill="none" stroke="#f87171" stroke-width="1"/><text x="130" y="40" font-size="12" fill="#f87171">95°</text><path d="M 172,120 A 14 14 0 0 1 168,128" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="153" y="120" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "80°"
    },
    {
        type: 'text',
        data: {
            question: "五角形で4つの角が100°, 110°, 120°, 90°のとき、残りの角xを求めよ。",
            svg: '<svg viewBox="0 0 210 150" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 166.6,49.4 141.2,122.6 58.8,122.6 33.4,49.4" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,28 A 16 16 0 0 1 109,28" fill="none" stroke="#f87171" stroke-width="1"/><text x="86" y="46" font-size="11" fill="#f87171">100°</text><path d="M 156,53 A 14 14 0 0 1 158,64" fill="none" stroke="#f87171" stroke-width="1"/><text x="143" y="68" font-size="11" fill="#f87171">110°</text><path d="M 134,114 A 14 14 0 0 1 130,122" fill="none" stroke="#f87171" stroke-width="1"/><text x="130" y="138" font-size="11" fill="#f87171">120°</text><path d="M 69,122 A 14 14 0 0 1 66,114" fill="none" stroke="#f87171" stroke-width="1"/><text x="42" y="138" font-size="11" fill="#f87171">90°</text><path d="M 43,63 A 14 14 0 0 1 45,52" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="28" y="68" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "120°"
    },
  ],
  "多角形と角(標)": [
    {
        type: 'text',
        data: {
            question: "正十角形の1つの内角は何度か。",
            svg: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 141.1,33.4 166.6,68.4 166.6,111.6 141.1,146.6 100,160 58.9,146.6 33.4,111.6 33.4,68.4 58.9,33.4" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,33 A 16 16 0 0 1 109,33" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="90" y="50" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "144°"
    },
    {
        type: 'text',
        data: {
            question: "正十二角形の1つの内角は何度か。",
            svg: '<svg viewBox="0 0 200 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 135,29.4 160.6,55 170,90 160.6,125 135,150.6 100,160 65,150.6 39.4,125 30,90 39.4,55 65,29.4" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,33 A 16 16 0 0 1 109,33" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="90" y="50" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "150°"
    },
    {
        type: 'text',
        data: {
            question: "正十角形の1つの外角は何度か。",
            svg: '<svg viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 141.1,33.4 166.6,68.4 166.6,111.6 141.1,146.6 100,160 58.9,146.6 33.4,111.6 33.4,68.4 58.9,33.4" fill="none" stroke="white" stroke-width="1.5"/><line x1="141.1" y1="146.6" x2="210" y2="146.6" stroke="white" stroke-width="1.5"/><path d="M 158,146.6 A 17 17 0 0 0 150,134" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="162" y="141" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "36°"
    },
    {
        type: 'text',
        data: {
            question: "n角形の内角の和が1440°のとき、nを求めよ。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 160,35 180,100 140,150 60,150 20,100 40,35" fill="none" stroke="white" stroke-width="1.5"/><text x="62" y="100" font-size="13" fill="white">内角の和</text><text x="62" y="118" font-size="13" fill="white">=1440°</text></svg>'
        },
        answer: "10"
    },
    {
        type: 'text',
        data: {
            question: "n角形の内角の和が1800°のとき、nを求めよ。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 160,35 180,100 140,150 60,150 20,100 40,35" fill="none" stroke="white" stroke-width="1.5"/><text x="62" y="100" font-size="13" fill="white">内角の和</text><text x="62" y="118" font-size="13" fill="white">=1800°</text></svg>'
        },
        answer: "12"
    },
    {
        type: 'text',
        data: {
            question: "正n角形の1つの内角が140°のとき、nを求めよ。",
            svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 160,35 180,100 140,150 60,150 20,100 40,35" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,28 A 16 16 0 0 1 109,28" fill="none" stroke="#f87171" stroke-width="1"/><text x="80" y="46" font-size="12" fill="#f87171">140°</text></svg>'
        },
        answer: "9"
    },
    {
        type: 'text',
        data: {
            question: "四角形ABCDで∠A=110°, ∠B=70°, ∠D=95°のとき、∠C=xを求めよ。",
            svg: '<svg viewBox="0 0 210 170" preserveAspectRatio="xMidYMid meet"><polygon points="40,30 20,120 180,140 170,20" fill="none" stroke="white" stroke-width="1.5"/><text x="22" y="26" font-size="14" fill="white">A</text><text x="2" y="130" font-size="14" fill="white">B</text><text x="182" y="150" font-size="14" fill="white">C</text><text x="172" y="16" font-size="14" fill="white">D</text><path d="M 48,38 A 14 14 0 0 1 42,44" fill="none" stroke="#f87171" stroke-width="1"/><text x="46" y="54" font-size="11" fill="#f87171">110°</text><path d="M 28,112 A 14 14 0 0 1 34,118" fill="none" stroke="#f87171" stroke-width="1"/><text x="36" y="110" font-size="11" fill="#f87171">70°</text><path d="M 164,28 A 14 14 0 0 1 160,22" fill="none" stroke="#f87171" stroke-width="1"/><text x="146" y="38" font-size="11" fill="#f87171">95°</text><path d="M 170,132 A 14 14 0 0 1 168,138" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="156" y="128" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "85°"
    },
    {
        type: 'text',
        data: {
            question: "五角形ABCDEで∠A=120°, ∠B=95°, ∠C=130°, ∠D=110°のとき、∠E=xを求めよ。",
            svg: '<svg viewBox="0 0 210 160" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 170,50 150,130 55,130 30,50" fill="none" stroke="white" stroke-width="1.5"/><text x="92" y="12" font-size="14" fill="white">A</text><text x="173" y="50" font-size="14" fill="white">B</text><text x="152" y="142" font-size="14" fill="white">C</text><text x="36" y="142" font-size="14" fill="white">D</text><text x="12" y="50" font-size="14" fill="white">E</text><path d="M 91,28 A 14 14 0 0 1 109,28" fill="none" stroke="#f87171" stroke-width="1"/><text x="84" y="44" font-size="11" fill="#f87171">120°</text><path d="M 160,54 A 14 14 0 0 1 162,64" fill="none" stroke="#f87171" stroke-width="1"/><text x="148" y="68" font-size="11" fill="#f87171">95°</text><path d="M 143,122 A 14 14 0 0 1 139,130" fill="none" stroke="#f87171" stroke-width="1"/><text x="128" y="118" font-size="11" fill="#f87171">130°</text><path d="M 65,130 A 14 14 0 0 1 62,122" fill="none" stroke="#f87171" stroke-width="1"/><text x="58" y="146" font-size="11" fill="#f87171">110°</text><path d="M 38,56 A 14 14 0 0 1 40,46" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="24" y="66" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "85°"
    },
    {
        type: 'text',
        data: {
            question: "六角形で5つの角がそれぞれ 110°, 130°, 140°, 100°, 125° のとき、残りの角xを求めよ。",
            svg: '<svg viewBox="0 0 210 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,15 170,40 185,115 130,160 50,155 25,80" fill="none" stroke="white" stroke-width="1.5"/><path d="M 91,28 A 14 14 0 0 1 109,28" fill="none" stroke="#f87171" stroke-width="1"/><text x="84" y="44" font-size="11" fill="#f87171">110°</text><path d="M 160,44 A 14 14 0 0 1 164,54" fill="none" stroke="#f87171" stroke-width="1"/><text x="148" y="58" font-size="11" fill="#f87171">130°</text><path d="M 178,108 A 14 14 0 0 1 174,118" fill="none" stroke="#f87171" stroke-width="1"/><text x="158" y="110" font-size="11" fill="#f87171">140°</text><path d="M 123,152 A 14 14 0 0 1 118,148" fill="none" stroke="#f87171" stroke-width="1"/><text x="118" y="170" font-size="11" fill="#f87171">100°</text><path d="M 58,148 A 14 14 0 0 1 55,140" fill="none" stroke="#f87171" stroke-width="1"/><text x="36" y="160" font-size="11" fill="#f87171">125°</text><path d="M 32,88 A 14 14 0 0 1 34,78" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="10" y="88" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "115°"
    },
    {
        type: 'text',
        data: {
            question: "正六角形の1つの外角の大きさを求めよ。",
            svg: '<svg viewBox="0 0 230 180" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 160.6,55 160.6,125 100,160 39.4,125 39.4,55" fill="none" stroke="white" stroke-width="1.5"/><line x1="160.6" y1="125" x2="215" y2="125" stroke="white" stroke-width="1.5"/><path d="M 178,125 A 17 17 0 0 0 168,112" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="180" y="119" font-size="14" fill="#60a5fa">x</text></svg>'
        },
        answer: "60°"
    },
  ],

  "二等辺三角形(角度・応用)": [
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。AB=AC, ∠A=80°のとき∠ABCの外角xを求めよ。",
        svg: '<svg viewBox="0 0 260 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="30" y1="145" x2="200" y2="145" stroke="white" stroke-width="1.5"/><line x1="60" y1="92" x2="68" y2="79" stroke="white" stroke-width="2"/><line x1="140" y1="92" x2="132" y2="79" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><text x="200" y="158" font-size="14" fill="white">D</text><path d="M 91,34 A 14 14 0 0 1 109,34" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="86" y="55" font-size="12" fill="#f87171">80°</text><path d="M 48,145 A 18 18 0 0 0 40,132" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="50" y="132" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "130°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。AB=BC, ∠ABC=50°のとき∠BACをxとして求めよ。",
        svg: '<svg viewBox="0 0 200 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="62" y1="68" x2="52" y2="88" stroke="white" stroke-width="2"/><line x1="138" y1="68" x2="148" y2="88" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="170" y="158" font-size="14" fill="white">C</text><path d="M 42,135 A 16 16 0 0 1 56,133" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="48" y="128" font-size="12" fill="#f87171">50°</text><path d="M 92,38 A 18 18 0 0 1 108,38" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="88" y="55" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "65°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。AB=AC, ∠B=55°のとき∠ACDを求めよ。(DはBCの延長上の点)",
        svg: '<svg viewBox="0 0 260 170" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,145 170,145" fill="none" stroke="white" stroke-width="1.5"/><line x1="170" y1="145" x2="230" y2="145" stroke="white" stroke-width="1.5"/><line x1="60" y1="92" x2="68" y2="79" stroke="white" stroke-width="2"/><line x1="140" y1="92" x2="132" y2="79" stroke="white" stroke-width="2"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="17" y="158" font-size="14" fill="white">B</text><text x="163" y="158" font-size="14" fill="white">C</text><text x="228" y="158" font-size="14" fill="white">D</text><path d="M 43,133 A 17 17 0 0 1 57,131" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="50" y="127" font-size="12" fill="#f87171">55°</text><path d="M 186,145 A 18 18 0 0 0 178,132" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="182" y="132" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "110°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。AB=AC=CD, ∠BAC=40°のとき∠ADCを求めよ。",
        svg: '<svg viewBox="0 0 240 180" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="150" x2="130" y2="20" stroke="white" stroke-width="1.5"/><line x1="130" y1="20" x2="210" y2="150" stroke="white" stroke-width="1.5"/><line x1="30" y1="150" x2="210" y2="150" stroke="white" stroke-width="1.5"/><line x1="130" y1="20" x2="130" y2="150" stroke="white" stroke-width="1.5"/><line x1="70" y1="90" x2="62" y2="100" stroke="white" stroke-width="2"/><line x1="74" y1="86" x2="66" y2="96" stroke="white" stroke-width="2"/><line x1="188" y1="90" x2="196" y2="100" stroke="white" stroke-width="2"/><line x1="184" y1="86" x2="192" y2="96" stroke="white" stroke-width="2"/><text x="123" y="15" font-size="14" fill="white">A</text><text x="15" y="162" font-size="14" fill="white">B</text><text x="123" y="162" font-size="14" fill="white">D</text><text x="213" y="162" font-size="14" fill="white">C</text><path d="M 122,38 A 14 14 0 0 1 138,38" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="116" y="54" font-size="12" fill="#f87171">40°</text><path d="M 138,150 A 18 18 0 0 0 130,136" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="142" y="140" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "70°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。AB=AC, ∠BAC=40°, Dは辺BC上の点でAD⊥BCのとき、∠DAC=x",
        svg: '<svg viewBox="0 0 220 180" preserveAspectRatio="xMidYMid meet"><polygon points="110,20 30,150 190,150" fill="none" stroke="white" stroke-width="1.5"/><line x1="110" y1="20" x2="110" y2="150" stroke="white" stroke-width="1.5"/><rect x="100" y="140" width="10" height="10" fill="none" stroke="white" stroke-width="1"/><line x1="60" y1="90" x2="68" y2="78" stroke="white" stroke-width="2"/><line x1="160" y1="90" x2="152" y2="78" stroke="white" stroke-width="2"/><text x="103" y="14" font-size="14" fill="white">A</text><text x="14" y="163" font-size="14" fill="white">B</text><text x="193" y="163" font-size="14" fill="white">C</text><text x="113" y="163" font-size="14" fill="white">D</text><path d="M 102,38 A 14 14 0 0 1 118,38" fill="none" stroke="#f87171" stroke-width="1.5"/><text x="96" y="56" font-size="12" fill="#f87171">40°</text><path d="M 118,38 A 24 24 0 0 1 122,58" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="126" y="52" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "20°"
    },
  ],

  "多角形と角(基2)": [
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。",
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="170" x2="200" y2="170" stroke="white" stroke-width="1.5"/><line x1="30" y1="170" x2="120" y2="40" stroke="white" stroke-width="1.5"/><line x1="120" y1="40" x2="200" y2="170" stroke="white" stroke-width="1.5"/><line x1="75" y1="105" x2="200" y2="170" stroke="white" stroke-width="1.5"/><path d="M 113,58 A 18 18 0 0 1 127,58" fill="none" stroke="#f87171" stroke-width="1"/><text x="108" y="74" font-size="14" fill="#f87171">110°</text><path d="M 46,170 A 20 20 0 0 0 40,157" fill="none" stroke="#f87171" stroke-width="1"/><text x="44" y="155" font-size="14" fill="#f87171">80°</text><path d="M 97,112 A 12 12 0 0 0 90,119" fill="none" stroke="#f87171" stroke-width="1"/><text x="75" y="112" font-size="14" fill="#f87171">60°</text><path d="M 186,170 A 16 16 0 0 0 180,160" fill="none" stroke="#f87171" stroke-width="1"/><text x="156" y="162" font-size="14" fill="#f87171">160°</text><path d="M 47,170 A 36 36 0 0 1 44,155" fill="none" stroke="#60a5fa" stroke-width="1.5" opacity="0"/><text x="20" y="145" font-size="14" fill="#60a5fa">x</text><path d="M 116,166 A 20 20 0 0 0 126,158" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="128" y="158" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "70°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。",
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="170" x2="210" y2="170" stroke="white" stroke-width="1.5"/><line x1="30" y1="170" x2="120" y2="40" stroke="white" stroke-width="1.5"/><line x1="120" y1="40" x2="210" y2="170" stroke="white" stroke-width="1.5"/><line x1="80" y1="110" x2="210" y2="170" stroke="white" stroke-width="1.5"/><path d="M 113,58 A 18 18 0 0 1 127,58" fill="none" stroke="#f87171" stroke-width="1"/><text x="108" y="74" font-size="14" fill="#f87171">80°</text><path d="M 46,170 A 20 20 0 0 0 40,157" fill="none" stroke="#f87171" stroke-width="1"/><text x="44" y="155" font-size="14" fill="#f87171">40°</text><path d="M 102,117 A 12 12 0 0 0 95,124" fill="none" stroke="#f87171" stroke-width="1"/><text x="78" y="116" font-size="14" fill="#f87171">50°</text><path d="M 194,170 A 18 18 0 0 0 188,160" fill="none" stroke="#f87171" stroke-width="1"/><text x="160" y="162" font-size="14" fill="#f87171">155°</text><path d="M 118,166 A 20 20 0 0 0 128,158" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="130" y="158" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "65°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。(三角形の内部を走る折れ線)",
        svg: '<svg viewBox="0 0 240 190" preserveAspectRatio="xMidYMid meet"><polygon points="120,20 30,160 210,160" fill="none" stroke="white" stroke-width="1.5"/><line x1="70" y1="106" x2="175" y2="160" stroke="white" stroke-width="1.5"/><line x1="70" y1="106" x2="120" y2="20" stroke="white" stroke-width="0" opacity="0"/><path d="M 113,38 A 18 18 0 0 1 127,38" fill="none" stroke="#f87171" stroke-width="1"/><text x="108" y="55" font-size="14" fill="#f87171">40°</text><path d="M 46,160 A 20 20 0 0 0 40,147" fill="none" stroke="#f87171" stroke-width="1"/><text x="44" y="145" font-size="14" fill="#f87171">75°</text><path d="M 82,110 A 14 14 0 0 0 76,120" fill="none" stroke="#f87171" stroke-width="1"/><text x="58" y="110" font-size="14" fill="#f87171">65°</text><path d="M 165,156 A 16 16 0 0 0 162,148" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="168" y="148" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "180°"
    },
    {
      type: 'text',
      data: {
        question: "四角形ABCDで、対角線ACとBDが点Oで交わっている。∠xを求めよ。∠BAC=35°, ∠ADB=55°, ∠ACD=40°",
        svg: '<svg viewBox="0 0 240 200" preserveAspectRatio="xMidYMid meet"><polygon points="50,160 50,40 190,40 190,160" fill="none" stroke="white" stroke-width="1.5"/><line x1="50" y1="40" x2="190" y2="160" stroke="white" stroke-width="1.5"/><line x1="50" y1="160" x2="190" y2="40" stroke="white" stroke-width="1.5"/><text x="34" y="34" font-size="14" fill="white">A</text><text x="193" y="34" font-size="14" fill="white">B</text><text x="193" y="167" font-size="14" fill="white">C</text><text x="34" y="167" font-size="14" fill="white">D</text><text x="113" y="108" font-size="14" fill="white">O</text><path d="M 62,48 A 18 18 0 0 1 72,53" fill="none" stroke="#f87171" stroke-width="1"/><text x="74" y="53" font-size="12" fill="#f87171">35°</text><path d="M 62,150 A 18 18 0 0 0 68,140" fill="none" stroke="#f87171" stroke-width="1"/><text x="70" y="140" font-size="12" fill="#f87171">55°</text><path d="M 178,52 A 18 18 0 0 0 170,60" fill="none" stroke="#f87171" stroke-width="1"/><text x="152" y="60" font-size="12" fill="#f87171">40°</text><path d="M 118,98 A 14 14 0 0 0 123,112" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="126" y="110" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "90°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。平行四辺形ABCDで、E,FはそれぞれAB,CD上の点。∠AEF=115°, ∠CFE=80°のとき∠A=x。",
        svg: '<svg viewBox="0 0 260 160" preserveAspectRatio="xMidYMid meet"><polygon points="40,130 80,30 200,30 160,130" fill="none" stroke="white" stroke-width="1.5"/><line x1="64" y1="72" x2="170" y2="90" stroke="white" stroke-width="1.5"/><text x="24" y="142" font-size="14" fill="white">A</text><text x="76" y="24" font-size="14" fill="white">B</text><text x="202" y="24" font-size="14" fill="white">C</text><text x="160" y="142" font-size="14" fill="white">D</text><text x="55" y="68" font-size="14" fill="white">E</text><text x="174" y="92" font-size="14" fill="white">F</text><path d="M 66,82 A 14 14 0 0 1 74,76" fill="none" stroke="#f87171" stroke-width="1"/><text x="76" y="84" font-size="12" fill="#f87171">115°</text><path d="M 165,84 A 14 14 0 0 0 159,78" fill="none" stroke="#f87171" stroke-width="1"/><text x="142" y="78" font-size="12" fill="#f87171">80°</text><path d="M 52,122 A 14 14 0 0 1 56,114" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="58" y="112" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "15°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。三角形ABCの辺AB,BC上にそれぞれD,Eがあり、DEの延長がACの延長と交わる点をFとする。∠A=60°, ∠B=50°, ∠DEA=80°のとき∠DFC=x。",
        svg: '<svg viewBox="0 0 270 200" preserveAspectRatio="xMidYMid meet"><polygon points="100,20 30,160 210,160" fill="none" stroke="white" stroke-width="1.5"/><line x1="65" y1="104" x2="155" y2="160" stroke="white" stroke-width="1.5"/><line x1="155" y1="160" x2="235" y2="128" stroke="white" stroke-width="1.5"/><line x1="210" y1="160" x2="235" y2="128" stroke="white" stroke-width="0.8" stroke-dasharray="4,3"/><text x="93" y="14" font-size="14" fill="white">A</text><text x="14" y="172" font-size="14" fill="white">B</text><text x="212" y="172" font-size="14" fill="white">C</text><text x="49" y="100" font-size="14" fill="white">D</text><text x="157" y="158" font-size="14" fill="white">E</text><text x="238" y="128" font-size="14" fill="white">F</text><path d="M 92,38 A 14 14 0 0 1 106,38" fill="none" stroke="#f87171" stroke-width="1"/><text x="88" y="54" font-size="12" fill="#f87171">60°</text><path d="M 44,160 A 18 18 0 0 0 40,147" fill="none" stroke="#f87171" stroke-width="1"/><text x="44" y="145" font-size="12" fill="#f87171">50°</text><path d="M 78,110 A 12 12 0 0 0 73,118" fill="none" stroke="#f87171" stroke-width="1"/><text x="58" y="114" font-size="12" fill="#f87171">80°</text><path d="M 224,136 A 16 16 0 0 0 220,126" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="208" y="124" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "30°"
    },
  ],

  "交差する三角形": [
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。2つの三角形ABXとCDXが点Xで交わっている（蝶ネクタイ型）。∠A=35°, ∠B=45°, ∠D=40°のとき∠C=x。",
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="230" y2="160" stroke="white" stroke-width="1.5"/><line x1="230" y1="40" x2="30" y2="160" stroke="white" stroke-width="1.5"/><line x1="30" y1="40" x2="230" y2="40" stroke="white" stroke-width="1.5"/><line x1="30" y1="160" x2="230" y2="160" stroke="white" stroke-width="1.5"/><text x="14" y="36" font-size="14" fill="white">A</text><text x="232" y="36" font-size="14" fill="white">B</text><text x="14" y="168" font-size="14" fill="white">C</text><text x="232" y="168" font-size="14" fill="white">D</text><text x="122" y="108" font-size="14" fill="white">X</text><path d="M 42,46 A 16 16 0 0 1 48,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="56" font-size="12" fill="#f87171">35°</text><path d="M 218,46 A 16 16 0 0 0 212,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="194" y="56" font-size="12" fill="#f87171">45°</text><path d="M 218,154 A 16 16 0 0 0 212,144" fill="none" stroke="#f87171" stroke-width="1"/><text x="194" y="144" font-size="12" fill="#f87171">40°</text><path d="M 42,154 A 16 16 0 0 1 48,144" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="50" y="144" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "40°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。2つの三角形が交差（蝶ネクタイ型）。∠A=50°, ∠B=30°, ∠C=35°のとき∠D=x。",
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="230" y2="160" stroke="white" stroke-width="1.5"/><line x1="230" y1="40" x2="30" y2="160" stroke="white" stroke-width="1.5"/><line x1="30" y1="40" x2="230" y2="40" stroke="white" stroke-width="1.5"/><line x1="30" y1="160" x2="230" y2="160" stroke="white" stroke-width="1.5"/><text x="14" y="36" font-size="14" fill="white">A</text><text x="232" y="36" font-size="14" fill="white">B</text><text x="14" y="168" font-size="14" fill="white">C</text><text x="232" y="168" font-size="14" fill="white">D</text><text x="122" y="108" font-size="14" fill="white">X</text><path d="M 42,46 A 16 16 0 0 1 48,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="56" font-size="12" fill="#f87171">50°</text><path d="M 218,46 A 16 16 0 0 0 212,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="194" y="56" font-size="12" fill="#f87171">30°</text><path d="M 42,154 A 16 16 0 0 1 48,144" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="144" font-size="12" fill="#f87171">35°</text><path d="M 218,154 A 16 16 0 0 0 212,144" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="194" y="144" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "45°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。2つの三角形が交差。∠A=55°, ∠B=40°, ∠D=65°のとき∠C=x。",
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="230" y2="160" stroke="white" stroke-width="1.5"/><line x1="230" y1="40" x2="30" y2="160" stroke="white" stroke-width="1.5"/><line x1="30" y1="40" x2="230" y2="40" stroke="white" stroke-width="1.5"/><line x1="30" y1="160" x2="230" y2="160" stroke="white" stroke-width="1.5"/><text x="14" y="36" font-size="14" fill="white">A</text><text x="232" y="36" font-size="14" fill="white">B</text><text x="14" y="168" font-size="14" fill="white">C</text><text x="232" y="168" font-size="14" fill="white">D</text><text x="122" y="108" font-size="14" fill="white">X</text><path d="M 42,46 A 16 16 0 0 1 48,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="56" font-size="12" fill="#f87171">55°</text><path d="M 218,46 A 16 16 0 0 0 212,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="194" y="56" font-size="12" fill="#f87171">40°</text><path d="M 218,154 A 16 16 0 0 0 212,144" fill="none" stroke="#f87171" stroke-width="1"/><text x="194" y="144" font-size="12" fill="#f87171">65°</text><path d="M 42,154 A 16 16 0 0 1 48,144" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="50" y="144" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "30°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。2つの三角形が頂点を共有して交差（蝶ネクタイ型）。上の三角形∠A=40°, ∠B=45°。下の三角形∠D=35°のとき∠C=x。",
        svg: '<svg viewBox="0 0 240 210" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="100" x2="210" y2="100" stroke="white" stroke-width="1.5"/><line x1="30" y1="100" x2="120" y2="30" stroke="white" stroke-width="1.5"/><line x1="210" y1="100" x2="120" y2="30" stroke="white" stroke-width="1.5"/><line x1="30" y1="100" x2="120" y2="180" stroke="white" stroke-width="1.5"/><line x1="210" y1="100" x2="120" y2="180" stroke="white" stroke-width="1.5"/><text x="113" y="24" font-size="14" fill="white">P</text><text x="14" y="104" font-size="14" fill="white">A</text><text x="213" y="104" font-size="14" fill="white">B</text><text x="14" y="108" font-size="0" fill="white">C</text><text x="113" y="192" font-size="14" fill="white">Q</text><text x="8" y="116" font-size="14" fill="white">C</text><text x="213" y="116" font-size="14" fill="white">D</text><path d="M 42,98 A 16 16 0 0 0 44,88" fill="none" stroke="#f87171" stroke-width="1"/><text x="46" y="86" font-size="12" fill="#f87171">40°</text><path d="M 198,98 A 16 16 0 0 1 196,88" fill="none" stroke="#f87171" stroke-width="1"/><text x="172" y="86" font-size="12" fill="#f87171">45°</text><path d="M 198,102 A 16 16 0 0 0 196,112" fill="none" stroke="#f87171" stroke-width="1"/><text x="172" y="118" font-size="12" fill="#f87171">35°</text><path d="M 42,102 A 16 16 0 0 1 44,112" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="46" y="120" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "50°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。図の2つの三角形が交差している。∠A=50°, ∠B=45°, ∠C=35°のとき交差点の角∠X=x。",
        svg: '<svg viewBox="0 0 260 200" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="230" y2="160" stroke="white" stroke-width="1.5"/><line x1="230" y1="40" x2="30" y2="160" stroke="white" stroke-width="1.5"/><line x1="30" y1="40" x2="230" y2="40" stroke="white" stroke-width="1.5"/><line x1="30" y1="160" x2="230" y2="160" stroke="white" stroke-width="1.5"/><text x="14" y="36" font-size="14" fill="white">A</text><text x="232" y="36" font-size="14" fill="white">B</text><text x="14" y="168" font-size="14" fill="white">C</text><text x="232" y="168" font-size="14" fill="white">D</text><path d="M 42,46 A 16 16 0 0 1 48,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="56" font-size="12" fill="#f87171">50°</text><path d="M 218,46 A 16 16 0 0 0 212,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="194" y="56" font-size="12" fill="#f87171">45°</text><path d="M 42,154 A 16 16 0 0 1 48,144" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="144" font-size="12" fill="#f87171">35°</text><path d="M 118,96 A 12 12 0 0 0 126,106" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="128" y="104" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "85°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。図の三角形ABCでDE//BCとなるように点D,Eをとり、BA,CAを延長した先に三角形を作る。∠B=65°, ∠C=50°のとき∠A=xを求めよ。",
        svg: '<svg viewBox="0 0 240 190" preserveAspectRatio="xMidYMid meet"><polygon points="120,20 40,150 200,150" fill="none" stroke="white" stroke-width="1.5"/><line x1="120" y1="20" x2="20" y2="100" stroke="white" stroke-width="1.5"/><line x1="120" y1="20" x2="220" y2="100" stroke="white" stroke-width="1.5"/><line x1="20" y1="100" x2="220" y2="100" stroke="white" stroke-width="1.5"/><text x="113" y="14" font-size="14" fill="white">A</text><text x="24" y="162" font-size="14" fill="white">B</text><text x="202" y="162" font-size="14" fill="white">C</text><text x="6" y="100" font-size="14" fill="white">D</text><text x="222" y="100" font-size="14" fill="white">E</text><path d="M 52,150 A 18 18 0 0 0 48,138" fill="none" stroke="#f87171" stroke-width="1"/><text x="52" y="136" font-size="12" fill="#f87171">65°</text><path d="M 188,150 A 18 18 0 0 1 192,138" fill="none" stroke="#f87171" stroke-width="1"/><text x="178" y="136" font-size="12" fill="#f87171">50°</text><path d="M 112,38 A 14 14 0 0 1 128,38" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="108" y="55" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "65°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。点P,Qは三角形ABCの辺上の点。∠BAC=70°, ∠ABQ=55°, ∠ACR=50°（RはBC延長上）のとき、∠APQ=x。",
        svg: '<svg viewBox="0 0 250 190" preserveAspectRatio="xMidYMid meet"><polygon points="120,20 30,160 200,160" fill="none" stroke="white" stroke-width="1.5"/><line x1="30" y1="160" x2="170" y2="80" stroke="white" stroke-width="1.5"/><line x1="120" y1="20" x2="165" y2="160" stroke="white" stroke-width="1.5"/><text x="113" y="14" font-size="14" fill="white">A</text><text x="14" y="172" font-size="14" fill="white">B</text><text x="202" y="172" font-size="14" fill="white">C</text><text x="173" y="78" font-size="14" fill="white">P</text><text x="155" y="158" font-size="14" fill="white">Q</text><path d="M 112,38 A 16 16 0 0 1 128,38" fill="none" stroke="#f87171" stroke-width="1"/><text x="108" y="55" font-size="12" fill="#f87171">70°</text><path d="M 44,160 A 18 18 0 0 0 44,147" fill="none" stroke="#f87171" stroke-width="1"/><text x="46" y="145" font-size="12" fill="#f87171">55°</text><path d="M 165,162 A 16 16 0 0 0 161,152" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="150" y="150" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "125°"
    },
    {
      type: 'text',
      data: {
        question: "∠xの大きさを求めなさい。2直線が交わって生じる角度。∠a=60°, ∠b=80°のとき対頂角の関係から交差する三角形で生じる角x（右図の三角形の角）を求めよ。∠p=35°のとき∠q=x。",
        svg: '<svg viewBox="0 0 260 210" preserveAspectRatio="xMidYMid meet"><line x1="30" y1="40" x2="230" y2="170" stroke="white" stroke-width="1.5"/><line x1="230" y1="40" x2="30" y2="170" stroke="white" stroke-width="1.5"/><line x1="30" y1="40" x2="230" y2="40" stroke="white" stroke-width="1.5"/><line x1="30" y1="170" x2="230" y2="170" stroke="white" stroke-width="1.5"/><text x="14" y="36" font-size="14" fill="white">A</text><text x="232" y="36" font-size="14" fill="white">B</text><text x="14" y="178" font-size="14" fill="white">C</text><text x="232" y="178" font-size="14" fill="white">D</text><text x="118" y="115" font-size="14" fill="white">X</text><path d="M 42,46 A 16 16 0 0 1 48,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="56" font-size="12" fill="#f87171">60°</text><path d="M 218,46 A 16 16 0 0 0 212,56" fill="none" stroke="#f87171" stroke-width="1"/><text x="192" y="56" font-size="12" fill="#f87171">80°</text><path d="M 42,164 A 16 16 0 0 1 48,154" fill="none" stroke="#f87171" stroke-width="1"/><text x="50" y="152" font-size="12" fill="#f87171">35°</text><path d="M 218,164 A 16 16 0 0 0 212,154" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="194" y="155" font-size="14" fill="#60a5fa">x</text></svg>'
      },
      answer: "105°"
    },
  ],

  "星形多角形の角度": [
    {
      type: 'text',
      data: {
        question: "星形五角形（☆）の5つの先端の角の和を求めよ。",
        svg: '<svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet"><polygon points="110,15 130,75 190,75 143,112 161,172 110,135 59,172 77,112 30,75 90,75" fill="none" stroke="white" stroke-width="1.5"/><path d="M 104,25 A 12 12 0 0 1 116,25" fill="none" stroke="#60a5fa" stroke-width="1"/><path d="M 182,70 A 12 12 0 0 0 186,80" fill="none" stroke="#60a5fa" stroke-width="1"/><path d="M 152,166 A 12 12 0 0 0 160,173" fill="none" stroke="#60a5fa" stroke-width="1"/><path d="M 60,173 A 12 12 0 0 0 68,166" fill="none" stroke="#60a5fa" stroke-width="1"/><path d="M 34,80 A 12 12 0 0 1 38,70" fill="none" stroke="#60a5fa" stroke-width="1"/><text x="55" y="110" font-size="14" fill="white">5つの先端の</text><text x="55" y="128" font-size="14" fill="white">角の和 = ?</text></svg>',
        options: ["180°", "360°", "540°", "720°"]
      },
      answer: "180°"
    },
    {
      type: 'text',
      data: {
        question: "星形五角形の1つの先端の角が全て等しいとき、その1つの角は何度か。",
        svg: '<svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet"><polygon points="110,15 130,75 190,75 143,112 161,172 110,135 59,172 77,112 30,75 90,75" fill="none" stroke="white" stroke-width="1.5"/><path d="M 104,25 A 12 12 0 0 1 116,25" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="120" y="26" font-size="12" fill="#60a5fa">x</text></svg>'
      },
      answer: "36°"
    },
    {
      type: 'text',
      data: {
        question: "星形五角形の先端のうち4つの角が28°, 38°, 36°, 42°のとき、残り1つの角xを求めよ。",
        svg: '<svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet"><polygon points="110,15 130,75 190,75 143,112 161,172 110,135 59,172 77,112 30,75 90,75" fill="none" stroke="white" stroke-width="1.5"/><text x="100" y="28" font-size="10" fill="#60a5fa">x</text><text x="180" y="80" font-size="10" fill="#f87171">28°</text><text x="152" y="172" font-size="10" fill="#f87171">38°</text><text x="52" y="172" font-size="10" fill="#f87171">36°</text><text x="22" y="80" font-size="10" fill="#f87171">42°</text></svg>'
      },
      answer: "36°"
    },
    {
      type: 'text',
      data: {
        question: "右図のような星形（☆）で、印をつけた5つの角の和を求めよ。ヒント：三角形の外角定理を使う。",
        svg: '<svg viewBox="0 0 240 230" preserveAspectRatio="xMidYMid meet"><polyline points="110,15 59,172 190,75 30,75 161,172 110,15" fill="none" stroke="white" stroke-width="1.5"/><path d="M 104,26 A 10 10 0 0 1 116,26" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 180,72 A 10 10 0 0 0 184,80" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 153,167 A 10 10 0 0 0 161,173" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 60,173 A 10 10 0 0 0 67,167" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 36,79 A 10 10 0 0 1 40,71" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="80" y="120" font-size="14" fill="white">a+b+c+d+e = ?</text></svg>',
        options: ["90°", "180°", "270°", "360°"]
      },
      answer: "180°"
    },
    {
      type: 'text',
      data: {
        question: "図の☆形で∠a=25°, ∠b=30°, ∠c=40°, ∠d=35°のとき∠e=x を求めよ。",
        svg: '<svg viewBox="0 0 240 230" preserveAspectRatio="xMidYMid meet"><polyline points="110,15 59,172 190,75 30,75 161,172 110,15" fill="none" stroke="white" stroke-width="1.5"/><text x="104" y="28" font-size="12" fill="#60a5fa">x</text><text x="179" y="86" font-size="12" fill="#f87171">25°</text><text x="154" y="173" font-size="12" fill="#f87171">30°</text><text x="55" y="173" font-size="12" fill="#f87171">40°</text><text x="30" y="83" font-size="12" fill="#f87171">35°</text></svg>'
      },
      answer: "50°"
    },
    {
      type: 'text',
      data: {
        question: "図のような四角形の頂点から対角線を引いて作った「凧型」の先端4角の和を求めよ（6角のうち先端4つ）。",
        svg: '<svg viewBox="0 0 220 220" preserveAspectRatio="xMidYMid meet"><polygon points="110,15 190,110 110,205 30,110" fill="none" stroke="white" stroke-width="1.5"/><line x1="110" y1="15" x2="110" y2="205" stroke="white" stroke-width="1.5"/><line x1="30" y1="110" x2="190" y2="110" stroke="white" stroke-width="1.5"/><path d="M 104,26 A 10 10 0 0 1 116,26" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 182,105 A 10 10 0 0 0 182,115" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 116,196 A 10 10 0 0 0 104,196" fill="none" stroke="#60a5fa" stroke-width="1.5"/><path d="M 38,115 A 10 10 0 0 1 38,105" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="80" y="112" font-size="13" fill="white">先端4角の和=?</text></svg>',
        options: ["180°", "360°", "540°", "720°"]
      },
      answer: "360°"
    },
  ],
};