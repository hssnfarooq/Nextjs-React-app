import { NextPage } from 'next';
import Head from 'next/head';
import { ReactElement, useEffect, useState } from 'react';
import AdminLayout from '../../app/components/Layout/adminLayout';
import userprofileImg from '../../app/images/user-profile.png';
import colorCherry from '../../app/images/color-cherry.png';
import Heart1 from '../../app/images/Heart1.png';
import Gift1 from '../../app/images/Gift1.png';
import Mail2 from '../../app/images/Mail2.png';
import Lovers1 from '../../app/images/Lovers1.png';
import Flag1 from '../../app/images/Flag1.png';
import Color_Cherry22 from '../../app/images/Color_Cherry22.png';
import Phone_V1_Trasnparent1 from '../../app/images/Phone_V1_Trasnparent1.png';
import Video_Transparent_Fill1 from '../../app/images/Video_Transparent_Fill1.png';
import private_video_thumbnail from '../../app/images/private-video-thumbnail.png';
import private_videos_lock from '../../app/images/private-videos-lock.png';
import Stories from 'react-insta-stories';
const UserProfile = () => {
  const [publicImage, setPublicImage] = useState<string[] | null>([]);
  const [sIndex, setSIndex] = useState(0);
  const [displayStory, setDisplayStory] = useState(false);
  const contentStyle = {
    background: '#333',
    width: '100%',
    padding: 20,
    color: 'white',
    height: '100%',
  };
  // const GROUP1 = [
  // {
  //     content: ({ action, isPaused }) => {
  //         return <div style={contentStyle}>
  //             <h1>The new version is here.</h1>
  //             <p>This is the new story.</p>
  //             <p>Now render React components right into your stories.</p>
  //             <p>Possibilities are endless, like here - here's a code block!</p>
  //             <pre>
  //                 <code >
  //                     Hello
  //                 </code>
  //             </pre>
  //             <p>Or here, an image!</p>
  //             <br />
  //             <img alt="ss" src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
  //             <h3>Perfect. But there's more! →</h3>
  //         </div>
  //     }
  // },
  //    "https://images.unsplash.com/photo-1654596827333-a58885cf2f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  //    "https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"

  // ];
  const GROUP1 = [
    {
      url: 'http://localhost:3000/_next/static/media/private-video-thumbnail.939aa8f2.png',
    },
    {
      url: 'https://images.unsplash.com/photo-1592549585866-486f41343aaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    },
  ];
  useEffect(() => {
    setPublicImage([userprofileImg.src]);
  }, []);

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
                  <p className="profile-hero-user-intro">
                    Hello, I&#39; M Ruth
                  </p>
                </div>
                <h2 className="profile-hero-user-tagline">
                  A fun girl looking <br />
                  to find my match
                </h2>
              </div>
            </div>
            <div className="profile-hero-desc">
              <p className="profile-hero-desc-text">
                Lorem ipsum dolor set something about the woman goes here in the
                body copy.Lorem ipsum dolor set something about the woman goes
                here in the body copy.
              </p>
            </div>
          </div>

          <div className="profile-hero-btns-container">
            <div className="profile-hero-btns">
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
                <img src={Video_Transparent_Fill1.src} alt="" />
                <span className="profile-hero-btn-text">Video chat</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="private-videos">
        <div className="container">
          <div className="private-videos-wrapper">
            <h3 className="private-videos-title">Private videos</h3>
            <div className="private-videos-content">
              <div className="private-videos-item">
                <img
                  src={private_video_thumbnail.src}
                  alt=""
                  className="private-videos-bg-img"
                />
                <img
                  className="private-videos-lock-img"
                  src={private_videos_lock.src}
                  alt=""
                />
              </div>
              <div className="private-videos-item">
                <img
                  src={private_video_thumbnail.src}
                  alt=""
                  className="private-videos-bg-img"
                />
                <img
                  className="private-videos-lock-img"
                  src={private_videos_lock.src}
                  alt=""
                />
              </div>
              <div className="private-videos-item">
                <img
                  src={private_video_thumbnail.src}
                  alt=""
                  className="private-videos-bg-img"
                />
                <img
                  className="private-videos-lock-img"
                  src={private_videos_lock.src}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <section className="about-user">
          <div className="about-user-border"></div>
          <h1 className="about-user-title">About Ruth</h1>
          <div className="profile-hero-btns-container">
            <div className="profile-hero-btns">
              <span className="profile-hero-btn">
                <img src={Color_Cherry22.src} alt="" />
                <span className="profile-hero-btn-text">Tip</span>
              </span>
              <span className="profile-hero-btn">
                <img src={Gift1.src} alt="" />
                <span className="profile-hero-btn-text">Special Request</span>
              </span>
              <span className="profile-hero-btn">
                <img src={Lovers1.src} alt="" />
                <span className="profile-hero-btn-text">Be Lovers</span>
              </span>
              <span className="profile-hero-btn">
                <img src={Flag1.src} alt="" />
                <span className="profile-hero-btn-text">Flag</span>
              </span>
            </div>
          </div>
          <div className="container">
            <div className="about-user-content">
              <div className="about-user-public-story">
                <h3 className="about-user-story-title">Public story</h3>
                <div className="about-user-public-story-thumbnail">
                  {/* <img
                                        src={private_video_thumbnail.src}
                                        alt=""
                                        className="about-user-public-story-thumbnail-img"
                                        onClick={() => setImageHandler({ ...imageHandler, isOpen: true }) }
                                        /> */}
                  <Stories
                    stories={GROUP1}
                    loop={true}
                    currentIndex={sIndex}
                    keyboardNavigation
                    defaultInterval={8000}
                    height={400}
                    width={400}
                    onStoryEnd={(s, st) => {
                      if (sIndex === GROUP1.length) {
                        setSIndex(0);
                      } else {
                        setSIndex(sIndex + 1);
                      }
                    }}
                    onAllStoriesEnd={(s, st) => {
                      console.log('all stories ended', s, st);
                      setSIndex(0);
                    }}
                    onStoryStart={(s, st) =>
                      console.log('story started', s, st)
                    }
                    storyContainerStyles={{
                      borderRadius: 80,
                      overflow: 'hidden',
                    }}
                  />
                </div>
              </div>
              <div className="about-user-public-photos">
                <h3 className="about-user-story-title">Private photos</h3>
                <div className="about-user-public-photos-thumbnail">
                  <img
                    src={private_video_thumbnail.src}
                    alt=""
                    className="about-user-public-photos-thumbnail-img"
                  />
                  <img
                    className="private-videos-lock-img"
                    src={private_videos_lock.src}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};
UserProfile.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default UserProfile;
