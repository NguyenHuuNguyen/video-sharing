import { IVideoResponse } from './../interfaces/IVideoResponse';
import { ICreateVideoResponse } from "../interfaces/ICreateVideoResponse";
import { ILoginResponse } from "../interfaces/ILoginResponse";
import { IRateVideoResponse } from "../interfaces/IRateVideoResponse";
import { IRegisterResponse } from "../interfaces/IRegisterResponse";
import { requestHandler } from "../utils";
import { useMutation, useQuery } from "react-query";

export function useGetVideos(
  limit: string | number,
  currentPage: string | number,
  sortBy: 'publishedAt' | 'title',
) {
  return useQuery(
    "get-videos-list",
    (): Promise<IVideoResponse> =>
      requestHandler.get(`videos?limit=${limit}&currentPage=${currentPage}&sortBy=${sortBy}`)
  );
}

export function useLogin() {
  return useMutation<ILoginResponse, Error, { email: string, password: string }>(
    async (loginData) => {
      const response = await requestHandler.post("users/n-a/login", loginData);
      return response.data;
    }
  );
}

export function useRegister() {
  return useMutation<IRegisterResponse, Error, {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }>(
    async (registerData) => {
      const response = await requestHandler.post("users/n-a/register", registerData);
      return response.data;
    }
  );
}

export function useCreateVideo() {
  return useMutation<ICreateVideoResponse, Error, { url: string }>(
    async (videoData) => {
      const response = await requestHandler.post("videos", videoData);
      return response.data;
    }
  );
}

export function useRateVideo(videoId: string, star: number) {
  return useMutation<IRateVideoResponse, Error, { videoId: string, star: number }>(
    async (ratingData) => {
      const response = await requestHandler.post("rating", ratingData);
      return response.data;
    }
  );
}
