export interface IVideo {
  id?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string | null;
  vid?: string;
  likeCount?: string;
  dislikeCount?: string;
  thumbnail?: string;
  sharedBy?: {
    id: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}
