
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
        access_token: string;
        refresh_token: string;
        expires_in: number;
    }

    export class TokenManager {
        public newUsingPassword(url: string, username: string, password: string): Promise<TokenResponse>;
        public newUsingRefreshToken(url: string, refresh_token: string): Promise<TokenResponse>;
    }

    export class SubjectManager {
        public getSubjects(url: string, token: string): Promise<Array<JSON>>;
    }

    // Structures
    export class Subject {
        readonly name;
        readonly abbrev;
        readonly teacher;
        readonly id;

        public constructor(name: string, abbrev: string, teacher: Teacher, id: string);
    }

    export class Teacher {
        readonly name;
        readonly abbrev;
        readonly email;
        readonly web;
        readonly schoolPhone;
        readonly homePhone;
        readonly mobilePhone;

        public constructor(name: string, abbrev: string, email: string, web: string, schoolPhone: string, homePhone: string, mobilePhone: string);
    }

}