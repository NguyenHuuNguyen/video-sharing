export interface IRateVideoResponse {
  success: boolean;
  data: {
    video: {
      id: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string | null;
      title: string;
      description: string;
      vid: string;
      likeCount: string;
      dislikeCount: string;
      thumbnail: string;
    };
    user: {
      id: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      email: string;
      firstName: string;
      lastName: string;
    };
    star: number;
    createdAt: string;
    updatedAt: string | null;
    id: string;
    isActive: boolean;
  };
}