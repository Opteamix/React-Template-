export interface SocialMedia {
  label: string;
  icon: React.ElementType;
  link: string;
}

interface OptxSocialMediaProps {
  socialMediaValues: SocialMedia[];
}

const OptxSocialMedia = ({ socialMediaValues }: OptxSocialMediaProps) => {
  const handleIconClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {socialMediaValues.map((socialMedia: SocialMedia) => {
        const Icon = socialMedia.icon;
        return (
          <Icon
            sx={{ margin: "5px", cursor: "pointer" }}
            onClick={() => handleIconClick(socialMedia.link)}
            key={socialMedia.label}
          />
        );
      })}
    </>
  );
};

export default OptxSocialMedia;
