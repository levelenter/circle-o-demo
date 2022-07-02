<script setup>
import { Constants } from '../utils/constants'
import { nextTick, onMounted, ref } from 'vue'
import { nl2br, truncate } from '../utils'

const getTeachersJson = async (origin) => {
  if (origin === 'https://circle-o.jp') {
    try {
      const url = 'https://circle-o.jp/v1/teacher/getTopPageTeachers'
      const response = await fetch(url)
      if (response.ok) {
        return await response.json()
      } else {
        return null
      }
    } catch (e) {
      console.error(e)
      return null
    }
  } else {
    console.info(`origin: ${origin}, dummy json`)
    return {"status":200,"hasError":false,"errorDescription":"","errorExpandedData":null,"data":[{"user_name":"よね","appeal_movie_url":"https://youtube.com/shorts/002NITA9qNU?feature=share","self_introduction":"初めまして！よねと申します。楽しくできるというのが一番だと思うので、一緒にお話ししながら楽しくやりましょう！よろしくお願いします。","image_url":"/assets/user_files/01G1SBHNVG70PBW9H3DFCM70AC/__icon.JPG","order":1},{"user_name":"たっちゃん","appeal_movie_url":"https://youtube.com/shorts/yvXoUQ4tILg?feature=share","self_introduction":"矢壁達也（やかべたつや）と申します。秋田県にある、国際教養大学に通う大学５年生です。手話や聴覚障害について勉強してきた知識を活かせるよう頑張りますのでよろしくお願いいたします。","image_url":"/assets/user_files/01FZJ1RP2FH320RN5A1GGY8F36/__icon.jpg","order":1},{"user_name":"みゆう","appeal_movie_url":"https://youtube.com/shorts/1fAdyOu5mRI?feature=share","self_introduction":"私は両親の耳が聞こえないため、日常的にに手話を使っています。今まで、中学、高校、大学受験を経験してきました。その度に塾にも通い、人から何か学ぶ機会が多かったです。どんな先生でありたいか、また塾講師、家庭教師の経験を活かし、生徒に寄り添った指導を心がけます。","image_url":"","order":1},{"user_name":"まか","appeal_movie_url":"https://youtu.be/-Eb79fdlMgA","self_introduction":"はじめまして。まかと申します。大学生です。よろしくお願いします。シンプルで分かりやすい解説を心がけていきます。手話を流暢に使用できるので、緊張せず気軽に話してくれると嬉しいです！","image_url":"/assets/user_files/01FS49R6SG0P1W51YXYG57ECPP/__icon.PNG","order":1},{"user_name":"マユミ","appeal_movie_url":"https://youtu.be/erIuWF542Qk","self_introduction":"はじめまして！埼玉県出身のコーダ（ろう者の親を持つ聞こえる子供）。高校から海外留学をして、ギャロデット大学院でろう教育を専攻しました。卒業後にアメリカのろう学校の教員を９年ほど勤めていました。","image_url":"/assets/user_files/01FK7VC5X19GEDKNW2WPE60Z5P/__icon.jpg","order":1},{"user_name":"まほ","appeal_movie_url":"https://youtu.be/rRqIktYlKxE","self_introduction":"こんにちは！谷岡真帆(たにおかまほ)です。国立大学の教育学部に在籍しています。2年生です。趣味は、陸上とトライアスロン…そしてイラストを書くことです！陸上ではデフリンピック大会に出場経験があります(*ˊ˘ˋ*)モットーは一期一会。出会いを大切にです。みなさんに会えるのを楽しみにしています。よろしくお願いします。","image_url":"/assets/user_files/01FDS7J6ADFWKSZCE2X9KT8C8F/__icon.jpeg","order":1},{"user_name":"さや","appeal_movie_url":"https://youtu.be/wbUsoMAmPh4","self_introduction":"こんにちは！さやと言います。１歳半ごろに難聴が判明しました。両親共耳が聞こえず小さい時から手話を使って育ちました。一方で地元の学校に通って勉強したり、聴者の友達と遊んだりしていました。美術大学卒業したあとはデザインの仕事をしています。また私立の中学高校にて聴者の生徒さんにも手話を教えています。","image_url":"/assets/user_files/01FBXHGJKNHHXMDBBMR3JC6TXQ/__icon.png","order":2},{"user_name":"みお","appeal_movie_url":"https://youtu.be/ZHGXv95QHvI","self_introduction":"こんにちは！私の名前は井上澪です。下の名前澪と呼んでくれたら嬉しいです。私は茨城県の筑波技術大学、技大1年生で、18歳です。私は生まれつき耳が聞こえません。ろう学校で育ってきました。私は面白いことを言い合って笑うことが大好きです。皆さんと楽しく笑いながら学んでいきたいです。よろしくお願いします。","image_url":"/assets/user_files/01FDA0RQFV2F8EJ02BEBZQT49Q/__icon.jpeg","order":3},{"user_name":"しおね","appeal_movie_url":"https://youtu.be/9weVvlm8DDE","self_introduction":"初めまして！江原汐音(えばらしおね)です。大学で特別支援教育、手話を学び、現在大学院で情報保障について学んでいます。また、大学時代にはろう児と遊んだ経験がたくさんありますので活かせればと思っています。よろしくお願いします。","image_url":"/assets/user_files/01F6NKV5DZQAYQDKH241MS9BAV/__icon.jpeg","order":4},{"user_name":"なほこ","appeal_movie_url":"https://youtu.be/deHbzJTGALo","self_introduction":"はじめまして！なほこ先生です。大阪で生まれ育ちましたが、今はタイに住んでいます。タイのろう学校で英語を教えているよ！","image_url":"/assets/IMP/TEA_IMP_SUBJ2.JPG","order":10},{"user_name":"ぱっち","appeal_movie_url":"https://youtu.be/UV6Mwl3oTm0","self_introduction":"看護師、手話通訳、教員などの仕事をしています。趣味は、料理、けん玉、おえかき、旅行など…。","image_url":"/assets/IMP/TEA_IMP_SUBJ4.JPG","order":20},{"user_name":"かずこ","appeal_movie_url":"https://youtu.be/brjfv0pEN_U","self_introduction":"弁護士＆キコエナイ弟と育ったSODAです","image_url":"/assets/IMP/TEA_IMP_SUBJ10.JPG","order":30},{"user_name":"ゆうこ","appeal_movie_url":"https://youtu.be/gfqUPpW4X18","self_introduction":"はじめまして、笹倉佑子です。 2015年の大学生になった時から家庭教師や塾の講師のバイトを続けてきました。現在は社会人になりましたが、空き時間に生徒さんに勉強を教えることを細々と続けています。 科目としては社会以外はなんでも大丈夫なので困った時はお声掛けください。  私は人工内耳を装着していますが、私の母がコーダ（つまり私の祖父母はろう者です。）なこともあり、家の中では手話でお話しすることがほとんどです。  小中学校は難聴学級のある学校に通い、高校は一般校に通いました。大学も含め小5からは常に情報保障のサポートを受けながら授業を受けてきました。","image_url":"/assets/IMP/TEA_IMP_LANG22.JPG","order":50},{"user_name":"2B","appeal_movie_url":"https://youtu.be/gORhiFWjKlw","self_introduction":"健聴者です。2年間ガーナの聾学校でパソコンの授業をしていました。","image_url":"/assets/IMP/TEA_IMP_LANG5.JPG","order":90},{"user_name":"ふにゃこ","appeal_movie_url":"https://youtube.com/shorts/Va9igOYCh9A","self_introduction":"はじめまして！　ふにゃこ、ことふじもとゆうこです。子供の頃に触れた手話にあこがれ続け、社会人になってから、ろう者グループに混ぜてもらって身につけました。7年間ニュージーランド（NZ）に住み、手話（NZSL）を楽しく学びました。手話を通じて、日本でもNZでも仲間ができました。日本の歴史・文化が大好きで、みなさんにもたくさん学んでほしいと思いますし、そのために日本語を自由に使えるようになってもらいたいと願っています。ことばの学習のお手伝いができることは、私に手話の世界を教えてくれたろう者のみなさんへの恩返しにもなるので、とてもうれしく思います。","image_url":"/assets/IMP/TEA_IMP_LANG14.JPG","order":100},{"user_name":"わか","appeal_movie_url":"https://youtu.be/sEQn9h3pzjU","self_introduction":"聴覚障害児教育専攻のため、聴覚障害児教育について一定の知識があること、お喋りや工夫することが好きなことが強みです。一方、コミュニケーション（手話）が流暢ではないこと、実際の指導経験が少ないことが弱みです。","image_url":"/assets/IMP/TEA_IMP_LANG17.JPG","order":110},{"user_name":"しほ","appeal_movie_url":"https://youtu.be/dQ6UteX6Nb4","self_introduction":"初めまして！大学２年生の時から手話を学び始め、今年で４年目になります。普段は栄養士として勤務しております。楽しい授業ができればと思うので、よろしくお願いいたします。","image_url":"/assets/user_files/TEA_IMP_LANG26/__icon.jpeg","order":120},{"user_name":"みい","appeal_movie_url":"https://youtu.be/zDrXurhB4q0","self_introduction":"こんにちは！私は手話通訳士です。歌もフラダンス も大好き。聞こえない仲間にフラダンス を教えています。仲良くしてね！","image_url":"/assets/user_files/01F1M97ZY687BEK32R9QTF4XGZ/__icon.jpeg","order":500},{"user_name":"いなんちょー","appeal_movie_url":"https://youtu.be/MrrfJaQkFC4","self_introduction":"はじめまして、稲川直樹です。 高校までずっとろう学校に通っており、大学と大学院ではITを専門に勉強していました。 数学が得意ですが、英語や理科も一通り教えられます。また歴史や旅行が趣味なので、自分の経験をふまえて 学校では学べない？外国や歴史のお話もできます。 また地元のろう協会青年部活動で、ろうや難聴の子どもたちと交流企画を何回か実施しました。 両親と妻がろう者で、弟が聞こえる人で、手話や指文字をメインに使います。 新しいことを学んだり、本を読むのが大好きなので、「学ぶこと」の楽しさを少しでも 伝えられたらいいなと思っています。どうぞよろしくお願いいたします。","image_url":"/assets/user_files/01F1HABMQ47FZG270KQW9VHGRZ/__icon.JPG","order":500},{"user_name":"ゆうこ","appeal_movie_url":"https://youtu.be/RjcbOeW24Rc","self_introduction":"はじめまして。原田優子と申します！　私は、理学療法士をしており、ろう者の患者さんと会話をするために、手話の勉強を始めました。今は手話通訳の研修中です。仕事では20年間、救急病院やリハビリ病院、デイサービス等で患者さんのリハビリテーションに携わってきました。今は仕事をしながら通信制の学校に入って、社会福祉士の資格取得のために勉強しています。大学時代は家庭教師や塾講師の経験があります。また、大学生と高校生の二人の娘の母でもあります。勉強の事や将来の夢など、色んなお話ができたらいいなあ・・・と思っています♪","image_url":"/assets/user_files/01F19WZGE5D7MBDMSF8MPKMMAW/__icon.jpg","order":500},{"user_name":"つっきー","appeal_movie_url":"https://youtu.be/JCof3VdVQFE","self_introduction":"はじめまして！つっきーこと宮城美月です。　大学で特別支援教育を勉強しています。中学校数学の免許取得予定。小中学校は難聴学級、高校は聾学校（寮生活）で過ごしていました。　好きなものはきのこの山（お菓子）、嫌いなものはキノコ（本物）。　間違っても私にシイタケを与えないで下さい（ ; ; ）皆さんの「好き！」が聞けることを楽しみにしています！","image_url":"/assets/user_files/01F12BAVX08HTG1S6TW7HC7Z9V/__icon.jpeg","order":500},{"user_name":"サミ　Sam","appeal_movie_url":"https://youtu.be/Z8036ayrO6ohttps://youtu.be/Z8036ayrO6o","self_introduction":"国際教養大学２年生のオリバーサミュエルです。イギリスと日本のハーフですが、鹿児島生まれ鹿児島育ちです。大学ではすべての授業を英語で受けています。とにかく映画、ゲーム、サッカーが大好きです！","image_url":"/assets/user_files/01F120HAJCMDRBMXC6DKGPYG5V/__icon.jpeg","order":500},{"user_name":"えいみー","appeal_movie_url":"https://youtu.be/AkcrLeaBMK8","self_introduction":"国公立大学の農学部3年のデフファミリー育ちです。","image_url":"/assets/IMP/TEA_IMP_SUBJ8.JPG","order":500},{"user_name":"えみ","appeal_movie_url":"https://youtube.com/shorts/cjfpS2oCE5k","self_introduction":"はじめまして！ 東京農業大学4年のおざきえみです。 両耳100dB以上の難聴で、家族の中では私だけが聞こえません。 小学校から大学まで聴者と共に過ごし、手話は大学に入ってから始めました。大学２年時に手話で話せる環境を作りたく、手話サークルを設立し、他大の手話サークルと掛け持ちをしながら運営に携わっていました。大学卒業後は大学院に進学し、今は食品成分の分析などの研究をしています。","image_url":"/assets/IMP/TEA_IMP_LANG11.JPG","order":500},{"user_name":"けいこ","appeal_movie_url":"https://youtu.be/aWzJzsC5Jrw","self_introduction":"旅と観葉植物が好き 外国語も大好き","image_url":"/assets/IMP/TEA_IMP_LANG4.JPG","order":500}]}
  }
}

