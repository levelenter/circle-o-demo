<template>
  <main class="d-none-alert" :class="constants.pxMain">
    <header class="pb-1" :class="constants.mbSec">
      <ul class="form-row align-items-center mt-2">
        <li class="col-auto">
          <nuxt-link to="/mock/dashboard/" class="clr-blk font-weight-700 small-xs fz-md-2xs hvr-no">🏠 HOME</nuxt-link>
        </li>
        <li class="col-auto ml-auto">
          <nuxt-link to="/" class="clr-blk font-weight-700 small-xs fz-md-2xs">よくある質問</nuxt-link>
        </li>
        <li class="col-auto">
          <nuxt-link to="/" class="clr-blk font-weight-700 small-xs fz-md-2xs">お問い合わせ</nuxt-link>
        </li>
      </ul>
      <ul class="row low-gutters row-sm align-items-center flex-nowrap mt-405 mt-sm-3">
        <li class="col-auto">
          <nuxt-link to="/mock/dashboard/" class="d-block hvr-no">
            <img class="w-505rem w-sm-7rem w-md-9rem" src="/img/global/logo.svg" alt="CIRCLE-O">
          </nuxt-link>
        </li>
        <li class="col">
          <ul class="row low-gutters row-sm flex-nowrap align-items-center">
            <li class="col-7 col-sm-auto">
              <div class="form-row row-md">
                <div class="col-sm-auto">
                  <h2 class="fz-xs clr-blk text-md-center lh-103 ls-0">Circle<small class="font-weight-700">さん</small> <small class="font-weight-700">こんにちは</small>😄</h2>
                  <small class="d-block small-2xs mt-sm-1 lh-103 ls-n005">レッスンのためにプロフを100%に</small>
                </div>
                <div class="col-sm-auto">
                  <button class="d-block py-1 px-2 py-sm-2 px-sm-3 w-12rem w-md-13rem bg-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r mt-sm-1">
                    <div class="h-100 d-flex flex-wrap align-items-center">
                      <div class="font-weight-700 ls-0 small">プロフィール編集(35%)</div>
                      <div class="ml-auto"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
                    </div>
                  </button>
                </div>
              </div>
            </li>
            <li class="col">
              <button class="d-block w-9rem w-md-10rem py-2 px-4 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
                <div class="h-100 form-row flex-wrap align-items-center">
                  <div class="font-weight-700 ls-0 fz-xs">先生を探す</div>
                  <div class="ml-auto"><font-awesome-icon class="clr-wht small mb-025" :icon="['fas', 'search']" /></div>
                </div>
              </button>
            </li>
          </ul>
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
    <div class="row add2x-gutters add3x-3xl-gutters flex-xl-nowrap" :class="constants.mtSec">
      <div class="col-xl">
        <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> Welcome to Circle O</h1>
        <div :class="[constants.whtBoard,constants.mtSec]">
          <h2 :class="constants.fzLg" class="clr-co fz-xl-2xl"> ろう･難聴児向けオンライン対話授業<br class="d-none d-xl-block">｢サークルオー｣にご登録ありがとうございます🙆‍♀️🙆‍♂️</h2>
          <h3 class="mt-405 fz-md">授業開始に向けて､下記ステップを進めて行きましょう！</h3>
          <ul class="liDic mt-3 font-RyoGothic-B fz-xsm pl-1 bf-clr-co">
            <li class="mt-2">プロフィールの完成 <small class="font-RyoGothic-B clr-gray-dark">(レッスンがよりスムーズ)</small></li>
            <li class="mt-2">運営との初回面談 <small class="font-RyoGothic-B clr-gray-dark">(ことば検査)</small>の日程調整</li>
            <li class="mt-2">初回面談実施</li>
            <li class="mt-2">先生を予約する</li>
            <li class="mt-2">授業開始</li>
          </ul>
          <p class="mt-3">まずは､｢プロフィールの完成｣｢初回面談の日程調整｣から始めてください！ご不明点などは､<a class="clr-line" href="https://lin.ee/PMtIjxz" target=""><font-awesome-icon :icon="['fab', 'line']" /> 公式LINE</a>よりお気軽にお問い合わせください！運営チームがお答えします。</p>
          <a href="https://docs.google.com/document/d/1ZwbPGmkFjvdyKx_Zp1YJC0OS3g8TIrNx9_EAHPb6U14/edit#heading=h.49lo9z5tojsc" class="d-block mt-4 py-2 px-3 px-sm-4 fz-sm w-100 w-md-26rem hvr-bg-blk clr-wht rounded-xl btn-neumo-co bsd bc-wht bw-02r" target="_blank">
            <div class="h-100 d-flex flex-wrap align-items-center">
              <div class="font-weight-700 ls-0">Google Docs でさらに詳しく読む</div>
              <div class="ml-auto"><font-awesome-icon class="mb-025" :icon="['fas', 'external-link']" /></div>
            </div>
          </a>
        </div>
        <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> 受講中のレッスン</h1>
        <ul class="ml-md-2">
          <li :class="[constants.whtBoard,constants.mtSec]" class="position-relative">
            <button class="position-absolute z-10 topRight mt-n4 mr-n3 d-block px-3 py-1 py-md-2 w-1105rem w-md-14rem clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
              <div class="h-100 d-flex flex-wrap align-items-center">
                <div class="font-weight-700 ls-0 fz-2xs fz-md-xs">このレッスンを予約</div>
                <div class="ml-auto"><font-awesome-icon class="clr-wht" :icon="['fas', 'plus']" /></div>
              </div>
            </button>
            <div class="row no-gutters row-sm align-items-sm-center flex-nowrap">
              <div class="col col-sm-auto">
                <h1 class='fz-xs clr-blk'>なほこ<small class="font-weight-700">先生</small><strong class="fz-lg fz-md-xl d-block">算数 <span class="fz-xsm fz-sm-1em d-block d-sm-inline font-weight-bolder font-RyoGothic-B">19:00−20:00 (5/12回)</span></strong></h1>
              </div>
              <div class="col-auto mt-4 mt-sm-405 mb-2">
                <button class="d-block px-3 py-1 w-1105rem clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-weight-700 ls-0 fz-2xs ls-n001">レッスン状況を見る</div>
                    <div class="ml-auto"><font-awesome-icon class="" :icon="['fas', 'ballot-check']" /></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="row no-gutters flex-nowrap mt-3 mt-sm-2">
              <div class="col-auto mb-md-025">
                <div class="w-2rem h-2rem d-block">
                  <picture class="d-block rounded-circle ovh bsd bw-1px">
                    <source data-srcset="/img/prof/1@0.25x.jpg" media="--sm" />
                    <img class="w-100 h-100 of-cover lazyload lazypreload" data-src="/img/prof/1@0.25x.jpg" alt="元木 哲三">
                  </picture>
                </div>
              </div>
              <div class="col">
                <p class="fz-lg-xsm lh-103 clr-blk pl-3 pl-md-2 mt-sm-2">｢もう少しで半分ですね！単語の記憶力すごいです！｣</p>
              </div>
            </div>
            <hr class="btda pt-405 mt-405">
            <h3 class="clr-gray-dark small-xs mb-3 lh-1">最近の状況</h3>
            <ul class="liDisc fz-md pl-2">
              <li class="mt-3 font-weight-700">
                <div class="form-row flex-nowrap align-items-sm-center">
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 w-605rem w-md-7rem ls-0 font-weight-700 bg-red hvr-bg-red clr-co hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 fz-2xs">日報を見る</div>
                            <div class="ml-auto"><font-awesome-icon class="fz-2xs mb-022" :icon="['fas', 'comment-alt-edit']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <h4 class="fz-xsm clr-gray lh-102">2021年02月19日(木) <small class="font-weight-700">19:00−20:00</small></h4>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700">
                <div class="form-row flex-nowrap align-items-sm-center">
                  <div class="col-auto">
                    <ul class="form-row">
                      <li class="col-auto">
                        <button class="d-block py-0 w-605rem w-md-7rem ls-0 font-weight-700 bg-red hvr-bg-red clr-co hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                          <div class="h-100 d-flex flex-wrap align-items-center">
                            <div class="font-weight-700 ls-0 fz-2xs">日報を見る</div>
                            <div class="ml-auto"><font-awesome-icon class="fz-2xs mb-022" :icon="['fas', 'comment-alt-edit']" /></div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div class="col">
                    <h4 class="fz-xsm clr-gray lh-102">2021年02月12日(木) <small class="font-weight-700">19:00−20:00</small></h4>
                  </div>
                </div>
              </li>
              <li class="mt-3 font-weight-700 clr-co">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="mt-2 lh-102">2020年12月10日(木) <small class="font-weight-700">19:00−20:00</small></h4>
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
                    <h4 class="fz-xsm lh-103">2020年12月17日(木) <small class="font-weight-700">19:00−20:00</small></h4>
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
                    <h4 class="fz-xsm lh-103">2020年12月24日(木) <small class="font-weight-700">19:00−20:00</small></h4>
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
          </li>
          <li :class="[constants.whtBoard,constants.mtSec]" class="position-relative">
            <button class="position-absolute z-10 topRight mt-n4 mr-n3 d-block px-3 py-1 py-md-2 w-1105rem w-md-14rem clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
              <div class="h-100 d-flex flex-wrap align-items-center">
                <div class="font-weight-700 ls-0 fz-2xs fz-md-xs">このレッスンを予約</div>
                <div class="ml-auto"><font-awesome-icon class="clr-wht" :icon="['fas', 'plus']" /></div>
              </div>
            </button>
            <div class="row no-gutters row-sm align-items-sm-center flex-nowrap">
              <div class="col col-sm-auto">
                <h1 class='fz-xs clr-blk'>ゆうこ<small class="font-weight-700">先生</small><strong class="fz-lg fz-md-xl d-block">国語 <span class="fz-xsm fz-sm-1em d-block d-sm-inline font-weight-bolder font-RyoGothic-B">15:00−16:00 (0/12回)</span></strong></h1>
              </div>
              <div class="col-auto mt-4 mt-sm-405 mb-2">
                <button class="d-block px-3 py-1 w-1105rem clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-wht bw-02r">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-weight-700 ls-0 fz-2xs ls-n001">レッスン状況を見る</div>
                    <div class="ml-auto"><font-awesome-icon class="" :icon="['fas', 'ballot-check']" /></div>
                  </div>
                </button>
              </div>
            </div>
            <div class="row no-gutters flex-nowrap mt-3 mt-sm-2">
              <div class="col-auto mb-md-025">
                <div class="w-2rem h-2rem d-block">
                  <picture class="d-block rounded-circle ovh bsd bw-1px">
                    <source data-srcset="/img/prof/1@0.25x.jpg" media="--sm" />
                    <img class="w-100 h-100 of-cover lazyload lazypreload" data-src="/img/prof/1@0.25x.jpg" alt="元木 哲三">
                  </picture>
                </div>
              </div>
              <div class="col">
                <p class="fz-lg-xsm lh-103 clr-blk pl-3 pl-md-2 mt-sm-2">｢初回は､ぜひリラックスして！がクスして！がクスして！がクスして！がんばりましょう！｣</p>
              </div>
            </div>
            <hr class="btda pt-405 mt-405">
            <h3 class="clr-gray-dark small-xs mb-3 lh-1">最近の状況</h3>
            <ul class="liDisc fz-md pl-2">
              <li class="mt-3 font-weight-700 clr-co">
                <div class="form-row align-items-center">
                  <div class="col">
                    <h4 class="mt-2 lh-102">2021年02月24日(木) <small class="font-weight-700">15:00−16:00</small></h4>
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
                    <h4 class="fz-xsm lh-103">2021年03月17日(木) <small class="font-weight-700">15:00−16:00</small></h4>
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
                    <h4 class="fz-xsm lh-103">2021年03月24日(木) <small class="font-weight-700">15:00−16:00</small></h4>
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
          </li>
        </ul>
      </div>
      <div class="col-xl-auto mt-7 mt-xl-0">
        <div class="w-xl-25rem">
          <ul class="row add-gutters add2x-lg-gutters">
            <li class="col-md-6 col-xl-12">
              <section class="mb-7">
                <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> ニュース</h1>
                <ul class="row low-gutters">
                  <li class="col-6 mt-405">
                    <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                      <!-- <picture class="h-5rem d-block ovh">
                        <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/safe_image.jpg" alt="">
                      </picture> -->
                      <div class="px-3 py-3">
                        <time class="small-xs clr-co mb-2 d-block font-RyoGothic-B">2021.02.03</time>
                        <h2 class="fz-2xs lh-103">2020年12月04日(火)､爆音コンビニ 東京都板橋区某所にオープン！...</h2>
                      </div>
                    </a>
                  </li>
                  <li class="col-6 mt-405">
                    <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                      <!-- <picture class="h-5rem d-block ovh">
                        <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/Co_catch.png" alt="">
                      </picture> -->
                      <div class="px-3 py-3">
                        <time class="small-xs clr-co mb-2 d-block font-RyoGothic-B">2021.02.03</time>
                        <h2 class="fz-2xs lh-103">2021年01月03日(金)､ZOOMで大集合！ろう難聴児のことばの学びを...</h2>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
            </li>
            <li class="col-md-6 col-xl-12">
              <section class="mb-7">
                <h1 class="fz-xsm lh-1 clr-co pl-025"><font-awesome-icon :icon="['fas', 'dot-circle']" /> イベント情報</h1>
                <ul class="row low-gutters">
                  <li class="col-6 mt-405">
                    <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                      <!-- <picture class="h-5rem d-block ovh">
                        <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/safe_image.jpg" alt="">
                      </picture> -->
                      <div class="px-3 py-3">
                        <time class="small-xs clr-co mb-2 d-block font-RyoGothic-B">2021.02.03</time>
                        <h2 class="fz-2xs lh-103">2020年12月04日(火)､爆音コンビニ 東京都板橋区某所にオープン！...</h2>
                      </div>
                    </a>
                  </li>
                  <li class="col-6 mt-405">
                    <a class="d-block bsd bc-wht bw-02r bg-wht-op06 rounded-lg ovh" href="_blank">
                      <!-- <picture class="h-5rem d-block ovh">
                        <img class="w-100 img-align-center lazyload lazypreload" data-src="/img/evt/Co_catch.png" alt="">
                      </picture> -->
                      <div class="px-3 py-3">
                        <time class="small-xs clr-co mb-2 d-block font-RyoGothic-B">2021.02.03</time>
                        <h2 class="fz-2xs lh-103">2021年01月03日(金)､ZOOMで大集合！ろう難聴児のことばの学びを...</h2>
                      </div>
                    </a>
                  </li>
                </ul>
              </section>
            </li>
          </ul>
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