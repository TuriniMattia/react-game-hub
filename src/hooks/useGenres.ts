import useData from "./useData";

export interface Genre {
    image_backgrounds: string | undefined;
    id: number;
    name: string;
    image_background: string;
}

function useGenres() {
    return useData<Genre>('/genres');
}

export default useGenres;    

