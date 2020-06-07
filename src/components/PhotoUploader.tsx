import React from 'react';
import "../stylesheets/coverPhoto.scss"
import {Button} from "./Button";

export interface PhotoUploaderProps{
    changeFileCallback(event: React.ChangeEvent<HTMLInputElement>): void;
}

class PhotoUploader extends React.Component<PhotoUploaderProps> {
    public static defaultProps: Partial<PhotoUploaderProps> = {
        changeFileCallback: () => {}
    };

    // If to be invoked from other component, use this ref's fileUploadAction.
    public readonly inputReference: React.RefObject<any>;

    constructor(props: any) {
        super(props);
        this.inputReference = React.createRef();
    }

    fileUploadAction() {
        this.inputReference.current.click();
    }

    render() {
        return (
            <div className= "coverPhotoUploadButton">
                <input id="coverPhotoSelector"
                       type="file"
                       ref={this.inputReference}
                       style={{display: 'none'}}
                       accept="image/*"
                       onChange={this.props.changeFileCallback}
                />

                {/* Placeholder button */}
                <Button text = "Change Cover" icon = "camera-polaroid"  onClick={this.fileUploadAction.bind(this)}/>
            </div>
        );
    }
}


export default PhotoUploader;