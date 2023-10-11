import { useState, useEffect } from 'react';
import VideoItem from '../../components/VideoItem';
import { useGetVideos } from '../../services/queries';
import { BsViewStacked, BsGrid } from 'react-icons/bs';
import sortIcon from '../../assets/images/icons/SortIcon.png';

type SortMode = 'publishedAt' | 'title';

const HomePage = () => {
  const [itemPerPage, setItemPerPage] = useState(10);
  const [sortMode, setSortMode] = useState<SortMode>('publishedAt');
  const { data: videosData, refetch } = useGetVideos(itemPerPage, 1, sortMode);
  const [isFlexMode, setIsFlexMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeSortType = () => {
    setSortMode((prevSortMode) => (prevSortMode === 'publishedAt' ? 'title' : 'publishedAt'));
    refetch();
  };

  const handleChangeDisplay = () => {
    setIsFlexMode(!isFlexMode);
  };

  const loadMoreData = () => {
    setItemPerPage(itemPerPage + 10)
    if (isLoading) return;
    setIsLoading(true);
  };

  useEffect(() => {
    refetch();
  }, [itemPerPage]);

  useEffect(() => {
    setIsLoading(false);
  }, [videosData]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 10) {
      loadMoreData();
    }
  };

  return (
    <div>
      <div className='flex justify-end mb-6 pt-8 mr-80 gap-5'>
        <button onClick={handleChangeDisplay}>
          {isFlexMode ? <BsGrid size={24} /> : <BsViewStacked size={24} />}
        </button>
        <button onClick={handleChangeSortType}>
          <img src={sortIcon} alt='sort icon' width={24} height={24}></img>
        </button>
      </div>
      <div className='flex justify-center'>
        <div className={isFlexMode ? 'flex flex-col justify-center items-center gap-8' : 'grid grid-cols-3 gap-10'}>
          {videosData?.data?.body?.map((video: any) => (
            <VideoItem
              key={video.id}
              title={video.title}
              description={video.description}
              thumbnail={video.thumbnail}
              sharedBy={{
                createdAt: video.createdAt,
                email: video?.sharedBy?.email,
              }}
              isFlexMode={isFlexMode}
            />
          ))}
        </div>
      </div>
      {/* <div className='flex justify-center'>
        {isLoading && <p>Loading...</p>}
      </div> */}
    </div>
  );
};

export default HomePage;
