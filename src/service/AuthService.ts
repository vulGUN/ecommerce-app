import AxiosApi from "service/AxiosAnonymousApi";
import { AuthDataStore } from "service/AuthDataStore";

type TokenResponseType = {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: string;
    refresh_token: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class AuthService {
    private readonly CTP_AUTH_URL = "https://auth.europe-west1.gcp.commercetools.com";

    private readonly CTP_API_URL = "https://api.europe-west1.gcp.commercetools.com";

    private readonly CTP_PROJECT_KEY = "uwoc_ecm-app";

    private readonly CTP_CLIENT_SECRET = "6x4a7bsRL81dJoq1vsQ81yf3C0BiJrYH";

    private readonly CTP_CLIENT_ID = "OLQF6DvQqgu9NiEaNj5l-ngD";

    private readonly ANON_TOKEN_CONTENT_TYPE = "application/x-www-form-urlencoded";

    private readonly ANON_PRODUCTS_CONTENT_TYPE = "application/json";

    private AuthDataStoreApi = AuthDataStore.getAuthDataStore();

    private readonly API_ANON_AUTH_URL = `${this.CTP_AUTH_URL}/oauth/${this.CTP_PROJECT_KEY}/anonymous/token`;

    private requestApi = AxiosApi;

    public async createAnonymousToken(): Promise<void> {
        try {
            const tokenRequest = await this.requestApi.post<TokenResponseType>(
                this.API_ANON_AUTH_URL,
                {
                    params: {
                        grant_type: "client_credentials",
                        scope: `manage_project:uwoc_ecm-app view_audit_log:uwoc_ecm-app manage_api_clients:uwoc_ecm-app`,
                        // scope: `view_published_products:${this.CTP_PROJECT_KEY}`,
                    },
                    headers: {
                        Authorization: `Basic ${btoa(
                            `${this.CTP_CLIENT_ID}:${this.CTP_CLIENT_SECRET}`,
                        )}`,
                        "Content-Type": this.ANON_TOKEN_CONTENT_TYPE,
                    },
                },
            );

            const tokenResponse: TokenResponseType = await tokenRequest.data;
            // console.log(tokenResponse, `tokenResponse`);

            const anonymousAccessToken = tokenResponse.access_token;
            const anonymousRefreshToken = tokenResponse.refresh_token;

            this.AuthDataStoreApi.setAnonymousTokens(anonymousAccessToken, anonymousRefreshToken);
        } catch (e) {
            console.log(e);
        }
    }

    private setAnonStorageToStore() {}
}
