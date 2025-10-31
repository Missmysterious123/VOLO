"use client";

import { APIProvider, Map as GoogleMap, AdvancedMarker } from "@vis.gl/react-google-maps";

export default function Map() {
  const position = { lat: 12.9716, lng: 77.5946 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
        <div className="w-full h-full bg-muted flex items-center justify-center rounded-xl">
            <div className="text-center p-4">
                <p className="font-semibold text-destructive">Map could not be loaded.</p>
                <p className="text-sm text-muted-foreground">Google Maps API key is missing.</p>
                <p className="text-xs text-muted-foreground mt-2">Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY in your .env.local file.</p>
            </div>
        </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
        <GoogleMap
          defaultCenter={position}
          defaultZoom={14}
          mapId="volo-elevate-map"
          style={{ width: '100%', height: '100%', borderRadius: 'var(--radius)' }}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        >
            <AdvancedMarker position={position} />
        </GoogleMap>
    </APIProvider>
  );
}
