<template>
  <main :class="[constants.pxMain,constants.mtSec]" class="mh-100vh d-flex flex-wrap align-items-center justify-content-center">
    <div class="col-11 col-sm-7 col-lg-5 col-xl-4">
      <div class="row justify-content-center" :class="[constants.mtSec]">
        <div class="col-7">
          <img class="w-100 lazyload lazypreload" data-src="/img/teaser/logo.svg" alt="CIRCLE-O">
        </div>
        <div class="col-12" :class="[constants.mtSec]">
          <h1 class="font-RyoGothic-B clr-co lh-105 ls-0 pt-1" :class="[constants.mtSec,constants.fzMd]">ろう児・難聴児の<br>オンライン対話学習コミュニティ｢Circle O - サークルオー｣</h1>
          <h2 :class="[constants.mtSec]" class="clr-blk">オンライン対話学習で｢ろう・難聴児の学び｣を止めない。</h2>
          <p :class="[constants.mtP]">新型コロナの影響で、コミュニケーション機会が減少している、ろう・難聴児に双方向型「オンライン対話授業」を届けよう</p>
          <p :class="[constants.mtP]">コロナ禍における「新しい生活様式」の普及によって生活にマスクは必需品となりました。この「口が見えない」マスクを多くの人が着用することで、話しかけられていることにも気づくことができず、先生やお友達とのコミュニケーションが取りにくい状況になった子どもたちがいます。</p>
          <p :class="[constants.mtP]">オンライン対話コミュニティcircle O（サークルオー）が、そんな状況にある、ろう児・難聴児のご家庭へオンライン授業の無償提供を行います。子どもたちの「学びを止めない」ために、ぜひご活用ください。</p>
          <div class="embed-responsive embed-responsive-16by9 rounded ovh z-1 position-relative bsd bc-cos bw-03r bg-gray-light mt-3">
            <iframe class="w-100 rounded ovh lazypreload lazyload"  data-src="https://www.youtube-nocookie.com/embed/-5zzlWjnoac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <h3 :class="[constants.mtSec]" class="clr-blk">テーマを探索することで語彙力を増やしていく</h3>
          <p :class="[constants.mtP]">言葉の語彙というのは世界を知るためのきっかけ、ヒントになるものだと思います。本プロジェクトが展開する「ことばの教材」では、自分の世界を対話を通して広げていくように、会話を通して子どもたち自身の辞書が広がっていく学習教材を作成しています。</p>
          <h3 :class="[constants.mtSec]" class="clr-blk">手話と国語とイメージと</h3>
          <p :class="[constants.mtP]">本プロジェクトでは手話、ことば、絵、など様々な角度から一つの概念を伝えていきます。ことばに対するイメージがわかない子どもでも、対話を通して一緒にその概念を獲得していく方法を作っていくことで、"わかる"を作り出していきます。</p>
          <h3 :class="[constants.mtSec]" class="clr-blk">相互のコミュニケーションから思考力を鍛える</h3>
          <p :class="[constants.mtP]">本プロジェクトでは、単なることばの教材ではなく、なぜ？どうして？といった思考力を鍛えていく方法で学んでいきます。「朝顔」に対して、対話を通して、色は？匂いは？いつ頃咲く？みたときにどんな気持ちになる？など、多角的に考えていくことで、ものごとに対する表現力と語彙を広げていきます。</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import head from '@/compositions/head.ts'
import SpTel from '@/components/SpTel'
import useWebFont from '@/compositions/web-font'
import useFadeInByClass from '@/compositions/fade-in-by-class'
import useBreakPoint from '@/compositions/break-point'
import { mapGetters } from 'vuex'

export default {
  name: 'MockTeaser',
  components: { SpTel },
  layout: 'app',
  data() {
    return {
      videoSrc: null,
      muted: false,
      slideIndex: 0,
      options: {
        type: 'fade',
        rewind: true,
        autoplay: true,
        speed: 1500,
        interval: 5200,
        pagination: false,
        arrows: false,
      }
    }
  },
  setup(props, ctx) {
    useWebFont(ctx)
    useFadeInByClass(ctx, 'effectIn')
    const bp = useBreakPoint(ctx)
    return {
      bp: bp.state
    }
  },
  computed: {
    ...mapGetters({
      isSpTel: 'ua/isSpTel'
    }),
  },
  methods: {
    scrollTo(element) {
      return {
        el: element,
        duration: 1000
      }
    },
    onMove(splide, newIndex, oldIndex, dest) {
      setTimeout(() => {
        this.slideIndex = newIndex
      }, 1)
    },
    toggleMute() {
      this.$refs.video.muted = !this.$refs.video.muted
      this.muted = this.$refs.video.muted
    },
    onEnter() {
      this.$refs.video.play()
    },
    onLeave() {
      this.$refs.video.pause()
    },
    changeSlide(number) {
      this.$refs.mv.go(number)
    }
  },
  head() {
    const props = {
      bodyClasses: ['page-home'],
      title: 'ろう児・難聴児のオンライン対話学習コミュニティ「Circle O - サークルオー｣',
      description: 'コロナ禍における「新しい生活様式」の普及によって生活にマスクは必需品となりました。この「口が見えない」マスクを多くの人が着用することで、話しかけられていることにも気づくことができず、先生やお友達とのコミュニケーションが取りにくい状況になった子どもたちがいます。オンライン対話コミュニティcircle O（サークルオー）が、そんな状況にある、ろう児・難聴児のご家庭へオンライン授業の無償提供を行います。子どもたちの「学びを止めない」ために、ぜひご活用ください。',
      ogImage: '/img/teaser/teaser.jpg'
    }
    return head(props, this.$store)
  }
}
</script>

<style></style>


