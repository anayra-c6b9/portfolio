import React, { useState, type FC } from "react";
import Gmaillogo from "../../assets/gmail-logo.svg";
import Githublogo from "../../assets/github-logo.svg";
import Instagramlogo from "../../assets/instagram-logo.svg";
import Facebooklogo from "../../assets/facebook-logo.svg";
import { sendUserMessage, sendVerificationCode } from "../../api/apis";

interface ContactProps {
  __noPropsAllowed?: never;
}

const Contact: FC<ContactProps> = () => {
  const [userMail, setUserMail] = useState("");
  const [userText, setUserText] = useState("");
  const userMailLimit = 40;

  const [userMailCount, setUserMailCount] = useState(0);
  const [userTextCount, setUserTextCount] = useState(0);
  const userTextLimit = 400;

  const [fieldDisabled, setFieldDisabled] = useState(false);
  const [isCodeRequested, setIsCodeRequested] = useState(false);
  const [isCallingRequestApi, setIsCallingRequestApi] = useState(false);

  // verification code
  const [verificationCode, setVerificationCode] = useState("");
  const [isverifying, setIsVerifying] = useState(false);
  const verificationCodeLimit = 6;

  const userMailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > userMailLimit) return;
    setUserMail(e.currentTarget.value);
    setUserMailCount(e.currentTarget.value.length);
  };

  const userTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > userTextLimit) return;
    setUserText(e.currentTarget.value);
    setUserTextCount(e.currentTarget.value.length);
  };

  const disableFields = () => {
    setFieldDisabled(true);
  };
  const ableFields = () => {
    setFieldDisabled(false);
  };
  const resetFields = () => {
    setUserMail("");
    setUserMailCount(0);
    setUserText("");
    setUserTextCount(0);
    setFieldDisabled(false);
    setIsCodeRequested(false);
    setVerificationCode("");
    setIsVerifying(false);
  };

  const userCodeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.currentTarget.value.length > verificationCodeLimit) return;

    setVerificationCode(e.currentTarget.value);
  };

  const checkingMailRegex = (data: string): boolean => {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regExp.test(data)) return false;
    return true;
  };

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCallingRequestApi(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const user_email = (formData.get("user-mail") as string).trim();
    const user_message = (formData.get("user-message") as string).trim();

    console.log(user_email, user_message);

    if (
      user_email == null ||
      user_email == "" ||
      user_message == null ||
      user_message == ""
    ) {
      console.log("Error : form data not found");
      return;
    }

    if (!checkingMailRegex(user_email)) {
      console.log("Validation failed for user mail");
      return;
    }

    // send data to api
    disableFields();
    const response = sendUserMessage(user_email, user_message);
    response.then((res) => {
      if (res.ok) {
        console.log("Response is ok");
        // operation on setting up the verification code for the user
        setIsCodeRequested(true);
        setIsCallingRequestApi(false);
      } else {
        ableFields();
        setIsCallingRequestApi(false);
        // operation on letting user know that request failed
      }
    });
  };

  const onVerifyHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user_mail = userMail.trim();
    const verification_code = verificationCode.trim();

    setIsVerifying(true);
    const response = sendVerificationCode(user_mail, verification_code);
    response.then((res) => {
      if (res.ok) {
        console.log("Response is ok");
        // operation on letting user know that verification successful
        resetFields();
      } else {
        // operation on letting user know that verification failed
        setIsVerifying(false);
      }
    });
  };

  return (
    <div>
      <div className="w-full grid grid-cols-5 gird-rows-2 gap-4 text-base font-extralight">
        <section className="col-span-2 border-2 border-white p-4">
          <div className="text-xl font-normal pb-3 text-center">
            <span className="text-3xl">&#x265B;</span> Contacts
          </div>
          <section className="flex flex-col gap-2">
            <article className="flex flex-row justify-start items-center gap-3">
              <img
                src={Githublogo}
                alt="github logo"
                className="w-6 h-6 object-contain inline"
              />
              <span className="hover:text-gray-300">
                <a
                  href="http://github.com/anayra-c6b9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github profile of Aryan Gurung"
                  className="underline"
                >
                  Github account
                </a>
              </span>
            </article>
            <article className="flex flex-row justify-start items-center gap-3">
              <img
                src={Gmaillogo}
                alt="gmail logo"
                className="w-6 h-6 object-contain inline"
              />
              <span className="hover:text-gray-300">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="gmail profile of Aryan Gurung"
                  className="underline"
                >
                  Gmail account
                </a>
              </span>
            </article>
            <article className="flex flex-row justify-start items-center gap-3">
              <img
                src={Instagramlogo}
                alt="instagram logo"
                className="w-6 h-6 object-contain inline"
              />
              <span className="hover:text-gray-300">
                <a
                  href="https://www.instagram.com/silo_8__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram profile of Aryan Gurung"
                  className="underline"
                >
                  Instagram account
                </a>
              </span>
            </article>
            <article className="flex flex-row justify-start items-center gap-3">
              <img
                src={Facebooklogo}
                alt="facebook logo"
                className="w-6 h-6 object-contain inline"
              />
              <span className="hover:text-gray-300">
                <a
                  href="https://www.facebook.com/solo.wolo.174214/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="facebook profile of Aryan Gurung"
                  className="underline"
                >
                  Facebook account
                </a>
              </span>
            </article>
          </section>
        </section>
        <section className="col-span-3 row-span-2 py-4 px-6 flex flex-col justify-start items-center gap-8 border-2 border-white">
          <div className="underline text-xl font-normal">Let's Connect!</div>
          <div className="w-full pb-4">
            <form onSubmit={onSubmitHandler}>
              <div className="w-full relative mb-8">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-white">
                  &gt;
                </span>
                <input
                  type="email"
                  name="user-mail"
                  id="user-mail"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email (e.g. name@domain.com)"
                  className="w-full border border-white p-2 pl-6"
                  placeholder="Enter your email"
                  value={userMail}
                  onChange={userMailHandler}
                  disabled={fieldDisabled}
                />

                <span className="absolute right-0 px-1 py-0.5 top-0 -translate-y-full text-black bg-white text-xs">
                  {userMailCount}/{userMailLimit}
                </span>
              </div>
              <div className="w-full relative">
                <textarea
                  name="user-message"
                  id="user-message"
                  rows={14}
                  className="w-full border border-white py-2 px-3 resize-none"
                  placeholder="Enter your message"
                  value={userText}
                  onChange={userTextHandler}
                  required
                  disabled={fieldDisabled}
                ></textarea>
                <span className="absolute py-0.5 px-1 right-0 top-0 -translate-y-full text-black bg-white text-xs">
                  {userTextCount}/{userTextLimit}
                </span>
              </div>
              {isCodeRequested ? (
                <div className="text-xs text-green-300 text-right">
                  A verification code has been sent to your email
                </div>
              ) : null}
              <button
                type="submit"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className={`
                  group relative ml-auto mr-2 mt-6 block select-none
                  px-6 py-2 text-lg font-normal
                  bg-transparent text-black

                  after:content-['']
                  after:absolute after:inset-0
                  after:border after:border-white
                  after:translate-x-2 after:translate-y-2
                  after:z-0
                  after:pointer-events-none

                  before:content-['']
                  before:absolute before:inset-0
                  before:bg-white
                  before:z-1
                  before:transition-transform before:duration-75
                  before:pointer-events-none
                  active:before:translate-x-2 active:before:translate-y-2
                `}
              >
                <span className="relative z-2 inline-block transition-transform duration-75 group-active:translate-x-2 group-active:translate-y-2">
                  {!isCodeRequested && !isCallingRequestApi ? "Send" : ""}
                  {!isCodeRequested && isCallingRequestApi ? "Sending ..." : ""}
                  {isCodeRequested
                    ? isCallingRequestApi
                      ? "Resending ..."
                      : "Resend Code"
                    : ""}
                </span>
              </button>
            </form>
            {isCodeRequested ? <hr className="my-8 bg-white" /> : ""}
            {isCodeRequested ? (
              <form onSubmit={onVerifyHandler}>
                <input
                  type="number"
                  name="user-code"
                  id="user-code"
                  required
                  title="Please enter the code"
                  maxLength={6}
                  minLength={6}
                  size={6}
                  className="w-full border border-white p-2 pl-6"
                  placeholder="Enter your code"
                  value={verificationCode}
                  onChange={userCodeHandler}
                />
                <button
                  type="submit"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  className={`
                  group relative ml-auto mr-2 mt-6 block select-none
                  px-6 py-2 text-lg font-normal
                  bg-transparent text-black

                  after:content-['']
                  after:absolute after:inset-0
                  after:border after:border-white
                  after:translate-x-2 after:translate-y-2
                  after:z-0
                  after:pointer-events-none

                  before:content-['']
                  before:absolute before:inset-0
                  before:bg-white
                  before:z-1
                  before:transition-transform before:duration-75
                  before:pointer-events-none
                  active:before:translate-x-2 active:before:translate-y-2
                `}
                >
                  <span className="relative z-2 inline-block transition-transform duration-75 group-active:translate-x-2 group-active:translate-y-2">
                    {isverifying ? "Verifying..." : "Verify"}
                  </span>
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
