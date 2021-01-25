<template>
  <main :class="constants.pxMain">
    <header class="pb-1" :class="constants.mySec">
      <ul class="row low-gutters row-md align-items-center">
        <li class="col-auto">
          <img class="w-6rem w-sm-10rem lazyload lazypreload" data-src="/img/global/logo.svg" alt="CIRCLE-O">
        </li>
        <li class="col-auto">
          <button class="d-block w-9rem w-sm-11rem px-3 px-sm-4 py-1 clr-wht hvr-bg-red hvr-clr-red rounded-xl btn-neumo btn-neumo-co bsd bc-wht bw-02r">
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
    <form :class="[constants.mySec]" class="btsd bbsd bw-03r bc-wht d-block bg-wht-op07 rounded-sm-sm py-405 px-3 p-sm-405 p-md-4 px-lg-3 p-xl-405 mx-n3 mx-sm-0" action="">
      <div class="form-group mb-0">
        <div class="row low-gutters">
          <div class="col-auto">
            <div class="inlineSelect font-RyoGothic-B">
              <div class="form-row align-items-center">
                <div class="col-auto">
                  <div class="pb-1 bbsd bw-02r bc-blk">
                    <select class="form-control clr-blk ls-n004 fz-sm-sm fz-xl-md" id="exampleFormControlSelect1"><option value="[object Object]">学年を選択してください</option><option value="[object Object]">小学校1年生</option><option value="[object Object]">小学校2年生</option><option value="[object Object]">小学校3年生</option><option value="[object Object]">小学校4年生</option><option value="[object Object]">小学校5年生</option><option value="[object Object]">小学校6年生</option><option value="[object Object]">中学校1年生</option><option value="[object Object]">中学校2年生</option><option value="[object Object]">中学校3年生</option><option value="[object Object]">特に高校受験に向けた中学生の受験生</option><option value="[object Object]">高校1年生</option><option value="[object Object]">高校2年生</option><option value="[object Object]">高校3年生</option><option value="[object Object]">特に大学受験に向けた高校生の受験生</option></select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <h2 class="clr-blk lh-101 ls-n002 fz-sm-sm fz-xl-md">の先生を探す</h2>
          </div>
        </div>
        <div class="form-row add-xl-gutters pt-1 pt-sm-3 pl-1 pl-sm-0">
          <div class="col-auto">
            <div class="row no-gutters mt-3 mt-sm-2 mt-md-0 align-items-center">
              <div class="col-sm-auto">
                <h4 class="clr-blk fz-2xs fz-xl-xs lh-108">教科</h4>
              </div>
              <div class="col-auto d-none d-sm-block">：</div>
              <div class="col-auto">
                <ul class="row low-gutters">
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="customCheck1">国語</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck2">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="customCheck2">算数/数学</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck3">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="customCheck3">理科</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck4">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="customCheck4">社会</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="customCheck5">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="customCheck5">英語</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="row no-gutters mt-3 mt-sm-2 mt-md-0 align-items-center">
              <div class="col-sm-auto">
                <h4 class="clr-blk fz-2xs fz-xl-xs lh-108">曜日</h4>
              </div>
              <div class="col-auto d-none d-sm-block">：</div>
              <div class="col-auto">
                <ul class="row low-gutters">
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day1">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day1">月</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day2">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day2">火</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day3">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day3">水</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day4">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day4">木</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day5">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day5">金</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day6">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day6">土</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="day7">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="day7">日</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-auto">
            <div class="row no-gutters mt-3 mt-sm-2 mt-md-0 align-items-center">
              <div class="col-sm-auto">
                <h4 class="clr-blk fz-2xs fz-xl-xs lh-108">タイプ</h4>
              </div>
              <div class="col-auto d-none d-sm-block">：</div>
              <div class="col-auto">
                <ul class="row low-gutters">
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="type1">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="type1">聴者</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="type2">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="type2">難聴者</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="type3">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="type3">ろう者</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="type4">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="type4">日本手話</label>
                    </div>
                  </li>
                  <li class="col-auto">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="type5">
                      <label class="custom-control-label font-RyoGothic-B fz-2xs fz-xl-xs lh-109" for="type5">日本語手話</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    <section :class="[constants.mtSec]">
      <h1 class="font-RyoGothic-B clr-blk lh-1 ls-0 pt-1" :class="constants.fzSm"><span class="bigger">👨‍🏫</span> <strong class="bigger">40</strong>人の該当する先生がいます <span class="bigger">👩‍🏫</span></h1>
      <ul class="form-row add2x-xl-gutters add3x-4xl-gutters">
        <li class="col-sm-6 col-lg-4" :class="constants.mtListTeacher">
          <div class="form-row align-items-end">
            <div class="col-6">
              <div class="ovh h-vt-moive rounded position-relative embed-responsive embed-responsive-1by1 btn-neumo">
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/7i4Naxos7Ko" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-6">
              <div class="w-2rem w-md-3rem w-xl-205rem d-block">
                <picture class="d-block rounded-circle ovh bsd bw-1px">
                  <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                  <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                </picture>
              </div>
              <h1 class="fz-xsm lh-104 clr-blk mt-3">haztr | snaq me hattori</h1>
              <p class="fz-2xs fz-2xl-xs mt-2">hattori。食のスタートアップ「スナックミー」代表。コンサル→VC→スタートアップ起業。</p>
              <ul class="row low-gutters">
                <li class="col-12">
                  <button class="d-block px-2 px-xl-3 py-2 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r my-3 mb-md-0">
                    <div class="h-100 d-flex flex-wrap align-items-center">
                      <div class="font-weight-700 ls-0 fz-sm">習いたい</div>
                      <div class="ml-auto"><font-awesome-icon class="clr-gray-light" :icon="['fas', 'chalkboard-teacher']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">プロフィール</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">お気に入りへ</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'bookmark']" /></div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="col-sm-6 col-lg-4" :class="constants.mtListTeacher">
          <div class="form-row align-items-end">
            <div class="col-6">
              <div class="ovh h-vt-moive rounded position-relative embed-responsive embed-responsive-1by1 btn-neumo">
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/_jdAXvnhKdA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-6">
              <div class="w-2rem w-md-3rem w-xl-205rem d-block">
                <picture class="d-block rounded-circle ovh bsd bw-1px">
                  <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                  <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                </picture>
              </div>
              <h1 class="fz-xsm lh-104 clr-blk mt-3">haztr | snaq me hattori</h1>
              <p class="fz-2xs fz-2xl-xs mt-2">hattori。食のスタートアップ「スナックミー」代表。コンサル→VC→スタートアップ起業。</p>
              <ul class="row low-gutters">
                <li class="col-12">
                  <button class="d-block px-2 px-xl-3 py-2 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r my-3 mb-md-0">
                    <div class="h-100 d-flex flex-wrap align-items-center">
                      <div class="font-weight-700 ls-0 fz-sm">習いたい</div>
                      <div class="ml-auto"><font-awesome-icon class="clr-gray-light" :icon="['fas', 'chalkboard-teacher']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">プロフィール</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">お気に入りへ</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'bookmark']" /></div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="col-sm-6 col-lg-4" :class="constants.mtListTeacher">
          <div class="form-row align-items-end">
            <div class="col-6">
              <div class="ovh h-vt-moive rounded position-relative embed-responsive embed-responsive-1by1 btn-neumo">
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/MSxxdXpL60Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-6">
              <div class="w-2rem w-md-3rem w-xl-205rem d-block">
                <picture class="d-block rounded-circle ovh bsd bw-1px">
                  <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                  <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                </picture>
              </div>
              <h1 class="fz-xsm lh-104 clr-blk mt-3">haztr | snaq me hattori</h1>
              <p class="fz-2xs fz-2xl-xs mt-2">hattori。食のスタートアップ「スナックミー」代表。コンサル→VC→スタートアップ起業。</p>
              <ul class="row low-gutters">
                <li class="col-12">
                  <button class="d-block px-2 px-xl-3 py-2 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r my-3 mb-md-0">
                    <div class="h-100 d-flex flex-wrap align-items-center">
                      <div class="font-weight-700 ls-0 fz-sm">習いたい</div>
                      <div class="ml-auto"><font-awesome-icon class="clr-gray-light" :icon="['fas', 'chalkboard-teacher']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">プロフィール</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">お気に入りへ</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'bookmark']" /></div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="col-sm-6 col-lg-4" :class="constants.mtListTeacher">
          <div class="form-row align-items-end">
            <div class="col-6">
              <div class="ovh h-vt-moive rounded position-relative embed-responsive embed-responsive-1by1 btn-neumo">
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/_ZREmoMYeUs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-6">
              <div class="w-2rem w-md-3rem w-xl-205rem d-block">
                <picture class="d-block rounded-circle ovh bsd bw-1px">
                  <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                  <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                </picture>
              </div>
              <h1 class="fz-xsm lh-104 clr-blk mt-3">haztr | snaq me hattori</h1>
              <p class="fz-2xs fz-2xl-xs mt-2">hattori。食のスタートアップ「スナックミー」代表。コンサル→VC→スタートアップ起業。</p>
              <ul class="row low-gutters">
                <li class="col-12">
                  <button class="d-block px-2 px-xl-3 py-2 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r my-3 mb-md-0">
                    <div class="h-100 d-flex flex-wrap align-items-center">
                      <div class="font-weight-700 ls-0 fz-sm">習いたい</div>
                      <div class="ml-auto"><font-awesome-icon class="clr-gray-light" :icon="['fas', 'chalkboard-teacher']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">プロフィール</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">お気に入りへ</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'bookmark']" /></div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li class="col-sm-6 col-lg-4" :class="constants.mtListTeacher">
          <div class="form-row align-items-end">
            <div class="col-6">
              <div class="ovh h-vt-moive rounded position-relative embed-responsive embed-responsive-1by1 btn-neumo">
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                <iframe class="embed-responsive-item lazyload lazypreload" data-src="https://www.youtube-nocookie.com/embed/xueqtD3weHA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="col-6">
              <div class="w-2rem w-md-3rem w-xl-205rem d-block">
                <picture class="d-block rounded-circle ovh bsd bw-1px">
                  <source data-srcset="/img/prof/motoki@0.25x.jpg" media="--sm" />
                  <img class="w-100 lazyload lazypreload" data-src="/img/prof/motoki@0.25x.jpg" alt="元木 哲三">
                </picture>
              </div>
              <h1 class="fz-xsm lh-104 clr-blk mt-3">haztr | snaq me hattori</h1>
              <p class="fz-2xs fz-2xl-xs mt-2">hattori。食のスタートアップ「スナックミー」代表。コンサル→VC→スタートアップ起業。</p>
              <ul class="row low-gutters">
                <li class="col-12">
                  <button class="d-block px-2 px-xl-3 py-2 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r my-3 mb-md-0">
                    <div class="h-100 d-flex flex-wrap align-items-center">
                      <div class="font-weight-700 ls-0 fz-sm">習いたい</div>
                      <div class="ml-auto"><font-awesome-icon class="clr-gray-light" :icon="['fas', 'chalkboard-teacher']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">プロフィール</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'user']" /></div>
                    </div>
                  </button>
                </li>
                <li class="col-md-6">
                  <button class="d-block p-2 px-md-0 px-2xl-205 w-100 bg-wht hvr-bg-red hvr-clr-red rounded btn-neumo bsd bc-wht bw-02r mt-205 mt-md-3">
                    <div class="h-100 d-flex flex-wrap justify-content-center align-items-center">
                      <div class="font-weight-700 ls-n005 small-2xs">お気に入りへ</div>
                      <div class="ml-auto d-md-none d-2xl-block"><font-awesome-icon class="clr-gray-light small mb-025" :icon="['fas', 'bookmark']" /></div>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </section>
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
  name: 'MockIndex',
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


