const translationStorageKey = "ps119-translation-v1";
const currentDayStorageKey = "ps119-current-day-v1";
const prayersStorageKey = "ps119-prayers-v1";
const headingMap = {
  Aleph: "א",
  Beth: "ב",
  Gimel: "ג",
  Daleth: "ד",
  He: "ה",
  Waw: "ו",
  Zayin: "ז",
  Heth: "ח",
  Teth: "ט",
  Yodh: "י",
  Kaph: "כ",
  Lamedh: "ל",
  Mem: "מ",
  Nun: "נ",
  Samekh: "ס",
  Ayin: "ע",
  Pe: "פ",
  Tsadhe: "צ",
  Qoph: "ק",
  Resh: "ר",
  "Sin and Shin": "ש",
  Taw: "ת"
};

const rawTranslations = {
  esv: `1 Blessed are those whose way is blameless,
    who walk in the law of the Lord!
2 Blessed are those who keep his testimonies,
    who seek him with their whole heart,
3 who also do no wrong,
    but walk in his ways!
4 You have commanded your precepts
    to be kept diligently.
5 Oh that my ways may be steadfast
    in keeping your statutes!
6 Then I shall not be put to shame,
    having my eyes fixed on all your commandments.
7 I will praise you with an upright heart,
    when I learn your righteous rules.
8 I will keep your statutes;
    do not utterly forsake me!

Beth
9 How can a young man keep his way pure?
    By guarding it according to your word.
10 With my whole heart I seek you;
    let me not wander from your commandments!
11 I have stored up your word in my heart,
    that I might not sin against you.
12 Blessed are you, O Lord;
    teach me your statutes!
13 With my lips I declare
    all the rules of your mouth.
14 In the way of your testimonies I delight
    as much as in all riches.
15 I will meditate on your precepts
    and fix my eyes on your ways.
16 I will delight in your statutes;
    I will not forget your word.

Gimel
17 Deal bountifully with your servant,
    that I may live and keep your word.
18 Open my eyes, that I may behold
    wondrous things out of your law.
19 I am a sojourner on the earth;
    hide not your commandments from me!
20 My soul is consumed with longing
    for your rules at all times.
21 You rebuke the insolent, accursed ones,
    who wander from your commandments.
22 Take away from me scorn and contempt,
    for I have kept your testimonies.
23 Even though princes sit plotting against me,
    your servant will meditate on your statutes.
24 Your testimonies are my delight;
    they are my counselors.

Daleth
25 My soul clings to the dust;
    give me life according to your word!
26 When I told of my ways, you answered me;
    teach me your statutes!
27 Make me understand the way of your precepts,
    and I will meditate on your wondrous works.
28 My soul melts away for sorrow;
    strengthen me according to your word!
29 Put false ways far from me
    and graciously teach me your law!
30 I have chosen the way of faithfulness;
    I set your rules before me.
31 I cling to your testimonies, O Lord;
    let me not be put to shame!
32 I will run in the way of your commandments
    when you enlarge my heart!

He
33 Teach me, O Lord, the way of your statutes;
    and I will keep it to the end.
34 Give me understanding, that I may keep your law
    and observe it with my whole heart.
35 Lead me in the path of your commandments,
    for I delight in it.
36 Incline my heart to your testimonies,
    and not to selfish gain!
37 Turn my eyes from looking at worthless things;
    and give me life in your ways.
38 Confirm to your servant your promise,
    that you may be feared.
39 Turn away the reproach that I dread,
    for your rules are good.
40 Behold, I long for your precepts;
    in your righteousness give me life!

Waw
41 Let your steadfast love come to me, O Lord,
    your salvation according to your promise;
42 then shall I have an answer for him who taunts me,
    for I trust in your word.
43 And take not the word of truth utterly out of my mouth,
    for my hope is in your rules.
44 I will keep your law continually,
    forever and ever,
45 and I shall walk in a wide place,
    for I have sought your precepts.
46 I will also speak of your testimonies before kings
    and shall not be put to shame,
47 for I find my delight in your commandments,
    which I love.
48 I will lift up my hands toward your commandments, which I love,
    and I will meditate on your statutes.

Zayin
49 Remember your word to your servant,
    in which you have made me hope.
50 This is my comfort in my affliction,
    that your promise gives me life.
51 The insolent utterly deride me,
    but I do not turn away from your law.
52 When I think of your rules from of old,
    I take comfort, O Lord.
53 Hot indignation seizes me because of the wicked,
    who forsake your law.
54 Your statutes have been my songs
    in the house of my sojourning.
55 I remember your name in the night, O Lord,
    and keep your law.
56 This blessing has fallen to me,
    that I have kept your precepts.

Heth
57 The Lord is my portion;
    I promise to keep your words.
58 I entreat your favor with all my heart;
    be gracious to me according to your promise.
59 When I think on my ways,
    I turn my feet to your testimonies;
60 I hasten and do not delay
    to keep your commandments.
61 Though the cords of the wicked ensnare me,
    I do not forget your law.
62 At midnight I rise to praise you,
    because of your righteous rules.
63 I am a companion of all who fear you,
    of those who keep your precepts.
64 The earth, O Lord, is full of your steadfast love;
    teach me your statutes!

Teth
65 You have dealt well with your servant,
    O Lord, according to your word.
66 Teach me good judgment and knowledge,
    for I believe in your commandments.
67 Before I was afflicted I went astray,
    but now I keep your word.
68 You are good and do good;
    teach me your statutes.
69 The insolent smear me with lies,
    but with my whole heart I keep your precepts;
70 their heart is unfeeling like fat,
    but I delight in your law.
71 It is good for me that I was afflicted,
    that I might learn your statutes.
72 The law of your mouth is better to me
    than thousands of gold and silver pieces.

Yodh
73 Your hands have made and fashioned me;
    give me understanding that I may learn your commandments.
74 Those who fear you shall see me and rejoice,
    because I have hoped in your word.
75 I know, O Lord, that your rules are righteous,
    and that in faithfulness you have afflicted me.
76 Let your steadfast love comfort me
    according to your promise to your servant.
77 Let your mercy come to me, that I may live;
    for your law is my delight.
78 Let the insolent be put to shame,
    because they have wronged me with falsehood;
    as for me, I will meditate on your precepts.
79 Let those who fear you turn to me,
    that they may know your testimonies.
80 May my heart be blameless in your statutes,
    that I may not be put to shame!

Kaph
81 My soul longs for your salvation;
    I hope in your word.
82 My eyes long for your promise;
    I ask, “When will you comfort me?”
83 For I have become like a wineskin in the smoke,
    yet I have not forgotten your statutes.
84 How long must your servant endure?
    When will you judge those who persecute me?
85 The insolent have dug pitfalls for me;
    they do not live according to your law.
86 All your commandments are sure;
    they persecute me with falsehood; help me!
87 They have almost made an end of me on earth,
    but I have not forsaken your precepts.
88 In your steadfast love give me life,
    that I may keep the testimonies of your mouth.

Lamedh
89 Forever, O Lord, your word
    is firmly fixed in the heavens.
90 Your faithfulness endures to all generations;
    you have established the earth, and it stands fast.
91 By your appointment they stand this day,
    for all things are your servants.
92 If your law had not been my delight,
    I would have perished in my affliction.
93 I will never forget your precepts,
    for by them you have given me life.
94 I am yours; save me,
    for I have sought your precepts.
95 The wicked lie in wait to destroy me,
    but I consider your testimonies.
96 I have seen a limit to all perfection,
    but your commandment is exceedingly broad.

Mem
97 Oh how I love your law!
    It is my meditation all the day.
98 Your commandment makes me wiser than my enemies,
    for it is ever with me.
99 I have more understanding than all my teachers,
    for your testimonies are my meditation.
100 I understand more than the aged,
    for I keep your precepts.
101 I hold back my feet from every evil way,
    in order to keep your word.
102 I do not turn aside from your rules,
    for you have taught me.
103 How sweet are your words to my taste,
    sweeter than honey to my mouth!
104 Through your precepts I get understanding;
    therefore I hate every false way.

Nun
105 Your word is a lamp to my feet
    and a light to my path.
106 I have sworn an oath and confirmed it,
    to keep your righteous rules.
107 I am severely afflicted;
    give me life, O Lord, according to your word!
108 Accept my freewill offerings of praise, O Lord,
    and teach me your rules.
109 I hold my life in my hand continually,
    but I do not forget your law.
110 The wicked have laid a snare for me,
    but I do not stray from your precepts.
111 Your testimonies are my heritage forever,
    for they are the joy of my heart.
112 I incline my heart to perform your statutes
    forever, to the end.

Samekh
113 I hate the double-minded,
    but I love your law.
114 You are my hiding place and my shield;
    I hope in your word.
115 Depart from me, you evildoers,
    that I may keep the commandments of my God.
116 Uphold me according to your promise, that I may live,
    and let me not be put to shame in my hope!
117 Hold me up, that I may be safe
    and have regard for your statutes continually!
118 You spurn all who go astray from your statutes,
    for their cunning is in vain.
119 All the wicked of the earth you discard like dross,
    therefore I love your testimonies.
120 My flesh trembles for fear of you,
    and I am afraid of your judgments.

Ayin
121 I have done what is just and right;
    do not leave me to my oppressors.
122 Give your servant a pledge of good;
    let not the insolent oppress me.
123 My eyes long for your salvation
    and for the fulfillment of your righteous promise.
124 Deal with your servant according to your steadfast love,
    and teach me your statutes.
125 I am your servant; give me understanding,
    that I may know your testimonies!
126 It is time for the Lord to act,
    for your law has been broken.
127 Therefore I love your commandments
    above gold, above fine gold.
128 Therefore I consider all your precepts to be right;
    I hate every false way.

Pe
129 Your testimonies are wonderful;
    therefore my soul keeps them.
130 The unfolding of your words gives light;
    it imparts understanding to the simple.
131 I open my mouth and pant,
    because I long for your commandments.
132 Turn to me and be gracious to me,
    as is your way with those who love your name.
133 Keep steady my steps according to your promise,
    and let no iniquity get dominion over me.
134 Redeem me from man's oppression,
    that I may keep your precepts.
135 Make your face shine upon your servant,
    and teach me your statutes.
136 My eyes shed streams of tears,
    because people do not keep your law.

Tsadhe
137 Righteous are you, O Lord,
    and right are your rules.
138 You have appointed your testimonies in righteousness
    and in all faithfulness.
139 My zeal consumes me,
    because my foes forget your words.
140 Your promise is well tried,
    and your servant loves it.
141 I am small and despised,
    yet I do not forget your precepts.
142 Your righteousness is righteous forever,
    and your law is true.
143 Trouble and anguish have found me out,
    but your commandments are my delight.
144 Your testimonies are righteous forever;
    give me understanding that I may live.

Qoph
145 With my whole heart I cry; answer me, O Lord!
    I will keep your statutes.
146 I call to you; save me,
    that I may observe your testimonies.
147 I rise before dawn and cry for help;
    I hope in your words.
148 My eyes are awake before the watches of the night,
    that I may meditate on your promise.
149 Hear my voice according to your steadfast love;
    O Lord, according to your justice give me life.
150 They draw near who persecute me with evil purpose;
    they are far from your law.
151 But you are near, O Lord,
    and all your commandments are true.
152 Long have I known from your testimonies
    that you have founded them forever.

Resh
153 Look on my affliction and deliver me,
    for I do not forget your law.
154 Plead my cause and redeem me;
    give me life according to your promise!
155 Salvation is far from the wicked,
    for they do not seek your statutes.
156 Great is your mercy, O Lord;
    give me life according to your rules.
157 Many are my persecutors and my adversaries,
    but I do not swerve from your testimonies.
158 I look at the faithless with disgust,
    because they do not keep your commands.
159 Consider how I love your precepts!
    Give me life, O Lord, according to your steadfast love.
160 The sum of your word is truth,
    and every one of your righteous rules endures forever.

Sin and Shin
161 Princes persecute me without cause,
    but my heart stands in awe of your words.
162 I rejoice at your word
    like one who finds great spoil.
163 I hate and abhor falsehood,
    but I love your law.
164 Seven times a day I praise you
    for your righteous rules.
165 Great peace have those who love your law;
    nothing can make them stumble.
166 I hope for your salvation, O Lord,
    and I do your commandments.
167 My soul keeps your testimonies;
    I love them exceedingly.
168 I keep your precepts and testimonies,
    for all my ways are before you.

Taw
169 Let my cry come before you, O Lord;
    give me understanding according to your word!
170 Let my plea come before you;
    deliver me according to your word.
171 My lips will pour forth praise,
    for you teach me your statutes.
172 My tongue will sing of your word,
    for all your commandments are right.
173 Let your hand be ready to help me,
    for I have chosen your precepts.
174 I long for your salvation, O Lord,
    and your law is my delight.
175 Let my soul live and praise you,
    and let your rules help me.
176 I have gone astray like a lost sheep; seek your servant,
    for I do not forget your commandments.`,
  niv: `1 Blessed are those whose ways are blameless,
    who walk according to the law of the Lord.
2 Blessed are those who keep his statutes
    and seek him with all their heart—
3 they do no wrong
    but follow his ways.
4 You have laid down precepts
    that are to be fully obeyed.
5 Oh, that my ways were steadfast
    in obeying your decrees!
6 Then I would not be put to shame
    when I consider all your commands.
7 I will praise you with an upright heart
    as I learn your righteous laws.
8 I will obey your decrees;
    do not utterly forsake me.

ב Beth
9 How can a young person stay on the path of purity?
    By living according to your word.
10 I seek you with all my heart;
    do not let me stray from your commands.
11 I have hidden your word in my heart
    that I might not sin against you.
12 Praise be to you, Lord;
    teach me your decrees.
13 With my lips I recount
    all the laws that come from your mouth.
14 I rejoice in following your statutes
    as one rejoices in great riches.
15 I meditate on your precepts
    and consider your ways.
16 I delight in your decrees;
    I will not neglect your word.

ג Gimel
17 Be good to your servant while I live,
    that I may obey your word.
18 Open my eyes that I may see
    wonderful things in your law.
19 I am a stranger on earth;
    do not hide your commands from me.
20 My soul is consumed with longing
    for your laws at all times.
21 You rebuke the arrogant, who are accursed,
    those who stray from your commands.
22 Remove from me their scorn and contempt,
    for I keep your statutes.
23 Though rulers sit together and slander me,
    your servant will meditate on your decrees.
24 Your statutes are my delight;
    they are my counselors.

ד Daleth
25 I am laid low in the dust;
    preserve my life according to your word.
26 I gave an account of my ways and you answered me;
    teach me your decrees.
27 Cause me to understand the way of your precepts,
    that I may meditate on your wonderful deeds.
28 My soul is weary with sorrow;
    strengthen me according to your word.
29 Keep me from deceitful ways;
    be gracious to me and teach me your law.
30 I have chosen the way of faithfulness;
    I have set my heart on your laws.
31 I hold fast to your statutes, Lord;
    do not let me be put to shame.
32 I run in the path of your commands,
    for you have broadened my understanding.

ה He
33 Teach me, Lord, the way of your decrees,
    that I may follow it to the end.[b]
34 Give me understanding, so that I may keep your law
    and obey it with all my heart.
35 Direct me in the path of your commands,
    for there I find delight.
36 Turn my heart toward your statutes
    and not toward selfish gain.
37 Turn my eyes away from worthless things;
    preserve my life according to your word.[c]
38 Fulfill your promise to your servant,
    so that you may be feared.
39 Take away the disgrace I dread,
    for your laws are good.
40 How I long for your precepts!
    In your righteousness preserve my life.

ו Waw
41 May your unfailing love come to me, Lord,
    your salvation, according to your promise;
42 then I can answer anyone who taunts me,
    for I trust in your word.
43 Never take your word of truth from my mouth,
    for I have put my hope in your laws.
44 I will always obey your law,
    for ever and ever.
45 I will walk about in freedom,
    for I have sought out your precepts.
46 I will speak of your statutes before kings
    and will not be put to shame,
47 for I delight in your commands
    because I love them.
48 I reach out for your commands, which I love,
    that I may meditate on your decrees.

ז Zayin
49 Remember your word to your servant,
    for you have given me hope.
50 My comfort in my suffering is this:
    Your promise preserves my life.
51 The arrogant mock me unmercifully,
    but I do not turn from your law.
52 I remember, Lord, your ancient laws,
    and I find comfort in them.
53 Indignation grips me because of the wicked,
    who have forsaken your law.
54 Your decrees are the theme of my song
    wherever I lodge.
55 In the night, Lord, I remember your name,
    that I may keep your law.
56 This has been my practice:
    I obey your precepts.

ח Heth
57 You are my portion, Lord;
    I have promised to obey your words.
58 I have sought your face with all my heart;
    be gracious to me according to your promise.
59 I have considered my ways
    and have turned my steps to your statutes.
60 I will hasten and not delay
    to obey your commands.
61 Though the wicked bind me with ropes,
    I will not forget your law.
62 At midnight I rise to give you thanks
    for your righteous laws.
63 I am a friend to all who fear you,
    to all who follow your precepts.
64 The earth is filled with your love, Lord;
    teach me your decrees.

ט Teth
65 Do good to your servant
    according to your word, Lord.
66 Teach me knowledge and good judgment,
    for I trust your commands.
67 Before I was afflicted I went astray,
    but now I obey your word.
68 You are good, and what you do is good;
    teach me your decrees.
69 Though the arrogant have smeared me with lies,
    I keep your precepts with all my heart.
70 Their hearts are callous and unfeeling,
    but I delight in your law.
71 It was good for me to be afflicted
    so that I might learn your decrees.
72 The law from your mouth is more precious to me
    than thousands of pieces of silver and gold.

י Yodh
73 Your hands made me and formed me;
    give me understanding to learn your commands.
74 May those who fear you rejoice when they see me,
    for I have put my hope in your word.
75 I know, Lord, that your laws are righteous,
    and that in faithfulness you have afflicted me.
76 May your unfailing love be my comfort,
    according to your promise to your servant.
77 Let your compassion come to me that I may live,
    for your law is my delight.
78 May the arrogant be put to shame for wronging me without cause;
    but I will meditate on your precepts.
79 May those who fear you turn to me,
    those who understand your statutes.
80 May I wholeheartedly follow your decrees,
    that I may not be put to shame.

כ Kaph
81 My soul faints with longing for your salvation,
    but I have put my hope in your word.
82 My eyes fail, looking for your promise;
    I say, “When will you comfort me?”
83 Though I am like a wineskin in the smoke,
    I do not forget your decrees.
84 How long must your servant wait?
    When will you punish your persecutors?
85 The arrogant dig pits to trap me,
    contrary to your law.
86 All your commands are trustworthy;
    help me, for I am being persecuted without cause.
87 They almost wiped me from the earth,
    but I have not forsaken your precepts.
88 In your unfailing love preserve my life,
    that I may obey the statutes of your mouth.

ל Lamedh
89 Your word, Lord, is eternal;
    it stands firm in the heavens.
90 Your faithfulness continues through all generations;
    you established the earth, and it endures.
91 Your laws endure to this day,
    for all things serve you.
92 If your law had not been my delight,
    I would have perished in my affliction.
93 I will never forget your precepts,
    for by them you have preserved my life.
94 Save me, for I am yours;
    I have sought out your precepts.
95 The wicked are waiting to destroy me,
    but I will ponder your statutes.
96 To all perfection I see a limit,
    but your commands are boundless.

מ Mem
97 Oh, how I love your law!
    I meditate on it all day long.
98 Your commands are always with me
    and make me wiser than my enemies.
99 I have more insight than all my teachers,
    for I meditate on your statutes.
100 I have more understanding than the elders,
    for I obey your precepts.
101 I have kept my feet from every evil path
    so that I might obey your word.
102 I have not departed from your laws,
    for you yourself have taught me.
103 How sweet are your words to my taste,
    sweeter than honey to my mouth!
104 I gain understanding from your precepts;
    therefore I hate every wrong path.

נ Nun
105 Your word is a lamp for my feet,
    a light on my path.
106 I have taken an oath and confirmed it,
    that I will follow your righteous laws.
107 I have suffered much;
    preserve my life, Lord, according to your word.
108 Accept, Lord, the willing praise of my mouth,
    and teach me your laws.
109 Though I constantly take my life in my hands,
    I will not forget your law.
110 The wicked have set a snare for me,
    but I have not strayed from your precepts.
111 Your statutes are my heritage forever;
    they are the joy of my heart.
112 My heart is set on keeping your decrees
    to the very end.[d]

ס Samekh
113 I hate double-minded people,
    but I love your law.
114 You are my refuge and my shield;
    I have put my hope in your word.
115 Away from me, you evildoers,
    that I may keep the commands of my God!
116 Sustain me, my God, according to your promise, and I will live;
    do not let my hopes be dashed.
117 Uphold me, and I will be delivered;
    I will always have regard for your decrees.
118 You reject all who stray from your decrees,
    for their delusions come to nothing.
119 All the wicked of the earth you discard like dross;
    therefore I love your statutes.
120 My flesh trembles in fear of you;
    I stand in awe of your laws.

ע Ayin
121 I have done what is righteous and just;
    do not leave me to my oppressors.
122 Ensure your servant’s well-being;
    do not let the arrogant oppress me.
123 My eyes fail, looking for your salvation,
    looking for your righteous promise.
124 Deal with your servant according to your love
    and teach me your decrees.
125 I am your servant; give me discernment
    that I may understand your statutes.
126 It is time for you to act, Lord;
    your law is being broken.
127 Because I love your commands
    more than gold, more than pure gold,
128 and because I consider all your precepts right,
    I hate every wrong path.

פ Pe
129 Your statutes are wonderful;
    therefore I obey them.
130 The unfolding of your words gives light;
    it gives understanding to the simple.
131 I open my mouth and pant,
    longing for your commands.
132 Turn to me and have mercy on me,
    as you always do to those who love your name.
133 Direct my footsteps according to your word;
    let no sin rule over me.
134 Redeem me from human oppression,
    that I may obey your precepts.
135 Make your face shine on your servant
    and teach me your decrees.
136 Streams of tears flow from my eyes,
    for your law is not obeyed.

צ Tsadhe
137 You are righteous, Lord,
    and your laws are right.
138 The statutes you have laid down are righteous;
    they are fully trustworthy.
139 My zeal wears me out,
    for my enemies ignore your words.
140 Your promises have been thoroughly tested,
    and your servant loves them.
141 Though I am lowly and despised,
    I do not forget your precepts.
142 Your righteousness is everlasting
    and your law is true.
143 Trouble and distress have come upon me,
    but your commands give me delight.
144 Your statutes are always righteous;
    give me understanding that I may live.

ק Qoph
145 I call with all my heart; answer me, Lord,
    and I will obey your decrees.
146 I call out to you; save me
    and I will keep your statutes.
147 I rise before dawn and cry for help;
    I have put my hope in your word.
148 My eyes stay open through the watches of the night,
    that I may meditate on your promises.
149 Hear my voice in accordance with your love;
    preserve my life, Lord, according to your laws.
150 Those who devise wicked schemes are near,
    but they are far from your law.
151 Yet you are near, Lord,
    and all your commands are true.
152 Long ago I learned from your statutes
    that you established them to last forever.

ר Resh
153 Look on my suffering and deliver me,
    for I have not forgotten your law.
154 Defend my cause and redeem me;
    preserve my life according to your promise.
155 Salvation is far from the wicked,
    for they do not seek out your decrees.
156 Your compassion, Lord, is great;
    preserve my life according to your laws.
157 Many are the foes who persecute me,
    but I have not turned from your statutes.
158 I look on the faithless with loathing,
    for they do not obey your word.
159 See how I love your precepts;
    preserve my life, Lord, in accordance with your love.
160 All your words are true;
    all your righteous laws are eternal.

ש Sin and Shin
161 Rulers persecute me without cause,
    but my heart trembles at your word.
162 I rejoice in your promise
    like one who finds great spoil.
163 I hate and detest falsehood
    but I love your law.
164 Seven times a day I praise you
    for your righteous laws.
165 Great peace have those who love your law,
    and nothing can make them stumble.
166 I wait for your salvation, Lord,
    and I follow your commands.
167 I obey your statutes,
    for I love them greatly.
168 I obey your precepts and your statutes,
    for all my ways are known to you.

ת Taw
169 May my cry come before you, Lord;
    give me understanding according to your word.
170 May my supplication come before you;
    deliver me according to your promise.
171 May my lips overflow with praise,
    for you teach me your decrees.
172 May my tongue sing of your word,
    for all your commands are righteous.
173 May your hand be ready to help me,
    for I have chosen your precepts.
174 I long for your salvation, Lord,
    and your law gives me delight.
175 Let me live that I may praise you,
    and may your laws sustain me.
176 I have strayed like a lost sheep.
    Seek your servant,
    for I have not forgotten your commands.`
};

