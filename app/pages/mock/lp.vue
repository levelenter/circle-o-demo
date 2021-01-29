<template>
  <main :class="constants.pxMain">
    <header class="pt-2" :class="constants.mySec">
      <ul class="row no-gutters row-md align-items-center">
        <li class="col-auto">
          <img class="w-7rem w-md-10rem lazyload lazypreload" data-src="/img/global/logo.svg" alt="CIRCLE-O">
        </li>
        <li class="col-auto ml-auto">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_MpLUgaoXjWf9_5nS2mu-A0Hf9_xu66E2lQuMUx-h075h3g/viewform" target="_blank" class="d-block w-11rem w-sm-13rem px-3 px-sm-4 py-2 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo-co bsd bc-wht bw-02r">
            <div class="h-100 d-flex flex-wrap align-items-center">
              <div class="font-V7MG-EB fz-xs">無料お申し込み</div>
              <div class="ml-auto"><font-awesome-icon class="clr-wht small" :icon="['fas', 'hands-helping']" /></div>
            </div>
          </a>
        </li>
        <li class="col-auto ml-2">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdB6e9nSS-JI3TyrDNTLsUDkVujJSDQ2l2O9Cu5YiG4ewYY_w/viewform" target="_blank" class="d-block w-9rem w-sm-13rem px-3 px-sm-4 py-2 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo-co bsd bc-wht bw-02r">
            <div class="h-100 d-flex flex-wrap align-items-center">
              <div class="font-V7MG-EB fz-xs">先生になる</div>
              <div class="ml-auto"><font-awesome-icon class="clr-wht small" :icon="['fas', 'user-edit']" /></div>
            </div>
          </a>
        </li>
      </ul>
    </header>
    <h1 class="text-center clr-blk fz-tl font-V7MG-EB lh-1 pt-3 pb-405">
      <span class="ls-n0105 bigger-lg strong ml-n2 mb-2 d-block clr-co">
        <span class="mr-2">話</span>そう<span class="ml-1">､</span><span class="mr-2">学</span>ぼう!
      </span>
      <span class="d-block my-3 my-md-4"><span class="ls-n01 mr-1">オンライン</span>対話授業</span>
      <strong class="d-block ls-n01">｢サークルオー｣<span class="ls-n01">スタート👨‍💻</span></strong>
    </h1>
    <div class="mx-n2">
      <ul class="row no-gutters form-sm-row justify-content-between justify-content-sm-center">
        <li class="col-auto">
          <div class="row no-gutters justify-content-center align-items-center">
            <div class="col-auto">
              <img class="w-2rem w-sm-105rem w-md-2rem lazyload" data-src="/img/global/win-l.svg">
            </div>
            <div class="col-auto">
              <h2 class="clr-blk font-V7MG-EB text-center lh-1 lh-md-102" :class="constants.fzLg"><span class="fz-2xs clr-co d-block mb-025">無償提供<br>授業回数</span><span class="ls-n01">1153<small class="font-V7MG-B fz-2xs"> 回以上</small></span></h2>
            </div>
            <div class="col-auto">
              <img class="w-2rem w-sm-105rem w-md-2rem lazyload" data-src="/img/global/win-r.svg">
            </div>
          </div>
        </li>
        <li class="col-auto">
          <div class="row no-gutters justify-content-center align-items-center">
            <div class="col-auto">
              <img class="w-2rem w-sm-105rem w-md-2rem lazyload" data-src="/img/global/win-l.svg">
            </div>
            <div class="col-auto">
              <h2 class="clr-blk font-V7MG-EB text-center lh-1 lh-md-102" :class="constants.fzLg"><span class="fz-2xs clr-co d-block mb-025">授業<br>満足度</span>94.8<small class="font-V7MG-B fz-xs">%</small></h2>
            </div>
            <div class="col-auto">
              <img class="w-2rem w-sm-105rem w-md-2rem lazyload" data-src="/img/global/win-r.svg">
            </div>
          </div>
        </li>
        <li class="col-auto">
          <div class="row no-gutters justify-content-center align-items-center">
            <div class="col-auto">
              <img class="w-2rem w-sm-105rem w-md-2rem lazyload" data-src="/img/global/win-l.svg">
            </div>
            <div class="col-auto">
              <h2 class="clr-blk font-V7MG-EB text-center lh-1 lh-md-102" :class="constants.fzLg"><span class="fz-2xs clr-co d-block mb-025">有料継続<br>希望度</span>94.7<small class="font-V7MG-B fz-xs">%</small></h2>
            </div>
            <div class="col-auto">
              <img class="w-2rem w-sm-105rem w-md-2rem lazyload" data-src="/img/global/win-r.svg">
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="row justify-content-center" :class="constants.mbLg">
      <div class="col-10 col-sm-6 col-md-7 mt-5">
        <img data-src="/img/global/illust/4-2.svg" alt="" class="w-100 pr-3 lazyload lazypreload">
        <h3 class="font-V7MG-EB text-center lh-104 clr-co fz-md-sm mt-n5 mt-md-n6 pl-2">ろう･難聴児に双方向型<br>｢<strong class="clr-red">オンライン対話授業</strong>｣を</h3>
      </div>
      <div class="col-11 col-sm-9">
        <h2 :class="constants.mtLg" class="text-center clr-blk font-V7MG-EB lh-1">
          <span class="d-block mb-2 fz-tl clr-co">広げよう!</span>
          <strong class="d-block fz-xl fz-sm-2xl ls-0">👩‍🎓ろう･難聴児の学びを💮</strong></span>
        </h2>
        <div :class="constants.mtP" class="embed-responsive embed-responsive-16by9 rounded ovh z-1 position-relative bsd bc-co bw-05r bg-co btn-neumo">
          <iframe class="w-100 rounded ovh lazypreload lazyload"  data-src="https://www.youtube-nocookie.com/embed/-5zzlWjnoac" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div class="row low-gutters justify-content-center align-items-center mt-2">
          <div class="col-auto">
            <h3 class="small-2xs ls-0 clr-blk">powerded by <a href="https://silentvoice.co.jp/" class="clr-sv small-xs ml-1" target="_blank">Silent Voice</a></h3>
          </div>
          <div class="col-auto">
            <img data-src="/img/global/logo-sv-port.svg" alt="" class="w-1rem lazyload lazypreload">
          </div>
        </div>
        <h2 :class="constants.mtLg" class="text-center clr-blk font-V7MG-EB lh-1">
          <span class="d-block mb-2 fz-tl clr-co">先生は未来の自分!</span>
          <strong class="d-block fz-xl fz-sm-2xl ls-n005">👨‍🏫各界の先生が世界を拓く👩‍🏫</strong>
        </h2>
        <p :class="constants.mtP">学校の先生、弁護士、海外在住、スポーツ選手などさまざまなジャンルで活躍する先生が在籍しています。お子さまのコミュニケーション手段・学習言語・文化・聴力等といったろう・難聴児における多様性の重点項目を考慮した"授業"を提供しています。</p>
      </div>
      <div class="col-12">
        <div class="ovyh h-23rem h-sm-21rem h-md-auto mt-2 mx-n3 mx-md-n4 mx-lg-0">
          <div class="ovxs ovh-md">
            <ul class="form-row flex-nowrap flex-md-wrap add2x-xl-gutters add3x-4xl-gutters pl-3 pl-md-0 pb-5 pb-md-0">
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/deHbzJTGALo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">なほこ<small class="ml-1">先生</small></h2>
                    <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP">紹介文紹介文紹介文紹介文紹介文紹介文こういうので頑張ります</p>
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/UV6Mwl3oTm0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">ぱっち<small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/brjfv0pEN_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">かずこ<small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/RjcbOeW24Rc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">ゆうこ<small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/gfqUPpW4X18" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">ささくら ゆうこ <small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/zDrXurhB4q0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">みい <small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/cjfpS2oCE5k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">えみ <small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="col-10 col-sm-5 col-md-6" :class="constants.mtListTeacher">
                <div class="form-row align-items-end">
                  <div class="col-6">
                    <div class="ovh z-1 position-relative h-vt-moive rounded position-relative bsd bg-co bw-04r bc-co embed-responsive embed-responsive-1by1 effect-neumo">
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                      <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                      <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                      <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/GvwvVUL9h4g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="w-2rem w-md-205rem d-block">
                      <picture class="d-block rounded-circle ovh bsd bw-1px">
                        <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                        <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                      </picture>
                    </div>
                    <h2 class="fz-xsm lh-104 clr-blk my-3">まいか<small class="ml-1">先生</small></h2>
                    <!-- <p class="fz-2xs fz-2xl-xs lh-106" :class="constants.myP"></p> -->
                    <ul>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">教科</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>国語</li>
                            <li>数学</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">曜日</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>月</li>
                            <li>金</li>
                          </ul>
                        </div>
                      </li>
                      <li class="row no-gutters mt-025">
                        <div class="col-auto w-205rem">
                          <h3 class="font-RyoGothic-B small-xs">タイプ</h3>
                        </div>
                        <div class="col">
                          <ul class="liDi fz-2xs lh-102">
                            <li>難聴者</li>
                            <li>日本手話</li>
                            <li>日本語手話</li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-11 col-sm-9">
        <h2 :class="constants.mtLg" class="text-center clr-blk font-V7MG-EB lh-1">
          <span class="d-block mb-2 fz-tl clr-co">手軽に授業を予約!</span>
          <strong class="d-block fz-xl fz-sm-2xl ls-0">🙆‍♂️授業サポートの充実🙆</strong></span>
        </h2>
        <p :class="constants.mtP">先生の予約・連絡や実施内容の確認まで、予約管理システムで完結！困った時のサポート体制も充実。</p>
        <!-- <div class="text-right">
          <img data-src="/img/example/1.png" alt="" class="mb-n9 w-12rem d-inline-block lazyload lazypreload">
        </div> -->
      </div>
      <div class="col-12">
        <div :class="[constants.mtP,constants.mxNmain]">
          <img data-src="/img/example/3.png" alt="" class="w-100 lazyload lazypreload">
        </div>
      </div>
      <div class="col-11 col-sm-9">
        <h2 :class="constants.mtLg" class="text-center clr-blk font-V7MG-EB lh-1 mx-n3">
          <span class="d-block mb-2 ls-n005 fz-tl clr-co">2021年7月まで無料</span>
          <strong class="d-block fz-xl fz-sm-2xl ls-n005">聴覚障害のある6歳〜18歳の方</strong></span>
        </h2>
        <p :class="constants.mtP">インターネット環境があれば、いつでもどこからでも授業を受けることができます。全国の皆様からのご応募お待ちしております｡</p>
        <h3 :class="constants.mtP" class="font-V7MG-EB clr-co fz-xsm pb-205 text-md-center">オンライン授業に必要なもの</h3>
      </div>
      <div class="col-11 col-sm-9 col-md-12">
        <ul class="form-row">
          <li class="col-md-4 mt-1">
            <div class="form-row flex-nowrap align-items-center align-items-md-start">
              <div class="col-auto">
                <font-awesome-icon class="clr-red fz-3xl" :icon="['fas', 'wifi']" />
              </div>
              <div class="col">
                <h4 class="font-V7MG-EB clr-blk fz-2xs">インターネット環境</h4>
                <p class="fz-2xs lh-102 mt-1">インターネット環境の詳細はZoomの公式サイトをご確認ください。</p>
              </div>
            </div>
          </li>
          <li class="col-md-4 mt-1">
            <div class="form-row flex-nowrap align-items-center align-items-md-start">
              <div class="col-auto">
                <img data-src="/img/global/illust/3-1.svg" alt="" class="w-5rem shadow-light lazyload lazypreload">
              </div>
              <div class="col">
                <h4 class="font-V7MG-EB clr-blk fz-2xs">WEBカメラとパソコン</h4>
                <p class="fz-2xs lh-102 mt-1">動作環境の詳細はZoomの公式サイトをご確認ください。スマホ/タブレットでのご利用はできません。</p>
              </div>
            </div>
          </li>
          <li class="col-md-4 mt-1">
            <div class="form-row flex-nowrap align-items-center align-items-md-start">
              <div class="col-auto">
                <font-awesome-icon class="clr-line fz-4xl ml-1 mr-1" :icon="['fab', 'line']" />
              </div>
              <div class="col">
                <h4 class="font-V7MG-EB clr-blk fz-2xs">LINEアカウント</h4>
                <p class="fz-2xs lh-102 mt-1">授業予約の調整、その他連絡事項等はLINE公式アカウントを使用いたします。個人のLINEアカウントを先生/生徒間で交換する必要はありません。</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-12">
        <div :class="[constants.mtP,constants.mxNmain]">
          <div class="row no-gutters pt-2">
            <picture class="col-6 h-14rem h-sm-18rem h-md-26rem">
              <img data-src="/img/example/4.webp" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
            </picture>
            <div class="col-6">
              <div class="row no-gutters">
                <picture class="col-6 h-7rem h-sm-9rem h-md-13rem">
                  <img data-src="/img/example/5.webp" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
                </picture>
                <picture class="col-6 h-7rem h-sm-9rem h-md-13rem">
                  <img data-src="/img/example/6.jpg" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
                </picture>
                <picture class="col-6 h-7rem h-sm-9rem h-md-13rem">
                  <img data-src="/img/example/7.jpg" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
                </picture>
                <picture class="col-6 h-7rem h-sm-9rem h-md-13rem">
                  <img data-src="/img/example/8.jpg" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-11 col-sm-9">
        <div class="d-flex justify-content-center">
          <h2 :class="constants.mtLg" class="clr-blk font-V7MG-EB lh-1">
            <span class="d-block mb-2 fz-sm clr-co">Curriculum</span>
            <strong class="d-block fz-xl fz-sm-2xl ls-n004">対話授業が君の世界を拓く👩‍👦</strong></span>
          </h2>
        </div>
      </div>
      <div class="col-12">
        <div class="ovyh h-28rem h-sm-auto mt-2 mx-n3 mx-sm-0">
          <div class="ovxs ovh-sm">
            <ul class="form-row flex-nowrap flex-sm-wrap add2x-xl-gutters add3x-4xl-gutters pl-3 pl-md-0 pb-5 pb-sm-0">
              <li class="col-9 col-sm-6 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
                  <div class="form-row justify-content-center">
                    <div class="col-12 pt-4 h-14rem bbsd bc-gray-light">
                      <picture class="d-block h-11rem ovh">
                        <img data-src="/img/example/l.jpg" alt="" class="h-100 ml-n9 img-aign-center lazyload lazypreload">
                      </picture>
                    </div>
                    <div class="col-10 py-4">
                      <h2 :class="constants.fzLg" class="ls-0 lh-1 clr-blk font-V7MG-EB">ことばの授業</h2>
                      <p class="lh-105" :class="constants.mtFormRow">対話をベースに楽しみながらことばに触れていく対話をベースに楽しみながらことばに触れていく対話をベースに楽しみながらことばに触れていく</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-9 col-sm-6 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
                  <div class="form-row justify-content-center">
                    <div class="col-12 h-14rem bbsd bc-gray-light">
                      <picture class="d-block h-14rem ovh">
                        <img data-src="/img/example/c.jpg" alt="" class="w-100 mt-n3 img-aign-center lazyload lazypreload">
                      </picture>
                    </div>
                    <div class="col-10 py-4">
                      <h2 :class="constants.fzLg" class="ls-0 lh-1 clr-blk font-V7MG-EB">教科学習授業</h2>
                      <p class="lh-105" :class="constants.mtFormRow">学校の宿題や分からない所を中心に手話などの情報保障付きで学ぶ学校の宿題や分からない所を中心に手話などの情報保障付きで学ぶ</p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-9 col-sm-6 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
                  <div class="form-row justify-content-center">
                    <div class="col-12 pt-405 h-14rem bbsd bc-gray-light">
                      <picture class="d-block h-11rem ovh text-right">
                        <img data-src="/img/example/r.jpg" alt="" class="h-100 d-inine-block img-aign-center lazyload lazypreload">
                      </picture>
                    </div>
                    <div class="col-10 py-4">
                      <h2 :class="constants.fzLg" class="ls-0 lh-1 clr-blk font-V7MG-EB">ロールモデル教育授業</h2>
                      <p class="lh-105" :class="constants.mtFormRow">交流を通じてデフの先輩から生きる知恵を学ぶ交流を通じてデフの先輩から生きる知恵を学ぶきる知恵を学ぶ交流を通じてデフの先輩から生きる知恵を</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-11 col-sm-9">
        <div class="d-flex justify-content-center">
          <h2 :class="constants.mtLg" class="clr-blk font-V7MG-EB lh-1">
            <span class="d-block mb-2 fz-sm clr-co">FAQ</span>
            <strong class="d-block fz-xl fz-sm-2xl ls-n004 ml-n1">まずは｢<span class="ls-n01">よくあるご質問</span>｣から🤔</strong></span>
          </h2>
        </div>
      </div>
      <div class="col-12">
        <div class="ovyh h-13rem h-sm-14rem h-md-auto mt-2 mx-n3 mx-md-n4 mx-lg-0 box-tl-q">
          <div class="ovxs ovh-md">
            <ul class="form-row flex-nowrap flex-md-wrap align-items-stretch add2x-xl-gutters add3x-4xl-gutters pl-3 pl-md-0 pb-5 pb-md-0">
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">未就学でも受講可能でしょうか？</h2>
                    <p class="lh-105 mt-2">ことばの獲得に対する課題感が高い場合､対象年齢外(未就学)でもを授業提供を行う場合があります｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">未就学でも受講可能ですか？</h2>
                    <p class="lh-105 mt-2">ことばの獲得に対する課題感が高い場合､対象年齢外(未就学)でもを授業提供を行う場合があります｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">PCがなくても受講可能ですか？</h2>
                    <p class="lh-105 mt-2">PCもしくはタブレットなどの大画面で受講できる環境が必要です｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">スマホでも利用できますか？</h2>
                    <p class="lh-105 mt-2">スライド教材を使用する為､PCもしくはタブレットなどの大画面で受講できる環境が必要です｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">海外在住でも受講可能ですか？</h2>
                    <p class="lh-105 mt-2">インターネットが繋がる環境であれば､どこでも受講可能です｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">手話ができなくても利用可能ですか？</h2>
                    <p class="lh-105 mt-2">ろう者･難聴者･聴者の先生在籍しています｡お子様のコミュニケーション手段に合わせて授業を行います｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">授業は保護者同席が必須ですか？</h2>
                    <p class="lh-105 mt-2">初回授業のみ同席をお願いしております｡以降は保護者さまにお任せしております｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">ことば学習とはどんな授業ですか？</h2>
                    <p class="lh-105 mt-2">子どものことばの数を増やすための学習を先生との対話や授業などを通じて行います｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">ロールモデル学習とはなんですか？</h2>
                    <p class="lh-105 mt-2">ろう･難聴者の先生との交流会やイベントなどを実施しています｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">学校の勉強も教えてもらえますか？</h2>
                    <p class="lh-105 mt-2">手話を使った教科学習指導も行っております｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">ことば教材を自宅で利用できますか？</h2>
                    <p class="lh-105 mt-2">授業で利用した教材はご自宅でご活用頂いて構いません｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">先生とはどのようなコミュニケーション手段で？</h2>
                    <p class="lh-105 mt-2">基本的に手話も行いますが､子どものニーズに合わせて授業を進めています｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">聞こえる先生もいますか？</h2>
                    <p class="lh-105 mt-2">ろう者･難聴者･聴者の先生在籍しています｡お子様のコミュニケーション手段に合わせて授業を行います｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">保護者が先生とお話する時間はありますか？</h2>
                    <p class="lh-105 mt-2">授業の終わりにお話する時間を設けています｡不明なことがありましたら運営にご連絡くださいませ｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">先生を変えることはできますか？</h2>
                    <p class="lh-105 mt-2">お子さまに合わせて変更して頂くことは可能です｡運営にご相談ください｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">実際に先生と会うことはできますか？</h2>
                    <p class="lh-105 mt-2">基本的にオンラインでの対応になっております｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">いつから有料になりますか？</h2>
                    <p class="lh-105 mt-2">7月末まで無償提供しており､以降は有償予定です｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">有償になったタイミングでで辞めれますか？</h2>
                    <p class="lh-105 mt-2">可能です｡その場合､事前に運営までご連絡ください｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">知り合いに紹介することは可能ですか？</h2>
                    <p class="lh-105 mt-2">ご紹介頂いて構いません｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">運営とのやりとりは何で行いますか？</h2>
                    <p class="lh-105 mt-2">サークルオー公式LINEを通してやりとりをします｡</p>
                  </div>
                </div>
              </li>
              <li class="col-8 col-sm-5 col-lg-4" :class="constants.mtListTeacher">
                <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo h-100 d-flex flex-wrap">
                  <div class="px-3 py-4">
                    <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB tl-q">子どもについて相談することも可能ですか？</h2>
                    <p class="lh-105 mt-2">公式LINEよりご相談を受け付けております｡</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-11 col-sm-9">
        <div class="d-flex justify-content-center">
          <h2 :class="constants.mtLg" class="clr-blk font-V7MG-EB lh-1">
            <span class="d-block mb-2 fz-sm clr-co">User's Voice</span>
            <strong class="d-block fz-xl fz-sm-2xl ls-n004 ml-n1">ご利用者さまの声 😊 <span class="position-relative t-n1">💬</span></strong></span>
          </h2>
        </div>
        <ul class="form-row flex-sm-wrap align-items-stretch">
          <li class="col-11" :class="constants.mtListTeacher">
            <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
              <div class="px-3 py-4">
                <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB">👪 北海道・小学校3年生の保護者さま</h2>
                <p class="lh-105 mt-2">我が家は札幌在住です。この度、東京の聾のおともだちに、オンラインで無償の授業がうけられるんだよと教えてもらい、大阪と札幌、だめ元で応募しました。この1ヶ月、先生との時間を心待ちにしていた子どもの姿を見てきました。担当していただいたハリー先生がアメリカ在住ということも、インターネットって、オンラインってすごいを子どもと一緒に私も実感しました。</p>
              </div>
            </div>
          </li>
          <li class="col-11 ml-auto" :class="constants.mtListTeacher">
            <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
              <div class="px-3 py-4">
                <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB">👨‍👩‍👧‍👦 愛知県・小学校1年生の保護者</h2>
                <p class="lh-105 mt-2">本当にこの様な良い機会を与えて頂き感謝しております。ここに出会わなければ、今の息子はなかったのでは？というぐらい楽しんでくれました。ありがとうございました。</p>
              </div>
            </div>
          </li>
          <li class="col-12" :class="constants.mtListTeacher">
            <div class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
              <picture class="h-12rem d-block">
                <img data-src="/img/lp/voice.webp" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
              </picture>
              <div class="px-3 py-4 p-sm-405">
                <h2 :class="constants.fzXs" class="ls-0 lh-103 clr-blk font-V7MG-EB">📃🖋 対話授業無償提供の報告と今後の展開</h2>
                <p class="lh-105 mt-2">4月11日の呼びかけから5月31日までに、日本全国・タイ・アメリカから手話のできるろう者・難聴者・聴者の「先生」約30名が、日本全国の約60名のろう・難聴児の「生徒」へ向けて、それぞれ週2~3回、合計750回のオンライン授業の無償提供を行いました</p>
                <a href="https://silentvoice.co.jp/blog/1979/" target="_blank" class="d-block w-100 px-3 px-sm-4 py-2 mt-2 clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-V7MG-EB fz-xs">サークルオーの一次報告書を読む</div>
                    <div class="ml-auto"><font-awesome-icon class="small" :icon="['fas', 'external-link']" /></div>
                  </div>
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-12">
        <section class="bg-wht mx-n3 px-4 px-sm-6" :class="constants.mtLg">
          <div class="row no-gutters justify-content-center align-items-end mb-4 pt-6">
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/2-1.svg" alt="CIRCLE-O">
            </div>
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/3-4.svg" alt="CIRCLE-O">
            </div>
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/3-2.svg" alt="CIRCLE-O">
            </div>
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/3-3.svg" alt="CIRCLE-O">
            </div>
          </div>
          <h1 class="clr-blk font-V7MG-EB fz-xsm text-center"><strong class="clr-co mb-1 fz-tl ls-n005 d-block">📛 生徒さん20名募集 🐣</strong>お気軽にお問い合わせ&お申し込みください</h1>
          <p class="mt-3">学校の先生､弁護士､海外在住､スポーツ選手などさまざまなジャンルで活躍する先生が在籍しています｡子どもたち自身が誰に出会い､何を学び､ 世界を広げていく方｡</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_MpLUgaoXjWf9_5nS2mu-A0Hf9_xu66E2lQuMUx-h075h3g/viewform" target="_blank"  :class="constants.mySm" class="d-block w-100 px-3 px-sm-4 py-2 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo-co bsd bc-wht bw-02r">
            <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
              <div class="font-V7MG-EB fz-md">無料お申し込み</div>
              <div class="ml-2 mt-025"><font-awesome-icon class="clr-wht bigger" :icon="['fas', 'hands-helping']" /></div>
            </div>
          </a>
          <div class="row flex-nowrap align-items-center pt-2">
            <div class="col-4 col-sm-3">
              <picture class="d-block ovh rounded-circle position-relative z-1">
                <img data-src="/img/example/9.png" alt="" class="w-100 lazyload lazypreload">
              </picture>
              <h3 class="fz-xsm text-center"><span class="d-inline-block text-left small-xs lh-101 font-RyoGothic-B mt-205">サークルオー 代表 / NPO法人Silent Voice 理事</span><strong class="mt-2 mt-sm-0 d-block">岡松 有香</strong><small class="clr-blk d-block">- 言語聴覚士</small></h3>
            </div>
            <div class="col">
              <h4 class="fz-xs">一人ひとりに合わせた"授業"で</h4>
              <p class="fz-2xs mt-2">初回アセスメントでお子様の状態や保護者のニーズを伺い先生とのマッチングや一人ひとりに合わせた"授業"を行います｡その生徒のコミュニケーション手段･学習言語･文化･聴力等といったろう･難聴児における多様性の重点項目を考慮した"授業"を提供しています｡</p>
            </div>
          </div>
          <hr class="mt-6 mx-n4">
          <div class="row no-gutters justify-content-center align-items-end mb-4 pt-6">
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/2-4.svg" alt="CIRCLE-O">
            </div>
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/2-2.svg" alt="CIRCLE-O">
            </div>
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/2-3.svg" alt="CIRCLE-O">
            </div>
            <div class="col-auto">
              <img class="w-5rem w-sm-8rem w-md-10rem lazyload lazypreload" data-src="/img/global/illust/3-1.svg" alt="CIRCLE-O">
            </div>
          </div>
          <h1 class="clr-blk font-V7MG-EB fz-xsm text-center mx-n5"><strong class="clr-co mb-1 fz-tl ls-n005 d-block">👩‍🏫手話のできる先生募集👨‍💻</strong>お気軽にお問い合わせ&お申し込みください</h1>
          <p class="mt-3">サークルオーは､子どもたちの世界を広げるために､そのきっかけとなる出会いと学びの場をつくっています｡先生自身の今までの学び方､工夫のひとつひとつが､より多くの子どもたちにとっての学びであり工夫になっていくと思います｡心ある先生の応募をお待ちしております｡</p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdB6e9nSS-JI3TyrDNTLsUDkVujJSDQ2l2O9Cu5YiG4ewYY_w/viewform" target="_blank" :class="constants.mySm" class="d-block w-100 px-3 px-sm-4 py-2 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo-co bsd bc-wht bw-02r">
            <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
              <div class="font-V7MG-EB fz-md">先生になる</div>
              <div class="ml-2 mt-025"><font-awesome-icon class="clr-wht bigger" :icon="['fas', 'user-edit']" /></div>
            </div>
          </a>
          <hr class="mt-6 mx-n4">
          <div class="row flex-nowrap align-items-center py-6">
            <div class="col-4 col-sm-3">
              <picture class="d-block ovh rounded-circle position-relative z-1">
                <img data-src="/img/prof/itoda.webp" alt="" class="w-100 lazyload lazypreload">
              </picture>
              <h3 class="fz-xsm text-center"><span class="d-inline-block text-left small-xs lh-101 font-RyoGothic-B mt-205">サークルオー代表 </span><strong class="mt-2 mt-sm-0 d-block">井戸上勝一</strong></h3>
            </div>
            <div class="col">
              <h4 class="fz-xs">子どもたちの世界を拓く機会を</h4>
              <p class="fz-2xs mt-2">サークルオーでは一人ひとりに合わせた"授業"で初回アセスメントでお子様の状態や保護者のニーズを伺い一人ひとりに合わせた"授業"を行います。ひとと人との繋がりが、新しい可能性をうみ、そこからまた、点がひろがる。結びついて、拓かれていく。サークルオーは子どもたちの世界が拓く機会を作っていきます｡</p>
            </div>
          </div>
        </section>
      </div>
      <div class="col-11 col-sm-9">
        <div :class="constants.mtLg" class="row justify-content-center">
          <div class="col-5">
            <img data-src="/img/global/logo.svg" alt="CIRCLE-O サークルオー" class="w-100 lazyload lazypreload">
          </div>
        </div>
        <h2 class="text-center clr-blk font-V7MG-EB lh-1 mt-405">
          <span class="d-block mb-2 fz-tl clr-co">サポーターのご紹介</span>
          <strong class="d-block fz-xl fz-sm-2xl ls-n005">💝 皆さまの寄付で無償に ✍</strong>
        </h2>
        <p :class="constants.mtP">無償提供は、これまでNPO法人Silent Voiceへ集まった寄付金を先生の授業報酬に充てております。</p>
        <div class="row justify-content-center" :class="constants.mtP">
          <div class="col-11 col-sm-9">
            <img data-src="/img/global/logo-nf-land.svg" alt="公益財団法人日本財団" class="w-100 lazyload lazypreload">
            <a :class="constants.mtP" href="https://silentvoice.co.jp/blog/1979/" target="_blank" class="d-block w-100 px-3 px-sm-4 py-2 clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
              <div class="h-100 d-flex flex-wrap align-items-center">
                <div class="font-V7MG-EB fz-xs ls-0">日本財団ジャーナルの取材記事を読む</div>
                <div class="ml-auto"><font-awesome-icon class="small" :icon="['fas', 'external-link']" /></div>
              </div>
            </a>
          </div>
        </div>
        <hr class="bc-wht effect-neumo bw-02r" :class="constants.mySec">
        <h3 class="font-V7MG-EB clr-co fz-xsm pb-205">📣 メディア掲載(一部)</h3>
        <ul class="liSlash ls-0 fz-2xs font-V7MG-B">
          <li>NHK「ろうを生きる難聴を生きる」</li><li>NHK「おはよう関西」</li><li>日本テレビ「the SOCIAL」</li><li>毎日放送「VOICE」</li><li>朝日放送 ドキュメンタリー</li><li>読売新聞 毎日新聞 産経新聞</li><li>致知「致知随想」</li><li>TEDxKOBE</li><li>another life.</li><li>WORMO by KOKUYO</li>
        </ul>
        <hr class="bc-wht effect-neumo bw-02r" :class="constants.mySec">
        <h3 class="font-V7MG-EB clr-co fz-xsm pb-205">💳 単発寄付で応援ください</h3>
        <p>オンライン授業の無償提供における先生への謝礼の補填、教材の拡充に充てさせて頂きます。</p>
        <ul class="row low-gutters">
          <li class="col-4 mt-3">
            <form action="https://payment.alij.ne.jp/service/credit" method="GET" target="_blank">
               <input type="hidden" name="siteId" value="54001601">
               <input type="hidden" name="sitePass" value="1601cgdf">
               <input type="hidden" name="amount" value="10000">
               <input type="submit" value="1万円" class="d-block w-100 fz-2xs py-025 clr-co font-V7MG-EB hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
            </form>
          </li>
          <li class="col-4 mt-3">
            <form action="https://payment.alij.ne.jp/service/credit" method="GET" target="_blank">
               <input type="hidden" name="siteId" value="54001601">
               <input type="hidden" name="sitePass" value="1601cgdf">
               <input type="hidden" name="amount" value="30000">
               <input type="submit" value="3万円" class="d-block w-100 fz-2xs py-025 clr-co font-V7MG-EB hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
            </form>
          </li>
          <li class="col-4 mt-3">
            <form action="https://payment.alij.ne.jp/service/credit" method="GET" target="_blank">
               <input type="hidden" name="siteId" value="54001601">
               <input type="hidden" name="sitePass" value="1601cgdf">
               <input type="hidden" name="amount" value="50000">
               <input type="submit" value="5万円" class="d-block w-100 fz-2xs py-025 clr-co font-V7MG-EB hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
            </form>
          </li>
          <li class="col-4 mt-3">
            <form action="https://payment.alij.ne.jp/service/credit" method="GET" target="_blank">
               <input type="hidden" name="siteId" value="54001601">
               <input type="hidden" name="sitePass" value="1601cgdf">
               <input type="hidden" name="amount" value="100000">
               <input type="submit" value="10万円" class="d-block w-100 fz-2xs py-025 clr-co font-V7MG-EB hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
            </form>
          </li>
          <li class="col-4 mt-3">
            <form action="https://payment.alij.ne.jp/service/credit" method="GET" target="_blank">
               <input type="hidden" name="siteId" value="54001601">
               <input type="hidden" name="sitePass" value="1601cgdf">
               <input type="hidden" name="amount" value="300000">
               <input type="submit" value="30万円" class="d-block w-100 fz-2xs py-025 clr-co font-V7MG-EB hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
            </form>
          </li>
          <li class="col-4 mt-3">
            <form action="https://payment.alij.ne.jp/service/credit" method="GET" target="_blank">
               <input type="hidden" name="siteId" value="54001601">
               <input type="hidden" name="sitePass" value="1601cgdf">
               <input type="hidden" name="amount" value="500000">
               <input type="submit" value="50万円" class="d-block w-100 fz-2xs py-025 clr-co font-V7MG-EB hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
            </form>
          </li>
        </ul>
        <ul class="liKome fz-2xs mt-3">
          <li>クレジットカードで寄付いただけます</li>
          <li>決済会社「アナザーレーン」のシステムを利用します</li>
          <li>ボタンを押すとの決済画面に移行します</li>
        </ul>
      </div>
      <div class="col-12">
        <section class="bg-wht mx-n3 px-4 px-sm-6 py-6" :class="constants.mtLg">
          <div class="row low-gutters justify-content-center">
            <div class="col-2">
              <img data-src="/img/global/logo-sv-port.svg" alt="CIRCLE-O サークルオー" class="w-100 lazyload lazypreload">
            </div>
            <div class="col-12">
              <h1 :class="constants.mtP" class="clr-blk font-V7MG-EB fz-xsm text-center">NPO法人 Silent Voiceが運営しております。</h1>
            </div>
            <div class="col-11 col-sm-9">
              <div :class="constants.myP" class="rounded-sm ovh bg-wht bsd bc-gray-light effect-neumo">
                <picture class="h-12rem d-block">
                  <img data-src="/img/lp/sv-all.webp" alt="" class="w-100 h-100 of-cover lazyload lazypreload">
                </picture>
              </div>
              <dl class="row low-gutters flex-nowrap mt-2 fz-2xs">
                <dt class="col-auto font-V7MG-EB">名称</dt>
                <dd class="col">NPO法人 Silent Voice</dd>
              </dl>
              <dl class="row low-gutters flex-nowrap mt-2 fz-2xs">
                <dt class="col-auto font-V7MG-EB">本部</dt>
                <dd class="col">〒542-0061 大阪府大阪市中央区安堂寺町1丁目3-12 大阪谷町ビル4F</dd>
              </dl>
              <dl class="row low-gutters flex-nowrap mt-2 fz-2xs">
                <dt class="col-auto font-V7MG-EB">設立</dt>
                <dd class="col">2018年1月19日</dd>
              </dl>
              <dl class="row low-gutters flex-nowrap mt-2 fz-2xs">
                <dt class="col-auto font-V7MG-EB">目的</dt>
                <dd class="col">ろう児・難聴児の教育の選択肢を増やす</dd>
              </dl>
              <dl class="row low-gutters flex-nowrap mt-2 fz-2xs">
                <dt class="col-auto font-V7MG-EB">役員</dt>
                <dd class="col">代表理事 尾中友哉 / 理事 桜井夏輝 / 理事 宮田翔実 / 理事 村上美知 / 理事 岡松 有香 / 監事 大塚貴之</dd>
              </dl>
              <a :class="constants.mtP" href="https://silentvoice.co.jp/" target="_blank" class="d-block w-100 px-3 px-sm-4 py-2 clr-co hvr-bg-red hvr-clr-red rounded-xl btn-neumo bsd bc-co bw-02r">
                <div class="h-100 d-flex flex-wrap align-items-center">
                  <div class="font-V7MG-EB fz-xs ls-0">Silent VoiceのWEBサイトへ</div>
                  <div class="ml-auto"><font-awesome-icon class="small" :icon="['fas', 'external-link']" /></div>
                </div>
              </a>
            </div>

          </div>
        </section>
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
  name: 'MockLp',
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
      title: 'LESSON / CIRCLE-O',
      description: 'LESSON / CIRCLE-O',
      ogImage: '/img/global/ogi/a.jpg'
    }
    return head(props, this.$store)
  }
}
</script>

<style></style>


