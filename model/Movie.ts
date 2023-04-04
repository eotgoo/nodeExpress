import { Schema, model } from "mongoose";

interface IMovie {
  plot: String;
  genres: Array<String>;
  runtime: Number;
  rated: String;
  cast: Array<String>;
  num_mflix_comments: Number;
  poster: String;
  title: String;
  fullplot: String;
  countries: Array<String>;
  released: Date;
  directors: Array<String>;
  writers: Array<String>;
  awards: {
    wins: Number;
    nominations: Number;
    text: String;
  };
  lastupdated: Date;
  year: Number;
  imdb: {
    rating: Number;
    votes: Number;
    id: Number;
  };
  type: String;
  tomatoes: {
    viewer: {
      rating: Number;
      numReviews: Number;
      meter: Number;
    };
    lastUpdated: Date;
  };
}

const movieSchema = new Schema<IMovie>({});

const movie = model("Movie", movieSchema);

export default movie;