const translations = {
  niv: parseTranslation(rawTranslations.niv),
  esv: parseTranslation(rawTranslations.esv)
};

const schedule = [
  { date: "2026-06-21", label: "Aleph", start: 1, end: 2 },
  { date: "2026-06-22", label: "Aleph", start: 3, end: 4 },
  { date: "2026-06-23", label: "Aleph", start: 5, end: 6 },
  { date: "2026-06-24", label: "Aleph", start: 7, end: 8 },
  { date: "2026-06-25", label: "Beth", start: 9, end: 10 },
  { date: "2026-06-26", label: "Beth", start: 11, end: 12 },
  { date: "2026-06-27", label: "Beth", start: 13, end: 16 },
  { date: "2026-06-28", label: "Gimel", start: 17, end: 18 },
  { date: "2026-06-29", label: "Gimel", start: 19, end: 20 },
  { date: "2026-06-30", label: "Gimel", start: 21, end: 22 },
  { date: "2026-07-01", label: "Gimel", start: 23, end: 24 },
  { date: "2026-07-02", label: "Daleth", start: 25, end: 26 },
  { date: "2026-07-03", label: "Daleth", start: 27, end: 28 },
  { date: "2026-07-04", label: "Daleth", start: 29, end: 32 },
  { date: "2026-07-05", label: "He", start: 33, end: 34 },
  { date: "2026-07-06", label: "He", start: 35, end: 36 },
  { date: "2026-07-07", label: "He", start: 37, end: 38 },
  { date: "2026-07-08", label: "He", start: 39, end: 40 },
  { date: "2026-07-09", label: "Waw", start: 41, end: 42 },
  { date: "2026-07-10", label: "Waw", start: 43, end: 44 },
  { date: "2026-07-11", label: "Waw", start: 45, end: 48 },
  { date: "2026-07-12", label: "Zayin", start: 49, end: 50 },
  { date: "2026-07-13", label: "Zayin", start: 51, end: 52 },
  { date: "2026-07-14", label: "Zayin", start: 53, end: 54 },
  { date: "2026-07-15", label: "Zayin", start: 55, end: 56 },
  { date: "2026-07-16", label: "Heth", start: 57, end: 58 },
  { date: "2026-07-17", label: "Heth", start: 59, end: 60 },
  { date: "2026-07-18", label: "Heth", start: 61, end: 64 },
  { date: "2026-07-19", label: "Teth", start: 65, end: 66 },
  { date: "2026-07-20", label: "Teth", start: 67, end: 68 },
  { date: "2026-07-21", label: "Teth", start: 69, end: 70 },
  { date: "2026-07-22", label: "Teth", start: 71, end: 72 },
  { date: "2026-07-23", label: "Yodh", start: 73, end: 74 },
  { date: "2026-07-24", label: "Yodh", start: 75, end: 76 },
  { date: "2026-07-25", label: "Yodh", start: 77, end: 80 },
  { date: "2026-07-26", label: "Kaph", start: 81, end: 82 },
  { date: "2026-07-27", label: "Kaph", start: 83, end: 84 },
  { date: "2026-07-28", label: "Kaph", start: 85, end: 86 },
  { date: "2026-07-29", label: "Kaph", start: 87, end: 88 },
  { date: "2026-07-30", label: "Lamedh", start: 89, end: 90 },
  { date: "2026-07-31", label: "Lamedh", start: 91, end: 92 },
  { date: "2026-08-01", label: "Lamedh", start: 93, end: 96 },
  { date: "2026-08-02", label: "Mem", start: 97, end: 98 },
  { date: "2026-08-03", label: "Mem", start: 99, end: 100 },
  { date: "2026-08-04", label: "Mem", start: 101, end: 102 },
  { date: "2026-08-05", label: "Mem", start: 103, end: 104 },
  { date: "2026-08-06", label: "Nun", start: 105, end: 106 },
  { date: "2026-08-07", label: "Nun", start: 107, end: 108 },
  { date: "2026-08-08", label: "Nun", start: 109, end: 112 },
  { date: "2026-08-09", label: "Samekh", start: 113, end: 114 },
  { date: "2026-08-10", label: "Samekh", start: 115, end: 116 },
  { date: "2026-08-11", label: "Samekh", start: 117, end: 118 },
  { date: "2026-08-12", label: "Samekh", start: 119, end: 120 },
  { date: "2026-08-13", label: "Ayin", start: 121, end: 122 },
  { date: "2026-08-14", label: "Ayin", start: 123, end: 124 },
  { date: "2026-08-15", label: "Ayin", start: 125, end: 128 },
  { date: "2026-08-16", label: "Pe", start: 129, end: 130 },
  { date: "2026-08-17", label: "Pe", start: 131, end: 132 },
  { date: "2026-08-18", label: "Pe", start: 133, end: 134 },
  { date: "2026-08-19", label: "Pe", start: 135, end: 136 },
  { date: "2026-08-20", label: "Tsadhe", start: 137, end: 138 },
  { date: "2026-08-21", label: "Tsadhe", start: 139, end: 140 },
  { date: "2026-08-22", label: "Tsadhe", start: 141, end: 144 },
  { date: "2026-08-23", label: "Qoph", start: 145, end: 146 },
  { date: "2026-08-24", label: "Qoph", start: 147, end: 148 },
  { date: "2026-08-25", label: "Qoph", start: 149, end: 150 },
  { date: "2026-08-26", label: "Qoph", start: 151, end: 152 },
  { date: "2026-08-27", label: "Resh", start: 153, end: 154 },
  { date: "2026-08-28", label: "Resh", start: 155, end: 156 },
  { date: "2026-08-29", label: "Resh", start: 157, end: 160 },
  { date: "2026-08-30", label: "Sin and Shin", start: 161, end: 162 },
  { date: "2026-08-31", label: "Sin and Shin", start: 163, end: 164 },
  { date: "2026-09-01", label: "Sin and Shin", start: 165, end: 166 },
  { date: "2026-09-02", label: "Sin and Shin", start: 167, end: 168 },
  { date: "2026-09-03", label: "Taw", start: 169, end: 170 },
  { date: "2026-09-04", label: "Taw", start: 171, end: 172 },
  { date: "2026-09-05", label: "Taw", start: 173, end: 176 }
];

