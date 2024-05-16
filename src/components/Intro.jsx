import React from "react";

function Intro(){
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Pawan Subedi</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Web and Application developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">I am a full stack web developer based on Nepal currently pursuing B.Sc.CSIT degree on TU, IOST, mostly interested on developing projects which facilitate me and users make life at ease than before.<br />My other interests include studying philosophy, quantum physics and strange people and places.I write my blogs over <a
             href="https://www.blogger.com/blog/posts/8841954045602804882?hl=en&tab=jj"
            target="_blank"
            className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
            rel="norefereer noopener"
            >here.</a></p>
        </div>
    )
}
export default Intro;