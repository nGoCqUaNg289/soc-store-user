<template>
  <div class="uk-offcanvas-content">
    <main>
      <section class="uk-section uk-section-small">
        <div class="uk-container">
          <div class="uk-grid-medium uk-child-width-1-1" uk-grid>
            <div class="uk-text-center">
              <ul class="uk-breadcrumb uk-flex-center uk-margin-remove">
                <li><a href="index.html">Home</a></li>
                <li><span>Carts</span></li>
              </ul>
              <h1 class="uk-margin-small-top uk-margin-remove-bottom">Carts</h1>
            </div>
            <div>
              <div class="uk-grid-medium" uk-grid>
                <section class="uk-width-1-1 uk-width-expand@m">
                  <article
                    class="
                      uk-card
                      uk-card-default
                      uk-card-small
                      uk-card-body
                      uk-article
                      tm-ignore-container
                    "
                  >
                    <!-- <div class="tm-wrapper">
                      <div style="width: 100%; height: 35px">
                        <input class="checkbox-custom" type="checkbox" />
                        <div class="title-checkbox-all">Tất cả sản phẩm</div>
                        <b-icon class="icon-trash" icon="trash"></b-icon>
                      </div>
                    </div> -->
                    <table class="table table-custom-border" id="">
                      <tbody>
                        <tr>
                          <th scope="row" class="checkbox-product">
                            <input type="checkbox" />
                          </th>
                          <td class="custom-font-size-td size-img-cart-product">
                            Tất cả sản phẩm
                          </td>
                          <td class="custom-font-size-td custom-size-price">
                            Đơn giá
                          </td>
                          <td class="custom-font-size-td custom-size-qty">
                            Số lượng
                          </td>
                          <td class="custom-font-size-td custom-size-total">
                            Thành tiền
                          </td>
                          <td>
                            <button class="btn-custom-color">
                              <b-icon icon="trash" style="color: red"></b-icon>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </article>
                </section>
                <aside class="uk-width-1-4 uk-visible@m tm-aside-column">
                  <section
                    class="uk-card uk-card-default uk-card-small"
                    uk-sticky="offset: 90; bottom: true;"
                  >
                    <nav>
                      <ul class="uk-nav uk-nav-default tm-nav">
                        <li><a href="about.html">Giao tới</a></li>
                        <li>
                          <div class="font-li">
                            Trịnh Ngọc Quang | 0829271132
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </section>
                </aside>
              </div>
            </div>
            <div>
              <div class="uk-grid-medium" uk-grid>
                <section class="uk-width-1-1 uk-width-expand@m">
                  <article
                    class="
                      uk-card
                      uk-card-default
                      uk-card-small
                      uk-card-body
                      uk-article
                      tm-ignore-container
                    "
                  >
                    <table class="table">
                      <tbody>
                        <tr>
                          <th scope="row" class="checkbox-product">
                            <input type="checkbox" />
                          </th>
                          <td class="size-img-cart-product">
                            <img
                              class="img-product"
                              src="https://lh3.googleusercontent.com/UYjc4AbXjoU0eaAa0G_ktI2EOceEE8gqrYDa_Pv3Vd9GTx1AywsaMOt9uNhi_b1MyiY4wt0zDTLKndsJnBdPvMpiL20KR6VA1TCYcgWQHK2JfdJoqLVRyFl8TuHLMDaqb-cn_fj2vQrf6mlJE671Vp8Ip0DBIoyAabre31nl6aDlD5ti8T168ryqcKVbPauWWTmwthnvi59C8tMHHS-Gp5g940ytxsgGOuCKQxkAa4LFpIgWdEhWWxNpGXuLZ0iXHeCuD7KSi4Ugh1xY512vlO8HWEjGmfNEwVqk_SvAnaNUtADely-Sfg5r-NT87-0x9FbQBLyh2l4Bb9a2wCYQOnEqB3EIbnDxU6O6LEfIqG0MI2bACKOYXTXxSkeL5BDjqgSTtwezZ6pVYNRD1d99tCvc11AA51tJCgNuoCNCdfYkI5uuyvgfHF3J3lrdObfMnnhwNFlLOZPSJl44fMlB1E_rVlQ25I1Cs5TsgHkoAcT5VkEGXNxDpmhx-c9oOMi4OPM8_AWQSWlU1O87_8Pg2N5O0ZzK-1M8Zru-RWJ8AMnCUokle1HjfnVxTFOAaheVAqbQlAE3m7v5l-UvYn3ZbNHjU42XVLgBPJfZ9yga1r0de0KwKwvFIyS-3vgnYqjqbfPT1M6nxwmJUdjsSuRwlEJ4bsqiB8hvpvnJ-7AsxLa_Cr2hDN0D8x1myMJpNySGf0H2ZaipnS8Qc7gaidROQ1Ci=w236-h150-no?authuser=0"
                              alt=""
                            />
                          </td>
                          <td class="custom-font-size-td custom-size-price">
                            92.000đ
                          </td>
                          <td class="custom-font-size-td custom-size-qty">5</td>
                          <td
                            class="
                              text-color-red
                              custom-font-size-td custom-size-total
                            "
                          >
                            92.000đ
                          </td>
                          <td>
                            <button class="btn-custom-color-product">
                              <b-icon icon="trash" style="color: red"></b-icon>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="checkbox-product">
                            <input type="checkbox" />
                          </th>
                          <td>
                            <img
                              class="img-product"
                              src="https://lh3.googleusercontent.com/hxd72Liq365QxDT-JRpZbDCRxbmaIX8LXltTWkRL-jmIswzESz0j0WG_zLnrWx6i4z80APTe015F0YvBIC1qsVgjtLlCvkM4FC85cCl-6TBi1eLl4LbcLazrP6cqBPP1onRHeBmYw-nLlfR0z5bm1m4P0SA2fbWNgxQGCIFVQuK80-A8JLjCOlg5xXeVdf0v_ZbAu5ODMVcRRRNz6OT4LmniS8I6my3WRzaMgFfV623vcJpYUUF0T3KS-kYr81sDeMJ5MlvMZ9adu0_XW8blk-J_yv4ev7fllI8NRVkZtKVNwUXSkIH2dm7NVdBsLx4ur7Q1exSO_zz7qVCuaiIRMPU0U6vRQJoSRw85P9O77gyNqyn_jdt4Q8eYZv7EeTnl5m8WfWVtV3UUOx-m02bENjBVZvsR7fhTOqKIOcdGRb5CUIFxsH93JU7eT0nY1a9mKZbzrmuVZbdCXaD84yNJKrtizfKsBfc4e0xYpo0tZMZ-hCDNC_gkPGUCdTSwFvKuDjdJiLE50QDOWshKi4iAeWh3Y7x8RAeXavhcrQ7zk20QWBzqfxMBGFGotb6SmFxhpz54vu_oELMdiCTu5YPhzPDn9S15cnycSi8ZG5tEaP32n1PCSDSSuN4WekFZoB1UEPODOpjA4Ys2qi37HjFAWKtSazy06rXr1_gL25oixYdTplo8ORC0g3t2S-ghpvwEOwPyBUTI_Bpop64sVC_rWVMs=w261-h150-no?authuser=0"
                              alt=""
                            />
                          </td>
                          <td class="custom-font-size-td custom-size-price">
                            92.000đ
                          </td>
                          <td class="custom-font-size-td custom-size-qty">5</td>
                          <td
                            class="
                              text-color-red
                              custom-font-size-td custom-size-total
                            "
                          >
                            92.000đ
                          </td>
                          <td>
                            <button class="btn-custom-color-product">
                              <b-icon icon="trash" style="color: red"></b-icon>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row" class="checkbox-product">
                            <input type="checkbox" />
                          </th>
                          <td>
                            <img
                              class="img-product"
                              src="https://lh3.googleusercontent.com/EiBXmBjOE8-J6iAOEYiUx9Pih01swR9e8Y-2F54tg9x4rfuPfAQeLWB4qesJHkSksq8bp7gNxB6KUm17jNaNLWU8y-G3E4FQZAUobZ8dSdYEBHMFAluAKx7ysbNB-GOWxH6lTRlWE5e6alvG8HVWPGPpSWMmFx8vsQBUe_vYgqoGUhtwRSH_0LBzLC7yD7wIMLuZOUkW7VKw355WMKtASvkUAWpuc6WNA1SCrh6gVQ2IhXQ2h3tpT1vd4yqqPaJ0XadZPNXpXTf3EQU-CgEdZpSPUxg3q3pmILrh5MXfDZWbxEOH77uBMeFhDRRuOES9vbJMVuo-o3xJvfEco0PRC0oD7JAJ3SOa-cI4oyHr6rI6OI0McRLQon4mRiAmysbnp37-Y_YSj9dM4cHNrctEjyglfR-Df6cRN-ZZFdINS3rSs4figf4CCoZYclwoCINyPb-8W5Y0WOjzxhP8Qe8IckKcwN6DoI_IG9OFDddzM58kinhQHA7AMNpxB2vzvkEK0Z4crElJzm29tbXqH58sw2v-Xhz6UgkNXoZ263xAXFdV3tOI0nWBdUAP9EBP-8coZEUg-JrT2L9U0ie1ScLWfTUICUrBh3QQO99JpPwJLE5NsDZ7SoL3nOibDrWzZOslqHDaH8gbMe_jX4nxfA56EiCvqpQlytYOO29YRToyiglGcqUu7tT03Tex00maQclRjv7kyfNOroYO8gXLz534f5Qg=w257-h150-no?authuser=0"
                              alt=""
                            />
                          </td>
                          <td class="custom-font-size-td custom-size-price">
                            92.000đ
                          </td>
                          <td class="custom-font-size-td custom-size-qty">5</td>
                          <td
                            class="
                              text-color-red
                              custom-font-size-td custom-size-total
                            "
                          >
                            92.000đ
                          </td>
                          <td>
                            <button class="btn-custom-color-product">
                              <b-icon icon="trash" style="color: red"></b-icon>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <!-- <div class="tm-wrapper">
                      <div class="product-cart">
                        <input class="checkbox-custom-product" type="checkbox" />
                        <img
                          class="img-product"
                          src="https://lh3.googleusercontent.com/UYjc4AbXjoU0eaAa0G_ktI2EOceEE8gqrYDa_Pv3Vd9GTx1AywsaMOt9uNhi_b1MyiY4wt0zDTLKndsJnBdPvMpiL20KR6VA1TCYcgWQHK2JfdJoqLVRyFl8TuHLMDaqb-cn_fj2vQrf6mlJE671Vp8Ip0DBIoyAabre31nl6aDlD5ti8T168ryqcKVbPauWWTmwthnvi59C8tMHHS-Gp5g940ytxsgGOuCKQxkAa4LFpIgWdEhWWxNpGXuLZ0iXHeCuD7KSi4Ugh1xY512vlO8HWEjGmfNEwVqk_SvAnaNUtADely-Sfg5r-NT87-0x9FbQBLyh2l4Bb9a2wCYQOnEqB3EIbnDxU6O6LEfIqG0MI2bACKOYXTXxSkeL5BDjqgSTtwezZ6pVYNRD1d99tCvc11AA51tJCgNuoCNCdfYkI5uuyvgfHF3J3lrdObfMnnhwNFlLOZPSJl44fMlB1E_rVlQ25I1Cs5TsgHkoAcT5VkEGXNxDpmhx-c9oOMi4OPM8_AWQSWlU1O87_8Pg2N5O0ZzK-1M8Zru-RWJ8AMnCUokle1HjfnVxTFOAaheVAqbQlAE3m7v5l-UvYn3ZbNHjU42XVLgBPJfZ9yga1r0de0KwKwvFIyS-3vgnYqjqbfPT1M6nxwmJUdjsSuRwlEJ4bsqiB8hvpvnJ-7AsxLa_Cr2hDN0D8x1myMJpNySGf0H2ZaipnS8Qc7gaidROQ1Ci=w236-h150-no?authuser=0"
                          alt=""
                        />
                        <div class="checkbox-custom-product col-4">MacBook Pro 2019</div>
                      </div>
                    </div> -->

                    <!-- <div
                      class="
                        uk-child-width-1-1 uk-child-width-1-2@s uk-margin-top
                      "
                      uk-grid
                    ></div> -->
                  </article>
                </section>
                <aside class="uk-width-1-4 uk-visible@m tm-aside-column">
                  <section
                    class="uk-card uk-card-default uk-card-small"
                    uk-sticky="offset: 90; bottom: true;"
                  >
                    <nav>
                      <ul class="uk-nav uk-nav-default tm-nav">
                        <li class="uk-active">
                          <a href="about.html"
                            >Tạm tính
                            <span class="span-right">120000 đ</span></a
                          >
                        </li>
                        <li class="uk-active">
                          <a href="contacts.html"
                            >Giảm giá
                            <span class="span-right">0 đ</span>
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a href="blog.html">
                            <div>Tổng cộng</div>
                            <span class="span-total">120000 đ</span>
                          </a>
                        </li>
                        <br />
                        <br />
                        <br />

                        <li>
                          <button class="btn-muahang">Mua Hàng</button>
                        </li>
                      </ul>
                    </nav>
                  </section>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="uk-section uk-section-default uk-section-small">
        <div class="uk-container">
          <div uk-slider>
            <ul
              class="
                uk-slider-items
                uk-child-width-1-1
                uk-child-width-1-2@s
                uk-child-width-1-5@m
                uk-grid
              "
            >
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: star; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Mauris placerat</div>
                    <div class="uk-text-meta">
                      Donec mollis nibh dolor, sit amet auctor
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: receiver; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Lorem ipsum</div>
                    <div class="uk-text-meta">
                      Sit amet, consectetur adipiscing elit
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: location; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Proin pharetra</div>
                    <div class="uk-text-meta">
                      Nec quam a fermentum ut viverra
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: comments; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Praesent ultrices</div>
                    <div class="uk-text-meta">
                      Praesent ultrices, orci nec finibus
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div
                  class="uk-grid-small uk-flex-center uk-flex-left@s"
                  uk-grid
                >
                  <div><span uk-icon="icon: happy; ratio: 2.5;"></span></div>
                  <div class="uk-text-center uk-text-left@s uk-width-expand@s">
                    <div>Duis condimentum</div>
                    <div class="uk-text-meta">
                      Pellentesque eget varius arcu
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              class="
                uk-slider-nav uk-dotnav uk-flex-center uk-margin-medium-top
              "
            ></ul>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
