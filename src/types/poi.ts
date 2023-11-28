export const restaurant = ['cafe', 'bakery', 'bar', 'buffet', 'restaurant', 'food', 'meal_delivery', 'meal_takeaway']

export const entertainment = [
	'amusement_park',
	'aquarium',
	'bowling_alley',
	'casino',
	'movie_rental',
	'movie_theater',
	'night_club',
	'stadium',
	'tourist_attraction',
	'zoo'
]

export const explore = ['art_gallery', 'library', 'museum', 'park']

export const travel = [
	'airport',
	'bus_station',
	'car_rental',
	'taxi_stand',
	'train_station',
	'transit_station',
	'travel_agency'
]

export const services = [
	'atm',
	'bank',
	'courthouse',
	'embassy',
	'fire_station',
	'hospital',
	'insurance_agency',
	'local_government_office',
	'pharmacy',
	'police',
	'post_office',
	'real_estate_agency'
]

export const shopping = [
	'bicycle_store',
	'book_store',
	'car_dealer',
	'car_repair',
	'car_wash',
	'clothing_store',
	'convenience_store',
	'department_store',
	'electronics_store',
	'furniture_store',
	'gas_station',
	'hardware_store',
	'jewelry_store',
	'liquor_store',
	'locksmith',
	'pet_store',
	'shoe_store',
	'shopping_mall',
	'store'
]

export const education = ['primary_school', 'school', 'secondary_school', 'university']

export const fitness = ['gym', 'hair_care', 'spa']

export const others = [
	'cemetery',
	'church',
	'city_hall',
	'convenience_store',
	'laundry',
	'light_rail_station',
	'lodging',
	'mosque',
	'moving_company',
	'painter',
	'parking',
	'physiotherapist',
	'plumber',
	'roofing_contractor',
	'rv_park',
	'storage',
	'synagogue',
	'veterinary_care'
]

export const Pois = {
	restaurant,
	entertainment,
	explore,
	travel,
	services,
	shopping,
	education,
	fitness,
	others
}

export type PoiInterest = keyof typeof Pois
