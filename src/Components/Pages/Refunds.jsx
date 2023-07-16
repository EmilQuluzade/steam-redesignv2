import React, { useState } from 'react';

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <h3>{title}</h3>
      {isOpen && <p>{content}</p>}
    </div>
  );
};

const SteamRefunds = () => {
  return (
    <div className="refunds">
      <h1>STEAM REFUNDS</h1>
      <FaqItem
        title="What is the Steam refund policy?"
        content="You can request a refund for nearly any purchase on Steam—for any reason. Valve will, upon request via help.steampowered.com, issue a refund for any reason, if the request is made within the required return period, and, in the case of games, if the title has been played for less than two hours."
      />

      <FaqItem
        title="When will I receive the refund?"
        content="You will be issued a full refund of your purchase within a week of approval. You will receive the refund in Steam Wallet funds or through the same payment method you used to make the purchase. If Steam is unable to issue a refund via your initial payment method, your Steam Wallet will be credited the full amount."
      />

      <FaqItem
        title="Where do refunds apply?"
        content="The Steam refund offer applies to games and software applications on the Steam store, within two weeks of purchase and with less than two hours of playtime. Refunds on downloadable content (DLC), in-game purchases, pre-purchased titles, Steam Wallet funds, renewable subscriptions, and Steam hardware are also available under certain conditions."
      />

      <FaqItem
        title="Can I get a refund for downloadable content (DLC)?"
        content="DLC purchased from the Steam store is refundable within fourteen days of purchase, and if the underlying title has been played for less than two hours since the DLC was purchased, so long as the DLC has not been consumed, modified, or transferred. Some third-party DLC may not be refundable."
      />

      <FaqItem
        title="Are in-game purchases refundable?"
        content="Steam will offer a refund for in-game purchases within any Valve-developed games within forty-eight hours of purchase, so long as the in-game item has not been consumed, modified, or transferred. Third-party developers may have the option to enable refunds for in-game items on these terms."
      />

      <FaqItem
        title="Can I get a refund for pre-purchased titles?"
        content="When you pre-purchase a title on Steam and have paid for the title in advance, you can request a refund at any time prior to the release of that title. The standard 14-day/two-hour refund period also applies, starting on the game’s release date."
      />

      <FaqItem
        title="How do refunds work for Steam Wallet funds?"
        content="You may request a refund for Steam Wallet funds within fourteen days of purchase if they were purchased on Steam and if you have not used any of those funds."
      />

      <FaqItem
        title="What is the refund policy for renewable subscriptions?"
        content="For some content and services, Steam offers periodic (e.g. monthly, yearly) access that you pay for on a recurring basis. If a renewable subscription has not been used during the current billing cycle, you may request a refund within 48 hours of the initial purchase or within 48 hours of any automatic renewal."
      />

      <FaqItem
        title="Are Steam hardware purchases refundable?"
        content="Within the applicable time frame and process identified in the Hardware Refund Policy, you may request a refund for Steam hardware and accessories purchased via Steam."
      />

      <FaqItem
        title="Can I get a refund for bundles?"
        content="You can receive a full refund for any bundle purchased on the Steam Store, so long as none of the items in the bundle have been transferred, and if the combined usage time for all items in the bundle is less than two hours."
      />

      <FaqItem
        title="What if I made the purchase outside of Steam?"
        content="Valve cannot provide refunds for purchases made outside of Steam (for example, CD keys or Steam wallet cards purchased from third parties)."
      />

      <FaqItem
        title="Can I get a refund if I have a VAC ban?"
        content="If you have been banned by VAC (the Valve Anti-Cheat system) on a game, you lose the right to refund that game."
      />

      <FaqItem
        title="Are video content refunds available?"
        content="We are unable to offer refunds for video content on Steam (e.g. movies, shorts, series, episodes, and tutorials), unless the video is in a bundle."
      />
    </div>
  );
};

export default SteamRefunds;
