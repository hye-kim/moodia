import Icon from "@mdi/react";
import {
  mdiEmail,
  mdiLock,
  mdiHome,
  mdiCalendar,
  mdiStar,
  mdiImage,
  mdiDelete,
  mdiEmoticonOutline,
  mdiEmoticonFrownOutline,
  mdiEmoticonSadOutline,
  mdiEmoticonNeutralOutline,
  mdiEmoticonHappyOutline,
  mdiEmoticonExcitedOutline,
} from "@mdi/js";

const emotes = [
  mdiEmoticonFrownOutline,
  mdiEmoticonSadOutline,
  mdiEmoticonNeutralOutline,
  mdiEmoticonOutline,
  mdiEmoticonExcitedOutline,
];

export const emoteColors = [
  "emote-1",
  "emote-2",
  "emote-3",
  "emote-4",
  "emote-5",
];

export const MailIconElement = (
  <Icon
    path={mdiEmail}
    title="email"
    size={0.75}
    className="inline text-gray-500 mr-1"
  ></Icon>
);

export const LockIconElement = (
  <Icon
    path={mdiLock}
    title="password"
    size={0.75}
    className="inline text-gray-500 mr-1"
  ></Icon>
);

export const HomeIconElement = (
  <Icon path={mdiHome} title="Home" size={0.85} className="inline mr-2"></Icon>
);

export const StarIconElement = (
  <Icon path={mdiStar} title="Star" size={0.85} className="inline mr-2"></Icon>
);

export const CalendarIconElement = (
  <Icon
    path={mdiCalendar}
    title="Calendar"
    size={0.85}
    className="inline mr-2"
  ></Icon>
);

export const ImageIconElement = (
  <Icon
    path={mdiImage}
    title="Image"
    size={0.85}
    className="inline text-gray-500 mr-2"
  ></Icon>
);

export const EmoticonIconElement = (
  <Icon
    path={mdiEmoticonHappyOutline}
    title="Emoticon"
    size={0.85}
    className="inline text-gray-500 mr-2"
  ></Icon>
);

export const emoteElements = emotes.map((ic, idx) => {
  return (
    <Icon
      className={`fill-current inline text-${emoteColors[idx]} `}
      key={idx}
      path={ic}
      size={1}
    ></Icon>
  );
});

export const deleteIconElement = (
  <Icon
    path={mdiDelete}
    title="delete"
    size={0.95}
    className="transition duration-200 text-gray-500 hover:text-red-500 cursor-pointer"
  ></Icon>
);
