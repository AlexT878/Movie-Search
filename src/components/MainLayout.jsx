import Header from "./Header.jsx"
import { Outlet } from "react-router-dom";

export default function MainLayout({ 
  searchedMovie, 
  setSearchedMovie, 
  selectedGenre, 
  setSelectedGenre, 
  selectedSortOption, 
  setSelectedSortOption 
}) {
  return (
    <>
      <Header 
        searchedMovie={searchedMovie} 
        setSearchedMovie={setSearchedMovie} 
        selectedGenre={selectedGenre} 
        setSelectedGenre={setSelectedGenre}
        selectedSortOption={selectedSortOption}
        setSelectedSortOption={setSelectedSortOption}
      />
      <main className="main-content">
        <Outlet />
      </main>
    </>
  );
}