export interface UserInfo {
    isLogin: boolean;
    id: number;
    email: string | undefined;
    token: string | undefined;
    type: number;
    name: string | undefined;
    forceProfile: boolean;
    role: number;
    rememberLogin: boolean;
    avatar: string | undefined;
}