const dayMeta = document.querySelector("#dayMeta");
const dayTitle = document.querySelector("#dayTitle");
const dayRange = document.querySelector("#dayRange");
const verseBlocks = document.querySelector("#verseBlocks");
const resetAppButton = document.querySelector("#resetAppButton");
const prevDay = document.querySelector("#prevDay");
const nextDay = document.querySelector("#nextDay");
const translationToggle = document.querySelector("#translationToggle");
const prayerFocusButton = document.querySelector("#prayerFocusButton");
const selectedVerseLabel = document.querySelector("#selectedVerseLabel");
const selectedVerseText = document.querySelector("#selectedVerseText");
const prayerInput = document.querySelector("#prayerInput");
const savePrayerButton = document.querySelector("#savePrayerButton");
const saveStatus = document.querySelector("#saveStatus");

let currentIndex = loadCurrentIndex();
let currentTranslation = loadTranslation();
let prayersByDay = loadPrayers();

render();
applyTheme();

prevDay.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
});

nextDay.addEventListener("click", () => {
  if (currentIndex < schedule.length - 1) {
    currentIndex += 1;
    render();
  }
});

resetAppButton.addEventListener("click", () => {
  const confirmed = window.confirm(
    "This will erase saved prayers, your saved day, and your translation setting on this device."
  );

  if (!confirmed) {
    return;
  }

  const typed = window.prompt('Type RESET to clear everything on this device.', "");

  if (typed !== "RESET") {
    return;
  }

  window.localStorage.removeItem(currentDayStorageKey);
  window.localStorage.removeItem(prayersStorageKey);
  window.localStorage.removeItem(translationStorageKey);

  prayersByDay = {};
  currentTranslation = "niv";
  currentIndex = getTodayIndex();
  applyTheme();
  render();
});

