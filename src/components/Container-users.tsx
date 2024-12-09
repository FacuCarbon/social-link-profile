import CardProfile, { User } from "./Card-profile";
import AvatarUser from "../assets/images/avatar-jessica.jpeg";
const ContainerUsers = () => {
  const users: User[] = [
    {
      displayName: "Jessica Randall",
      country: "London, United Kingdom",
      position: "Front-end developer and avid reader",
      avatar: AvatarUser,
      profiles_link: [
        {
          name: "GitHub",
          url: "https://www.github.com/",
        },
        {
          name: "Frontend Mentor",
          url: "https://www.frontendmentor.io/",
        },
        {
          name: "LinkedIn",
          url: "https://www.linkedin.com/",
        },
        {
          name: "Twitter",
          url: "https://x.com/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/",
        },
      ],
    },
  ];

  return (
    <div className="py-10 w-full flex flex-col items-center">
      {users &&
        users?.map((user: User, i: number) => (
          <CardProfile key={i} userData={user} />
        ))}
    </div>
  );
};

export default ContainerUsers;
