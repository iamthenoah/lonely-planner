export type Summary = {
	query: string
	queryType: string
	queryTime: number
	numResults: number
	offset: number
	totalResults: number
	fuzzyLevel: number
}

export type Category = {
	id: number
}

export type Classification = {
	code: string
	names: { nameLocale: string; name: string }[]
}

export type Poi = {
	name: string
	phone: string
	categorySet: Category[]
	url: string
	categories: string[]
	classifications: Classification[]
}

export type Address = {
	streetNumber: string
	streetName: string
	municipality: string
	countrySubdivision: string
	postalCode: string
	extendedPostalCode: string
	countryCode: string
	country: string
	countryCodeISO3: string
	freeformAddress: string
	localName: string
}

export type Position = {
	lat: number
	lon: number
}

export type Viewport = {
	topLeftPoint: Position
	btmRightPoint: Position
}

export type EntryPoint = {
	type: string
	position: Position
}

export type DataSource = {
	geometry: { id: string }
}

export type Result = {
	type: string
	id: string
	score: number
	info: string
	poi: Poi
	address: Address
	position: Position
	viewport: Viewport
	entryPoints: EntryPoint[]
	dataSources: DataSource
}

export type SearchResponse = {
	summary: Summary
	results: Result[]
}