translationToggle.addEventListener("click", () => {
  currentTranslation = currentTranslation === "niv" ? "esv" : "niv";
  window.localStorage.setItem(translationStorageKey, currentTranslation);
  applyTheme();
  render();
});

prayerFocusButton.addEventListener("click", () => {
  const selectedText = getSelectedVerseText();

  if (selectedText) {
    setSelectedVerse(selectedText);
  }

  prayerInput.focus();
  prayerInput.setSelectionRange(prayerInput.value.length, prayerInput.value.length);
});

savePrayerButton.addEventListener("click", () => {
  const dayKey = getCurrentDayKey();
  const currentRecord = prayersByDay[dayKey] || {};

  prayersByDay[dayKey] = {
    prayerText: prayerInput.value.trim(),
    selectedText: currentRecord.selectedText || ""
  };

  if (!prayersByDay[dayKey].prayerText && !prayersByDay[dayKey].selectedText) {
    delete prayersByDay[dayKey];
  }

  savePrayers();
  setSaveStatus("Saved on this device.");
});

prayerInput.addEventListener("input", () => {
  setSaveStatus("Unsaved changes.");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    prevDay.click();
  }

  if (event.key === "ArrowRight") {
    nextDay.click();
  }
});

function render() {
  const day = schedule[currentIndex];
  const versePairs = groupVerses(day.start, day.end);
  const translationName = currentTranslation.toUpperCase();
  const headingPrefix = headingMap[day.label] ? `${headingMap[day.label]} ` : "";
  const currentPrayer = prayersByDay[getCurrentDayKey()] || { prayerText: "", selectedText: "" };

  dayMeta.textContent = `Day ${currentIndex + 1} of ${schedule.length} - ${formatDate(day.date)}`;
  dayTitle.textContent = `${headingPrefix}${day.label}`;
  dayRange.textContent = `Psalm 119:${day.start}-${day.end} - ${translationName}`;

  verseBlocks.innerHTML = versePairs
    .map((pair) => {
      const verseHtml = renderVerseGroup(pair);

      return `<article class="verse-block">${verseHtml}</article>`;
    })
    .join("");

  prevDay.disabled = currentIndex === 0;
  nextDay.disabled = currentIndex === schedule.length - 1;
  translationToggle.setAttribute("aria-pressed", String(currentTranslation === "esv"));
  prayerInput.value = currentPrayer.prayerText || "";
  setSelectedVerse(currentPrayer.selectedText || "");
  setSaveStatus("");
  saveCurrentIndex();
}

