import { CurrencyKey } from './currency';

export const LINKS = {
	Support: 'https://hashcash.community/docs/other',
	Tokens: 'https://www.hashcash.finance/tokens/',
	Trading: {
		DexAG: 'https://dex.ag/',
		Uniswap: 'https://uniswap.exchange/',
		OneInchLink: (base: CurrencyKey, quote: CurrencyKey) =>
			`https://1inch.exchange/#/${base}/${quote}`,
	},
	Learn: {
		Litepaper: 'https://www.hashcash.finance/litepaper',
		Tokens: 'https://www.hashcash.finance/tokens',
		Blog: 'https://blog.hashcash.finance/',
	},
	Products: {
		Mintr: 'https://www.hashcash.finance/products/mintr',
		Dashboard: 'https://dashboard.hashcash.finance/',
	},
	Connect: {
		Community: 'https://www.hashcash.finance/community',
		ContactUs: 'https://www.hashcash.finance/contact-us',
	},
	Social: {
		Twitter: 'https://twitter.com/hashcash_io',
		Medium: 'https://blog.hashcash.finance/',
		Discord: 'https://discordapp.com/invite/AEdUHzt',
		GitHub: 'https://github.com/hashcashio',
	},
	Misc: {
		EthereumOrg: 'https://ethereum.org/',
		DefiNetwork: 'https://defi.network/',
		Messari: 'https://messari.io/asset/hashcash',
	},
	Blog: {
		HowBinaryOptionsWork: 'https://blog.hashcash.finance/how-binary-options-work/',
		HowFeeReclamationRebatesWork: 'https://blog.hashcash.finance/how-fee-reclamation-rebates-work/',
	},
};