const teachers = ref([])

onMounted(async () => {
  const json = await getTeachersJson(location.origin)
  if (json) {
    teachers.value.push(...json.data.map(t => {
      const youtubeId = (t?.appeal_movie_url) ? t?.appeal_movie_url.split('/').pop() : ''
      return {
        ...t,
        youtubeId,
        image_url: 'https://circle-o.jp' + t.image_url,
        self_introduction: truncate(nl2br(t?.self_introduction), 69)
      }
    }))
    nextTick().then(() => {
      if (typeof Typekit !== 'undefined') {
        // console.log("%ci%c Typekit.load", "color: white; background: blue;", "");
        Typekit.load({
          scriptTimeout: 1000,
          async: true
        })
      }
    })
  }
})
</script>

<template>
  <ul class="form-row flex-nowrap flex-lg-wrap pl-405 pl-md-4 pl-lg-0">
    <li v-for="t in teachers" :class="['col-10 col-sm-5 col-lg-4 col-xl-3', Constants.mtListTeacher]">
      <div class="form-row align-items-end">
        <div class="col-6">
          <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
            <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
            <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
            <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
            <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
            <iframe loading="lazy" decoding="async" v-if="t.youtubeId" class="embed-responsive-item" :src="`https://www.youtube-nocookie.com/embed/${t.youtubeId}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="col-6">
          <picture class="d-block w-2rem w-md-205rem h-2rem h-md-205rem rounded-circle ovh bsd bw-1px">
            <source :srcset="t.image_url" :media="Constants.mdSm" />
            <img loading="lazy" decoding="async" class="w-100 h-100 of-cover" style="aspect-ratio:1/1" :src="t.image_url" :alt="t.user_name + '先生'">
          </picture>
          <h2 class="fz-xsm lh-104 clr-blk mt-1">{{ t.user_name }}<small class="ml-1">先生</small></h2>
          <p class="fz-2xs fz-2xl-xs lh-106 mt-3 mt-sm-4" v-html="t.self_introduction"></p>
        </div>
      </div>
    </li>
  </ul>
</template>
