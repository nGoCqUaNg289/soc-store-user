<template>
  <header>
    <div class="uk-navbar-container uk-light uk-visible@m tm-toolbar-container">
      <div class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <nav>
            <ul class="uk-navbar-nav">
              <li>
                <a href="#"
                  ><span
                    class="uk-margin-xsmall-right"
                    uk-icon="icon: receiver; ratio: .75;"
                  ></span
                  ><span class="tm-pseudo">8 800 799 99 99</span></a
                >
              </li>
              <li>
                <div class="uk-navbar-item">
                  <span
                    class="uk-margin-xsmall-right"
                    uk-icon="icon: clock; ratio: .75;"
                  ></span
                  >Daily 10:00–22:00
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div class="uk-navbar-right">
          <nav>
            <ul class="uk-navbar-nav">
              <li>
                <router-link to="/news">
                  <a href="">News</a>
                </router-link>
              </li>
              <li>
                <router-link to="/faq">
                  <a href="">FAQ</a>
                </router-link>
              </li>
              <!-- <li>
                <router-link to="">
                  <a href="">Payment</a>
                </router-link>
              </li> -->
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div
      class="uk-navbar-container tm-navbar-container"
      uk-sticky="cls-active: tm-navbar-container-fixed"
    >
      <div class="uk-container" uk-navbar>
        <div class="uk-navbar-left">
          <button
            class="uk-navbar-toggle uk-hidden@m"
            uk-toggle="target: #nav-offcanvas"
            uk-navbar-toggle-icon
          ></button>
          <router-link to="/"
            ><a class="uk-navbar-item uk-logo"
              ><img src="images/SOCStore.png" width="90" height="32" alt="Logo"/></a
          ></router-link>

          <nav class="uk-visible@m">
            <ul class="uk-navbar-nav">
              <li>
                <router-link to="/catalog">
                  <a class="a-custom"
                    >Catalog<span
                      class="uk-margin-xsmall-left"
                      uk-icon="icon: chevron-down; ratio: .75;"
                    ></span
                  ></a>
                </router-link>

                <div
                  class="uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical"
                  uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
                >
                  <div class="uk-container">
                    <ul
                      class="uk-navbar-dropdown-grid uk-child-width-1-5"
                      uk-grid
                    >
                      <li>
                        <div class="uk-margin-top uk-margin-bottom">
                          <router-link to="/category"
                            ><a class="uk-link-reset">
                              <img
                                class="uk-display-block uk-margin-auto uk-margin-bottom"
                                src="images/catalog/computers.svg"
                                alt="Laptops &amp; Tablets"
                                width="80"
                                height="80"
                              />
                              <div class="uk-text-bolder">
                                Laptops &amp; Tablets
                              </div>
                            </a></router-link
                          >

                          <ul class="uk-nav uk-nav-default">
                            <li><a>Laptops</a></li>
                            <li><a>Tablets</a></li>
                            <li><a>Peripherals</a></li>
                            <li><a>Keyboards</a></li>
                            <li><a>Accessories</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div class="uk-margin-top uk-margin-bottom">
                          <a class="uk-link-reset" href="#"
                            ><img
                              class="uk-display-block uk-margin-auto uk-margin-bottom"
                              src="images/catalog/phones.svg"
                              alt="Phones &amp; Gadgets"
                              width="80"
                              height="80"
                            />
                            <div class="uk-text-bolder">
                              Phones &amp; Gadgets
                            </div>
                          </a>
                          <ul class="uk-nav uk-nav-default">
                            <li><a>Smartphones</a></li>
                            <li>
                              <a>Mobile Phones</a>
                            </li>
                            <li>
                              <a>Smart watches</a>
                            </li>
                            <li>
                              <a>Charging and batteries</a>
                            </li>
                            <li><a>Accessories</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <router-link to="/brands">
                  <a class="a-custom"
                    >Brands<span
                      class="uk-margin-xsmall-left"
                      uk-icon="icon: chevron-down; ratio: .75;"
                    ></span
                  ></a>
                </router-link>

                <div
                  class="uk-navbar-dropdown uk-margin-remove uk-padding-remove-vertical"
                  uk-drop="pos: bottom-justify;delay-show: 125;delay-hide: 50;duration: 75;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
                >
                  <div
                    class="uk-container uk-container-small uk-margin-top uk-margin-bottom"
                  >
                    <ul class="uk-grid-small uk-child-width-1-6" uk-grid>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Apple"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/apple.svg" alt="Apple" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Samsung"
                          >
                            <figure class="tm-media-box-wrap">
                              <img
                                src="images/brands/samsung.svg"
                                alt="Samsung"
                              />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Sony"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/sony.svg" alt="Sony" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Microsoft"
                          >
                            <figure class="tm-media-box-wrap">
                              <img
                                src="images/brands/microsoft.svg"
                                alt="Microsoft"
                              />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Intel"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/intel.svg" alt="Intel" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="HP"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/hp.svg" alt="HP" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="LG"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/lg.svg" alt="LG" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Lenovo"
                          >
                            <figure class="tm-media-box-wrap">
                              <img
                                src="images/brands/lenovo.svg"
                                alt="Lenovo"
                              />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="ASUS"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/asus.svg" alt="ASUS" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Acer"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/acer.svg" alt="Acer" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Dell"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/dell.svg" alt="Dell" />
                            </figure>
                          </a>
                        </div>
                      </li>
                      <li>
                        <div class="tm-ratio tm-ratio-4-3">
                          <a
                            class="uk-link-muted uk-text-center uk-display-block uk-padding-small uk-box-shadow-hover-large tm-media-box"
                            href="#"
                            title="Canon"
                          >
                            <figure class="tm-media-box-wrap">
                              <img src="images/brands/canon.svg" alt="Canon" />
                            </figure>
                          </a>
                        </div>
                      </li>
                    </ul>
                    <div class="uk-text-center uk-margin">
                      <a
                        class="uk-link-muted uk-text-uppercase tm-link-to-all"
                        href="#"
                        ><span>See all brands</span
                        ><span uk-icon="icon: chevron-right; ratio: .75;"></span
                      ></a>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <router-link to="/blog"
                  ><a class="a-custom">Blog</a>
                </router-link>
              </li>
              <li>
                <router-link to="/about"
                  ><a class="a-custom">About</a>
                </router-link>
              </li>
              <li>
                <router-link to="/contacts"
                  ><a class="a-custom">Contacts</a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="uk-navbar-right">
          <a
            class="uk-navbar-toggle tm-navbar-button"
            href="#"
            uk-search-icon
          ></a>
          <div
            class="uk-navbar-dropdown uk-padding-small uk-margin-remove"
            uk-drop="mode: click;cls-drop: uk-navbar-dropdown;boundary: .tm-navbar-container;boundary-align: true;pos: bottom-justify;flip: x"
          >
            <div class="uk-container">
              <div class="uk-grid-small uk-flex-middle" uk-grid>
                <div class="uk-width-expand">
                  <form class="uk-search uk-search-navbar uk-width-1-1">
                    <input
                      class="uk-search-input"
                      type="search"
                      placeholder="Search…"
                      autofocus
                    />
                  </form>
                </div>
                <div class="uk-width-auto">
                  <a class="uk-navbar-dropdown-close" href="#" uk-close></a>
                </div>
              </div>
            </div>
          </div>
          <router-link to="/compare"
            ><a
              class="uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button"
              href="#"
              ><span uk-icon="copy"></span><span class="uk-badge">3</span></a
            ></router-link
          >
          <router-link to="/account">
            <a
              class="uk-navbar-item uk-link-muted tm-navbar-button"
              href="#"
              uk-icon="user"
            ></a>
          </router-link>

          <div
            class="uk-padding-small uk-margin-remove"
            uk-dropdown="pos: bottom-right; offset: -10; delay-hide: 200;"
            style="min-width: 150px;"
          >
            <ul class="uk-nav uk-dropdown-nav">
              <li>
                <a href="#">
                  Orders
                  <span>(2)</span></a
                >
              </li>
              <li>
                <router-link to="/favorites">
                  <a href="#">
                    Favorites
                    <span>(3)</span></a
                  >
                </router-link>
              </li>
              <li>
                <router-link to="/personal"
                  ><a href="#">Personal</a></router-link
                >
              </li>
              <li>
                <router-link to="/setting">
                  <a href="#">Settings</a>
                </router-link>
              </li>
              <li class="uk-nav-divider"></li>
              <li><a href="#">Log out</a></li>
            </ul>
          </div>
          <router-link to="/cart"
            ><a
              class="uk-navbar-item uk-link-muted uk-visible@m tm-navbar-button"
              href="#"
              ><span uk-icon="cart"></span><span class="uk-badge">2</span></a
            ></router-link
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style></style>
