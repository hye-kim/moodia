import Icon from "@mdi/react";
import { mdiEmail, mdiLock } from "@mdi/js";

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
