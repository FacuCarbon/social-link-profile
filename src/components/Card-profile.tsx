import { Link } from "react-router-dom";

type Social = {
  name: string;
  url: string;
};

export interface User {
  displayName: string;
  country: string;
  position: string;
  avatar?: string;
  profiles_link?: Social[];
}

const CardProfile = ({ userData }: { userData: User }) => {
  return (
    <div className="bg-[hsl(0,0%,12%)] rounded-xl flex flex-col items-center p-5 w-11/12 md:w-3/5 md:p-8 lg:w-1/2 xl:w-1/3 2xl:w-1/4">
      {userData?.avatar && (
        <figure className="mt-10 xl:mt-0">
          <img
            src={userData?.avatar}
            alt={`Avatar from ${userData?.displayName}`}
            className="rounded-full w-32 h-32 xl:w-28 xl:h-28"
          />
        </figure>
      )}
      <h3 className=" text-[hsl(0,0%,100%)] font-semibold text-3xl mt-5 xl:mt-2">
        {userData?.displayName}
      </h3>
      <p className="text-[hsl(75,94%,57%)] font-bold text-lg mt-2 xl:mt-1 xl:text-base">
        {userData?.country}
      </p>
      <p className="mt-5 text-slate-300 font-semibold xl:text-base">
        {userData?.position}
      </p>

      {userData?.profiles_link && (
        <div className="grid grid-cols-1 w-full mt-5 xl:w-4/5">
          {userData?.profiles_link?.map((social: Social, i: number) => (
            <Link
              to={social?.url}
              target="_blank"
              aria-label={`Go social link ${social?.name}`}
              key={i}
              className="w-full mb-4 bg-[hsl(0,0%,20%)] hover:bg-[hsl(75,94%,57%)] hover:text-[hsl(0,0%,8%)] p-3 rounded-xl text-[hsl(0,0%,100%)] font-semibold text-center text-lg xl:text-base"
            >
              {social?.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardProfile;
