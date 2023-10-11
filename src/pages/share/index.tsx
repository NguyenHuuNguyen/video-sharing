import React, { useState } from 'react';
import { useCreateVideo } from '../../services/queries';

interface Props { }

const SharerPage: React.FC<Props> = () => {
    const [url, setUrl] = useState<string>('');
    const videoMutation = useCreateVideo();

    const uploadVideoHandler = () => {
        const videoData = {
            url: url,
        };

        videoMutation.mutate(videoData, {
            onSuccess: (data) => {
                setUrl('');
            },
            onError: () => { },
        });
    };

    return (
        <div className="justify-center items-center flex min-h-505px">
            <div className='w-765px h-427px flex-shrink-0 border-4 border-blue rounded-[10px] bg-white px-40 pb-10 flex flex-col justify-center gap-7 text-base font-medium'>
                <p className='text-xl font-bold flex justify-center items-center'>Share Youtube video by URL</p>
                <div className='col-start-2 col-end-6 flex gap-3'>
                    <p className='text-[#000] flex items-center'>URL</p>
                    <input
                        className='border-2 border-gray-300 px-3 rounded flex-1 h-11'
                        onChange={(e) => setUrl(e.target.value)}
                        value={url}
                    />
                </div>
                <div></div>
                <button className='bg-blue rounded text-white h-11' onClick={uploadVideoHandler}>SHARE</button>
            </div>
        </div>
    );
};

export default SharerPage;
