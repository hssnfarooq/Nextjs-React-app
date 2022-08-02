import { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement, useState } from 'react';
import AdminLayout from '../../app/components/Layout/adminLayout';
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderImg1 from '../../app/assets/images/slider-img-1.png';
import SliderImg2 from '../../app/assets/images/slider-img-2.png';
import SliderImg3 from '../../app/assets/images/slider-img-3.png';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper';
import userprofileImg from '../../app/images/user-profile.png';
import colorCherry from '../../app/images/color-cherry.png';
import Heart1 from '../../app/images/Heart1.png';
import Mail2 from '../../app/images/Mail2.png';
import Lovers1 from '../../app/images/Lovers1.png';
import Phone_V1_Trasnparent1 from '../../app/images/Phone_V1_Trasnparent1.png';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const images = [
  '//placekitten.com/1500/500',
  '//placekitten.com/4000/3000',
  '//placekitten.com/800/1200',
  '//placekitten.com/1500/1500',
  '//placekitten.com/4000/3000',
];
const UserProfile = () => {
  const [lightboxCog, setLightBoxCog] = useState({
    photoIndex: 0,
    isOpen: false,
  });

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <section className="profile-hero">
        <div className="container">
          <div className="profile-hero-content">
            <div className="profile-hero-user">
              <div className="profile-hero-user-img">
                <img src={userprofileImg.src} alt="" />
              </div>
              <div className="profile-hero-user-info">
                <div className="profile-hero-user-name">
                  <img src={colorCherry.src} alt="" />
                </div>
                <h2 className="profile-hero-user-tagline">Jhon Doe</h2>
                <p className="profile-hero-user-intro">They/ Them</p>
              </div>
            </div>
            <div className="profile-hero-desc">
              <h3 className="profile-hero-desc-title">About Me</h3>
              <p className="profile-hero-desc-text">
                Lorem ipsum dolor set something about the woman goes here in the
                body copy.Lorem ipsum dolor set something about the woman goes
                here in the body copy.
              </p>
            </div>
          </div>
          <div className="profile-hero-btns-container">
            <div className="subscriber-hero-btns">
              <span className="profile-hero-btn">
                <img src={Heart1.src} alt="" />
                <span className="profile-hero-btn-text">Favorite</span>
              </span>
              <span className="profile-hero-btn">
                <img src={Mail2.src} alt="" />
                <span className="profile-hero-btn-text">Message</span>
              </span>
              <span className="profile-hero-btn">
                <img src={Phone_V1_Trasnparent1.src} alt="" />
                <span className="profile-hero-btn-text">Call</span>
              </span>
              <span className="profile-hero-btn">
                <img src={Lovers1.src} alt="" />
                <span className="profile-hero-btn-text">Be Lovers</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="photo-gallery">
        <div className="container">
          <h2 className="photo-gallery-title">Photo Gallery</h2>

          <div className="swiper-gallery-wrapper">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1005: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              loop={true}
              loopFillGroupWithBlank={true}
              modules={[Pagination, Navigation]}
              navigation={true}
              className="mySwiper"
            >
              <SwiperSlide
                onClick={() => setLightBoxCog({ photoIndex: 0, isOpen: true })}
              >
                <div className="photo-gallery-slider">
                  <img src={SliderImg1.src} alt="" />
                  <h2 className="photo-gallery-img-title">FPO</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setLightBoxCog({ photoIndex: 1, isOpen: true })}
              >
                <div className="photo-gallery-slider">
                  <img src={SliderImg2.src} alt="" />
                  <h2 className="photo-gallery-img-title">FPO</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setLightBoxCog({ photoIndex: 2, isOpen: true })}
              >
                <div className="photo-gallery-slider">
                  <img src={SliderImg3.src} alt="" />
                  <h2 className="photo-gallery-img-title">FPO</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setLightBoxCog({ photoIndex: 3, isOpen: true })}
              >
                <div className="photo-gallery-slider">
                  <img src={SliderImg1.src} alt="" />
                  <h2 className="photo-gallery-img-title">FPO</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setLightBoxCog({ photoIndex: 4, isOpen: true })}
              >
                <div className="photo-gallery-slider">
                  <img src={SliderImg2.src} alt="" />
                  <h2 className="photo-gallery-img-title">FPO</h2>
                </div>
              </SwiperSlide>
              <SwiperSlide
                onClick={() => setLightBoxCog({ photoIndex: 5, isOpen: true })}
              >
                <div className="photo-gallery-slider">
                  <img src={SliderImg3.src} alt="" />
                  <h2 className="photo-gallery-img-title">FPO</h2>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {lightboxCog.isOpen && (
            <Lightbox
              mainSrc={images[lightboxCog.photoIndex]}
              nextSrc={images[(lightboxCog.photoIndex + 1) % images.length]}
              prevSrc={
                images[
                  (lightboxCog.photoIndex + images.length - 1) % images.length
                ]
              }
              onCloseRequest={() =>
                setLightBoxCog({ ...lightboxCog, isOpen: false })
              }
              onMovePrevRequest={() =>
                setLightBoxCog({
                  ...lightboxCog,
                  photoIndex:
                    (lightboxCog.photoIndex + images.length - 1) %
                    images.length,
                })
              }
              onMoveNextRequest={() =>
                setLightBoxCog({
                  ...lightboxCog,
                  photoIndex: (lightboxCog.photoIndex + 1) % images.length,
                })
              }
              onImageLoad={() => {
                window.dispatchEvent(new Event('resize'));
              }}
            />
          )}
        </div>
      </section>
    </>
  );
};
UserProfile.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default UserProfile;
