import { FC } from "react";
import { Callout, Cards } from "nextra/components";

export const ConfigureEnv: FC = () => {
  return (
    <Callout type="info" emoji="">
      Check this page to explanation on how to configure the Environment
      Variables
      <br /><br />
      <Cards.Card
        title="Check it here"
        className="bg-[#071230] border-white"
        href="/installation/environment-variables"
      /><br />
    </Callout>
  );
};
