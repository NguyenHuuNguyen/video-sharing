export interface IRegisterResponse {
  success: boolean;
  data: {
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    isActive: boolean;
  };
}