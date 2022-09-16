import {useState,useEffect} from 'react';
import AddMovie from "../AddMovie/AddMovie.js";
import "./app.css";
import MovieList from '../MovieList/MovieList.js';
import Filtring from '../Filtring/Filtring.js';


const info = [ 
    {
      title: "The Godfather",
      img: "./thegodfather.jpg",
      description: "The Godfather 'Don' Vito Corleone is the head of the Corleone mafia family in New York. He is at the event of his daughter's wedding.",
      posterURL: "https://www.thegodfathersofficial.com/",
      rating: 9.2
    },
    {
      title: "The Shawshank",
      img: "./theshawshank.jpg",
      description: "The Shawshank Redemption has become a classic film - it's even IMDb's top-rated movie of all time - but did you know it almost had an entirely different cast behind those legendary bars?",
      posterURL: "https://shawshanktrail.com/",
      rating: 9.3
    },
    {
      title: "Braveheart",
      img: "./braveheart.jpg",
      description: "William Wallace is a Scottish rebel who leads an uprising against the cruel English ruler Edward the Longshanks, who wishes to inherit the crown of Scotland for himself. ",
      posterURL: "https://www.paramount.com/movies/braveheart",
      rating: 8.3
    },
    {
      title: "Schindlers list",
      img: "./image/schindlerslist.jpg",
      description: "Oskar Schindler is a vain and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi.",
      posterURL: "https://www.universalpictures.com/movies/schindlers-list",
      rating: 8.9
    },
    {
      title: "Titanic",
      img: "./image/titanic.jpg",
      description: "84 years later, a 100 year-old woman named Rose DeWitt Bukater tells the story to her granddaughter Lizzy Calvert.",
      posterURL: "https://www.paramount.com/movies/titanic",
      rating: 7.8
    },
    {
      title: "Jurassic Park",
      img: "./image/jurassicpark.jpg",
      description: "Huge advancements in scientific technology have enabled a mogul to create an island full of living dinosaurs.",
      posterURL: "http://www.jurassicworldmovie.co.uk/",
      rating: 8.1
    },
    {
      title: "Matrix",
      img: "./image/matrix.jpg",
      description: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. ",
      posterURL: "https://www.matrixresurrections.net/",
      rating: 8.7
    },
    {
      title: "The Dark Knight",
      img: "./image/thedarkknight.jpg",
      description: "Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney.",
      posterURL: "http://www.thedarkknightrises.com/",
      rating: 9.0
    },
    {
      title: "Star Wars",
      img: "./image/starwars.jpg",
      description: "The Imperial Forces, under orders from cruel Darth Vader, hold Princess Leia hostage in their efforts to quell the rebellion against the Galactic Empire.",
      posterURL: "https://www.starwars.com/films",
      rating: 8.6
    }
    ]

    function App(){
  
      const [list,setList] = useState(info);
      const [filtredList, setFiltredList] = useState(list);
      const [rate,setRate] = useState(0);
      const [keyword, setKeyword] = useState("");
    
      function adding(movie){
        if( movie.title && movie.img && movie.description && movie.posterURL ) {
          setList([...list, movie]);
        }
      }
    
    
      function filter(key, rate){
        setKeyword(key);
        setRate(rate);
        console.log(rate+"  "+key);
        setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
      }
    
      // useEffect(()=>{ filter(keyword,rate); },[list]);
    
    
      return(
       
        <div className="App">
           <Filtring filter={filter}/>
            
            <MovieList list={filtredList} />
            <AddMovie adding={adding} />
        </div>
          );
    }
    
    export default App;