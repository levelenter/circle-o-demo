<template>
  <main>
    <div class="position-relative">
      <div class="bg-blk ovh h-40rem h-sm-100vh h-md-85vh mh-md-40rem">
        <splide ref="mv" class="h-40rem h-sm-100vh h-md-85vh mh-md-40rem w-100" :options="options" @splide:move="onMove">
          <splide-slide>
            <div class="lazyload h-40rem h-sm-100vh h-md-85vh mh-md-40rem bg-cover bg-posi-center mvZoomRL op-04" data-bgset="img/a.jpg [--xl] | img/a@0.75x.jpg [--lg] | img/a@0.5x.jpg [--sm] | img/xs/a.jpg [--xs-max]"></div>
          </splide-slide>
          <splide-slide>
            <div class="lazyload h-40rem h-sm-100vh h-md-85vh mh-md-40rem bg-cover bg-posi-center mvZoomRL op-04" data-bgset="img/b.jpg [--xl] | img/b@0.75x.jpg [--lg] | img/b@0.5x.jpg [--sm] | img/xs/b.jpg [--xs-max]"></div>
          </splide-slide>
          <splide-slide>
            <div class="lazyload h-40rem h-sm-100vh h-md-85vh mh-md-40rem bg-cover bg-posi-center mvZoomRL op-04" data-bgset="img/c.jpg [--xl] | img/c@0.75x.jpg [--lg] | img/c@0.5x.jpg [--sm] | img/xs/c.jpg [--xs-max]"></div>
          </splide-slide>
          <template v-slot:controls>
            <div class="splide__progress z-100 effectIn animate__delay-025s animate__slower" :class="{ 'slide-1': slideIndex === 0 , 'slide-2': slideIndex === 1 , 'slide-3': slideIndex === 2 }">
              <div class="splide__progress__bar"></div>
            </div>
          </template>
        </splide>
      </div>
      <div class="w-100 h-40rem h-sm-100vh h-md-85vh mh-md-40rem position-absolute z-10 topLeft d-flex flex-wrap justify-content-center align-items-center">
        <div class="row no-gutters justify-content-center w-100 mb-9 mb-2xl-10">
          <div class="col-auto op-0 effectIn animate__delay-025s animate__slower">
            <picture class="w-10rem w-sm-14rem w-xl-16rem w-2xl-18rem d-block ml-auto mb-n405 mb-sm-n6 mb-md-n405 mr-n405 mr-sm-n7">
              <source data-srcset="img/global/logo-wht@0.5x.png" media="--lg" />
              <img class="w-100" src="img/global/logo-wht@0.5x.png" alt="tohoku japan"/>
            </picture>
            <h1 class="fz-tl lh-102 lh-md-103 trs-all-1 font-weight-200 mt-4 mt-sm-5 mt-md-3 mb-2 clr-wht font-Manrope">Find Your <br class="d-sm-none"><span class="font-weight-700">Perfect View</span></h1>
            <div class="row align-items-center no-gutters">
              <div class="col-sm-auto">
                <h2 class="fz-sm fz-md-md fz-lg-lg font-weight-300 lh-105 lh-md-108 tgt d-block pl-1 ls-md-005 ls-lg-01">in <strong class="fz-lg-xl fz-xl-2xl font-weight-600 clr-wht">MIYAGI</strong> pref & <strong class="fz-lg-xl fz-xl-2xl font-weight-600 clr-wht">IWATE</strong> pref.</h2>
              </div>
              <div id="slide-bar" class="col-sm mr-sm-2 mt-md-205 w-sm-auto position-absolute position-sm-relative">
                <div class="row align-items-center">
                  <div class="col">
                    <h3 class="text-sm-right fz-2xs fz-lg-xs">MATSUHIMA in MIYAGI pref</h3>
                    <h3 class="text-sm-right fz-2xs fz-lg-xs">MATSUSHIMA in MIYAGI pref</h3>
                  </div>
                  <div class="col-auto mt-sm-1">
                    <ul class="row low-gutters align-items-center">
                      <li class="col-4">
                        <a class="h-02rem d-block bg-wht w-205rem w-xl-3rem op-04" href=""></a>
                        <a @click.prevent="changeSlide(0)" class="h-02rem d-block bg-wht w-205rem w-xl-3rem op-04" href=""></a>
                      </li>
                      <li class="col-4">
                        <a class="h-02rem d-block bg-wht w-205rem w-xl-3rem op-04" href=""></a>
                        <a @click.prevent="changeSlide(1)" class="h-02rem d-block bg-wht w-205rem w-xl-3rem op-04" href=""></a>
                      </li>
                      <li class="col-4">
                        <a class="h-02rem d-block bg-wht w-205rem w-xl-3rem op-04" href=""></a>
                        <a @click.prevent="changeSlide(2)" class="h-02rem d-block bg-wht w-205rem w-xl-3rem op-04" href=""></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="box-gra position-absolute"></div>
      <div class="mouse position-absolute d-none"><div class="wheel"></div></div>
    </div>
    <div class="px-4 px-md-5 px-lg-6 px-xl-8 bg-blk">
      <nav class="py-5 py-lg-6 py-3xl-7">
        <div class="row add-2xl-gutters">
          <div class="col-12 col-xl">
            <div class="row align-items-center">
              <div class="col-auto">
                <h1 class="fz-sm fz-md-md fz-lg-lg clr-wht">Select your perfect view.</h1>
              </div>
              <div class="col-auto">
                <p class="mt-2 mt-lg-1">FIND/EXPLORE,your perfect views at world heritage sites and national parks in Tohoku JAPAN.</p>
              </div>
            </div>
            <div class="form-row mt-2 mt-lg-4">
              <div class="col-6 col-sm-4 col-lg-2 mt-3 mt-lg-0">
                <a v-scroll-to="scrollTo('#sec-a')" href="#sec-a" class="d-block position-relative">
                  <picture class="d-block ovh h-7rem h-md-8rem h-lg-7rem h-xl-10rem rounded">
                    <source data-srcset="img/a@0.25x.jpg" media="--xl" />
                    <source data-srcset="img/a@0.15x.jpg" media="--lg" />
                    <source data-srcset="img/a@0.33x.jpg" media="--md" />
                    <source data-srcset="img/a@0.25x.jpg" media="--sm" />
                    <img class="w-100 w-xl-auto h-xl-100 img-align-center lazyload lazypreload" data-src="img/a@0.15x.jpg" alt="MATSUHIMA"/>
                  </picture>
                  <h3 class="bg-blk d-inline-block position-absolute bottomLeft z-10 mb-3 mb-md-4 fz-2xs py-1 pr-4 rounded-top-right-md rounded-bottom-right-md lh-104 clr-wht">MATSUHIMA</h3>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 mt-3 mt-lg-0">
                <a v-scroll-to="scrollTo('#sec-b')" href="#sec-b" class="d-block position-relative">
                  <picture class="d-block ovh h-7rem h-md-8rem h-lg-7rem h-xl-10rem rounded">
                    <source data-srcset="img/b@0.25x.jpg" media="--xl" />
                    <source data-srcset="img/b@0.15x.jpg" media="--lg" />
                    <source data-srcset="img/b@0.33x.jpg" media="--md" />
                    <source data-srcset="img/b@0.25x.jpg" media="--sm" />
                    <img class="w-100 w-xl-auto h-xl-100 img-align-center lazyload lazypreload" data-src="img/b@0.15x.jpg" alt="ZUIHODEN"/>
                  </picture>
                  <h3 class="bg-blk d-inline-block position-absolute bottomLeft z-10 mb-3 mb-md-4 fz-2xs py-1 pr-4 rounded-top-right-md rounded-bottom-right-md lh-104 clr-wht">ZUIHODEN</h3>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 mt-3 mt-lg-0">
                <a v-scroll-to="scrollTo('#sec-c')" href="#sec-c" class="d-block position-relative">
                  <picture class="d-block ovh h-7rem h-md-8rem h-lg-7rem h-xl-10rem rounded">
                    <source data-srcset="img/c@0.25x.jpg" media="--xl" />
                    <source data-srcset="img/c@0.15x.jpg" media="--lg" />
                    <source data-srcset="img/c@0.33x.jpg" media="--md" />
                    <source data-srcset="img/c@0.25x.jpg" media="--sm" />
                    <img class="w-100 w-xl-auto h-xl-100 img-align-center lazyload lazypreload" data-src="img/c@0.15x.jpg" alt="OKAMA"/>
                  </picture>
                  <h3 class="bg-blk d-inline-block position-absolute bottomLeft z-10 mb-3 mb-md-4 fz-2xs py-1 pr-4 rounded-top-right-md rounded-bottom-right-md lh-104 clr-wht">OKAMA</h3>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 mt-3 mt-lg-0">
                <a v-scroll-to="scrollTo('#sec-d')" href="#sec-d" class="d-block position-relative">
                  <picture class="d-block ovh h-7rem h-md-8rem h-lg-7rem h-xl-10rem rounded">
                    <source data-srcset="img/d@0.25x.jpg" media="--xl" />
                    <source data-srcset="img/d@0.15x.jpg" media="--lg" />
                    <source data-srcset="img/d@0.33x.jpg" media="--md" />
                    <source data-srcset="img/d@0.25x.jpg" media="--sm" />
                    <img class="w-100 w-xl-auto h-xl-100 img-align-center lazyload lazypreload" data-src="img/d@0.15x.jpg" alt="JODOGAHAMA BEACH"/>
                  </picture>
                  <h3 class="bg-blk d-inline-block position-absolute bottomLeft z-10 mb-3 mb-md-4 fz-2xs py-1 pr-4 rounded-top-right-md rounded-bottom-right-md lh-104 clr-wht">JODOGAHAMA BEACH</h3>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 mt-3 mt-lg-0">
                <a v-scroll-to="scrollTo('#sec-e')" href="#sec-e" class="d-block position-relative">
                  <picture class="d-block ovh h-7rem h-md-8rem h-lg-7rem h-xl-10rem rounded">
                    <source data-srcset="img/e@0.25x.jpg" media="--xl" />
                    <source data-srcset="img/e@0.15x.jpg" media="--lg" />
                    <source data-srcset="img/e@0.33x.jpg" media="--md" />
                    <source data-srcset="img/e@0.25x.jpg" media="--sm" />
                    <img class="w-100 w-xl-auto h-xl-100 img-align-center lazyload lazypreload" data-src="img/e@0.15x.jpg" alt="GENBI GORGE"/>
                  </picture>
                  <h3 class="bg-blk d-inline-block position-absolute bottomLeft z-10 mb-3 mb-md-4 fz-2xs py-1 pr-4 rounded-top-right-md rounded-bottom-right-md lh-104 clr-wht">GENBI GORGE</h3>
                </a>
              </div>
              <div class="col-6 col-sm-4 col-lg-2 mt-3 mt-lg-0">
                <a v-scroll-to="scrollTo('#sec-f')" href="#sec-f" class="d-block position-relative">
                  <picture class="d-block ovh h-7rem h-md-8rem h-lg-7rem h-xl-10rem rounded">
                    <source data-srcset="img/f@0.25x.jpg" media="--xl" />
                    <source data-srcset="img/f@0.15x.jpg" media="--lg" />
                    <source data-srcset="img/f@0.33x.jpg" media="--md" />
                    <source data-srcset="img/f@0.25x.jpg" media="--sm" />
                    <img class="w-100 w-xl-auto h-xl-100 img-align-center lazyload lazypreload" data-src="img/f@0.15x.jpg" alt="MOTSUJI TEMPLE"/>
                  </picture>
                  <h3 class="bg-blk d-inline-block position-absolute bottomLeft z-10 mb-3 mb-md-4 fz-2xs py-1 pr-4 rounded-top-right-md rounded-bottom-right-md lh-104 clr-wht">MOTSUJI TEMPLE</h3>
                </a>
              </div>
            </div>
          </div>
          <div class="col-auto w-33rem w-lg-30rem w-xl-15rem w-2xl-17rem mt-5 mt-xl-0">
            <h2 class="fz-sm fz-md-md fz-lg-lg clr-wht">FIND/EXPOLRE</h2>
            <ul class="mt-3 mt-lg-4 form-row">
              <li class="col-6 col-xl-12">
                <a v-scroll-to="scrollTo('#sec-views')" href="#sec-views" class="d-block p-3 h-305rem h-xl-405rem bg-wht hvr-bg-red hvr-clr-red rounded">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-weight-700 ls-0 fz-2xs fz-md-xs fz-xl-2xs">Glamour Of The View</div>
                    <div class="ml-auto"><font-awesome-icon :icon="['fal', 'angle-down']" /></div>
                  </div>
                </a>
              </li>
              <li class="col-6 col-xl-12 mt-xl-3">
                <a href="" class="d-block p-3 h-305rem h-xl-405rem bg-wht hvr-bg-red hvr-clr-red rounded">
                  <div class="h-100 d-flex flex-wrap align-items-center">
                    <div class="font-weight-700 ls-0 fz-2xs fz-md-xs fz-xl-2xs">Perfect View Tour</div>
                    <div class="ml-auto"><font-awesome-icon :icon="['fal', 'angle-down']" /></div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <h2 class="fz-sm fz-md-md fz-lg-lg clr-wht font-weight-300 ls-n001 ls-md-0 pb-lg-2"><strong class="font-weight-700">TOHOKU JAPAN Movie</strong> <span class="fz-xs fz-md-md fz-lg-lg">in Miyagi pref & Iwate pref.</span></h2>
      <div v-inview:enter="onEnter" v-inview:leave="onLeave" id="box-video" :class="{ 'muted': this.muted }" class="position-relative mx-n405 mx-md-0 mt-3 mt-lg-4 ovh h-20rem h-sm-28rem h-lg-40rem h-xl-80vh mh-xl-45rem mah-xl-50rem mah-3xl-56rem">
        <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
        <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
        <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
        <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
        <div class="w-100 h-100 d-flex justify-content-center align-items-center position-absolute z-0">
          <img class="w-6rem lazyload lazypreload" data-src="img/global/loader.svg" alt="loading"/>
        </div>
        <video ref="video" loop="" muted="" playsinline="true" class="w-100 img-align-center lazyload lazypreload" :data-src="videoSrc"></video>
        <button id="equaliser" @click="toggleMute" class="bg-none trs-all-05 px-0 position-absolute z-15">
          <div class="row no-gutters">
            <ol class="col-auto equaliser-column">
              <li class="eq-bar"></li>
            </ol>
            <ol class="col-auto equaliser-column">
              <li class="eq-bar"></li>
            </ol>
            <ol class="col-auto equaliser-column">
              <li class="eq-bar"></li>
            </ol>
            <ol class="col-auto equaliser-column">
              <li class="eq-bar"></li>
            </ol>
          </div>
        </button>
      </div>
      <h2 id="sec-views" class="fz-sm fz-md-md fz-lg-lg clr-wht mb-n3 mb-lg-n5 mb-xl-n6 pt-5 pt-lg-6">Recommended perfect views.</h2>
      <ul class="li-sec">
        <li>
          <section id="sec-a" class="mt-405 mt-sm-0 pt-sm-6 pt-lg-7 pt-xl-9">
            <div class="row add-sm-gutters add2x-lg-gutters add3x-xl-gutters align-items-stretch sec-row">
              <div class="col-sm-7 col-lg-8">
                <div class="mx-n405 mx-md-0 ovh h-18rem h-sm-22rem h-lg-30rem h-2xl-35rem rounded position-relative">
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                  <picture class="d-block h-100 sec-zoom">
                    <source data-srcset="img/a.jpg" media="--2xl" />
                    <source data-srcset="img/a@0.75x.jpg" media="--md" />
                    <img class="w-100 w-md-auto h-md-100 h-lg-auto w-lg-100 img-align-center lazyload lazypreload" data-src="img/a@0.5x.jpg" alt="MATSUHIMA miyagi japan"/>
                  </picture>
                </div>
              </div>
              <div class="col mt-405 mt-sm-0">
                <div class="sec-exp h-100 px-4 px-sm-0">
                  <div class="d-flex align-items-center h-100 position-relative">
                    <div>
                      <h1 class="fz-lg fz-md-xl fz-3xl-2xl ff-lang lh-104 clr-wht af-sec">MATSUHIMA</h1>
                      <p class="fz-3xl-xsm my-3 my-md-405 lh-2">A crater lake in the highest area of Zao Mountain Range, MATSUHIMA’s emerald green water is mystic. The color of the water changes over time and strongly draws the eye.</p>
                      <ul class="row low-gutters justify-content-between py-1 pt-md-4 pb-md-0">
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-red"><font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />Google Map</a>
                        </li>
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-trip"><font-awesome-icon class="mr-2" :icon="['fab', 'tripadvisor']" />TripAdvisor</a>
                        </li>
                        <li class="col-auto">
                          <a href="https://visitmiyagi.com/areas/matsushima-bay/" target="_blank" class="fz-2xs fz-3xl-xs clr-wht d-block">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'external-link']" />More Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section id="sec-b" class="mt-405 mt-sm-0 pt-sm-6 pt-lg-7 pt-xl-9">
            <div class="row add-sm-gutters add2x-lg-gutters add3x-xl-gutters align-items-stretch sec-row">
              <div class="col-sm-7 col-lg-8">
                <div class="mx-n405 mx-md-0 ovh h-18rem h-sm-22rem h-lg-30rem h-2xl-35rem rounded position-relative">
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                  <picture class="d-block h-100 sec-zoom">
                    <source data-srcset="img/b.jpg" media="--2xl" />
                    <source data-srcset="img/b@0.75x.jpg" media="--md" />
                    <img class="w-100 w-md-auto h-md-100 h-lg-auto w-lg-100 img-align-center lazyload lazypreload" data-src="img/b@0.5x.jpg" alt="ZUIHODEN"/>
                  </picture>
                </div>
              </div>
              <div class="col mt-405 mt-sm-0">
                <div class="sec-exp h-100 px-4 px-sm-0">
                  <div class="d-flex align-items-center h-100 position-relative">
                    <div>
                      <h1 class="fz-lg fz-md-xl fz-3xl-2xl ff-lang lh-104 clr-wht af-sec">ZUIHODEN</h1>
                      <p class="fz-3xl-xsm my-3 my-md-405 lh-2">A crater lake in the highest area of Zao Mountain Range, MATSUHIMA’s emerald green water is mystic. The color of the water changes over time and strongly draws the eye.</p>
                      <ul class="row low-gutters justify-content-between py-1 pt-md-4 pb-md-0">
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-red"><font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />Google Map</a>
                        </li>
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-trip"><font-awesome-icon class="mr-2" :icon="['fab', 'tripadvisor']" />TripAdvisor</a>
                        </li>
                        <li class="col-auto">
                          <a href="https://visitmiyagi.com/articles/zuihoden-mausoleum/" target="_blank" class="fz-2xs fz-3xl-xs clr-wht d-block">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'external-link']" />More Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section id="sec-c" class="mt-405 mt-sm-0 pt-sm-6 pt-lg-7 pt-xl-9">
            <div class="row add-sm-gutters add2x-lg-gutters add3x-xl-gutters align-items-stretch sec-row">
              <div class="col-sm-7 col-lg-8">
                <div class="mx-n405 mx-md-0 ovh h-18rem h-sm-22rem h-lg-30rem h-2xl-35rem rounded position-relative">
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                  <picture class="d-block h-100 sec-zoom">
                    <source data-srcset="img/c.jpg" media="--2xl" />
                    <source data-srcset="img/c@0.75x.jpg" media="--md" />
                    <img class="w-100 w-md-auto h-md-100 h-lg-auto w-lg-100 img-align-center lazyload lazypreload" data-src="img/c@0.5x.jpg" alt="OKAMA"/>
                  </picture>
                </div>
              </div>
              <div class="col mt-405 mt-sm-0">
                <div class="sec-exp h-100 px-4 px-sm-0">
                  <div class="d-flex align-items-center h-100 position-relative">
                    <div>
                      <h1 class="fz-lg fz-md-xl fz-3xl-2xl ff-lang lh-104 clr-wht af-sec">OKAMA</h1>
                      <p class="fz-3xl-xsm my-3 my-md-405 lh-2">A crater lake in the highest area of Zao Mountain Range, MATSUHIMA’s emerald green water is mystic. The color of the water changes over time and strongly draws the eye.</p>
                      <ul class="row low-gutters justify-content-between py-1 pt-md-4 pb-md-0">
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-red"><font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />Google Map</a>
                        </li>
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-trip"><font-awesome-icon class="mr-2" :icon="['fab', 'tripadvisor']" />TripAdvisor</a>
                        </li>
                        <li class="col-auto">
                          <a href="https://visitmiyagi.com/articles/mount-zao-okama-crater/" target="_blank" class="fz-2xs fz-3xl-xs clr-wht d-block">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'external-link']" />More Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section id="sec-d" class="mt-405 mt-sm-0 pt-sm-6 pt-lg-7 pt-xl-9">
            <div class="row add-sm-gutters add2x-lg-gutters add3x-xl-gutters align-items-stretch sec-row">
              <div class="col-sm-7 col-lg-8">
                <div class="mx-n405 mx-md-0 ovh h-18rem h-sm-22rem h-lg-30rem h-2xl-35rem rounded position-relative">
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                  <picture class="d-block h-100 sec-zoom">
                    <source data-srcset="img/d.jpg" media="--2xl" />
                    <source data-srcset="img/d@0.75x.jpg" media="--md" />
                    <img class="w-100 w-md-auto h-md-100 h-lg-auto w-lg-100 img-align-center lazyload lazypreload" data-src="img/d@0.5x.jpg" alt="JODOGAHAMA BEACH"/>
                  </picture>
                </div>
              </div>
              <div class="col mt-405 mt-sm-0">
                <div class="sec-exp h-100 px-4 px-sm-0">
                  <div class="d-flex align-items-center h-100 position-relative">
                    <div>
                      <h1 class="fz-lg fz-md-xl fz-3xl-2xl ff-lang lh-104 clr-wht af-sec">JODOGAHAMA BEACH</h1>
                      <p class="fz-3xl-xsm my-3 my-md-405 lh-2">A crater lake in the highest area of Zao Mountain Range, MATSUHIMA’s emerald green water is mystic. The color of the water changes over time and strongly draws the eye.</p>
                      <ul class="row low-gutters justify-content-between py-1 pt-md-4 pb-md-0">
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-red"><font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />Google Map</a>
                        </li>
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-trip"><font-awesome-icon class="mr-2" :icon="['fab', 'tripadvisor']" />TripAdvisor</a>
                        </li>
                        <li class="col-auto">
                          <a href="https://visitiwate.com/article/4697" target="_blank" class="fz-2xs fz-3xl-xs clr-wht d-block">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'external-link']" />More Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section id="sec-e" class="mt-405 mt-sm-0 pt-sm-6 pt-lg-7 pt-xl-9">
            <div class="row add-sm-gutters add2x-lg-gutters add3x-xl-gutters align-items-stretch sec-row">
              <div class="col-sm-7 col-lg-8">
                <div class="mx-n405 mx-md-0 ovh h-18rem h-sm-22rem h-lg-30rem h-2xl-35rem rounded position-relative">
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                  <picture class="d-block h-100 sec-zoom">
                    <source data-srcset="img/e.jpg" media="--2xl" />
                    <source data-srcset="img/e@0.75x.jpg" media="--md" />
                    <img class="w-100 w-md-auto h-md-100 h-lg-auto w-lg-100 img-align-center lazyload lazypreload" data-src="img/e@0.5x.jpg" alt="GENBI GORGE"/>
                  </picture>
                </div>
              </div>
              <div class="col mt-405 mt-sm-0">
                <div class="sec-exp h-100 px-4 px-sm-0">
                  <div class="d-flex align-items-center h-100 position-relative">
                    <div>
                      <h1 class="fz-lg fz-md-xl fz-3xl-2xl ff-lang lh-104 clr-wht af-sec">GENBI GORGE</h1>
                      <p class="fz-3xl-xsm my-3 my-md-405 lh-2">A crater lake in the highest area of Zao Mountain Range, MATSUHIMA’s emerald green water is mystic. The color of the water changes over time and strongly draws the eye.</p>
                      <ul class="row low-gutters justify-content-between py-1 pt-md-4 pb-md-0">
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-red"><font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />Google Map</a>
                        </li>
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-trip"><font-awesome-icon class="mr-2" :icon="['fab', 'tripadvisor']" />TripAdvisor</a>
                        </li>
                        <li class="col-auto">
                          <a href="https://visitiwate.com/en/article/4707" target="_blank" class="fz-2xs fz-3xl-xs clr-wht d-block">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'external-link']" />More Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
        <li>
          <section id="sec-f" class="mt-405 mt-sm-0 pt-sm-6 pt-lg-7 pt-xl-9">
            <div class="row add-sm-gutters add2x-lg-gutters add3x-xl-gutters align-items-stretch sec-row">
              <div class="col-sm-7 col-lg-8">
                <div class="mx-n405 mx-md-0 ovh h-18rem h-sm-22rem h-lg-30rem h-2xl-35rem rounded position-relative">
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-right position-absolute topRight op-05"></div>
                  <div class="h-100 w-2rem w-lg-1rem z-10 box-gra-left position-absolute topLeft op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-top position-absolute topRight op-05"></div>
                  <div class="w-100 h-2rem h-lg-1rem z-10 box-gra-bottom position-absolute bottomRight op-05"></div>
                  <picture class="d-block h-100 sec-zoom">
                    <source data-srcset="img/f.jpg" media="--2xl" />
                    <source data-srcset="img/f@0.75x.jpg" media="--md" />
                    <img class="w-100 w-md-auto h-md-100 h-lg-auto w-lg-100 img-align-center lazyload lazypreload" data-src="img/f@0.5x.jpg" alt="MOTSUJI TEMPLE"/>
                  </picture>
                </div>
              </div>
              <div class="col mt-405 mt-sm-0">
                <div class="sec-exp h-100 px-4 px-sm-0">
                  <div class="d-flex align-items-center h-100 position-relative">
                    <div>
                      <h1 class="fz-lg fz-md-xl fz-3xl-2xl ff-lang lh-104 clr-wht af-sec">MOTSUJI TEMPLE</h1>
                      <p class="fz-3xl-xsm my-3 my-md-405 lh-2">A crater lake in the highest area of Zao Mountain Range, MATSUHIMA’s emerald green water is mystic. The color of the water changes over time and strongly draws the eye.</p>
                      <ul class="row low-gutters justify-content-between py-1 pt-md-4 pb-md-0">
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-red"><font-awesome-icon class="mr-2" :icon="['fas', 'map-marker-alt']" />Google Map</a>
                        </li>
                        <li class="col-auto">
                          <a href="" target="_blank" class="fz-2xs fz-3xl-xs clr-trip"><font-awesome-icon class="mr-2" :icon="['fab', 'tripadvisor']" />TripAdvisor</a>
                        </li>
                        <li class="col-auto">
                          <a href="https://visitiwate.com/article/4784" target="_blank" class="fz-2xs fz-3xl-xs clr-wht d-block">
                            <font-awesome-icon class="mr-2" :icon="['fas', 'external-link']" />More Info
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </li>
      </ul>
      <div class="mx-n4 mx-md-0 h-50rem h-md-auto ovh position-relative">
        <div class="w-100 h-8rem z-10 box-gra-fade position-absolute topRight"></div>
        <div class="row justify-content-center">
          <div class="col-auto h-map">
            <div class="lazyload lazypreload bg-cover w-100 h-100 bg-norepeat" data-bgset="img/map@0.5x.png [--sm] | img/map@0.75x.png [--lg]  | img/map.png [--3xl] | img/map@0.33x.png">
              <ul class="position-relative">
                <li class="view-1">
                  <a id="view-a" href="" class="d-block position-absolute z-1 fz-md clr-red" target="_blank"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></a>
                </li>
                <li class="view-2">
                  <a id="view-b" href="" class="d-block position-absolute z-1 fz-md clr-red" target="_blank"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></a>
                </li>
                <li class="view-3">
                  <a id="view-c" href="" class="d-block position-absolute z-1 fz-md clr-red" target="_blank"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></a>
                </li>
                <li class="view-4">
                  <a id="view-d" href="" class="d-block position-absolute z-1 fz-md clr-red" target="_blank"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></a>
                </li>
                <li class="view-5">
                  <a id="view-e" href="" class="d-block position-absolute z-1 fz-md clr-red" target="_blank"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></a>
                </li>
                <li class="view-6">
                  <a id="view-f" href="" class="d-block position-absolute z-1 fz-md clr-red" target="_blank"><font-awesome-icon :icon="['fas', 'map-marker-alt']" /></a>
                </li>
              </ul>
            </div>
          </div>
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
  name: 'MockIndex',
  components: { SpTel },
  layout: 'default',
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
  mounted () {
    this.$refs.video.onloadeddata = () => {
      this.muted = true
    }
    this.$nextTick(() => {
      if (this.isSpTel) {
        this.videoSrc = 'img/videos/mi-xs.mp4?v=2'
      } else if (this.bp.lg) {
        this.videoSrc = 'img/videos/mi-1080.mp4?v=2'
      } else {
        this.videoSrc = 'img/videos/mi-720.mp4?v=2'
      }
    })
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
      title: 'Find Your Perfect View in MIYAGI pref & IWATE pref.',
      description: 'TJ 2020 MI campaign',
      ogImage: '/img/global/ogi/a.jpg'
    }
    return head(props, this.$store)
  }
}
</script>

<style></style>


