import { useState } from "react";

const GoogleMap = () => {
    const [open, setOpen] = useState(false);
    return (
        <div
            className={`google-map relative overflow-hidden ${
                open ? "h-[500px]" : "h-[100px]"
            }`}
        >
            {!open && (
                <div
                    className="map-opener absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center bg-grey-darken bg-opacity-90"
                    onClick={() => setOpen(true)}
                >
                    <span className="text-sm font-medium uppercase tracking-widest">
                        Open Map
                    </span>
                </div>
            )}
            <iframe
                width="1920"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
