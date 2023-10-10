import { IVideo } from "./IVideo";

export interface IVideoResponse {
    videos: IVideo[];
    totalItems: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    previousPage: number;
    nextPage: number;
}