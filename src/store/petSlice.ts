import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pet } from '../types/pet';

// 임시로 사용할 초기 데이터
const petDummyData: Pet[] = [
  {
    id: '1',
    name: '홍삼',
    profile_img: '',
    type: '강아지',
    species: '믹스',
    is_neutering: true,
    birth_date: '2023-02-07',
    age: 1,
    weight: 5.9,
    is_diet_required: false,
    calories_needed_per_day: 587,
  },
  // {
  //   id: '2',
  //   name: '짜장',
  //   profile_img: '',
  //   type: '강아지',
  //   species: '믹스',
  //   is_neutering: true,
  //   birth_date: '2023-02-07',
  //   age: 1,
  //   weight: 5.9,
  //   is_diet_required: false,
  //   calories_needed_per_day: 587,
  // },
];

interface PetState {
  pets: Pet[];
  loading: boolean;
  error: string | null;
}

const initialState: PetState = {
  pets: petDummyData,
  loading: false,
  error: null,
};

const petSlice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setPets: (state, action: PayloadAction<Pet[]>) => {
      state.pets = action.payload;
    },
    updatePetName: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const pet = state.pets.find(p => p.id === action.payload.id);
      if (pet) {
        pet.name = action.payload.name;
      }
    },
  },
});

export const { setPets, updatePetName } = petSlice.actions;
export default petSlice.reducer;
