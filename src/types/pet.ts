interface Pet {
  id: string;
  name: string;
  profile_img: string;
  type: string;
  species: string;
  is_neutering: boolean;
  birth_date: string;
  age: number;
  weight: number;
  is_diet_required: boolean;
  calories_needed_per_day: number;
}

export type { Pet };
