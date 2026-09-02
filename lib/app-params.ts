/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type AppParamOptions = {
  defaultValue?: string;
  removeFromUrl?: boolean;
};

export type AppParams = {
  appId: string | null;
  token: string | null;
  fromUrl: string | null;
  functionsVersion: string | null;
  appBaseUrl: string | null;
};

/* -------------------------------------------------------------------------- */
/* Environment                                                                */
/* -------------------------------------------------------------------------- */

const isNode = typeof window === "undefined";

/*
 * En SSR, on utilise un stockage mémoire minimal.
 *
 * Attention :
 * ce stockage n'est pas persistant côté serveur.
 * Il sert uniquement à éviter les erreurs lorsque ce module
 * est évalué pendant le rendu serveur.
 */
const serverStorage = new Map<string, string>();

/* -------------------------------------------------------------------------- */
/* Storage helpers                                                            */
/* -------------------------------------------------------------------------- */

function getStorage(): Storage | Map<string, string> {
  if (isNode) {
    return serverStorage;
  }

  return window.localStorage;
}

const storage = getStorage();

/* -------------------------------------------------------------------------- */
/* Storage abstraction                                                        */
/* -------------------------------------------------------------------------- */

function storageGet(
  key: string
): string | null {
  if (storage instanceof Map) {
    return storage.get(key) ?? null;
  }

  return storage.getItem(key);
}

function storageSet(
  key: string,
  value: string
): void {
  if (storage instanceof Map) {
    storage.set(key, value);
    return;
  }

  storage.setItem(key, value);
}

function storageRemove(
  key: string
): void {
  if (storage instanceof Map) {
    storage.delete(key);
    return;
  }

  storage.removeItem(key);
}

/* -------------------------------------------------------------------------- */
/* Snake case                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Convertit :
 *
 * accessToken
 *     ↓
 * access_token
 */
function toSnakeCase(
  value: string
): string {
  return value
    .replace(
      /([A-Z])/g,
      "_$1"
    )
    .toLowerCase();
}

/* -------------------------------------------------------------------------- */
/* App parameter                                                              */
/* -------------------------------------------------------------------------- */

function getAppParamValue(
  paramName: string,
  {
    defaultValue,
    removeFromUrl = false,
  }: AppParamOptions = {}
): string | null {
  /*
   * Pendant le rendu serveur, window n'existe pas.
   */
  if (isNode) {
    return defaultValue ?? null;
  }

  const storageKey =
    `base44_${toSnakeCase(paramName)}`;

  const urlParams =
    new URLSearchParams(
      window.location.search
    );

  const searchParam =
    urlParams.get(paramName);

  /* ------------------------------------------------------------------------ */
  /* Remove parameter from URL                                               */
  /* ------------------------------------------------------------------------ */

  if (removeFromUrl) {
    urlParams.delete(paramName);

    const newUrl =
      `${window.location.pathname}` +
      `${
        urlParams.toString()
          ? `?${urlParams.toString()}`
          : ""
      }` +
      `${window.location.hash}`;

    window.history.replaceState(
      {},
      document.title,
      newUrl
    );
  }

  /* ------------------------------------------------------------------------ */
  /* URL parameter                                                            */
  /* ------------------------------------------------------------------------ */

  if (searchParam) {
    storageSet(
      storageKey,
      searchParam
    );

    return searchParam;
  }

  /* ------------------------------------------------------------------------ */
  /* Default value                                                            */
  /* ------------------------------------------------------------------------ */

  if (defaultValue) {
    storageSet(
      storageKey,
      defaultValue
    );

    return defaultValue;
  }

  /* ------------------------------------------------------------------------ */
  /* Local storage                                                            */
  /* ------------------------------------------------------------------------ */

  const storedValue =
    storageGet(storageKey);

  if (storedValue) {
    return storedValue;
  }

  return null;
}

/* -------------------------------------------------------------------------- */
/* App parameters                                                             */
/* -------------------------------------------------------------------------- */

function getAppParams(): AppParams {
  /*
   * clear_access_token est uniquement utile côté navigateur.
   */
  if (
    !isNode &&
    getAppParamValue(
      "clear_access_token"
    ) === "true"
  ) {
    storageRemove(
      "base44_access_token"
    );

    storageRemove("token");
  }

  return {
    /*
     * Next.js :
     *
     * VITE_BASE44_APP_ID
     *          ↓
     * NEXT_PUBLIC_BASE44_APP_ID
     */
    appId: getAppParamValue(
      "app_id",
      {
        defaultValue:
          process.env
            .NEXT_PUBLIC_BASE44_APP_ID,
      }
    ),

    token: getAppParamValue(
      "access_token",
      {
        removeFromUrl: true,
      }
    ),

    fromUrl: getAppParamValue(
      "from_url",
      {
        defaultValue: isNode
          ? undefined
          : window.location.href,
      }
    ),

    functionsVersion:
      getAppParamValue(
        "functions_version",
        {
          defaultValue:
            process.env
              .NEXT_PUBLIC_BASE44_FUNCTIONS_VERSION,
        }
      ),

    appBaseUrl: getAppParamValue(
      "app_base_url",
      {
        defaultValue:
          process.env
            .NEXT_PUBLIC_BASE44_APP_BASE_URL,
      }
    ),
  };
}

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const appParams: AppParams =
  getAppParams();