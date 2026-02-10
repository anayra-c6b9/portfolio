import type { FC } from "react";

interface ProfileImageProps {
  __noPropsAllowed?: never;
}

const ProfileImage: FC<ProfileImageProps> = () => {
  const profile_pic_base =
    "https://vssqpxenfgtkyglzaztx.supabase.co/storage/v1/object/public/retro_chain_bucket/portfolio_monochrome.webp";

  const src200 = `${profile_pic_base}?width=200`;
  const src300 = `${profile_pic_base}?width=300`;
  const src400 = `${profile_pic_base}?width=400`;
  return (
    <img
      src={src400}
      srcSet={`
      ${src200} 200w, ${src300} 300w, ${src400} 400w
      `}
      sizes="(max-width:480px) 200px, 400px"
      className="object-contain"
      alt="profile pic"
    />
  );
};

export default ProfileImage;
