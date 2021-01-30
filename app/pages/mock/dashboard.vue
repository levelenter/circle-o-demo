<template>
  <main class="d-none-alert" :class="constants.pxMain">
    <header class="pb-1" :class="constants.mySec">
      <ul class="row align-items-center">
        <li class="col-auto">
          <img class="w-10rem lazyload lazypreload" data-src="/img/global/logo.svg" alt="CIRCLE-O">
        </li>
        <li class="col-auto">
          <h2 class="fz-xs clr-blk text-center lh-103 ls-0">Circle<small class="font-weight-700">さん</small> <small class="font-weight-700">こんにちは</small>😄</h2>
          <small class="d-block small-2xs mt-1 lh-103 ls-0">レッスンのためにプロフを100%に</small>
        </li>
        <li class="col-auto">
          <button class="d-block py-2 px-3 w-13rem bg-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r mt-1">
            <div class="h-100 d-flex flex-wrap align-items-center">
              <div class="font-weight-700 ls-0 small">プロフィール編集(35%)</div>
              <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
            </div>
          </button>
        </li>
        <li class="col-auto">
          <button class="d-block w-11rem px-4 py-1 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
            <div class="h-100 d-flex flex-wrap align-items-center">
              <div class="font-weight-700 ls-0 fz-xs">先生を探す</div>
              <div class="ml-auto"><font-awesome-icon class="clr-wht small mb-025" :icon="['fas', 'search']" /></div>
            </div>
          </button>
        </li>
        <li class="col-auto ml-auto">
          <nuxt-link to="/" class="clr-blk font-weight-700 fz-2xs">よくある質問</nuxt-link>
        </li>
        <li class="col-auto">
          <nuxt-link to="/" class="clr-blk font-weight-700 fz-2xs">お問い合わせ</nuxt-link>
        </li>
      </ul>
    </header>
    <ul class="position-fixed z-10 topRight mr-405 mt-405 dna">
      <li class="toast fade show toast-red btn-neumo b-0 maw-20rem" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto fz-2xs clr-red font-weight-700">振替の依頼</strong>
          <small class="text-muted small-2xs font-weight-700">たった今</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          <nuxt-link to="/" class="d-block font-weight-700 fz-xsm">
            なほこ 先生より2020年12月10日(木)19時からの算数レッスンの振替希望がきています🙇💦
          </nuxt-link>
        </div>
      </li>
      <li class="toast fade show toast-red btn-neumo b-0 maw-20rem" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="mr-auto fz-2xs clr-red font-weight-700">振替の依頼</strong>
          <small class="text-muted small-2xs font-weight-700">2週間前</small>
          <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="toast-body">
          <nuxt-link to="/" class="d-block font-weight-700 fz-xsm">
            ゆうこ 先生より2020年12月08日(水)15時からの国語レッスンの振替希望がきています🙇💦
          </nuxt-link>
        </div>
      </li>
    </ul>
    <div class="row add3x-gutters" :class="constants.mtSec">
      <div class="col-md">
        <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> 受講中のレッスン</h1>
        <ul class="ml-md-2">
          <li :class="constants.whtBoard" class="mt-6 position-relative">
            <button class="position-absolute z-10 topRight mt-n4 mr-n3 d-block px-3 py-1 w-1105rem clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
              <div class="h-100 d-flex flex-wrap align-items-center">
                <div class="font-weight-700 ls-0 fz-2xs">このレッスンを予約</div>
                <div class="ml-auto"><font-awesome-icon class="clr-wht" :icon="['fas', 'plus']" /></div>
              </div>
            </button>
            <div class="row align-items-end">
              <div class="col-auto">
                <h1 class='fz-xs clr-blk'>なほこ<small class="font-weight-700">先生</small><br><strong class="fz-xl">算数 19:00−20:00 (5/12回)</strong></h1>
              </div>
              <div class="col-auto mb-2">
                <button class="d-block px-3 py-1 w-1105rem clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-weight-700 ls-0 fz-2xs">レッスン状況を見る</div>
                    <div class="ml-auto"><font-awesome-icon class="" :icon="['fas', 'ballot-check']" /></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="row no-gutters align-items-center">
              <div class="col-auto mb-025">
                <div class="w-2rem w-md-105rem d-block">
                  <picture class="d-block rounded-circle ovh bsd bw-1px">
                    <source data-srcset="/img/prof/1@0.25x.jpg" media="--sm" />
                    <img class="w-100 lazyload lazypreload" data-src="/img/prof/1@0.25x.jpg" alt="元木 哲三">
                  </picture>
                </div>
              </div>
              <div class="col-auto mt-3 mt-md-0">
                <div class="row low-gutters align-items-center">
                  <div class="col-auto">
                    <p class="fz-xs lh-103 clr-blk pl-1">｢もう少しで半分ですね！単語の記憶力すごいです！｣<!-- <small class="font-weight-700 ml-1">先生</small> --></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="form-row align-items-center mt-4">
              <div class="col-auto mb-2">
                <div class="w-2rem w-md-3rem d-block">
                  <picture class="d-block rounded-circle ovh bsd bw-1px">
                    <source data-srcset="/img/prof/7@0.25x.jpg" media="--sm" />
                    <img class="w-100 lazyload lazypreload" data-src="/img/prof/7@0.25x.jpg" alt="元木 哲三">
                  </picture>
                </div>
              </div>
              <div class="col mt-3 mt-md-0">
                <h1 class="fz-xsm lh-103 clr-blk pl-1">ゆうこ<small class="font-weight-700 ml-1">先生</small></h1>
                <ul class="form-row align-items-center">
                  <li class="col-auto">
                    <p class="fz-2xs ls-0 lh-1">サッカーが好きです^^</p>
                  </li>
                  <li class="col-auto">
                    <nuxt-link to="" class="fz-2xs ls-0 lh-1">
                      <font-awesome-icon class="clr-blk" :icon="['fas', 'user']" /> プロフィール
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div> -->
            <hr class="btda pt-405 mt-405">
            <h3 class="clr-gray-dark small-xs mb-3 lh-1">最近の状況</h3>
            <ul class="liDisc fz-md pl-2">
              <li class="mt-3 font-weight-700">
                <div class="form-row align-items-center">
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 w-705rem ls-0 font-weight-700 bg-red hvr-bg-red clr-co hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 fz-2xs">日報を見る</div>
                            <div class="ml-auto"><font-awesome-icon class="fz-2xs mb-022" :icon="['fas', 'comment-alt-edit']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="col-auto">
                    <h4 class="fz-xsm clr-gray">2020年11月26日(木) 19:00−20:00</h4>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700">
                <div class="form-row align-items-center">
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 w-705rem ls-0 font-weight-700 bg-red hvr-bg-red clr-co hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 fz-2xs">日報を見る</div>
                            <div class="ml-auto"><font-awesome-icon class="fz-2xs mb-022" :icon="['fas', 'comment-alt-edit']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="col-auto">
                    <h4 class="fz-xsm clr-gray">2020年12月03日(木) 19:00−20:00</h4>
                  </div>
                </div>
              </li>
              <li class="mt-2 font-weight-700 clr-co">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="mt-2">2020年12月10日(木) 19:00−20:00</h4>
                  </div>
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto dna">
                        <button class="d-block px-2 py-0 w-805rem ls-0 font-weight-700 bg-red hvr-bg-red clr-wht hvr-clr-red rounded-xl btn-neumo btn-neumo-red bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 fz-2xs">振替に応じる</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-wht fz-2xs mb-022" :icon="['fas', 'sync-alt']" /></div>
                          </div>
                        </button>
                      </li>
                      <li class="col-auto">
                        <button class="d-block py-0 px-205 w-7rem ls-0 bg-gray-light hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 small-xs">キャンセル</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'times']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="fz-xsm">2020年12月17日(木) 19:00−20:00</h4>
                  </div>
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 px-205 w-7rem ls-0 bg-gray-light hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 small-xs">キャンセル</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'times']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="fz-xsm">2020年12月24日(木) 19:00−20:00</h4>
                  </div>
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 px-205 w-7rem ls-0 bg-gray-light hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 small-xs">キャンセル</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'times']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <!-- <nuxt-link to="/" class="mt-405 mb-n3 fz-2xs clr-co d-block">このレッスン状況を見る<font-awesome-icon class="ml-1" :icon="['fas', 'plus']" /></nuxt-link> -->
          </li>
          <li class="mt-6 bsd bc-wht bw-02r bg-wht-op06 px-5 pt-405 pb-5 rounded-lg position-relative">
            <button class="position-absolute z-10 topRight mt-n4 mr-n3 d-block px-3 py-1 w-1105rem clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
              <div class="h-100 d-flex flex-wrap align-items-center">
                <div class="font-weight-700 ls-0 fz-2xs">このレッスンを予約</div>
                <div class="ml-auto"><font-awesome-icon class="clr-wht" :icon="['fas', 'plus']" /></div>
              </div>
            </button>
            <div class="row align-items-end">
              <div class="col-auto">
                <h1 class='fz-xs clr-blk'>ゆうこ<small class="font-weight-700">先生</small><br><strong class="fz-xl">国語 15:00−16:00 (0/12回)</strong></h1>
              </div>
              <div class="col-auto mb-2">
                <button class="d-block px-3 py-1 w-1105rem clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-weight-700 ls-0 fz-2xs">レッスン状況を見る</div>
                    <div class="ml-auto"><font-awesome-icon class="" :icon="['fas', 'ballot-check']" /></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="row no-gutters align-items-center">
              <div class="col-auto mb-025">
                <div class="w-2rem w-md-105rem d-block">
                  <picture class="d-block rounded-circle ovh bsd bw-1px">
                    <source data-srcset="/img/prof/7@0.25x.jpg" media="--sm" />
                    <img class="w-100 lazyload lazypreload" data-src="/img/prof/7@0.25x.jpg" alt="元木 哲三">
                  </picture>
                </div>
              </div>
              <div class="col-auto mt-3 mt-md-0">
                <div class="row low-gutters align-items-center">
                  <div class="col-auto">
                    <p class="fz-xs lh-103 clr-blk pl-1">｢初回は、ぜひリラックスして！がんばりましょう！｣<!-- <small class="font-weight-700 ml-1">先生</small> --></p>
                  </div>
                </div>
              </div>
            </div>
            <!-- <div class="form-row align-items-center mt-4">
              <div class="col-auto mb-2">
                <div class="w-2rem w-md-3rem d-block">
                  <picture class="d-block rounded-circle ovh bsd bw-1px">
                    <source data-srcset="/img/prof/7@0.25x.jpg" media="--sm" />
                    <img class="w-100 lazyload lazypreload" data-src="/img/prof/7@0.25x.jpg" alt="元木 哲三">
                  </picture>
                </div>
              </div>
              <div class="col mt-3 mt-md-0">
                <h1 class="fz-xsm lh-103 clr-blk pl-1">ゆうこ<small class="font-weight-700 ml-1">先生</small></h1>
                <ul class="form-row align-items-center">
                  <li class="col-auto">
                    <p class="fz-2xs ls-0 lh-1">サッカーが好きです^^</p>
                  </li>
                  <li class="col-auto">
                    <nuxt-link to="" class="fz-2xs ls-0 lh-1">
                      <font-awesome-icon class="clr-blk" :icon="['fas', 'user']" /> プロフィール
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div> -->
            <hr class="btda pt-405 mt-405">
            <h3 class="clr-gray-dark small-xs mb-3 lh-1">最近の状況</h3>
            <ul class="liDisc fz-md pl-2">
              <li class="mt-2 font-weight-700 clr-co">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="mt-2">2020年12月08日(火) 15:00−16:00</h4>
                  </div>
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 px-205 w-7rem ls-0 bg-gray-light hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 small-xs">キャンセル</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'times']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="fz-xsm">2020年12月15日(木) 15:00−16:00</h4>
                  </div>
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 px-205 w-7rem ls-0 bg-gray-light hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 small-xs">キャンセル</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'times']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="fz-xsm">2020年12月22日(木) 15:00−16:00</h4>
                  </div>
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 px-205 w-7rem ls-0 bg-gray-light hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 small-xs">キャンセル</div>
                            <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'times']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
            <!-- <nuxt-link to="/" class="mt-405 mb-n3 fz-2xs clr-co d-block">このレッスン状況を見る<font-awesome-icon class="ml-1" :icon="['fas', 'plus']" /></nuxt-link> -->
          </li>
        </ul>
      </div>
      <!-- <div class="col-md-auto mt-405 mt-md-0">
        <div class="w-25rem">
          <section class="mb-7">
            <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> ニュース</h1>
            <ul class="row low-gutters">
              <li class="col-6 mt-405">
                <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                  <picture class="h-5rem d-block ovh">
                    <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/safe_image.jpg" alt="">
                  </picture>
                  <h2 class="fz-2xs px-3 py-3 lh-103">2020年12月04日(火)、爆音コンビニ 東京都板橋区某所にオープン！...</h2>
                </a>
              </li>
              <li class="col-6 mt-405">
                <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                  <picture class="h-5rem d-block ovh">
                    <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/Co_catch.png" alt="">
                  </picture>
                  <h2 class="fz-2xs px-3 py-3 lh-103">2021年01月03日(金)、ZOOMで大集合！ろう難聴児のことばの学びを...</h2>
                </a>
              </li>
            </ul>
          </section>
          <section class="mb-7">
            <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> イベント情報</h1>
            <ul class="row low-gutters">
              <li class="col-6 mt-405">
                <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                  <picture class="h-5rem d-block ovh">
                    <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/safe_image.jpg" alt="">
                  </picture>
                  <h2 class="fz-2xs px-3 py-3 lh-103">2020年12月04日(火)、爆音コンビニ 東京都板橋区某所にオープン！...</h2>
                </a>
              </li>
              <li class="col-6 mt-405">
                <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                  <picture class="h-5rem d-block ovh">
                    <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/Co_catch.png" alt="">
                  </picture>
                  <h2 class="fz-2xs px-3 py-3 lh-103">2021年01月03日(金)、ZOOMで大集合！ろう難聴児のことばの学びを...</h2>
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div> -->
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
  name: 'MockDashboard2',
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
      title: 'DASH BOARD / CIRCLE-O',
      description: 'DASH BOARD / CIRCLE-O',
      ogImage: '/img/global/ogi/default.jpg'
    }
    return head(props, this.$store)
  }
}
</script>

<style></style>