function renderVerseGroup(pair) {
  const activeVerses = translations[currentTranslation];

  if (!Array.isArray(activeVerses) || activeVerses.length !== 176) {
    return `
      <p class="missing-copy">
        <strong>${currentTranslation.toUpperCase()} text is not loaded yet.</strong>
        Add the licensed ${currentTranslation.toUpperCase()} Psalm 119 verses in the translation source, and this day will show verses ${pair[0]}${pair[1] ? `-${pair[pair.length - 1]}` : ""}.
      </p>
    `;
  }

  return pair
    .map((number) => {
      return `
        <p class="verse">
          <span class="verse-number">${number}</span>
          ${activeVerses[number - 1]}
        </p>
      `;
    })
    .join("");
}

function groupVerses(start, end) {
  const groups = [];

  for (let number = start; number <= end; number += 2) {
    const pair = [number];

    if (number + 1 <= end) {
      pair.push(number + 1);
    }

    groups.push(pair);
  }

  return groups;
}

function parseTranslation(rawText) {
  const normalized = rawText
    .replace(/\r/g, "")
    .replace(/\[[^\]]+\]/g, "")
    .replace(/(\S)\d+/g, "$1");

  const matches = Array.from(normalized.matchAll(/(?:^|\n)(\d{1,3})\s+([\s\S]*?)(?=(?:\n\d{1,3}\s)|$)/g));

  return matches.map((match) => cleanVerse(match[2]));
}

