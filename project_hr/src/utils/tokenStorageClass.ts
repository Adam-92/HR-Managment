const TOKENS_STORAGE_KEYS = {
  accessToken: 'accessToken',
  refreshToken: 'refreshToken',
} as const;

export class TokenStorage {
  private static instance: TokenStorage;

  private constructor() {
    // Private constructor to prevent instantiation from outside the class
  }

  public static getInstance() {
    if (!TokenStorage.instance) {
      TokenStorage.instance = new TokenStorage();
    }
    return TokenStorage.instance;
  }

  public saveAccessToken(accessToken: string, isRememberMe: boolean) {
    if (isRememberMe) {
      sessionStorage.removeItem(TOKENS_STORAGE_KEYS.accessToken);
      localStorage.setItem(TOKENS_STORAGE_KEYS.accessToken, accessToken);
    } else {
      localStorage.removeItem(TOKENS_STORAGE_KEYS.accessToken);
      sessionStorage.setItem(TOKENS_STORAGE_KEYS.accessToken, accessToken);
    }
  }

  public saveRefreshToken(refreshToken: string, isRememberMe: boolean) {
    if (isRememberMe) {
      sessionStorage.removeItem(TOKENS_STORAGE_KEYS.refreshToken);
      localStorage.setItem(TOKENS_STORAGE_KEYS.refreshToken, refreshToken);
    } else {
      localStorage.removeItem(TOKENS_STORAGE_KEYS.refreshToken);
      sessionStorage.setItem(TOKENS_STORAGE_KEYS.refreshToken, refreshToken);
    }
  }

  public getAccessToken() {
    const accessTokenLocalStorage = localStorage.getItem(
      TOKENS_STORAGE_KEYS.accessToken,
    );
    if (accessTokenLocalStorage) {
      return {
        accessToken: accessTokenLocalStorage,
        isRememberMe: true,
      };
    }

    const accessTokenSessionStorage = sessionStorage.getItem(
      TOKENS_STORAGE_KEYS.accessToken,
    );
    if (accessTokenSessionStorage) {
      return {
        accessToken: accessTokenSessionStorage,
        isRememberMe: false,
      };
    }

    return undefined;
  }

  public getRefreshToken() {
    const refreshTokenLocalStorage = localStorage.getItem(
      TOKENS_STORAGE_KEYS.refreshToken,
    );
    if (refreshTokenLocalStorage) {
      return {
        refreshToken: refreshTokenLocalStorage,
        isRememberMe: true,
      };
    }

    const refreshTokenSessionStorage = sessionStorage.getItem(
      TOKENS_STORAGE_KEYS.refreshToken,
    );
    if (refreshTokenSessionStorage) {
      return {
        refreshToken: refreshTokenSessionStorage,
        isRememberMe: false,
      };
    }

    return undefined;
  }

  public clearTokens() {
    localStorage.clear();
    sessionStorage.clear();
  }
}

export const tokenStorage = TokenStorage.getInstance();
