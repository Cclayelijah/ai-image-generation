"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PROMPT_OPTIONS } from "../lib/constants";
import Option from "@/components/Option";
import { generateImages } from "../lib/generate-image";
import { ClipLoader } from "react-spinners";


export default function Create() {
  const [pieces, setPieces] = useState([]);
  const [selectedPieces, setSelectedPieces] = useState([]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const promptText = useRef(null);

  const appendPrompt = (word) => {
    promptText.current.value = promptText.current.value.concat(`, ${word}`)
  }
  const handleArtSelection = () => {
    //save a list (array) of selected pieces(id) of art in variable name selectedPieces, 
    //  - iterate through pieces and append all that have piece.selected = true
  }

  const handleGenerate = async (event) => {
    event.preventDefault();
    const input = promptText?.current?.value;
    setPieces([])
    setSelectedCount(0)
    setGenerated(true)
    setLoading(true)
    
    try {
      if (!input) {
        throw new Error("You must enter something in the prompt.")
      }
      
      console.log('generating images...')
      const response = await generateImages(input)

      if (response.error){
        throw new Error(response.error)
      }
      if (!response.ok) {
        throw new Error("Error " + response.status + ". Something went wrong generating the image.")
      }

      const data = await response.json()
      
      let works = []
      data.images.map((image, key) => {
        works.push({
          id: key,
          url: image.url,
          dimensions: "512x512",
          selected: false,
        })
      })
      console.log(works)
      setPieces(works)

    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
    
  };

  const togglePiece = (piece) => {
    let object = pieces[piece];
    object.selected = !object.selected;
    if (object.selected) {
      setSelectedCount(selectedCount + 1)
    } else {
      setSelectedCount(selectedCount - 1)
    }
    setPieces([...pieces.slice(0, piece), object, ...pieces.slice(piece + 1)]);
    
  };
  
  return (
    <div className="w-full bg-slate-100 dark:bg-slate-900">
      <div className="flex container-lg">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">
            <form
              onSubmit={handleGenerate}
              className="flex flex-col p-5 mx-auto xs:w-full sm:w-320 lg:w-480"
              
            >
              <h1 className="mb-4 text-2xl font-black">Enter Prompt</h1>
              <textarea
                name="text"
                id=""
                cols="30"
                rows="10"
                ref={promptText}
                className="w-full p-4 mb-4 rounded-lg resize-none outline-0"
              >
                Batman, cinematic lighting, high resolution 3D render
              </textarea>
              <div>
                <button
                  disabled={loading}
                  type="submit"
                  onClick={handleGenerate}
                  className="text-white btn btn-primary"
                  
                >
                  Generate
                </button>
              </div>
            </form>
            
            {generated && (
              <div className="flex items-start justify-center flex-2">
                <div className="box-border flex-1 p-5">
                  <h1 className="mb-4 text-2xl font-black">Select Art</h1>
                  <ClipLoader
                    color="#333333"
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  /> 
                    {pieces.length > 0 && <div className="box-border grid flex-1 grid-flow-col grid-rows-4 gap-4 sm:grid-rows-2 md:grid-rows-4 lg:grid-rows-2">
                    {pieces.map((piece, index) => {
                      return (
                        <div
                          key={index}
                          className="flex items-center justify-start min-h-40"
                        >
                          <div
                            className={`
                            ${
                              piece.selected
                                ? "outline outline-offset-2 border-slate-900 outline-4"
                                : ""
                            }`}
                          >
                            {generated ? (
                              <Image
                                width={300}
                                height={100}
                                src={piece?.url || ""}
                                alt="Generated Art"
                                className="w-full h-full rounded bg-slate-300 text-slate-900"
                                onClick={() => togglePiece(index)}
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-8 h-8 animate-spin"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    </div>}
                    <div>
                    <button
                      className="my-5 text-white btn btn-primary"
                      disabled={selectedCount > 0 ? false : true}
                      onClick={() => {handleArtSelection}}
                    >
                      Next
                    </button>
                    </div>
                </div>
                <div className="h-30"></div>
              </div>
            )}
          </div>
          <div className="flex-1 p-5" >
            {PROMPT_OPTIONS.map((option) => {
              return (
                <Option
                  key={option.title}
                  title={option.title}
                  values={option.values}
                  onAppend={appendPrompt}
                />
              );
            })}
          </div>
        </div>
        
      </div>
    </div>
  );
}