function cleanVerse(text) {
  return text
    .replace(/^\s*[א-ת]?\s*(Aleph|Beth|Gimel|Daleth|He|Waw|Zayin|Heth|Teth|Yodh|Kaph|Lamedh|Mem|Nun|Samekh|Ayin|Pe|Tsadhe|Qoph|Resh|Sin and Shin|Taw)\s*$/gm, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+([,.;:!?])/g, "$1")
    .trim();
}

function getTodayIndex() {
  const today = formatIsoDate(new Date());
  const foundIndex = schedule.findIndex((day) => day.date === today);

  if (foundIndex >= 0) {
    return foundIndex;
  }

  if (today < schedule[0].date) {
    return 0;
  }

  return schedule.length - 1;
}

function loadCurrentIndex() {
  const savedDay = window.localStorage.getItem(currentDayStorageKey);

  if (savedDay) {
    const savedIndex = schedule.findIndex((day) => day.date === savedDay);

    if (savedIndex >= 0) {
      return savedIndex;
    }
  }

  return getTodayIndex();
}

function loadTranslation() {
  const saved = window.localStorage.getItem(translationStorageKey);
  return saved === "esv" ? "esv" : "niv";
}

function loadPrayers() {
  try {
    const saved = window.localStorage.getItem(prayersStorageKey);
    const parsed = saved ? JSON.parse(saved) : {};
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function savePrayers() {
  window.localStorage.setItem(prayersStorageKey, JSON.stringify(prayersByDay));
}

function saveCurrentIndex() {
  window.localStorage.setItem(currentDayStorageKey, getCurrentDayKey());
}

function getCurrentDayKey() {
  return schedule[currentIndex].date;
}

function setSelectedVerse(text) {
  const trimmed = text.trim();
  const dayKey = getCurrentDayKey();

  if (trimmed) {
    selectedVerseLabel.hidden = false;
    selectedVerseText.hidden = false;
    selectedVerseText.textContent = trimmed;
    prayersByDay[dayKey] = {
      prayerText: prayerInput.value.trim(),
      selectedText: trimmed
    };
    savePrayers();
    return;
  }

  selectedVerseLabel.hidden = true;
  selectedVerseText.hidden = true;
  selectedVerseText.textContent = "";
}

function getSelectedVerseText() {
  const selection = window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return "";
  }

  const text = selection.toString().replace(/\s+/g, " ").trim();

  if (!text) {
    return "";
  }

  const range = selection.getRangeAt(0);
  const parent = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentElement
    : range.commonAncestorContainer;

  return verseBlocks.contains(parent) ? text : "";
}

function setSaveStatus(message) {
  saveStatus.textContent = message;
}

function applyTheme() {
  document.body.dataset.theme = currentTranslation === "esv" ? "esv" : "niv";
}

function formatIsoDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(dateText) {
  const date = new Date(`${dateText}T12:00:00`);
  return date.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}
