export interface ICreateVideoResponse {
  success: boolean;
  message: string;
  data: {
    vid: string;
    title: string;
    description: string;
    likeCount: string;
    dislikeCount: string;
    thumbnail: string;
    createdAt: string;
    sharedBy: {
      id: string;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
      email: string;
      firstName: string;
      lastName: string;
    };
    updatedAt: string | null;
    id: string;
    isActive: boolean;
  };
}