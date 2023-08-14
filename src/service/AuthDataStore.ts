export class AuthDataStore {
    private static instance: AuthDataStore;

    public static getAuthDataStore(): AuthDataStore {
        if (!this.instance) {
            this.instance = new AuthDataStore();
        }

        return this.instance;
    }

    public setAnonymousToken(value: string): void {
        localStorage.setItem("anonymousToken", value);
    }

    public setAnonymousRefreshToken(value: string): void {
        localStorage.setItem("anonymousRefreshToken", value);
    }

    public getAnonymousToken(): string {
        const anonymoustoken = localStorage.getItem("anonymousToken");

        if (!anonymoustoken) {
            throw new Error("Anonymous token was fallen");
        }

        return anonymoustoken;
    }
}
