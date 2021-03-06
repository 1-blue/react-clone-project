import React from "react";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";

// component
import Benner from "@src/components/Benner";
import MovieCarousels from "@src/components/MovieCarousels";
import Modal from "@src/components/Modal";
import HeadInfo from "@src/components/common/HeadInfo";

// atom
import { mainMovieState } from "@src/atoms";

// type
import { ITEM_KINDS } from "@src/types";

const Movies = () => {
  const { movieId } = useParams<{ movieId: string }>();
  const mainMovie = useRecoilValue(mainMovieState);

  return (
    <>
      <HeadInfo title="bleflix - movies" image={mainMovie?.backdrop_path || mainMovie?.poster_path} />

      <Benner item={mainMovie} />
      <MovieCarousels />

      {/*  TV 상세 모달 */}
      {movieId ? <Modal kinds={ITEM_KINDS.MOVIE} itemId={movieId} /> : null}
    </>
  );
};

export default Movies;
