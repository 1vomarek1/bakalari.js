
declare module 'bakalari.js' {

    // Start point
    export class User {
        private access_token: string;
        private refresh_token: string;
        private valid_until: number;

        public constructor(url: string);

        public login(username: string, password: string): Promise<void>;
        public refreshToken(): Promise<void>;

        public getSubjects(): Promise<Array<Subject>>;
    }

    // Util
    export type TokenResponse = {
        readonly access_token: string;
        readonly refresh_token: string;
        readonly expires_in: number;
    }

    export class TokenManager {
        public newUsingPassword(url: string, username: string, password: string): Promise<TokenResponse>;
        public newUsingRefreshToken(url: string, refresh_token: string): Promise<TokenResponse>;
    }

    export class SubjectManager {
        public getSubjects(url: string, token: string): Promise<Array<JSON>>;
    }

    // Structures
    export interface Subject {
        readonly name: string;
        readonly abbrev: string;
        readonly teacher: Teacher;
        readonly id: string;
    }

    export interface Teacher {
        readonly name: string;
        readonly abbrev: string;
        readonly email: string;
        readonly web: string;
        readonly schoolPhone: string;
        readonly homePhone: string;
        readonly mobilePhone: string;
    }

}