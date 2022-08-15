import Head from 'next/head';
import { useState, useContext } from 'react';
import { getData } from '../../utils/fetchData';
import { DataContext } from '../../store/GlobalState';
import { addToCart } from '../../store/Actions';
import Link from 'next/link';

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  const [tab, setTab] = useState(0);

  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const isActive = (index) => {
    if (tab === index) return ' active';
    return '';
  };

  const userLink = () => {
    return (
      <>
        <button
          className="btn btn-success"
          style={{ marginLeft: '5px', flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => dispatch(addToCart(product, cart))}
        >
          Mua
        </button>
      </>
    );
  };

  return (
    <div className="row detail_page">
      {auth.user && auth.user.role === 'admin' && (
        <input
          type="checkbox"
          checked={product.checked}
          className="position-absolute"
          style={{ height: '20px', width: '20px' }}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <Head>
        <title>Chi Tiết Sản Phẩm</title>
      </Head>
      <div className="col-md-6">
        <img
          src={product.images[tab].url}
          alt={product.images[tab].url}
          className="d-block img-thumbnail rounded mt-4 w-100"
          style={{ height: '550px' }}
        />
      </div>
      <div className="col-md-6 mt-3">
        <h2 className="text-uppercase">{product.title}</h2>
        <h5 className="text-danger">{product.price}₫</h5>

        <div className="row mx-0 d-flex justify-content-between">
          {product.inStock > 0 ? (
            <h6 className="text-danger">Sản Phẩm: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">Hết Hàng</h6>
          )}

          <h6 className="text-danger">Đã Bán: {product.sold}</h6>
        </div>

        <div className="my-2">{product.description}</div>
        <div className="my-2">{product.content}</div>

        <hr class="my-2" />

        <h5 class="mb-4 text-black">Sản Phẩm Gợi Ý: </h5>

        <div
          id="multi-item-example"
          class="carousel slide carousel-multi-item"
          data-ride="carousel"
        >
          <div class="controls-top">
            <a
              class="btn-floating"
              href="#multi-item-example"
              data-slide="prev"
            >
              <i class="fa fa-chevron-left"></i>
            </a>
            <a
              class="btn-floating"
              href="#multi-item-example"
              data-slide="next"
            >
              <i class="fa fa-chevron-right"></i>
            </a>
          </div>

          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364313/Products/1_heauuy.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13 Pro Max</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364313/Products/2_dpfcm2.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13 Pro Max</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364315/Products/4_bhj3fm.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13 Pro Max</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364313/Products/17_s3iy9w.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13 Pro</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364313/Products/11_v54v1y.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13 Pro</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364313/Products/12_uadzai.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13 Pro</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="row">
                <div class="col-md-4">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364313/Products/13_vq6ysl.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364314/Products/21_xbjw6a.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div class="col-md-4 clearfix d-none d-md-block">
                  <div class="card mb-2">
                    <img
                      class="card-img-top"
                      src="https://res.cloudinary.com/dza02low4/image/upload/v1660364314/Products/22_uxqxnb.webp"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h4 class="card-title">iPhone 13</h4>
                      <Link href="/">
                        <a className="navbar-brand btn btn-primary">Xem Thêm</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await getData(`product/${id}`);
  // server side rendering
  return {
    props: { product: res.product }, // will be passed to the page component as props
  };
}

export default DetailProduct;
