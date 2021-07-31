import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { render } from "react-dom";

import CanvasDraw from "react-canvas-draw";
import classNames from './App.css';

class InputBox extends Component {
    saveableCanvas = {

    }
    render() {
        return(       
            <div>
                <CanvasDraw 
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    hideInterface 
                    hideGrid
                />
                <div className={classNames.tools}>
                    <button
                        onClick={() => {
                        localStorage.setItem(
                            "savedDrawing",
                            this.saveableCanvas.getSaveData()
                        );
                        }}
                    >
                        Save
                    </button>
                    <button
                        onClick={() => {
                        this.saveableCanvas.clear();
                        }}
                    >
                        Clear
                    </button>
                    <button
                        onClick={() => {
                        this.saveableCanvas.undo();
                        }}
                    >
                        Undo
                    </button>    
                </div>
            </div>
        );
    }
}

export default InputBox;