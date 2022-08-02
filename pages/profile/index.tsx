import { ReactElement, useEffect, useState } from 'react';
import AdminLayout from '../../app/components/Layout/adminLayout';
import filterIcon from '../../app/images/filter-icon.png';
import filterArrowDown from '../../app/images/filter-arrow-down.png';
import galleryImg from '../../app/images/gallery-image.png';
import { userService } from '../../app/services';
import { notify } from '../../app/helper/Toast';
import ProfileItem from '../../app/components/profileItem';
import { user } from '../../app/dataTypes/usertype';
import { Pagination } from '../../app/helper/pagination';

const ProfileIndex = () => {
  const [showFIlter, setShowFilter] = useState(false);
  const [showGender, setShowGender] = useState(false);
  const [showOrientation, setShowOrientation] = useState(false);
  const [usersList, setUsersList] = useState<user[]>([]);
  const [pageLimit, setPageLimit] = useState(6);
  const [offset, setOffSet] = useState(0);
  const [pages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const getUsersList = async () =>{
    try {
      
      const {data} = await userService.getAll(pageLimit, offset);
      console.log("data", data.data.data)
      setUsersList(data.data.data)
    } catch (error:any) {
      notify("error", error?.response?.data?.message)
    }
    
  }
  useEffect(() => {
    getUsersList()
  }, []);
  
  return (
    <>
      <section className="profile-filter">
        <div className="container">
          <div className="profile-filter-content">
            <div className="profile-filter-header">
              <h1 className="profile-filter-title">Explore Creators</h1>
              <button
                className="btn-profile-filter"
                onClick={() => setShowFilter(!showFIlter)}
              >
                <img src={filterIcon.src} alt="" />
                <span className="btn-profile-filter-text">Filters</span>
              </button>
            </div>
            {showFIlter && (
              <div className="profile-filter-options">
                <div className="btn-profile-filter-options-dropdown">
                  <button
                    className="btn-profile-filter-options"
                    onClick={() => setShowGender(!showGender)}
                  >
                    <span className="btn-profile-filter-options-text">
                      Gender
                    </span>
                    <img src={filterArrowDown.src} alt="" />
                    <div className="btn-profile-filter-dropdown"></div>
                  </button>
                  {showGender && (
                    <div className="btn-profile-filter-dropdown-list mobile-dropdown-gender">
                      <span className="btn-profile-filter-dropdown-text">
                        Gender
                      </span>
                      <form
                        action=""
                        className="btn-profile-filter-dropdown-form"
                      >
                        <label className="btn-profile-filter-dropdown-form-control">
                          <input type="checkbox" name="male" id="male" />
                          <span>Male</span>
                        </label>
                        <label className="btn-profile-filter-dropdown-form-control">
                          <input type="checkbox" name="female" id="female" />
                          <span>Female</span>
                        </label>
                        <label className="btn-profile-filter-dropdown-form-control">
                          <input type="checkbox" name="others" id="others" />
                          <span>Others</span>
                        </label>
                      </form>
                    </div>
                  )}
                </div>
                <div className="btn-profile-filter-options-dropdown">
                  <button
                    className="btn-profile-filter-options"
                    onClick={() => setShowOrientation(!showOrientation)}
                  >
                    <span className="btn-profile-filter-options-text">
                      Orientation
                    </span>
                    <img src={filterArrowDown.src} alt="" />
                  </button>
                  {showOrientation && (
                    <div className="btn-profile-filter-dropdown-list mobile-dropdown-orientation">
                      <span className="btn-profile-filter-dropdown-text">
                        Gender
                      </span>
                      <form
                        action=""
                        className="btn-profile-filter-dropdown-form"
                      >
                        <label className="btn-profile-filter-dropdown-form-control">
                          <input type="checkbox" name="male" id="male" />
                          <span>Male</span>
                        </label>
                        <label className="btn-profile-filter-dropdown-form-control">
                          <input type="checkbox" name="female" id="female" />
                          <span>Female</span>
                        </label>
                        <label className="btn-profile-filter-dropdown-form-control">
                          <input type="checkbox" name="others" id="others" />
                          <span>Others</span>
                        </label>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="gallery-filter">
        <div className="gallery-container">
          <div className="gallery-content">
            {usersList.length > 0 && usersList.map((userItem:user) => (

            <ProfileItem key={userItem.id} galleryImg={userItem.idUrl} title={userItem.displayName} />
            ))
          }
            
          </div>
        </div>
      </section>

      <Pagination total={usersList.length}
        pageLimit={pageLimit}
        dataLimit={offset}
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        getUsersList={getUsersList}
        />
    </>
  );
};
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const data = await userService.getAll();
//   console.log("data", data)

//   // Pass data to the page via props
//   return { props: { data } }
// }
ProfileIndex.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default ProfileIndex;
