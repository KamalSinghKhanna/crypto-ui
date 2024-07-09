import Image from "next/image";

const footerLinks = {
  solutions: [
    { name: "Explore Quests", href: "#" },
    { name: "Comunities", href: "#" },
    { name: "Alpha Hub", href: "#" },
  ],
  support: [
    { name: "Refer & Earn", href: "#" },
    { name: "Leaderboard", href: "#" },
    { name: "Achievements", href: "#" },
  ],
  company: [
    { name: "Product Roadmap", href: "#" },
    { name: "Affiliate Program", href: "#" },
    { name: "Sign up Program", href: "#" },
    { name: "Growth Community", href: "#" },
    { name: "Blogs", href: "#" },
  ],
  legal: [
    { name: "Help Center", href: "#" },
    { name: "Create your quest", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="border-t border-white/20"
    >
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-4 w-[70%]">
            <Image
              src="https://www.intract.io/logo/intract_text.svg"
              alt="logo"
              width={200}
              height={200}
              className="h-10 w-24"
            />
            <p className="text-sm leading-6 text-[#7d7d7d] font-normal">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  INTRACT
                </h3>
                <ul role="list" className="mt-3 space-y-2">
                  {footerLinks.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-[#7d7d7d] font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  EARN
                </h3>
                <ul role="list" className="mt-3 space-y-2">
                  {footerLinks.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-[#7d7d7d] font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  ABOUT
                </h3>
                <ul role="list" className="mt-2 space-y-2">
                  {footerLinks.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-[#7d7d7d] font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  SUPPORT
                </h3>
                <ul role="list" className="mt-3 space-y-2">
                  {footerLinks.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-[#7d7d7d] font-normal hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-start gap-x-1 mt-16 border-t border-white/20 pt-14 sm:mt-20 lg:mt-24">
          <p className="text-white text-sm font-normal leading-5 opacity-75">
            Disclaimer:
          </p>
          <p className="text-[#7d7d7d] text-sm font-normal leading-5 opacity-75">
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col gap-4 sm:gap-0 items-start sm:justify-between sm:items-center mt-6 border-t border-white/20 pt-8 sm:mt-10 lg:mt-14">
          <p className="text-md leading-5 text-white">
            CREATED BY <span className="underline"> INTRACT</span>
          </p>
          <div className="flex items-center gap-x-2">
            <div className="bg-[#1a1a1a] cursor-pointer rounded-lg p-2">
              <svg
                enable-background="new 0 0 32 32"
                height="20px"
                id="Layer_1"
                version="1.0"
                viewBox="0 0 32 32"
                width="20px"
              >
                <path
                  d="M31.993,6.077C30.816,6.6,29.552,6.953,28.223,7.11c1.355-0.812,2.396-2.098,2.887-3.63  c-1.269,0.751-2.673,1.299-4.168,1.592C25.744,3.797,24.038,3,22.149,3c-3.625,0-6.562,2.938-6.562,6.563  c0,0.514,0.057,1.016,0.169,1.496C10.301,10.785,5.465,8.172,2.227,4.201c-0.564,0.97-0.888,2.097-0.888,3.3  c0,2.278,1.159,4.286,2.919,5.464c-1.075-0.035-2.087-0.329-2.972-0.821c-0.001,0.027-0.001,0.056-0.001,0.082  c0,3.181,2.262,5.834,5.265,6.437c-0.55,0.149-1.13,0.23-1.729,0.23c-0.424,0-0.834-0.041-1.234-0.117  c0.834,2.606,3.259,4.504,6.13,4.558c-2.245,1.76-5.075,2.811-8.15,2.811c-0.53,0-1.053-0.031-1.566-0.092  C2.905,27.913,6.355,29,10.062,29c12.072,0,18.675-10.001,18.675-18.675c0-0.284-0.008-0.568-0.02-0.85  C30,8.55,31.112,7.395,31.993,6.077z"
                  fill="#55ACEE"
                />
                <g />
                <g />
                <g />
                <g />
                <g />
                <g />
              </svg>
            </div>
            <div className="bg-[#1a1a1a] cursor-pointer rounded-lg p-2">
              <svg
                enable-background="new 0 0 32 32"
                height="20px"
                data-name="Layer 1"
                viewBox="0 0 24 24 "
                width="20px"
              >
                <path
                  d="M10.13831,10.62982h-.00013a1.05288,1.05288,0,1,0,.00013,0Zm3.75427,0a1.14582,1.14582,0,1,0,1.04907,1.14166A1.09586,1.09586,0,0,0,13.89258,10.62982Zm4.99878-8.6297H5.10864A2.11364,2.11364,0,0,0,3,4.119V18.02527A2.11368,2.11368,0,0,0,5.10864,20.1441H16.77258l-.54516-1.90289,1.31653,1.224,1.24462,1.152L21,22.57153V4.119A2.11364,2.11364,0,0,0,18.89136,2.00012ZM14.92114,15.43323v.00006s-.37036-.44232-.67895-.83319a3.2459,3.2459,0,0,0,1.86181-1.224,5.87837,5.87837,0,0,1-1.18286.60681,6.76974,6.76974,0,0,1-1.49145.44232,7.206,7.206,0,0,1-2.66394-.01025,8.64456,8.64456,0,0,1-1.51209-.44226,6.03735,6.03735,0,0,1-.75085-.34973c-.03089-.02063-.06165-.03089-.09253-.05146a.14171.14171,0,0,1-.04114-.03082c-.18506-.10284-.28809-.17487-.28809-.17487A3.19975,3.19975,0,0,0,9.8811,14.57953c-.30847.39093-.68908.8537-.68908.8537a3.72892,3.72892,0,0,1-3.13709-1.56342A13.775,13.775,0,0,1,7.536,7.87323a5.08641,5.08641,0,0,1,2.89026-1.08l.10278.12348A6.93762,6.93762,0,0,0,7.824,8.2641s.22632-.12341.60682-.29828a7.722,7.722,0,0,1,2.335-.64795,1.00465,1.00465,0,0,1,.17492-.02063,8.702,8.702,0,0,1,2.07764-.02051,8.384,8.384,0,0,1,3.096.98737,6.84576,6.84576,0,0,0-2.561-1.30628l.14392-.16449a5.08575,5.08575,0,0,1,2.89026,1.08,13.77368,13.77368,0,0,1,1.4812,5.99652A3.75972,3.75972,0,0,1,14.92114,15.43323Z"
                  fill="#6563ff"
                  className="w-8 h-8"
                />
              </svg>
            </div>
            <div className="bg-[#1a1a1a] cursor-pointer rounded-lg p-2">
              <svg
                enable-background="new 0 0 32 32"
                height="20px"
                data-name="Layer 1"
                id="Layer_1"
                viewBox="0 0 24 24"
                width="20px"
              >
                <title />
                <path
                  d="M11.99432,2a10,10,0,1,0,10,10A9.99917,9.99917,0,0,0,11.99432,2Zm3.17951,15.15247a.70547.70547,0,0,1-1.002.3515l-2.71467-2.10938L9.71484,17.002a.29969.29969,0,0,1-.285.03894l.334-2.98846.01069.00848.00683-.059s4.885-4.44751,5.084-4.637c.20147-.189.135-.23.135-.23.01147-.23053-.36152,0-.36152,0L8.16632,13.299l-2.69549-.918s-.414-.1485-.453-.475c-.041-.324.46649-.5.46649-.5l10.717-4.25751s.881-.39252.881.25751Z"
                  fill="#6563ff"
                />
              </svg>
            </div>
            <div className="bg-[#1a1a1a] cursor-pointer rounded-lg p-2">
              <svg
                height="24px"
                className="enable-background:new 0 0 512 512;"
                version="1.1"
                viewBox="0 0 512 512"
                width="24px"
              >
                <g id="_x33_15-spotify">
                  <g>
                    <path
                      d="M256,26.001c-126.965,0-230,103.035-230,229.999c0,126.963,103.035,229.999,230,229.999    c126.962,0,229.999-103.036,229.999-229.999C485.999,129.036,382.963,26.001,256,26.001z"
                      className="fill-[#1AB26B]"
                    />
                    <path
                      d="M349.391,364.416c-3.896,0-6.306-1.206-9.924-3.34c-57.87-34.869-125.2-36.355-191.697-22.723    c-3.617,0.928-8.347,2.413-11.036,2.413c-8.996,0-14.653-7.143-14.653-14.655c0-9.551,5.658-14.095,12.614-15.579    c75.954-16.786,153.579-15.304,219.797,24.298c5.657,3.618,8.996,6.864,8.996,15.302    C363.487,358.572,356.902,364.416,349.391,364.416L349.391,364.416z"
                      className="fill-white"
                    />
                    <path
                      d="M374.339,303.576c-4.824,0-8.067-2.133-11.408-3.895c-57.964-34.314-144.399-48.133-221.281-27.265    c-4.452,1.204-6.863,2.408-11.036,2.408c-9.923,0-17.992-8.067-17.992-17.989c0-9.925,4.822-16.508,14.375-19.198    c25.783-7.234,52.121-12.612,90.703-12.612c60.187,0,118.337,14.931,164.151,42.195c7.512,4.452,10.48,10.201,10.48,18.271    C392.237,295.509,384.446,303.576,374.339,303.576z"
                      className="fill-white"
                    />
                    <path
                      d="M403.087,232.907c-4.822,0-7.789-1.205-11.962-3.616c-66.032-39.415-184.093-48.875-260.512-27.544    c-3.338,0.927-7.512,2.41-11.965,2.41c-12.241,0-21.608-9.553-21.608-21.887c0-12.612,7.792-19.754,16.138-22.165    c32.645-9.553,69.184-14.097,108.971-14.097c67.703,0,138.648,14.097,190.492,44.331c7.234,4.173,11.963,9.922,11.963,20.96    C424.604,223.912,414.403,232.907,403.087,232.907L403.087,232.907z"
                      className="fill-white"
                    />
                  </g>
                </g>
                <g id="Layer_1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
