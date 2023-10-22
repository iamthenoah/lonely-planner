export type ApiResponse<T> = T & {
	html_attributions: any[]
	status: string
}

export type PlacesApiResponse = {
	predictions: Place[]
}

export type NearbyApiResponse = {
	results: NearestPlace[]
}

export type PlaceInfoApiResponse = {
	result: PlaceInfo
}

export type Place = {
	description: string
	matched_substrings: MatchedSubstring[]
	place_id: string
	reference: string
	structured_formatting: StructuredFormatting
	terms: Term[]
	types: string[]
}

export type MatchedSubstring = {
	length: number
	offset: number
}

export type StructuredFormatting = {
	main_text: string
	main_text_matched_substrings: MatchedSubstring[]
	secondary_text: string
}

export type Term = {
	offset: number
	value: string
}

export type AddressComponent = {
	long_name: string
	short_name: string
	types: string[]
}

export type Coordinates = {
	lat: number
	lng: number
}

export type Viewport = {
	northeast: Coordinates
	southwest: Coordinates
}

export type Geometry = {
	location: Coordinates
	viewport: Viewport
}

export type Photo = {
	height: number
	html_attributions: string[]
	photo_reference: string
	width: number
}

export type PlaceInfo = {
	// address_components: AddressComponent[]
	// adr_address: string
	// formatted_address: string
	// url: string
	// utc_offset: number
	// website: string
	geometry: Geometry
	icon: string
	icon_background_color: string
	icon_mask_base_uri: string
	name: string
	photos: Photo[]
	place_id: string
	reference: string
	scope: string
	types: string[]
	vicinity: string
}

export type NearestPlace = {
	geometry: Geometry
	icon: string
	icon_background_color: string
	icon_mask_base_uri: string
	name: string
	photos: Photo[]
	place_id: string
	reference: string
	scope: string
	types: string[]
	vicinity: string
}
