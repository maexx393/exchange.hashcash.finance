import { CurrencyKey } from './currency';

export const LINKS = {
	Support: 'https://hashcash.community/docs/other',
	Tokens: 'https://www.hashcash.money/tokens/',
	Trading: {
		DexAG: 'https://dex.ag/',
		Uniswap: 'https://uniswap.exchange/',
		OneInchLink: (base: CurrencyKey, quote: CurrencyKey) =>
			`https://1inch.exchange/#/${base}/${quote}`,
	},
	Learn: {
		Litepaper: 'https://www.hashcash.money/litepaper',
		Tokens: 'https://www.hashcash.money/tokens',
		Blog: 'https://blog.hashcash.money/',
	},
	Products: {
		Mintr: 'https://www.hashcash.money/products/mintr',
		Dashboard: 'https://dashboard.hashcash.money/',
	},
	Connect: {
		Community: 'https://www.hashcash.money/community',
		ContactUs: 'https://www.hashcash.money/contact-us',
	},
	Social: {
		Twitter: 'https://twitter.com/hashcash_io',
		Medium: 'https://blog.hashcash.money/',
		Discord: 'https://discordapp.com/invite/AEdUHzt',
		GitHub: 'https://github.com/hashcashio',
	},
	Misc: {
		EthereumOrg: 'https://ethereum.org/',
		DefiNetwork: 'https://defi.network/',
		Messari: 'https://messari.io/asset/hashcash',
	},
	Blog: {
		HowBinaryOptionsWork: 'https://blog.hashcash.money/how-binary-options-work/',
		HowFeeReclamationRebatesWork: 'https://blog.hashcash.money/how-fee-reclamation-rebates-work/',
	},
};
