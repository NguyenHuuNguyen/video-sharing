import React from 'react'
import { IVideo } from '../../interfaces';
import { format } from 'date-fns';

interface IVideoItem extends IVideo {
  isFlexMode: boolean,
}

const VideoItem = (props: IVideoItem) => {
  return (
    <div className={props.isFlexMode ? 'w-1239px h-277px flex gap-7' : 'w-400px h-700px flex flex-col gap-3'}>
      <img src={props?.thumbnail} className='rounded-lg w-auto max-h-full' alt='video thumbnail' />
      <div className='flex flex-col gap-3'>
        <h1 className={props.isFlexMode ? 'font-bold text-xl' : 'font-bold text-xl h-24 overflow-scroll'}>
          {props.title}
        </h1>
        <p className='bg-grey-video h-5 rounded px-3 font-normal text-xs w-28 flex justify-center items-center'>DESCRIPTION</p>
        <p className='text-base max-h-130px overflow-scroll'>{props?.description}</p>
        <div className='flex gap-4'>
          <p className='bg-grey-video h-5 rounded px-3 font-normal text-xs w-28 flex justify-center items-center'>PUBLISHED AT</p>
          <p className='text-base'>
            {props?.sharedBy?.createdAt ? format(new Date(props.sharedBy.createdAt), 'MMM dd, yyyy') : ''}
          </p>
        </div>
        <div className='flex gap-4'>
          <p className='bg-grey-video h-5 rounded px-3 font-normal text-xs w-28 flex justify-center items-center'>PUBLISHED BY</p>
          <p className='text-base'>{props?.sharedBy?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoItem;
