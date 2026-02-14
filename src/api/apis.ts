const API_URL = import.meta.env.VITE_API_URL;

interface ApiResponse {
  ok: boolean;
  error?: string;
  message?: string;
}

const sendUserMessage = async (
  user_mail: string,
  user_message: string,
): Promise<ApiResponse> => {
  try {
    const response = await fetch(API_URL + "/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: user_mail,
        user_message: user_message,
      }),
    });

    let data: ApiResponse;

    const ct = response.headers.get("Content-Type") || "";
    if (ct.includes("application/json")) {
      data = (await response.json()) as ApiResponse;
      console.log("data : ");
      console.log(data);
      console.log(`checking ok data, ${response.ok} ${data.ok}`);
      if (!response.ok || !data.ok) {
        throw Error(data.error || `request failed: ${response.status}`);
      }

      return data;
    }
    throw Error(`request failed : ${response.status} ${response.statusText}`);
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "[ ERROR ] : FAILED TO CALL API";
    console.log(errMsg);
    return {
      ok: false,
      error: "Failed to call API",
      message: "Failed to call API",
    } as ApiResponse;
  }
};

const sendVerificationCode = async (user_mail: string, user_code: string) => {
  try {
    const response = await fetch(API_URL + "/verify-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_email: user_mail,
        code: user_code,
      }),
    });

    let data: ApiResponse;

    const ct = response.headers.get("Content-Type") || "";
    if (ct.includes("application/json")) {
      data = (await response.json()) as ApiResponse;
      console.log("data : ");
      console.log(data);
      console.log(`checking ok data, ${response.ok} ${data.ok}`);
      if (!response.ok || !data.ok) {
        throw Error(data.error || `request failed: ${response.status}`);
      }

      return data;
    }
    throw Error(`request failed : ${response.status} ${response.statusText}`);
  } catch (error) {
    const errMsg =
      error instanceof Error ? error.message : "[ ERROR ] : FAILED TO CALL API";
    console.log(errMsg);
    return {
      ok: false,
      error: "Failed to call API",
      message: "Failed to call API",
    } as ApiResponse;
  }
};

export { sendUserMessage, sendVerificationCode };