/* .checkbox-custom {
  float: left;
  margin: 20px 0px 0px 20px;
} */
/* .checkbox-custom-product {
  float: left;
  margin: 45px 0px 0px 20px;
} */
.checkbox-product {
  vertical-align: middle;
  width: 40px;
}
.title-checkbox-all {
  float: left;
  margin: 15px 0px 0px 20px;
}
.icon-trash {
  margin: 20px 20px 0px 0px;
  float: right;
}
.font-li {
  margin-left: 20px;
  font-weight: bold;
  font-family: roboto, sans-serif;
  /* width: 210px; */
  /* margin-left: 0px; */
}
.uk-form-label {
  text-align: left;
}
.span-right {
  margin-left: 80px;
  color: gray;
}
.span-total {
  color: red;
  font-size: 20px;
  font-weight: 700;
  margin-left: 60px;
}
.img-product {
  /* widows: 120px; */
  height: 70px;
  /* float: left;
  margin-left: 15px;
  margin-top: 15px; */
}
.size-img-cart-product {
  width: 250px;
}
.text-color-red {
  color: red;
}
table.table-custom-border {
  border-color: white;
}
.custom-font-size-td {
  font-size: 14px;
  vertical-align: middle;
}
.btn-custom-color {
  border: none;
  background: white;
  float: right;
}
.btn-custom-color-product {
  border: none;
  background: white;
  float: right;
  margin-top: 20px;
}
.custom-size-price {
  width: 80px;
}
.custom-size-qty {
  width: 80px;
  text-align: center;
}
.custom-size-total {
  width: 100px;
}
.btn-muahang {
  border: none;
  color: white;
  background: red;
  border-radius: 5px;
  font-weight: 600;
  width: 100%;
  height: 35px;
}
</style>
