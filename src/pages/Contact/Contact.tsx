import React, { useState, type FC } from "react";
import Gmaillogo from "../../assets/gmail-logo.svg";
import Githublogo from "../../assets/github-logo.svg";
import Instagramlogo from "../../assets/instagram-logo.svg";
import Facebooklogo from "../../assets/facebook-logo.svg";

interface ContactProps {
  __noPropsAllowed?: never;
}

const Contact: FC<ContactProps> = () => {
  const [userName, setUserName] = useState("");
  const [userText, setUserText] = useState("");
  const userNameLimit = 40;

  const [userNameCount, setUserNameCount] = useState(0);
  const [userTextCount, setUserTextCount] = useState(0);
  const userTextLimit = 400;

  const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value.length > userNameLimit) return;
    setUserName(e.currentTarget.value);
    setUserNameCount(e.currentTarget.value.length);
  };

  const userTextHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget.value.length > userTextLimit) return;
    setUserText(e.currentTarget.value);
    setUserTextCount(e.currentTarget.value.length);
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(form);
    // console.log(formData.get("user-name"));
    // console.log(formData.get("user-message"));
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
                  name="user-name"
                  id="user-name"
                  required
                  pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                  title="Please enter a valid email (e.g. name@domain.com)"
                  className="w-full border border-white p-2 pl-6"
                  placeholder="Enter your email"
                  value={userName}
                  onChange={userNameHandler}
                />

                <span className="absolute right-0 px-1 py-0.5 top-0 -translate-y-[100%] text-black bg-white text-xs">
                  {userNameCount}/{userNameLimit}
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
                ></textarea>
                <span className="absolute py-0.5 px-1 right-0 top-0 -translate-y-[100%] text-black bg-white text-xs">
                  {userTextCount}/{userTextLimit}
                </span>
              </div>
              <button
                type="submit"
                className="
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
                  before:z-[1]
                  before:transition-transform before:duration-75
                  before:pointer-events-none
                  active:before:translate-x-2 active:before:translate-y-2
                "
              >
                <span className="relative z-[2] inline-block transition-transform duration-75 group-active:translate-x-2 group-active:translate-y-2">
                  Send
                </span>
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
